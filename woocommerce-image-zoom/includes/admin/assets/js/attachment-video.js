/**
 * attachment-video.js — media library page only.
 * Handles the combined Gallery Video field injected by WPBean_PGS_Attachment_Video
 * into the WP attachment edit panel (alt text / caption area).
 *
 * On the product edit screen this is handled by video-meta.js instead.
 */
(function ($) {
    "use strict";

    var l10n = window.wcpgAttVideo || {};

    function findRow($el) {
        return $el.closest("tr, .compat-item, .wcpg-att-field-wrap");
    }

    // ── Select video file ──────────────────────────────────────────────────────
    $(document).on("click", ".wcpg-att-vid-pick", function () {
        var $btn = $(this);
        var $wrap = $btn.closest(".wcpg-att-field");
        var $url = $wrap.find(".wcpg-att-vid-url");
        var $id = $wrap.find(".wcpg-att-vid-id");
        var $rm = $wrap.siblings(".wcpg-att-vid-remove");
        if (!$rm.length) $rm = findRow($wrap).find(".wcpg-att-vid-remove");

        var frame = wp.media({
            title: l10n.chooseVideo || "Choose Video File",
            button: { text: l10n.useVideo || "Use this video" },
            multiple: false,
            library: { type: "video" },
        });

        frame.on("select", function () {
            var att = frame.state().get("selection").first().toJSON();
            var filename = att.filename || att.url.split("/").pop();
            $id.val(att.id);
            $url.val(filename).attr("data-is-file", "1");
            $rm.show();
        });

        frame.open();
    });

    // ── Manual URL typing clears the file selection ────────────────────────────
    $(document).on("input", ".wcpg-att-vid-url", function () {
        var $input = $(this);
        var $wrap = $input.closest(".wcpg-att-field");
        var $rm = $wrap.siblings(".wcpg-att-vid-remove");
        if (!$rm.length) $rm = findRow($wrap).find(".wcpg-att-vid-remove");

        if ($input.attr("data-is-file")) {
            // User is editing a filename — treat as URL from now on
            $input.removeAttr("data-is-file");
            $wrap.find(".wcpg-att-vid-id").val("");
        }
        $rm.toggle($input.val().trim().length > 0);
    });

    // ── Remove / clear ─────────────────────────────────────────────────────────
    $(document).on("click", ".wcpg-att-vid-remove", function (e) {
        e.preventDefault();
        var $rm = $(this);
        var $wrap = $rm.siblings(".wcpg-att-field");
        if (!$wrap.length) $wrap = findRow($rm).find(".wcpg-att-field");
        $wrap.find(".wcpg-att-vid-url").val("").removeAttr("data-is-file");
        $wrap.find(".wcpg-att-vid-id").val("");
        $rm.hide();
    });
})(jQuery);
