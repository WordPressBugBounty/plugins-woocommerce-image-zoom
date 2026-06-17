/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/frontend/index.js"
/*!*******************************!*\
  !*** ./src/frontend/index.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_wc_product_gallery_wc_product_gallery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/wc-product-gallery/wc-product-gallery.js */ "./src/frontend/js/wc-product-gallery/wc-product-gallery.js");
/* harmony import */ var _js_zoom_init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/zoom-init.js */ "./src/frontend/js/zoom-init.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/frontend/style.scss");




/***/ },

/***/ "./src/frontend/js/wc-product-gallery/defaults.js"
/*!********************************************************!*\
  !*** ./src/frontend/js/wc-product-gallery/defaults.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const DEFAULTS = {
  // Variation
  variationImageChange: true,
  variationGallery: true,
  // Zoom
  zoomType: "inner",
  // 'lens' | 'inner' | 'window'
  zoomLevel: 2.5,
  lensSize: 130,
  // px diameter/side
  lensShape: "circle",
  // 'circle' | 'square'
  lensBorderColor: "#ffffff",
  lensBorderWidth: 2,
  zoomWindowSizeMode: "custom",
  // 'custom' | 'auto' | 'match'
  zoomWindowWidth: 400,
  zoomWindowHeight: 400,
  zoomWindowPosition: "right",
  // 'right'|'left'|'top'|'bottom'
  zoomWindowOffsetX: 14,
  zoomWindowOffsetY: 0,
  zoomWindowBorderRadius: 8,
  zoomWindowBorderColor: "#e0e0e0",
  zoomWindowBorderWidth: 1,
  zoomWindowShadow: true,
  zoomWindowFadeEasing: true,
  zoomWindowFadeEasingAmount: 300,
  // ms

  // Cursor overlay shown on the main image for window-type zoom
  zoomWindowCursor: true,
  // show/hide the overlay
  zoomWindowCursorSizeMode: "auto",
  // 'auto' | 'custom'
  zoomWindowCursorWidth: 100,
  // px, used when sizeMode=custom
  zoomWindowCursorHeight: 100,
  // px, used when sizeMode=custom
  zoomWindowCursorBorderRadius: 4,
  // px, 0 = square
  zoomWindowCursorBg: "rgba(255,255,255,0.50)",
  // fill of the selection box
  zoomWindowCursorBorderColor: "#ffffff",
  // border color
  zoomWindowCursorBorderWidth: 1,
  // border thickness px

  zoomCursor: "crosshair",
  zoomOnHover: true,
  zoomEasing: true,
  zoomEasingAmount: 12,
  // Touch / Mobile
  touchZoom: true,
  touchZoomMin: 1,
  touchZoomMax: 5,
  swipeThreshold: 50,
  // Gallery type
  galleryType: "thumbnail",
  // 'thumbnail' | 'anchor' | 'sticky-split' | 'hierarchy-grid'

  // Thumbnails
  thumbnailShow: true,
  // show or hide the thumbnail strip entirely
  thumbnailPosition: "bottom",
  // 'bottom'|'top'|'left'|'right'
  thumbnailLayout: "slider",
  // 'slider' | 'grid'
  thumbnailWidth: 80,
  thumbnailHeight: 80,
  thumbnailAspectRatio: "auto",
  // 'auto' | '1/1' | '4/3' | '3/2' | '16/9' | '3/4' | '2/3'
  thumbnailGap: 8,
  thumbnailStripGap: 8,
  // px gap between the thumbnail strip and the main image area
  thumbnailBorderRadius: 4,
  thumbnailBackground: "",
  // background color of each thumbnail item (empty = none)
  thumbnailActiveBorderColor: "rgba(0, 0, 0, 0.82)",
  thumbnailActiveBorderWidth: 2,
  thumbnailSliderButtons: true,
  thumbnailSlideType: "row",
  // 'row' = slide a visible row at once | 'item' = slide one item
  thumbnailLoop: false,
  // wrap around from last→first and first→last
  thumbnailDragNav: true,
  // drag / touch-drag scrolls the thumbnail strip
  thumbnailScrollNav: true,
  // scroll wheel / trackpad scrolls the thumbnail strip
  thumbnailVisible: 5,
  thumbnailGridColumns: 4,
  thumbnailFitToImage: false,
  thumbnailTrigger: "click",
  // 'click' | 'hover'
  thumbnailArrowsOverlay: false,
  // true = arrows float over the track
  thumbnailAlignment: "left",
  // 'left' | 'center' | 'right' (horizontal strips only)
  thumbnailBreakpoint: 1025,
  // px: below this width, left/right stacks to bottom (0 = disabled)
  thumbnailAnimation: true,
  // staggered fade-in entrance animation for thumbnail items

  // Main image display
  mainImageHeightMode: "lock",
  // 'lock' | 'adaptive' | 'fixed'
  mainImageHeight: 0,
  // px, used when mainImageHeightMode === 'fixed'
  mainImageFit: "contain",
  // 'contain' | 'cover'
  mainImageBackground: "",
  mainImageBorderRadius: 6,
  // px
  mainImageBorderWidth: 0,
  // px — border around the main image wrap
  mainImageBorderColor: "#e0e0e0",
  mainImageShadow: false,
  // Main image navigation
  mainImageArrows: true,
  // prev/next arrows overlaid on main image
  mainImageArrowsAutoHide: true,
  // hide arrows when cursor leaves; false = always visible
  mainImageArrowIcon: "chevron",
  // 'chevron' | 'arrow' | 'caret' | 'angle' | 'thin'
  mainImageArrowSize: 40,
  // px — diameter of the arrow buttons
  mainImageArrowBorderRadius: 50,
  // % — border radius of the arrow buttons (50 = circle)
  mainImageArrowIconSize: 18,
  // px — size of the SVG icon inside the arrow button
  mainImageArrowBg: "rgba(255,255,255,0.92)",
  // normal background
  mainImageArrowColor: "#1a1a1a",
  // normal icon color
  mainImageArrowHoverBg: "rgba(0,0,0,0.82)",
  // hover background
  mainImageArrowHoverColor: "#ffffff",
  // hover icon color
  mainImagePagination: true,
  // dot indicators below main image
  mainImagePaginationAutoHide: true,
  // auto-hide dots when cursor leaves; false = always visible
  mainImagePaginationType: "dots",
  // 'dots' | 'progressbar'
  mainImagePaginationPosition: "bottom",
  // 'bottom' | 'left' | 'right'
  mainImageDotSize: 5,
  // px — diameter of the inactive pagination dot
  mainImageDotColor: "rgba(0,0,0,0.2)",
  // inactive dot colour
  mainImageDotActiveColor: "rgba(0,0,0,0.82)",
  // active dot colour
  mainImageSwipe: false,
  // swipe left/right on the main image to navigate (requires zoomOnHover and touchZoom both disabled)
  mainImageScrollNav: false,
  // scroll wheel on the main image to navigate next/prev (both scroll directions)
  mainImageScrollNavDelay: 700,
  // ms cooldown between scroll-triggered navigations

  // Stacked layout (Anchor Navigation mode)
  stackedItemGap: 24,
  // px gap between stacked items
  stackedNavigationType: "dots",
  // 'dots' | 'thumbs'
  anchorZoom: true,
  // enable zoom on hover for stacked image items (requires zoomOnHover)
  stackedThumbsStickyTop: 40,
  // px — sticky top offset for left/right thumb strip in stacked layout
  stackedDotsPosition: "outside",
  // 'overlay' | 'outside'
  stackedDotGap: 8,
  // px gap between dots
  stackedDotSize: 8,
  // px diameter of each dot
  stackedDotColor: "rgba(0, 0, 0, 0.5)",
  // inactive dot colour
  stackedDotActiveColor: "#000000",
  // active dot colour

  // Stacked layout — sticky product summary
  stackedStickyEnabled: false,
  // keep the product summary sticky while scrolling the gallery
  stackedStickySelector: ".summary.entry-summary",
  // CSS selector for the summary element
  stackedStickyTop: 100,
  // px — sticky top offset for the summary
  stackedStickyBreakpoint: 1024,
  // px — disable sticky below this viewport width (0 = always on)
  stackedStickyFixOverflow: true,
  // patch ancestor overflow:hidden/clip to unblock position:sticky

  // Sticky Split layout
  stickySplitMainSide: "left",
  // 'left' | 'right' — which column holds the sticky viewer
  stickySplitMainWidthPercent: 65,
  // % width of the sticky main column
  stickySplitGap: 20,
  // px gap between the two columns
  stickySplitStickyTop: 50,
  // px top offset for position:sticky on the main viewer
  stickySplitScrollItemGap: 20,
  // px gap between scroll items in the right column
  stickySplitScrollItemAspect: "auto",
  // CSS aspect-ratio ('auto'|'1/1'|'4/3'|'3/2'|'16/9')
  stickySplitScrollItemFit: "cover",
  // 'contain' | 'cover' — object-fit on scroll item images
  stickySplitScrollItemBorderRadius: 6,
  // px border-radius on each scroll item
  stickySplitShowCaption: false,
  // show caption text below each scroll item
  stickySplitClickAction: "lightbox",
  // 'lightbox' | 'none' — what clicking a scroll item does
  stickySplitClickSync: false,
  // update main viewer when a scroll item is clicked
  stickySplitThumbZoom: false,
  // enable zoom on hover for scroll column images
  stickySplitShowMainInScroll: false,
  // include the main product image as the first item in the scroll column

  // Hierarchy Grid layout
  hierarchyGridColumns: 2,
  // columns in the grid below the hero image
  hierarchyGridGap: 16,
  // px gap between items
  hierarchyGridItemAspect: "1/1",
  // CSS aspect-ratio applied to each grid cell ('auto'|'1/1'|'4/3'|'3/2'|'16/9')
  hierarchyGridItemFit: "cover",
  // 'contain' | 'cover' — object-fit on grid item images
  hierarchyGridItemBorderRadius: 6,
  // px border-radius on each item
  hierarchyGridZoom: true,
  // enable zoom on hover for grid items (requires zoomOnHover)

  // Tiles layout
  tilesColumns: 2,
  // number of equal-width columns
  tilesGap: 8,
  // px gap between tiles
  tilesItemAspect: "3/2",
  // CSS aspect-ratio per tile ('auto'|'1/1'|'4/3'|'3/2'|'16/9')
  tilesItemFit: "cover",
  // 'contain' | 'cover' — object-fit on tile images
  tilesItemBorderRadius: 0,
  // px border-radius on each tile
  tilesInitialCount: 6,
  // number of tiles visible before "Show More"
  tilesShowMoreEnabled: true,
  // show/hide the Show More / Show Less button
  tilesShowMoreText: "Show More",
  // text on the expand button
  tilesShowLessText: "Show Less",
  // text on the collapse button
  tilesZoom: true,
  // enable zoom on hover for tiles (requires zoomOnHover)

  mobileBreakpoint: 768,
  // px — below this, mobile settings take effect
  mobileShowThumbs: false,
  // show thumbnail strip in the mobile carousel fallback
  mobileThumbnailPosition: "bottom",
  // 'bottom' | 'top' | 'left' | 'right'
  mobileThumbnailWidth: 100,
  // px — thumbnail item width on mobile (0 = use desktop thumbnailWidth)
  mobileThumbnailHeight: 100,
  // px — thumbnail item height on mobile (0 = use desktop thumbnailHeight)
  mobileArrows: true,
  // show prev/next arrows in the mobile carousel fallback
  mobilePagination: true,
  // show dot pagination in the mobile carousel fallback
  mobilePaginationPosition: "bottom",
  // 'bottom' | 'left' | 'right'

  // Lightbox
  lightbox: true,
  lightboxOnClick: true,
  // show trigger button (expand icon)
  lightboxButtonAutoHide: true,
  // hide expand button when cursor leaves; false = always visible
  lightboxButtonPosition: "bottom-right",
  // 'bottom-right'|'bottom-left'|'top-right'|'top-left'
  lightboxOverlayColor: "rgba(5, 5, 8, 0.95)",
  // background color (with alpha) of the lightbox overlay
  lightboxOpenOnImageClick: false,
  // also/instead open on main image click (WP setting)
  lightboxLoop: true,
  lightboxShowCounter: true,
  lightboxShowCaption: true,
  lightboxShowThumbnails: true,
  lightboxPaginationType: "thumbs",
  // 'thumbs' | 'dots'
  lightboxCloseOnOverlay: true,
  lightboxKeyboard: true,
  lightboxAnimationDuration: 320,
  lightboxTransition: "slide",
  // 'slide'|'fade'|'zoom'|'none'
  lightboxAutoplay: false,
  // autoplay slideshow in lightbox
  lightboxAutoplayDelay: 3500,
  // ms between slides
  lightboxShowAutoplayButton: true,
  // show/hide autoplay toggle button in toolbar
  lightboxZoomIn: true,
  // enable zoom-in/out buttons in lightbox toolbar
  lightboxScrollZoom: true,
  // enable mouse wheel zoom on lightbox image
  lightboxFullscreen: true,
  // enable fullscreen button
  lightboxShowArrows: true,
  // show prev/next navigation arrows
  lightboxSwipe: true,
  // swipe / drag to navigate between images
  lightboxSingleImage: false,
  // show only the clicked image (no gallery navigation)
  lightboxImageBorderRadius: 6,
  // px, border-radius of the main lightbox image
  lightboxThumbBorderRadius: 5,
  // px, border-radius of thumbnail strip items
  lightboxZoomOrigin: false,
  // zoom open/close animation from/to the source image position
  lightboxImageTools: true,
  // show center image transformation toolbar (rotate, flip, 1:1)
  lightboxShare: false,
  // show share button in lightbox toolbar
  lightboxShareFacebook: true,
  // show Facebook share option
  lightboxShareTwitter: true,
  // show Twitter/X share option
  lightboxSharePinterest: true,
  // show Pinterest share option
  lightboxShareDownload: true,
  // show download image option

  // Transition
  mainImageTransition: "slide",
  // 'fade'|'slide'|'zoom'|'none'
  mainImageTransitionDuration: 500,
  mainImageSlideDirection: "horizontal",
  // 'horizontal' | 'vertical' (slide transition only)

  // Spinner
  spinner: false,
  spinnerColor: "rgba(0, 0, 0, 0.82)",
  // Video
  videoPosition: "end",
  // 'start' | 'end' — where product videos appear in the thumbnail strip
  videoAutoplay: false,
  // autoplay embed when navigated to (muted required for most browsers)
  videoMuted: true,
  // mute embed by default (needed for autoplay)
  videoLoop: false,
  // loop YouTube / Vimeo embeds
  videoHideRelated: true,
  // hide related videos at end (YouTube rel=0)
  videoEmbedControls: true,
  // show player controls on YouTube / Vimeo embeds
  videoEmbedFitContainer: false,
  // fill the main image area (crop embed to match container)
  videoControls: true,
  // show controls on hosted <video> elements
  videoHostedLoop: false,
  // loop hosted (uploaded) video files
  videoHostedAutoplay: false,
  // autoplay hosted video when navigated to
  videoHostedMuted: false,
  // mute hosted video (useful with autoplay)
  videoHostedFitContainer: false,
  // fill the main image area (crop hosted video to match container)

  // Misc
  preloadImages: true,
  zoomBeforeLoad: false,
  dataImageAttr: "data-zoom-image",
  dataCaptionAttr: "data-caption",
  // Callbacks
  onInit: null,
  onZoomStart: null,
  onZoomEnd: null,
  onThumbClick: null,
  onImageChange: null,
  onLightboxOpen: null,
  onLightboxClose: null
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DEFAULTS);

/***/ },

/***/ "./src/frontend/js/wc-product-gallery/dom.js"
/*!***************************************************!*\
  !*** ./src/frontend/js/wc-product-gallery/dom.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/frontend/js/wc-product-gallery/utils.js");


// DOM building, observer setup, thumbnail construction, lightbox DOM, placeholder helpers.

const ARROW_SVGS = {
  chevron: {
    prev: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    next: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`
  },
  arrow: {
    prev: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 5 5 12 12 19"/></svg>`,
    next: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`
  },
  caret: {
    prev: `<svg viewBox="0 0 24 24"><path d="M14 5L6 12L14 19Z" fill="currentColor" stroke="none"/></svg>`,
    next: `<svg viewBox="0 0 24 24"><path d="M10 5L18 12L10 19Z" fill="currentColor" stroke="none"/></svg>`
  },
  angle: {
    prev: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 19L8 12L15 5"/></svg>`,
    next: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19L16 12L9 5"/></svg>`
  },
  thin: {
    prev: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
    next: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`
  }
};
const domMethods = {
  _buildDOM() {
    this.wrapper.classList.add("wcpg-wrapper");
    this.wrapper.classList.remove("wcpg-thumb-bottom", "wcpg-thumb-top", "wcpg-thumb-left", "wcpg-thumb-right");
    this.wrapper.classList.add(`wcpg-thumb-${this.opts.thumbnailPosition}`);
    this.wrapper.setAttribute("data-wcpg-id", this.id);
    const s = this.wrapper.style;
    const thumbAspect = this.opts.thumbnailAspectRatio || "auto";
    s.setProperty("--wcpg-thumb-w", this.opts.thumbnailWidth + "px");
    s.setProperty("--wcpg-thumb-h", thumbAspect !== "auto" ? "auto" : this.opts.thumbnailHeight + "px");
    s.setProperty("--wcpg-thumb-aspect", thumbAspect);
    s.setProperty("--wcpg-thumb-gap", this.opts.thumbnailGap + "px");
    s.setProperty("--wcpg-strip-gap", this.opts.thumbnailStripGap + "px");
    s.setProperty("--wcpg-active-color", this.opts.thumbnailActiveBorderColor);
    s.setProperty("--wcpg-active-bw", this.opts.thumbnailActiveBorderWidth + "px");
    s.setProperty("--wcpg-spinner-color", this.opts.spinnerColor);
    s.setProperty("--wcpg-tr-dur", this.opts.mainImageTransitionDuration + "ms");
    s.setProperty("--wcpg-img-bg", this.opts.mainImageBackground);
    s.setProperty("--wcpg-radius", this.opts.mainImageBorderRadius + "px");
    s.setProperty("--wcpg-main-bw", this.opts.mainImageBorderWidth + "px");
    s.setProperty("--wcpg-main-bc", this.opts.mainImageBorderColor);
    s.setProperty("--wcpg-main-shadow", this.opts.mainImageShadow ? "0 4px 24px rgba(0,0,0,0.13)" : "none");
    s.setProperty("--wcpg-thumb-radius", this.opts.thumbnailBorderRadius + "px");
    s.setProperty("--wcpg-grid-cols", String(Math.min(this.opts.thumbnailGridColumns, this.items.length)));
    s.setProperty("--wcpg-arrow-size", (this.opts.mainImageArrowSize || 40) + "px");
    s.setProperty("--wcpg-arrow-radius", (this.opts.mainImageArrowBorderRadius ?? 50) + "%");
    s.setProperty("--wcpg-arrow-icon-size", (this.opts.mainImageArrowIconSize || 18) + "px");
    s.setProperty("--wcpg-arrow-bg", this.opts.mainImageArrowBg || "rgba(255,255,255,0.92)");
    s.setProperty("--wcpg-arrow-color", this.opts.mainImageArrowColor || "#1a1a1a");
    s.setProperty("--wcpg-arrow-hover-bg", this.opts.mainImageArrowHoverBg || "rgba(0,0,0,0.82)");
    s.setProperty("--wcpg-arrow-hover-color", this.opts.mainImageArrowHoverColor || "#ffffff");
    s.setProperty("--wcpg-dot-size", (this.opts.mainImageDotSize || 5) + "px");
    s.setProperty("--wcpg-dot-color", this.opts.mainImageDotColor || "rgba(0,0,0,0.2)");
    s.setProperty("--wcpg-dot-active-color", this.opts.mainImageDotActiveColor || "rgba(0,0,0,0.82)");
    s.setProperty("--wcpg-stacked-gap", this.opts.stackedItemGap + "px");
    s.setProperty("--wcpg-stacked-dot-gap", this.opts.stackedDotGap + "px");
    s.setProperty("--wcpg-stacked-dot-size", this.opts.stackedDotSize + "px");
    s.setProperty("--wcpg-stacked-dot-color", this.opts.stackedDotColor);
    s.setProperty("--wcpg-stacked-dot-active-color", this.opts.stackedDotActiveColor);
    s.setProperty("--wcpg-hg-cols", String(this.opts.hierarchyGridColumns || 2));
    s.setProperty("--wcpg-hg-gap", (this.opts.hierarchyGridGap ?? 16) + "px");
    s.setProperty("--wcpg-hg-item-radius", (this.opts.hierarchyGridItemBorderRadius ?? 6) + "px");
    s.setProperty("--wcpg-hg-item-aspect", this.opts.hierarchyGridItemAspect === "auto" ? "auto" : this.opts.hierarchyGridItemAspect);
    s.setProperty("--wcpg-hg-item-fit", this.opts.hierarchyGridItemFit || "cover");
    s.setProperty("--wcpg-tiles-cols", String(this.opts.tilesColumns || 2));
    s.setProperty("--wcpg-tiles-gap", (this.opts.tilesGap ?? 8) + "px");
    s.setProperty("--wcpg-tiles-item-radius", (this.opts.tilesItemBorderRadius ?? 0) + "px");
    s.setProperty("--wcpg-tiles-item-aspect", this.opts.tilesItemAspect === "auto" ? "auto" : this.opts.tilesItemAspect || "3/2");
    s.setProperty("--wcpg-tiles-item-fit", this.opts.tilesItemFit || "cover");

    // Clean up old injected elements (reinit)
    ["wcpg-stage", "wcpg-thumbnails-wrap", "wcpg-row", "wcpg-ss-row", "wcpg-hg-wrap", "wcpg-tiles-wrap"].forEach(cls => {
      this.wrapper.querySelectorAll("." + cls).forEach(n => n.remove());
    });

    // ── Stacked layout (Anchor Dots mode) — branch early ──
    if (this.opts.galleryType === "anchor" && !this._mobileLayoutActive) {
      this._buildStackedLayout();
      return;
    }

    // ── Sticky Split layout — branch early (unless mobile fallback active) ──
    if (this.opts.galleryType === "sticky-split" && !this._mobileLayoutActive) {
      this._buildStickySplitLayout();
      return;
    }

    // ── Hierarchy Grid layout — branch early ──
    if (this.opts.galleryType === "hierarchy-grid" && !this._mobileLayoutActive) {
      this._buildHierarchyGridLayout();
      return;
    }

    // ── Tiles layout — branch early ──
    if (this.opts.galleryType === "tiles" && !this._mobileLayoutActive) {
      this._buildTilesLayout();
      return;
    }

    // ── Stage ──
    this.stage = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-stage");
    this.mainWrap = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-main-wrap");

    // Main display wrapper (image + video inside)
    this.mainDisplay = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-main-display");
    if (this.opts.mainImageHeightMode === "fixed" && this.opts.mainImageHeight) this.mainDisplay.style.height = this.opts.mainImageHeight + "px";
    this.mainImg = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img", "wcpg-main-img");
    this.mainImg.draggable = false;
    this.mainImg.style.objectFit = this.opts.mainImageFit;
    // Don't add wcpg-fit-cover on mobile — the absolute-fill technique requires
    // the container to have a known height, which mobile doesn't guarantee.
    if (this.opts.mainImageFit === "cover" && !this._mobileLayoutActive) {
      this.mainDisplay.classList.add("wcpg-fit-cover");
    }

    // Blur-up placeholder: a tiny image shown immediately while the full
    // image loads. Sits behind mainImg (lower z-index). JS fades it out
    // once mainImg has finished loading.
    this.placeholderImg = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img", "wcpg-placeholder-img");
    this.placeholderImg.draggable = false;
    this.placeholderImg.alt = "";
    this.placeholderImg.setAttribute("aria-hidden", "true");
    this.mainVideo = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("video", "wcpg-main-video");
    this.mainVideo.controls = this.opts.videoControls;
    this.mainVideo.playsInline = true;
    this.mainVideo.loop = this.opts.videoHostedLoop;
    if (this.opts.videoHostedMuted) this.mainVideo.muted = true;
    this.mainVideo.style.display = "none";

    // Iframe for YouTube / Vimeo embeds. src is set/cleared on navigation —
    // setting src="" stops playback without removing the element from the DOM.
    this.mainIframe = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("iframe", "wcpg-main-iframe");
    this.mainIframe.setAttribute("frameborder", "0");
    this.mainIframe.setAttribute("allowfullscreen", "");
    this.mainIframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    this.mainIframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media");
    this.mainIframe.setAttribute("title", "");
    this.mainIframe.style.display = "none";
    this.mainDisplay.appendChild(this.placeholderImg);
    this.mainDisplay.appendChild(this.mainImg);
    this.mainDisplay.appendChild(this.mainVideo);
    this.mainDisplay.appendChild(this.mainIframe);

    // ── Linked-video play button ──────────────────────────────────────
    // Overlaid on the main image when the current gallery item has an
    // attached video. Clicking it plays the video in the main area.
    this._linkedVideoBtn = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-linked-video-btn");
    this._linkedVideoBtn.setAttribute("aria-label", "Play video");
    this._linkedVideoBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
    this._linkedVideoBtn.style.display = "none";
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this._linkedVideoBtn, "click", e => {
      e.stopPropagation(); // don't trigger lightbox
      this._playLinkedVideo();
    });
    this.mainDisplay.appendChild(this._linkedVideoBtn);

    // Spinner
    this.spinner = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-spinner");
    this.spinner.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-spinner-inner"));

    // ── Lens ──
    // Uses background-image + background-size + background-position to show the zoomed image.
    // This is the correct approach — no separate <img> needed.
    this.lens = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-lens");
    this.lens.style.width = this.opts.lensSize + "px";
    this.lens.style.height = this.opts.lensSize + "px";
    this.lens.style.borderRadius = this.opts.lensShape === "circle" ? "50%" : this.opts.thumbnailBorderRadius + "px";
    this.lens.style.borderColor = this.opts.lensBorderColor;
    this.lens.style.borderWidth = this.opts.lensBorderWidth + "px";
    this.lens.style.backgroundRepeat = "no-repeat";

    // ── Window Cursor Overlay ──
    // A selection-box indicator on the main image for window-type zoom.
    // NOTE: do NOT set style.opacity here — it would permanently override
    // the CSS class-based opacity transition (opacity-0 → opacity-var).
    this.winCursor = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-win-cursor");
    this.winCursor.style.borderColor = this.opts.zoomWindowCursorBorderColor;
    this.winCursor.style.borderWidth = this.opts.zoomWindowCursorBorderWidth + "px";
    this.winCursor.style.borderRadius = this.opts.zoomWindowCursorBorderRadius + "px";
    this.winCursor.style.background = this.opts.zoomWindowCursorBg;
    this.mainWrap.appendChild(this.winCursor);

    // ── Zoom Window ──
    // Same technique: background-image on the panel div.
    this.zoomWin = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-zoom-window");
    this.zoomWin.style.width = this.opts.zoomWindowWidth + "px";
    this.zoomWin.style.height = this.opts.zoomWindowHeight + "px";
    this.zoomWin.style.borderRadius = this.opts.zoomWindowBorderRadius + "px";
    // No real CSS border — the visual border is the ::after inset box-shadow.
    // This avoids background-origin offset issues entirely: the full element
    // area is the background area, so background-position needs no border compensation.
    this.zoomWin.style.setProperty("--wcpg-zwin-bw", this.opts.zoomWindowBorderWidth + "px");
    this.zoomWin.style.setProperty("--wcpg-zwin-bc", this.opts.zoomWindowBorderColor);
    this.zoomWin.style.boxShadow = this.opts.zoomWindowShadow ? "0 8px 40px rgba(0,0,0,0.22)" : "none";
    this.zoomWin.style.backgroundRepeat = "no-repeat";
    this.zoomWin.style.transition = this.opts.zoomWindowFadeEasing ? `opacity ${_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(this.opts.zoomWindowFadeEasingAmount, 0, 2000)}ms ease` : "none";

    // Lightbox trigger
    this.lbTrigger = null;
    if (this.opts.lightbox && this.opts.lightboxOnClick) {
      this.lbTrigger = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", `wcpg-lb-trigger wcpg-lb-pos-${this.opts.lightboxButtonPosition}`);
      this.lbTrigger.setAttribute("aria-label", "Open fullscreen");
      this.lbTrigger.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`;
      this.mainWrap.appendChild(this.lbTrigger);
      if (!this.opts.lightboxButtonAutoHide) {
        this.mainWrap.classList.add("wcpg-lb-always");
      }
    }

    // ── Main image navigation arrows ──
    // When in mobile fallback, arrows/pagination use the mobile-specific
    // settings so desktop behaviour is completely unaffected.
    const _mbl = !!this._mobileLayoutActive;
    const _effArrows = _mbl ? this.opts.mobileArrows !== false : !!this.opts.mainImageArrows;
    const _effPagination = _mbl ? this.opts.mobilePagination !== false : !!this.opts.mainImagePagination;
    const _effPgPos = _mbl ? this.opts.mobilePaginationPosition || "bottom" : this.opts.mainImagePaginationPosition || "bottom";
    const _effPgType = _mbl ? "dots" : this.opts.mainImagePaginationType || "dots";
    const _effPgAutoHide = _mbl ? false : !!this.opts.mainImagePaginationAutoHide;
    this.mainPrev = null;
    this.mainNext = null;
    if (_effArrows && this.items.length > 1) {
      this.mainPrev = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-main-arrow wcpg-main-prev");
      this.mainPrev.setAttribute("aria-label", "Previous image");
      const _arrowSvg = ARROW_SVGS[this.opts.mainImageArrowIcon] || ARROW_SVGS.chevron;
      this.mainPrev.innerHTML = _arrowSvg.prev;
      this.mainNext = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-main-arrow wcpg-main-next");
      this.mainNext.setAttribute("aria-label", "Next image");
      this.mainNext.innerHTML = _arrowSvg.next;
      this.mainWrap.appendChild(this.mainPrev);
      this.mainWrap.appendChild(this.mainNext);
      if (!_mbl && !this.opts.mainImageArrowsAutoHide) {
        this.mainWrap.classList.add("wcpg-arrows-always");
      }
    }
    this.mainWrap.appendChild(this.mainDisplay);
    this.mainWrap.appendChild(this.spinner);
    this.mainWrap.appendChild(this.lens);
    this.stage.appendChild(this.mainWrap);

    // ── Main image pagination (dots or progress bar) ──
    this.pagination = null;
    this.paginationDots = [];
    this.progressFill = null;
    this._countText = null;
    if (_effPagination && this.items.length > 1) {
      this.pagination = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-pagination");
      if (_effPgPos === "left" || _effPgPos === "right") {
        this.pagination.classList.add("wcpg-pagination-side", `wcpg-pagination-${_effPgPos}`);
      } else if (_effPgPos === "top") {
        this.pagination.classList.add("wcpg-pagination-top");
      }
      if (_effPgType === "progressbar") {
        this.pagination.classList.add("wcpg-pagination-progress");
        this.progressFill = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-progress-fill");
        this.progressFill.style.width = 1 / this.items.length * 100 + "%";
        this.pagination.appendChild(this.progressFill);
      } else if (_effPgType === "count") {
        this.pagination.classList.add("wcpg-pagination-count");
        const countPrev = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-count-nav wcpg-count-prev");
        countPrev.setAttribute("aria-label", "Previous image");
        countPrev.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`;
        this._countText = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("span", "wcpg-count-text");
        this._countText.textContent = `1 / ${this.items.length}`;
        const countNext = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-count-nav wcpg-count-next");
        countNext.setAttribute("aria-label", "Next image");
        countNext.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;
        this.pagination.appendChild(countPrev);
        this.pagination.appendChild(this._countText);
        this.pagination.appendChild(countNext);
      } else {
        this.items.forEach((_, i) => {
          const dot = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-dot" + (i === 0 ? " wcpg-dot-active" : ""));
          dot.setAttribute("aria-label", `Go to image ${i + 1}`);
          dot.setAttribute("data-index", i);
          this.pagination.appendChild(dot);
          this.paginationDots.push(dot);
        });
      }

      // Anchor layout places dots inside .wcpg-stage so they aren't clipped
      // by mainWrap's overflow:hidden. In mobile fallback the carousel layout
      // is used regardless of galleryType, so always append to mainWrap there.
      if (this.opts.galleryType === "anchor" && !_mbl) {
        this.pagination.classList.add("wcpg-pagination-anchor");
        this.stage.appendChild(this.pagination);
      } else {
        if (_effPgAutoHide) {
          this.pagination.classList.add("wcpg-pagination-autohide");
        }
        this.mainWrap.appendChild(this.pagination);
      }
    }

    // Append to body (not stage) so the zoom window is never clipped by
    // any ancestor's overflow:hidden (e.g. the WooCommerce gallery wrapper).
    // CSS uses position:fixed so coordinates map directly to the viewport.
    document.body.appendChild(this.zoomWin);

    // ── Thumbnails ──
    this.thumbsWrap = null;
    // When falling back from anchor/sticky-split to carousel, mobileShowThumbs
    // controls visibility independently of the main thumbnailShow setting.
    const _showThumbs = this._mobileLayoutActive ? !!this.opts.mobileShowThumbs : this.opts.thumbnailShow !== false;
    if (this.items.length > 1 && _showThumbs) this._buildThumbnails();

    // On mobile, force a slider (never grid) but honour mobileThumbnailPosition
    // for the wrapper class and layout so the strip can appear on any side.
    const _mblSlider = !!this._mobileLayoutActive;
    const _effThumbPos = this._mobileLayoutActive ? this.opts.mobileThumbnailPosition || "bottom" : this.opts.thumbnailPosition;
    if (_mblSlider && this.thumbsWrap) {
      this.wrapper.classList.remove("wcpg-thumb-left", "wcpg-thumb-right", "wcpg-thumb-top", "wcpg-thumb-bottom");
      this.wrapper.classList.add(`wcpg-thumb-${_effThumbPos}`);
    }

    // Override thumbnail CSS variables with mobile-specific sizes so both the
    // visual rendering and the JS scroll calculations use the same dimensions.
    if (this._mobileLayoutActive && this.thumbsWrap) {
      const mW = this.opts.mobileThumbnailWidth;
      const mH = this.opts.mobileThumbnailHeight;
      if (mW > 0) s.setProperty("--wcpg-thumb-w", mW + "px");
      if (mH > 0) s.setProperty("--wcpg-thumb-h", mH + "px");
    }

    // ── Lightbox ──
    if (this.opts.lightbox && !this.constructor._lbEl) {
      this.constructor._lbEl = this._createLightboxDOM();
      document.body.appendChild(this.constructor._lbEl);
    }

    // ── Layout ──
    const isHoriz = ["left", "right"].includes(_effThumbPos);
    if (isHoriz && this.thumbsWrap) {
      const row = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-row");
      if (_effThumbPos === "left") {
        row.appendChild(this.thumbsWrap);
        row.appendChild(this.stage);
      } else {
        row.appendChild(this.stage);
        row.appendChild(this.thumbsWrap);
      }
      this.wrapper.appendChild(row);
    } else {
      // For both 'top' and 'bottom', stage comes first in the DOM.
      // CSS uses flex-direction:column-reverse on .wcpg-thumb-top to
      // visually promote the thumbnails above the stage — so we must
      // NOT manually reorder the DOM here or the two effects cancel.
      this.wrapper.appendChild(this.stage);
      if (this.thumbsWrap) this.wrapper.appendChild(this.thumbsWrap);
    }

    // Set initial item
    this._renderItem(0, true);

    // Gallery is built and first image is rendering — remove the server-side
    // loading skeleton. Done here (not in _renderItem) so it only fires once,
    // after both the DOM and the blur-up placeholder are in place.
    this.wrapper.querySelectorAll("[data-wcpg-skeleton]").forEach(sk => sk.remove());
    this._setupFitObserver();
    this._initStackObserver();
  },
  _setupFitObserver() {
    if (this._fitObserver) {
      this._fitObserver.disconnect();
      this._fitObserver = null;
    }
    if (!this.thumbsWrap || !this.stage) return;

    // Grid layout is never active on mobile (mobile forces slider).
    const isGrid = !this._mobileLayoutActive && this.opts.thumbnailLayout === "grid";
    // On mobile, use mobileThumbnailPosition to determine side positioning.
    const isSidePos = this._mobileLayoutActive ? ["left", "right"].includes(this.opts.mobileThumbnailPosition || "bottom") : ["left", "right"].includes(this.opts.thumbnailPosition);

    // Grid layout: only runs when thumbnailFitToImage is on
    if (isGrid) {
      if (!this.opts.thumbnailFitToImage) return;
      const syncGrid = () => {
        const cols = this.opts.thumbnailGridColumns;
        const gap = this.opts.thumbnailGap;
        const stacked = this.wrapper.classList.contains("wcpg-stacked");
        // Treat as vertical only when truly side-positioned and NOT stacked
        const fitVert = isSidePos && !stacked;
        if (fitVert) {
          // Left/right grid: always 1 column, items stack vertically.
          // Distribute stage height evenly across all rows.
          this.thumbsWrap.classList.remove("wcpg-grid-fit");
          const rows = this.items.length; // 1 column → each item is its own row
          const totalH = this.stage.offsetHeight;
          if (totalH > 0 && rows > 0) {
            const size = (totalH - gap * (rows - 1)) / rows;
            if (size > 0) {
              this.wrapper.style.setProperty("--wcpg-thumb-h", size + "px");
            }
          }
        } else {
          // Bottom/top (or stacked left/right): use 1fr columns so the grid
          // fills stage width pixel-perfectly without rounding gaps.
          this.thumbsWrap.classList.add("wcpg-grid-fit");
          this.thumbsWrap.style.width = ""; // let CSS give 100%
          const totalW = this.stage.offsetWidth;
          if (totalW > 0 && cols > 0) {
            const size = (totalW - gap * (cols - 1)) / cols;
            if (size > 0) {
              this.wrapper.style.setProperty("--wcpg-thumb-h", size + "px");
            }
          }
        }
      };
      this._fitObserver = new ResizeObserver(syncGrid);
      this._fitObserver.observe(this.stage);
      if (this.mainImg) this._fitObserver.observe(this.mainImg);
      syncGrid();
      return;
    }

    // Slider: left/right only — match thumbsWrap height to stage height
    if (!isSidePos || !this.opts.thumbnailFitToImage) return;
    const sync = () => {
      const h = this.stage.offsetHeight;
      if (h > 0) {
        this.thumbsWrap.style.height = h + "px";
        this._clampThumbOffset();
      }
    };
    this._fitObserver = new ResizeObserver(sync);
    this._fitObserver.observe(this.stage);
    if (this.mainImg) this._fitObserver.observe(this.mainImg);
    sync();
  },
  _initStackObserver() {
    // Clean up any previous listener
    if (this._stackMq && this._stackMqFn) {
      this._stackMq.removeEventListener("change", this._stackMqFn);
    }
    this._stackMq = null;
    this._stackMqFn = null;
    this.wrapper.classList.remove("wcpg-stacked");
    const bp = this.opts.thumbnailBreakpoint;
    if (!bp || bp <= 0 || !["left", "right"].includes(this.opts.thumbnailPosition) || this._mobileLayoutActive // mobile uses its own position; never stack
    ) return;

    // Use viewport-based matchMedia so the breakpoint behaves like a
    // standard CSS media query — matching device/screen width, not the
    // gallery container width (which is always narrower on product pages).
    this._stackMq = window.matchMedia(`(max-width: ${bp - 1}px)`);
    this._stackMqFn = e => {
      this.wrapper.classList.toggle("wcpg-stacked", e.matches);
      // For left/right grid: clear any inline width so CSS takes over,
      // then re-run the fit observer for the new axis.
      if (this.opts.thumbnailLayout === "grid" && this.thumbsWrap) {
        this.thumbsWrap.style.width = "";
        if (this._fitObserver) {
          this._fitObserver.disconnect();
          this._fitObserver = null;
        }
        this._setupFitObserver();
      }
      // Reset scroll position — the old axis offset is meaningless after flip
      if (this._ts) this._ts.offset = 0;
      this._clampThumbOffset();
    };
    this._stackMq.addEventListener("change", this._stackMqFn);
    // Apply the initial state immediately
    this.wrapper.classList.toggle("wcpg-stacked", this._stackMq.matches);
  },
  _buildThumbnails() {
    // On mobile, always force a slider (never grid); position comes from mobileThumbnailPosition.
    const _mblSlider = !!this._mobileLayoutActive;
    const isGrid = !_mblSlider && this.opts.thumbnailLayout === "grid";
    const _mblPos = this._mobileLayoutActive ? this.opts.mobileThumbnailPosition || "bottom" : null;
    const isVert = _mblSlider ? ["left", "right"].includes(_mblPos) : ["left", "right"].includes(this.opts.thumbnailPosition);
    this.thumbsWrap = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", `wcpg-thumbnails-wrap wcpg-thumbs-${isGrid ? "grid" : "slider"}`);
    if (isVert && this.opts.thumbnailFitToImage) {
      this.thumbsWrap.classList.add("wcpg-slider-fit");
    }
    if (!isGrid && this.opts.thumbnailArrowsOverlay) {
      this.thumbsWrap.classList.add("wcpg-arrows-overlay");
    }
    this.thumbsWrap.classList.add(`wcpg-align-${this.opts.thumbnailAlignment || "left"}`);
    if (this.opts.thumbnailAnimation) {
      this.thumbsWrap.classList.add("wcpg-thumbs-animate");
    }
    if (!isGrid) {
      // Slider layout
      if (this.opts.thumbnailSliderButtons) {
        this.thumbPrev = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-thumb-btn wcpg-thumb-prev");
        this.thumbPrev.setAttribute("aria-label", "Previous");
        this.thumbPrev.innerHTML = isVert ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>` : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`;
        this.thumbNext = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-thumb-btn wcpg-thumb-next");
        this.thumbNext.setAttribute("aria-label", "Next");
        this.thumbNext.innerHTML = isVert ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>` : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;
        this.thumbsWrap.appendChild(this.thumbPrev);
      }
      this.thumbsTrack = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-thumbnails-track");
      if (isVert) this.thumbsTrack.classList.add("wcpg-track-vert");
      this.thumbsList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-thumbnails-list");
      this._buildThumbItems();
      this.thumbsTrack.appendChild(this.thumbsList);
      this.thumbsWrap.appendChild(this.thumbsTrack);
      if (this.opts.thumbnailSliderButtons) this.thumbsWrap.appendChild(this.thumbNext);
    } else {
      // Grid layout
      this.thumbsList = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-thumbnails-list wcpg-thumbs-grid-list");
      this._buildThumbItems();
      this.thumbsWrap.appendChild(this.thumbsList);
    }

    // Defer until after the wrap is inserted into the live DOM so
    // offsetWidth/offsetHeight return real layout values.
    requestAnimationFrame(() => this._updateThumbButtons());
  },
  _buildThumbItems() {
    this.thumbEls = [];
    this.items.forEach((item, i) => {
      const t = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-thumb-item" + (i === 0 ? " wcpg-thumb-active" : ""));
      t.setAttribute("role", "option");
      t.setAttribute("aria-selected", i === 0 ? "true" : "false");
      t.setAttribute("tabindex", "0");
      t.setAttribute("data-index", i);
      if (this.opts.thumbnailBackground) {
        t.style.backgroundColor = this.opts.thumbnailBackground;
      }
      const isMediaItem = item.type !== "image";
      if (!isMediaItem || item.thumb) {
        const tImg = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img");
        tImg.src = item.thumb || item.src;
        tImg.alt = item.caption || (isMediaItem ? `Video ${i + 1}` : `Image ${i + 1}`);
        tImg.draggable = false;
        if (this.opts.thumbnailBackground) {
          tImg.style.mixBlendMode = "darken";
        }
        if (isMediaItem) {
          // If the thumb URL fails to load, fall back to CSS placeholder
          tImg.onerror = () => {
            tImg.remove();
            t.classList.add("wcpg-thumb-no-thumb");
          };
        }
        t.appendChild(tImg);
      } else {
        // Media item with no thumbnail — CSS placeholder takes over
        t.classList.add("wcpg-thumb-no-thumb");
      }
      if (isMediaItem) {
        const badge = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-thumb-play-badge");
        badge.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
        t.appendChild(badge);
        t.classList.add("wcpg-thumb-video");
      }

      // Image items that have a linked video get a play badge too.
      if (!isMediaItem && item.linkedVideoType) {
        const badge = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-thumb-play-badge");
        badge.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
        t.appendChild(badge);
        t.classList.add("wcpg-thumb-has-video");
      }

      // Staggered entrance animation: each item starts 60 ms after the
      // previous, capped at 480 ms so long strips don't drag on too long.
      if (this.opts.thumbnailAnimation) {
        t.style.setProperty("--wcpg-thumb-delay", Math.min(i * 60, 480) + "ms");
      }
      this.thumbsList.appendChild(t);
      this.thumbEls.push(t);
    });
  },
  _createLightboxDOM() {
    const lb = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-lightbox");
    lb.setAttribute("role", "dialog");
    lb.setAttribute("aria-modal", "true");
    lb.setAttribute("aria-label", "Image viewer");
    lb.innerHTML = `
        <div class="wcpg-lb-overlay"></div>
        <div class="wcpg-lb-container">

          <!-- Top toolbar -->
          <div class="wcpg-lb-toolbar">
            <div class="wcpg-lb-counter-wrap">
              <span class="wcpg-lb-counter"></span>
            </div>

            <!-- Center image transformation tools -->
            <div class="wcpg-lb-image-tools">
              <button class="wcpg-lb-tool wcpg-lb-rotate-ccw" aria-label="Rotate counter-clockwise"
                title="Rotate counter-clockwise">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 2v6h6"/>
                  <path d="M3 13a9 9 0 1 0 3-7.7L3 8"/>
                </svg>
              </button>
              <button class="wcpg-lb-tool wcpg-lb-rotate-cw" aria-label="Rotate clockwise"
                title="Rotate clockwise">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 2v6h-6"/>
                  <path d="M21 13a9 9 0 1 1-3-7.7L21 8"/>
                </svg>
              </button>
              <span class="wcpg-lb-tools-sep"></span>
              <button class="wcpg-lb-tool wcpg-lb-flip-h" aria-label="Flip horizontal"
                title="Flip horizontal">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 3v18"/>
                  <path d="M5 7l-3 5 3 5"/>
                  <path d="M19 7l3 5-3 5"/>
                </svg>
              </button>
              <button class="wcpg-lb-tool wcpg-lb-flip-v" aria-label="Flip vertical"
                title="Flip vertical">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M3 12h18"/>
                  <path d="M8 5l4-3 4 3"/>
                  <path d="M8 19l4 3 4-3"/>
                </svg>
              </button>
              <span class="wcpg-lb-tools-sep"></span>
              <button class="wcpg-lb-tool wcpg-lb-zoom-1to1" aria-label="Toggle 1:1 zoom"
                title="Toggle 1:1 zoom">1:1</button>
            </div>

            <div class="wcpg-lb-tools">
              <button class="wcpg-lb-tool wcpg-lb-zoom-in"  aria-label="Zoom in"
                title="Zoom in">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </button>
              <button class="wcpg-lb-tool wcpg-lb-zoom-out" aria-label="Zoom out"
                title="Zoom out">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  <line x1="8" y1="11" x2="14" y2="11"/>
                </svg>
              </button>
              <button class="wcpg-lb-tool wcpg-lb-zoom-reset" aria-label="Reset zoom"
                title="Reset zoom" style="display:none">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
                  <path d="M3 3v5h5"/>
                </svg>
              </button>
              <button class="wcpg-lb-tool wcpg-lb-autoplay" aria-label="Autoplay"
                title="Start slideshow">
                <svg class="wcpg-play-icon"  viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
                <svg class="wcpg-pause-icon" viewBox="0 0 24 24" fill="currentColor" style="display:none"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
              </button>
              <button class="wcpg-lb-tool wcpg-lb-fullscreen" aria-label="Fullscreen"
                title="Enter fullscreen">
                <svg class="wcpg-fs-enter" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                </svg>
                <svg class="wcpg-fs-exit" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 0 2-2h3M3 16h3a2 2 0 0 0 2 2v3"/>
                </svg>
              </button>
              <div class="wcpg-lb-share-wrap" style="display:none">
                <button class="wcpg-lb-tool wcpg-lb-share" aria-label="Share" title="Share">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                  </svg>
                </button>
                <div class="wcpg-lb-share-dropdown" style="display:none" role="menu">
                  <button class="wcpg-lb-share-item wcpg-lb-share-fb" role="menuitem">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    Share on Facebook
                  </button>
                  <button class="wcpg-lb-share-item wcpg-lb-share-tw" role="menuitem">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                    Tweet
                  </button>
                  <button class="wcpg-lb-share-item wcpg-lb-share-pi" role="menuitem">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
                    Pin it
                  </button>
                  <button class="wcpg-lb-share-item wcpg-lb-share-dl" role="menuitem">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                    <span class="wcpg-dl-label">Download image</span>
                  </button>
                </div>
              </div>
              <button class="wcpg-lb-tool wcpg-lb-close" aria-label="Close"
                title="Close (Esc)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
          </div>

          <!-- Navigation arrows -->
          <button class="wcpg-lb-arrow wcpg-lb-prev" aria-label="Previous image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          <!-- Media area -->
          <div class="wcpg-lb-media-wrap">
            <div class="wcpg-lb-media-inner">
              <img class="wcpg-lb-img" draggable="false" alt="">
              <video class="wcpg-lb-video" controls playsinline
                style="display:none;max-width:90vw;max-height:75vh;border-radius:8px;"></video>
              <iframe class="wcpg-lb-iframe" referrerpolicy="strict-origin-when-cross-origin" frameborder="0" allowfullscreen
                allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
                title="" style="display:none"></iframe>
              <div class="wcpg-lb-spinner">
                <div class="wcpg-spinner-inner wcpg-lb-spin-inner"></div>
              </div>
              <button class="wcpg-lb-linked-video-btn" aria-label="Play video" style="display:none">
                <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>
              </button>
            </div>
          </div>

          <button class="wcpg-lb-arrow wcpg-lb-next" aria-label="Next image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          <!-- Caption -->
          <div class="wcpg-lb-caption-wrap">
            <div class="wcpg-lb-caption"></div>
          </div>

          <!-- Thumbnail strip -->
          <div class="wcpg-lb-thumbs-strip"></div>

        </div>`;
    return lb;
  },
  // Resets inline styles applied by the embed cover (fit-to-container) mode.
  _resetIframeCoverStyles() {
    if (!this.mainIframe) return;
    Object.assign(this.mainIframe.style, {
      position: "",
      top: "",
      left: "",
      width: "",
      height: "",
      transform: "",
      aspectRatio: ""
    });
  },
  _showPlaceholder(item) {
    // Guard: only fire once (initial page load). Once _hidePlaceholder
    // removes the element, this.placeholderImg is nulled permanently.
    const p = this.placeholderImg;
    if (!p || !item.placeholder) return;
    // Only lock mode needs this collapse-prevention aspect-ratio; adaptive
    // mode sets aspect-ratio per-swap in _renderItem() instead.
    if (item.w && item.h && this.opts.mainImageHeightMode === "lock") {
      this.mainDisplay.style.aspectRatio = `${item.w} / ${item.h}`;
    }
    p.src = item.placeholder;
    p.style.objectFit = this.opts.mainImageFit;
    p.classList.add("wcpg-placeholder-active");
  },
  _hidePlaceholder() {
    const p = this.placeholderImg;
    if (!p) return;
    // Null out immediately so no further calls can reactivate it.
    this.placeholderImg = null;
    p.classList.remove("wcpg-placeholder-active");
    // Remove from DOM after the CSS fade finishes — after this point the
    // element is gone and cannot interfere with any transition animations.
    setTimeout(() => {
      p.src = "";
      p.remove();
      // Adaptive mode owns aspect-ratio via _renderItem() — do not clear it here.
      if (this.opts.mainImageHeightMode !== "adaptive") {
        this.mainDisplay.style.aspectRatio = "";
      }
    }, 400);
  },
  _buildSingleStackedItem(item, i) {
    const itemWrap = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-stacked-item");
    itemWrap.setAttribute("data-wcpg-stacked-index", i);
    const isVid = item.type === "video";
    const isEmbed = item.type === "youtube" || item.type === "vimeo";
    if (isEmbed) {
      const iframe = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("iframe", "wcpg-stacked-iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media");
      let embedSrc = item.embed || item.src;
      if (item.type === "youtube" && embedSrc.indexOf("enablejsapi=") === -1) {
        embedSrc += (embedSrc.indexOf("?") === -1 ? "?" : "&") + "enablejsapi=1";
      }
      iframe.src = embedSrc;
      itemWrap.appendChild(iframe);
    } else if (isVid) {
      const video = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("video", "wcpg-stacked-video");
      video.controls = this.opts.videoControls;
      video.playsInline = true;
      video.loop = this.opts.videoHostedLoop;
      if (this.opts.videoHostedMuted) video.muted = true;
      video.src = item.src;
      if (item.poster) video.poster = item.poster;
      itemWrap.appendChild(video);
    } else {
      const zoomDisplay = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-stacked-display");
      const img = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img", "wcpg-stacked-img");
      img.src = item.src;
      img.alt = item.caption || "";
      img.draggable = false;
      img.style.objectFit = this.opts.mainImageFit;
      if (item.w && item.h) {
        itemWrap.style.aspectRatio = `${item.w} / ${item.h}`;
      }
      if (item.placeholder) {
        const ph = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img", "wcpg-stacked-placeholder");
        ph.src = item.placeholder;
        ph.alt = "";
        ph.draggable = false;
        ph.setAttribute("aria-hidden", "true");
        ph.style.objectFit = this.opts.mainImageFit;
        zoomDisplay.appendChild(ph);
        const clearPh = () => {
          itemWrap.style.aspectRatio = "";
          ph.classList.add("wcpg-stacked-ph-hide");
          setTimeout(() => ph.remove(), 400);
        };
        if (img.complete && img.naturalWidth > 0) {
          ph.remove();
          itemWrap.style.aspectRatio = "";
        } else {
          img.addEventListener("load", clearPh, {
            once: true
          });
        }
      }
      zoomDisplay.appendChild(img);
      itemWrap.appendChild(zoomDisplay);
      if (item.linkedVideoType) {
        const _isLvEmbed = item.linkedVideoType === "youtube" || item.linkedVideoType === "vimeo";
        const _lvPlay = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-linked-video-btn");
        _lvPlay.setAttribute("aria-label", "Play video");
        _lvPlay.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
        itemWrap.appendChild(_lvPlay);
        if (_isLvEmbed) {
          const _lvIframe = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("iframe", "wcpg-stacked-lv-iframe");
          _lvIframe.setAttribute("frameborder", "0");
          _lvIframe.setAttribute("allowfullscreen", "");
          _lvIframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media");
          let _lvSrc = item.linkedVideoEmbed || "";
          if (item.linkedVideoType === "youtube" && _lvSrc.indexOf("enablejsapi=") === -1) {
            _lvSrc += (_lvSrc.indexOf("?") === -1 ? "?" : "&") + "enablejsapi=1";
          }
          _lvIframe.setAttribute("data-wcpg-lv-src", _lvSrc);
          itemWrap.appendChild(_lvIframe);
        } else {
          const _lvVideo = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("video", "wcpg-stacked-lv-video");
          _lvVideo.controls = this.opts.videoControls;
          _lvVideo.playsInline = true;
          _lvVideo.loop = this.opts.videoHostedLoop;
          if (this.opts.videoHostedMuted) _lvVideo.muted = true;
          itemWrap.appendChild(_lvVideo);
        }
        const _lvClose = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-stacked-linked-close");
        _lvClose.setAttribute("aria-label", "Back to image");
        _lvClose.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
        itemWrap.appendChild(_lvClose);
      }
    }
    if (this.opts.lightbox && this.opts.lightboxOnClick) {
      const btn = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", `wcpg-lb-trigger wcpg-lb-pos-${this.opts.lightboxButtonPosition}`);
      btn.setAttribute("aria-label", "Open fullscreen");
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`;
      itemWrap.appendChild(btn);
      if (this._stackedLbTriggers) {
        this._stackedLbTriggers.push({
          el: btn,
          index: i
        });
      }
      if (!this.opts.lightboxButtonAutoHide) {
        itemWrap.classList.add("wcpg-lb-always");
      }
    }
    return itemWrap;
  },
  _buildStackedLayout() {
    // Renders all gallery items as a vertical stack (Anchor Navigation mode).
    // Dots live in an absolute anchor rail; position:sticky keeps them
    // centred in the viewport while the stack is scrolled through.

    this.wrapper.classList.add("wcpg-layout-stacked");

    // Null out carousel-specific refs so _destroy() guards work correctly
    this.mainWrap = null;
    this.mainDisplay = null;
    this.mainImg = null;
    this.mainVideo = null;
    this.mainIframe = null;
    this.placeholderImg = null;
    this.spinner = null; // no spinner in stacked layout

    const _anchorZoomEnabled = this.opts.anchorZoom !== false && this.opts.zoomOnHover;
    if (_anchorZoomEnabled) {
      this.lens = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-lens");
      this.lens.style.width = this.opts.lensSize + "px";
      this.lens.style.height = this.opts.lensSize + "px";
      this.lens.style.borderRadius = this.opts.lensShape === "circle" ? "50%" : this.opts.thumbnailBorderRadius + "px";
      this.lens.style.borderColor = this.opts.lensBorderColor;
      this.lens.style.borderWidth = this.opts.lensBorderWidth + "px";
      this.lens.style.backgroundRepeat = "no-repeat";
      this.winCursor = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-win-cursor");
      this.winCursor.style.borderColor = this.opts.zoomWindowCursorBorderColor;
      this.winCursor.style.borderWidth = this.opts.zoomWindowCursorBorderWidth + "px";
      this.winCursor.style.borderRadius = this.opts.zoomWindowCursorBorderRadius + "px";
      this.winCursor.style.background = this.opts.zoomWindowCursorBg;
      this.zoomWin = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-zoom-window");
      this.zoomWin.style.width = this.opts.zoomWindowWidth + "px";
      this.zoomWin.style.height = this.opts.zoomWindowHeight + "px";
      this.zoomWin.style.borderRadius = this.opts.zoomWindowBorderRadius + "px";
      this.zoomWin.style.setProperty("--wcpg-zwin-bw", this.opts.zoomWindowBorderWidth + "px");
      this.zoomWin.style.setProperty("--wcpg-zwin-bc", this.opts.zoomWindowBorderColor);
      this.zoomWin.style.boxShadow = this.opts.zoomWindowShadow ? "0 8px 40px rgba(0,0,0,0.22)" : "none";
      this.zoomWin.style.backgroundRepeat = "no-repeat";
      this.zoomWin.style.transition = this.opts.zoomWindowFadeEasing ? `opacity ${_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(this.opts.zoomWindowFadeEasingAmount, 0, 2000)}ms ease` : "none";
      document.body.appendChild(this.zoomWin);
    } else {
      this.lens = null;
      this.winCursor = null;
      this.zoomWin = null;
    }
    this.lbTrigger = null;
    this.mainPrev = null;
    this.mainNext = null;
    this.thumbsWrap = null;
    this.thumbsList = null;
    this.thumbEls = [];
    this.progressFill = null;
    this._countText = null;
    this._linkedVideoBtn = null;
    const useThumbNav = this.opts.stackedNavigationType === "thumbs" && this.items.length > 1;

    // ── Stage ──
    this.stage = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-stage");
    if (!useThumbNav && this.opts.stackedDotsPosition === "outside") {
      this.stage.classList.add("wcpg-dots-outside");
    }

    // ── Anchor dot rail — only when using dot navigation ──
    this.pagination = null;
    this.paginationDots = [];
    this._anchorRail = null;
    if (!useThumbNav && this.items.length > 1) {
      const _pgPos = this.opts.mainImagePaginationPosition || "left";
      this._anchorRail = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", `wcpg-anchor-rail wcpg-anchor-rail-${_pgPos}`);
      this.pagination = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", `wcpg-pagination wcpg-pagination-anchor wcpg-pagination-side wcpg-pagination-${_pgPos}`);
      this.items.forEach((_, i) => {
        const dot = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-dot" + (i === 0 ? " wcpg-dot-active" : ""));
        dot.setAttribute("aria-label", `Go to image ${i + 1}`);
        dot.setAttribute("data-index", i);
        this.pagination.appendChild(dot);
        this.paginationDots.push(dot);
      });
      this._anchorRail.appendChild(this.pagination);
      this.stage.appendChild(this._anchorRail);
    }

    // ── Stacked item list ──
    this.stackedWrap = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-stacked-wrap");
    this.stackedItems = [];
    this._stackedLbTriggers = [];
    this.items.forEach((item, i) => {
      const itemWrap = this._buildSingleStackedItem(item, i);
      this.stackedWrap.appendChild(itemWrap);
      this.stackedItems.push(itemWrap);
    });
    this.stage.appendChild(this.stackedWrap);

    // ── Lightbox DOM ──
    if (this.opts.lightbox && !this.constructor._lbEl) {
      this.constructor._lbEl = this._createLightboxDOM();
      document.body.appendChild(this.constructor._lbEl);
    }

    // ── Thumbnail navigation — only when using thumb navigation ──
    if (useThumbNav) {
      // Coerce top/bottom → left; those positions are unsupported in stacked layout
      if (!["left", "right"].includes(this.opts.thumbnailPosition)) {
        this.opts.thumbnailPosition = "left";
      }

      // Set CSS custom properties needed by the thumbnail system
      const s = this.wrapper.style;
      s.setProperty("--wcpg-thumb-w", this.opts.thumbnailWidth + "px");
      s.setProperty("--wcpg-thumb-h", this.opts.thumbnailHeight + "px");
      s.setProperty("--wcpg-thumb-gap", this.opts.thumbnailGap + "px");
      s.setProperty("--wcpg-strip-gap", this.opts.thumbnailStripGap + "px");
      s.setProperty("--wcpg-active-color", this.opts.thumbnailActiveBorderColor);
      s.setProperty("--wcpg-active-bw", this.opts.thumbnailActiveBorderWidth + "px");
      s.setProperty("--wcpg-thumb-radius", this.opts.thumbnailBorderRadius + "px");
      s.setProperty("--wcpg-grid-cols", String(Math.min(this.opts.thumbnailGridColumns, this.items.length)));

      // Sticky top offset for left/right thumb strips
      s.setProperty("--wcpg-stacked-thumbs-top", (this.opts.stackedThumbsStickyTop ?? 40) + "px");

      // Add position class so CSS targets thumb layout correctly
      this.wrapper.classList.add(`wcpg-thumb-${this.opts.thumbnailPosition}`);
      this._buildThumbnails();
      const isSidePos = ["left", "right"].includes(this.opts.thumbnailPosition);
      if (isSidePos && this.thumbsWrap) {
        const row = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-row");
        if (this.opts.thumbnailPosition === "left") {
          row.appendChild(this.thumbsWrap);
          row.appendChild(this.stage);
        } else {
          row.appendChild(this.stage);
          row.appendChild(this.thumbsWrap);
        }
        this.wrapper.appendChild(row);
      } else {
        this.wrapper.appendChild(this.stage);
        if (this.thumbsWrap) this.wrapper.appendChild(this.thumbsWrap);
      }
    } else {
      this.wrapper.appendChild(this.stage);
    }
    this.wrapper.querySelectorAll("[data-wcpg-skeleton]").forEach(sk => sk.remove());
  },
  // ── Sticky Split layout ───────────────────────────────────────────────────

  _buildStickySplitLayout() {
    this.wrapper.classList.add("wcpg-layout-sticky-split");
    const s = this.wrapper.style;
    s.setProperty("--wcpg-ss-main-w", this.opts.stickySplitMainWidthPercent + "%");
    s.setProperty("--wcpg-ss-gap", this.opts.stickySplitGap + "px");
    s.setProperty("--wcpg-ss-sticky-top", this.opts.stickySplitStickyTop + "px");
    s.setProperty("--wcpg-ss-item-gap", this.opts.stickySplitScrollItemGap + "px");
    s.setProperty("--wcpg-ss-item-radius", this.opts.stickySplitScrollItemBorderRadius + "px");
    s.setProperty("--wcpg-ss-item-aspect", this.opts.stickySplitScrollItemAspect === "auto" ? "auto" : this.opts.stickySplitScrollItemAspect);
    s.setProperty("--wcpg-ss-item-fit", this.opts.stickySplitScrollItemFit);
    s.setProperty("--wcpg-ss-item-bg", this.opts.mainImageBackground);

    // ── Main image elements (reuse same carousel machinery) ──
    this.stage = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-stage");
    this.mainWrap = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-main-wrap");
    this.mainDisplay = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-main-display");
    if (this.opts.mainImageHeightMode === "fixed" && this.opts.mainImageHeight) {
      this.mainDisplay.style.height = this.opts.mainImageHeight + "px";
    }
    this.mainImg = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img", "wcpg-main-img");
    this.mainImg.draggable = false;
    this.mainImg.style.objectFit = this.opts.mainImageFit;
    if (this.opts.mainImageFit === "cover") {
      this.mainDisplay.classList.add("wcpg-fit-cover");
    }
    this.placeholderImg = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img", "wcpg-placeholder-img");
    this.placeholderImg.draggable = false;
    this.placeholderImg.alt = "";
    this.placeholderImg.setAttribute("aria-hidden", "true");
    this.mainVideo = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("video", "wcpg-main-video");
    this.mainVideo.controls = this.opts.videoControls;
    this.mainVideo.playsInline = true;
    this.mainVideo.loop = this.opts.videoHostedLoop;
    if (this.opts.videoHostedMuted) this.mainVideo.muted = true;
    this.mainVideo.style.display = "none";
    this.mainIframe = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("iframe", "wcpg-main-iframe");
    this.mainIframe.setAttribute("frameborder", "0");
    this.mainIframe.setAttribute("allowfullscreen", "");
    this.mainIframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media");
    this.mainIframe.setAttribute("title", "");
    this.mainIframe.style.display = "none";
    this._linkedVideoBtn = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-linked-video-btn");
    this._linkedVideoBtn.setAttribute("aria-label", "Play video");
    this._linkedVideoBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
    this._linkedVideoBtn.style.display = "none";
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this._linkedVideoBtn, "click", e => {
      e.stopPropagation();
      this._playLinkedVideo();
    });
    this.mainDisplay.appendChild(this.placeholderImg);
    this.mainDisplay.appendChild(this.mainImg);
    this.mainDisplay.appendChild(this.mainVideo);
    this.mainDisplay.appendChild(this.mainIframe);
    this.mainDisplay.appendChild(this._linkedVideoBtn);
    this.spinner = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-spinner");
    this.spinner.appendChild(_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-spinner-inner"));
    this.lens = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-lens");
    this.lens.style.width = this.opts.lensSize + "px";
    this.lens.style.height = this.opts.lensSize + "px";
    this.lens.style.borderRadius = this.opts.lensShape === "circle" ? "50%" : this.opts.thumbnailBorderRadius + "px";
    this.lens.style.borderColor = this.opts.lensBorderColor;
    this.lens.style.borderWidth = this.opts.lensBorderWidth + "px";
    this.lens.style.backgroundRepeat = "no-repeat";
    this.winCursor = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-win-cursor");
    this.winCursor.style.borderColor = this.opts.zoomWindowCursorBorderColor;
    this.winCursor.style.borderWidth = this.opts.zoomWindowCursorBorderWidth + "px";
    this.winCursor.style.borderRadius = this.opts.zoomWindowCursorBorderRadius + "px";
    this.winCursor.style.background = this.opts.zoomWindowCursorBg;
    this.mainWrap.appendChild(this.winCursor);
    this.zoomWin = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-zoom-window");
    this.zoomWin.style.width = this.opts.zoomWindowWidth + "px";
    this.zoomWin.style.height = this.opts.zoomWindowHeight + "px";
    this.zoomWin.style.borderRadius = this.opts.zoomWindowBorderRadius + "px";
    this.zoomWin.style.setProperty("--wcpg-zwin-bw", this.opts.zoomWindowBorderWidth + "px");
    this.zoomWin.style.setProperty("--wcpg-zwin-bc", this.opts.zoomWindowBorderColor);
    this.zoomWin.style.boxShadow = this.opts.zoomWindowShadow ? "0 8px 40px rgba(0,0,0,0.22)" : "none";
    this.zoomWin.style.backgroundRepeat = "no-repeat";
    this.zoomWin.style.transition = this.opts.zoomWindowFadeEasing ? `opacity ${_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(this.opts.zoomWindowFadeEasingAmount, 0, 2000)}ms ease` : "none";
    this.lbTrigger = null;
    if (this.opts.lightbox && this.opts.lightboxOnClick) {
      this.lbTrigger = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", `wcpg-lb-trigger wcpg-lb-pos-${this.opts.lightboxButtonPosition}`);
      this.lbTrigger.setAttribute("aria-label", "Open fullscreen");
      this.lbTrigger.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`;
      this.mainWrap.appendChild(this.lbTrigger);
      if (!this.opts.lightboxButtonAutoHide) {
        this.mainWrap.classList.add("wcpg-lb-always");
      }
    }
    this.mainPrev = null;
    this.mainNext = null;
    if (this.opts.mainImageArrows && this.items.length > 1) {
      this.mainPrev = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-main-arrow wcpg-main-prev");
      this.mainPrev.setAttribute("aria-label", "Previous image");
      this.mainPrev.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`;
      this.mainNext = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-main-arrow wcpg-main-next");
      this.mainNext.setAttribute("aria-label", "Next image");
      this.mainNext.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;
      this.mainWrap.appendChild(this.mainPrev);
      this.mainWrap.appendChild(this.mainNext);
      if (!this.opts.mainImageArrowsAutoHide) {
        this.mainWrap.classList.add("wcpg-arrows-always");
      }
    }
    this.mainWrap.appendChild(this.mainDisplay);
    this.mainWrap.appendChild(this.spinner);
    this.mainWrap.appendChild(this.lens);
    this.stage.appendChild(this.mainWrap);
    this.pagination = null;
    this.paginationDots = [];
    this.progressFill = null;
    this._countText = null;
    if (this.opts.mainImagePagination && this.items.length > 1) {
      this.pagination = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-pagination");
      if (this.opts.mainImagePaginationType === "progressbar") {
        this.pagination.classList.add("wcpg-pagination-progress");
        this.progressFill = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-progress-fill");
        this.progressFill.style.width = 1 / this.items.length * 100 + "%";
        this.pagination.appendChild(this.progressFill);
      } else if (this.opts.mainImagePaginationType === "count") {
        this.pagination.classList.add("wcpg-pagination-count");
        const countPrev = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-count-nav wcpg-count-prev");
        countPrev.setAttribute("aria-label", "Previous image");
        countPrev.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>`;
        this._countText = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("span", "wcpg-count-text");
        this._countText.textContent = `1 / ${this.items.length}`;
        const countNext = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-count-nav wcpg-count-next");
        countNext.setAttribute("aria-label", "Next image");
        countNext.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>`;
        this.pagination.appendChild(countPrev);
        this.pagination.appendChild(this._countText);
        this.pagination.appendChild(countNext);
      } else {
        this.items.forEach((_, i) => {
          const dot = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-dot" + (i === 0 ? " wcpg-dot-active" : ""));
          dot.setAttribute("aria-label", `Go to image ${i + 1}`);
          dot.setAttribute("data-index", i);
          this.pagination.appendChild(dot);
          this.paginationDots.push(dot);
        });
      }
      if (this.opts.mainImagePaginationAutoHide) {
        this.pagination.classList.add("wcpg-pagination-autohide");
      }
      this.mainWrap.appendChild(this.pagination);
    }
    document.body.appendChild(this.zoomWin);

    // ── Scroll column items ──
    this.ssScrollWrap = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-ss-wrap");
    this._ssItemEls = [];
    this.items.forEach((item, i) => {
      const itemEl = this._buildSSScrollItem(item, i);
      if (i !== 0 || this.opts.stickySplitShowMainInScroll !== false) {
        this.ssScrollWrap.appendChild(itemEl);
      }
      this._ssItemEls.push(itemEl);
    });
    const stickyCol = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-ss-sticky-col");
    this.ssStickyCol = stickyCol;
    stickyCol.appendChild(this.stage);
    const scrollCol = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-ss-scroll-col");
    scrollCol.appendChild(this.ssScrollWrap);
    const row = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-ss-row");
    if (this.opts.stickySplitMainSide === "right") {
      row.appendChild(scrollCol);
      row.appendChild(stickyCol);
    } else {
      row.appendChild(stickyCol);
      row.appendChild(scrollCol);
    }
    this.wrapper.appendChild(row);

    // Carousel thumbnail refs nulled — not used in sticky-split desktop mode
    this.thumbsWrap = null;
    this.thumbsList = null;
    this.thumbEls = [];
    if (this.opts.lightbox && !this.constructor._lbEl) {
      this.constructor._lbEl = this._createLightboxDOM();
      document.body.appendChild(this.constructor._lbEl);
    }
    this._renderItem(0, true);
    this.wrapper.querySelectorAll("[data-wcpg-skeleton]").forEach(sk => sk.remove());
  },
  _buildSSScrollItem(item, i) {
    const isVid = item.type === "video";
    const isEmbed = item.type === "youtube" || item.type === "vimeo";
    const clickable = this.opts.stickySplitClickAction === "lightbox" && this.opts.lightbox;
    const itemEl = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-ss-item" + (clickable ? " wcpg-ss-clickable" : ""));
    itemEl.setAttribute("data-index", i);
    const playBadgeHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`;
    if (isVid || isEmbed) {
      if (item.thumb) {
        // Thumbnail image available — render it normally
        const img = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img", "wcpg-ss-img");
        img.alt = item.caption || "";
        img.loading = i === 0 ? "eager" : "lazy";
        img.draggable = false;
        img.src = item.thumb;
        itemEl.appendChild(img);
      } else {
        // No thumbnail: let the item itself carry the aspect-ratio so the
        // flex layout engine (flex-direction:column) can resolve the height
        // directly from the item's already-known cross-axis (width).
        // A child div with aspect-ratio creates a circular dependency and
        // collapses to 0 height in many browsers.
        itemEl.classList.add("wcpg-ss-no-thumb");
      }
      const badge = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-ss-play-badge");
      badge.innerHTML = playBadgeHTML;
      itemEl.appendChild(badge);
    } else {
      const img = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img", "wcpg-ss-img");
      img.alt = item.caption || "";
      img.loading = i === 0 ? "eager" : "lazy";
      img.draggable = false;
      img.src = item.src || item.thumb || "";
      itemEl.appendChild(img);

      // Image with a linked video — overlay a play badge
      if (item.linkedVideoType) {
        const badge = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-ss-play-badge");
        badge.innerHTML = playBadgeHTML;
        itemEl.appendChild(badge);
      }
    }
    if (this.opts.stickySplitShowCaption && item.caption) {
      const cap = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-ss-caption");
      cap.textContent = item.caption;
      itemEl.appendChild(cap);
    }
    return itemEl;
  },
  // ── Hierarchy Grid layout ─────────────────────────────────────────────────

  _buildSingleHGItem(item, i, isHero) {
    const itemWrap = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-hg-item" + (isHero ? " wcpg-hg-hero" : ""));
    itemWrap.setAttribute("data-wcpg-hg-index", i);

    // Reserve the hero's height before the image loads so the layout
    // doesn't collapse between skeleton removal and image decode.
    if (isHero && item.w && item.h) {
      itemWrap.style.aspectRatio = `${item.w} / ${item.h}`;
    }
    const isVid = item.type === "video";
    const isEmbed = item.type === "youtube" || item.type === "vimeo";
    if (isEmbed) {
      const iframe = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("iframe", "wcpg-hg-iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media");
      let embedSrc = item.embed || item.src;
      if (item.type === "youtube" && embedSrc.indexOf("enablejsapi=") === -1) {
        embedSrc += (embedSrc.indexOf("?") === -1 ? "?" : "&") + "enablejsapi=1";
      }
      iframe.src = embedSrc;
      // Fit-container: fill grid cell absolutely when a fixed aspect-ratio
      // is applied to the cell (avoids empty space below a 16:9 iframe in a
      // 1:1 container), or when the user explicitly enables videoEmbedFitContainer.
      const _hgAspectFixed = this.opts.hierarchyGridItemAspect !== "auto";
      if (!isHero && (this.opts.videoEmbedFitContainer || _hgAspectFixed)) {
        iframe.classList.add("wcpg-fit");
      }
      itemWrap.appendChild(iframe);
    } else if (isVid) {
      const video = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("video", "wcpg-hg-video");
      video.controls = this.opts.videoControls;
      video.playsInline = true;
      video.loop = this.opts.videoHostedLoop;
      if (this.opts.videoHostedMuted) video.muted = true;
      if (this.opts.videoHostedAutoplay) {
        video.autoplay = true;
        video.muted = true; // browsers require muted for autoplay
      }
      video.setAttribute("preload", "metadata");
      video.src = item.src;
      // Use explicit poster first, fall back to thumbnail so the cell
      // shows a preview frame instead of a black rectangle
      const _vPoster = item.poster || item.thumb || "";
      if (_vPoster) video.poster = _vPoster;
      // Fit-container: fill grid cell absolutely when a fixed aspect-ratio
      // is applied to the cell, or when the user explicitly enables videoHostedFitContainer.
      const _hgAspectFixedVid = this.opts.hierarchyGridItemAspect !== "auto";
      if (!isHero && (this.opts.videoHostedFitContainer || _hgAspectFixedVid)) {
        video.classList.add("wcpg-fit");
      }
      itemWrap.appendChild(video);
    } else {
      const zoomDisplay = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-hg-display");
      const img = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img", "wcpg-hg-img");
      img.src = item.src;
      img.alt = item.caption || "";
      img.draggable = false;
      if (isHero) {
        img.style.objectFit = this.opts.mainImageFit;
      }
      if (item.placeholder) {
        const ph = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img", "wcpg-hg-placeholder");
        ph.src = item.placeholder;
        ph.alt = "";
        ph.draggable = false;
        ph.setAttribute("aria-hidden", "true");
        ph.style.objectFit = isHero ? this.opts.mainImageFit : this.opts.hierarchyGridItemFit || "cover";
        zoomDisplay.appendChild(ph);
        const clearPh = () => {
          ph.classList.add("wcpg-hg-ph-hide");
          setTimeout(() => ph.remove(), 400);
        };
        if (img.complete && img.naturalWidth > 0) {
          ph.remove();
        } else {
          img.addEventListener("load", clearPh, {
            once: true
          });
        }
      }
      zoomDisplay.appendChild(img);
      itemWrap.appendChild(zoomDisplay);

      // Linked video — reuse wcpg-stacked-lv-* elements so the
      // shared _playStackedLinkedVideo / _stopStackedLinkedVideo
      // methods work without duplication.
      if (item.linkedVideoType) {
        const _isLvEmbed = item.linkedVideoType === "youtube" || item.linkedVideoType === "vimeo";
        const _lvPlay = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-linked-video-btn");
        _lvPlay.setAttribute("aria-label", "Play video");
        _lvPlay.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
        itemWrap.appendChild(_lvPlay);
        if (_isLvEmbed) {
          const _lvIframe = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("iframe", "wcpg-stacked-lv-iframe");
          _lvIframe.setAttribute("frameborder", "0");
          _lvIframe.setAttribute("allowfullscreen", "");
          _lvIframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media");
          let _lvSrc = item.linkedVideoEmbed || "";
          if (item.linkedVideoType === "youtube" && _lvSrc.indexOf("enablejsapi=") === -1) {
            _lvSrc += (_lvSrc.indexOf("?") === -1 ? "?" : "&") + "enablejsapi=1";
          }
          _lvIframe.setAttribute("data-wcpg-lv-src", _lvSrc);
          itemWrap.appendChild(_lvIframe);
        } else {
          const _lvVideo = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("video", "wcpg-stacked-lv-video");
          _lvVideo.controls = this.opts.videoControls;
          _lvVideo.playsInline = true;
          _lvVideo.loop = this.opts.videoHostedLoop;
          if (this.opts.videoHostedMuted) _lvVideo.muted = true;
          itemWrap.appendChild(_lvVideo);
        }
        const _lvClose = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-stacked-linked-close");
        _lvClose.setAttribute("aria-label", "Back to image");
        _lvClose.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
        itemWrap.appendChild(_lvClose);
      }
    }

    // Lightbox trigger: skip for hosted video items — the trigger button
    // is positioned at bottom-right and would overlay the native controls bar.
    // Embed (iframe) and image items keep the trigger as normal.
    if (this.opts.lightbox && this.opts.lightboxOnClick && !isVid) {
      const btn = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", `wcpg-lb-trigger wcpg-lb-pos-${this.opts.lightboxButtonPosition}`);
      btn.setAttribute("aria-label", "Open fullscreen");
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`;
      itemWrap.appendChild(btn);
      if (this._hgLbTriggers) {
        this._hgLbTriggers.push({
          el: btn,
          index: i
        });
      }
      if (!this.opts.lightboxButtonAutoHide) {
        itemWrap.classList.add("wcpg-lb-always");
      }
    }
    return itemWrap;
  },
  _buildTilesLayout() {
    this.wrapper.classList.add("wcpg-layout-tiles");

    // Null out carousel-specific refs
    this.mainWrap = null;
    this.mainDisplay = null;
    this.mainImg = null;
    this.mainVideo = null;
    this.mainIframe = null;
    this.placeholderImg = null;
    this.spinner = null;
    const _tilesZoomEnabled = this.opts.tilesZoom !== false && this.opts.zoomOnHover;
    if (_tilesZoomEnabled) {
      this.lens = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-lens");
      this.lens.style.width = this.opts.lensSize + "px";
      this.lens.style.height = this.opts.lensSize + "px";
      this.lens.style.borderRadius = this.opts.lensShape === "circle" ? "50%" : this.opts.thumbnailBorderRadius + "px";
      this.lens.style.borderColor = this.opts.lensBorderColor;
      this.lens.style.borderWidth = this.opts.lensBorderWidth + "px";
      this.lens.style.backgroundRepeat = "no-repeat";
      this.winCursor = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-win-cursor");
      this.winCursor.style.borderColor = this.opts.zoomWindowCursorBorderColor;
      this.winCursor.style.borderWidth = this.opts.zoomWindowCursorBorderWidth + "px";
      this.winCursor.style.borderRadius = this.opts.zoomWindowCursorBorderRadius + "px";
      this.winCursor.style.background = this.opts.zoomWindowCursorBg;
      this.zoomWin = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-zoom-window");
      this.zoomWin.style.width = this.opts.zoomWindowWidth + "px";
      this.zoomWin.style.height = this.opts.zoomWindowHeight + "px";
      this.zoomWin.style.borderRadius = this.opts.zoomWindowBorderRadius + "px";
      this.zoomWin.style.setProperty("--wcpg-zwin-bw", this.opts.zoomWindowBorderWidth + "px");
      this.zoomWin.style.setProperty("--wcpg-zwin-bc", this.opts.zoomWindowBorderColor);
      this.zoomWin.style.boxShadow = this.opts.zoomWindowShadow ? "0 8px 40px rgba(0,0,0,0.22)" : "none";
      this.zoomWin.style.backgroundRepeat = "no-repeat";
      this.zoomWin.style.transition = this.opts.zoomWindowFadeEasing ? `opacity ${_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(this.opts.zoomWindowFadeEasingAmount, 0, 2000)}ms ease` : "none";
      document.body.appendChild(this.zoomWin);
    } else {
      this.lens = null;
      this.winCursor = null;
      this.zoomWin = null;
    }
    this.lbTrigger = null;
    this.mainPrev = null;
    this.mainNext = null;
    this.thumbsWrap = null;
    this.thumbsList = null;
    this.thumbEls = [];
    this.progressFill = null;
    this._countText = null;
    this._linkedVideoBtn = null;

    // ── Tiles outer wrap ──
    this.tilesWrap = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-tiles-wrap");
    this.tilesGrid = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-tiles-grid");
    this.tilesItems = [];
    this._tilesLbTriggers = [];
    if (this.opts.tilesItemAspect === "auto") {
      this.tilesGrid.classList.add("wcpg-tiles-aspect-auto");
    }
    const initialCount = this.opts.tilesInitialCount > 0 ? this.opts.tilesInitialCount : this.items.length;
    this.items.forEach((item, i) => {
      const itemWrap = this._buildSingleTilesItem(item, i);
      if (i >= initialCount) {
        itemWrap.classList.add("wcpg-tiles-hidden");
      }
      this.tilesGrid.appendChild(itemWrap);
      this.tilesItems.push(itemWrap);
    });
    this.tilesWrap.appendChild(this.tilesGrid);

    // ── Show More / Show Less button ──
    this._tilesExpanded = false;
    this._tilesShowMoreWrap = null;
    this._tilesShowMoreBtn = null;
    const hasHidden = this.items.length > initialCount;
    if (this.opts.tilesShowMoreEnabled !== false && hasHidden) {
      this._tilesShowMoreWrap = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-tiles-show-more-wrap");
      this._tilesShowMoreBtn = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-tiles-show-more-btn");
      this._tilesShowMoreBtn.type = "button";
      this._updateTilesShowMoreBtn();
      this._tilesShowMoreWrap.appendChild(this._tilesShowMoreBtn);
      this.tilesWrap.appendChild(this._tilesShowMoreWrap);
    }

    // ── Lightbox DOM ──
    if (this.opts.lightbox && !this.constructor._lbEl) {
      this.constructor._lbEl = this._createLightboxDOM();
      document.body.appendChild(this.constructor._lbEl);
    }
    this.wrapper.appendChild(this.tilesWrap);
    this.wrapper.querySelectorAll("[data-wcpg-skeleton]").forEach(sk => sk.remove());
  },
  _updateTilesShowMoreBtn() {
    if (!this._tilesShowMoreBtn) return;
    const text = this._tilesExpanded ? this.opts.tilesShowLessText || "Show Less" : this.opts.tilesShowMoreText || "Show More";
    const arrow = this._tilesExpanded ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>` : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>`;
    this._tilesShowMoreBtn.innerHTML = `<span>${text}</span>${arrow}`;
  },
  _buildSingleTilesItem(item, i) {
    const itemWrap = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-tiles-item");
    itemWrap.setAttribute("data-wcpg-tiles-index", i);
    const isVid = item.type === "video";
    const isEmbed = item.type === "youtube" || item.type === "vimeo";
    if (isEmbed) {
      const iframe = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("iframe", "wcpg-tiles-iframe");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media");
      let embedSrc = item.embed || item.src;
      if (item.type === "youtube" && embedSrc.indexOf("enablejsapi=") === -1) {
        embedSrc += (embedSrc.indexOf("?") === -1 ? "?" : "&") + "enablejsapi=1";
      }
      iframe.src = embedSrc;
      if (this.opts.videoEmbedFitContainer || this.opts.tilesItemAspect !== "auto") {
        iframe.classList.add("wcpg-fit");
      }
      itemWrap.appendChild(iframe);
    } else if (isVid) {
      const video = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("video", "wcpg-tiles-video");
      video.controls = this.opts.videoControls;
      video.playsInline = true;
      video.loop = this.opts.videoHostedLoop;
      if (this.opts.videoHostedMuted) video.muted = true;
      if (this.opts.videoHostedAutoplay) {
        video.autoplay = true;
        video.muted = true;
      }
      video.setAttribute("preload", "metadata");
      video.src = item.src;
      const _vPoster = item.poster || item.thumb || "";
      if (_vPoster) video.poster = _vPoster;
      if (this.opts.videoHostedFitContainer || this.opts.tilesItemAspect !== "auto") {
        video.classList.add("wcpg-fit");
      }
      itemWrap.appendChild(video);
    } else {
      const zoomDisplay = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-tiles-display");
      const img = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img", "wcpg-tiles-img");
      img.src = item.src;
      img.alt = item.caption || "";
      img.draggable = false;
      if (item.placeholder) {
        const ph = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img", "wcpg-tiles-placeholder");
        ph.src = item.placeholder;
        ph.alt = "";
        ph.draggable = false;
        ph.setAttribute("aria-hidden", "true");
        zoomDisplay.appendChild(ph);
        const clearPh = () => {
          ph.classList.add("wcpg-tiles-ph-hide");
          setTimeout(() => ph.remove(), 400);
        };
        if (img.complete && img.naturalWidth > 0) {
          ph.remove();
        } else {
          img.addEventListener("load", clearPh, {
            once: true
          });
        }
      }
      zoomDisplay.appendChild(img);
      itemWrap.appendChild(zoomDisplay);
    }

    // Lightbox trigger
    if (this.opts.lightbox && this.opts.lightboxOnClick && !isVid) {
      const btn = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", `wcpg-lb-trigger wcpg-lb-pos-${this.opts.lightboxButtonPosition}`);
      btn.setAttribute("aria-label", "Open fullscreen");
      btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`;
      itemWrap.appendChild(btn);
      if (this._tilesLbTriggers) {
        this._tilesLbTriggers.push({
          el: btn,
          index: i
        });
      }
      if (!this.opts.lightboxButtonAutoHide) {
        itemWrap.classList.add("wcpg-lb-always");
      }
    }
    return itemWrap;
  },
  _buildHierarchyGridLayout() {
    this.wrapper.classList.add("wcpg-layout-hierarchy-grid");

    // Null out carousel-specific refs so _destroy() guards work correctly
    this.mainWrap = null;
    this.mainDisplay = null;
    this.mainImg = null;
    this.mainVideo = null;
    this.mainIframe = null;
    this.placeholderImg = null;
    this.spinner = null;
    const _hgZoomEnabled = this.opts.hierarchyGridZoom !== false && this.opts.zoomOnHover;
    if (_hgZoomEnabled) {
      this.lens = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-lens");
      this.lens.style.width = this.opts.lensSize + "px";
      this.lens.style.height = this.opts.lensSize + "px";
      this.lens.style.borderRadius = this.opts.lensShape === "circle" ? "50%" : this.opts.thumbnailBorderRadius + "px";
      this.lens.style.borderColor = this.opts.lensBorderColor;
      this.lens.style.borderWidth = this.opts.lensBorderWidth + "px";
      this.lens.style.backgroundRepeat = "no-repeat";
      this.winCursor = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-win-cursor");
      this.winCursor.style.borderColor = this.opts.zoomWindowCursorBorderColor;
      this.winCursor.style.borderWidth = this.opts.zoomWindowCursorBorderWidth + "px";
      this.winCursor.style.borderRadius = this.opts.zoomWindowCursorBorderRadius + "px";
      this.winCursor.style.background = this.opts.zoomWindowCursorBg;
      this.zoomWin = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-zoom-window");
      this.zoomWin.style.width = this.opts.zoomWindowWidth + "px";
      this.zoomWin.style.height = this.opts.zoomWindowHeight + "px";
      this.zoomWin.style.borderRadius = this.opts.zoomWindowBorderRadius + "px";
      this.zoomWin.style.setProperty("--wcpg-zwin-bw", this.opts.zoomWindowBorderWidth + "px");
      this.zoomWin.style.setProperty("--wcpg-zwin-bc", this.opts.zoomWindowBorderColor);
      this.zoomWin.style.boxShadow = this.opts.zoomWindowShadow ? "0 8px 40px rgba(0,0,0,0.22)" : "none";
      this.zoomWin.style.backgroundRepeat = "no-repeat";
      this.zoomWin.style.transition = this.opts.zoomWindowFadeEasing ? `opacity ${_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(this.opts.zoomWindowFadeEasingAmount, 0, 2000)}ms ease` : "none";
      document.body.appendChild(this.zoomWin);
    } else {
      this.lens = null;
      this.winCursor = null;
      this.zoomWin = null;
    }
    this.lbTrigger = null;
    this.mainPrev = null;
    this.mainNext = null;
    this.thumbsWrap = null;
    this.thumbsList = null;
    this.thumbEls = [];
    this.progressFill = null;
    this._countText = null;
    this._linkedVideoBtn = null;

    // ── HG wrap — hero + grid ──
    this.hgWrap = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-hg-wrap");
    this.hgItems = [];
    this._hgLbTriggers = [];
    if (this.items.length > 0) {
      const heroWrap = this._buildSingleHGItem(this.items[0], 0, true);
      this.hgWrap.appendChild(heroWrap);
      this.hgItems.push(heroWrap);
    }
    if (this.items.length > 1) {
      const grid = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-hg-grid");
      if (this.opts.hierarchyGridItemAspect === "auto") {
        grid.classList.add("wcpg-hg-aspect-auto");
      }
      for (let i = 1; i < this.items.length; i++) {
        const itemWrap = this._buildSingleHGItem(this.items[i], i, false);
        grid.appendChild(itemWrap);
        this.hgItems.push(itemWrap);
      }
      this.hgWrap.appendChild(grid);
    }

    // ── Lightbox DOM ──
    if (this.opts.lightbox && !this.constructor._lbEl) {
      this.constructor._lbEl = this._createLightboxDOM();
      document.body.appendChild(this.constructor._lbEl);
    }
    this.wrapper.appendChild(this.hgWrap);
    this.wrapper.querySelectorAll("[data-wcpg-skeleton]").forEach(sk => sk.remove());
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domMethods);

/***/ },

/***/ "./src/frontend/js/wc-product-gallery/gallery.js"
/*!*******************************************************!*\
  !*** ./src/frontend/js/wc-product-gallery/gallery.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/frontend/js/wc-product-gallery/utils.js");


// Core gallery: init, item collection, rendering, navigation, events, variation support.

const galleryMethods = {
  _init() {
    this._collectItems();
    this._initMobileLayoutObserver();
    this._buildDOM();
    if (this.opts.galleryType === "anchor" && !this._mobileLayoutActive) {
      this._bindStackedEvents();
    } else if (this.opts.galleryType === "sticky-split" && !this._mobileLayoutActive) {
      this._bindStickySplitEvents();
      if (this.opts.preloadImages) this._preloadAll();
    } else if (this.opts.galleryType === "hierarchy-grid" && !this._mobileLayoutActive) {
      this._bindHierarchyGridEvents();
      if (this.opts.preloadImages) this._preloadAll();
    } else if (this.opts.galleryType === "tiles" && !this._mobileLayoutActive) {
      this._bindTilesEvents();
      if (this.opts.preloadImages) this._preloadAll();
    } else {
      this._bindEvents();
      this._initMobileObserver();
      if (this.opts.preloadImages) this._preloadAll();
      requestAnimationFrame(() => this._updateFadeMask());
    }
    if (this.opts.onInit) this.opts.onInit.call(this);
  },
  _collectItems() {
    const nodes = this.wrapper.querySelectorAll("[data-wcpg-image],[data-wcpg-video],[data-wcpg-embed]");
    if (nodes.length) {
      nodes.forEach(el => {
        const dataType = el.getAttribute("data-wcpg-type") || "";
        const hasEmbed = el.hasAttribute("data-wcpg-embed");
        const hasVid = el.hasAttribute("data-wcpg-video");
        let type, src, embed;
        if (hasEmbed || dataType === "youtube" || dataType === "vimeo") {
          // YouTube or Vimeo embed
          type = dataType || "youtube";
          embed = el.getAttribute("data-wcpg-embed") || "";
          src = embed; // src === embed for display purposes
        } else if (hasVid || dataType === "video") {
          // Hosted video file
          type = "video";
          src = el.getAttribute("data-wcpg-video") || "";
          embed = "";
        } else {
          // Standard image
          type = "image";
          src = el.getAttribute("data-wcpg-image") || "";
          embed = "";
        }

        // ── Per-image linked video ────────────────────────────
        // Editors can set a video URL/file on each gallery image
        // via the WP media attachment panel. The PHP loader writes
        // data-wcpg-image-video-* attrs on standard image elements.
        const linkedVideoType = type === "image" ? el.getAttribute("data-wcpg-image-video-type") || "" : "";
        const linkedVideoEmbed = linkedVideoType ? el.getAttribute("data-wcpg-image-video-embed") || "" : "";
        const linkedVideo = linkedVideoType ? el.getAttribute("data-wcpg-image-video") || "" : "";
        this.items.push({
          src,
          embed,
          zoomSrc: el.getAttribute(this.opts.dataImageAttr) || src,
          thumb: el.getAttribute("data-wcpg-thumb") || (type === "image" ? src : ""),
          caption: el.getAttribute(this.opts.dataCaptionAttr) || el.getAttribute("alt") || "",
          type,
          poster: el.getAttribute("data-wcpg-poster") || "",
          placeholder: el.getAttribute("data-wcpg-placeholder") || "",
          w: parseInt(el.getAttribute("data-wcpg-w") || "0", 10),
          h: parseInt(el.getAttribute("data-wcpg-h") || "0", 10),
          // Linked video (may be empty strings when none set)
          linkedVideoType,
          linkedVideoEmbed,
          linkedVideo
        });
      });
    } else {
      const img = this.wrapper.querySelector("img");
      if (img) {
        this.items.push({
          src: img.src,
          zoomSrc: img.getAttribute(this.opts.dataImageAttr) || img.src,
          thumb: img.src,
          caption: img.getAttribute("alt") || "",
          type: "image",
          poster: ""
        });
      }
    }
  },
  _renderItem(index, instant, dir = 0, isWrap = false) {
    const item = this.items[index];
    if (!item) return;
    const isVid = item.type === "video";
    const isEmbed = item.type === "youtube" || item.type === "vimeo";
    const isMedia = isVid || isEmbed; // any non-image item

    const swap = () => {
      // Snapshot container dimensions NOW — before hiding any element —
      // so the cover calculation gets the real image-driven height, not
      // the collapsed min-height that results after display:none is set.
      const snapW = this.mainDisplay.offsetWidth;
      const snapH = this.mainDisplay.offsetHeight;

      // ── Stop any active media before switching ─────────────────
      // Also clears any linked-video-active state from the previous item.
      this._stopLinkedVideo(true /* silent — iframe/video stop handled below */);
      this.mainVideo.pause();
      if (this.mainIframe && this.mainIframe.style.display !== "none") {
        // Unload iframe to stop playback immediately
        this.mainIframe.src = "";
      }

      // Linked-video play button: always hidden for standalone media items.
      if (this._linkedVideoBtn) this._linkedVideoBtn.style.display = "none";
      if (isEmbed) {
        // ── YouTube / Vimeo embed ──────────────────────────────
        this.mainImg.style.display = "none";
        this.mainVideo.style.display = "none";
        this.mainVideo.classList.remove("wcpg-fit");
        this.mainVideo.src = "";
        if (this.mainIframe) {
          if (this.opts.videoEmbedFitContainer) {
            // Cover mode: size the iframe so the 16:9 video content
            // fills the container in both axes (no black bars visible).
            const cW = snapW;
            const cH = snapH || Math.round(snapW * 9 / 16);
            if (!this.mainDisplay.style.height) {
              this.mainDisplay.style.height = cH + "px";
            }
            const videoRatio = 16 / 9;
            const containerRatio = cW / cH;
            let iW, iH;
            if (containerRatio >= videoRatio) {
              // Container wider than 16:9 — fill width, overflow height
              iW = cW;
              iH = Math.round(cW / videoRatio);
            } else {
              // Container taller than 16:9 — fill height, overflow width
              iH = cH;
              iW = Math.round(cH * videoRatio);
            }
            Object.assign(this.mainIframe.style, {
              position: "absolute",
              top: "50%",
              left: "50%",
              width: iW + "px",
              height: iH + "px",
              transform: "translate(-50%, -50%)",
              aspectRatio: "unset"
            });
          } else {
            this._resetIframeCoverStyles();
          }
          this.mainIframe.style.display = "block";
          this.mainIframe.src = item.embed || item.src;
        }
        this.mainWrap.classList.add("wcpg-no-zoom");
        if (this.lens) this.lens.style.visibility = "hidden";
      } else if (isVid) {
        // ── Hosted video ───────────────────────────────────────
        this.mainImg.style.display = "none";
        if (this.mainIframe) {
          this._resetIframeCoverStyles();
          this.mainIframe.style.display = "none";
          this.mainIframe.src = "";
        }
        // Apply fit-to-container: lock the display height then position
        // the video absolutely to fill it with object-fit:cover.
        if (this.opts.videoHostedFitContainer) {
          if (!this.mainDisplay.style.height) {
            this.mainDisplay.style.height = snapH + "px";
          }
          this.mainVideo.classList.add("wcpg-fit");
        } else {
          this.mainVideo.classList.remove("wcpg-fit");
        }
        this.mainVideo.style.display = "block";
        this.mainVideo.src = item.src;
        this.mainVideo.poster = item.poster || "";
        this.mainVideo.muted = this.opts.videoHostedMuted;
        this.mainVideo.load();
        if (this.opts.videoHostedAutoplay) {
          this.mainVideo.play().catch(() => {});
        }
        this.mainWrap.classList.add("wcpg-no-zoom");
        if (this.lens) this.lens.style.visibility = "hidden";
      } else {
        // ── Image ──────────────────────────────────────────────
        if (this.mainIframe) {
          this._resetIframeCoverStyles();
          this.mainIframe.style.display = "none";
          this.mainIframe.src = "";
        }
        this.mainVideo.classList.remove("wcpg-fit");
        this.mainImg.style.display = "";
        this.mainVideo.style.display = "none";
        this.mainVideo.src = "";
        // Release the fit-container height set by video/embed when returning to images.
        // Fixed and Lock modes must keep their height intact.
        // Adaptive uses min-height (not height), so always clear explicit height.
        {
          const _hm = this.opts.mainImageHeightMode;
          if (_hm !== "fixed" && _hm !== "lock") {
            this.mainDisplay.style.height = "";
          }
        }
        // Adaptive: drive container height from each item's known dimensions so
        // every image gets its natural aspect ratio without the grow-only
        // min-height accumulating and bleeding into subsequent images.
        if (this.opts.mainImageHeightMode === "adaptive") {
          this._adaptiveMaxH = null;
          this.mainDisplay.style.minHeight = "";
          this.mainDisplay.style.aspectRatio = item.w && item.h ? `${item.w} / ${item.h}` : "";
        }
        // Show blurred placeholder while the full image loads (initial
        // page load only). this.placeholderImg is nulled by _hidePlaceholder
        // after first use, so this is a no-op for all subsequent navigations.
        if (this.placeholderImg && item.placeholder && !(this.mainImg.src === item.src && this.mainImg.complete && this.mainImg.naturalWidth > 0)) {
          this._showPlaceholder(item);
        }
        this.mainImg.src = item.src;
        this.mainImg.alt = item.caption || "";
        // Block zoom until the image is rendered, unless the user has
        // opted in to allowing zoom before load (zoomBeforeLoad: true).
        // The 'load' handler lifts the block once naturalWidth/offsetHeight
        // are valid (needed for auto/match window sizing). For cached images
        // the browser sets complete=true synchronously after src assignment.
        if (!this.opts.zoomBeforeLoad) {
          this.mainWrap.classList.add("wcpg-no-zoom");
          if (this.lens) this.lens.style.visibility = "hidden";
          if (this.mainImg.complete && this.mainImg.naturalWidth > 0) {
            this.mainWrap.classList.remove("wcpg-no-zoom");
            if (this.lens) this.lens.style.visibility = "";
          }
        }
        this._hideSpinner();

        // Show the linked-video play button when this image has a video.
        if (this._linkedVideoBtn) {
          this._linkedVideoBtn.style.display = item.linkedVideoType ? "" : "none";
        }

        // Auto-play linked video when the relevant autoplay setting is on.
        if (item.linkedVideoType) {
          const _lvIsEmbed = item.linkedVideoType === "youtube" || item.linkedVideoType === "vimeo";
          if (_lvIsEmbed && this.opts.videoAutoplay || !_lvIsEmbed && this.opts.videoHostedAutoplay) {
            this._playLinkedVideo();
          }
        }
      }

      // ── Height mode: update after every swap ──────────────────────────
      // For adaptive: measure after layout and grow min-height if needed.
      // For lock with video/embed as first item: lock once layout settles.
      // Images in both modes are also handled by the 'load' event, which
      // covers slow-loading images; this handles cached images + all media.
      {
        const _hmSwap = this.opts.mainImageHeightMode;
        if (_hmSwap === "adaptive") {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => this._updateAdaptiveHeight());
          });
        } else if (_hmSwap === "lock" && !this.mainDisplay.style.height) {
          // Only before the first lock — no-op afterwards.
          requestAnimationFrame(() => {
            requestAnimationFrame(() => this._lockMainHeight());
          });
        }
      }
    };
    if (instant) {
      swap();
      return;
    }
    const type = this.opts.mainImageTransition;
    const dur = this.opts.mainImageTransitionDuration;

    // Skip transitions when navigating to or from a video/embed item.
    // The media player has its own loading state; CSS transitions on the
    // container look wrong and can leave the display in a bad state.
    if (isMedia) {
      swap();
      return;
    }

    // ── Carousel slide — two images animate simultaneously ──────────
    if (type === "slide" && dir !== 0) {
      // Cancel any in-flight slide
      this._slideAnimKey = (this._slideAnimKey || 0) + 1;
      const key = this._slideAnimKey;
      this.mainDisplay.querySelectorAll(".wcpg-slide-out").forEach(el => el.remove());

      // Snapshot dimensions BEFORE swap() can cause any reflow.
      const snapContainerW = this.mainDisplay.offsetWidth;
      const snapContainerH = this.mainDisplay.offsetHeight;
      // Use actual element rect so outImg mirrors mainImg exactly,
      // regardless of object-fit mode or letterboxing.
      const displayRect = this.mainDisplay.getBoundingClientRect();
      const imgElemRect = this.mainImg.getBoundingClientRect();

      // 1. Capture the outgoing image as an absolute overlay
      const outImg = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img", "wcpg-slide-out");
      outImg.src = this.mainImg.src;
      outImg.alt = "";
      outImg.draggable = false;
      outImg.style.position = "absolute";
      outImg.style.left = imgElemRect.left - displayRect.left + "px";
      outImg.style.top = imgElemRect.top - displayRect.top + "px";
      outImg.style.width = imgElemRect.width + "px";
      outImg.style.height = imgElemRect.height + "px";
      outImg.style.objectFit = this.opts.mainImageFit;
      this.mainDisplay.appendChild(outImg);

      // Lock container height so swap() cannot reflow the layout —
      // without this, switching to a taller image (height:auto) would
      // expand the gallery area mid-animation, making the outgoing
      // small image look like it "stretched" to fill the space.
      this.mainDisplay.style.height = snapContainerH + "px";
      const _cleanupHeight = () => {
        // Release the animation-time height lock.
        // Fixed/Lock keep their own height set; adaptive uses min-height so
        // explicit height (set only during the slide animation) can be cleared.
        const _hm = this.opts.mainImageHeightMode;
        if (_hm !== "fixed" && _hm !== "lock") {
          this.mainDisplay.style.height = "";
        }
      };
      const isVert = this.opts.mainImageSlideDirection === "vertical";
      const axis = isVert ? "translateY" : "translateX";
      if (isWrap) {
        // ── Wrap-around: short-range slide + opacity crossfade ─────
        const wrapDur = Math.round(dur * 0.65);
        const wrapEase = "cubic-bezier(0.25, 0.46, 0.45, 0.94)";
        const wt = `transform ${wrapDur}ms ${wrapEase}, opacity ${wrapDur}ms ease`;
        const travel = Math.round((isVert ? snapContainerH : snapContainerW) * 0.3);
        this.mainImg.style.transition = "none";
        this.mainImg.style.transform = `${axis}(${dir * travel}px)`;
        this.mainImg.style.opacity = "0";
        swap();
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (this._slideAnimKey !== key) return;
            outImg.style.transition = wt;
            this.mainImg.style.transition = wt;
            outImg.style.transform = `${axis}(${-dir * travel}px)`;
            outImg.style.opacity = "0";
            this.mainImg.style.transform = `${axis}(0px)`;
            this.mainImg.style.opacity = "1";
            setTimeout(() => {
              if (this._slideAnimKey !== key) return;
              outImg.remove();
              this.mainImg.style.transition = "";
              this.mainImg.style.transform = "";
              this.mainImg.style.opacity = "";
              _cleanupHeight();
            }, wrapDur + 20);
          });
        });
        return;
      }

      // ── Normal slide: full-width/height pan ──────────────────────────────
      const travel = isVert ? snapContainerH : snapContainerW;
      this.mainImg.style.transition = "none";
      this.mainImg.style.transform = `${axis}(${dir * travel}px)`;
      swap();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (this._slideAnimKey !== key) return;
          const ease = "cubic-bezier(0.42, 0, 0.18, 1)";
          const t = `transform ${dur}ms ${ease}`;
          outImg.style.transition = t;
          this.mainImg.style.transition = t;
          outImg.style.transform = `${axis}(${-dir * travel}px)`;
          this.mainImg.style.transform = `${axis}(0px)`;
          setTimeout(() => {
            if (this._slideAnimKey !== key) return;
            outImg.remove();
            this.mainImg.style.transition = "";
            this.mainImg.style.transform = "";
            _cleanupHeight();
          }, dur + 20);
        });
      });
      return;
    }

    // ── Fade / Zoom / None ──────────────────────────────────────────
    this._showSpinner();
    this.mainDisplay.style.transition = `opacity ${dur}ms ease` + (type === "zoom" ? `, transform ${dur}ms ease` : "") + (type === "slide" ? `, transform ${dur}ms ease` : "");
    this.mainDisplay.style.opacity = "0";
    if (type === "zoom") this.mainDisplay.style.transform = "scale(0.94)";
    if (type === "slide") this.mainDisplay.style.transform = "translateX(12px)";
    setTimeout(() => {
      swap();
      requestAnimationFrame(() => {
        this.mainDisplay.style.opacity = "1";
        this.mainDisplay.style.transform = "";
        setTimeout(() => {
          this.mainDisplay.style.transition = "";
        }, dur);
      });
    }, type === "none" ? 0 : dur);
  },
  _bindEvents() {
    if (this.opts.zoomOnHover) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "mouseenter", this._evZE = e => this._zoomEnter(e));
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "mousemove", this._evZM = e => this._zoomMove(e));
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "mouseleave", this._evZL = () => this._zoomLeave());
    }
    if (this.opts.touchZoom) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "touchstart", this._evTS = e => this._touchStart(e), {
        passive: false
      });
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "touchmove", this._evTM = e => this._touchMove(e), {
        passive: false
      });
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "touchend", this._evTE = e => this._touchEnd(e));
    }
    if (this.opts.mainImageSwipe && !this.opts.zoomOnHover && !this.opts.touchZoom && this.items.length > 1 && (this.opts.galleryType === "thumbnail" || this.opts.galleryType === "sticky-split")) {
      this._bindMainSwipe(this.mainWrap);
    }
    if (this.opts.mainImageScrollNav && this.items.length > 1 && this.opts.galleryType === "thumbnail") {
      this._scrollNavAccum = 0;
      this._evMainScrollNav = e => {
        e.preventDefault();
        if (this._scrollNavTimer) return;
        // Normalise delta across deltaMode values (pixels / lines / pages)
        const raw = e.deltaMode === 1 ? e.deltaY * 30 : e.deltaMode === 2 ? e.deltaY * 300 : e.deltaY;
        this._scrollNavAccum += raw || e.deltaX;
        // Only fire once the accumulated scroll exceeds a meaningful threshold
        if (Math.abs(this._scrollNavAccum) < 50) return;
        const dir = this._scrollNavAccum > 0 ? 1 : -1;
        this._scrollNavAccum = 0;
        const delay = this.opts.mainImageScrollNavDelay ?? 500;
        this._scrollNavTimer = setTimeout(() => {
          this._scrollNavTimer = null;
          this._scrollNavAccum = 0;
        }, delay);
        this._goTo(this.index + dir);
      };
      this.mainWrap.addEventListener("wheel", this._evMainScrollNav, {
        passive: false
      });
    }
    if (this.lbTrigger) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.lbTrigger, "click", this._evLbBtn = () => this._lbOpen(this.index));
    }
    if (this.mainPrev) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainPrev, "click", this._evMP = e => {
        e.stopPropagation();
        e.currentTarget.blur();
        this._goTo(this.index - 1);
      });
    }
    if (this.mainNext) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainNext, "click", this._evMN = e => {
        e.stopPropagation();
        e.currentTarget.blur();
        this._goTo(this.index + 1);
      });
    }
    if (this.pagination) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.pagination, "click", this._evPG = e => {
        const dot = e.target.closest(".wcpg-dot");
        if (dot) {
          this._goTo(parseInt(dot.dataset.index));
          return;
        }
        if (e.target.closest(".wcpg-count-prev")) {
          this._goTo(this.index - 1);
          return;
        }
        if (e.target.closest(".wcpg-count-next")) {
          this._goTo(this.index + 1);
          return;
        }
      });
    }

    // Disable zoom while hovering overlay controls (arrows, pagination, lb button).
    // These sit inside mainWrap so mouseleave/mouseenter on mainWrap won't re-fire
    // when moving between them — we must manually pause and resume here.
    // Note: pagination lives in stage (outside mainWrap) so it already gets
    // handled by mainWrap's mouseleave, but we include it for winCursor hiding.
    {
      const overlayEls = [this.lbTrigger, this.mainPrev, this.mainNext, this.pagination].filter(Boolean);
      this._overlayEls = overlayEls; // store for use in _goTo

      overlayEls.forEach(el => {
        // Always call _zoomLeave (also hides winCursor) — even if isZooming
        // is momentarily false due to a recent _goTo reset.
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(el, "mouseenter", () => {
          this._zoomLeave();
          // Explicitly hide winCursor regardless of zoom state
          if (this.winCursor) {
            this.winCursor.classList.remove("wcpg-win-cursor-active");
          }
        });
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(el, "mouseleave", e => {
          // Resume only when moving back into the image area, not to another button.
          const to = e.relatedTarget;
          if (this.opts.zoomOnHover && to && this.mainWrap.contains(to) && !overlayEls.some(b => b.contains(to))) {
            if (this._lastMouseEvent) this._zoomEnter(this._lastMouseEvent);
          }
        });
      });
    }
    // Open lightbox on main image click — desktop+touch
    // Enabled always on touch; on desktop also when lightboxOpenOnImageClick is true.
    // In click-trigger mode, image clicks on desktop belong to zoom — skip lightbox.
    if (this.opts.lightbox) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "click", this._evImgClick = e => {
        if (e.target.closest(".wcpg-lb-trigger")) return;
        if (e.target.closest(".wcpg-pagination")) return;
        if (this._zs.pinching) return;
        if (this._suppressClick) return;
        if (this.opts.lightboxOpenOnImageClick) {
          this._lbOpen(this.index);
        }
      });
      if (this.opts.lightboxOpenOnImageClick && !this._isMobile) {
        this.mainWrap.style.cursor = "zoom-in";
      }
    }
    this._bindThumbListEvents();
    // Click on the video area to play/pause when native controls are hidden.
    // Stops propagation so lightbox does not open simultaneously.
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainVideo, "click", this._evVidClick = e => {
      if (this.opts.videoControls) return;
      e.stopPropagation();
      if (this.mainVideo.paused) {
        this.mainVideo.play().catch(() => {});
      } else {
        this.mainVideo.pause();
      }
    });
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainImg, "loadstart", () => this._showSpinner());
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainImg, "load", () => {
      this._hideSpinner();
      this._hidePlaceholder();
      if (!this.mainWrap.classList.contains("wcpg-linked-video-active")) {
        this.mainWrap.classList.remove("wcpg-no-zoom");
        if (this.lens) this.lens.style.visibility = "";
      }
      const _hm = this.opts.mainImageHeightMode;
      if (_hm === "lock") this._lockMainHeight();else if (_hm === "adaptive") this._updateAdaptiveHeight();
    });
    window.addEventListener("resize", this._resizeHandler);
    window.addEventListener("scroll", this._scrollHandler, {
      passive: true
    });
    if (this.opts.stackedStickyEnabled) {
      this._initStackedSticky();
    }
  },
  _goTo(index) {
    // Stacked mode: update navigation indicator and scroll to item
    if (this.opts.galleryType === "anchor" && !this._mobileLayoutActive) {
      const len = this.items.length;
      if (!len) return;
      index = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(index, 0, len - 1);
      if (index === this.index) return;
      this.index = index;
      if (this.opts.stackedNavigationType === "thumbs") {
        this._updateThumbActive(index);
        this._scrollThumbToIndex(index);
      } else {
        this._updatePagination(index);
      }
      this._scrollToStackedItem(index);
      return;
    }

    // Sticky Split mode: update main viewer + scroll scroll-col item into view
    if (this.opts.galleryType === "sticky-split" && !this._mobileLayoutActive) {
      const len = this.items.length;
      if (!len) return;
      index = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(index, 0, len - 1);
      if (index === this.index) return;
      this.index = index;
      this._renderItem(index, true);
      this._scrollSSItemToView(index);
      this._updatePagination(index);
      return;
    }
    const len = this.items.length;
    if (!len) return;
    const prevIdx = this.index;
    if (this.opts.thumbnailLoop) {
      index = (index % len + len) % len;
    } else {
      index = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(index, 0, len - 1);
    }
    if (index === prevIdx) return;
    this.index = index;

    // Detect wrap-around: going last→first or first→last
    const isWrap = prevIdx === len - 1 && index === 0 || prevIdx === 0 && index === len - 1;

    // Keep directional slide for wrap — avoids the spinner that the fade path triggers.
    // The distinct wrap feel comes from a shorter-range translate + opacity crossfade
    // inside _renderItem when isWrap is true.
    let slideDir = isWrap ? prevIdx === len - 1 && index === 0 ? 1 : -1 : index > prevIdx ? 1 : -1;
    if (this._isRTL) slideDir = -slideDir;

    // Reset touch zoom
    if (this._zs.momentumRaf) {
      cancelAnimationFrame(this._zs.momentumRaf);
      this._zs.momentumRaf = null;
    }
    this._zoomLeave();
    this._zs.scale = 1;
    this._zs.panX = 0;
    this._zs.panY = 0;
    this._zs.originX = 0;
    this._zs.originY = 0;
    this.mainImg.style.transform = "";
    this._renderItem(index, false, slideDir, isWrap);
    this._updateThumbActive(index);
    this._scrollThumbToIndex(index, slideDir, isWrap);
    this._updatePagination(index);

    // Re-enter zoom if the cursor is still over the image area (mouseenter won't
    // re-fire because the pointer never left mainWrap). Skip if cursor is sitting
    // on an overlay control (arrow, pagination, lb trigger) — those pause zoom.
    if (this.opts.zoomOnHover && this._lastMouseEvent && this.mainWrap.matches(":hover")) {
      const pt = document.elementFromPoint(this._lastMouseEvent.clientX, this._lastMouseEvent.clientY);
      const overOverlay = pt && this._overlayEls && this._overlayEls.some(el => el.contains(pt));
      if (!overOverlay) {
        const ev = this._lastMouseEvent;
        requestAnimationFrame(() => this._zoomEnter(ev));
      }
    }
    if (this.opts.onImageChange) this.opts.onImageChange.call(this, index, prevIdx);
    if (this.opts.onThumbClick) this.opts.onThumbClick.call(this, index);
  },
  _updateMainArrows(index) {
    if (!this.mainPrev || !this.mainNext) return;
    const len = this.items.length;
    const loop = this.opts.thumbnailLoop;
    this.mainPrev.classList.toggle("wcpg-btn-disabled", !loop && index === 0);
    this.mainNext.classList.toggle("wcpg-btn-disabled", !loop && index === len - 1);
  },
  _updatePagination(index) {
    if (!this.pagination) return;
    if (this.opts.mainImagePaginationType === "progressbar") {
      if (this.progressFill) {
        const pct = this.items.length > 1 ? (index + 1) / this.items.length * 100 : 100;
        this.progressFill.style.width = pct + "%";
      }
      return;
    }
    if (this.opts.mainImagePaginationType === "count") {
      if (this._countText) {
        this._countText.textContent = `${index + 1} / ${this.items.length}`;
      }
      return;
    }
    if (!this.paginationDots || !this.paginationDots.length) return;
    this.paginationDots.forEach((dot, i) => {
      dot.classList.toggle("wcpg-dot-active", i === index);
    });
  },
  _showSpinner() {
    if (this.opts.spinner) this.spinner.classList.add("wcpg-spinner-active");
  },
  _hideSpinner() {
    this.spinner.classList.remove("wcpg-spinner-active");
  },
  _preloadAll() {
    this.items.forEach(item => {
      if (item.type === "image") {
        new Image().src = item.src;
        if (item.zoomSrc && item.zoomSrc !== item.src) new Image().src = item.zoomSrc;
      }
    });
  },
  _onResize() {
    this._clampThumbOffset();
    if (this.opts.zoomType === "window" && this.isZooming) this._positionZoomWindow();
    const _hm = this.opts.mainImageHeightMode;
    if (_hm === "lock") {
      this._relockMainHeight();
    } else if (_hm === "adaptive") {
      // Reset the tracked max so the natural height of the current item
      // (which may differ at the new container width) becomes the new baseline.
      this._adaptiveMaxH = null;
      this.mainDisplay.style.minHeight = "";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => this._updateAdaptiveHeight());
      });
    }
  },
  _lockMainHeight() {
    const h = this.mainDisplay.offsetHeight;
    if (h > 0) this.mainDisplay.style.height = h + "px";
  },
  _relockMainHeight() {
    // When any media is active in the main display area (a direct YouTube/Vimeo
    // embed, a hosted video, or a linked video attached to an image), the main
    // image is hidden and the player element is either absolutely positioned or
    // sized by aspect-ratio. Clearing the locked height forces the browser to
    // reflow the container — but at fullscreen viewport dimensions the measured
    // height is wrong, so _lockMainHeight() then freezes the container at that
    // wrong value. YouTube native fullscreen fires window.resize both on enter
    // and on exit, which is what triggers this code path.
    // Fix: skip the relock entirely while any media is playing.
    const isMediaActive =
    // Linked video playing on top of an image item
    this.mainWrap && this.mainWrap.classList.contains("wcpg-linked-video-active") ||
    // Direct YouTube / Vimeo embed gallery item
    this.mainIframe && this.mainIframe.style.display !== "none" && this.mainIframe.src !== "" ||
    // Direct hosted-video gallery item
    this.mainVideo && this.mainVideo.style.display !== "none" && this.mainVideo.src !== "";
    if (isMediaActive) return;

    // Temporarily release the lock so the browser can re-flow to the
    // natural height for the current width, then re-freeze.
    this.mainDisplay.style.height = "";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => this._lockMainHeight());
    });
  },
  _updateAdaptiveHeight() {
    // When aspect-ratio is set (known item dimensions), the container sizes
    // itself naturally — no min-height accumulation needed.
    if (this.mainDisplay.style.aspectRatio) return;
    // Fallback for items without known dimensions: grow min-height to the
    // tallest measured height so far to avoid layout collapse.
    const h = this.mainDisplay.offsetHeight;
    if (h > 0 && h > (this._adaptiveMaxH || 0)) {
      this._adaptiveMaxH = h;
      this.mainDisplay.style.minHeight = h + "px";
    }
  },
  _refreshGalleryView() {
    this.index = 0;
    this._adaptiveMaxH = null;
    if (this.mainDisplay) this.mainDisplay.style.minHeight = "";
    const _showThumbs = this._mobileLayoutActive ? !!this.opts.mobileShowThumbs : this.opts.thumbnailShow !== false;
    const needThumbs = this.items.length > 1 && _showThumbs;
    if (this.thumbsList) {
      // Clear existing thumb DOM nodes
      this.thumbsList.innerHTML = "";
      this.thumbEls = [];

      // Reset slider offset — state AND CSS transform.
      // Without calling _applyThumbOffset the thumbsList element
      // retains whatever translateX/Y it had before the swap, making
      // the rebuilt thumbnails appear offset or invisible.
      if (this._ts) {
        this._ts.offset = 0;
        this._ts.loopAnimating = false;
        this._ts.scrollWrapAnimating = false;
      }
      this._applyThumbOffset(false);
      if (needThumbs) {
        // Ensure the strip is visible (may have been hidden during a previous reset)
        if (this.thumbsWrap) this.thumbsWrap.style.display = "";
        // Rebuild thumbnail elements for the new item set
        this._buildThumbItems();
      } else {
        // No items to show — hide the thumbnail strip
        if (this.thumbsWrap) this.thumbsWrap.style.display = "none";
      }

      // Defer button visibility + fade mask update until layout is settled
      requestAnimationFrame(() => {
        this._updateThumbButtons();
        this._updateFadeMask();
      });
    } else if (needThumbs) {
      // Thumbnails were not built during init (product had 0 or 1 images).
      // Build them now so the variation gallery is fully navigable.
      this._buildThumbnails();
      this._insertThumbsIntoLayout();
      this._bindThumbListEvents();
      this._setupFitObserver();
      this._initStackObserver();
      requestAnimationFrame(() => {
        this._updateThumbButtons();
        this._updateFadeMask();
      });
    }

    // Rebuild pagination to match the new item count.
    if (this.pagination) {
      if (this.opts.mainImagePaginationType === "progressbar" || this.opts.mainImagePaginationType === "count") {
        // Progress bar and count just need to be reset to index 0.
        this._updatePagination(0);
      } else {
        // Rebuild dot buttons inside the existing container so the
        // delegated click listener (bound in _bindEvents) keeps working.
        this.pagination.innerHTML = "";
        this.paginationDots = [];
        this.items.forEach((_, i) => {
          const dot = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-dot" + (i === 0 ? " wcpg-dot-active" : ""));
          dot.setAttribute("aria-label", `Go to image ${i + 1}`);
          dot.setAttribute("data-index", i);
          this.pagination.appendChild(dot);
          this.paginationDots.push(dot);
        });
      }
    }

    // Render the first item and mark its thumbnail active
    this._renderItem(0, true);
    this._updateThumbActive(0);
  },
  // Bind delegated click/hover/keyboard and drag/scroll events to the thumbnail
  // strip. Extracted so both _bindEvents() and the lazy-build path in
  // _refreshGalleryView() can wire the same handlers without duplication.
  _bindThumbListEvents() {
    if (this.thumbsList) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.thumbsList, "click", this._evTC = e => {
        const t = e.target.closest(".wcpg-thumb-item");
        if (t) this._goTo(parseInt(t.dataset.index));
      });
      if (this.opts.thumbnailTrigger === "hover") {
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.thumbsList, "mouseover", this._evTH = e => {
          const t = e.target.closest(".wcpg-thumb-item");
          if (t) this._goTo(parseInt(t.dataset.index));
        });
      }
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.thumbsList, "keydown", this._evTK = e => {
        const t = e.target.closest(".wcpg-thumb-item");
        if (!t) return;
        const i = parseInt(t.dataset.index);
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this._goTo(i);
        }
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          e.preventDefault();
          this._goTo(e.key === "ArrowRight" && this._isRTL ? this.index - 1 : this.index + 1);
        }
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          e.preventDefault();
          this._goTo(e.key === "ArrowLeft" && this._isRTL ? this.index + 1 : this.index - 1);
        }
      });
    }
    if (this.thumbPrev) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.thumbPrev, "click", this._evTP = () => {
      if (!this.thumbPrev.classList.contains("wcpg-btn-disabled")) this._slideThumb(-1);
    });
    if (this.thumbNext) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.thumbNext, "click", this._evTN = () => {
      if (!this.thumbNext.classList.contains("wcpg-btn-disabled")) this._slideThumb(1);
    });
    if (this.thumbsTrack && this.opts.thumbnailDragNav) this._bindThumbDrag();
    if (this.thumbsTrack && this.opts.thumbnailScrollNav) this._bindThumbScroll();
  },
  // Insert a newly-built thumbsWrap into the gallery layout at the correct
  // position. Called only when thumbnails are created lazily (product had 0 or
  // 1 images at init time, so _buildThumbnails() was skipped in _buildDOM()).
  _insertThumbsIntoLayout() {
    if (!this.thumbsWrap) return;
    const _effThumbPos = this._mobileLayoutActive ? this.opts.mobileThumbnailPosition || "bottom" : this.opts.thumbnailPosition;
    const isHoriz = ["left", "right"].includes(_effThumbPos);

    // Apply mobile-specific size overrides now that the wrap exists
    if (this._mobileLayoutActive) {
      const s = this.wrapper.style;
      const mW = this.opts.mobileThumbnailWidth;
      const mH = this.opts.mobileThumbnailHeight;
      if (mW > 0) s.setProperty("--wcpg-thumb-w", mW + "px");
      if (mH > 0) s.setProperty("--wcpg-thumb-h", mH + "px");
    }
    if (isHoriz) {
      let row = this.wrapper.querySelector(".wcpg-row");
      if (!row) {
        row = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-row");
        // Move stage out of the wrapper into the new row
        if (this.stage && this.stage.parentNode === this.wrapper) {
          this.wrapper.removeChild(this.stage);
        }
        if (_effThumbPos === "left") {
          row.appendChild(this.thumbsWrap);
          if (this.stage) row.appendChild(this.stage);
        } else {
          if (this.stage) row.appendChild(this.stage);
          row.appendChild(this.thumbsWrap);
        }
        this.wrapper.appendChild(row);
      } else {
        if (_effThumbPos === "left") {
          row.insertBefore(this.thumbsWrap, row.firstChild);
        } else {
          row.appendChild(this.thumbsWrap);
        }
      }
      this.wrapper.classList.remove("wcpg-thumb-left", "wcpg-thumb-right", "wcpg-thumb-top", "wcpg-thumb-bottom");
      this.wrapper.classList.add(`wcpg-thumb-${_effThumbPos}`);
    } else {
      // Top / bottom: thumbsWrap sits directly in the wrapper after stage
      this.wrapper.appendChild(this.thumbsWrap);
    }
  },
  _bindStackedEvents() {
    if (this.pagination) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.pagination, "click", this._evStackedPG = e => {
        const dot = e.target.closest(".wcpg-dot");
        if (dot) this._scrollToStackedItem(parseInt(dot.dataset.index));
      });
    }
    if (this.opts.lightbox) {
      this._evStackedClicks = [];

      // Expand-icon buttons on individual image items
      if (this._stackedLbTriggers && this._stackedLbTriggers.length) {
        this._stackedLbTriggers.forEach(({
          el,
          index
        }) => {
          const fn = e => {
            e.stopPropagation();
            this._lbOpen(index);
          };
          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(el, "click", fn);
          this._evStackedClicks.push({
            el,
            fn
          });
        });
      }

      // Click-to-open on image items (only when lightboxOpenOnImageClick is on)
      if (this.opts.lightboxOpenOnImageClick && this.stackedItems) {
        this.stackedItems.forEach((itemWrap, i) => {
          const item = this.items[i];
          if (!item || item.type !== "image") return;
          const fn = e => {
            if (e.target.closest(".wcpg-lb-trigger")) return;
            this._lbOpen(i);
          };
          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemWrap, "click", fn);
          this._evStackedClicks.push({
            el: itemWrap,
            fn
          });
          if (!this._isMobile) itemWrap.style.cursor = "zoom-in";
        });
      }
    }
    // ── Thumbnail navigation events (thumbs mode only) ───────────
    if (this.opts.stackedNavigationType === "thumbs") {
      if (this.thumbsList) {
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.thumbsList, "click", this._evTC = e => {
          const t = e.target.closest(".wcpg-thumb-item");
          if (t) this._goTo(parseInt(t.dataset.index));
        });
        if (this.opts.thumbnailTrigger === "hover") {
          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.thumbsList, "mouseover", this._evTH = e => {
            const t = e.target.closest(".wcpg-thumb-item");
            if (t) this._goTo(parseInt(t.dataset.index));
          });
        }
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.thumbsList, "keydown", this._evTK = e => {
          const t = e.target.closest(".wcpg-thumb-item");
          if (!t) return;
          const i = parseInt(t.dataset.index);
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            this._goTo(i);
          }
          if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            this._goTo(this.index + 1);
          }
          if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            this._goTo(this.index - 1);
          }
        });
      }
      if (this.thumbPrev) {
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.thumbPrev, "click", this._evTP = () => {
          if (!this.thumbPrev.classList.contains("wcpg-btn-disabled")) this._slideThumb(-1);
        });
      }
      if (this.thumbNext) {
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.thumbNext, "click", this._evTN = () => {
          if (!this.thumbNext.classList.contains("wcpg-btn-disabled")) this._slideThumb(1);
        });
      }
      if (this.thumbsTrack && !this._thumbDragBound) {
        if (this.opts.thumbnailDragNav) this._bindThumbDrag();
        if (this.opts.thumbnailScrollNav) this._bindThumbScroll();
        this._thumbDragBound = true;
      }
    }

    // Linked video play / close buttons
    this._stackedLvEvents = [];
    if (this.stackedItems) {
      this.stackedItems.forEach((itemWrap, i) => {
        const item = this.items[i];
        if (!item || !item.linkedVideoType) return;
        const playBtn = itemWrap.querySelector(".wcpg-linked-video-btn");
        if (playBtn) {
          const fn = e => {
            e.stopPropagation();
            this._playStackedLinkedVideo(itemWrap, item);
          };
          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(playBtn, "click", fn);
          this._stackedLvEvents.push({
            el: playBtn,
            fn
          });
        }
        const closeBtn = itemWrap.querySelector(".wcpg-stacked-linked-close");
        if (closeBtn) {
          const fn = e => {
            e.stopPropagation();
            this._stopStackedLinkedVideo(itemWrap, item);
          };
          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(closeBtn, "click", fn);
          this._stackedLvEvents.push({
            el: closeBtn,
            fn
          });
        }
      });
    }
    // Click-to-play/pause for hosted video items and linked hosted videos
    if (!this.opts.videoControls && this.stackedItems) {
      this.stackedItems.forEach((itemWrap, i) => {
        const item = this.items[i];
        if (!item) return;
        const vids = [];
        if (item.type === "video") {
          const v = itemWrap.querySelector(".wcpg-stacked-video");
          if (v) vids.push(v);
        }
        if (item.linkedVideoType && item.linkedVideoType !== "youtube" && item.linkedVideoType !== "vimeo") {
          const v = itemWrap.querySelector(".wcpg-stacked-lv-video");
          if (v) vids.push(v);
        }
        vids.forEach(vid => {
          const fn = e => {
            e.stopPropagation();
            if (vid.paused) vid.play().catch(() => {});else vid.pause();
          };
          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(vid, "click", fn);
          this._stackedLvEvents.push({
            el: vid,
            fn
          });
        });
      });
    }
    if (this.opts.anchorZoom !== false && this.opts.zoomOnHover && !this._isMobile) {
      this._stackedZoomEvents = [];
      this.stackedItems && this.stackedItems.forEach((itemWrap, i) => {
        const item = this.items[i];
        if (!item || item.type !== "image") return;
        const img = itemWrap.querySelector(".wcpg-stacked-img");
        if (!img) return;
        const zoomDisplay = itemWrap.querySelector(".wcpg-stacked-display") || itemWrap;
        const enterFn = e => {
          // Don't zoom while a linked video is playing in this item
          if (itemWrap.classList.contains("wcpg-stacked-lv-active")) return;
          this.mainImg = img;
          this.mainWrap = itemWrap;
          this.mainDisplay = zoomDisplay;
          if (this.index !== i) {
            this.index = i;
            // Keep dots/thumbs in sync so the scroll handler's
            // activeIdx !== this.index comparison stays valid.
            if (this.opts.stackedNavigationType === "thumbs") {
              this._updateThumbActive(i);
            } else {
              this._updatePagination(i);
            }
          }
          if (this.lens) zoomDisplay.appendChild(this.lens);
          if (this.winCursor) zoomDisplay.appendChild(this.winCursor);
          this._zoomEnter(e);
        };
        const moveFn = e => this._zoomMove(e);
        const leaveFn = () => {
          this._zoomLeave();
          setTimeout(() => {
            if (!this.isZooming) {
              this.mainImg = null;
              this.mainWrap = null;
              this.mainDisplay = null;
              this._updateStackedActive();
            }
          }, 300);
        };
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemWrap, "mouseenter", enterFn);
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemWrap, "mousemove", moveFn);
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemWrap, "mouseleave", leaveFn);
        this._stackedZoomEvents.push({
          el: itemWrap,
          event: "mouseenter",
          fn: enterFn
        }, {
          el: itemWrap,
          event: "mousemove",
          fn: moveFn
        }, {
          el: itemWrap,
          event: "mouseleave",
          fn: leaveFn
        });
      });
    }
    this._stackedScrollFn = () => this._updateStackedActive();
    window.addEventListener("scroll", this._stackedScrollFn, {
      passive: true
    });
    window.addEventListener("resize", this._stackedScrollFn, {
      passive: true
    });
    // Only recalculate on load when the browser has already restored a
    // non-zero scroll position — dot 0 is already marked active by the builder.
    if (window.scrollY > 0) {
      requestAnimationFrame(() => this._updateStackedActive());
    }
    // Trigger initial autoplay for item 0 (always active on a fresh page load).
    // If scrollY > 0, _updateStackedActive() above will correct to the real active
    // item and call _syncStackedVideo again to pause item 0 if needed.
    this._syncStackedVideo(-1, 0);

    // Sticky product summary — only for stacked layout
    if (this.opts.stackedStickyEnabled) {
      this._initStackedSticky();
    }

    // JS sticky fallbacks for dots rail and thumb sidebar.
    // Deferred one frame so the browser has committed the stacked layout
    // and offsetWidth / getBoundingClientRect return live values.
    requestAnimationFrame(() => {
      this._initAnchorDotStickyFallback();
      this._initStackedThumbStickyFallback();
    });
  },
  _updateStackedActive() {
    if (!this.stackedItems || !this.stackedItems.length) return;
    const mid = window.innerHeight * 0.5;
    let activeIdx = 0;
    for (let i = 0; i < this.stackedItems.length; i++) {
      const rect = this.stackedItems[i].getBoundingClientRect();
      if (rect.top <= mid) activeIdx = i;
    }
    if (activeIdx !== this.index) {
      const prevIdx = this.index;
      this.index = activeIdx;
      if (this.opts.stackedNavigationType === "thumbs") {
        this._updateThumbActive(activeIdx);
        this._scrollThumbToIndex(activeIdx);
      } else {
        this._updatePagination(activeIdx);
      }
      this._syncStackedVideo(prevIdx, activeIdx);
    }
  },
  _playStackedLinkedVideo(itemWrap, item) {
    const isLvEmbed = item.linkedVideoType === "youtube" || item.linkedVideoType === "vimeo";
    itemWrap.classList.add("wcpg-stacked-lv-active");

    // Stop zoom immediately for all video types — the lens and cursor
    // overlay must not float over active video content.
    if (this.mainWrap === itemWrap) {
      this._zoomLeave();
      this.mainImg = null;
      this.mainWrap = null;
      this.mainDisplay = null;
    }
    if (isLvEmbed) {
      const iframe = itemWrap.querySelector(".wcpg-stacked-lv-iframe");
      if (iframe) {
        let src = iframe.getAttribute("data-wcpg-lv-src") || item.linkedVideoEmbed || "";
        // User clicked play — always autoplay with mute (browser requirement)
        if (src && src.indexOf("autoplay=") === -1) {
          src += (src.indexOf("?") === -1 ? "?" : "&") + "autoplay=1";
          if (src.indexOf("mute=") === -1 && src.indexOf("muted=") === -1) {
            src += "&mute=1";
          }
        }
        if (item.linkedVideoType === "youtube" && this.opts.videoHideRelated && src.indexOf("rel=") === -1) {
          src += "&rel=0";
        }
        if (item.linkedVideoType === "youtube" && !this.opts.videoEmbedControls && src.indexOf("controls=") === -1) {
          src += "&controls=0";
        }
        iframe.src = src;
      }
    } else {
      const video = itemWrap.querySelector(".wcpg-stacked-lv-video");
      if (video) {
        video.src = item.linkedVideo;
        video.muted = this.opts.videoHostedMuted;
        video.load();
        video.play().catch(() => {});
      }
    }
  },
  _stopStackedLinkedVideo(itemWrap, item) {
    if (!itemWrap || !itemWrap.classList.contains("wcpg-stacked-lv-active")) return;
    itemWrap.classList.remove("wcpg-stacked-lv-active");
    const isLvEmbed = item && (item.linkedVideoType === "youtube" || item.linkedVideoType === "vimeo");
    if (isLvEmbed) {
      const iframe = itemWrap.querySelector(".wcpg-stacked-lv-iframe");
      if (iframe) iframe.src = "";
    } else {
      const video = itemWrap.querySelector(".wcpg-stacked-lv-video");
      if (video) {
        video.pause();
        video.src = "";
      }
    }

    // Re-enter zoom immediately if the cursor is still over this item —
    // mouseenter won't re-fire because the pointer never left the element.
    if (this.opts.zoomOnHover && !this._isMobile && this._lastMouseEvent && itemWrap.matches(":hover")) {
      const img = itemWrap.querySelector(".wcpg-stacked-img");
      const i = this.stackedItems ? this.stackedItems.indexOf(itemWrap) : -1;
      if (img && i >= 0) {
        this.mainImg = img;
        this.mainWrap = itemWrap;
        this.mainDisplay = itemWrap;
        this.index = i;
        if (this.lens) itemWrap.appendChild(this.lens);
        if (this.winCursor) itemWrap.appendChild(this.winCursor);
        this._zoomEnter(this._lastMouseEvent);
      }
    }
  },
  _syncStackedVideo(prevIdx, newIdx) {
    // Pause/stop the previously active media
    if (prevIdx >= 0 && prevIdx !== newIdx) {
      const prevWrap = this.stackedItems && this.stackedItems[prevIdx];
      const prevItem = this.items[prevIdx];
      if (prevWrap && prevItem) {
        // Stop linked video if it was playing in the outgoing item
        this._stopStackedLinkedVideo(prevWrap, prevItem);
        if (prevItem.type === "video") {
          const vid = prevWrap.querySelector(".wcpg-stacked-video");
          if (vid) vid.pause();
        } else if (prevItem.type === "youtube" || prevItem.type === "vimeo") {
          // Use postMessage to pause in-place so the playback position
          // is preserved — the iframe stays loaded, src is not cleared.
          const ifr = prevWrap.querySelector(".wcpg-stacked-iframe");
          if (ifr && ifr.contentWindow) {
            try {
              ifr.contentWindow.postMessage(JSON.stringify(prevItem.type === "youtube" ? {
                event: "command",
                func: "pauseVideo",
                args: ""
              } : {
                method: "pause"
              }), "*");
            } catch (e) {}
            ifr.setAttribute("data-wcpg-paused", "1");
          }
        }
      }
    }
    // Activate the newly active item
    if (newIdx >= 0) {
      const newWrap = this.stackedItems && this.stackedItems[newIdx];
      const newItem = this.items[newIdx];
      if (newWrap && newItem) {
        if (newItem.type === "video" && this.opts.videoHostedAutoplay) {
          const vid = newWrap.querySelector(".wcpg-stacked-video");
          if (vid) vid.play().catch(() => {});
        } else if (newItem.type === "youtube" || newItem.type === "vimeo") {
          const ifr = newWrap.querySelector(".wcpg-stacked-iframe");
          if (ifr) {
            if (ifr.getAttribute("data-wcpg-paused") === "1") {
              // Resume from the paused position via postMessage
              ifr.removeAttribute("data-wcpg-paused");
              if (ifr.contentWindow) {
                try {
                  ifr.contentWindow.postMessage(JSON.stringify(newItem.type === "youtube" ? {
                    event: "command",
                    func: "playVideo",
                    args: ""
                  } : {
                    method: "play"
                  }), "*");
                } catch (e) {}
              }
            } else if (this.opts.videoAutoplay) {
              // First activation with autoplay on — reload src with autoplay params
              let src = newItem.embed || newItem.src;
              if (src.indexOf("autoplay=") === -1) {
                src += (src.indexOf("?") === -1 ? "?" : "&") + "autoplay=1";
                if (src.indexOf("mute=") === -1 && src.indexOf("muted=") === -1) {
                  src += "&mute=1";
                }
              }
              if (newItem.type === "youtube" && src.indexOf("enablejsapi=") === -1) {
                src += "&enablejsapi=1";
              }
              ifr.src = src;
            }
          }
        }
      }
    }
  },
  _scrollToStackedItem(index) {
    const el = this.stackedItems && this.stackedItems[index];
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  },
  _destroy(soft) {
    if (this._evZE) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainWrap, "mouseenter", this._evZE);
    if (this._evZM) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainWrap, "mousemove", this._evZM);
    if (this._evZL) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainWrap, "mouseleave", this._evZL);
    if (this._evTS) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainWrap, "touchstart", this._evTS);
    if (this._evTM) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainWrap, "touchmove", this._evTM);
    if (this._evTE) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainWrap, "touchend", this._evTE);
    this._destroyMainSwipe();
    if (this._evMainScrollNav) {
      if (this.mainWrap) this.mainWrap.removeEventListener("wheel", this._evMainScrollNav);
      this._evMainScrollNav = null;
    }
    if (this._scrollNavTimer) {
      clearTimeout(this._scrollNavTimer);
      this._scrollNavTimer = null;
    }
    this._scrollNavAccum = 0;
    if (this._evVidClick && this.mainVideo) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainVideo, "click", this._evVidClick);
      this._evVidClick = null;
    }
    if (this._touchActiveTimer) {
      clearTimeout(this._touchActiveTimer);
      this._touchActiveTimer = null;
    }
    if (this._zs?.raf) cancelAnimationFrame(this._zs.raf);
    if (this._zs?.momentumRaf) cancelAnimationFrame(this._zs.momentumRaf);
    if (this._mobileMq && this._mobileMqFn) {
      this._mobileMq.removeEventListener("change", this._mobileMqFn);
      this._mobileMq = null;
      this._mobileMqFn = null;
    }
    if (this._fitObserver) {
      this._fitObserver.disconnect();
      this._fitObserver = null;
    }
    if (this._stackMq && this._stackMqFn) {
      this._stackMq.removeEventListener("change", this._stackMqFn);
    }
    this._stackMq = null;
    this._stackMqFn = null;
    this.wrapper.classList.remove("wcpg-stacked");
    // ── Sticky Split cleanup ──
    this._destroySSEvents();
    this.ssStickyCol = null;
    this.wrapper.classList.remove("wcpg-layout-sticky-split");
    // ── Stacked layout cleanup ──
    this._destroyStackedSticky();
    this._destroyAnchorDotStickyFallback();
    this._destroyStackedThumbStickyFallback();
    if (this._stackedScrollFn) {
      window.removeEventListener("scroll", this._stackedScrollFn);
      window.removeEventListener("resize", this._stackedScrollFn);
      this._stackedScrollFn = null;
    }
    if (this._evStackedPG && this.pagination) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.pagination, "click", this._evStackedPG);
      this._evStackedPG = null;
    }
    if (this._evStackedClicks) {
      this._evStackedClicks.forEach(({
        el,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, "click", fn));
      this._evStackedClicks = null;
    }
    if (this._stackedLvEvents) {
      this._stackedLvEvents.forEach(({
        el,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, "click", fn));
      this._stackedLvEvents = null;
    }
    if (this._stackedZoomEvents) {
      this._stackedZoomEvents.forEach(({
        el,
        event,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, event, fn));
      this._stackedZoomEvents = null;
    }
    this.wrapper.classList.remove("wcpg-layout-stacked");
    // ── Hierarchy Grid cleanup ──
    if (this._evHGClicks) {
      this._evHGClicks.forEach(({
        el,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, "click", fn));
      this._evHGClicks = null;
    }
    if (this._hgLvEvents) {
      this._hgLvEvents.forEach(({
        el,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, "click", fn));
      this._hgLvEvents = null;
    }
    if (this._hgZoomEvents) {
      this._hgZoomEvents.forEach(({
        el,
        event,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, event, fn));
      this._hgZoomEvents = null;
    }
    this.wrapper.classList.remove("wcpg-layout-hierarchy-grid");
    // ── Tiles layout cleanup ──
    if (this._evTilesClicks) {
      this._evTilesClicks.forEach(({
        el,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, "click", fn));
      this._evTilesClicks = null;
    }
    if (this._tilesZoomEvents) {
      this._tilesZoomEvents.forEach(({
        el,
        event,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, event, fn));
      this._tilesZoomEvents = null;
    }
    if (this._evTilesShowMore) {
      if (this._tilesShowMoreBtn) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this._tilesShowMoreBtn, "click", this._evTilesShowMore);
      this._evTilesShowMore = null;
    }
    this.wrapper.classList.remove("wcpg-layout-tiles");
    this._thumbDragBound = false;
    window.removeEventListener("resize", this._resizeHandler);
    window.removeEventListener("scroll", this._scrollHandler);
    // Remove the zoom window from document.body (where it was appended
    // in _buildDOM to escape any parent overflow:hidden constraints).
    if (this.zoomWin && this.zoomWin.parentNode === document.body) {
      this.zoomWin.remove();
    }
    if (!soft) {
      ["wcpg-wrapper", "wcpg-thumb-bottom", "wcpg-thumb-top", "wcpg-thumb-left", "wcpg-thumb-right", "wcpg-layout-stacked", "wcpg-layout-sticky-split", "wcpg-layout-hierarchy-grid", "wcpg-layout-tiles", "wcpg-mobile-layout"].forEach(c => this.wrapper.classList.remove(c));
      [".wcpg-stage", ".wcpg-thumbnails-wrap", ".wcpg-row", ".wcpg-ss-row", ".wcpg-hg-wrap", ".wcpg-tiles-wrap"].forEach(sel => this.wrapper.querySelectorAll(sel).forEach(n => n.remove()));
      // Clean up mobile layout observer
      if (this._mlMq && this._mlMqFn) {
        this._mlMq.removeEventListener("change", this._mlMqFn);
        this._mlMq = null;
        this._mlMqFn = null;
      }
      this._mobileLayoutActive = false;
    }
  },
  // ── Public instance API ───────────────────────────────────────────────────
  goTo(i) {
    this._goTo(i);
  },
  next() {
    this._goTo(this.index + 1);
  },
  prev() {
    this._goTo(this.index - 1);
  },
  openLightbox(i) {
    this._lbOpen(i != null ? i : this.index);
  },
  closeLightbox() {
    this._lbClose();
  },
  setOptions(o) {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].extend(this.opts, o);
  },
  reinit(newOpts) {
    if (newOpts) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].extend(this.opts, newOpts);
    this._destroy(true);
    this.items = [];
    this.index = 0;
    this._adaptiveMaxH = null;
    this._ts = {
      offset: 0,
      dragging: false,
      startPos: 0,
      startOffset: 0
    };
    this._zs = {
      lensX: 0,
      lensY: 0,
      targetX: 0,
      targetY: 0,
      pctX: 0,
      pctY: 0,
      rect: null,
      raf: null,
      scale: 1,
      dist0: 0,
      scale0: 1,
      panX: 0,
      panY: 0,
      panX0: 0,
      panY0: 0,
      pinching: false
    };
    this._collectItems();
    this._initMobileLayoutObserver();
    this._buildDOM();
    if (this.opts.galleryType === "anchor" && !this._mobileLayoutActive) {
      this._bindStackedEvents();
    } else if (this.opts.galleryType === "sticky-split" && !this._mobileLayoutActive) {
      this._bindStickySplitEvents();
      if (this.opts.preloadImages) this._preloadAll();
    } else if (this.opts.galleryType === "hierarchy-grid" && !this._mobileLayoutActive) {
      this._bindHierarchyGridEvents();
      if (this.opts.preloadImages) this._preloadAll();
    } else if (this.opts.galleryType === "tiles" && !this._mobileLayoutActive) {
      this._bindTilesEvents();
      if (this.opts.preloadImages) this._preloadAll();
    } else {
      this._bindEvents();
      if (this.opts.preloadImages) this._preloadAll();
    }
  },
  destroy() {
    this._destroy(false);
  },
  // ── Variation image support ───────────────────────────────────────────────

  /**
   * Swap in a variation image at position 0 of the gallery.
   * If a variation item is already active it is updated in place;
   * otherwise a new item is prepended so the original gallery is preserved.
   * Call resetVariationImage() to restore the original state.
   *
   * @param {string} src      - Display/thumbnail URL of the variation image
   * @param {string} zoomSrc  - Full-size URL used for zoom (falls back to src)
   */
  // ── Stacked layout: rebuild items + re-bind all stacked events ───────────
  _refreshStackedView() {
    // Remove per-item and global stacked listeners before rebuilding
    this._destroyStackedSticky();
    this._destroyAnchorDotStickyFallback();
    this._destroyStackedThumbStickyFallback();
    if (this._stackedScrollFn) {
      window.removeEventListener("scroll", this._stackedScrollFn);
      window.removeEventListener("resize", this._stackedScrollFn);
      this._stackedScrollFn = null;
    }
    if (this._evStackedPG && this.pagination) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.pagination, "click", this._evStackedPG);
      this._evStackedPG = null;
    }
    if (this._evStackedClicks) {
      this._evStackedClicks.forEach(({
        el,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, "click", fn));
      this._evStackedClicks = null;
    }
    if (this._stackedLvEvents) {
      this._stackedLvEvents.forEach(({
        el,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, "click", fn));
      this._stackedLvEvents = null;
    }
    if (this._stackedZoomEvents) {
      this._stackedZoomEvents.forEach(({
        el,
        event,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, event, fn));
      this._stackedZoomEvents = null;
    }
    // Remove thumb navigation events so _bindStackedEvents() can re-add them
    if (this._evTC && this.thumbsList) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.thumbsList, "click", this._evTC);
      this._evTC = null;
    }
    if (this._evTH && this.thumbsList) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.thumbsList, "mouseover", this._evTH);
      this._evTH = null;
    }
    if (this._evTK && this.thumbsList) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.thumbsList, "keydown", this._evTK);
      this._evTK = null;
    }
    if (this._evTP && this.thumbPrev) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.thumbPrev, "click", this._evTP);
      this._evTP = null;
    }
    if (this._evTN && this.thumbNext) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.thumbNext, "click", this._evTN);
      this._evTN = null;
    }
    if (this._evThumbScroll && this.thumbsTrack) {
      this.thumbsTrack.removeEventListener("wheel", this._evThumbScroll);
      this._evThumbScroll = null;
    }

    // Reset ephemeral state
    this.index = 0;
    this.stackedItems = [];
    this._stackedLbTriggers = [];
    this._zoomLeave();
    this.mainImg = null;
    this.mainWrap = null;
    this.mainDisplay = null;

    // Rebuild all stacked item elements
    if (this.stackedWrap) {
      this.stackedWrap.innerHTML = "";
      this.items.forEach((item, i) => {
        const itemWrap = this._buildSingleStackedItem(item, i);
        this.stackedWrap.appendChild(itemWrap);
        this.stackedItems.push(itemWrap);
      });
    }

    // Rebuild pagination dots inside the existing container (dots mode)
    if (this.pagination && this.opts.stackedNavigationType !== "thumbs") {
      this.pagination.innerHTML = "";
      this.paginationDots = [];
      this.items.forEach((_, i) => {
        const dot = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-dot" + (i === 0 ? " wcpg-dot-active" : ""));
        dot.setAttribute("aria-label", `Go to image ${i + 1}`);
        dot.setAttribute("data-index", i);
        this.pagination.appendChild(dot);
        this.paginationDots.push(dot);
      });
    }

    // Rebuild thumbnail items in-place (thumbs mode)
    if (this.opts.stackedNavigationType === "thumbs" && this.thumbsList) {
      this.thumbsList.innerHTML = "";
      this.thumbEls = [];
      if (this._ts) {
        this._ts.offset = 0;
        this._ts.loopAnimating = false;
        this._ts.scrollWrapAnimating = false;
      }
      this._applyThumbOffset(false);
      if (this.items.length > 1) {
        this._buildThumbItems();
      }
      this._updateThumbActive(0);
      requestAnimationFrame(() => {
        this._updateThumbButtons();
        this._updateFadeMask();
      });
    }

    // Re-bind events (also re-registers scroll/resize + initial video sync)
    this._bindStackedEvents();
  },
  // ── Stacked layout: sticky product summary ────────────────────────────────

  _initStackedSticky() {
    const bp = this.opts.stackedStickyBreakpoint || 0;
    if (bp > 0) {
      // Watch for viewport width changes and toggle sticky accordingly
      this._stickyBpMq = window.matchMedia(`(max-width: ${bp - 1}px)`);
      this._stickyBpMqFn = e => {
        if (e.matches) {
          this._disableStackedSticky();
        } else {
          this._enableStackedSticky();
        }
      };
      this._stickyBpMq.addEventListener("change", this._stickyBpMqFn);
      // Apply immediately based on current viewport
      if (!this._stickyBpMq.matches) {
        this._enableStackedSticky();
      }
    } else {
      // No breakpoint restriction — always active
      this._enableStackedSticky();
    }
  },
  _enableStackedSticky() {
    if (this._stickyActive) return;
    const selector = (this.opts.stackedStickySelector || ".summary.entry-summary").trim();
    const summaryEl = document.querySelector(selector);
    if (!summaryEl) return;
    this._stickyActive = true;
    this._stickySummaryEl = summaryEl;

    // Fix any ancestors that would block position:sticky, then let CSS handle it.
    if (this.opts.stackedStickyFixOverflow !== false) {
      this._stickyOverflowPatches = this._patchAncestorOverflow(summaryEl);
    }
    const stickyTop = this.opts.stackedStickyTop ?? 100;
    summaryEl.style.setProperty("--wcpg-summary-sticky-top", stickyTop + "px");
    summaryEl.classList.add("wcpg-summary-sticky");
    const _galleryRef = this.stackedWrap || this.ssScrollWrap || this.wrapper;
    if (_galleryRef) {
      let summaryH = summaryEl.offsetHeight;
      let lastTop = stickyTop;

      // Drive --wcpg-summary-sticky-top so the element tracks the gallery
      // end naturally: while the gallery is in view the value stays at
      // stickyTop; once the bottom approaches the value decreases (goes
      // negative if needed) and the sticky element glides upward with the
      // gallery instead of jumping.  Only write the CSS variable when the
      // value actually changes to avoid unnecessary style invalidations.
      this._stickyScrollFn = () => {
        const _ref = this.stackedWrap || this.ssScrollWrap || this.wrapper;
        if (!this._stickySummaryEl || !_ref) return;
        const galleryBottom = _ref.getBoundingClientRect().bottom;
        const newTop = Math.min(stickyTop, galleryBottom - summaryH);
        if (newTop !== lastTop) {
          lastTop = newTop;
          this._stickySummaryEl.style.setProperty("--wcpg-summary-sticky-top", newTop + "px");
        }
      };
      this._stickyResizeFn = () => {
        summaryH = summaryEl.offsetHeight;
        this._stickyScrollFn();
      };
      window.addEventListener("scroll", this._stickyScrollFn, {
        passive: true
      });
      window.addEventListener("resize", this._stickyResizeFn, {
        passive: true
      });
      this._stickyScrollFn(); // apply immediately for current scroll position
    }
  },
  _disableStackedSticky() {
    if (!this._stickyActive) return;
    this._stickyActive = false;
    if (this._stickyScrollFn) {
      window.removeEventListener("scroll", this._stickyScrollFn);
      this._stickyScrollFn = null;
    }
    if (this._stickyResizeFn) {
      window.removeEventListener("resize", this._stickyResizeFn);
      this._stickyResizeFn = null;
    }
    this._restoreAncestorOverflow(this._stickyOverflowPatches);
    this._stickyOverflowPatches = null;
    if (this._stickySummaryEl) {
      this._stickySummaryEl.classList.remove("wcpg-summary-sticky");
      this._stickySummaryEl.style.removeProperty("--wcpg-summary-sticky-top");
      this._stickySummaryEl = null;
    }
  },
  _destroyStackedSticky() {
    this._disableStackedSticky();
    if (this._stickyBpMq && this._stickyBpMqFn) {
      this._stickyBpMq.removeEventListener("change", this._stickyBpMqFn);
      this._stickyBpMq = null;
      this._stickyBpMqFn = null;
    }
  },
  // ── Overflow ancestor utilities ───────────────────────────────────────────

  _hasOverflowAncestor(el) {
    let p = el.parentElement;
    while (p && p !== document.documentElement) {
      const s = window.getComputedStyle(p);
      if (s.overflowX === "hidden" || s.overflowX === "clip" || s.overflowY === "hidden" || s.overflowY === "clip") return true;
      p = p.parentElement;
    }
    return false;
  },
  // Walk ancestors from el up to <html>. For any element whose computed
  // overflow-x or overflow-y is hidden/clip (which breaks position:sticky),
  // override it to visible via an inline style. Returns an array of patch
  // records so the change can be fully undone by _restoreAncestorOverflow.
  _patchAncestorOverflow(el) {
    const patches = [];
    let node = el.parentElement;
    while (node && node !== document.documentElement) {
      const s = window.getComputedStyle(node);
      const ox = s.overflowX;
      const oy = s.overflowY;
      const needsX = ox === "hidden" || ox === "clip";
      const needsY = oy === "hidden" || oy === "clip";
      if (needsX || needsY) {
        patches.push({
          node,
          prevX: node.style.overflowX,
          prevY: node.style.overflowY,
          changedX: needsX,
          changedY: needsY
        });
        if (needsX) node.style.overflowX = "visible";
        if (needsY) node.style.overflowY = "visible";
      }
      node = node.parentElement;
    }
    return patches;
  },
  // Undo all inline-style overrides applied by _patchAncestorOverflow.
  _restoreAncestorOverflow(patches) {
    if (!patches) return;
    patches.forEach(({
      node,
      prevX,
      prevY,
      changedX,
      changedY
    }) => {
      if (changedX) {
        if (prevX) node.style.overflowX = prevX;else node.style.removeProperty("overflow-x");
      }
      if (changedY) {
        if (prevY) node.style.overflowY = prevY;else node.style.removeProperty("overflow-y");
      }
    });
  },
  // ── Anchor dot sticky ─────────────────────────────────────────────────────
  // If any ancestor clips overflow, patch it so position:sticky can reach
  // the viewport. CSS handles all positioning — no scroll listener needed.
  _initAnchorDotStickyFallback() {
    if (this.opts.stackedStickyFixOverflow === false) return;
    if (!this.pagination || !this._anchorRail) return;
    if (!this._hasOverflowAncestor(this.pagination)) return;
    this._dotOverflowPatches = this._patchAncestorOverflow(this.pagination);
  },
  _destroyAnchorDotStickyFallback() {
    this._restoreAncestorOverflow(this._dotOverflowPatches);
    this._dotOverflowPatches = null;
  },
  // ── Stacked thumbnail sidebar sticky ─────────────────────────────────────
  // If any ancestor clips overflow, patch it so position:sticky can reach
  // the viewport. CSS handles all positioning — no scroll listener needed.
  _initStackedThumbStickyFallback() {
    if (this.opts.stackedStickyFixOverflow === false) return;
    if (!this.thumbsWrap) return;
    const pos = this.opts.thumbnailPosition;
    if (pos !== "left" && pos !== "right") return;
    if (!this._hasOverflowAncestor(this.thumbsWrap)) return;
    this._thumbOverflowPatches = this._patchAncestorOverflow(this.thumbsWrap);
  },
  _destroyStackedThumbStickyFallback() {
    this._restoreAncestorOverflow(this._thumbOverflowPatches);
    this._thumbOverflowPatches = null;
  },
  swapVariationImage(src, zoomSrc, thumbSrc) {
    if (!src) return;

    // ── Restore from an active gallery swap ───────────────────────────
    // Any previously active full gallery swap must be torn down before we
    // can search for an existing item or overwrite items[0].
    if (this._originalItems) {
      this.items = [...this._originalItems];
      this._originalItems = null;
      this._hasVariationItem = false;
      // Rebuild DOM so it reflects the restored items.
      if (this.opts.galleryType === "anchor" && !this._mobileLayoutActive) {
        this._refreshStackedView();
      } else if (this.opts.galleryType === "sticky-split" && !this._mobileLayoutActive) {
        this._refreshSSView();
      } else if (this.opts.galleryType === "hierarchy-grid" && !this._mobileLayoutActive) {
        this._refreshHierarchyGridView();
      } else if (this.opts.galleryType === "tiles" && !this._mobileLayoutActive) {
        this._refreshTilesView();
      } else {
        this._refreshGalleryView();
      }
    }

    // ── Restore from an active single-image swap ──────────────────────
    // Switching directly between two single-image variations: undo the
    // previous temporary overwrite so items[0] is the original product item.
    if (this._varMode === "swapped" && this._varSwapOrigItem) {
      this.items[0] = this._varSwapOrigItem;
      this._varSwapOrigItem = null;
      this._varMode = null;
    }

    // Normalise URLs for comparison: strip query strings and WP size suffixes.
    const normUrl = u => u.split("?")[0].replace(/-\d+x\d+(\.[^.]+)$/, "$1");
    const normSrc = normUrl(src);

    // ── Case A: variation image already exists in the gallery ─────────
    // Just navigate to that item — no items/DOM changes needed.
    const existingIdx = this.items.findIndex(it => it.type === "image" && normUrl(it.src) === normSrc);
    if (existingIdx !== -1) {
      this._varMode = "found";
      this._goTo(existingIdx);
      return;
    }

    // ── Case B: variation image is not in the gallery ─────────────────
    // Overwrite items[0] temporarily so the main viewer and zoom both
    // use the variation image. Thumbnails are deselected (not modified).
    const varItem = {
      src,
      zoomSrc: zoomSrc || src,
      thumb: thumbSrc || src,
      caption: "",
      type: "image",
      poster: "",
      placeholder: "",
      w: 0,
      h: 0,
      linkedVideoType: "",
      linkedVideoEmbed: "",
      linkedVideo: ""
    };
    this._varMode = "swapped";
    this._varSwapOrigItem = {
      ...this.items[0]
    };
    this.items[0] = varItem;

    // ── Anchor ────────────────────────────────────────────────────────
    if (this.opts.galleryType === "anchor") {
      // Stacked layout shows all items inline — refresh so item 0
      // in the stack displays the variation image.
      this._refreshStackedView();
      return;
    }

    // ── Sticky Split ──────────────────────────────────────────────────
    if (this.opts.galleryType === "sticky-split" && !this._mobileLayoutActive) {
      // Rebuild scroll column (item 0 shows variation image) and render
      // the variation in the sticky viewer.
      this._refreshSSView();
      this._scrollSSItemToView(0);
      return;
    }

    // ── Hierarchy Grid ────────────────────────────────────────────────
    if (this.opts.galleryType === "hierarchy-grid" && !this._mobileLayoutActive) {
      this._refreshHierarchyGridView();
      return;
    }

    // ── Tiles ─────────────────────────────────────────────────────────
    if (this.opts.galleryType === "tiles" && !this._mobileLayoutActive) {
      this._refreshTilesView();
      return;
    }

    // ── Carousel ──────────────────────────────────────────────────────
    // Render variation image in the main viewer. Deselect all thumbnails
    // (the thumb at index 0 still shows the original product image in the
    // DOM, which is correct — no thumb corresponds to this variation).
    if (this.index === 0) {
      this._renderItem(0, false);
    } else {
      this._goTo(0);
    }
    this._updateThumbActive(-1);
  },
  /**
   * Restore the gallery to its state before a variation was selected.
   */
  resetVariationImage() {
    // ── "found" mode: we just navigated to an existing gallery item ───
    // Nothing was modified — navigate back to item 0 and clear the mode.
    if (this._varMode === "found") {
      this._varMode = null;
      this._goTo(0);
      return;
    }

    // ── "swapped" mode: items[0] was temporarily overwritten ──────────
    if (this._varMode === "swapped") {
      if (this._varSwapOrigItem) {
        this.items[0] = this._varSwapOrigItem;
        this._varSwapOrigItem = null;
      }
      this._varMode = null;
      if (this.opts.galleryType === "anchor" && !this._mobileLayoutActive) {
        this._refreshStackedView();
        return;
      }
      if (this.opts.galleryType === "sticky-split" && !this._mobileLayoutActive) {
        this._refreshSSView();
        this._scrollSSItemToView(0);
        return;
      }
      if (this.opts.galleryType === "hierarchy-grid" && !this._mobileLayoutActive) {
        this._refreshHierarchyGridView();
        return;
      }
      if (this.opts.galleryType === "tiles" && !this._mobileLayoutActive) {
        this._refreshTilesView();
        return;
      }
      // Carousel: re-render item 0 and restore its thumbnail as active.
      if (this.index === 0) {
        this._renderItem(0, false);
        this._updateThumbActive(0);
      } else {
        this._goTo(0);
      }
      return;
    }
  },
  /**
   * Replace the entire gallery with a variation-specific set of images.
   *
   * The original gallery items are preserved and will be restored when
   * resetVariationGallery() is called. Calling this multiple times (e.g.
   * switching between variations) updates the gallery in-place without
   * accumulating restore snapshots.
   *
   * @param {Array} galleryItems  Array of objects from PHP:
   *   { main_src, thumb_src, full_src, caption, width, height }
   */
  swapVariationGallery(galleryItems) {
    if (!galleryItems || !galleryItems.length) return;

    // If a single-image variation is currently prepended, remove it before
    // snapshotting so _originalItems always captures the clean product gallery.
    if (this._hasVariationItem) {
      this.items.shift();
      this._hasVariationItem = false;
    }

    // If a single-image swap is active (items[0] temporarily overwritten),
    // restore items[0] from backup before snapshotting so the snapshot
    // captures the original product item, not the variation image.
    if (this._varMode === "swapped" && this._varSwapOrigItem) {
      this.items[0] = this._varSwapOrigItem;
      this._varSwapOrigItem = null;
    }
    this._varMode = null;

    // Snapshot the original items only on the first call so that
    // switching between two variations with galleries still restores
    // the original product gallery correctly.
    if (!this._originalItems) {
      this._originalItems = [...this.items];
    }
    this.items = galleryItems.map(g => ({
      src: g.main_src,
      zoomSrc: g.full_src || g.main_src,
      thumb: g.thumb_src || g.main_src,
      caption: g.caption || "",
      type: "image",
      poster: "",
      w: g.width || 0,
      h: g.height || 0,
      linkedVideoType: g.video_type || "",
      linkedVideoEmbed: g.video_embed || "",
      linkedVideo: g.video_src || ""
    }));

    // Clear the single-image variation flag — the gallery is now
    // a full replacement, not a prepended item.
    this._hasVariationItem = false;

    // ── Stacked layout path ──────────────────────────────────────────
    if (this.opts.galleryType === "anchor" && !this._mobileLayoutActive) {
      this._refreshStackedView();
      return;
    }

    // ── Sticky Split path ─────────────────────────────────────────────
    if (this.opts.galleryType === "sticky-split" && !this._mobileLayoutActive) {
      this._refreshSSView();
      this._scrollSSItemToView(0);
      return;
    }

    // ── Hierarchy Grid path ───────────────────────────────────────────
    if (this.opts.galleryType === "hierarchy-grid" && !this._mobileLayoutActive) {
      this._refreshHierarchyGridView();
      return;
    }

    // ── Tiles path ────────────────────────────────────────────────────
    if (this.opts.galleryType === "tiles" && !this._mobileLayoutActive) {
      this._refreshTilesView();
      return;
    }
    this._refreshGalleryView();
  },
  /**
   * Restore the original gallery after a swapVariationGallery() call.
   * No-op if no gallery swap is currently active.
   */
  resetVariationGallery() {
    if (!this._originalItems) return;
    this.items = this._originalItems;
    this._originalItems = null;
    this._hasVariationItem = false;

    // ── Stacked layout path ──────────────────────────────────────────
    if (this.opts.galleryType === "anchor" && !this._mobileLayoutActive) {
      this._refreshStackedView();
      return;
    }

    // ── Sticky Split path ─────────────────────────────────────────────
    if (this.opts.galleryType === "sticky-split" && !this._mobileLayoutActive) {
      this._refreshSSView();
      this._scrollSSItemToView(0);
      return;
    }

    // ── Hierarchy Grid path ───────────────────────────────────────────
    if (this.opts.galleryType === "hierarchy-grid" && !this._mobileLayoutActive) {
      this._refreshHierarchyGridView();
      return;
    }

    // ── Tiles path ────────────────────────────────────────────────────
    if (this.opts.galleryType === "tiles" && !this._mobileLayoutActive) {
      this._refreshTilesView();
      return;
    }
    this._refreshGalleryView();
  },
  // ── Sticky Split layout methods ───────────────────────────────────────────

  _initMobileLayoutObserver() {
    // Collapse anchor/sticky-split to a standard carousel below mobileBreakpoint.
    // Remove any previous listener first (idempotent across reinit calls).
    if (this._mlMq && this._mlMqFn) {
      this._mlMq.removeEventListener("change", this._mlMqFn);
    }
    this._mlMq = null;
    this._mlMqFn = null;
    const bp = this.opts.mobileBreakpoint;
    if (!bp || bp <= 0) {
      this._mobileLayoutActive = false;
      return;
    }
    this._mlMq = window.matchMedia(`(max-width: ${bp - 1}px)`);
    // Set initial state synchronously before _buildDOM runs.
    this._mobileLayoutActive = this._mlMq.matches;
    this._mlMqFn = e => {
      const nowMobile = e.matches;
      if (nowMobile === this._mobileLayoutActive) return;
      this._mobileLayoutActive = nowMobile;
      this.reinit();
    };
    this._mlMq.addEventListener("change", this._mlMqFn);
  },
  _bindStickySplitEvents() {
    // Capture the sticky viewer refs before any per-item loops so the
    // scroll-item zoom closures can restore them on mouseleave.
    const _ssOrigMainWrap = this.mainWrap;
    const _ssOrigMainImg = this.mainImg;
    const _ssOrigMainDisplay = this.mainDisplay;

    // Zoom on sticky main viewer (mirrors _bindEvents)
    if (this.opts.zoomOnHover) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "mouseenter", this._evZE = e => this._zoomEnter(e));
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "mousemove", this._evZM = e => this._zoomMove(e));
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "mouseleave", this._evZL = () => this._zoomLeave());
    }
    // Touch on sticky main viewer
    if (this.opts.touchZoom) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "touchstart", this._evTS = e => this._touchStart(e), {
        passive: false
      });
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "touchmove", this._evTM = e => this._touchMove(e), {
        passive: false
      });
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "touchend", this._evTE = e => this._touchEnd(e));
    }
    if (this.opts.mainImageSwipe && !this.opts.zoomOnHover && !this.opts.touchZoom && this.items.length > 1) {
      this._bindMainSwipe(this.mainWrap);
    }

    // Lightbox trigger on main viewer
    if (this.lbTrigger) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.lbTrigger, "click", this._evLbTrigger = () => {
        this._lbOpen(this.index);
      });
    }

    // Open lightbox on main image click (lightboxOpenOnImageClick)
    if (this.opts.lightbox && this.opts.lightboxOpenOnImageClick) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainWrap, "click", this._evImgClick = e => {
        if (e.target.closest(".wcpg-lb-trigger")) return;
        if (e.target.closest(".wcpg-pagination")) return;
        if (this._zs.pinching) return;
        if (this._suppressClick) return;
        this._lbOpen(this.index);
      });
      if (!this._isMobile) this.mainWrap.style.cursor = "zoom-in";
    }

    // Main image arrows
    if (this.mainPrev) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainPrev, "click", this._evMainPrev = () => this._goTo(this.index - 1));
    }
    if (this.mainNext) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainNext, "click", this._evMainNext = () => this._goTo(this.index + 1));
    }

    // Pagination dots / count nav
    if (this.pagination) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.pagination, "click", this._evPgSS = e => {
        const dot = e.target.closest(".wcpg-dot");
        if (dot) {
          this._goTo(parseInt(dot.dataset.index));
          return;
        }
        if (e.target.closest(".wcpg-count-prev")) {
          this._goTo(this.index - 1);
          return;
        }
        if (e.target.closest(".wcpg-count-next")) {
          this._goTo(this.index + 1);
          return;
        }
      });
    }

    // Click handlers on scroll items (lightbox or navigation)
    this._ssClickFns = [];
    if (this._ssItemEls) {
      const clickable = this.opts.stickySplitClickAction === "lightbox" && this.opts.lightbox;
      this._ssItemEls.forEach((itemEl, i) => {
        const fn = () => {
          // Optionally swap main viewer on click (independent of lightbox)
          if (this.opts.stickySplitClickSync && i !== this.index) {
            this.index = i;
            this._renderItem(i, true);
            this._updatePagination(i);
          }
          // Open lightbox if configured, zooming from the clicked scroll item.
          // Use the img if present (image items and video items with a thumbnail);
          // fall back to itemEl itself for video items that have no thumbnail img.
          if (clickable) {
            const itemImg = this._ssItemEls[i] && this._ssItemEls[i].querySelector("img");
            this._lbSourceOverride = itemImg || itemEl;
            this._lbOpen(i);
          }
        };
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemEl, "click", fn);
        this._ssClickFns.push({
          el: itemEl,
          fn
        });
      });
    }

    // Zoom on scroll column items (when stickySplitThumbZoom is enabled)
    if (this.opts.stickySplitThumbZoom && this.opts.zoomOnHover && !this._isMobile) {
      this._ssItemZoomEvents = [];
      this._ssItemEls && this._ssItemEls.forEach((itemEl, i) => {
        const item = this.items[i];
        if (!item || item.type !== "image") return;
        const img = itemEl.querySelector(".wcpg-ss-img");
        if (!img) return;
        const enterFn = e => {
          // Save the sticky viewer's current index so we can restore it
          // on leave unless click-sync changed it during the hover.
          this._ssZoomSavedIndex = this.index;
          this.index = i;
          this.mainImg = img;
          this.mainWrap = itemEl;
          this.mainDisplay = itemEl;
          if (this.lens) itemEl.appendChild(this.lens);
          if (this.winCursor) itemEl.appendChild(this.winCursor);
          this._zoomEnter(e);
        };
        const moveFn = e => this._zoomMove(e);
        const leaveFn = () => {
          this._zoomLeave();
          // Restore index only if click-sync did not change it mid-hover
          if (this.index === i && this._ssZoomSavedIndex !== undefined) {
            this.index = this._ssZoomSavedIndex;
          }
          this._ssZoomSavedIndex = undefined;
          // Restore sticky viewer DOM refs
          this.mainWrap = _ssOrigMainWrap;
          this.mainImg = _ssOrigMainImg;
          this.mainDisplay = _ssOrigMainDisplay;
          if (this.lens && _ssOrigMainWrap) _ssOrigMainWrap.appendChild(this.lens);
          if (this.winCursor && _ssOrigMainWrap) _ssOrigMainWrap.appendChild(this.winCursor);
        };
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemEl, "mouseenter", enterFn);
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemEl, "mousemove", moveFn);
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemEl, "mouseleave", leaveFn);
        this._ssItemZoomEvents.push({
          el: itemEl,
          event: "mouseenter",
          fn: enterFn
        }, {
          el: itemEl,
          event: "mousemove",
          fn: moveFn
        }, {
          el: itemEl,
          event: "mouseleave",
          fn: leaveFn
        });
      });
    }

    // Main image load events — restore zoom after video → image transitions
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainVideo, "click", this._evSSVidClick = e => {
      if (this.opts.videoControls) return;
      e.stopPropagation();
      if (this.mainVideo.paused) {
        this.mainVideo.play().catch(() => {});
      } else {
        this.mainVideo.pause();
      }
    });
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainImg, "loadstart", this._evSSImgLoadStart = () => this._showSpinner());
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this.mainImg, "load", this._evSSImgLoad = () => {
      this._hideSpinner();
      this._hidePlaceholder();
      if (!this.mainWrap.classList.contains("wcpg-linked-video-active")) {
        this.mainWrap.classList.remove("wcpg-no-zoom");
        if (this.lens) this.lens.style.visibility = "";
      }
      const _hm = this.opts.mainImageHeightMode;
      if (_hm === "lock") this._lockMainHeight();else if (_hm === "adaptive") this._updateAdaptiveHeight();
    });

    // Sync no-thumb items to a sibling image item's height
    const noThumbEls = this._ssItemEls ? this._ssItemEls.filter(el => el.classList.contains("wcpg-ss-no-thumb")) : [];
    if (noThumbEls.length) {
      // Run once immediately (will hit 0 before images load, which is fine —
      // the ResizeObserver below fires again once the image has dimensions).
      this._syncSSNoThumbHeight();

      // Pick the nearest sibling that has a real image
      const refEl = this._ssItemEls.find(el => !el.classList.contains("wcpg-ss-no-thumb") && el.querySelector(".wcpg-ss-img"));
      if (refEl) {
        this._ssNoThumbRO = new ResizeObserver(() => this._syncSSNoThumbHeight());
        this._ssNoThumbRO.observe(refEl);
      }
    }

    // Sticky product summary (reuses stacked sticky infrastructure)
    if (this.opts.stackedStickyEnabled) {
      this._initStackedSticky();
    }

    // Show/hide the wrapper mobile class
    this.wrapper.classList.toggle("wcpg-mobile-layout", !!this._mobileLayoutActive);
  },
  _bindMainSwipe(el) {
    let _startX = 0,
      _startY = 0,
      _dir = null,
      _dragging = false;
    this._swipeEl = el;

    // ── Touch ──────────────────────────────────────────────────────────────
    this._evSwipeStart = e => {
      const t = e.touches[0];
      _startX = t.clientX;
      _startY = t.clientY;
      _dir = null;
      if (this.mainWrap) this.mainWrap.classList.add("wcpg-touch-active");
      if (this.stage) this.stage.classList.add("wcpg-touch-active");
      if (this._touchActiveTimer) clearTimeout(this._touchActiveTimer);
      this._touchActiveTimer = setTimeout(() => {
        if (this.mainWrap) this.mainWrap.classList.remove("wcpg-touch-active");
        if (this.stage) this.stage.classList.remove("wcpg-touch-active");
      }, 3000);
    };

    // Non-passive: calling preventDefault() on horizontal gestures stops
    // the page from scrolling so touchend coordinates are reliable.
    this._evSwipeMove = e => {
      if (_dir) return;
      const t = e.touches[0];
      const dx = Math.abs(t.clientX - _startX);
      const dy = Math.abs(t.clientY - _startY);
      if (dx < 5 && dy < 5) return;
      _dir = dx >= dy ? "h" : "v";
      if (_dir === "h") e.preventDefault();
    };
    this._evSwipeEnd = e => {
      if (_dir !== "h") return;
      const t = e.changedTouches[0];
      if (!t) return;
      const dx = t.clientX - _startX;
      if (Math.abs(dx) < this.opts.swipeThreshold) return;
      this._goTo(dx < 0 ? this.index + 1 : this.index - 1);
    };
    this._evSwipeCancel = () => {
      _dir = null;
    };

    // ── Mouse drag (desktop) ───────────────────────────────────────────────
    this._evMouseDown = e => {
      if (e.button !== 0) return;
      if (e.target.closest(".wcpg-main-arrow,.wcpg-pagination,.wcpg-lb-trigger")) return;
      _dragging = true;
      _startX = e.clientX;
      _startY = e.clientY;
      _dir = null;
      el.style.cursor = "grabbing";
    };
    this._evMouseMove = e => {
      if (!_dragging || _dir) return;
      const dx = Math.abs(e.clientX - _startX);
      const dy = Math.abs(e.clientY - _startY);
      if (dx < 5 && dy < 5) return;
      _dir = dx >= dy ? "h" : "v";
    };
    this._evMouseUp = e => {
      if (!_dragging) return;
      _dragging = false;
      el.style.cursor = "grab";
      if (_dir !== "h") return;
      const dx = e.clientX - _startX;
      if (Math.abs(dx) < this.opts.swipeThreshold) return;
      // Suppress the click that fires after mouseup so lightbox doesn't open
      this._suppressClick = true;
      setTimeout(() => {
        this._suppressClick = false;
      }, 0);
      this._goTo(dx < 0 ? this.index + 1 : this.index - 1);
    };
    this._evMouseLeave = () => {
      if (_dragging) {
        _dragging = false;
        el.style.cursor = "grab";
      }
    };

    // Set grab cursor to signal draggability
    el.style.cursor = "grab";
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(el, "touchstart", this._evSwipeStart, {
      passive: true
    });
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(el, "touchmove", this._evSwipeMove, {
      passive: false
    });
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(el, "touchend", this._evSwipeEnd, {
      passive: true
    });
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(el, "touchcancel", this._evSwipeCancel, {
      passive: true
    });
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(el, "mousedown", this._evMouseDown);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(el, "mousemove", this._evMouseMove);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(el, "mouseup", this._evMouseUp);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(el, "mouseleave", this._evMouseLeave);
  },
  _destroyMainSwipe() {
    if (this._swipeEl) {
      if (this._evSwipeStart) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this._swipeEl, "touchstart", this._evSwipeStart);
      if (this._evSwipeMove) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this._swipeEl, "touchmove", this._evSwipeMove);
      if (this._evSwipeEnd) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this._swipeEl, "touchend", this._evSwipeEnd);
      if (this._evSwipeCancel) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this._swipeEl, "touchcancel", this._evSwipeCancel);
      if (this._evMouseDown) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this._swipeEl, "mousedown", this._evMouseDown);
      if (this._evMouseMove) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this._swipeEl, "mousemove", this._evMouseMove);
      if (this._evMouseUp) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this._swipeEl, "mouseup", this._evMouseUp);
      if (this._evMouseLeave) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this._swipeEl, "mouseleave", this._evMouseLeave);
      this._swipeEl.style.cursor = "";
    }
    this._swipeEl = null;
    this._evSwipeStart = null;
    this._evSwipeMove = null;
    this._evSwipeEnd = null;
    this._evSwipeCancel = null;
    this._evMouseDown = null;
    this._evMouseMove = null;
    this._evMouseUp = null;
    this._evMouseLeave = null;
  },
  _destroySSEvents() {
    // Zoom/touch (mirrored from _destroy for when we re-bind via _refreshSSView)
    if (this._evZE && this.mainWrap) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainWrap, "mouseenter", this._evZE);
    if (this._evZM && this.mainWrap) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainWrap, "mousemove", this._evZM);
    if (this._evZL && this.mainWrap) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainWrap, "mouseleave", this._evZL);
    if (this._evTS && this.mainWrap) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainWrap, "touchstart", this._evTS);
    if (this._evTM && this.mainWrap) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainWrap, "touchmove", this._evTM);
    if (this._evTE && this.mainWrap) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainWrap, "touchend", this._evTE);
    this._evZE = this._evZM = this._evZL = this._evTS = this._evTM = this._evTE = null;
    if (this._ssClickFns) {
      this._ssClickFns.forEach(({
        el,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, "click", fn));
      this._ssClickFns = null;
    }
    if (this._evPgSS && this.pagination) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.pagination, "click", this._evPgSS);
      this._evPgSS = null;
    }
    if (this._evLbTrigger && this.lbTrigger) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.lbTrigger, "click", this._evLbTrigger);
      this._evLbTrigger = null;
    }
    if (this._evImgClick && this.mainWrap) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainWrap, "click", this._evImgClick);
      this._evImgClick = null;
      this.mainWrap.style.cursor = "";
    }
    if (this._evMainPrev && this.mainPrev) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainPrev, "click", this._evMainPrev);
      this._evMainPrev = null;
    }
    if (this._evMainNext && this.mainNext) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainNext, "click", this._evMainNext);
      this._evMainNext = null;
    }
    if (this._evSSVidClick && this.mainVideo) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainVideo, "click", this._evSSVidClick);
      this._evSSVidClick = null;
    }
    if (this._evSSImgLoad && this.mainImg) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainImg, "loadstart", this._evSSImgLoadStart);
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this.mainImg, "load", this._evSSImgLoad);
      this._evSSImgLoadStart = null;
      this._evSSImgLoad = null;
    }
    if (this._ssItemZoomEvents) {
      this._ssItemZoomEvents.forEach(({
        el,
        event,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, event, fn));
      this._ssItemZoomEvents = null;
    }
    if (this._ssNoThumbRO) {
      this._ssNoThumbRO.disconnect();
      this._ssNoThumbRO = null;
    }
    this._destroyMainSwipe();
    this._destroyStackedSticky();
  },
  _scrollSSItemToView(index) {
    const el = this._ssItemEls && this._ssItemEls[index];
    if (!el) return;
    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  },
  _syncSSNoThumbHeight() {
    if (!this._ssItemEls) return;
    const noThumbEls = this._ssItemEls.filter(el => el.classList.contains("wcpg-ss-no-thumb"));
    if (!noThumbEls.length) return;

    // Find the nearest sibling that has a real image with known dimensions.
    // Walk the full list and prefer the first one that has already loaded.
    const refEl = this._ssItemEls.find(el => {
      if (el.classList.contains("wcpg-ss-no-thumb")) return false;
      const img = el.querySelector(".wcpg-ss-img");
      return img && img.naturalWidth > 0;
    }) || this._ssItemEls.find(el => !el.classList.contains("wcpg-ss-no-thumb") && el.querySelector(".wcpg-ss-img"));
    const h = refEl ? refEl.offsetHeight : 0;
    if (h > 0) {
      noThumbEls.forEach(el => {
        el.style.minHeight = h + "px";
      });
    }
    // h === 0 means images haven't loaded yet — keep the CSS fallback (200px)
    // until the ResizeObserver fires after the reference image loads.
  },
  _refreshSSView() {
    this._destroySSEvents();

    // Rebuild scroll items in-place
    if (this.ssScrollWrap) {
      this.ssScrollWrap.innerHTML = "";
      this._ssItemEls = [];
      this.items.forEach((item, i) => {
        const itemEl = this._buildSSScrollItem(item, i);
        if (i !== 0 || this.opts.stickySplitShowMainInScroll !== false) {
          this.ssScrollWrap.appendChild(itemEl);
        }
        this._ssItemEls.push(itemEl);
      });
    }
    this.index = 0;
    this._renderItem(0, true);
    this._bindStickySplitEvents();
  },
  // ── Hierarchy Grid layout methods ─────────────────────────────────────────

  _bindHierarchyGridEvents() {
    this._evHGClicks = [];
    if (this.opts.lightbox) {
      // Expand-icon buttons on individual items
      if (this._hgLbTriggers && this._hgLbTriggers.length) {
        this._hgLbTriggers.forEach(({
          el,
          index
        }) => {
          const fn = e => {
            e.stopPropagation();
            this._lbOpen(index);
          };
          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(el, "click", fn);
          this._evHGClicks.push({
            el,
            fn
          });
        });
      }

      // Click-to-open on image items (lightboxOpenOnImageClick)
      if (this.opts.lightboxOpenOnImageClick && this.hgItems) {
        this.hgItems.forEach((itemWrap, i) => {
          const item = this.items[i];
          if (!item || item.type !== "image") return;
          const fn = e => {
            if (e.target.closest(".wcpg-lb-trigger")) return;
            this._lbOpen(i);
          };
          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemWrap, "click", fn);
          this._evHGClicks.push({
            el: itemWrap,
            fn
          });
          if (!this._isMobile) itemWrap.style.cursor = "zoom-in";
        });
      }
    }

    // Linked video play / close — reuse stacked linked video methods
    this._hgLvEvents = [];
    if (this.hgItems) {
      this.hgItems.forEach((itemWrap, i) => {
        const item = this.items[i];
        if (!item || !item.linkedVideoType) return;
        const playBtn = itemWrap.querySelector(".wcpg-linked-video-btn");
        if (playBtn) {
          const fn = e => {
            e.stopPropagation();
            this._playStackedLinkedVideo(itemWrap, item);
          };
          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(playBtn, "click", fn);
          this._hgLvEvents.push({
            el: playBtn,
            fn
          });
        }
        const closeBtn = itemWrap.querySelector(".wcpg-stacked-linked-close");
        if (closeBtn) {
          const fn = e => {
            e.stopPropagation();
            this._stopStackedLinkedVideo(itemWrap, item);
          };
          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(closeBtn, "click", fn);
          this._hgLvEvents.push({
            el: closeBtn,
            fn
          });
        }
      });
    }

    // Click-to-play/pause for hosted video items and linked hosted videos
    if (!this.opts.videoControls && this.hgItems) {
      this.hgItems.forEach((itemWrap, i) => {
        const item = this.items[i];
        if (!item) return;
        const vids = [];
        if (item.type === "video") {
          const v = itemWrap.querySelector(".wcpg-hg-video");
          if (v) vids.push(v);
        }
        if (item.linkedVideoType && item.linkedVideoType !== "youtube" && item.linkedVideoType !== "vimeo") {
          const v = itemWrap.querySelector(".wcpg-stacked-lv-video");
          if (v) vids.push(v);
        }
        vids.forEach(vid => {
          const fn = e => {
            e.stopPropagation();
            if (vid.paused) vid.play().catch(() => {});else vid.pause();
          };
          _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(vid, "click", fn);
          this._hgLvEvents.push({
            el: vid,
            fn
          });
        });
      });
    }

    // Per-item hover zoom
    if (this.opts.hierarchyGridZoom !== false && this.opts.zoomOnHover && !this._isMobile) {
      this._hgZoomEvents = [];
      this.hgItems && this.hgItems.forEach((itemWrap, i) => {
        const item = this.items[i];
        if (!item || item.type !== "image") return;
        const img = itemWrap.querySelector(".wcpg-hg-img");
        if (!img) return;
        const zoomDisplay = itemWrap.querySelector(".wcpg-hg-display") || itemWrap;
        const enterFn = e => {
          if (itemWrap.classList.contains("wcpg-stacked-lv-active")) return;
          this.mainImg = img;
          this.mainWrap = itemWrap;
          this.mainDisplay = zoomDisplay;
          this.index = i;
          if (this.lens) zoomDisplay.appendChild(this.lens);
          if (this.winCursor) zoomDisplay.appendChild(this.winCursor);
          this._zoomEnter(e);
        };
        const moveFn = e => this._zoomMove(e);
        const leaveFn = () => {
          this._zoomLeave();
          setTimeout(() => {
            if (!this.isZooming) {
              this.mainImg = null;
              this.mainWrap = null;
              this.mainDisplay = null;
            }
          }, 300);
        };
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemWrap, "mouseenter", enterFn);
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemWrap, "mousemove", moveFn);
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemWrap, "mouseleave", leaveFn);
        this._hgZoomEvents.push({
          el: itemWrap,
          event: "mouseenter",
          fn: enterFn
        }, {
          el: itemWrap,
          event: "mousemove",
          fn: moveFn
        }, {
          el: itemWrap,
          event: "mouseleave",
          fn: leaveFn
        });
      });
    }
    if (this.opts.stackedStickyEnabled) {
      this._initStackedSticky();
    }
  },
  _refreshHierarchyGridView() {
    // Remove per-item listeners before rebuilding
    if (this._evHGClicks) {
      this._evHGClicks.forEach(({
        el,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, "click", fn));
      this._evHGClicks = null;
    }
    if (this._hgLvEvents) {
      this._hgLvEvents.forEach(({
        el,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, "click", fn));
      this._hgLvEvents = null;
    }
    if (this._hgZoomEvents) {
      this._hgZoomEvents.forEach(({
        el,
        event,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, event, fn));
      this._hgZoomEvents = null;
    }
    this.index = 0;
    this.hgItems = [];
    this._hgLbTriggers = [];
    this._zoomLeave();
    this.mainImg = null;
    this.mainWrap = null;
    this.mainDisplay = null;
    if (this.hgWrap) {
      this.hgWrap.innerHTML = "";
      if (this.items.length > 0) {
        const heroWrap = this._buildSingleHGItem(this.items[0], 0, true);
        this.hgWrap.appendChild(heroWrap);
        this.hgItems.push(heroWrap);
      }
      if (this.items.length > 1) {
        const grid = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-hg-grid");
        for (let i = 1; i < this.items.length; i++) {
          const itemWrap = this._buildSingleHGItem(this.items[i], i, false);
          grid.appendChild(itemWrap);
          this.hgItems.push(itemWrap);
        }
        this.hgWrap.appendChild(grid);
      }
    }
    this._bindHierarchyGridEvents();
  },
  _bindTilesEvents() {
    this._evTilesClicks = [];
    this._tilesZoomEvents = [];

    // Lightbox: expand-icon buttons
    if (this.opts.lightbox && this._tilesLbTriggers && this._tilesLbTriggers.length) {
      this._tilesLbTriggers.forEach(({
        el,
        index
      }) => {
        const fn = e => {
          e.stopPropagation();
          this._lbOpen(index);
        };
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(el, "click", fn);
        this._evTilesClicks.push({
          el,
          fn
        });
      });
    }

    // Click-to-open on image items
    if (this.opts.lightbox && this.opts.lightboxOpenOnImageClick && this.tilesItems) {
      this.tilesItems.forEach((itemWrap, i) => {
        const item = this.items[i];
        if (!item || item.type !== "image") return;
        const fn = e => {
          if (e.target.closest(".wcpg-lb-trigger")) return;
          this._lbOpen(i);
        };
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemWrap, "click", fn);
        this._evTilesClicks.push({
          el: itemWrap,
          fn
        });
        if (!this._isMobile) itemWrap.style.cursor = "zoom-in";
      });
    }

    // Per-item hover zoom
    if (this.opts.tilesZoom !== false && this.opts.zoomOnHover && !this._isMobile && this.tilesItems) {
      this.tilesItems.forEach((itemWrap, i) => {
        const item = this.items[i];
        if (!item || item.type !== "image") return;
        const img = itemWrap.querySelector(".wcpg-tiles-img");
        if (!img) return;
        const zoomDisplay = itemWrap.querySelector(".wcpg-tiles-display") || itemWrap;
        const enterFn = e => {
          this.mainImg = img;
          this.mainWrap = itemWrap;
          this.mainDisplay = zoomDisplay;
          this.index = i;
          if (this.lens) zoomDisplay.appendChild(this.lens);
          if (this.winCursor) zoomDisplay.appendChild(this.winCursor);
          this._zoomEnter(e);
        };
        const moveFn = e => this._zoomMove(e);
        const leaveFn = () => {
          this._zoomLeave();
          setTimeout(() => {
            if (!this.isZooming) {
              this.mainImg = null;
              this.mainWrap = null;
              this.mainDisplay = null;
            }
          }, 300);
        };
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemWrap, "mouseenter", enterFn);
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemWrap, "mousemove", moveFn);
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(itemWrap, "mouseleave", leaveFn);
        this._tilesZoomEvents.push({
          el: itemWrap,
          event: "mouseenter",
          fn: enterFn
        }, {
          el: itemWrap,
          event: "mousemove",
          fn: moveFn
        }, {
          el: itemWrap,
          event: "mouseleave",
          fn: leaveFn
        });
      });
    }

    // Show More / Show Less button
    if (this._tilesShowMoreBtn) {
      this._evTilesShowMore = () => {
        this._tilesExpanded = !this._tilesExpanded;
        const initialCount = this.opts.tilesInitialCount > 0 ? this.opts.tilesInitialCount : this.items.length;
        if (this._tilesExpanded) {
          // Reveal all hidden tiles, then scroll to the first new one
          const firstNewEl = this.tilesItems[initialCount] || null;
          this.tilesItems.forEach((el, i) => {
            if (i >= initialCount) el.classList.remove("wcpg-tiles-hidden");
          });
          if (firstNewEl) {
            requestAnimationFrame(() => {
              const rect = firstNewEl.getBoundingClientRect();
              const scrollTop = window.scrollY + rect.top - 60;
              window.scrollTo({
                top: scrollTop,
                behavior: "smooth"
              });
            });
          }
        } else {
          // Hide tiles beyond initialCount and scroll gallery back into view
          this.tilesItems.forEach((el, i) => {
            if (i >= initialCount) el.classList.add("wcpg-tiles-hidden");
          });
          // Scroll the gallery wrapper into view
          if (this.wrapper) {
            const rect = this.wrapper.getBoundingClientRect();
            const scrollTop = window.scrollY + rect.top - 60;
            window.scrollTo({
              top: scrollTop,
              behavior: "smooth"
            });
          }
        }
        this._updateTilesShowMoreBtn();
      };
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(this._tilesShowMoreBtn, "click", this._evTilesShowMore);
    }
    if (this.opts.stackedStickyEnabled) {
      this._initStackedSticky();
    }
  },
  _refreshTilesView() {
    // Clean up all tiles event listeners
    if (this._evTilesClicks) {
      this._evTilesClicks.forEach(({
        el,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, "click", fn));
      this._evTilesClicks = null;
    }
    if (this._tilesZoomEvents) {
      this._tilesZoomEvents.forEach(({
        el,
        event,
        fn
      }) => _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(el, event, fn));
      this._tilesZoomEvents = null;
    }
    if (this._evTilesShowMore && this._tilesShowMoreBtn) {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].off(this._tilesShowMoreBtn, "click", this._evTilesShowMore);
      this._evTilesShowMore = null;
    }
    this.index = 0;
    this.tilesItems = [];
    this._tilesLbTriggers = [];
    this._tilesExpanded = false;
    this._zoomLeave();
    this.mainImg = null;
    this.mainWrap = null;
    this.mainDisplay = null;
    if (this.tilesGrid) {
      this.tilesGrid.innerHTML = "";
      const initialCount = this.opts.tilesInitialCount > 0 ? this.opts.tilesInitialCount : this.items.length;
      this.items.forEach((item, i) => {
        const itemWrap = this._buildSingleTilesItem(item, i);
        if (i >= initialCount) itemWrap.classList.add("wcpg-tiles-hidden");
        this.tilesGrid.appendChild(itemWrap);
        this.tilesItems.push(itemWrap);
      });

      // Update show more button visibility
      const hasHidden = this.items.length > initialCount;
      if (this._tilesShowMoreWrap) {
        this._tilesShowMoreWrap.style.display = this.opts.tilesShowMoreEnabled !== false && hasHidden ? "" : "none";
      }
      this._updateTilesShowMoreBtn();
    }
    this._bindTilesEvents();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (galleryMethods);

/***/ },

/***/ "./src/frontend/js/wc-product-gallery/lightbox.js"
/*!********************************************************!*\
  !*** ./src/frontend/js/wc-product-gallery/lightbox.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/frontend/js/wc-product-gallery/utils.js");


// Lightbox: open/close, navigation, zoom, autoplay, fullscreen, pagination.
// Uses this.constructor._lbEl to reference the shared static lightbox DOM element
// without creating a circular import with the main class file.

const lightboxMethods = {
  _lbOpen(index) {
    const lb = this.constructor._lbEl;
    if (!lb) return;

    // Store the element that triggered the lightbox so we can restore focus on close
    this._lbTriggerEl = document.activeElement;

    // Stop any existing autoplay
    this._lbStopAutoplay();
    lb._inst = this;
    this.lbOpen = true;

    // Build items list for this lightbox session
    this._lbOriginalIndex = index;
    this._lbItems = this.opts.lightboxSingleImage ? [this.items[index]] : this.items;

    // Apply per-instance style tokens to the shared lightbox DOM
    lb.style.setProperty("--wcpg-lb-img-radius", this.opts.lightboxImageBorderRadius + "px");
    lb.style.setProperty("--wcpg-lb-thumb-radius", this.opts.lightboxThumbBorderRadius + "px");
    lb.style.setProperty("--wcpg-lb-overlay-bg", this.opts.lightboxOverlayColor);

    // Reset per-open state
    this._lbScale = 1;
    lb._lbPanX = 0;
    lb._lbPanY = 0;
    this._lbRotation = 0;
    this._lbFlipH = false;
    this._lbFlipV = false;

    // Kill any active mobile inner zoom so it can't leak into the lightbox
    if (this._zs.mobileZooming && this.mainImg) {
      this._zs.mobileZooming = false;
      this.mainImg.style.transition = "";
      this.mainImg.style.transformOrigin = "";
      this.mainImg.style.transform = "";
      const curItem = this.items[this.index];
      if (curItem && curItem.src) this.mainImg.src = curItem.src;
    }
    if (this._zs.momentumRaf) {
      cancelAnimationFrame(this._zs.momentumRaf);
      this._zs.momentumRaf = null;
    }
    this._suppressClick = false;

    // Capture source element and its viewport rect BEFORE wcpg-lb-active is
    // added (switching display:none→flex reflows the document, which can shift
    // fixed/sticky ancestors and invalidate the measurement).
    // _lbSourceOverride lets callers (e.g. sticky-split scroll items) supply
    // a specific element instead of the default mainImg.
    this._lbSourceEl = this._lbSourceOverride || this.mainImg || null;
    this._lbSourceOverride = null; // consume immediately
    const _lbOpenSrcRect = this._lbSourceEl ? this._lbSourceEl.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    lb.classList.remove("wcpg-lb-closing");
    lb.classList.add("wcpg-lb-active");
    document.body.classList.add("wcpg-lb-body-open");
    if (this.opts.lightboxZoomOrigin) {
      // Navigate to the target index instantly so the zoom-from-source
      // animation starts with the correct image already in place.
      // Forcing _lbIdx = index makes direction = 0 (no slide), and
      // temporarily setting transition to "none" removes the exit-phase
      // delay so the image begins loading in the same tick.
      this._lbIdx = index;
      const _savedTr = this.opts.lightboxTransition;
      this.opts.lightboxTransition = "none";
      this._lbGoTo(index);
      this.opts.lightboxTransition = _savedTr;
      // _lbGoTo loads the new image via setTimeout(0), so the stale lbImg.src
      // from the previous session is still set at this point. Clear it now so
      // the old image is never visible during the zoom-open animation.
      const _lbImgEl = lb.querySelector(".wcpg-lb-img");
      if (_lbImgEl) _lbImgEl.src = "";
    } else {
      this._lbGoTo(index);
    }
    this._lbSyncToolbar();
    if (!lb._evBound) {
      lb._evBound = true;
      const ov = lb.querySelector(".wcpg-lb-overlay");
      const close = lb.querySelector(".wcpg-lb-close");
      const prev = lb.querySelector(".wcpg-lb-prev");
      const next = lb.querySelector(".wcpg-lb-next");
      const wrap = lb.querySelector(".wcpg-lb-media-wrap");
      const zoomIn = lb.querySelector(".wcpg-lb-zoom-in");
      const zoomOut = lb.querySelector(".wcpg-lb-zoom-out");
      const zoomReset = lb.querySelector(".wcpg-lb-zoom-reset");
      const autoplayBtn = lb.querySelector(".wcpg-lb-autoplay");
      const fsBtn = lb.querySelector(".wcpg-lb-fullscreen");
      const lbLinkedVideoBtnEl = lb.querySelector(".wcpg-lb-linked-video-btn");
      const shareBtn = lb.querySelector(".wcpg-lb-share");
      const shareDropdown = lb.querySelector(".wcpg-lb-share-dropdown");
      const fbBtn = lb.querySelector(".wcpg-lb-share-fb");
      const twBtn = lb.querySelector(".wcpg-lb-share-tw");
      const piBtn = lb.querySelector(".wcpg-lb-share-pi");
      const dlBtn = lb.querySelector(".wcpg-lb-share-dl");

      // Image transformation tools
      const rotateCcwBtn = lb.querySelector(".wcpg-lb-rotate-ccw");
      const rotateCwBtn = lb.querySelector(".wcpg-lb-rotate-cw");
      const flipHBtn = lb.querySelector(".wcpg-lb-flip-h");
      const flipVBtn = lb.querySelector(".wcpg-lb-flip-v");
      const zoom1to1Btn = lb.querySelector(".wcpg-lb-zoom-1to1");
      if (rotateCcwBtn) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(rotateCcwBtn, "click", () => lb._inst._lbRotateImage(-90));
      if (rotateCwBtn) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(rotateCwBtn, "click", () => lb._inst._lbRotateImage(90));
      if (flipHBtn) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(flipHBtn, "click", () => lb._inst._lbFlipImage("h"));
      if (flipVBtn) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(flipVBtn, "click", () => lb._inst._lbFlipImage("v"));
      if (zoom1to1Btn) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(zoom1to1Btn, "click", () => lb._inst._lbToggle1to1());

      // Share button toggle
      if (shareBtn) {
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(shareBtn, "click", e => {
          e.stopPropagation();
          if (!shareDropdown) return;
          const isOpen = shareDropdown.style.display !== "none";
          shareDropdown.style.display = isOpen ? "none" : "";
        });
      }
      // Resolve the current media URL + Pinterest image at share click time.
      // Converts iframe embed URLs (youtube.com/embed/ID) to shareable watch URLs.
      const _getShareMedia = () => {
        const _sinst = lb._inst;
        const _sitems = _sinst?._lbItems || _sinst?.items;
        const _sitem = _sitems?.[_sinst?._lbIdx];
        const _svid = lb.querySelector(".wcpg-lb-video");
        const _siframe = lb.querySelector(".wcpg-lb-iframe");
        const _simg = lb.querySelector(".wcpg-lb-img");
        const _isVid = _svid && _svid.style.display !== "none";
        const _isEmbed = _siframe && _siframe.style.display !== "none";
        const _toWatch = u => {
          if (!u) return "";
          const c = u.split("?")[0];
          const yt = c.match(/youtube\.com\/embed\/([^/]+)/);
          if (yt) return "https://www.youtube.com/watch?v=" + yt[1];
          const vm = c.match(/player\.vimeo\.com\/video\/([^/]+)/);
          if (vm) return "https://vimeo.com/" + vm[1];
          return c;
        };
        let url, pinMedia;
        if (_isEmbed) {
          // Linked embed (image item with linkedVideoEmbed) or direct embed item
          const _raw = _sitem?.type === "image" ? _sitem?.linkedVideoEmbed : _sitem?.src;
          url = _toWatch(_raw) || window.location.href;
          pinMedia = "";
        } else if (_isVid) {
          url = _svid.src || window.location.href;
          pinMedia = _sitem?.poster || "";
        } else {
          url = _simg?.src || window.location.href;
          pinMedia = _simg?.src || "";
        }
        return {
          url,
          pinMedia,
          caption: _sitem?.caption || document.title || ""
        };
      };
      if (fbBtn) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(fbBtn, "click", e => {
        e.stopPropagation();
        if (shareDropdown) shareDropdown.style.display = "none";
        const {
          url
        } = _getShareMedia();
        window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url), "_blank");
      });
      if (twBtn) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(twBtn, "click", e => {
        e.stopPropagation();
        if (shareDropdown) shareDropdown.style.display = "none";
        const {
          url,
          caption
        } = _getShareMedia();
        window.open("https://x.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(caption), "_blank");
      });
      if (piBtn) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(piBtn, "click", e => {
        e.stopPropagation();
        if (shareDropdown) shareDropdown.style.display = "none";
        const {
          url,
          pinMedia,
          caption
        } = _getShareMedia();
        window.open("https://pinterest.com/pin/create/button/?url=" + encodeURIComponent(url) + (pinMedia ? "&media=" + encodeURIComponent(pinMedia) : "") + "&description=" + encodeURIComponent(caption), "_blank");
      });
      if (dlBtn) _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(dlBtn, "click", e => {
        e.stopPropagation();
        if (shareDropdown) shareDropdown.style.display = "none";
        const _dlVid = lb.querySelector(".wcpg-lb-video");
        const _dlIsVid = _dlVid && _dlVid.style.display !== "none" && _dlVid.src;
        const _dlHref = _dlIsVid ? _dlVid.src : (lb.querySelector(".wcpg-lb-img") || {}).src;
        if (!_dlHref) return;
        const _dlA = document.createElement("a");
        _dlA.href = _dlHref;
        _dlA.download = _dlHref.split("/").pop().split("?")[0] || (_dlIsVid ? "video" : "image");
        _dlA.target = "_blank";
        _dlA.rel = "noopener noreferrer";
        document.body.appendChild(_dlA);
        _dlA.click();
        document.body.removeChild(_dlA);
      });

      // Close share dropdown when clicking outside
      document.addEventListener("click", lb._evShareClose = () => {
        const sd = lb.querySelector(".wcpg-lb-share-dropdown");
        if (sd) sd.style.display = "none";
      });
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(close, "click", () => lb._inst._lbClose());
      if (lbLinkedVideoBtnEl) {
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(lbLinkedVideoBtnEl, "click", e => {
          e.stopPropagation();
          lb._inst._lbPlayLinkedVideo();
        });
      }

      // Overlay click — only if the click was NOT on media/controls
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(ov, "click", () => {
        if (lb._inst?.opts?.lightboxCloseOnOverlay) lb._inst._lbClose();
      });
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(prev, "click", () => {
        lb._inst._lbStopAutoplay();
        lb._inst._lbGoTo(lb._inst._lbIdx - 1);
      });
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(next, "click", () => {
        lb._inst._lbStopAutoplay();
        lb._inst._lbGoTo(lb._inst._lbIdx + 1);
      });

      // Zoom in / out on lightbox image
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(zoomIn, "click", () => lb._inst._lbZoom(0.25));
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(zoomOut, "click", () => lb._inst._lbZoom(-0.25));
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(zoomReset, "click", () => lb._inst._lbZoomReset());

      // Autoplay toggle
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(autoplayBtn, "click", () => lb._inst._lbToggleAutoplay());

      // Fullscreen toggle
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(fsBtn, "click", () => lb._inst._lbToggleFullscreen());

      // Keyboard
      document.addEventListener("keydown", lb._evKey = e => {
        if (!lb._inst?.lbOpen) return;
        const k = e.key;

        // Tab focus trap: keep keyboard focus inside the lightbox
        if (k === "Tab") {
          const focusable = Array.from(lb.querySelectorAll('button:not([disabled]), [tabindex="0"]')).filter(el => el.offsetParent !== null && getComputedStyle(el).display !== "none");
          if (!focusable.length) return;
          const idx = focusable.indexOf(document.activeElement);
          e.preventDefault();
          if (e.shiftKey) {
            const prev = idx <= 0 ? focusable[focusable.length - 1] : focusable[idx - 1];
            prev.focus();
          } else {
            const next = idx >= focusable.length - 1 ? focusable[0] : focusable[idx + 1];
            next.focus();
          }
          return;
        }
        if (k === "Escape") {
          e.preventDefault();
          lb._inst._lbClose();
        }
        if (k === "ArrowRight") {
          e.preventDefault();
          lb._inst._lbStopAutoplay();
          lb._inst._lbGoTo(lb._inst._lbIdx + (lb._inst._isRTL ? -1 : 1));
        }
        if (k === "ArrowLeft") {
          e.preventDefault();
          lb._inst._lbStopAutoplay();
          lb._inst._lbGoTo(lb._inst._lbIdx + (lb._inst._isRTL ? 1 : -1));
        }
        if (k === " ") {
          e.preventDefault();
          lb._inst._lbToggleAutoplay();
        }
        // Zoom keys only apply to images — skip for video/embed
        const _kbVid = lb.querySelector(".wcpg-lb-video");
        const _kbIframe = lb.querySelector(".wcpg-lb-iframe");
        const _kbIsMedia = _kbVid && _kbVid.style.display !== "none" || _kbIframe && _kbIframe.style.display !== "none";
        if (!_kbIsMedia && lb._inst?.opts?.lightboxZoomIn !== false) {
          if (k === "+" || k === "=") lb._inst._lbZoom(0.25);
          if (k === "-") lb._inst._lbZoom(-0.25);
          if (k === "0") lb._inst._lbZoomReset();
        }
        if (k === "f" || k === "F") lb._inst._lbToggleFullscreen();
      });

      // Mouse wheel zoom in media area (images only — skip for video/embed)
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(wrap, "wheel", e => {
        const _wVid = lb.querySelector(".wcpg-lb-video");
        const _wIframe = lb.querySelector(".wcpg-lb-iframe");
        if (_wVid && _wVid.style.display !== "none" || _wIframe && _wIframe.style.display !== "none") return;
        if (!lb._inst?.opts?.lightboxScrollZoom) return;
        e.preventDefault();
        lb._inst._lbZoom(e.deltaY < 0 ? 0.15 : -0.15);
      }, {
        passive: false
      });

      // Mouse drag: pan when zoomed, or navigate when not zoomed (lightboxSwipe)
      let isDragging = false,
        dragX = 0,
        dragY = 0,
        isDragNav = false,
        navStartX = 0;
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(wrap, "mousedown", e => {
        if (lb._inst._lbScale <= 1) {
          if (lb._inst?.opts?.lightboxSwipe) {
            isDragNav = true;
            navStartX = e.clientX;
            wrap.style.cursor = "grabbing";
          }
          return;
        }
        isDragging = true;
        dragX = e.clientX - lb._lbPanX;
        dragY = e.clientY - lb._lbPanY;
        wrap.style.cursor = "grabbing";
      });
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(document, "mousemove", e => {
        if (!isDragging) return;
        lb._lbPanX = e.clientX - dragX;
        lb._lbPanY = e.clientY - dragY;
        lb._inst._lbApplyImageTransform();
      });
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(document, "mouseup", e => {
        if (isDragging) {
          isDragging = false;
          wrap.style.cursor = lb._inst._lbScale > 1 ? "grab" : lb._inst?.opts?.lightboxSwipe ? "grab" : "";
        }
        if (isDragNav) {
          isDragNav = false;
          wrap.style.cursor = lb._inst?.opts?.lightboxSwipe ? "grab" : "";
          const dx = e.clientX - navStartX;
          if (Math.abs(dx) >= (lb._inst?.opts?.swipeThreshold || 50)) {
            lb._inst._lbStopAutoplay();
            const _navNext = lb._inst._isRTL ? dx > 0 : dx < 0;
            lb._inst._lbGoTo(lb._inst._lbIdx + (_navNext ? 1 : -1));
          }
        }
      });

      // Touch: pinch-to-zoom + single-finger pan (when zoomed) + swipe to navigate
      let tSx = 0,
        tSy = 0;
      let tDist0 = 0,
        tScale0 = 1;
      let tIsPinch = false;
      let tPanX0 = 0,
        tPanY0 = 0; // pan offset at touch start
      let tSwipeDir = null; // 'h' | 'v' | null — direction lock for swipe nav

      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(wrap, "touchstart", e => {
        if (e.touches.length === 2) {
          tIsPinch = true;
          tSwipeDir = null;
          tDist0 = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
          tScale0 = lb._inst._lbScale || 1;
          tPanX0 = lb._lbPanX || 0;
          tPanY0 = lb._lbPanY || 0;
        } else {
          tIsPinch = false;
          tSwipeDir = null;
          tSx = e.touches[0].clientX;
          tSy = e.touches[0].clientY;
          tPanX0 = lb._lbPanX || 0;
          tPanY0 = lb._lbPanY || 0;
        }
      }, {
        passive: true
      });
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(wrap, "touchmove", e => {
        if (tIsPinch && e.touches.length === 2) {
          // Pinch-to-zoom — apply immediately (no CSS transition) for
          // responsive feel; toolbar is synced on touchend.
          e.preventDefault();
          const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
          const sc = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(tScale0 * (d / tDist0), 0.75, 5);
          lb._inst._lbScale = sc;
          const img = lb.querySelector(".wcpg-lb-img");
          const _tRot = lb._inst._lbRotation || 0;
          const _tScX = sc * (lb._inst._lbFlipH ? -1 : 1);
          const _tScY = sc * (lb._inst._lbFlipV ? -1 : 1);
          img.style.transition = "none";
          img.style.transform = `scale(${_tScX}, ${_tScY}) rotate(${_tRot}deg) translate(${(lb._lbPanX || 0) / sc}px, ${(lb._lbPanY || 0) / sc}px)`;
        } else if (!tIsPinch && e.touches.length === 1 && (lb._inst._lbScale || 1) > 1.05) {
          // Single-finger pan while zoomed in
          e.preventDefault();
          lb._lbPanX = tPanX0 + (e.touches[0].clientX - tSx);
          lb._lbPanY = tPanY0 + (e.touches[0].clientY - tSy);
          const sc = lb._inst._lbScale || 1;
          const img = lb.querySelector(".wcpg-lb-img");
          const _pRot = lb._inst._lbRotation || 0;
          const _pScX = sc * (lb._inst._lbFlipH ? -1 : 1);
          const _pScY = sc * (lb._inst._lbFlipV ? -1 : 1);
          img.style.transition = "none";
          img.style.transform = `scale(${_pScX}, ${_pScY}) rotate(${_pRot}deg) translate(${lb._lbPanX / sc}px, ${lb._lbPanY / sc}px)`;
        } else if (!tIsPinch && e.touches.length === 1) {
          // Not zoomed — lock swipe direction on first significant move.
          // preventDefault() on horizontal gestures stops vertical scroll
          // so touchend fires with reliable coordinates.
          if (!tSwipeDir) {
            const _tdx = Math.abs(e.touches[0].clientX - tSx);
            const _tdy = Math.abs(e.touches[0].clientY - tSy);
            if (_tdx > 5 || _tdy > 5) tSwipeDir = _tdx >= _tdy ? "h" : "v";
          }
          if (tSwipeDir === "h") e.preventDefault();
        }
      }, {
        passive: false
      });
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(wrap, "touchend", e => {
        if (tIsPinch) {
          tIsPinch = false;
          // Snap back to 1× if barely zoomed; otherwise apply smooth
          // settle transition and sync the toolbar (reset button etc.)
          if ((lb._inst._lbScale || 1) < 1.1) {
            lb._inst._lbZoomReset();
          } else {
            lb._inst._lbApplyImageTransform();
            lb._inst._lbSyncToolbar();
          }
          return;
        }
        tSwipeDir = null;
        // Only swipe-navigate when not zoomed in and lightboxSwipe is on
        if ((lb._inst._lbScale || 1) > 1.05) return;
        if (!lb._inst?.opts?.lightboxSwipe) return;
        const dx = e.changedTouches[0].clientX - tSx;
        const dy = e.changedTouches[0].clientY - tSy;
        if (Math.abs(dx) > (lb._inst?.opts?.swipeThreshold || 50) && Math.abs(dx) > Math.abs(dy)) {
          lb._inst._lbStopAutoplay();
          const swipeNext = lb._inst._isRTL ? dx > 0 : dx < 0;
          lb._inst._lbGoTo(lb._inst._lbIdx + (swipeNext ? 1 : -1));
        }
      });

      // Fullscreen change (e.g. user presses Escape in browser fullscreen)
      document.addEventListener("fullscreenchange", lb._evFs = () => {
        const inFs = !!document.fullscreenElement;
        lb.classList.toggle("wcpg-lb-fullscreen-active", inFs);
        const fsEnter = lb.querySelector(".wcpg-fs-enter");
        const fsExit = lb.querySelector(".wcpg-fs-exit");
        if (fsEnter) fsEnter.style.display = inFs ? "none" : "";
        if (fsExit) fsExit.style.display = inFs ? "" : "none";
      });
    }
    if (this.opts.onLightboxOpen) this.opts.onLightboxOpen.call(this, index);
    const dur = this.opts.lightboxAnimationDuration;
    const container = lb.querySelector(".wcpg-lb-container");
    const overlay = lb.querySelector(".wcpg-lb-overlay");

    // Overlay instantly opaque — covers the page before scroll lock is applied
    overlay.style.transition = "none";
    overlay.style.opacity = "1";

    // Apply body scroll lock NOW while the overlay is opaque (no visible jump)
    this._lbScrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = -this._lbScrollY + "px";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    const mWrap = lb.querySelector(".wcpg-lb-media-wrap");
    const _wrapRect = mWrap.getBoundingClientRect();
    const _hasSrc = _lbOpenSrcRect.width > 0 && _lbOpenSrcRect.height > 0;
    if (this.opts.lightboxZoomOrigin && _hasSrc) {
      // Zoom-from-source (FLIP open): snap the media wrap to the source image's
      // viewport rect then spring it to its natural grid position.
      // Overlay, toolbar and nav arrows animate in via their existing CSS
      // transitions (triggered by wcpg-lb-visible below) — only the image area zooms.
      const _openScale = Math.max(_lbOpenSrcRect.width / _wrapRect.width, 0.04);
      const _openDx = _lbOpenSrcRect.left + _lbOpenSrcRect.width / 2 - (_wrapRect.left + _wrapRect.width / 2);
      const _openDy = _lbOpenSrcRect.top + _lbOpenSrcRect.height / 2 - (_wrapRect.top + _wrapRect.height / 2);
      mWrap.style.transition = "none";
      mWrap.style.transformOrigin = "center center";
      mWrap.style.transform = `translate(${_openDx}px, ${_openDy}px) scale(${_openScale})`;
      requestAnimationFrame(() => {
        lb.classList.add("wcpg-lb-visible");
        overlay.style.transition = "";
        overlay.style.opacity = "";
        requestAnimationFrame(() => {
          const _ease = "cubic-bezier(0.22, 1, 0.36, 1)";
          mWrap.style.transition = `transform ${dur}ms ${_ease}`;
          mWrap.style.transform = "translate(0px, 0px) scale(1)";
          setTimeout(() => {
            mWrap.style.transition = "";
            mWrap.style.transform = "";
            mWrap.style.transformOrigin = "";
          }, dur + 20);
        });
      });
    } else {
      // Simple fade-in on the container (default)
      container.style.transition = "none";
      container.style.opacity = "0";
      requestAnimationFrame(() => {
        lb.classList.add("wcpg-lb-visible");
        overlay.style.transition = "";
        overlay.style.opacity = "";
        requestAnimationFrame(() => {
          container.style.transition = `opacity ${dur}ms ease`;
          container.style.opacity = "1";
          setTimeout(() => {
            container.style.transition = "";
            container.style.opacity = "";
          }, dur + 20);
        });
      });
    }

    // Move focus into the lightbox after the open animation completes
    setTimeout(() => {
      const closeBtn = lb.querySelector(".wcpg-lb-close");
      if (closeBtn) closeBtn.focus();
    }, dur + 60);

    // Start autoplay if configured
    if (this.opts.lightboxAutoplay) {
      setTimeout(() => this._lbStartAutoplay(), dur + 100);
    }
  },
  _lbClose() {
    const lb = this.constructor._lbEl;
    if (!lb || !this.lbOpen) return;

    // Close share dropdown if open
    const sd = lb.querySelector(".wcpg-lb-share-dropdown");
    if (sd) sd.style.display = "none";
    this._lbStopAutoplay();

    // Exit fullscreen if active
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    this.lbOpen = false;
    this._lbResetAllTransforms();
    const dur = this.opts.lightboxAnimationDuration;
    const container = lb.querySelector(".wcpg-lb-container");

    // Release body scroll lock NOW — while the lightbox overlay still covers
    // the page. The overlay is fully opaque at this point so the user never
    // sees the scroll position restore. Doing it inside the setTimeout (after
    // the fade-out) causes a visible blink because the body jumps to y=0 for
    // one paint frame before window.scrollTo can correct it.
    const savedScrollY = this._lbScrollY;
    this._lbScrollY = undefined;
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    if (savedScrollY !== undefined) window.scrollTo(0, savedScrollY);
    lb.classList.add("wcpg-lb-closing");
    lb.classList.remove("wcpg-lb-visible");
    {
      const _cmWrap = lb.querySelector(".wcpg-lb-media-wrap");
      const _csEl = this._lbSourceEl;
      const _csr = _csEl ? _csEl.getBoundingClientRect() : null;
      const _hasCsr = _csr && _csr.width > 0;
      if (this.opts.lightboxZoomOrigin && _hasCsr) {
        // Zoom-to-source (FLIP close): animate only the media wrap back to the
        // source image's viewport rect. Overlay, toolbar and arrows fade out
        // simultaneously via the wcpg-lb-closing CSS rules.
        const _wr = _cmWrap.getBoundingClientRect();
        const _cs = Math.max(_csr.width / _wr.width, 0.04);
        const _cdx = _csr.left + _csr.width / 2 - (_wr.left + _wr.width / 2);
        const _cdy = _csr.top + _csr.height / 2 - (_wr.top + _wr.height / 2);
        const _cEase = "cubic-bezier(0.55, 0, 1, 0.45)";
        _cmWrap.style.transition = `transform ${dur}ms ${_cEase}`;
        _cmWrap.style.transformOrigin = "center center";
        _cmWrap.style.transform = `translate(${_cdx}px, ${_cdy}px) scale(${_cs})`;
      } else {
        // Simple fade-out on the container (default)
        container.style.transition = `opacity ${dur}ms ease`;
        container.style.opacity = "0";
      }
    }
    const vid = lb.querySelector(".wcpg-lb-video");
    if (vid) {
      vid.pause();
      vid.src = "";
    }
    const lbIframeClose = lb.querySelector(".wcpg-lb-iframe");
    if (lbIframeClose) {
      lbIframeClose.src = "";
    }
    const triggerEl = this._lbTriggerEl;
    this._lbTriggerEl = null;
    setTimeout(() => {
      lb.classList.remove("wcpg-lb-active", "wcpg-lb-closing");
      container.style.transition = "";
      container.style.opacity = "";
      container.style.transform = "";
      container.style.transformOrigin = "";
      const _cwWrap = lb.querySelector(".wcpg-lb-media-wrap");
      if (_cwWrap) {
        _cwWrap.style.transition = "";
        _cwWrap.style.transform = "";
        _cwWrap.style.transformOrigin = "";
      }
      document.body.classList.remove("wcpg-lb-body-open");

      // Always reset mainImg transform — mobile zoom may have left it scaled
      if (this.mainImg) {
        this._zs.mobileZooming = false;
        this.mainImg.style.transition = "";
        this.mainImg.style.transformOrigin = "";
        this.mainImg.style.transform = "";
      }
      this._zs.scale = 1;
      this._zs.panX = 0;
      this._zs.panY = 0;

      // Sync main gallery to the last image viewed in the lightbox.
      // Skip for sticky-split when both sync modes are off — the main
      // viewer is intentionally decoupled from lightbox navigation in that case.
      const _closeSyncIdx = this.opts.lightboxSingleImage ? this._lbOriginalIndex ?? this._lbIdx : this._lbIdx;
      const _ssNosync = this.opts.galleryType === "sticky-split" && !this._mobileLayoutActive && !this.opts.stickySplitClickSync;
      if (!_ssNosync && _closeSyncIdx !== undefined && _closeSyncIdx !== this.index) this._goTo(_closeSyncIdx);
      this._lbItems = null;
      this._lbOriginalIndex = undefined;

      // Restore focus to the element that originally opened the lightbox
      if (triggerEl && triggerEl.focus) {
        try {
          triggerEl.focus();
        } catch (_) {}
      }
    }, dur);
    if (this.opts.onLightboxClose) this.opts.onLightboxClose.call(this);
  },
  _lbGoTo(index, direction) {
    // Close share dropdown when navigating
    const _lbEl = this.constructor._lbEl;
    if (_lbEl) {
      const _sd = _lbEl.querySelector(".wcpg-lb-share-dropdown");
      if (_sd) _sd.style.display = "none";
    }
    const inst = this;
    const items = inst._lbItems || inst.items;
    const len = items.length;
    if (!len) return;
    const prevIdx = inst._lbIdx ?? index;
    if (inst.opts.lightboxLoop) index = (index % len + len) % len;else index = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(index, 0, len - 1);

    // Detect wrap-around (last→first or first→last)
    const isWrap = prevIdx === len - 1 && index === 0 || prevIdx === 0 && index === len - 1;
    if (direction === undefined) {
      if (isWrap) direction = 0;else direction = index > prevIdx ? 1 : index < prevIdx ? -1 : 0;
    }
    inst._lbResetAllTransforms();
    inst._lbIdx = index;
    const lb = this.constructor._lbEl;
    const lbImg = lb.querySelector(".wcpg-lb-img");
    const lbVid = lb.querySelector(".wcpg-lb-video");
    const lbIframe = lb.querySelector(".wcpg-lb-iframe");
    const spin = lb.querySelector(".wcpg-lb-spinner");
    const cap = lb.querySelector(".wcpg-lb-caption");
    const ctr = lb.querySelector(".wcpg-lb-counter");
    const prev = lb.querySelector(".wcpg-lb-prev");
    const next = lb.querySelector(".wcpg-lb-next");
    const inner = lb.querySelector(".wcpg-lb-media-inner");
    const mWrap = lb.querySelector(".wcpg-lb-media-wrap");

    // Cancel any in-flight animation
    this._lbAnimKey = (this._lbAnimKey || 0) + 1;
    const animKey = this._lbAnimKey;
    const type = inst.opts.lightboxTransition || "slide";
    const slideW = mWrap ? mWrap.offsetWidth : window.innerWidth;
    const dur = Math.round(inst.opts.lightboxAnimationDuration * 0.75);
    const exitDur = type === "none" ? 0 : Math.round(dur * 0.42);
    const ease = "cubic-bezier(0.42, 0, 0.18, 1)";

    // Wrap: slide uses a short fade+shift; other types treat it like normal nav
    const isWrapSlide = isWrap && type === "slide";

    // In RTL, invert the slide direction so new content enters from the correct side.
    const rtlDir = inst._isRTL ? -direction : direction;
    const rtlWrapDir = d => inst._isRTL ? -d : d;
    const item = items[index];
    const isVid = item.type === "video";
    const isEmbed = item.type === "youtube" || item.type === "vimeo";

    // Stop any currently playing media
    lbVid.pause();
    lbVid.src = "";
    if (lbIframe) lbIframe.src = "";
    const lbLinkedVideoBtn = lb.querySelector(".wcpg-lb-linked-video-btn");
    if (lbLinkedVideoBtn) lbLinkedVideoBtn.style.display = "none";

    // ── Phase 1: exit ─────────────────────────────────────────────────
    if (type === "slide") {
      if (!isWrapSlide) {
        inner.style.transition = `transform ${exitDur}ms ${ease}`;
        inner.style.transform = `translateX(${-rtlDir * slideW}px)`;
      } else {
        const wrapDir = rtlWrapDir(prevIdx === len - 1 ? 1 : -1);
        const wrapX = Math.round(slideW * 0.12);
        inner.style.transition = `transform ${exitDur}ms ease, opacity ${exitDur}ms ease`;
        inner.style.transform = `translateX(${-wrapDir * wrapX}px)`;
        inner.style.opacity = "0";
      }
    } else if (type === "fade") {
      inner.style.transition = `opacity ${exitDur}ms ease`;
      inner.style.opacity = "0";
    } else if (type === "zoom") {
      inner.style.transition = `opacity ${exitDur}ms ease, transform ${exitDur}ms ease`;
      inner.style.opacity = "0";
      inner.style.transform = "scale(0.88)";
    }
    // "none": no exit animation

    if (type !== "none") spin.style.display = "flex";

    // ── Phase 2: load new media, then enter ───────────────────────────
    setTimeout(() => {
      if (inst._lbAnimKey !== animKey) return;

      // Snap inner to entry start position (instant, no transition)
      inner.style.transition = "none";
      if (type === "slide") {
        if (!isWrapSlide) {
          inner.style.transform = `translateX(${rtlDir * slideW}px)`;
          inner.style.opacity = "1";
        } else {
          const wrapDir = rtlWrapDir(prevIdx === len - 1 ? 1 : -1);
          const wrapX = Math.round(slideW * 0.12);
          inner.style.transform = `translateX(${wrapDir * wrapX}px)`;
          inner.style.opacity = "0";
        }
      } else if (type === "fade") {
        inner.style.transform = "";
        inner.style.opacity = "0";
      } else if (type === "zoom") {
        inner.style.transform = "scale(1.08)";
        inner.style.opacity = "0";
      }
      const enter = () => {
        if (inst._lbAnimKey !== animKey) return;
        spin.style.display = "none";
        // Sync toolbar (zoom/fullscreen visibility) for the newly visible media type
        inst._lbSyncToolbar();
        if (type === "none") return; // instant — already visible

        const enterDur = isWrapSlide ? Math.round(dur * 0.65) : dur;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (inst._lbAnimKey !== animKey) return;
            if (type === "slide") {
              inner.style.transition = `transform ${enterDur}ms ${ease}` + (isWrapSlide ? `, opacity ${enterDur}ms ease` : "");
              inner.style.transform = "translateX(0)";
              inner.style.opacity = "1";
            } else if (type === "fade") {
              inner.style.transition = `opacity ${enterDur}ms ease`;
              inner.style.transform = "";
              inner.style.opacity = "1";
            } else if (type === "zoom") {
              inner.style.transition = `opacity ${enterDur}ms ease, transform ${enterDur}ms ease`;
              inner.style.transform = "scale(1)";
              inner.style.opacity = "1";
            }
            setTimeout(() => {
              if (inst._lbAnimKey !== animKey) return;
              inner.style.transition = "";
              inner.style.transform = "";
              inner.style.opacity = "";
            }, enterDur + 20);
          });
        });
      };
      if (isEmbed) {
        lbImg.style.display = "none";
        lbVid.style.display = "none";
        if (lbIframe) {
          lbIframe.style.display = "block";
          lbIframe.src = item.embed || item.src;
        }
        enter();
      } else if (isVid) {
        lbImg.style.display = "none";
        lbVid.style.display = "block";
        if (lbIframe) lbIframe.style.display = "none";
        lbVid.loop = inst.opts.videoHostedLoop;
        lbVid.muted = inst.opts.videoHostedMuted;
        lbVid.src = item.src;
        lbVid.poster = item.poster || "";
        lbVid.load();
        if (inst.opts.videoHostedAutoplay) {
          lbVid.play().catch(() => {});
        }
        enter();
      } else {
        lbImg.style.display = "";
        lbVid.style.display = "none";
        if (lbIframe) lbIframe.style.display = "none";
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].loadImage(item.zoomSrc || item.src).then(loaded => {
          if (inst._lbAnimKey !== animKey) return;
          lbImg.src = loaded.src;
          lbImg.alt = item.caption || "";
          const _lvBtn = lb.querySelector(".wcpg-lb-linked-video-btn");
          if (_lvBtn) _lvBtn.style.display = item.linkedVideoType ? "" : "none";
          // Auto-play linked video when the relevant autoplay setting is on.
          if (item.linkedVideoType) {
            const _lvIsEmbed = item.linkedVideoType === "youtube" || item.linkedVideoType === "vimeo";
            if (_lvIsEmbed && inst.opts.videoAutoplay || !_lvIsEmbed && inst.opts.videoHostedAutoplay) {
              inst._lbPlayLinkedVideo();
            }
          }
          enter();
        });
      }
    }, exitDur);

    // ── Update UI (counter, caption, arrows, pagination) ──────────────
    if (inst.opts.lightboxShowCaption && cap) cap.textContent = item.caption || "";
    if (inst.opts.lightboxShowCounter && ctr) ctr.textContent = len > 1 ? `${index + 1} / ${len}` : "";
    if (!inst.opts.lightboxLoop) {
      prev.classList.toggle("wcpg-btn-disabled", index === 0);
      next.classList.toggle("wcpg-btn-disabled", index === len - 1);
    } else {
      prev.classList.remove("wcpg-btn-disabled");
      next.classList.remove("wcpg-btn-disabled");
    }
    if (len <= 1 || !inst.opts.lightboxShowArrows) {
      prev.style.display = "none";
      next.style.display = "none";
    } else {
      prev.style.display = "";
      next.style.display = "";
    }
    if (inst.opts.lightboxShowThumbnails) inst._buildLbPagination(lb, index);
  },
  _buildLbPagination(lb, activeIdx) {
    const strip = lb.querySelector(".wcpg-lb-thumbs-strip");
    strip.innerHTML = "";
    const items = this._lbItems || this.items;
    if (this.opts.lightboxPaginationType === "dots") {
      strip.className = "wcpg-lb-thumbs-strip wcpg-lb-dots-strip";
      items.forEach((_, i) => {
        const dot = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("button", "wcpg-lb-dot" + (i === activeIdx ? " wcpg-lb-dot-active" : ""));
        dot.setAttribute("aria-label", `Go to image ${i + 1}`);
        dot.setAttribute("data-index", i);
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(dot, "click", () => lb._inst._lbGoTo(i));
        strip.appendChild(dot);
      });
    } else {
      strip.className = "wcpg-lb-thumbs-strip";
      items.forEach((item, i) => {
        const t = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-lb-thumb-item" + (i === activeIdx ? " wcpg-lb-thumb-active" : ""));
        t.setAttribute("data-index", i);
        t.setAttribute("tabindex", "0");
        t.setAttribute("role", "button");
        t.setAttribute("aria-label", `View image ${i + 1}`);
        const isLbMedia = item.type !== "image";
        if (!isLbMedia || item.thumb) {
          const img = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("img");
          img.src = item.thumb || item.src;
          img.alt = item.caption || "";
          img.draggable = false;
          if (isLbMedia) {
            img.onerror = () => {
              img.remove();
              t.classList.add("wcpg-thumb-no-thumb");
            };
          }
          t.appendChild(img);
        } else {
          t.classList.add("wcpg-thumb-no-thumb");
        }
        if (isLbMedia) {
          const b = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-thumb-play-badge");
          b.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
          t.appendChild(b);
        }
        if (!isLbMedia && item.linkedVideoType) {
          const b = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].el("div", "wcpg-thumb-play-badge");
          b.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
          t.appendChild(b);
          t.classList.add("wcpg-thumb-has-video");
        }
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(t, "click", () => lb._inst._lbGoTo(i));
        _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(t, "keydown", e => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            lb._inst._lbGoTo(i);
          }
        });
        strip.appendChild(t);
      });
    }
  },
  // ── Lightbox: image zoom (pan+scale inside lightbox) ────────────────────────
  _lbZoom(delta) {
    const lb = this.constructor._lbEl;
    if (!lb) return;
    if (lb.querySelector(".wcpg-lb-video").style.display !== "none") return;
    lb._inst._lbScale = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp((lb._inst._lbScale || 1) + delta, 1, 5);
    lb._inst._lbApplyImageTransform();
    lb._inst._lbSyncToolbar();
  },
  _lbZoomReset() {
    const lb = this.constructor._lbEl;
    if (!lb) return;
    lb._inst = lb._inst || this;
    lb._inst._lbScale = 1;
    lb._lbPanX = 0;
    lb._lbPanY = 0;
    lb._inst._lbApplyImageTransform();
    lb._inst._lbSyncToolbar();
  },
  _lbApplyImageTransform() {
    const lb = this.constructor._lbEl;
    if (!lb) return;
    const img = lb.querySelector(".wcpg-lb-img");
    const sc = lb._inst._lbScale || 1;
    const px = lb._lbPanX || 0;
    const py = lb._lbPanY || 0;
    const rot = lb._inst._lbRotation || 0;
    const fH = lb._inst._lbFlipH || false;
    const fV = lb._inst._lbFlipV || false;
    const scX = sc * (fH ? -1 : 1);
    const scY = sc * (fV ? -1 : 1);
    img.style.transition = "transform 0.18s ease";
    img.style.transform = `scale(${scX}, ${scY}) rotate(${rot}deg) translate(${px / sc}px, ${py / sc}px)`;
    const wrap = lb.querySelector(".wcpg-lb-media-wrap");
    wrap.style.cursor = sc > 1 || lb._inst?.opts?.lightboxSwipe ? "grab" : "";
  },
  _lbSyncToolbar() {
    const lb = this.constructor._lbEl;
    if (!lb) return;
    const inst = lb._inst || this;
    const opts = inst.opts;
    const sc = inst._lbScale || 1;
    const reset = lb.querySelector(".wcpg-lb-zoom-reset");
    const zin = lb.querySelector(".wcpg-lb-zoom-in");
    const zout = lb.querySelector(".wcpg-lb-zoom-out");
    const autoplayBtn = lb.querySelector(".wcpg-lb-autoplay");
    const fsBtn = lb.querySelector(".wcpg-lb-fullscreen");

    // Detect current media type from live DOM state
    const lbVid = lb.querySelector(".wcpg-lb-video");
    const lbIframe = lb.querySelector(".wcpg-lb-iframe");
    const isVid = lbVid && lbVid.style.display !== "none";
    const isEmbed = lbIframe && lbIframe.style.display !== "none";
    const isMedia = isVid || isEmbed;

    // Zoom buttons: hidden when lightboxZoomIn is off, or for video/embed
    const showZoom = opts.lightboxZoomIn !== false;
    [zin, zout, reset].forEach(b => {
      if (!b) return;
      if (!showZoom || isMedia) {
        b.style.display = "none";
        b.style.opacity = "";
      } else {
        b.style.display = "";
        b.style.opacity = "";
      }
    });
    if (showZoom && !isMedia) {
      if (reset) reset.style.display = sc > 1 ? "" : "none";
      if (zout) zout.classList.toggle("wcpg-tool-disabled", sc <= 1);
      if (zin) zin.classList.toggle("wcpg-tool-disabled", sc >= 5);
    }

    // Autoplay button — hidden when single-image mode is on (nothing to cycle through)
    if (autoplayBtn) autoplayBtn.style.display = opts.lightboxShowAutoplayButton !== false && !opts.lightboxSingleImage ? "" : "none";

    // Fullscreen button
    if (fsBtn) fsBtn.style.display = opts.lightboxFullscreen !== false ? "" : "none";

    // Share button
    const shareWrap = lb.querySelector(".wcpg-lb-share-wrap");
    if (shareWrap) {
      shareWrap.style.display = opts.lightboxShare ? "" : "none";
      if (opts.lightboxShare) {
        const _fbBtn = lb.querySelector(".wcpg-lb-share-fb");
        const _twBtn = lb.querySelector(".wcpg-lb-share-tw");
        const _piBtn = lb.querySelector(".wcpg-lb-share-pi");
        const _dlBtn = lb.querySelector(".wcpg-lb-share-dl");
        if (_fbBtn) _fbBtn.style.display = opts.lightboxShareFacebook !== false ? "" : "none";
        if (_twBtn) _twBtn.style.display = opts.lightboxShareTwitter !== false ? "" : "none";
        if (_piBtn) _piBtn.style.display = opts.lightboxSharePinterest !== false ? "" : "none";
        if (_dlBtn) {
          // Hide for embeds (YouTube/Vimeo); show for images and hosted videos
          const _dlHide = isEmbed || opts.lightboxShareDownload === false;
          _dlBtn.style.display = _dlHide ? "none" : "";
          if (!_dlHide) {
            const _dlLabel = _dlBtn.querySelector(".wcpg-dl-label");
            if (_dlLabel) _dlLabel.textContent = isVid ? "Download video" : "Download image";
          }
        }
      }
    }

    // Image transformation tools (center toolbar)
    const imageTools = lb.querySelector(".wcpg-lb-image-tools");
    if (imageTools) {
      const showImageTools = opts.lightboxImageTools !== false;
      imageTools.style.display = !showImageTools || isMedia ? "none" : "";
      if (showImageTools && !isMedia) {
        const fhBtn = lb.querySelector(".wcpg-lb-flip-h");
        const fvBtn = lb.querySelector(".wcpg-lb-flip-v");
        const z1Btn = lb.querySelector(".wcpg-lb-zoom-1to1");
        if (fhBtn) fhBtn.classList.toggle("wcpg-lb-tool-active", !!inst._lbFlipH);
        if (fvBtn) fvBtn.classList.toggle("wcpg-lb-tool-active", !!inst._lbFlipV);
        if (z1Btn) z1Btn.classList.toggle("wcpg-lb-tool-active", (inst._lbScale || 1) > 1.05);
      }
    }
  },
  // ── Image transformation actions ─────────────────────────────────────────

  _lbResetAllTransforms() {
    const lb = this.constructor._lbEl;
    if (!lb) return;
    lb._inst = lb._inst || this;
    const inst = lb._inst;
    inst._lbScale = 1;
    lb._lbPanX = 0;
    lb._lbPanY = 0;
    inst._lbRotation = 0;
    inst._lbFlipH = false;
    inst._lbFlipV = false;
    const img = lb.querySelector(".wcpg-lb-img");
    if (img) {
      img.style.transition = "";
      img.style.transform = "";
    }
    const wrap = lb.querySelector(".wcpg-lb-media-wrap");
    if (wrap) wrap.style.cursor = inst.opts?.lightboxSwipe ? "grab" : "";
    inst._lbSyncToolbar();
  },
  _lbRotateImage(deg) {
    this._lbRotation = ((this._lbRotation || 0) + deg + 360) % 360;
    this._lbApplyImageTransform();
    this._lbSyncToolbar();
  },
  _lbFlipImage(axis) {
    if (axis === "h") this._lbFlipH = !this._lbFlipH;else this._lbFlipV = !this._lbFlipV;
    this._lbApplyImageTransform();
    this._lbSyncToolbar();
  },
  _lbToggle1to1() {
    const lb = this.constructor._lbEl;
    if (!lb) return;
    const img = lb.querySelector(".wcpg-lb-img");
    const wrap = lb.querySelector(".wcpg-lb-media-wrap");
    if (!img || !img.naturalWidth || !img.naturalHeight || !wrap) return;

    // Calculate the zoom level that makes the image fill the wrap area edge-to-edge
    // (cover mode): the constraining axis at scale=1 determines the fill multiplier.
    const imgAR = img.naturalWidth / img.naturalHeight;
    const wrapAR = wrap.offsetWidth / wrap.offsetHeight;
    const fillScale = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(imgAR > wrapAR ? wrap.offsetHeight / (wrap.offsetWidth / imgAR) // width-constrained → fill height axis
    : wrap.offsetWidth / (wrap.offsetHeight * imgAR),
    // height-constrained → fill width axis
    1, 5);

    // Toggle: if already at fill scale, return to 1×; otherwise zoom to fill
    if (Math.abs((this._lbScale || 1) - fillScale) < 0.1) {
      this._lbScale = 1;
    } else {
      this._lbScale = fillScale;
    }
    lb._lbPanX = 0;
    lb._lbPanY = 0;
    this._lbApplyImageTransform();
    this._lbSyncToolbar();
  },
  // ── Autoplay ─────────────────────────────────────────────────────────────
  _lbStartAutoplay() {
    const lb = this.constructor._lbEl;
    if (!lb || !this.lbOpen) return;
    const delay = this.opts.lightboxAutoplayDelay || 3500;
    this._lbAutoplayTimer = setInterval(() => {
      if (!lb._inst?.lbOpen) {
        this._lbStopAutoplay();
        return;
      }
      lb._inst._lbGoTo(lb._inst._lbIdx + 1, 1);
    }, delay);
    lb.classList.add("wcpg-lb-autoplaying");
    const btn = lb.querySelector(".wcpg-lb-autoplay");
    if (btn) {
      btn.querySelector(".wcpg-play-icon").style.display = "none";
      btn.querySelector(".wcpg-pause-icon").style.display = "";
      btn.setAttribute("title", "Pause slideshow");
    }
  },
  _lbStopAutoplay() {
    clearInterval(this._lbAutoplayTimer);
    this._lbAutoplayTimer = null;
    const lb = this.constructor._lbEl;
    if (!lb) return;
    lb.classList.remove("wcpg-lb-autoplaying");
    const btn = lb.querySelector(".wcpg-lb-autoplay");
    if (btn) {
      btn.querySelector(".wcpg-play-icon").style.display = "";
      btn.querySelector(".wcpg-pause-icon").style.display = "none";
      btn.setAttribute("title", "Start slideshow");
    }
  },
  _lbToggleAutoplay() {
    if (this._lbAutoplayTimer) this._lbStopAutoplay();else this._lbStartAutoplay();
  },
  // ── Share ────────────────────────────────────────────────────────────────
  // ── Fullscreen ───────────────────────────────────────────────────────────
  _lbToggleFullscreen() {
    const lb = this.constructor._lbEl;
    if (!lb) return;

    // Exit fullscreen if already active
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
      return;
    }

    // For hosted video: fullscreen the <video> element so the browser
    // sizes it to fill the screen using its native controls.
    // For embeds (YouTube/Vimeo): fullscreen the <iframe> — the iframe
    // already carries allowfullscreen so modern browsers permit this,
    // and the player's own controls remain intact inside the frame.
    // For images: fullscreen the whole lightbox overlay as before.
    const lbVid = lb.querySelector(".wcpg-lb-video");
    const lbIframe = lb.querySelector(".wcpg-lb-iframe");
    const isVid = lbVid && lbVid.style.display !== "none";
    const isEmbed = lbIframe && lbIframe.style.display !== "none";
    if (isVid && lbVid.requestFullscreen) {
      lbVid.requestFullscreen().catch(() => {});
    } else if (isEmbed && lbIframe.requestFullscreen) {
      lbIframe.requestFullscreen().catch(() => {});
    } else {
      lb.requestFullscreen().catch(() => {});
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lightboxMethods);

/***/ },

/***/ "./src/frontend/js/wc-product-gallery/thumbnails.js"
/*!**********************************************************!*\
  !*** ./src/frontend/js/wc-product-gallery/thumbnails.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/frontend/js/wc-product-gallery/utils.js");


// Thumbnail slider: drag, scroll, loop-wrap, fade-mask, buttons.

const thumbnailMethods = {
  _bindThumbScroll() {
    const track = this.thumbsTrack;
    if (!track) return;
    this._evThumbScroll = e => {
      if (this._thumbIsGrid()) return;
      const isVert = this._isThumbVert();
      // Use the axis that matches the strip orientation; fall back to the other.
      const delta = isVert ? e.deltaY || e.deltaX : e.deltaX || e.deltaY;
      if (delta === 0) return;
      e.preventDefault();
      // Normalise pixel delta — deltaMode 0 = px, 1 = line (~20px), 2 = page (~300px)
      const px = e.deltaMode === 2 ? delta * 300 : e.deltaMode === 1 ? delta * 20 : delta;
      this._ts.offset += this._isRTL && !isVert ? -px : px;
      this._clampThumbOffset();
    };
    track.addEventListener("wheel", this._evThumbScroll, {
      passive: false
    });
  },
  _bindThumbDrag() {
    const list = this.thumbsList;
    const ts = this._ts;
    // Evaluated on every drag event so stacked-state changes are respected.
    const getPos = e => this._isThumbVert() ? e.touches ? e.touches[0].clientY : e.clientY : e.touches ? e.touches[0].clientX : e.clientX;
    const start = e => {
      ts.dragging = true;
      ts.startPos = getPos(e);
      ts.startOffset = ts.offset;
      list.style.transition = "none";
    };
    const move = e => {
      if (!ts.dragging) return;
      const delta = ts.startPos - getPos(e);
      ts.offset = ts.startOffset + (this._isRTL && !this._isThumbVert() ? -delta : delta);
      this._applyThumbOffset(false);
    };
    const end = () => {
      ts.dragging = false;
      list.style.transition = "";
      this._clampThumbOffset();
    };
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(list, "mousedown", start);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(list, "touchstart", start, {
      passive: true
    });
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(document, "mousemove", move);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(document, "touchmove", move, {
      passive: true
    });
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(document, "mouseup", end);
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].on(document, "touchend", end);
  },
  // Returns the effective per-item size (px) for the current axis + mobile state.
  // Used by all slider scroll/clamp/offset methods to keep JS calculations in sync
  // with the CSS variable that controls the actual rendered item dimension.
  _thumbItemSize() {
    const isVert = this._isThumbVert();
    const w = this._mobileLayoutActive && this.opts.mobileThumbnailWidth > 0 ? this.opts.mobileThumbnailWidth : this.opts.thumbnailWidth;
    let h = this._mobileLayoutActive && this.opts.mobileThumbnailHeight > 0 ? this.opts.mobileThumbnailHeight : this.opts.thumbnailHeight;
    // When aspect ratio is active it overrides height; compute effective height from width.
    const aspect = this.opts.thumbnailAspectRatio;
    if (aspect && aspect !== "auto") {
      const parts = aspect.split("/");
      if (parts.length === 2) {
        h = Math.round(w * (parseFloat(parts[1]) / parseFloat(parts[0])));
      }
    }
    return (isVert ? h : w) + this.opts.thumbnailGap;
  },
  // Returns true when the thumbnail strip is in grid mode.
  // Always false on mobile (slider is always forced on mobile).
  _thumbIsGrid() {
    if (this._mobileLayoutActive) return false;
    return this.opts.thumbnailLayout === "grid";
  },
  // Returns true when thumbs are currently laid out vertically.
  // On mobile, uses mobileThumbnailPosition so left/right strips scroll vertically.
  // On desktop, left/right positions become horizontal when wcpg-stacked is active.
  _isThumbVert() {
    if (this._mobileLayoutActive) {
      return ["left", "right"].includes(this.opts.mobileThumbnailPosition || "bottom");
    }
    return ["left", "right"].includes(this.opts.thumbnailPosition) && !this.wrapper.classList.contains("wcpg-stacked");
  },
  _updateThumbActive(index) {
    this.thumbEls && this.thumbEls.forEach((el, i) => {
      el.classList.toggle("wcpg-thumb-active", i === index);
      el.setAttribute("aria-selected", i === index ? "true" : "false");
    });
    this._updateThumbButtons();
    this._updateMainArrows(index);
  },
  _slideThumb(dir) {
    const isVert = this._isThumbVert();
    const size = this._thumbItemSize();
    const track = isVert ? this.thumbsTrack?.offsetHeight || 0 : this.thumbsTrack?.offsetWidth || 0;
    const listGutter = this.opts.thumbnailActiveBorderWidth + 1;
    const total = size * this.items.length - this.opts.thumbnailGap;
    const standardMax = Math.max(0, total - track + listGutter);
    if (this.opts.thumbnailSlideType === "item" && size > 0) {
      // ── Item mode: snap to item-aligned positions ─────────────────
      // Each click advances the strip by exactly one item. We use
      // index-based movement so the behaviour is consistent regardless
      // of how small standardMax is (e.g. when items nearly fill the
      // track and standardMax < size).
      const visibleItems = Math.max(1, Math.floor(track / size));
      const maxIndex = Math.max(0, this.items.length - visibleItems);
      const itemMax = maxIndex * size;
      const atItemStart = this._ts.offset <= 0;
      const atItemEnd = this._ts.offset >= itemMax;
      const atBoundary = dir < 0 && atItemStart || dir > 0 && atItemEnd;
      if (atBoundary && this.opts.thumbnailLoop && itemMax > 0) {
        this._thumbLoopWrap(dir, itemMax);
        return;
      }
      const currentIndex = Math.round(this._ts.offset / size);
      const newIndex = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(currentIndex + dir, 0, maxIndex);
      this._ts.offset = newIndex * size;
      this._applyThumbOffset(true);
      this._updateThumbButtons();
      this._updateFadeMask();
      return;
    }

    // ── Row mode: slide by a full visible page ────────────────────────
    const max = standardMax;
    // Check whether we are at the boundary in the direction of travel
    const atStart = this._ts.offset <= 0;
    const atEnd = this._ts.offset >= max;
    const atBoundary = dir < 0 && atStart || dir > 0 && atEnd;
    if (atBoundary && this.opts.thumbnailLoop && max > 0) {
      // Wrap-around: infinite-loop clone technique
      this._thumbLoopWrap(dir, max);
      return;
    }
    const visibleCount = size > 0 ? track / size : this.opts.thumbnailVisible;
    const step = Math.max(1, Math.floor(visibleCount));
    this._ts.offset += dir * size * step;
    this._clampThumbOffset();
  },
  _thumbLoopWrap(dir, max) {
    if (!this.thumbsList || this._ts.loopAnimating || this._ts.scrollWrapAnimating) return;
    this._ts.loopAnimating = true;
    const isVert = this._isThumbVert();
    const list = this.thumbsList;
    const itemSize = this._thumbItemSize();
    const trackSize = isVert ? this.thumbsTrack?.offsetHeight || 0 : this.thumbsTrack?.offsetWidth || 0;
    const visible = itemSize > 0 ? trackSize / itemSize : this.opts.thumbnailVisible || 5;
    const step = this.opts.thumbnailSlideType === "item" ? 1 : Math.max(1, Math.floor(visible));
    const cloneCount = Math.min(step, this.items.length);
    const slideSize = itemSize * cloneCount;
    const ANIM_DUR = 320; // matches _applyThumbOffset CSS transition

    const cleanup = newOffset => {
      list.querySelectorAll(".wcpg-thumb-clone").forEach(c => c.remove());
      this._ts.offset = newOffset;
      this._applyThumbOffset(false);
      this._ts.loopAnimating = false;
      this._updateThumbButtons();
      this._updateFadeMask();
    };
    const makeClone = el => {
      const cl = el.cloneNode(true);
      cl.classList.add("wcpg-thumb-clone");
      cl.setAttribute("aria-hidden", "true");
      cl.style.pointerEvents = "none";
      return cl;
    };
    if (dir > 0) {
      // ── Forward wrap (end → start) ───────────────────────────────
      // Append clones of the first items so the list appears to continue rightward.
      for (let i = 0; i < cloneCount; i++) {
        list.appendChild(makeClone(this.thumbEls[i % this.items.length]));
      }
      // Animate immediately — same timing as a regular slide.
      // The transform departs from the already-committed translateX(-max) value,
      // so no rAF is needed here (unlike the backward case).
      this._ts.offset += slideSize;
      this._applyThumbOffset(true);
      setTimeout(() => cleanup(0), ANIM_DUR + 20);
    } else {
      // ── Backward wrap (start → end) ──────────────────────────────
      // Prepend clones of the last items so the list appears to continue leftward.
      // Insert in reverse order so the DOM order stays [last-N … last, item0, …].
      for (let i = cloneCount - 1; i >= 0; i--) {
        list.insertBefore(makeClone(this.thumbEls[this.items.length - cloneCount + i]), list.firstChild);
      }
      // Instantly reposition so the visible content is unchanged after prepend.
      this._ts.offset = slideSize;
      this._applyThumbOffset(false);
      // Next frame: animate backward into the prepended clones.
      requestAnimationFrame(() => {
        this._ts.offset = 0;
        this._applyThumbOffset(true);
        setTimeout(() => cleanup(max), ANIM_DUR + 20);
      });
    }
  },
  _scrollThumbToIndex(index, dir = 0, isWrap = false) {
    if (this._thumbIsGrid()) return;
    const isVert = this._isThumbVert();
    const size = this._thumbItemSize();
    const track = isVert ? this.thumbsTrack?.offsetHeight || 0 : this.thumbsTrack?.offsetWidth || 0;
    // Center the active item in the track so adjacent partials
    // are visible at both edges (matches the fade-mask design).
    let offset;
    if (!isVert && this._isRTL) {
      const total = size * this.items.length - this.opts.thumbnailGap;
      const rtlItemCenter = total - index * size - size / 2;
      offset = track / 2 - rtlItemCenter;
    } else {
      const itemCenter = index * size + size / 2;
      offset = itemCenter - track / 2;
    }

    // For loop wrap navigation, animate the strip in the same direction as the
    // main image so it feels like a continuous infinite loop instead of rewinding.
    const listGutter = this.opts.thumbnailActiveBorderWidth + 1;
    const total = size * this.items.length - this.opts.thumbnailGap;
    const max = Math.max(0, total - track + listGutter);
    if (isWrap && dir !== 0 && this.opts.thumbnailLoop && max > 0 && this.thumbsList && !this._ts.loopAnimating && !this._ts.scrollWrapAnimating) {
      const clampedOff = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(offset, 0, max);
      this._scrollThumbWrapTo(dir, clampedOff);
      this._updateThumbButtons();
      this._updateFadeMask();
      return;
    }
    this._ts.offset = offset;
    this._clampThumbOffset();
  },
  // Animate the thumbnail strip in `dir` direction across the wrap boundary,
  // using a full clone set so the transition looks like an infinite loop.
  _scrollThumbWrapTo(dir, clampedOff) {
    this._ts.scrollWrapAnimating = true;
    const isVert = this._isThumbVert();
    const list = this.thumbsList;
    const size = this._thumbItemSize();
    const N = this.items.length;
    const setSize = N * size; // pixel span of one full item set (including inter-item gaps)
    const ANIM = 320; // ms — matches _applyThumbOffset CSS transition

    const cleanup = () => {
      list.querySelectorAll(".wcpg-thumb-clone").forEach(c => c.remove());
      this._ts.offset = clampedOff;
      this._applyThumbOffset(false);
      this._ts.scrollWrapAnimating = false;
      this._updateThumbButtons();
      this._updateFadeMask();
    };
    const makeClone = el => {
      const cl = el.cloneNode(true);
      cl.classList.add("wcpg-thumb-clone");
      cl.setAttribute("aria-hidden", "true");
      cl.style.pointerEvents = "none";
      return cl;
    };
    if (dir > 0) {
      // ── Forward wrap ─────────────────────────────────────────────
      // Append a full copy of all items after the real list.
      // Clone K sits at position setSize + K*size, identical to realK
      // after cleanup — so removing clones produces no visible jump.
      for (let i = 0; i < N; i++) {
        list.appendChild(makeClone(this.thumbEls[i]));
      }
      this._ts.offset = setSize + clampedOff;
      this._applyThumbOffset(true);
      setTimeout(cleanup, ANIM + 20);
    } else {
      // ── Backward wrap ─────────────────────────────────────────────
      // Prepend a full copy of all items before the real list.
      // Clone K sits at position K*size — same as realK will after cleanup.
      for (let i = N - 1; i >= 0; i--) {
        list.insertBefore(makeClone(this.thumbEls[i]), list.firstChild);
      }
      // Instantly shift the offset by setSize so the real items stay at
      // the same visual position (they moved right by setSize in the DOM).
      this._ts.offset += setSize;
      this._applyThumbOffset(false);
      // Next frame: animate backward into the prepended clone set.
      requestAnimationFrame(() => {
        this._ts.offset = clampedOff;
        this._applyThumbOffset(true);
        setTimeout(cleanup, ANIM + 20);
      });
    }
  },
  _clampThumbOffset() {
    if (!this.thumbsList || this._thumbIsGrid()) return;
    const isVert = this._isThumbVert();
    const size = this._thumbItemSize();
    const track = isVert ? this.thumbsTrack?.offsetHeight || 0 : this.thumbsTrack?.offsetWidth || 0;
    // listGutter gives items breathing room from the overflow boundary
    // so the active border ring is never pixel-clipped by the track edge.
    const listGutter = this.opts.thumbnailActiveBorderWidth + 1;
    const total = size * this.items.length - this.opts.thumbnailGap;
    let max = Math.max(0, total - track + listGutter);
    // In item mode the strip can scroll further than standardMax so that
    // each click lands on a clean item-aligned offset.
    if (this.opts.thumbnailSlideType === "item" && size > 0) {
      const visibleItems = Math.max(1, Math.floor(track / size));
      max = Math.max(max, Math.max(0, this.items.length - visibleItems) * size);
    }
    this._ts.offset = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(this._ts.offset, 0, max);
    this._applyThumbOffset(true);
    this._updateThumbButtons();
    this._updateFadeMask();
  },
  _applyThumbOffset(animate) {
    if (!this.thumbsList || this._thumbIsGrid()) return;
    const isVert = this._isThumbVert();
    const v = -this._ts.offset;
    this.thumbsList.style.transition = animate ? "transform 0.32s cubic-bezier(0.25,0.46,0.45,0.94)" : "none";
    this.thumbsList.style.transform = isVert ? `translateY(${v}px)` : this._isRTL ? `translateX(${-v}px)` : `translateX(${v}px)`;
    // Keep fade mask in sync during drag (non-animated calls)
    if (!animate) this._updateFadeMask();
  },
  _updateThumbButtons() {
    const isVert = this._isThumbVert();
    const size = this._thumbItemSize();

    // For vertical sliders without thumbnailFitToImage the wrap auto-sizes to
    // content height, so thumbsTrack.offsetHeight ≈ total items height and max
    // would always be > 0 (just listGutter), incorrectly showing arrows.
    // Use stage height as the effective visual constraint in that case.
    // Exception: stacked-gallery thumb mode — the stage spans the entire page,
    // so use the track's own CSS-constrained height (set via sticky max-height).
    const _useTrackH = this.opts.thumbnailFitToImage || this.opts.stackedNavigationType === "thumbs";
    const track = isVert ? _useTrackH ? this.thumbsTrack?.offsetHeight || 0 : this.stage?.offsetHeight || this.thumbsTrack?.offsetHeight || 0 : this.thumbsTrack?.offsetWidth || 0;
    const listGutter = this.opts.thumbnailActiveBorderWidth + 1;
    const total = size * this.items.length - this.opts.thumbnailGap;
    let max = Math.max(0, total - track + listGutter);
    if (this.opts.thumbnailSlideType === "item" && size > 0) {
      const visibleItems = Math.max(1, Math.floor(track / size));
      max = Math.max(max, Math.max(0, this.items.length - visibleItems) * size);
    }

    // Alignment: activate when all items fit in the track (no scrolling needed).
    // Horizontal: requires !thumbnailFitToImage (fit-to-image fills the full width,
    //   leaving no space for positioning within the track).
    // Vertical: always check regardless of thumbnailFitToImage — items rarely fill
    //   the full stage height, so alignment within it is always meaningful.
    if (this.thumbsWrap && !this._thumbIsGrid()) {
      this.thumbsWrap.classList.toggle("wcpg-align-active", max <= 0 && (isVert || !this.opts.thumbnailFitToImage));
    }

    // Nav arrows: hide completely when there is nothing to scroll in that direction.
    if (!this.thumbPrev || !this.thumbNext || this._thumbIsGrid()) return;
    const loop = this.opts.thumbnailLoop;
    const noScroll = max <= 0;
    this.thumbPrev.classList.toggle("wcpg-btn-hidden", noScroll || !loop && this._ts.offset <= 0);
    this.thumbNext.classList.toggle("wcpg-btn-hidden", noScroll || !loop && this._ts.offset >= max);
  },
  _updateFadeMask() {
    if (!this.thumbsTrack || this._thumbIsGrid()) return;
    const isVert = this._isThumbVert();
    const size = this._thumbItemSize();
    const track = isVert ? this.thumbsTrack.offsetHeight : this.thumbsTrack.offsetWidth;
    const listGutter = this.opts.thumbnailActiveBorderWidth + 1;
    const total = size * this.items.length - this.opts.thumbnailGap;
    let max = Math.max(0, total - track + listGutter);
    if (this.opts.thumbnailSlideType === "item" && size > 0) {
      const visibleItems = Math.max(1, Math.floor(track / size));
      max = Math.max(max, Math.max(0, this.items.length - visibleItems) * size);
    }
    const FADE = "36px";
    const dir = isVert ? "to bottom" : "to right";
    const rtlHoriz = !isVert && this._isRTL;
    const hasLeft = rtlHoriz ? this._ts.offset < max - 2 : this._ts.offset > 2;
    const hasRight = rtlHoriz ? this._ts.offset > 2 : this._ts.offset < max - 2;
    let mask;
    if (hasLeft && hasRight) {
      mask = `linear-gradient(${dir}, transparent 0px, black ${FADE}, black calc(100% - ${FADE}), transparent 100%)`;
    } else if (hasLeft) {
      mask = `linear-gradient(${dir}, transparent 0px, black ${FADE}, black 100%)`;
    } else if (hasRight) {
      mask = `linear-gradient(${dir}, black 0%, black calc(100% - ${FADE}), transparent 100%)`;
    } else {
      mask = "none";
    }
    this.thumbsTrack.style.webkitMaskImage = mask;
    this.thumbsTrack.style.maskImage = mask;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thumbnailMethods);

/***/ },

/***/ "./src/frontend/js/wc-product-gallery/touch.js"
/*!*****************************************************!*\
  !*** ./src/frontend/js/wc-product-gallery/touch.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/frontend/js/wc-product-gallery/utils.js");


// Touch / pinch-zoom / swipe / mobile inner-zoom.

const touchMethods = {
  _touchStart(e) {
    if (this.items[this.index]?.type === "video") return;
    // Skip touch-zoom when a linked video is playing — taps must reach
    // mainVideo so the click-to-play/pause handler can fire.
    if (this.mainWrap && this.mainWrap.classList.contains("wcpg-linked-video-active")) return;
    const zs = this._zs;

    // Show auto-hide overlay controls on touch — mirrors desktop :hover behaviour.
    // Add class to mainWrap (arrows, lb-trigger) and stage (pagination).
    this.mainWrap.classList.add("wcpg-touch-active");
    if (this.stage) this.stage.classList.add("wcpg-touch-active");
    if (this._touchActiveTimer) clearTimeout(this._touchActiveTimer);
    this._touchActiveTimer = setTimeout(() => {
      this.mainWrap.classList.remove("wcpg-touch-active");
      if (this.stage) this.stage.classList.remove("wcpg-touch-active");
    }, 3000);

    // If the touch target is an overlay control (arrow, dot, lb-trigger,
    // linked-video play button), skip all zoom logic and let the element's
    // click event handle it.
    if (e.target.closest(".wcpg-main-arrow, .wcpg-pagination, .wcpg-lb-trigger, .wcpg-linked-video-btn")) return;

    // Cancel any running momentum
    if (zs.momentumRaf) {
      cancelAnimationFrame(zs.momentumRaf);
      zs.momentumRaf = null;
    }
    if (e.touches.length === 2) {
      // End mobile inner zoom if active — switching to pinch
      if (zs.mobileZooming) {
        zs.mobileZooming = false;
        this.mainImg.style.transition = "";
        this.mainImg.style.transformOrigin = "";
        this.mainImg.style.transform = "";
      }
      e.preventDefault();
      zs.pinching = true;
      const t0 = e.touches[0],
        t1 = e.touches[1];
      zs.dist0 = Math.hypot(t0.clientX - t1.clientX, t0.clientY - t1.clientY);
      zs.scale0 = zs.scale;

      // Pinch midpoint → becomes stable transform origin
      const rect = this.mainWrap.getBoundingClientRect();
      zs.originX = (t0.clientX + t1.clientX) / 2 - rect.left - rect.width / 2;
      zs.originY = (t0.clientY + t1.clientY) / 2 - rect.top - rect.height / 2;
    } else if (e.touches.length === 1) {
      const t = e.touches[0];
      const now = Date.now();

      // Double-tap: toggle pinch-zoom in/out
      const dtap = now - zs.lastTapT;
      if (dtap > 0 && dtap < 300) {
        e.preventDefault();
        // End any mobile inner zoom first
        if (zs.mobileZooming) {
          zs.mobileZooming = false;
          this.mainImg.style.transformOrigin = "";
        }
        if (zs.scale > 1) {
          this._touchResetZoom();
        } else {
          const rect = this.mainWrap.getBoundingClientRect();
          const tapX = t.clientX - rect.left - rect.width / 2;
          const tapY = t.clientY - rect.top - rect.height / 2;
          zs.originX = tapX;
          zs.originY = tapY;
          const target = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(2.5, this.opts.touchZoomMin, this.opts.touchZoomMax);
          const [cx, cy] = this._clampPan(tapX * (1 - target), tapY * (1 - target), target);
          zs.scale = target;
          zs.panX = cx;
          zs.panY = cy;
          this.mainImg.style.transition = "transform 0.25s ease";
          this._applyTouchTransform();
          setTimeout(() => {
            this.mainImg.style.transition = "";
          }, 260);
        }
        zs.lastTapT = 0;
        return;
      }
      zs.lastTapT = now;
      if (zs.scale > 1) {
        // Already pinch-zoomed in — pan mode
        zs.panX0 = t.clientX - zs.panX;
        zs.panY0 = t.clientY - zs.panY;
        zs.lastX = t.clientX;
        zs.lastY = t.clientY;
        zs.lastT = now;
        zs.velX = 0;
        zs.velY = 0;
      } else if (this._isMobile) {
        // Mobile inner zoom: image zooms in at touch point and follows finger
        e.preventDefault();
        zs.mobileZooming = true;
        this._suppressClick = false;
        // Swap to full-resolution zoom image for a sharp zoomed view
        const item = this.items[this.index];
        if (item && item.zoomSrc && item.zoomSrc !== this.mainImg.src) {
          this.mainImg.src = item.zoomSrc;
        }
        this._applyMobileInnerZoom(t.clientX, t.clientY);
      }
    }
  },
  _touchMove(e) {
    if (this.items[this.index]?.type === "video") return;
    const zs = this._zs;
    if (e.touches.length === 2 && zs.pinching) {
      e.preventDefault();
      const t0 = e.touches[0],
        t1 = e.touches[1];
      const d = Math.hypot(t0.clientX - t1.clientX, t0.clientY - t1.clientY);
      const newScale = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(zs.scale0 * (d / zs.dist0), this.opts.touchZoomMin, this.opts.touchZoomMax);

      // Adjust pan so the pinch midpoint stays anchored
      const scaleDelta = newScale / zs.scale;
      zs.panX = zs.originX + (zs.panX - zs.originX) * scaleDelta;
      zs.panY = zs.originY + (zs.panY - zs.originY) * scaleDelta;
      zs.scale = newScale;
      const [cx, cy] = this._clampPan(zs.panX, zs.panY, zs.scale);
      zs.panX = cx;
      zs.panY = cy;
      this._applyTouchTransform();
    } else if (e.touches.length === 1) {
      if (zs.mobileZooming) {
        // Mobile inner zoom: follow finger
        e.preventDefault();
        this._suppressClick = true;
        this._applyMobileInnerZoom(e.touches[0].clientX, e.touches[0].clientY);
      } else if (zs.scale > 1) {
        // Pinch-zoom pan with momentum tracking
        e.preventDefault();
        const t = e.touches[0];
        const now = Date.now();
        const dt = Math.max(1, now - zs.lastT);
        const rawX = t.clientX - zs.panX0;
        const rawY = t.clientY - zs.panY0;
        const [cx, cy] = this._clampPan(rawX, rawY, zs.scale);
        zs.velX = (cx - zs.panX) / dt * 16;
        zs.velY = (cy - zs.panY) / dt * 16;
        zs.lastX = t.clientX;
        zs.lastY = t.clientY;
        zs.lastT = now;
        zs.panX = cx;
        zs.panY = cy;
        this._applyTouchTransform();
      }
    }
  },
  _touchEnd(e) {
    const zs = this._zs;
    zs.pinching = false;

    // End mobile inner zoom — animate back to normal
    if (zs.mobileZooming) {
      zs.mobileZooming = false;
      const item = this.items[this.index];
      this.mainImg.style.transition = "transform 0.25s ease";
      this.mainImg.style.transform = "";
      setTimeout(() => {
        this.mainImg.style.transition = "";
        this.mainImg.style.transformOrigin = "";
        // Restore display-resolution image now that zoom is hidden
        if (item && item.src && this.mainImg.src !== item.src) {
          this.mainImg.src = item.src;
        }
        // Suppress the synthetic click that follows touchend
        setTimeout(() => {
          this._suppressClick = false;
        }, 50);
      }, 260);
      return;
    }
    if (zs.scale <= 1.05) {
      this._touchResetZoom();
      return;
    }

    // Momentum: continue sliding and decelerate after fast pan
    const decay = 0.92;
    const step = () => {
      if (Math.abs(zs.velX) < 0.3 && Math.abs(zs.velY) < 0.3) {
        zs.momentumRaf = null;
        return;
      }
      zs.velX *= decay;
      zs.velY *= decay;
      const [cx, cy] = this._clampPan(zs.panX + zs.velX, zs.panY + zs.velY, zs.scale);
      if (cx !== zs.panX + zs.velX) zs.velX = 0;
      if (cy !== zs.panY + zs.velY) zs.velY = 0;
      zs.panX = cx;
      zs.panY = cy;
      this._applyTouchTransform();
      zs.momentumRaf = requestAnimationFrame(step);
    };
    this.mainImg.style.transition = "none";
    zs.momentumRaf = requestAnimationFrame(step);
  },
  _touchResetZoom() {
    const zs = this._zs;
    zs.scale = 1;
    zs.panX = 0;
    zs.panY = 0;
    zs.originX = 0;
    zs.originY = 0;
    this.mainImg.style.transition = "transform 0.28s ease";
    this._applyTouchTransform();
    setTimeout(() => {
      this.mainImg.style.transition = "";
    }, 290);
  },
  // Clamp pan so the scaled image never shows empty space around it.
  _clampPan(panX, panY, scale) {
    const wrap = this.mainWrap;
    const img = this.mainImg;
    const ww = wrap.offsetWidth;
    const wh = wrap.offsetHeight;
    const iw = img.offsetWidth * scale;
    const ih = img.offsetHeight * scale;
    const maxX = Math.max(0, (iw - ww) / 2);
    const maxY = Math.max(0, (ih - wh) / 2);
    return [_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(panX, -maxX, maxX), _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(panY, -maxY, maxY)];
  },
  _applyTouchTransform() {
    const zs = this._zs;
    this.mainImg.style.transform = `translate(${zs.panX}px, ${zs.panY}px) scale(${zs.scale})`;
  },
  // Inner zoom that follows the finger — used on mobile for all zoom types.
  _applyMobileInnerZoom(clientX, clientY) {
    const rect = this.mainWrap.getBoundingClientRect();
    const pctX = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp((clientX - rect.left) / rect.width, 0, 1);
    const pctY = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp((clientY - rect.top) / rect.height, 0, 1);
    const z = this.opts.zoomLevel;
    this.mainImg.style.transition = "none";
    this.mainImg.style.transformOrigin = `${pctX * 100}% ${pctY * 100}%`;
    this.mainImg.style.transform = `scale(${z})`;
  },
  // Keeps _isMobile in sync with the viewport as the browser is resized.
  _initMobileObserver() {
    const mq = window.matchMedia("(max-width: 768px)");
    this._mobileMq = mq;
    this._mobileMqFn = e => {
      const wasMobile = this._isMobile;
      this._isMobile = e.matches;
      // Switched to desktop while mobile inner zoom was active — clean up
      if (wasMobile && !this._isMobile && this._zs.mobileZooming) {
        this._zs.mobileZooming = false;
        this.mainImg.style.transition = "";
        this.mainImg.style.transformOrigin = "";
        this.mainImg.style.transform = "";
        this._suppressClick = false;
      }
      // Update zoom-in cursor for lightboxOpenOnImageClick
      if (this.mainWrap && this.opts.lightbox && this.opts.lightboxOpenOnImageClick) {
        this.mainWrap.style.cursor = this._isMobile ? "" : "zoom-in";
      }
    };
    mq.addEventListener("change", this._mobileMqFn);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (touchMethods);

/***/ },

/***/ "./src/frontend/js/wc-product-gallery/utils.js"
/*!*****************************************************!*\
  !*** ./src/frontend/js/wc-product-gallery/utils.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const utils = {
  extend(target, ...sources) {
    sources.forEach(src => {
      if (src) Object.assign(target, src);
    });
    return target;
  },
  on(el, events, handler, opts) {
    events.split(" ").forEach(ev => el.addEventListener(ev, handler, opts || false));
  },
  off(el, events, handler) {
    events.split(" ").forEach(ev => el.removeEventListener(ev, handler, false));
  },
  css(el, styles) {
    Object.assign(el.style, styles);
  },
  clamp(v, mn, mx) {
    return Math.min(Math.max(v, mn), mx);
  },
  lerp(a, b, t) {
    return a + (b - a) * t;
  },
  el(tag, cls, styles) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (styles) utils.css(e, styles);
    return e;
  },
  uid() {
    return "wcpg-" + Math.random().toString(36).slice(2, 9);
  },
  isTouch() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  },
  loadImage(src) {
    return new Promise(res => {
      const img = new Image();
      img.onload = () => res(img);
      img.onerror = () => res(img);
      img.src = src;
    });
  },
  debounce(fn, ms) {
    let t;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...a), ms);
    };
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils);

/***/ },

/***/ "./src/frontend/js/wc-product-gallery/video.js"
/*!*****************************************************!*\
  !*** ./src/frontend/js/wc-product-gallery/video.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Linked-video playback for the main gallery area and the lightbox.

const videoMethods = {
  /**
   * Play the video linked to the current image item.
   * Uses the existing mainIframe / mainVideo infrastructure so all the
   * existing options (videoEmbedFitContainer, videoHostedAutoplay, etc.)
   * apply automatically.
   */
  _playLinkedVideo() {
    const item = this.items[this.index];
    if (!item || !item.linkedVideoType) return;

    // Snapshot dimensions BEFORE hiding the image — once display:none is
    // applied the container collapses and offsetHeight returns 0, which
    // would lock videoHostedFitContainer to a zero-height box.
    const snapW = this.mainDisplay.offsetWidth;
    const snapH = this.mainDisplay.offsetHeight;

    // Hide image + play button; stop any active zoom session and disable zoom.
    this.mainImg.style.display = "none";
    if (this._linkedVideoBtn) this._linkedVideoBtn.style.display = "none";
    this._zoomLeave();
    this.mainWrap.classList.add("wcpg-no-zoom");
    this.mainWrap.classList.add("wcpg-linked-video-active");
    this.lens.style.visibility = "hidden";
    if (item.linkedVideoType === "youtube" || item.linkedVideoType === "vimeo") {
      if (this.mainIframe) {
        if (this.opts.videoEmbedFitContainer) {
          const cH = snapH || Math.round(snapW * 9 / 16);
          if (!this.mainDisplay.style.height) {
            this.mainDisplay.style.height = cH + "px";
          }
          const videoRatio = 16 / 9;
          const containerRatio = snapW / cH;
          let iW, iH;
          if (containerRatio >= videoRatio) {
            iW = snapW;
            iH = Math.round(snapW / videoRatio);
          } else {
            iH = cH;
            iW = Math.round(cH * videoRatio);
          }
          Object.assign(this.mainIframe.style, {
            position: "absolute",
            top: "50%",
            left: "50%",
            width: iW + "px",
            height: iH + "px",
            transform: "translate(-50%,-50%)",
            aspectRatio: "unset"
          });
        } else {
          this._resetIframeCoverStyles();
        }
        // Append autoplay param so the video starts immediately.
        let embedSrc = item.linkedVideoEmbed || "";
        if (embedSrc && embedSrc.indexOf("autoplay=") === -1) {
          embedSrc += (embedSrc.indexOf("?") === -1 ? "?" : "&") + "autoplay=1";
          if (embedSrc.indexOf("mute=") === -1 && embedSrc.indexOf("muted=") === -1) {
            embedSrc += "&mute=1"; // required by most browsers
          }
        }
        this.mainIframe.src = embedSrc;
        this.mainIframe.style.display = "block";
        this.mainVideo.style.display = "none";
      }
    } else {
      // Hosted / direct URL
      this._resetIframeCoverStyles();
      if (this.mainIframe) {
        this.mainIframe.style.display = "none";
        this.mainIframe.src = "";
      }
      if (this.opts.videoHostedFitContainer) {
        if (!this.mainDisplay.style.height) {
          this.mainDisplay.style.height = snapH + "px";
        }
        this.mainVideo.classList.add("wcpg-fit");
      }
      this.mainVideo.src = item.linkedVideo;
      this.mainVideo.muted = this.opts.videoHostedMuted;
      this.mainVideo.style.display = "block";
      this.mainVideo.load();
      this.mainVideo.play().catch(() => {});
    }
  },
  /**
   * Stop an active linked-video session and restore the main image.
   * Passing silent=true skips the DOM restore (used when _renderItem
   * is about to overwrite everything anyway).
   */
  _stopLinkedVideo(silent = false) {
    if (!this.mainWrap.classList.contains("wcpg-linked-video-active")) return;
    this.mainWrap.classList.remove("wcpg-linked-video-active");
    if (!silent) {
      this.mainVideo.pause();
      this.mainVideo.src = "";
      this.mainVideo.style.display = "none";
      if (this.mainIframe) {
        this.mainIframe.src = "";
        this.mainIframe.style.display = "none";
      }
      this.mainImg.style.display = "";
      const item = this.items[this.index];
      if (this._linkedVideoBtn && item && item.linkedVideoType) {
        this._linkedVideoBtn.style.display = "";
      }
    }
  },
  // ── Lightbox: play linked video attached to the current image ────────────────
  _lbPlayLinkedVideo() {
    const lb = this.constructor._lbEl;
    if (!lb) return;
    const item = this.items[this._lbIdx];
    if (!item || !item.linkedVideoType) return;
    const lbImg = lb.querySelector(".wcpg-lb-img");
    const lbVid = lb.querySelector(".wcpg-lb-video");
    const lbIframe = lb.querySelector(".wcpg-lb-iframe");
    const lbLinkedVideoBtn = lb.querySelector(".wcpg-lb-linked-video-btn");
    lbImg.style.display = "none";
    if (lbLinkedVideoBtn) lbLinkedVideoBtn.style.display = "none";
    this._lbStopAutoplay();
    if (item.linkedVideoType === "youtube" || item.linkedVideoType === "vimeo") {
      if (lbVid) lbVid.style.display = "none";
      if (lbIframe) {
        let embedSrc = item.linkedVideoEmbed || "";
        if (embedSrc && embedSrc.indexOf("autoplay=") === -1) {
          embedSrc += (embedSrc.indexOf("?") === -1 ? "?" : "&") + "autoplay=1";
          if (embedSrc.indexOf("mute=") === -1 && embedSrc.indexOf("muted=") === -1) {
            embedSrc += "&mute=1";
          }
        }
        lbIframe.src = embedSrc;
        lbIframe.style.display = "block";
      }
    } else {
      if (lbIframe) {
        lbIframe.src = "";
        lbIframe.style.display = "none";
      }
      if (lbVid) {
        lbVid.loop = this.opts.videoHostedLoop;
        lbVid.muted = this.opts.videoHostedMuted;
        lbVid.src = item.linkedVideo;
        lbVid.load();
        lbVid.style.display = "block";
        lbVid.play().catch(() => {});
      }
    }
    this._lbSyncToolbar();
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (videoMethods);

/***/ },

/***/ "./src/frontend/js/wc-product-gallery/wc-product-gallery.js"
/*!******************************************************************!*\
  !*** ./src/frontend/js/wc-product-gallery/wc-product-gallery.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaults_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaults.js */ "./src/frontend/js/wc-product-gallery/defaults.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/frontend/js/wc-product-gallery/utils.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ "./src/frontend/js/wc-product-gallery/dom.js");
/* harmony import */ var _gallery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery.js */ "./src/frontend/js/wc-product-gallery/gallery.js");
/* harmony import */ var _thumbnails_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./thumbnails.js */ "./src/frontend/js/wc-product-gallery/thumbnails.js");
/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zoom.js */ "./src/frontend/js/wc-product-gallery/zoom.js");
/* harmony import */ var _touch_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./touch.js */ "./src/frontend/js/wc-product-gallery/touch.js");
/* harmony import */ var _lightbox_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lightbox.js */ "./src/frontend/js/wc-product-gallery/lightbox.js");
/* harmony import */ var _video_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./video.js */ "./src/frontend/js/wc-product-gallery/video.js");
/**
 * WooCommerce Image Zoom
 * A modern, dependency-free image zoom & gallery plugin
 * Version: 2.0.0
 * License: GPL-2.0+
 */










class WPBeanWCProductGallery {
  constructor(wrapper, options) {
    this.id = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].uid();
    this.wrapper = typeof wrapper === "string" ? document.querySelector(wrapper) : wrapper;
    if (!this.wrapper) return;
    this.opts = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].extend({}, _defaults_js__WEBPACK_IMPORTED_MODULE_0__["default"], options || {});
    this.items = [];
    this.index = 0;
    this.isZooming = false;
    this.lbOpen = false;

    // Zoom state
    this._zs = {
      lensX: 0,
      lensY: 0,
      targetX: 0,
      targetY: 0,
      pctX: 0,
      pctY: 0,
      rect: null,
      raf: null,
      scale: 1,
      dist0: 0,
      scale0: 1,
      panX: 0,
      panY: 0,
      panX0: 0,
      panY0: 0,
      originX: 0,
      originY: 0,
      pinching: false,
      mobileZooming: false,
      velX: 0,
      velY: 0,
      lastT: 0,
      lastX: 0,
      lastY: 0,
      momentumRaf: null,
      lastTapT: 0,
      lastTapX: 0,
      lastTapY: 0,
      swipeStartX: 0,
      swipeStartY: 0
    };
    this._isMobile = window.matchMedia("(max-width: 768px)").matches;
    this._suppressClick = false;
    // Thumb slider state
    this._ts = {
      offset: 0,
      dragging: false,
      startPos: 0,
      startOffset: 0
    };
    this._resizeHandler = _utils_js__WEBPACK_IMPORTED_MODULE_1__["default"].debounce(() => this._onResize(), 120);
    this._scrollHandler = () => {
      if (this.opts.zoomType === "window" && this.isZooming) this._positionZoomWindow();
    };
    this._init();
  }
  get _isRTL() {
    return document.documentElement.getAttribute("dir") === "rtl";
  }
}
Object.assign(WPBeanWCProductGallery.prototype, _dom_js__WEBPACK_IMPORTED_MODULE_2__["default"], _gallery_js__WEBPACK_IMPORTED_MODULE_3__["default"], _thumbnails_js__WEBPACK_IMPORTED_MODULE_4__["default"], _zoom_js__WEBPACK_IMPORTED_MODULE_5__["default"], _touch_js__WEBPACK_IMPORTED_MODULE_6__["default"], _lightbox_js__WEBPACK_IMPORTED_MODULE_7__["default"], _video_js__WEBPACK_IMPORTED_MODULE_8__["default"]);
WPBeanWCProductGallery._lbEl = null;

// ─────────────────────────────────────────────
// Static API
// ─────────────────────────────────────────────
WPBeanWCProductGallery.init = function (selector, options) {
  const els = typeof selector === "string" ? Array.from(document.querySelectorAll(selector)) : [selector];
  const out = [];
  els.forEach(el => {
    if (el._wcpg) {
      el._wcpg.reinit(options);
      out.push(el._wcpg);
    } else {
      const i = new WPBeanWCProductGallery(el, options);
      el._wcpg = i;
      out.push(i);
    }
  });
  return out.length === 1 ? out[0] : out;
};
WPBeanWCProductGallery.reinit = function (selector, options) {
  const els = typeof selector === "string" ? Array.from(document.querySelectorAll(selector)) : [selector];
  els.forEach(el => el._wcpg ? el._wcpg.reinit(options) : WPBeanWCProductGallery.init(el, options));
};
WPBeanWCProductGallery.destroy = function (selector) {
  const els = typeof selector === "string" ? Array.from(document.querySelectorAll(selector)) : [selector];
  els.forEach(el => {
    if (el._wcpg) {
      el._wcpg.destroy();
      delete el._wcpg;
    }
  });
};
WPBeanWCProductGallery.autoInit = function () {
  document.querySelectorAll("[data-wcpg]").forEach(el => {
    if (el._wcpg) return;
    let o = {};
    try {
      o = JSON.parse(el.getAttribute("data-wcpg") || "{}");
    } catch (e) {}
    WPBeanWCProductGallery.init(el, o);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WPBeanWCProductGallery);

/***/ },

/***/ "./src/frontend/js/wc-product-gallery/zoom.js"
/*!****************************************************!*\
  !*** ./src/frontend/js/wc-product-gallery/zoom.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/frontend/js/wc-product-gallery/utils.js");


// Desktop zoom: lens, window, and inner zoom types.

const zoomMethods = {
  _getWindowSize() {
    const mode = this.opts.zoomWindowSizeMode || "custom";

    // auto/match both need image or layout data that isn't available before
    // the image finishes loading. Fall back to the user's configured custom
    // dimensions so the window appears at a predictable size immediately.
    if (mode !== "custom" && (!this.mainImg.complete || !this.mainImg.naturalWidth)) {
      return {
        w: this.opts.zoomWindowWidth,
        h: this.opts.zoomWindowHeight
      };
    }
    if (mode === "match") {
      return {
        w: this.mainWrap.offsetWidth,
        h: this.mainWrap.offsetHeight
      };
    }
    if (mode === "auto") {
      const wR = this.mainWrap.getBoundingClientRect();
      const img = this.mainImg;
      const natW = img.naturalWidth || wR.width;
      const natH = img.naturalHeight || wR.height;
      const aspect = natW / natH || 1;
      const pos = this.opts.zoomWindowPosition;
      const ox = this.opts.zoomWindowOffsetX;
      if (pos === "right" || pos === "left") {
        const availW = pos === "right" ? Math.max(window.innerWidth - wR.right - ox - 24, 100) : Math.max(wR.left - ox - 24, 100);
        const h = Math.round(Math.min(wR.height, window.innerHeight * 0.9));
        const w = Math.min(Math.round(h * aspect), availW);
        return {
          w: Math.max(w, 100),
          h: Math.max(h, 100)
        };
      } else {
        const w = Math.round(wR.width);
        const h = Math.min(Math.round(w / aspect), Math.round(window.innerHeight * 0.5));
        return {
          w: Math.max(w, 100),
          h: Math.max(h, 100)
        };
      }
    }
    return {
      w: this.opts.zoomWindowWidth,
      h: this.opts.zoomWindowHeight
    };
  },
  _zoomEnter(e) {
    // On mobile, all zoom types fall back to touch-based inner zoom.
    // Bail here so simulated mouse events (fired by touch browsers after
    // a tap) cannot activate the zoom window or lens, which would set
    // unexpected inline styles on wcpg-zoom-window and break the layout.
    if (this._isMobile) return;
    if (this.mainWrap.classList.contains("wcpg-no-zoom")) return;
    const item = this.items[this.index];
    if (!item || item.type === "video") return;
    this.isZooming = true;
    this.mainWrap.classList.add("wcpg-zooming");
    this.mainDisplay.style.cursor = this.opts.zoomCursor;
    const src = item.zoomSrc || item.src;
    if (this.opts.zoomType === "lens") {
      // Use a clean url() — escape any special chars safely
      this.lens.style.backgroundImage = "url(" + JSON.stringify(src) + ")";
      this.lens.classList.add("wcpg-lens-active");
    }
    if (this.opts.zoomType === "window") {
      // Recalculate size for auto/match modes on every zoom start
      const ws = this._getWindowSize();
      this._cachedWinSize = ws;
      this.zoomWin.style.width = ws.w + "px";
      this.zoomWin.style.height = ws.h + "px";
      this.zoomWin.style.backgroundImage = "url(" + JSON.stringify(src) + ")";
      this.zoomWin.classList.add("wcpg-zoom-win-active");
      this._positionZoomWindow();
      if (this.opts.zoomWindowCursor) {
        this.winCursor.classList.add("wcpg-win-cursor-active");
      }
    }
    if (this.opts.zoomType === "inner") {
      // Swap to the full-resolution source for sharp inner zoom.
      // _preloadAll() already fetched zoomSrc on init so this is a
      // cache hit — no visible loading delay.
      if (src && this.mainImg.src !== src) {
        this.mainImg.src = src;
      }
    }
    this._zoomMove(e);
    // Snap the easing start position to the current target so the lens
    // appears immediately under the cursor — prevents sliding in from a
    // stale/initial position (e.g. after switching anchor stacked items).
    this._zs.lensX = this._zs.targetX;
    this._zs.lensY = this._zs.targetY;
    if (this.opts.zoomEasing && this.opts.zoomType !== "inner") this._startEasingLoop();
    if (this.opts.onZoomStart) this.opts.onZoomStart.call(this);
  },
  _getImageBounds() {
    // Returns the actual rendered image rectangle { left, top, width, height }
    // relative to mainWrap, accounting for object-fit: contain letterboxing.
    const img = this.mainImg;
    const cW = this.mainDisplay.offsetWidth;
    const cH = this.mainDisplay.offsetHeight;
    if (!img.naturalWidth || !img.naturalHeight || this.opts.mainImageFit === "cover") return {
      left: 0,
      top: 0,
      width: cW,
      height: cH
    };
    const scale = Math.min(cW / img.naturalWidth, cH / img.naturalHeight);
    const iW = img.naturalWidth * scale;
    const iH = img.naturalHeight * scale;
    return {
      left: (cW - iW) / 2,
      top: (cH - iH) / 2,
      width: iW,
      height: iH
    };
  },
  _zoomMove(e) {
    if (this._isMobile) return;
    this._lastMouseEvent = e;
    if (!this.isZooming) {
      // The cursor can already be hovering the main image when its
      // mouseenter fires while the image is still loading — _zoomEnter
      // bails out via the wcpg-no-zoom guard in that case, and without
      // this, zoom would stay dead until the mouse actually leaves and
      // re-enters. Retry entry on every subsequent move so zoom starts
      // as soon as the load-gate lifts, without waiting for a fresh
      // mouseenter.
      this._zoomEnter(e);
      return;
    }
    const rect = this.mainWrap.getBoundingClientRect();
    const imgB = this._getImageBounds();
    const hs = this.opts.lensSize / 2;

    // Clamp mouse to actual image area (not the full letterboxed container)
    const mx = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(e.clientX - rect.left, imgB.left, imgB.left + imgB.width);
    const my = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(e.clientY - rect.top, imgB.top, imgB.top + imgB.height);

    // pct relative to image bounds (0-1 across the actual image)
    const pctX = (mx - imgB.left) / imgB.width;
    const pctY = (my - imgB.top) / imgB.height;
    this._zs.targetX = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(mx - hs, imgB.left, imgB.left + imgB.width - this.opts.lensSize);
    this._zs.targetY = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(my - hs, imgB.top, imgB.top + imgB.height - this.opts.lensSize);
    this._zs.pctX = pctX;
    this._zs.pctY = pctY;
    this._zs.rect = rect;
    this._zs.imgB = imgB;

    // When easing is off OR for inner type, apply immediately
    if (!this.opts.zoomEasing || this.opts.zoomType === "inner") {
      this._zs.lensX = this._zs.targetX;
      this._zs.lensY = this._zs.targetY;
      this._applyZoom(pctX, pctY, rect);
    }
  },
  _zoomLeave() {
    if (this._isMobile) return;
    if (!this.mainWrap) return;
    this.isZooming = false;
    this.mainWrap.classList.remove("wcpg-zooming");
    this.mainDisplay.style.cursor = "";
    if (this.lens) this.lens.classList.remove("wcpg-lens-active");
    if (this.zoomWin) this.zoomWin.classList.remove("wcpg-zoom-win-active");
    if (this.winCursor) this.winCursor.classList.remove("wcpg-win-cursor-active");
    if (this.opts.zoomType === "inner") {
      this.mainImg.style.transition = "transform 0.25s ease";
      this.mainImg.style.transform = "";
      const snapIndex = this.index;
      const snapSrc = this.items[snapIndex]?.src;
      setTimeout(() => {
        this.mainImg.style.transition = "";
        // Restore the display-size image only if the user hasn't
        // re-entered zoom or navigated to a different image.
        if (!this.isZooming && this.index === snapIndex && snapSrc) {
          this.mainImg.src = snapSrc;
        }
      }, 260);
    }
    if (this._zs.raf) {
      cancelAnimationFrame(this._zs.raf);
      this._zs.raf = null;
    }
    if (this.opts.onZoomEnd) this.opts.onZoomEnd.call(this);
  },
  _startEasingLoop() {
    if (this._zs.raf) cancelAnimationFrame(this._zs.raf);
    const factor = 1 / _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(this.opts.zoomEasingAmount, 1, 40);
    const ls = this.opts.lensSize;
    const loop = () => {
      if (!this.isZooming) return;
      this._zs.lensX = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].lerp(this._zs.lensX, this._zs.targetX, factor);
      this._zs.lensY = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].lerp(this._zs.lensY, this._zs.targetY, factor);
      if (this._zs.rect) {
        const rect = this._zs.rect;
        const imgB = this._zs.imgB || {
          left: 0,
          top: 0,
          width: rect.width,
          height: rect.height
        };
        // Derive pct from eased lens position relative to image bounds
        const easedPctX = (this._zs.lensX + ls / 2 - imgB.left) / imgB.width;
        const easedPctY = (this._zs.lensY + ls / 2 - imgB.top) / imgB.height;
        this._applyZoom(easedPctX, easedPctY, rect);
      }
      this._zs.raf = requestAnimationFrame(loop);
    };
    this._zs.raf = requestAnimationFrame(loop);
  },
  /**
   * Core zoom calculation.
   *
   * LENS / WINDOW zoom technique:
   *   The element (lens or zoom window) uses `background-image` set to the hi-res src.
   *
   *   background-size is set so that the zoomed image spans:
   *     bgW = displayWidth  × zoomLevel
   *     bgH = displayHeight × zoomLevel
   *
   *   background-position is set so the point under the cursor (pctX, pctY)
   *   is centred inside the viewport (lens or window):
   *     bgX = -(pctX × bgW) + viewportW/2
   *     bgY = -(pctY × bgH) + viewportH/2
   *
   *   This mirrors what the user sees at zoomLevel magnification of the display image,
   *   not the raw pixel dimensions — so it works for mixed-size and small images.
   *
   * INNER zoom: CSS scale transform with transform-origin at cursor.
   */
  _applyZoom(pctX, pctY, rect) {
    const z = this.opts.zoomLevel;
    const ls = this.opts.lensSize;
    const lx = this._zs.lensX;
    const ly = this._zs.lensY;
    // Use actual image bounds so calculations are correct for letterboxed layouts
    const imgB = this._zs.imgB || {
      left: 0,
      top: 0,
      width: rect.width,
      height: rect.height
    };
    if (this.opts.zoomType === "lens") {
      // Move the lens element
      this.lens.style.left = lx + "px";
      this.lens.style.top = ly + "px";

      // Zoomed background spans the actual image at z× scale
      const bgW = imgB.width * z;
      const bgH = imgB.height * z;

      // Offset so the cursor point is centred in the lens aperture
      const bgX = -(pctX * bgW - ls / 2);
      const bgY = -(pctY * bgH - ls / 2);
      this.lens.style.backgroundSize = `${bgW}px ${bgH}px`;
      this.lens.style.backgroundPosition = `${bgX}px ${bgY}px`;
    }
    if (this.opts.zoomType === "window") {
      const ws = this._cachedWinSize || this._getWindowSize();
      const ww = ws.w;
      const wh = ws.h;
      const bgW = imgB.width * z;
      const bgH = imgB.height * z;

      // No real CSS border on the element — the visual border is the ::after
      // inset box-shadow. The full ww×wh area is the background area, so no
      // border-width offset is needed in these calculations.
      const bgX = -(pctX * bgW - ww / 2);
      const bgY = -(pctY * bgH - wh / 2);
      this.zoomWin.style.backgroundSize = `${bgW}px ${bgH}px`;
      this.zoomWin.style.backgroundPosition = `${_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(bgX, -(bgW - ww), 0)}px ${_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(bgY, -(bgH - wh), 0)}px`;
      if (this.opts.zoomWindowCursor) {
        const cursorMode = this.opts.zoomWindowCursorSizeMode || "auto";
        const cw = cursorMode === "custom" ? this.opts.zoomWindowCursorWidth || ww / z : ww / z;
        const ch = cursorMode === "custom" ? this.opts.zoomWindowCursorHeight || wh / z : wh / z;
        // Position cursor relative to actual image bounds
        const mouseX = imgB.left + pctX * imgB.width;
        const mouseY = imgB.top + pctY * imgB.height;
        const cx = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(mouseX - cw / 2, imgB.left, imgB.left + imgB.width - cw);
        const cy = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(mouseY - ch / 2, imgB.top, imgB.top + imgB.height - ch);
        this.winCursor.style.width = cw + "px";
        this.winCursor.style.height = ch + "px";
        this.winCursor.style.left = cx + "px";
        this.winCursor.style.top = cy + "px";
      }
    }
    if (this.opts.zoomType === "inner") {
      this.mainImg.style.transformOrigin = `${pctX * 100}% ${pctY * 100}%`;
      this.mainImg.style.transform = `scale(${z})`;
      this.mainImg.style.transition = "none";
    }
  },
  _positionZoomWindow() {
    // The zoom window is position:fixed on document.body, so coordinates
    // come directly from getBoundingClientRect() (viewport space).
    // No stage-relative arithmetic needed — this also means theme CSS
    // overflow:hidden on the gallery wrapper can never clip the window.
    const pos = this.opts.zoomWindowPosition;
    const wR = this.mainWrap.getBoundingClientRect();
    const ox = this.opts.zoomWindowOffsetX;
    const oy = this.opts.zoomWindowOffsetY;
    const ws = this._cachedWinSize || this._getWindowSize();
    const w = ws.w;
    const h = ws.h;
    let left = 0,
      top = 0;
    if (pos === "right") {
      left = wR.right + ox;
      top = wR.top + oy;
    }
    if (pos === "left") {
      left = wR.left - w - ox;
      top = wR.top + oy;
    }
    if (pos === "top") {
      left = wR.left + ox;
      top = wR.top - h - oy;
    }
    if (pos === "bottom") {
      left = wR.left + ox;
      top = wR.bottom + oy;
    }

    // Clamp to viewport so the window stays visible on full-width layouts
    // (e.g. anchor stacked items that span the entire content width).
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    left = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(left, 0, vw - w);
    top = _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].clamp(top, 0, vh - h);
    this.zoomWin.style.left = left + "px";
    this.zoomWin.style.top = top + "px";
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (zoomMethods);

/***/ },

/***/ "./src/frontend/js/zoom-init.js"
/*!**************************************!*\
  !*** ./src/frontend/js/zoom-init.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wc_product_gallery_wc_product_gallery_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wc-product-gallery/wc-product-gallery.js */ "./src/frontend/js/wc-product-gallery/wc-product-gallery.js");


/**
 * Default zoom options — used as a baseline whenever no saved rule matches
 * the current product, or when a saved rule omits a particular key.
 * Keep in sync with DEFAULT_SETTINGS in constants/defaultSettings.js.
 */
const DEFAULTS = {
  variationImageChange: true,
  variationGallery: true,
  preloadImages: true,
  zoomType: "inner",
  zoomLevel: 2.5,
  lensSize: 130,
  thumbnailPosition: "bottom",
  thumbnailLayout: "slider",
  // Lightbox popup options
  lightboxOnClick: true,
  lightboxOpenOnImageClick: true,
  lightboxCloseOnOverlay: true,
  lightboxLoop: true,
  lightboxKeyboard: true,
  lightboxZoomIn: true,
  lightboxFullscreen: true,
  lightboxAutoplay: false,
  lightboxAutoplayDelay: 3500,
  zoomEasing: true,
  touchZoom: true
};
function _wcpgInit() {
  if (typeof _wc_product_gallery_wc_product_gallery_js__WEBPACK_IMPORTED_MODULE_0__["default"] === "undefined") {
    return;
  }
  const gallery = document.querySelector(".wpbean-product-gallery");
  if (!gallery) return;

  // Read the active zoom config from the data attribute written by
  // class-wc-gallery-loader.php. This approach works regardless of which
  // caching, minification, or script-optimisation plugin is installed:
  // data attributes are plain HTML and are never touched by JS optimisers.
  let savedConfig = {};
  const raw = gallery.dataset.wcpgConfig;
  if (raw) {
    try {
      savedConfig = JSON.parse(raw);
    } catch (e) {
      // Malformed JSON — fall back to defaults silently
    }
  }

  // Saved settings override defaults; any key not in savedConfig keeps its default.
  const options = {
    ...DEFAULTS,
    ...savedConfig
  };
  const wcpgInstance = _wc_product_gallery_wc_product_gallery_js__WEBPACK_IMPORTED_MODULE_0__["default"].init(".wpbean-product-gallery", options);

  // ── WooCommerce variation image change (Passive Bridge) ────────────────
  // Only wire up listeners when the "Variation Image Change" option is enabled.
  if (wcpgInstance && options.variationImageChange) {
    // Track whether the current variation triggered a full gallery swap so
    // the correct reset method is called on reset_data.
    let _isVariationGallery = false;
    const handleVariation = variation => {
      if (!variation || !variation.image || !variation.image.src) return;

      // ── Variation Gallery (multiple images) ───────────────────────
      // If the variation ships a full gallery array (injected by PHP when
      // the variationGallery setting is enabled), replace the entire gallery.
      if (options.variationGallery && Array.isArray(variation.wcpg_variation_gallery) && variation.wcpg_variation_gallery.length > 0) {
        _isVariationGallery = true;
        wcpgInstance.swapVariationGallery(variation.wcpg_variation_gallery);
        return;
      }

      // ── Single variation image swap (original behaviour) ───────────
      _isVariationGallery = false;

      // Skip if the variation has no dedicated image. wcpg_has_image is
      // injected by PHP (false = no image). Treat missing flag + no
      // wcpg_main_src as the same: variation falls back to parent image.
      const hasVariationImage = variation.image.wcpg_has_image === true || !!variation.image.wcpg_main_src;
      if (!hasVariationImage) {
        wcpgInstance.resetVariationImage();
        return;
      }

      // Use the correctly-sized URLs injected by inject_variation_image_sizes()
      // in class-wc-gallery-loader.php (respects mainImageSize / thumbnailImageSize
      // settings). Falls back to WooCommerce's default woocommerce_single size.
      const displaySrc = variation.image.wcpg_main_src || variation.image.src;
      const thumbSrc = variation.image.wcpg_thumb_src || variation.image.src;
      wcpgInstance.swapVariationImage(displaySrc, variation.image.full_src || displaySrc, thumbSrc);
    };
    const handleReset = () => {
      if (_isVariationGallery) {
        wcpgInstance.resetVariationGallery();
        _isVariationGallery = false;
      } else {
        wcpgInstance.resetVariationImage();
      }
    };

    // Use jQuery only if it's available on the window
    if (window.jQuery) {
      window.jQuery(document).on("found_variation", "form.variations_form", (event, variation) => {
        handleVariation(variation);
      });
      window.jQuery(document).on("reset_data", "form.variations_form", () => {
        handleReset();
      });
    } else {
      /**
       * FALLBACK: MutationObserver
       * If jQuery is somehow absent, we watch for the src change on the main image.
       */
      const mainImg = document.querySelector(".wcpg-main-img");
      if (mainImg) {
        const observer = new MutationObserver(mutations => {
          mutations.forEach(mutation => {
            if (mutation.attributeName === "src") {
              wcpgInstance.swapVariationImage(mainImg.src, mainImg.src);
            }
          });
        });
        observer.observe(mainImg, {
          attributes: true
        });
      }
    }
  }
}

// ── Initialisation ──────────────────────────────────────────────────────────
//
// Three-phase strategy to handle page builders (Divi Theme Builder, Elementor, …):
//
// Phase 1 — early attempt:
//   Builders often defer or async-load third-party scripts so DOMContentLoaded
//   has already fired by the time our bundle executes. The readyState check lets
//   us run immediately in that case rather than waiting indefinitely.
//
// Phase 2 — window.load retry:
//   Builders scan their own module containers for known selectors and may
//   re-initialise those elements with their own gallery logic, overwriting our
//   event bindings. A retry at window.load catches galleries that failed to init
//   during Phase 1 (wcpg-wrapper not yet added).
//
// Phase 3 — Divi et_pb_after_init_modules:
//   Divi's frontend JS fires this jQuery event after it finishes initialising
//   all modules. At that point Divi may have destroyed our event bindings even
//   though _buildDOM() already ran (and wcpg-wrapper is present). We force a
//   full reinit unconditionally so our zoom/lightbox/nav listeners are restored.
//   This is safe because reinit() tears down the old instance cleanly first.

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", _wcpgInit);
} else {
  _wcpgInit();
}
window.addEventListener("load", function () {
  const gallery = document.querySelector(".wpbean-product-gallery");
  // Re-init only when the gallery exists but has NOT been successfully
  // initialised yet (wcpg-wrapper is set by _buildDOM on success).
  if (gallery && !gallery.classList.contains("wcpg-wrapper")) {
    _wcpgInit();
  }
});

// ── Divi Theme Builder: post-module-init reinit ─────────────────────────────
// Divi fires et_pb_after_init_modules once its frontend module init completes.
// By that time Divi may have re-scanned the page, found our gallery (or the WC
// gallery wrapper), and run its own initialisation — wiping our event listeners.
// Calling reinit here restores them regardless of wcpg-wrapper presence.
if (window.jQuery) {
  window.jQuery(document).on("et_pb_after_init_modules", function () {
    const gallery = document.querySelector(".wpbean-product-gallery");
    if (!gallery) return;
    if (gallery._wcpg) {
      // Instance exists — reinit to restore destroyed event bindings.
      gallery._wcpg.reinit();
    } else {
      // Not yet initialised at all — run full init.
      _wcpgInit();
    }
  });
}

/***/ },

/***/ "./src/frontend/style.scss"
/*!*********************************!*\
  !*** ./src/frontend/style.scss ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"frontend/assets/build/wpbean-wc-gallery": 0,
/******/ 			"frontend/assets/build/style-wpbean-wc-gallery": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkwpbean_product_gallery_slider_for_woocommerce"] = globalThis["webpackChunkwpbean_product_gallery_slider_for_woocommerce"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["frontend/assets/build/style-wpbean-wc-gallery"], () => (__webpack_require__("./src/frontend/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=wpbean-wc-gallery.js.map