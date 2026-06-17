/* global wp, wcpgVarGallery, jQuery */
(function ($) {
    'use strict';

    // ── Custom confirm modal ───────────────────────────────────────────────────
    // Injected once into <body>; reuses the same CSS classes as video-meta.css.

    function ensureModal() {
        if ($('#wcpg-vg-confirm-modal').length) return;
        $('body').append(
            '<div id="wcpg-vg-confirm-modal" class="wcpg-confirm-modal">'
            + '<div class="wcpg-confirm-backdrop"></div>'
            + '<div class="wcpg-confirm-dialog">'
            +   '<div class="wcpg-confirm-icon wcpg-confirm-icon-danger">'
            +     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
            +       '<polyline points="3 6 5 6 21 6"/>'
            +       '<path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/>'
            +       '<path d="M10 11v6"/><path d="M14 11v6"/>'
            +       '<path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>'
            +     '</svg>'
            +   '</div>'
            +   '<p class="wcpg-confirm-title"></p>'
            +   '<p class="wcpg-confirm-message"></p>'
            +   '<div class="wcpg-confirm-actions">'
            +     '<button type="button" class="wcpg-confirm-cancel"></button>'
            +     '<button type="button" class="wcpg-confirm-ok"></button>'
            +   '</div>'
            + '</div>'
            + '</div>'
        );
    }

    function showConfirm(opts) {
        ensureModal();
        var $modal = $('#wcpg-vg-confirm-modal');
        $modal.find('.wcpg-confirm-title').text(opts.title || '');
        $modal.find('.wcpg-confirm-message').text(opts.message || '');
        $modal.find('.wcpg-confirm-ok').text(opts.okLabel || 'Confirm');
        $modal.find('.wcpg-confirm-cancel').text(wcpgVarGallery.cancel || 'Cancel');
        $modal.addClass('wcpg-confirm-active');

        function cleanup() {
            $modal.removeClass('wcpg-confirm-active');
            $modal.find('.wcpg-confirm-ok').off('click.wcpgVG');
            $modal.find('.wcpg-confirm-cancel, .wcpg-confirm-backdrop').off('click.wcpgVG');
            $(document).off('keydown.wcpgVG');
        }

        $modal.find('.wcpg-confirm-ok').on('click.wcpgVG', function () {
            cleanup();
            if (opts.onOk) opts.onOk();
        });
        $modal.find('.wcpg-confirm-cancel, .wcpg-confirm-backdrop').on('click.wcpgVG', cleanup);
        $(document).on('keydown.wcpgVG', function (e) { if (e.key === 'Escape') cleanup(); });
    }

    // ── Position gallery field below .form-flex-box ────────────────────────────
    // WooCommerce renders woocommerce_product_after_variable_attributes at the
    // very bottom of the variation panel. We move our field right after
    // .form-flex-box (the variation image + SKU row) via JS.

    function positionField($wrap) {
        if ($wrap.data('wcpg-positioned')) return;
        $wrap.data('wcpg-positioned', true);

        var $panel   = $wrap.closest('.woocommerce_variable_attributes.wc-metabox-content');
        var $flexBox = $panel.find('.form-flex-box').first();
        if ($flexBox.length) {
            $flexBox.after($wrap);
        }
    }

    // ── Gallery init for one variation panel ───────────────────────────────────

    function initVariationGallery($wrap) {
        if ($wrap.data('wcpg-vg-init')) return;
        $wrap.data('wcpg-vg-init', true);

        var $list      = $wrap.find('.wcpg-vg-images');
        var $input     = $wrap.find('.wcpg-var-gallery-ids');
        var $addBtn    = $wrap.find('.wcpg-vg-add-btn');
        var $editBtn   = $wrap.find('.wcpg-vg-btn-edit');
        var $removeAll = $wrap.find('.wcpg-vg-btn-remove-all');

        // ── Sortable ───────────────────────────────────────────────────────────
        // appendTo:'body' + helper:'clone' escape any overflow:hidden on ancestor
        // containers (WooCommerce's .wc-metabox-content clips the drag helper
        // otherwise, making drag appear broken after DOM repositioning).
        $list.sortable({
            items:              '.wcpg-vg-item',
            cancel:             '.wcpg-vg-item-remove',
            cursor:             'move',
            appendTo:           'body',
            helper:             'clone',
            scrollSensitivity:  40,
            forcePlaceholderSize: true,
            placeholder:        'wcpg-vg-placeholder',
            update: function () { afterChange($list, $input, $editBtn, $removeAll); },
        });

        // ── Add images ─────────────────────────────────────────────────────────
        $addBtn.on('click', function (e) {
            e.preventDefault();
            openFrame(null, $list, $input, $editBtn, $removeAll);
        });

        // ── Edit gallery (shows ONLY the current images) ───────────────────────
        $editBtn.on('click', function (e) {
            e.preventDefault();
            openFrame(getCurrentIds($input), $list, $input, $editBtn, $removeAll);
        });

        // ── Remove all ─────────────────────────────────────────────────────────
        $removeAll.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            showConfirm({
                title:   wcpgVarGallery.removeAllTitle,
                message: wcpgVarGallery.removeAllMsg,
                okLabel: wcpgVarGallery.removeAllBtn,
                onOk: function () {
                    $list.empty();
                    afterChange($list, $input, $editBtn, $removeAll);
                },
            });
        });

        // ── Remove single image ────────────────────────────────────────────────
        $list.on('click', '.wcpg-vg-item-remove', function (e) {
            e.preventDefault();
            $(this).closest('.wcpg-vg-item').remove();
            afterChange($list, $input, $editBtn, $removeAll);
        });
    }

    /**
     * Open wp.media frame.
     *
     * Add mode  (editIds = null): standard library picker, skips duplicates.
     * Edit mode (editIds = [...]) : library is filtered server-side via the
     *   ajax_query_attachments_args PHP filter using wcpg_ids — the popup shows
     *   ONLY the currently saved images so the user can update the selection.
     */
    function openFrame(editIds, $list, $input, $editBtn, $removeAll) {
        var isEdit = editIds && editIds.length > 0;

        // In edit mode pass wcpg_ids so our PHP filter restricts the query to
        // those attachment IDs only (post__in + orderby=post__in).
        var libraryConfig = { type: 'image' };
        if (isEdit) {
            libraryConfig.wcpg_ids = editIds.join(',');
            libraryConfig.orderby  = 'post__in';
        }

        var frame = wp.media({
            title:    isEdit ? wcpgVarGallery.editGallery : wcpgVarGallery.selectImages,
            button:   { text: isEdit ? wcpgVarGallery.updateGallery : wcpgVarGallery.addToGallery },
            multiple: true,
            library:  libraryConfig,
        });

        // Pre-tick items in the selection panel
        frame.on('open', function () {
            var selection = frame.state().get('selection');
            (isEdit ? editIds : getCurrentIds($input)).forEach(function (id) {
                var att = wp.media.attachment(id);
                att.fetch();
                selection.add(att);
            });
        });

        frame.on('select', function () {
            var attachments = frame.state().get('selection').toJSON();

            if (isEdit) {
                $list.empty();  // replace entire gallery in edit mode
            }

            attachments.forEach(function (att) {
                // Skip duplicates when adding
                if (!isEdit && $list.find('[data-id="' + att.id + '"]').length) return;
                var thumb = att.sizes && att.sizes.thumbnail ? att.sizes.thumbnail.url : att.url;
                appendItem($list, att.id, thumb);
            });

            afterChange($list, $input, $editBtn, $removeAll);
        });

        frame.open();
    }

    function appendItem($list, id, thumbUrl) {
        var removeSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">'
            + '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';
        $list.append(
            '<li class="wcpg-vg-item" data-id="' + parseInt(id, 10) + '">'
            + '<img src="' + thumbUrl + '" alt="">'
            + '<button type="button" class="wcpg-vg-item-remove" title="' + wcpgVarGallery.removeTitle + '">'
            + removeSvg + '</button>'
            + '</li>'
        );
    }

    function getCurrentIds($input) {
        return $input.val().split(',').filter(Boolean).map(Number);
    }

    function afterChange($list, $input, $editBtn, $removeAll) {
        // Sync hidden input
        var ids = [];
        $list.find('.wcpg-vg-item').each(function () { ids.push($(this).data('id')); });
        $input.val(ids.join(','));

        // Trigger change so WooCommerce enables Save / Cancel buttons
        $input.trigger('change');

        // Toggle image list visibility
        var hasImages = ids.length > 0;
        $list.toggleClass('wcpg-vg-hidden', !hasImages);
        $editBtn.toggleClass('wcpg-vg-hidden', !hasImages);
        $removeAll.toggleClass('wcpg-vg-hidden', !hasImages);
    }

    // ── Bootstrap ──────────────────────────────────────────────────────────────

    function run() {
        $('.wcpg-var-gallery-wrap').each(function () {
            var $wrap = $(this);
            positionField($wrap);
            initVariationGallery($wrap);
        });
    }

    $(run);

    $(document).on('woocommerce_variations_added woocommerce_variations_loaded', run);

}(jQuery));
