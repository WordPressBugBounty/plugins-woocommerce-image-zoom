/**
 * video-meta.js — WPBean PGS product video metabox.
 * Accordion UI, drag-to-reorder, duplicate, delete with confirm,
 * YouTube/Vimeo thumbnail auto-fetch, WP media pickers.
 */
(function ($) {
    "use strict";

    var l10n = (window.wcpgVideoMeta && window.wcpgVideoMeta.l10n) || {};
    var $list;
    var dragSrc = null;

    // ── Free-plan video limit: toggle the pro notice and add button ───────────
    function checkVideoLimit() {
        if (window.wcpgVideoMeta && window.wcpgVideoMeta.isPremium) return;
        var $notice = $("#wcpg-pro-limit-notice");
        if (!$notice.length) return;
        var count = $list.find(".wcpg-video-item").length;
        if (count >= 1) {
            $notice.show();
            $("#wcpg-add-video").hide();
        } else {
            $notice.hide();
            $("#wcpg-add-video").show();
        }
    }

    function pulseProNotice() {
        var $notice = $("#wcpg-pro-limit-notice");
        $notice.show().addClass("wcpg-pro-notice-pulse");
        $("#wcpg-add-video").hide();
        setTimeout(function () {
            $notice.removeClass("wcpg-pro-notice-pulse");
        }, 500);
        if ($notice[0]) {
            $notice[0].scrollIntoView({ behavior: "smooth", block: "nearest" });
        }
    }

    // ── Re-index all items so name attributes stay sequential ─────────────────
    function reindex() {
        $list.find(".wcpg-video-item").each(function (i) {
            $(this).attr("data-idx", i);
            $(this)
                .find("[name]")
                .each(function () {
                    this.name = this.name.replace(
                        /wcpg_videos\[\d+\]/,
                        "wcpg_videos[" + i + "]",
                    );
                });
        });
        window.wcpgVideoIndex = $list.find(".wcpg-video-item").length;
    }

    // ── Update the accordion header (badge + title) ────────────────────────────
    function updateHeader($item) {
        var type = $item.find(".wcpg-video-type").val();
        var url = $item.find(".wcpg-video-url").val().trim();
        var title = $item.find(".wcpg-video-title").val().trim();
        var filename = $item.find(".wcpg-choose-video span").text().trim();

        var typeLabels = {
            youtube: "YouTube",
            vimeo: "Vimeo",
            upload: "Video File",
        };
        $item
            .find(".wcpg-type-badge")
            .text(typeLabels[type] || type)
            .removeClass("wcpg-type-youtube wcpg-type-vimeo wcpg-type-upload")
            .addClass("wcpg-type-" + type);

        var display = title || url || filename || "";
        var $ht = $item.find(".wcpg-header-title");
        if (display) {
            $ht.text(display).removeClass("wcpg-header-title-empty");
        } else {
            $ht.text("New Video").addClass("wcpg-header-title-empty");
        }
    }

    // ── Set thumbnail preview (body + header) ──────────────────────────────────
    function setThumbPreview($item, url) {
        var emptyBodyHtml =
            '<div class="wcpg-thumb-empty">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' +
            '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
            '<circle cx="8.5" cy="8.5" r="1.5"/>' +
            '<polyline points="21 15 16 10 5 21"/>' +
            "</svg></div>";

        var emptyHeaderHtml =
            '<div class="wcpg-header-thumb-icon">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">' +
            '<polygon points="23 7 16 12 23 17 23 7"/>' +
            '<rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>' +
            "</svg></div>";

        if (url) {
            $item
                .find(".wcpg-thumb-preview")
                .html('<img src="' + url + '" alt="">');
            $item
                .find(".wcpg-header-thumb")
                .html('<img src="' + url + '" alt="">');
            $item.find(".wcpg-remove-thumb").show();
        } else {
            $item.find(".wcpg-thumb-preview").html(emptyBodyHtml);
            $item.find(".wcpg-header-thumb").html(emptyHeaderHtml);
            $item.find(".wcpg-remove-thumb").hide();
        }
    }

    // ── YouTube thumbnail auto-fetch ───────────────────────────────────────────
    function fetchYoutubeThumbnail($item) {
        var url = $item.find(".wcpg-video-url").val().trim();
        var match = url.match(
            /(?:youtube\.com\/(?:watch\?.*v=|shorts\/|embed\/|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
        );
        if (!match) return;
        var thumbUrl =
            "https://img.youtube.com/vi/" + match[1] + "/mqdefault.jpg";
        if (!$item.find(".wcpg-thumb-id").val()) {
            $item.find(".wcpg-thumb-url").val(thumbUrl);
            setThumbPreview($item, thumbUrl);
        }
    }

    // ── Vimeo thumbnail auto-fetch (oEmbed) ────────────────────────────────────
    function fetchVimeoThumbnail($item) {
        var url = $item.find(".wcpg-video-url").val().trim();
        if (!url || url.indexOf("vimeo.com") === -1) return;
        if ($item.find(".wcpg-thumb-id").val()) return;

        $.getJSON(
            "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(url),
            function (data) {
                var thumbUrl = (data.thumbnail_url || "").replace(
                    /_\d+$/,
                    "_640",
                );
                if (thumbUrl) {
                    $item.find(".wcpg-thumb-url").val(thumbUrl);
                    setThumbPreview($item, thumbUrl);
                }
            },
        );
    }

    // ── Toggle field visibility by type ────────────────────────────────────────
    function updateTypeVisibility($item) {
        var type = $item.find(".wcpg-video-type").val();
        $item.find(".wcpg-field-url").toggle(type !== "upload");
        $item.find(".wcpg-field-upload").toggle(type === "upload");
        if (type !== "youtube" && type !== "vimeo") {
            if (!$item.find(".wcpg-thumb-id").val()) {
                $item.find(".wcpg-thumb-url").val("");
            }
        }
    }

    // ── Custom confirm modal ───────────────────────────────────────────────────
    function showConfirm(opts) {
        // opts: { title, message, okLabel, okStyle ('danger'|'blue'), onOk }
        var $modal = $("#wcpg-confirm-modal");

        var deleteSvg =
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<polyline points="3 6 5 6 21 6"/>' +
            '<path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>' +
            '<path d="M10 11v6"/><path d="M14 11v6"/>' +
            '<path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>' +
            "</svg>";

        var copySvg =
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
            '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>' +
            '<path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>' +
            "</svg>";

        var iconSvg = opts.okStyle === "blue" ? copySvg : deleteSvg;
        var iconClass =
            "wcpg-confirm-icon " +
            (opts.okStyle === "blue"
                ? "wcpg-confirm-icon-info"
                : "wcpg-confirm-icon-danger");
        var okClass =
            "wcpg-confirm-ok" +
            (opts.okStyle === "blue" ? " wcpg-confirm-ok-blue" : "");

        $modal
            .find(".wcpg-confirm-icon")
            .html(iconSvg)
            .attr("class", iconClass);
        $modal.find(".wcpg-confirm-title").text(opts.title || "Are you sure?");
        $modal.find(".wcpg-confirm-message").text(opts.message || "");
        $modal
            .find(".wcpg-confirm-ok")
            .text(opts.okLabel || "Confirm")
            .attr("class", okClass);

        $modal.addClass("wcpg-confirm-active");

        function cleanup() {
            $modal.removeClass("wcpg-confirm-active");
            $modal.find(".wcpg-confirm-ok").off("click.wcpgCfm");
            $modal
                .find(".wcpg-confirm-cancel, .wcpg-confirm-backdrop")
                .off("click.wcpgCfm");
            $(document).off("keydown.wcpgCfm");
        }

        $modal.find(".wcpg-confirm-ok").on("click.wcpgCfm", function () {
            cleanup();
            opts.onOk && opts.onOk();
        });
        $modal
            .find(".wcpg-confirm-cancel, .wcpg-confirm-backdrop")
            .on("click.wcpgCfm", cleanup);
        $(document).on("keydown.wcpgCfm", function (e) {
            if (e.key === "Escape") cleanup();
        });
    }

    // ── Add new row ────────────────────────────────────────────────────────────
    function addRow() {
        if (!(window.wcpgVideoMeta && window.wcpgVideoMeta.isPremium)) {
            if ($list.find(".wcpg-video-item").length >= 1) {
                pulseProNotice();
                return;
            }
        }
        var idx = window.wcpgVideoIndex || 0;
        var tpl = $("#wcpg-video-row-tpl").html();
        if (!tpl) return;

        var $item = $(tpl.replace(/__IDX__/g, idx));
        $item.addClass("wcpg-item-open");
        $list.append($item);
        window.wcpgVideoIndex = idx + 1;

        updateTypeVisibility($item);
        updateHeader($item);
        $item[0].scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // ── Duplicate row ──────────────────────────────────────────────────────────
    function duplicateRow($item) {
        if (!(window.wcpgVideoMeta && window.wcpgVideoMeta.isPremium)) {
            if ($list.find(".wcpg-video-item").length >= 1) {
                pulseProNotice();
                return;
            }
        }
        showConfirm({
            title: "Duplicate Video",
            message: "A copy of this video item will be added below.",
            okLabel: "Duplicate",
            okStyle: "blue",
            onOk: function () {
                var $clone = $item.clone(false).addClass("wcpg-item-open");
                $item.after($clone);
                reindex();
                updateHeader($clone);
                $clone[0].scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                });
            },
        });
    }

    // ── Delete row ─────────────────────────────────────────────────────────────
    function deleteRow($item) {
        showConfirm({
            title: "Delete Video",
            message:
                "This video will be removed from the gallery. This action cannot be undone.",
            okLabel: "Delete",
            okStyle: "danger",
            onOk: function () {
                $item.css({
                    transition: "opacity 0.18s ease, transform 0.18s ease",
                    opacity: 0,
                    transform: "scale(0.96)",
                });
                setTimeout(function () {
                    $item.remove();
                    reindex();
                    checkVideoLimit();
                }, 200);
            },
        });
    }

    // ── WP Media: pick thumbnail ───────────────────────────────────────────────
    function openThumbPicker($item) {
        var frame = wp.media({
            title: l10n.chooseThumb || "Choose Thumbnail",
            button: { text: l10n.useThumb || "Use this image" },
            multiple: false,
            library: { type: "image" },
        });
        frame.on("select", function () {
            var att = frame.state().get("selection").first().toJSON();
            $item.find(".wcpg-thumb-id").val(att.id);
            $item.find(".wcpg-thumb-url").val("");
            var url =
                att.sizes && att.sizes.thumbnail
                    ? att.sizes.thumbnail.url
                    : att.url;
            setThumbPreview($item, url);
        });
        frame.open();
    }

    // ── WP Media: pick video file ──────────────────────────────────────────────
    function openVideoPicker($item) {
        var frame = wp.media({
            title: l10n.chooseVideo || "Choose Video File",
            button: { text: l10n.useVideo || "Use this video" },
            multiple: false,
            library: { type: "video" },
        });
        frame.on("select", function () {
            var att = frame.state().get("selection").first().toJSON();
            var filename = att.filename || att.url.split("/").pop();
            $item.find(".wcpg-attachment-id").val(att.id);
            $item.find(".wcpg-choose-video span").text(filename);
            if (!$item.find(".wcpg-thumb-id").val()) {
                var poster =
                    att.image && att.image.src ? att.image.src : att.icon || "";
                if (poster && poster.indexOf("video") === -1) {
                    $item.find(".wcpg-thumb-url").val(poster);
                    setThumbPreview($item, poster);
                }
            }
            updateHeader($item);
        });
        frame.open();
    }

    // ── Drag-and-drop reorder ──────────────────────────────────────────────────
    function initDragDrop() {
        var $indicator = null;
        var indAnchor = null; // .wcpg-video-item the indicator sits next to
        var indAfter = false; // true → insert after anchor, false → before

        function placeIndicator(el, after) {
            if (el === indAnchor && after === indAfter) return;
            indAnchor = el;
            indAfter = after;
            if ($indicator) $indicator.remove();
            // Create fresh element each time so the CSS entry animation replays
            $indicator = $(
                '<div class="wcpg-drop-indicator" aria-hidden="true"></div>',
            );
            if (after) {
                $indicator.insertAfter(el);
            } else {
                $indicator.insertBefore(el);
            }
        }

        function removeIndicator() {
            if ($indicator) {
                $indicator.remove();
                $indicator = null;
            }
            indAnchor = null;
        }

        function commitDrop() {
            if (!dragSrc || !indAnchor) return;
            var $src = $(dragSrc);
            var anchor = indAnchor;
            var after = indAfter;
            removeIndicator();
            if (after) {
                $src.insertAfter(anchor);
            } else {
                $src.insertBefore(anchor);
            }
            reindex();
            $src.addClass("wcpg-item-dropped");
            setTimeout(function () {
                $src.removeClass("wcpg-item-dropped");
            }, 320);
        }

        // dragstart fires on the handle (draggable="true" is on the handle)
        $list.on("dragstart", ".wcpg-drag-handle", function (e) {
            var $item = $(this).closest(".wcpg-video-item");
            dragSrc = $item[0];
            e.originalEvent.dataTransfer.effectAllowed = "move";
            e.originalEvent.dataTransfer.setData("text/plain", "");
            try {
                e.originalEvent.dataTransfer.setDragImage($item[0], 24, 24);
            } catch (_) {}
            // Delay so the ghost captures the normal look, not the dragging style
            setTimeout(function () {
                $item.addClass("wcpg-dragging");
            }, 0);
        });

        // List-level dragover: always call preventDefault so the browser allows
        // drops even when the cursor is over the indicator (not an item).
        $list.on("dragover", function (e) {
            if (!dragSrc) return;
            e.preventDefault();
            e.originalEvent.dataTransfer.dropEffect = "move";
        });

        // Item-level dragover: update the indicator position based on cursor Y
        $list.on("dragover", ".wcpg-video-item", function (e) {
            if (!dragSrc || this === dragSrc) return;
            var rect = this.getBoundingClientRect();
            var after = e.originalEvent.clientY > rect.top + rect.height / 2;
            placeIndicator(this, after);
        });

        // Item-level drop (cursor was directly over an item when released)
        $list.on("drop", ".wcpg-video-item", function (e) {
            e.preventDefault();
            e.stopPropagation(); // prevent the list-level handler from also firing
            if (!dragSrc || this === dragSrc) return;
            // If the cursor is over an item but no indicator was placed yet,
            // fall back to the item itself as anchor
            if (!indAnchor) {
                var rect = this.getBoundingClientRect();
                indAnchor = this;
                indAfter = e.originalEvent.clientY > rect.top + rect.height / 2;
            }
            commitDrop();
        });

        // List-level drop: catches releases over the indicator or list gaps
        $list.on("drop", function (e) {
            e.preventDefault();
            if (!dragSrc || !indAnchor) return;
            commitDrop();
        });

        $list.on("dragend", ".wcpg-drag-handle", function () {
            if (dragSrc) $(dragSrc).removeClass("wcpg-dragging");
            removeIndicator();
            dragSrc = null;
        });
    }

    // ── DOM Ready ──────────────────────────────────────────────────────────────
    $(function () {
        $list = $("#wcpg-video-list");

        // Initialise existing rows
        $list.find(".wcpg-video-item").each(function () {
            updateTypeVisibility($(this));
            updateHeader($(this));
        });

        initDragDrop();
        checkVideoLimit();

        // Add video
        $(document).on("click", "#wcpg-add-video", addRow);

        // Accordion toggle — click anywhere in header except action buttons/handle
        $(document).on("click", ".wcpg-item-header", function (e) {
            if (
                $(e.target).closest(
                    ".wcpg-duplicate-btn, .wcpg-delete-btn, .wcpg-drag-handle",
                ).length
            )
                return;
            $(this).closest(".wcpg-video-item").toggleClass("wcpg-item-open");
        });

        // Delete
        $(document).on("click", ".wcpg-delete-btn", function (e) {
            e.stopPropagation();
            deleteRow($(this).closest(".wcpg-video-item"));
        });

        // Duplicate
        $(document).on("click", ".wcpg-duplicate-btn", function (e) {
            e.stopPropagation();
            duplicateRow($(this).closest(".wcpg-video-item"));
        });

        // Type change
        $(document).on("change", ".wcpg-video-type", function () {
            var $item = $(this).closest(".wcpg-video-item");
            updateTypeVisibility($item);
            updateHeader($item);
            var type = $(this).val();
            if (type === "youtube") fetchYoutubeThumbnail($item);
            if (type === "vimeo") fetchVimeoThumbnail($item);
        });

        // URL blur — update header + fetch thumbnail
        $(document).on("blur", ".wcpg-video-url", function () {
            var $item = $(this).closest(".wcpg-video-item");
            updateHeader($item);
            var type = $item.find(".wcpg-video-type").val();
            if (type === "youtube") fetchYoutubeThumbnail($item);
            if (type === "vimeo") fetchVimeoThumbnail($item);
        });

        // Title input — live header update
        $(document).on("input", ".wcpg-video-title", function () {
            updateHeader($(this).closest(".wcpg-video-item"));
        });

        // Choose thumbnail
        $(document).on("click", ".wcpg-choose-thumb", function (e) {
            e.preventDefault();
            openThumbPicker($(this).closest(".wcpg-video-item"));
        });

        // Remove thumbnail
        $(document).on("click", ".wcpg-remove-thumb", function (e) {
            e.preventDefault();
            var $item = $(this).closest(".wcpg-video-item");
            $item.find(".wcpg-thumb-id").val("");
            $item.find(".wcpg-thumb-url").val("");
            setThumbPreview($item, "");
            var type = $item.find(".wcpg-video-type").val();
            if (type === "youtube") fetchYoutubeThumbnail($item);
            if (type === "vimeo") fetchVimeoThumbnail($item);
        });

        // Choose video file
        $(document).on("click", ".wcpg-choose-video", function (e) {
            e.preventDefault();
            openVideoPicker($(this).closest(".wcpg-video-item"));
        });

        // ── Attachment-level video picker (in the WP media modal sidebar) ────
        // The combined field rendered by WPBean_PGS_Attachment_Video::add_fields()
        // has a text input (.wcpg-att-vid-url) + hidden ID (.wcpg-att-vid-id) +
        // upload button (.wcpg-att-vid-pick) + remove link (.wcpg-att-vid-remove).

        // Select video file
        $(document).on("click", ".wcpg-att-vid-pick", function () {
            var $btn = $(this);
            var $wrap = $btn.closest(".wcpg-att-field");
            var $url = $wrap.find(".wcpg-att-vid-url");
            var $id = $wrap.find(".wcpg-att-vid-id");
            var $rm = $wrap.siblings(".wcpg-att-vid-remove");

            var frame = wp.media({
                title: l10n.chooseVideo || "Choose Video File",
                button: { text: l10n.useVideo || "Use this video" },
                multiple: false,
                library: { type: "video" },
            });

            frame.on("select", function () {
                var att = frame.state().get("selection").first().toJSON();
                var imgId = parseInt($btn.data("post-id"), 10);

                $id.val(att.id);
                $url.val(att.url).attr("data-is-file", "1");
                $rm.show();

                // Persist to the DB immediately via a direct AJAX call to
                // save-attachment-compat.  We cannot rely on $form.trigger("submit")
                // here: opening the nested video-picker frame can cause WordPress to
                // re-render the outer frame's attachment details, detaching the
                // original $url DOM node from the live document, which means
                // $url.closest("form") returns an empty set and the submit never
                // fires.  Calling $.post() directly with the attachment model's own
                // update nonce is both simpler and guaranteed to work.
                function doSave(nonce) {
                    var data = {
                        action: "save-attachment-compat",
                        id: imgId,
                        nonce: nonce,
                    };
                    data["attachments[" + imgId + "][wcpg_image_video_url]"] =
                        att.url;
                    data["attachments[" + imgId + "][wcpg_image_video_id]"] =
                        att.id;
                    $.post(window.ajaxurl, data);
                }

                var imgModel = wp.media.attachment(imgId);
                var nonces = imgModel.get("nonces");

                if (nonces && nonces.update) {
                    doSave(nonces.update);
                } else {
                    // Model not yet fully loaded — fetch first, then save.
                    imgModel.fetch({
                        success: function () {
                            var n = imgModel.get("nonces");
                            if (n && n.update) {
                                doSave(n.update);
                            }
                        },
                    });
                }
            });

            frame.open();
        });

        // Typing in the URL input clears any previously chosen file
        $(document).on("input", ".wcpg-att-vid-url", function () {
            var $input = $(this);
            var $wrap = $input.closest(".wcpg-att-field");
            var $rm = $wrap.siblings(".wcpg-att-vid-remove");

            if ($input.attr("data-is-file")) {
                $input.removeAttr("data-is-file");
                $wrap.find(".wcpg-att-vid-id").val("");
            }
            $rm.toggle($input.val().trim().length > 0);
        });

        // Remove / clear video
        $(document).on("click", ".wcpg-att-vid-remove", function (e) {
            e.preventDefault();
            var $rm = $(this);
            var $wrap = $rm.siblings(".wcpg-att-field");
            if (!$wrap.length)
                $wrap = $rm
                    .closest("tr, .compat-item, .wcpg-att-field-wrap")
                    .find(".wcpg-att-field");

            $wrap.find(".wcpg-att-vid-url").val("").removeAttr("data-is-file");
            $wrap.find(".wcpg-att-vid-id").val("");
            $rm.hide();

            // Persist the cleared state immediately via direct AJAX.
            var imgId = parseInt(
                $wrap.find(".wcpg-att-vid-pick").data("post-id"),
                10,
            );
            var imgModel = imgId ? wp.media.attachment(imgId) : null;
            var nonces = imgModel && imgModel.get("nonces");

            if (nonces && nonces.update) {
                var data = {
                    action: "save-attachment-compat",
                    id: imgId,
                    nonce: nonces.update,
                };
                data["attachments[" + imgId + "][wcpg_image_video_url]"] = "";
                data["attachments[" + imgId + "][wcpg_image_video_id]"] = "";
                $.post(window.ajaxurl, data);
            } else if ($wrap.closest("form").length) {
                // Fallback: trigger the compat form submit (works when not inside
                // a nested frame and the form element is still in the live DOM).
                $wrap.closest("form").trigger("submit");
            }
        });

        // ── Gallery image edit buttons ────────────────────────────────────────
        // Adds a small "edit" icon to every product gallery thumbnail.
        // Clicking it opens the WP media modal scoped to that single attachment
        // so the user can edit its fields (alt, caption, Gallery Video) directly.

        var videoAttIds = window.wcpgVideoAttIds || [];

        var editBtnSvg =
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
            'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />' +
            '<path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />' +
            "</svg>";

        function addGalleryEditBtn($li) {
            if ($li.find(".wcpg-gal-edit-btn").length) return;
            var attId = parseInt($li.data("attachment_id"), 10);
            if (!attId) return;

            var $btn = $("<button>", {
                type: "button",
                class: "wcpg-gal-edit-btn",
                title: "Edit attachment / set video",
            })
                .attr("data-att-id", attId)
                .html(editBtnSvg);

            $li.append($btn);

            // Badge: small play icon on thumbnails that already have a linked video
            if (videoAttIds.indexOf(attId) !== -1) {
                $li.addClass("wcpg-gal-has-video");
            }
        }

        // Init existing gallery images
        $("#product_images_container .product_images .image").each(function () {
            addGalleryEditBtn($(this));
        });

        // Watch for images added dynamically via the WC media picker
        var galRoot = document.getElementById("product_images_container");
        if (galRoot && window.MutationObserver) {
            new MutationObserver(function (mutations) {
                mutations.forEach(function (m) {
                    m.addedNodes.forEach(function (node) {
                        var $node = $(node);
                        if ($node.hasClass("image")) {
                            addGalleryEditBtn($node);
                        } else {
                            // Subtree: child nodes added inside the container
                            $node.find(".image").each(function () {
                                addGalleryEditBtn($(this));
                            });
                        }
                    });
                });
            }).observe(galRoot, { childList: true, subtree: true });
        }

        // ── Edit button click ─────────────────────────────────────────────────
        $(document).on("click", ".wcpg-gal-edit-btn", function (e) {
            e.preventDefault();
            e.stopPropagation();

            var attId = parseInt($(this).attr("data-att-id"), 10);
            var $li = $(this).closest(".image");

            // Open WP media library filtered to this single attachment so the
            // user sees only the image they want to edit with its details panel.
            var frame = wp.media({
                title: "Edit image / set gallery video",
                button: { text: "Done" },
                multiple: false,
                library: { type: "image", post__in: [attId] },
            });

            // Pre-select the attachment once the frame is ready.
            // We fetch inside the 'open' handler so the data is guaranteed to
            // be available before we call selection.reset().
            frame.on("open", function () {
                var selection = frame.state().get("selection");
                var attachment = wp.media.attachment(attId);
                attachment.fetch({
                    success: function () {
                        selection.reset([attachment]);
                    },
                    error: function () {
                        // Fallback: try without waiting for fetch
                        selection.reset([attachment]);
                    },
                });
            });

            // After closing, mark/unmark the video badge based on whether the
            // compat fields contained a video value when the frame was visible.
            frame.on("close", function () {
                // The compat fields are removed from the DOM on close, so we
                // read them while they still exist (before jQuery removes them).
                var $fields = frame.$el.find(
                    ".compat-field-wcpg_image_video_url",
                );
                var hasVid =
                    $fields.find(".wcpg-att-vid-url").val().trim() ||
                    parseInt($fields.find(".wcpg-att-vid-id").val(), 10) > 0;
                if (hasVid) {
                    $li.addClass("wcpg-gal-has-video");
                    if (videoAttIds.indexOf(attId) === -1)
                        videoAttIds.push(attId);
                }
            });

            frame.open();
        });
    });
})(jQuery);
