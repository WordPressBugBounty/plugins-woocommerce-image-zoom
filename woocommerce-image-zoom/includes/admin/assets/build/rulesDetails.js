/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/pages/rulesCrud/components/tableElements/ConfirmModal.jsx"
/*!*****************************************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/tableElements/ConfirmModal.jsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfirmModal)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * components/tableElements/ConfirmModal.jsx
 * Simple confirm dialog rendered inline via portal when open.
 */




function ConfirmModal({
  open,
  title,
  description,
  confirmText,
  danger = false,
  onConfirm,
  onCancel
}) {
  if (!open) return null;
  const portal = document.getElementById("wpbean-pgs-settings-app");
  const modal = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4",
    style: {
      background: "rgba(0,0,0,0.4)"
    },
    onClick: onCancel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "bg-white rounded-lg shadow-xl w-full max-w-sm p-6",
      onClick: e => e.stopPropagation(),
      role: "dialog",
      "aria-modal": "true",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h3", {
        className: "text-base font-semibold text-gray-900 mb-2",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
        className: "text-sm text-gray-500 mb-6",
        children: description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex justify-end gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: onCancel,
          className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cancel", "wpbean-product-gallery-slider-for-woocommerce")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: onConfirm,
          className: `px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors ${danger ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}`,
          children: confirmText || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Confirm", "wpbean-product-gallery-slider-for-woocommerce")
        })]
      })]
    })
  });
  return portal ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createPortal)(modal, portal) : modal;
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/PluginSettingsApp.jsx"
/*!************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/PluginSettingsApp.jsx ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PluginSettingsApp)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/ellipsis.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/sparkles.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/arrow-left.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/copy.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/keyboard.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/menu.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/save.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/toggle-left.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./context/SettingsContext */ "./src/admin/pages/rulesDetails/context/SettingsContext.jsx");
/* harmony import */ var _api_settings__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api/settings */ "./src/admin/pages/rulesDetails/api/settings.js");
/* harmony import */ var _hooks_useKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hooks/useKeyboardShortcuts */ "./src/admin/pages/rulesDetails/hooks/useKeyboardShortcuts.js");
/* harmony import */ var _constants_searchIndex__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./constants/searchIndex */ "./src/admin/pages/rulesDetails/constants/searchIndex.js");
/* harmony import */ var _admin_pages_rulesCrud_components_tableElements_ConfirmModal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/admin/pages/rulesCrud/components/tableElements/ConfirmModal */ "./src/admin/pages/rulesCrud/components/tableElements/ConfirmModal.jsx");
/* harmony import */ var _components_SettingsSidebar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/SettingsSidebar */ "./src/admin/pages/rulesDetails/components/SettingsSidebar.jsx");
/* harmony import */ var _components_panels_GeneralPanel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/panels/GeneralPanel */ "./src/admin/pages/rulesDetails/components/panels/GeneralPanel.jsx");
/* harmony import */ var _components_panels_ZoomPanel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/panels/ZoomPanel */ "./src/admin/pages/rulesDetails/components/panels/ZoomPanel.jsx");
/* harmony import */ var _components_panels_ZoomWindowPanel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/panels/ZoomWindowPanel */ "./src/admin/pages/rulesDetails/components/panels/ZoomWindowPanel.jsx");
/* harmony import */ var _components_panels_GalleryPanel__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/panels/GalleryPanel */ "./src/admin/pages/rulesDetails/components/panels/GalleryPanel.jsx");
/* harmony import */ var _components_panels_LightboxPanel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/panels/LightboxPanel */ "./src/admin/pages/rulesDetails/components/panels/LightboxPanel.jsx");
/* harmony import */ var _components_panels_MobilePanel__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/panels/MobilePanel */ "./src/admin/pages/rulesDetails/components/panels/MobilePanel.jsx");
/* harmony import */ var _components_panels_VideoPanel__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/panels/VideoPanel */ "./src/admin/pages/rulesDetails/components/panels/VideoPanel.jsx");
/* harmony import */ var _components_panels_AssignmentsPanel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/panels/AssignmentsPanel */ "./src/admin/pages/rulesDetails/components/panels/AssignmentsPanel.jsx");
/* harmony import */ var _components_panels_QuickStartPanel__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/panels/QuickStartPanel */ "./src/admin/pages/rulesDetails/components/panels/QuickStartPanel.jsx");
/* harmony import */ var _components_SearchPalette__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/SearchPalette */ "./src/admin/pages/rulesDetails/components/SearchPalette.jsx");
/* harmony import */ var _components_ShortcutsModal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/ShortcutsModal */ "./src/admin/pages/rulesDetails/components/ShortcutsModal.jsx");
/* harmony import */ var _components_AiGeneratorModal__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/AiGeneratorModal */ "./src/admin/pages/rulesDetails/components/AiGeneratorModal.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__);






















// ── Tab metadata ──────────────────────────────────────────────────────────────

const TAB_META = {
  general: {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General Settings", "wpbean-product-gallery-slider-for-woocommerce"),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Variation image handling, preloading and spinner.", "wpbean-product-gallery-slider-for-woocommerce")
  },
  zoom: {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom Settings", "wpbean-product-gallery-slider-for-woocommerce"),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom type, magnification level and lens appearance.", "wpbean-product-gallery-slider-for-woocommerce")
  },
  "zoom-window": {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom Window", "wpbean-product-gallery-slider-for-woocommerce"),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Floating window size, position and border style.", "wpbean-product-gallery-slider-for-woocommerce")
  },
  "quick-start": {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Quick Start", "wpbean-product-gallery-slider-for-woocommerce"),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Apply a gallery layout preset to get started in seconds.", "wpbean-product-gallery-slider-for-woocommerce")
  },
  gallery: {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gallery & Thumbnails", "wpbean-product-gallery-slider-for-woocommerce"),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnail layout, main image display and transitions.", "wpbean-product-gallery-slider-for-woocommerce")
  },
  lightbox: {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lightbox", "wpbean-product-gallery-slider-for-woocommerce"),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Full-screen image viewer overlay and controls.", "wpbean-product-gallery-slider-for-woocommerce")
  },
  mobile: {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mobile & Touch", "wpbean-product-gallery-slider-for-woocommerce"),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Touch zoom and swipe gesture behaviour on mobile.", "wpbean-product-gallery-slider-for-woocommerce")
  },
  video: {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Video", "wpbean-product-gallery-slider-for-woocommerce"),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("YouTube, Vimeo and hosted video playback settings.", "wpbean-product-gallery-slider-for-woocommerce")
  },
  assignments: {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Assignments", "wpbean-product-gallery-slider-for-woocommerce"),
    description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Apply this rule to specific products or categories.", "wpbean-product-gallery-slider-for-woocommerce")
  }
};

// ── Panel map — assignments is rendered separately (needs extra props) ─────────
const PANELS = {
  general: _components_panels_GeneralPanel__WEBPACK_IMPORTED_MODULE_21__["default"],
  zoom: _components_panels_ZoomPanel__WEBPACK_IMPORTED_MODULE_22__["default"],
  "zoom-window": _components_panels_ZoomWindowPanel__WEBPACK_IMPORTED_MODULE_23__["default"],
  "quick-start": _components_panels_QuickStartPanel__WEBPACK_IMPORTED_MODULE_29__["default"],
  gallery: _components_panels_GalleryPanel__WEBPACK_IMPORTED_MODULE_24__["default"],
  lightbox: _components_panels_LightboxPanel__WEBPACK_IMPORTED_MODULE_25__["default"],
  mobile: _components_panels_MobilePanel__WEBPACK_IMPORTED_MODULE_26__["default"],
  video: _components_panels_VideoPanel__WEBPACK_IMPORTED_MODULE_27__["default"]
};

// ── Status dot with tooltip ───────────────────────────────────────────────────
function StatusDot({
  status
}) {
  const isPublished = status === "publish";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
    className: "relative group flex items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("span", {
      className: `block h-2.5 w-2.5 rounded-full ring-2 ${isPublished ? "bg-emerald-400 ring-emerald-100" : "bg-amber-400 ring-amber-100"}`
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
      className: "pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-sm transition-opacity group-hover:opacity-100",
      children: [isPublished ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Published", "wpbean-product-gallery-slider-for-woocommerce") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Draft", "wpbean-product-gallery-slider-for-woocommerce"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("div", {
        className: "absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-gray-800"
      })]
    })]
  });
}

// ── Per-rule action menu (Duplicate · Toggle status · Move to Trash) ──────────
function DetailsActionMenu({
  id,
  status,
  title,
  onToggleStatus,
  onDuplicate,
  onTrash
}) {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [position, setPosition] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    top: 0,
    right: 0,
    left: undefined
  });
  const [confirmTrash, setConfirmTrash] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [confirmDupe, setConfirmDupe] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const buttonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const calcPosition = () => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const isRTL = document.documentElement.getAttribute("dir") === "rtl";
    setPosition({
      top: rect.bottom + 4,
      right: isRTL ? undefined : window.innerWidth - rect.right,
      left: isRTL ? rect.left : undefined
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isOpen) requestAnimationFrame(calcPosition);
  }, [isOpen]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!isOpen) return;
    window.addEventListener("resize", calcPosition);
    window.addEventListener("scroll", calcPosition, true);
    return () => {
      window.removeEventListener("resize", calcPosition);
      window.removeEventListener("scroll", calcPosition, true);
    };
  }, [isOpen]);
  const close = () => setIsOpen(false);
  const isNew = id <= 0;
  const isPublished = status === "publish";
  const portalTarget = document.getElementById("wpbean-pgs-setting-rule-app");
  const dropdown = isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("div", {
      className: "fixed inset-0 z-10",
      onClick: close
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
      className: "fixed z-20 w-52 overflow-hidden rounded-lg border border-gray-200 bg-white py-1 shadow-lg",
      style: {
        top: `${position.top}px`,
        ...(position.left !== undefined ? {
          left: `${position.left}px`
        } : {
          right: `${position.right}px`
        })
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("button", {
        onClick: () => {
          close();
          setConfirmDupe(true);
        },
        disabled: isNew,
        className: "flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: "me-3 h-4 w-4 flex-shrink-0"
        }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duplicate", "wpbean-product-gallery-slider-for-woocommerce")]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("button", {
        onClick: () => {
          close();
          onToggleStatus();
        },
        disabled: isNew,
        className: "flex w-full items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"], {
          className: "me-3 h-4 w-4 flex-shrink-0"
        }), isPublished ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Set to Draft", "wpbean-product-gallery-slider-for-woocommerce") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Publish", "wpbean-product-gallery-slider-for-woocommerce")]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("hr", {
        className: "my-1 border-gray-100"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("button", {
        onClick: () => {
          close();
          setConfirmTrash(true);
        },
        disabled: isNew,
        className: "flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"], {
          className: "me-3 h-4 w-4 flex-shrink-0"
        }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move to Trash", "wpbean-product-gallery-slider-for-woocommerce")]
      })]
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("button", {
      ref: buttonRef,
      onClick: () => setIsOpen(o => !o),
      className: "flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600",
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("More actions", "wpbean-product-gallery-slider-for-woocommerce"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "h-4 w-4"
      })
    }), isOpen && portalTarget && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createPortal)(dropdown, portalTarget), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_admin_pages_rulesCrud_components_tableElements_ConfirmModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
      open: confirmTrash,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move to Trash?", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('"%s" will be moved to the trash.', "wpbean-product-gallery-slider-for-woocommerce"), title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("This rule", "wpbean-product-gallery-slider-for-woocommerce")),
      confirmText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move to Trash", "wpbean-product-gallery-slider-for-woocommerce"),
      danger: true,
      onConfirm: () => {
        setConfirmTrash(false);
        onTrash();
      },
      onCancel: () => setConfirmTrash(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_admin_pages_rulesCrud_components_tableElements_ConfirmModal__WEBPACK_IMPORTED_MODULE_19__["default"], {
      open: confirmDupe,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duplicate rule?", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A copy of "%s" will be created as a draft.', "wpbean-product-gallery-slider-for-woocommerce"), title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("this rule", "wpbean-product-gallery-slider-for-woocommerce")),
      confirmText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duplicate", "wpbean-product-gallery-slider-for-woocommerce"),
      onConfirm: () => {
        setConfirmDupe(false);
        onDuplicate();
      },
      onCancel: () => setConfirmDupe(false)
    })]
  });
}

// ── Inner app (needs context) ─────────────────────────────────────────────────
function AppInner({
  id
}) {
  const {
    state,
    actions
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_15__.useSettings)();
  const {
    activeTab,
    settings,
    title,
    saving,
    saved,
    error,
    isDirty,
    loaded
  } = state;
  const {
    shortcuts,
    update: updateShortcut,
    reset: resetShortcuts
  } = (0,_hooks_useKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_17__.useKeyboardShortcuts)();
  const [searchOpen, setSearchOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [shortcutsOpen, setShortcutsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [sidebarOpen, setSidebarOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [aiOpen, setAiOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const meta = TAB_META[activeTab] || TAB_META.general;
  const Panel = PANELS[activeTab] || null;
  const isAssignmentsTab = activeTab === "assignments";

  // Mirrors TopBar.jsx's liveid ref: tracks the real DB id across saves.
  // Starts as 0 when no ?id= param; updated after the first POST creates the row.
  const liveid = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(id);

  // Ref exposed to AssignmentsPanel — called with the final id at save time.
  const assignmentsSaveRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  // Tracks whether assignments have unsaved changes (separate from settings isDirty).
  const [assignmentsDirty, setAssignmentsDirty] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const handleAssignmentsDirty = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setAssignmentsDirty(true), []);
  const handleAssignmentsClean = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => setAssignmentsDirty(false), []);
  const effectiveDirty = isDirty || assignmentsDirty;

  // Tracks current rule status (publish / draft) for the header indicator and actions menu.
  const [status, setStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("draft");

  // Back URL — rulesCrud listing page.
  const backUrl = (() => {
    const url = new URL(window.location.href);
    url.searchParams.set("page", "wpbean-product-gallery-rules");
    url.searchParams.delete("id");
    return url.toString();
  })();

  // GET /settings/:id — load title + config (skip when id === 0, new item)
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (liveid.current > 0) {
      (0,_api_settings__WEBPACK_IMPORTED_MODULE_16__.getSettings)(liveid.current).then(data => {
        actions.load(data?.config || {}, data?.title || "");
        setStatus(data?.status || "draft");
      }).catch(() => actions.load({}, ""));
    } else {
      // New item — mark as loaded so the UI renders with defaults
      actions.load({}, "");
    }
  }, [id]);

  // Mirrors TopBar.jsx handleSave:
  //   id === 0 → POST (createSettings) then patch URL with the new id
  //   id  > 0 → PUT (updateSettings)
  // After the settings row is saved, call assignmentsSaveRef with the final id
  // so assignments are always written to the correct row.
  const handleSave = async () => {
    if (saving) return;
    actions.setSaving();
    const payload = {
      title,
      status: "publish",
      config: settings
    };
    try {
      if (liveid.current > 0) {
        await (0,_api_settings__WEBPACK_IMPORTED_MODULE_16__.updateSettings)(liveid.current, payload);
      } else {
        const {
          id: newId
        } = await (0,_api_settings__WEBPACK_IMPORTED_MODULE_16__.createSettings)(payload);
        liveid.current = Number(newId);
        // Patch URL so refreshes and subsequent saves use the new id
        const url = new URL(window.location.href);
        url.searchParams.set("id", newId);
        window.history.replaceState({}, "", url.toString());
      }
      // Save assignments atomically after the settings row exists
      if (assignmentsSaveRef.current) {
        await assignmentsSaveRef.current(liveid.current);
      }
      actions.setSaved();
      setStatus("publish");
      setTimeout(() => actions.clearSaved(), 3000);
    } catch (e) {
      actions.setError(e?.message || "Failed to save settings. Please try again.");
    }
  };

  // ── Header action handlers ────────────────────────────────────────────────

  const handleToggleStatus = async () => {
    if (liveid.current <= 0) return;
    const newStatus = status === "publish" ? "draft" : "publish";
    try {
      await (0,_api_settings__WEBPACK_IMPORTED_MODULE_16__.patchSettings)(liveid.current, {
        status: newStatus
      });
      setStatus(newStatus);
    } catch (e) {
      actions.setError("Failed to update status.");
    }
  };
  const handleDuplicate = async () => {
    if (liveid.current <= 0) return;
    try {
      const {
        id: newId
      } = await (0,_api_settings__WEBPACK_IMPORTED_MODULE_16__.duplicateSettings)(liveid.current);
      const url = new URL(window.location.href);
      url.searchParams.set("id", newId);
      window.location.href = url.toString();
    } catch (e) {
      actions.setError("Failed to duplicate rule.");
    }
  };
  const handleTrash = async () => {
    if (liveid.current <= 0) return;
    try {
      await (0,_api_settings__WEBPACK_IMPORTED_MODULE_16__.trashSettings)(liveid.current);
      window.location.href = backUrl;
    } catch (e) {
      actions.setError("Failed to move rule to trash.");
    }
  };

  // Keep a ref to handleSave so the keyboard listener always calls the latest version
  const handleSaveRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(handleSave);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    handleSaveRef.current = handleSave;
  });

  // Global keyboard shortcuts
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handler = e => {
      // Let bare key presses in text fields pass through; only intercept modifier combos
      const inInput = e.target.matches("input, textarea, select, [contenteditable]");
      if (inInput && !e.ctrlKey && !e.metaKey && !e.altKey) return;
      if ((0,_hooks_useKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_17__.matchesShortcut)(e, shortcuts.save)) {
        e.preventDefault();
        handleSaveRef.current();
      } else if ((0,_hooks_useKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_17__.matchesShortcut)(e, shortcuts.undo)) {
        e.preventDefault();
        actions.undo();
      } else if ((0,_hooks_useKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_17__.matchesShortcut)(e, shortcuts.redo)) {
        e.preventDefault();
        actions.redo();
      } else if ((0,_hooks_useKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_17__.matchesShortcut)(e, shortcuts.search)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [shortcuts, actions]);

  // Navigate to a search result: switch tab → wait for render → scroll + highlight
  const handleNavigate = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(item => {
    actions.setTab(item.tab);
    setTimeout(() => {
      const el = document.getElementById((0,_constants_searchIndex__WEBPACK_IMPORTED_MODULE_18__.sectionId)(item.section));
      if (!el) return;
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
      el.classList.add("wcpg-search-hit");
      setTimeout(() => el.classList.remove("wcpg-search-hit"), 1800);
    }, 80);
  }, [actions]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
    className: "flex bg-[#f0f2f5] font-sans antialiased",
    children: [sidebarOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("div", {
      className: "fixed inset-0 z-40 bg-black/50 wp:hidden",
      onClick: () => setSidebarOpen(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_components_SettingsSidebar__WEBPACK_IMPORTED_MODULE_20__["default"], {
      isOpen: sidebarOpen,
      onClose: () => setSidebarOpen(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
      className: "flex min-w-0 flex-1 flex-col",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("header", {
        className: "sticky top-0 wpsm:top-[var(--wp-admin--admin-bar--height,32px)] z-10 flex h-[68px] shrink-0 items-center justify-between border-b border-gray-200/80 bg-white px-3 wp:px-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
          className: "flex min-w-0 items-center gap-2 wp:gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("button", {
            type: "button",
            onClick: () => setSidebarOpen(true),
            className: "flex wp:hidden h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600",
            "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open navigation", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
              className: "h-4 w-4"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("a", {
            href: backUrl,
            className: "flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-gray-400 no-underline transition-colors hover:bg-gray-100 hover:text-gray-600",
            "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back to all rules", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
              className: "h-4 w-4 rtl:rotate-180"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
            className: "flex min-w-0 flex-col justify-center gap-0.5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("h1", {
              className: "text-[15px] font-semibold leading-tight text-gray-900",
              children: meta.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("p", {
              className: "hidden wp:block text-[11px] leading-tight text-gray-400",
              children: meta.description
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
          className: "flex shrink-0 items-center gap-1.5 wp:gap-2.5",
          children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
            className: "hidden wp:flex items-center gap-1.5 rounded-md bg-red-50 px-2.5 py-1.5 text-xs font-medium text-red-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              className: "h-3.5 w-3.5 shrink-0"
            }), error]
          }), saved && !saving && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
            className: "hidden wp:flex items-center gap-1.5 text-xs font-medium text-emerald-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: "h-3.5 w-3.5",
              strokeWidth: 2.5
            }), "Saved"]
          }), loaded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("div", {
            className: "hidden wp:flex items-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(StatusDot, {
              status: status
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("input", {
            type: "text",
            value: title,
            onChange: e => actions.setTitle(e.target.value),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Settings name…", "wpbean-product-gallery-slider-for-woocommerce"),
            className: ["hidden wp:block h-8 w-44 rounded-lg border border-gray-200 bg-gray-50 px-3", "text-xs font-medium text-gray-800 placeholder:text-gray-400", "transition-colors duration-150", "focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500/20", "hover:border-gray-300"].join(" ")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("button", {
            type: "button",
            onClick: () => setSearchOpen(true),
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Search settings (Ctrl+K)", "wpbean-product-gallery-slider-for-woocommerce"),
            className: "hidden wp:flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"], {
              className: "h-4 w-4"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("button", {
            type: "button",
            onClick: () => setShortcutsOpen(true),
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Keyboard shortcuts", "wpbean-product-gallery-slider-for-woocommerce"),
            className: "hidden wp:flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: "h-4 w-4"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("button", {
            type: "button",
            onClick: () => setAiOpen(true),
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Generate settings with AI", "wpbean-product-gallery-slider-for-woocommerce"),
            className: "hidden wp:inline-flex h-8 items-center gap-1.5 rounded-lg border border-violet-200 bg-violet-50 px-3 text-xs font-semibold text-violet-700 hover:bg-violet-100 hover:border-violet-300 transition-all",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
              className: "h-3.5 w-3.5"
            }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("AI", "wpbean-product-gallery-slider-for-woocommerce")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("button", {
            type: "button",
            onClick: handleSave,
            disabled: saving || !effectiveDirty,
            className: ["inline-flex h-8 items-center gap-1.5 rounded-lg px-3 wp:px-3.5 text-xs font-semibold", "transition-all duration-200", "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2", saving || !effectiveDirty ? "cursor-not-allowed bg-gray-100 text-gray-400" : "bg-blue-600 text-white shadow-sm hover:bg-blue-700 active:scale-[0.98] active:bg-blue-800"].join(" "),
            children: saving ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: "h-3.5 w-3.5 animate-spin"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("span", {
                className: "hidden wp:inline",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Saving…", "wpbean-product-gallery-slider-for-woocommerce")
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: "h-3.5 w-3.5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("span", {
                className: "hidden wp:inline",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Save Changes", "wpbean-product-gallery-slider-for-woocommerce")
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(DetailsActionMenu, {
            id: liveid.current,
            status: status,
            title: title,
            onToggleStatus: handleToggleStatus,
            onDuplicate: handleDuplicate,
            onTrash: handleTrash
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("main", {
        className: "px-3 py-4 wp:px-7 wp:py-6",
        children: !loaded ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("div", {
          className: "flex h-48 items-center justify-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "h-5 w-5 animate-spin text-gray-300"
          })
        }) : isAssignmentsTab ?
        /*#__PURE__*/
        // Assignments panel is rendered outside the generic Panel map
        // because it needs id + assignmentsSaveRef as props.
        (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_components_panels_AssignmentsPanel__WEBPACK_IMPORTED_MODULE_28__["default"], {
          id: liveid.current,
          assignmentsSaveRef: assignmentsSaveRef,
          onAssignmentsDirty: handleAssignmentsDirty,
          onAssignmentsClean: handleAssignmentsClean
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("div", {
          className: "mx-auto max-w-[680px] pb-10",
          children: Panel && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(Panel, {})
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_components_SearchPalette__WEBPACK_IMPORTED_MODULE_30__["default"], {
      open: searchOpen,
      onClose: () => setSearchOpen(false),
      onNavigate: handleNavigate,
      searchShortcut: shortcuts.search
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_components_ShortcutsModal__WEBPACK_IMPORTED_MODULE_31__["default"], {
      open: shortcutsOpen,
      onClose: () => setShortcutsOpen(false),
      shortcuts: shortcuts,
      onUpdate: updateShortcut,
      onReset: resetShortcuts
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_components_AiGeneratorModal__WEBPACK_IMPORTED_MODULE_32__["default"], {
      open: aiOpen,
      onClose: () => setAiOpen(false),
      onApply: newSettings => {
        actions.applyLayout(newSettings);
      },
      currentSettings: settings,
      mode: "update"
    })]
  });
}

// ── Root export ───────────────────────────────────────────────────────────────
function PluginSettingsApp({
  id
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_context_SettingsContext__WEBPACK_IMPORTED_MODULE_15__.SettingsProvider, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(AppInner, {
      id: id
    })
  });
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/api/ai.js"
/*!************************************************!*\
  !*** ./src/admin/pages/rulesDetails/api/ai.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateSettings: () => (/* binding */ generateSettings),
/* harmony export */   getAiStatus: () => (/* binding */ getAiStatus)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/**
 * api/ai.js
 * REST wrappers for the AI settings-generation endpoint.
 * Namespace: wpbean-pgs/v1/ai
 */


const BASE = "/wpbean-pgs/v1/ai";

/**
 * Check whether an AI provider is configured.
 * Returns { available: bool, reason?: string, connectors_url: string }
 */
const getAiStatus = () => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/status`
});

/**
 * Generate gallery settings from a text prompt and/or a reference image.
 *
 * @param {object} data
 * @param {string} [data.prompt]           Free-text design description.
 * @param {string} [data.image_data]       Base64 data URL (data:image/…;base64,…).
 * @param {object} [data.current_settings] Existing settings for context.
 *
 * @returns {{ title: string, settings: object, reasoning: string }}
 */
const generateSettings = data => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/generate`,
  method: "POST",
  data
});

/***/ },

/***/ "./src/admin/pages/rulesDetails/api/assignments.js"
/*!*********************************************************!*\
  !*** ./src/admin/pages/rulesDetails/api/assignments.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAssignments: () => (/* binding */ getAssignments),
/* harmony export */   getWcCategories: () => (/* binding */ getWcCategories),
/* harmony export */   getWcProductsByIds: () => (/* binding */ getWcProductsByIds),
/* harmony export */   saveAssignments: () => (/* binding */ saveAssignments),
/* harmony export */   searchWcProducts: () => (/* binding */ searchWcProducts)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/**
 * api/assignments.js
 *
 * REST API calls for form assignment settings.
 * Base: /wp-json/wpbean-pgs/v1/settings
 */


const BASE = "/wpbean-pgs/v1/settings";

/**
 * Get current assignments for a form.
 * @param {number} id
 * @returns {Promise<{ categories: number[], products: number[] }>}
 */
const getAssignments = id => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/${id}/assignments`
});

/**
 * Save (full replace) assignments for a settings rule.
 * @param {number}   id
 * @param {string}   applyTo     'all' | 'selected'
 * @param {number[]} categories  WooCommerce product_cat term IDs
 * @param {number[]} products    WP post IDs
 */
const saveAssignments = (id, applyTo, categories, products) => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/${id}/assignments`,
  method: "PUT",
  data: {
    apply_to: applyTo,
    categories,
    products
  }
});

/**
 * Fetch all WooCommerce product categories (flat list with parent refs).
 * @returns {Promise<Array<{ id: number, name: string, parent: number, count: number }>>}
 */
const getWcCategories = () => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/wc/categories`
});

/**
 * Search WooCommerce products by text query.
 * @param {{ search?: string, page?: number, per_page?: number }} params
 * @returns {Promise<{ items: Array<{ id: number, name: string, sku: string }>, total: number }>}
 */
const searchWcProducts = ({
  search = "",
  page = 1,
  per_page = 20
} = {}) => {
  const query = new URLSearchParams({
    page,
    per_page,
    ...(search && {
      search
    })
  }).toString();
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `${BASE}/wc/products?${query}`
  });
};

/**
 * Fetch specific products by their exact post IDs.
 * Used on page load to resolve saved assignment IDs into full {id, name, sku} objects.
 * Returns products in the same order as the IDs array.
 *
 * @param {number[]} ids
 * @returns {Promise<{ items: Array<{ id: number, name: string, sku: string }>, total: number }>}
 */
const getWcProductsByIds = ids => {
  if (!ids?.length) return Promise.resolve({
    items: [],
    total: 0
  });
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `${BASE}/wc/products?ids=${ids.join(",")}`
  });
};

/***/ },

/***/ "./src/admin/pages/rulesDetails/api/settings.js"
/*!******************************************************!*\
  !*** ./src/admin/pages/rulesDetails/api/settings.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSettings: () => (/* binding */ createSettings),
/* harmony export */   duplicateSettings: () => (/* binding */ duplicateSettings),
/* harmony export */   getSettings: () => (/* binding */ getSettings),
/* harmony export */   patchSettings: () => (/* binding */ patchSettings),
/* harmony export */   trashSettings: () => (/* binding */ trashSettings),
/* harmony export */   updateSettings: () => (/* binding */ updateSettings)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/**
 * api/settings.js
 * REST API wrapper for plugin-wide zoom settings.
 * Mirrors the pattern in api/forms.js — all operations are ID-scoped.
 * Endpoint base: /wpbean-pgs/v1/settings
 * Nonce middleware is registered in index.js before any of these are called.
 */


const BASE = "/wpbean-pgs/v1/settings";

/**
 * Load a single settings item by ID.
 * Returns { id, title, status, config: { ... } }
 *
 * @param {string|number} id
 */
const getSettings = id => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/${id}`
});

/**
 * Create a new settings item.
 * Calls POST /settings — same contract as createForm() in forms.js.
 * Returns { id: number }
 *
 * @param {object} data  { title, status, config }
 */
const createSettings = data => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: BASE,
  method: "POST",
  data
});

/**
 * Update an existing settings item by ID.
 * Calls PUT /settings/:id — same contract as updateForm() in forms.js.
 *
 * @param {string|number} id
 * @param {object} data   Partial or full settings payload to persist.
 */
const updateSettings = (id, data) => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/${id}`,
  method: "PUT",
  data
});

/**
 * Partial update — only sends the fields provided.
 * Uses PATCH so PHP only writes the keys present in the request.
 *
 * @param {string|number} id
 * @param {object} data   Fields to update (e.g. { status: "draft" }).
 */
const patchSettings = (id, data) => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/${id}`,
  method: "PATCH",
  data
});

/**
 * Duplicate a settings item by ID.
 * Fetches the original, then creates a new "draft" copy titled "<title> (Copy)".
 * Returns { id: number } of the new item.
 *
 * @param {string|number} id
 */
const duplicateSettings = async id => {
  const item = await getSettings(id);
  return createSettings({
    title: `${item.title} (Copy)`,
    status: "draft",
    config: item.config ?? {}
  });
};

/**
 * Move a settings item to the trash (soft delete — recoverable).
 *
 * @param {string|number} id
 */
const trashSettings = id => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/${id}/trash`,
  method: "POST"
});

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/AiGeneratorModal.jsx"
/*!**********************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/AiGeneratorModal.jsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AiGeneratorModal)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/sparkles.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-right.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/external-link.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/image.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/refresh-cw.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _api_ai__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../api/ai */ "./src/admin/pages/rulesDetails/api/ai.js");
/* harmony import */ var _constants_searchIndex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/searchIndex */ "./src/admin/pages/rulesDetails/constants/searchIndex.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
/**
 * AiGeneratorModal.jsx
 *
 * Shared AI gallery-settings generator.
 * Used in two contexts:
 *
 *   mode="create"  (CrudApp)   — generates settings for a brand-new rule.
 *   mode="update"  (RulesDetails) — suggests changes to the active rule's settings.
 *
 * Props:
 *   open            boolean
 *   onClose         () => void
 *   onApply         (settings: object, title: string) => void
 *   currentSettings object  optional — passed for context in "update" mode
 *   mode            'create' | 'update'
 */







// ── Label lookup ──────────────────────────────────────────────────────────────

const KEY_LABELS = Object.fromEntries(_constants_searchIndex__WEBPACK_IMPORTED_MODULE_12__.SEARCH_INDEX.map(e => [e.key, e.label]));
function getLabel(key) {
  return KEY_LABELS[key] || key.replace(/([A-Z])/g, " $1").trim();
}
function formatValue(value) {
  if (typeof value === "boolean") return value ? "Enabled" : "Disabled";
  if (typeof value === "number") return String(value);
  if (typeof value === "string") {
    return value.replace(/-/g, " ").replace(/([a-z])([A-Z])/g, "$1 $2").split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  }
  return String(value);
}

// ── Sub-components ────────────────────────────────────────────────────────────

function StatusMessage({
  status,
  onClose
}) {
  const opts = window.WPBean_PGS_Options || {};
  const connectorsUrl = opts.connectorsUrl || "#";
  const aiSettingsUrl = opts.aiSettingsUrl || "#";
  const hasWp7 = status?.reason !== "ai_not_supported";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: "flex flex-col items-center justify-center py-10 px-6 text-center gap-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "w-7 h-7 text-amber-500"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h3", {
        className: "text-base font-semibold text-gray-900 mb-1",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("AI provider not configured", "wpbean-product-gallery-slider-for-woocommerce")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "text-sm text-gray-500 max-w-xs",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add an API key for OpenAI, Anthropic Claude, or Google Gemini to start generating gallery settings.", "wpbean-product-gallery-slider-for-woocommerce")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("a", {
      href: aiSettingsUrl,
      className: "inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-violet-600 text-white text-sm font-semibold hover:bg-violet-700 no-underline transition-colors",
      children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add API Key in AI Settings", "wpbean-product-gallery-slider-for-woocommerce"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "w-3.5 h-3.5"
      })]
    }), hasWp7 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("a", {
      href: connectorsUrl,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 no-underline transition-colors",
      children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Or configure in Settings → Connectors", "wpbean-product-gallery-slider-for-woocommerce"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "w-3 h-3"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
      onClick: onClose,
      className: "text-sm text-gray-400 hover:text-gray-600 transition-colors",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Close", "wpbean-product-gallery-slider-for-woocommerce")
    })]
  });
}
function ImageDropZone({
  image,
  onImage,
  onClear
}) {
  const inputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const [dragging, setDragging] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleFile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(file => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = e => onImage(e.target.result);
    reader.readAsDataURL(file);
  }, [onImage]);
  const handleDrop = e => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };
  if (image) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "relative rounded-xl overflow-hidden border border-gray-200",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("img", {
        src: image,
        alt: "Reference",
        className: "w-full h-36 object-cover"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
        type: "button",
        onClick: onClear,
        className: "absolute top-2 right-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-900/60 text-white hover:bg-gray-900/80 transition-colors",
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Remove image", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: "w-3 h-3"
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    onDragOver: e => {
      e.preventDefault();
      setDragging(true);
    },
    onDragLeave: () => setDragging(false),
    onDrop: handleDrop,
    onClick: () => inputRef.current?.click(),
    className: ["flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed py-7 cursor-pointer transition-colors", dragging ? "border-blue-400 bg-blue-50" : "border-gray-200 bg-gray-50 hover:border-gray-300 hover:bg-gray-100"].join(" "),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "flex h-10 w-10 items-center justify-center rounded-full bg-gray-100",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "w-5 h-5 text-gray-400"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "text-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "text-sm font-medium text-gray-700",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Drop a reference image here", "wpbean-product-gallery-slider-for-woocommerce")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "text-xs text-gray-400 mt-0.5",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("or click to browse", "wpbean-product-gallery-slider-for-woocommerce")
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", {
      ref: inputRef,
      type: "file",
      accept: "image/*",
      className: "sr-only",
      onChange: e => handleFile(e.target.files[0])
    })]
  });
}
function SuggestionRow({
  item,
  checked,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("label", {
    className: "flex items-start gap-3 py-2.5 cursor-pointer group",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "mt-0.5 shrink-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", {
        type: "checkbox",
        checked: checked,
        onChange: e => onChange(item.key, e.target.checked),
        className: "sr-only"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: ["flex h-4.5 w-4.5 items-center justify-center rounded border transition-colors", checked ? "border-blue-600 bg-blue-600" : "border-gray-300 bg-white group-hover:border-blue-400"].join(" "),
        style: {
          width: 18,
          height: 18
        },
        children: checked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: "w-2.5 h-2.5 text-white",
          strokeWidth: 3
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "flex-1 min-w-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "text-[13px] font-medium text-gray-800 leading-snug",
        children: getLabel(item.key)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "text-[11.5px] text-gray-400 mt-0.5",
        children: item.from !== undefined ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
            className: "line-through",
            children: formatValue(item.from)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "inline w-3 h-3 mx-1 text-gray-300"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
            className: "text-blue-600 font-medium",
            children: formatValue(item.to)
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
          className: "text-blue-600 font-medium",
          children: formatValue(item.to)
        })
      })]
    })]
  });
}

// ── Main modal ────────────────────────────────────────────────────────────────

function AiGeneratorModal({
  open,
  onClose,
  onApply,
  currentSettings = {},
  mode = "update"
}) {
  const [aiStatus, setAiStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // null = loading, object otherwise
  const [step, setStep] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("input"); // 'input' | 'loading' | 'preview'
  const [prompt, setPrompt] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [image, setImage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // base64 data URL
  const [error, setError] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [aiTitle, setAiTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [aiReasoning, setAiReasoning] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const [suggestions, setSuggestions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // [{key, from, to}]
  const [selected, setSelected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({}); // key → bool

  // Reset when modal opens
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!open) return;
    setStep("input");
    setPrompt("");
    setImage(null);
    setError(null);
    setAiTitle("");
    setAiReasoning("");
    setSuggestions([]);
    setSelected({});
  }, [open]);

  // Fetch AI status once on first open
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!open || aiStatus !== null) return;
    (0,_api_ai__WEBPACK_IMPORTED_MODULE_11__.getAiStatus)().then(setAiStatus).catch(() => setAiStatus({
      available: false,
      reason: "error"
    }));
  }, [open, aiStatus]);
  const handleGenerate = async () => {
    if (!prompt.trim() && !image) return;
    setError(null);
    setStep("loading");
    try {
      const payload = {
        prompt,
        ...(image && {
          image_data: image
        }),
        ...(Object.keys(currentSettings).length > 0 && {
          current_settings: currentSettings
        })
      };
      const result = await (0,_api_ai__WEBPACK_IMPORTED_MODULE_11__.generateSettings)(payload);

      // Build diff vs current (or empty baseline)
      const diff = Object.entries(result.settings).map(([key, to]) => ({
        key,
        from: currentSettings[key],
        to
      }));
      setAiTitle(result.title || "");
      setAiReasoning(result.reasoning || "");
      setSuggestions(diff);
      setSelected(Object.fromEntries(diff.map(d => [d.key, true])));
      setStep("preview");
    } catch (err) {
      setError(err?.message || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("AI generation failed. Please try again.", "wpbean-product-gallery-slider-for-woocommerce"));
      setStep("input");
    }
  };
  const handleToggle = (key, val) => {
    setSelected(prev => ({
      ...prev,
      [key]: val
    }));
  };
  const handleSelectAll = val => {
    setSelected(Object.fromEntries(suggestions.map(s => [s.key, val])));
  };
  const handleApply = () => {
    const chosenSettings = Object.fromEntries(suggestions.filter(s => selected[s.key]).map(s => [s.key, s.to]));
    onApply(chosenSettings, aiTitle);
    onClose();
  };
  const selectedCount = Object.values(selected).filter(Boolean).length;
  if (!open) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: "fixed inset-0 z-[100050] flex items-center justify-center p-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "absolute inset-0 bg-black/50 backdrop-blur-[2px]",
      onClick: onClose
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "relative z-10 w-full max-w-[480px] rounded-2xl bg-white shadow-2xl overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "flex items-center justify-between px-5 py-4 border-b border-gray-100",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "flex items-center gap-2.5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-600",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "w-4 h-4 text-white"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h2", {
              className: "text-[14px] font-semibold text-gray-900 leading-none",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("AI Gallery Assistant", "wpbean-product-gallery-slider-for-woocommerce")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
              className: "text-[11px] text-gray-400 mt-0.5",
              children: step === "preview" ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Review suggested changes", "wpbean-product-gallery-slider-for-woocommerce") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Describe the gallery style you want", "wpbean-product-gallery-slider-for-woocommerce")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
          type: "button",
          onClick: onClose,
          className: "flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors",
          "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Close", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: "w-4 h-4"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "overflow-y-auto",
        style: {
          maxHeight: "70vh"
        },
        children: [aiStatus === null && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "flex flex-col items-center justify-center py-12 gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "w-6 h-6 animate-spin text-gray-300"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            className: "text-sm text-gray-400",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Checking AI availability…", "wpbean-product-gallery-slider-for-woocommerce")
          })]
        }), aiStatus && !aiStatus.available && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(StatusMessage, {
          status: aiStatus,
          onClose: onClose
        }), aiStatus?.available && step === "input" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "px-5 py-5 space-y-4",
          children: [error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "flex items-start gap-2.5 rounded-lg bg-red-50 px-3.5 py-3 text-sm text-red-700",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              className: "w-4 h-4 shrink-0 mt-0.5"
            }), error]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
              className: "block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Describe the style you want", "wpbean-product-gallery-slider-for-woocommerce")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("textarea", {
              value: prompt,
              onChange: e => setPrompt(e.target.value),
              placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("e.g. Large hero images with thumbnails on the left, subtle zoom, clean lightbox — like a luxury fashion store.", "wpbean-product-gallery-slider-for-woocommerce"),
              rows: 4,
              className: "w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-3 text-sm text-gray-800 placeholder:text-gray-400 resize-none focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500/20 hover:border-gray-300 transition-colors"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("label", {
              className: "block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2",
              children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Reference image", "wpbean-product-gallery-slider-for-woocommerce"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
                className: "ml-1.5 font-normal normal-case text-gray-400",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("(optional)", "wpbean-product-gallery-slider-for-woocommerce")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(ImageDropZone, {
              image: image,
              onImage: setImage,
              onClear: () => setImage(null)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
              className: "mt-1.5 text-[11px] text-gray-400",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upload a screenshot of a gallery style you like — the AI will analyse it.", "wpbean-product-gallery-slider-for-woocommerce")
            })]
          })]
        }), step === "loading" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "flex flex-col items-center justify-center py-16 gap-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "relative",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "w-14 h-14 rounded-full border-4 border-blue-100 border-t-blue-500 animate-spin"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "absolute inset-0 flex items-center justify-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: "w-5 h-5 text-blue-500"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
              className: "text-sm font-medium text-gray-700",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Generating gallery settings…", "wpbean-product-gallery-slider-for-woocommerce")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
              className: "text-xs text-gray-400 mt-1",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("This usually takes a few seconds.", "wpbean-product-gallery-slider-for-woocommerce")
            })]
          })]
        }), step === "preview" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "px-5 py-5 space-y-4",
          children: [aiReasoning && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "rounded-xl bg-blue-50 px-4 py-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: "flex items-start gap-2.5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: "w-4 h-4 text-blue-500 shrink-0 mt-0.5"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
                className: "text-[12.5px] text-blue-800 leading-relaxed",
                children: aiReasoning
              })]
            })
          }), mode === "create" && aiTitle && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
              className: "block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-1.5",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Rule name", "wpbean-product-gallery-slider-for-woocommerce")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", {
              type: "text",
              value: aiTitle,
              onChange: e => setAiTitle(e.target.value),
              className: "w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 focus:border-blue-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500/20 hover:border-gray-300 transition-colors"
            })]
          }), suggestions.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "py-6 text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
              className: "text-sm text-gray-500",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("The AI didn't suggest any changes. Try a more specific prompt.", "wpbean-product-gallery-slider-for-woocommerce")
            })
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: "flex items-center justify-between mb-1",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("label", {
                className: "block text-[12px] font-semibold text-gray-500 uppercase tracking-wider",
                children: suggestions.length === 1 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("1 suggested change", "wpbean-product-gallery-slider-for-woocommerce") : `${suggestions.length} ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("suggested changes", "wpbean-product-gallery-slider-for-woocommerce")}`
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
                type: "button",
                onClick: () => handleSelectAll(selectedCount < suggestions.length),
                className: "text-[11px] text-blue-600 hover:text-blue-700 font-medium transition-colors",
                children: selectedCount < suggestions.length ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select all", "wpbean-product-gallery-slider-for-woocommerce") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Deselect all", "wpbean-product-gallery-slider-for-woocommerce")
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "rounded-xl border border-gray-200 bg-white divide-y divide-gray-100 px-4",
              children: suggestions.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(SuggestionRow, {
                item: item,
                checked: !!selected[item.key],
                onChange: handleToggle
              }, item.key))
            })]
          })]
        })]
      }), aiStatus?.available && step !== "loading" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "flex items-center justify-between gap-3 px-5 py-4 border-t border-gray-100 bg-gray-50/80",
        children: step === "preview" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("button", {
            type: "button",
            onClick: () => setStep("input"),
            className: "inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
              className: "w-3.5 h-3.5"
            }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Try again", "wpbean-product-gallery-slider-for-woocommerce")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("button", {
            type: "button",
            onClick: handleApply,
            disabled: selectedCount === 0,
            className: ["inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all", selectedCount === 0 ? "cursor-not-allowed bg-gray-100 text-gray-400" : "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 shadow-sm active:scale-[0.98]"].join(" "),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "w-3.5 h-3.5"
            }), mode === "create" ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Create Rule", "wpbean-product-gallery-slider-for-woocommerce") : selectedCount === 1 ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Apply 1 Change", "wpbean-product-gallery-slider-for-woocommerce") : `${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Apply", "wpbean-product-gallery-slider-for-woocommerce")} ${selectedCount} ${(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Changes", "wpbean-product-gallery-slider-for-woocommerce")}`]
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
            type: "button",
            onClick: onClose,
            className: "px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Cancel", "wpbean-product-gallery-slider-for-woocommerce")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("button", {
            type: "button",
            onClick: handleGenerate,
            disabled: !prompt.trim() && !image,
            className: ["inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all", !prompt.trim() && !image ? "cursor-not-allowed bg-gray-100 text-gray-400" : "bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-700 hover:to-violet-700 shadow-sm active:scale-[0.98]"].join(" "),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "w-3.5 h-3.5"
            }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Generate", "wpbean-product-gallery-slider-for-woocommerce")]
          })]
        })
      })]
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/SearchPalette.jsx"
/*!*******************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/SearchPalette.jsx ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchPalette)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/corner-down-left.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var _constants_searchIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/searchIndex */ "./src/admin/pages/rulesDetails/constants/searchIndex.js");
/* harmony import */ var _hooks_useKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useKeyboardShortcuts */ "./src/admin/pages/rulesDetails/hooks/useKeyboardShortcuts.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);






const TAB_COLORS = {
  general: "bg-gray-100 text-gray-600",
  zoom: "bg-blue-50 text-blue-700",
  "zoom-window": "bg-indigo-50 text-indigo-700",
  gallery: "bg-violet-50 text-violet-700",
  lightbox: "bg-purple-50 text-purple-700",
  mobile: "bg-rose-50 text-rose-700"
};
function score(item, words) {
  let s = 0;
  const haystack = `${item.label} ${item.description} ${item.section} ${item.tabLabel}`.toLowerCase();
  for (const w of words) {
    if (!haystack.includes(w)) return -1; // all words must match
    if (item.label.toLowerCase().includes(w)) s += 3;
    if (item.section.toLowerCase().includes(w)) s += 1;
  }
  return s;
}
function highlightText(text, words) {
  if (!words.length) return text;
  const regex = new RegExp(`(${words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((p, i) => regex.test(p) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("mark", {
    className: "bg-blue-100 text-blue-800 rounded-[3px] px-px not-italic font-semibold",
    children: p
  }, i) : p);
}
function SearchPalette({
  open,
  onClose,
  onNavigate,
  searchShortcut
}) {
  const [query, setQuery] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [active, setActive] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const inputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const listRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  const results = query.trim() ? _constants_searchIndex__WEBPACK_IMPORTED_MODULE_4__.SEARCH_INDEX.map(item => ({
    item,
    s: score(item, words)
  })).filter(({
    s
  }) => s >= 0).sort((a, b) => b.s - a.s).map(({
    item
  }) => item) : _constants_searchIndex__WEBPACK_IMPORTED_MODULE_4__.SEARCH_INDEX.slice(0, 8);

  // Reset state on open/close
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (open) {
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  // Keep active item in view
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setActive(0);
  }, [query]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const el = listRef.current?.children[active];
    el?.scrollIntoView({
      block: "nearest"
    });
  }, [active]);
  const select = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(item => {
    onClose();
    onNavigate(item);
  }, [onClose, onNavigate]);
  const onKey = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(e => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(a => Math.min(a + 1, results.length - 1));
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(a => Math.max(a - 1, 0));
    }
    if (e.key === "Enter" && results[active]) {
      e.preventDefault();
      select(results[active]);
    }
    if (e.key === "Escape") {
      e.preventDefault();
      onClose();
    }
  }, [results, active, select, onClose]);
  if (!open) return null;
  const portal = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "fixed inset-0 z-[99999] flex items-start justify-center pt-[12vh]",
    style: {
      background: "rgba(15,23,42,0.45)",
      backdropFilter: "blur(2px)"
    },
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "w-full max-w-[560px] overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10",
      style: {
        animation: "wcpg-palette-in 0.18s cubic-bezier(0.32,0.72,0,1)"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center gap-3 border-b border-gray-100 px-4 py-3.5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "h-4 w-4 shrink-0 text-gray-400"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("input", {
          ref: inputRef,
          value: query,
          onChange: e => setQuery(e.target.value),
          onKeyDown: onKey,
          placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Search settings…", "wpbean-product-gallery-slider-for-woocommerce"),
          className: "min-w-0 flex-1 bg-transparent text-[14px] text-gray-800 placeholder:text-gray-400 focus:outline-none"
        }), query && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          onMouseDown: e => {
            e.preventDefault();
            setQuery("");
            inputRef.current?.focus();
          },
          className: "shrink-0 rounded-md px-1.5 py-0.5 text-[11px] font-medium text-gray-400 hover:bg-gray-100",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Clear", "wpbean-product-gallery-slider-for-woocommerce")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("kbd", {
          className: "shrink-0 rounded-md border border-gray-200 bg-gray-50 px-1.5 py-0.5 text-[11px] font-medium text-gray-400",
          children: "Esc"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
        ref: listRef,
        className: "max-h-[380px] overflow-y-auto py-1.5",
        children: results.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
          className: "flex flex-col items-center gap-1.5 py-10 text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "h-7 w-7 text-gray-200"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            className: "text-[13px] text-gray-400",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No settings found for "%s"', "wpbean-product-gallery-slider-for-woocommerce"), query)
          })]
        }) : results.map((item, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            type: "button",
            onMouseDown: e => {
              e.preventDefault();
              select(item);
            },
            onMouseEnter: () => setActive(i),
            className: ["flex w-full items-center gap-3 px-4 py-2.5 text-start transition-colors", i === active ? "bg-blue-50" : "hover:bg-gray-50"].join(" "),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "flex min-w-0 flex-1 flex-col gap-0.5",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "text-[13px] font-medium text-gray-800 leading-snug",
                children: highlightText(item.label, words)
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                className: "truncate text-[11.5px] text-gray-400 leading-snug",
                children: highlightText(item.section, words)
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: `shrink-0 rounded-md px-1.5 py-0.5 text-[10px] font-semibold ${TAB_COLORS[item.tab] || "bg-gray-100 text-gray-600"}`,
              children: item.tabLabel
            }), i === active && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              className: "h-3.5 w-3.5 shrink-0 text-gray-300 rtl:scale-x-[-1]"
            })]
          })
        }, item.key))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center justify-between border-t border-gray-100 bg-gray-50/70 px-4 py-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center gap-3 text-[11px] text-gray-400",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            className: "flex items-center gap-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("kbd", {
              className: "rounded border border-gray-200 bg-white px-1 text-[10px]",
              children: "\u2191\u2193"
            }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("navigate", "wpbean-product-gallery-slider-for-woocommerce")]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            className: "flex items-center gap-1",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("kbd", {
              className: "rounded border border-gray-200 bg-white px-1 text-[10px]",
              children: "\u21B5"
            }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("go to setting", "wpbean-product-gallery-slider-for-woocommerce")]
          })]
        }), searchShortcut && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("kbd", {
          className: "rounded border border-gray-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-gray-400",
          children: (0,_hooks_useKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_5__.formatShortcut)(searchShortcut)
        })]
      })]
    })
  });
  const portalTarget = document.getElementById("wpbean-pgs-setting-rule-app") || document.body;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createPortal)(portal, portalTarget);
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/SettingsSidebar.jsx"
/*!*********************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/SettingsSidebar.jsx ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsSidebar)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/layers.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/wand-sparkles.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/gallery-horizontal-end.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/image.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/images.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/layout-grid.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/layout-template.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/maximize-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/monitor.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/navigation-2.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/play.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/settings.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/smartphone.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/tag.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/zap.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/zoom-in.js");
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../context/SettingsContext */ "./src/admin/pages/rulesDetails/context/SettingsContext.jsx");
/* harmony import */ var _utils_isPremium__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../utils/isPremium */ "./src/admin/pages/rulesDetails/utils/isPremium.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);






const SECTIONS = [{
  label: null,
  tabs: [{
    id: "general",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General", "wpbean-product-gallery-slider-for-woocommerce"),
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_13__["default"]
  }, {
    id: "quick-start",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Quick Start", "wpbean-product-gallery-slider-for-woocommerce"),
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"]
  }]
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom", "wpbean-product-gallery-slider-for-woocommerce"),
  tabs: [{
    id: "zoom",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom", "wpbean-product-gallery-slider-for-woocommerce"),
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_19__["default"]
  }, {
    id: "zoom-window",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom Window", "wpbean-product-gallery-slider-for-woocommerce"),
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"]
  }]
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display", "wpbean-product-gallery-slider-for-woocommerce"),
  tabs: [{
    id: "gallery",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gallery", "wpbean-product-gallery-slider-for-woocommerce"),
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"]
  }, {
    id: "lightbox",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lightbox", "wpbean-product-gallery-slider-for-woocommerce"),
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, {
    id: "mobile",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mobile", "wpbean-product-gallery-slider-for-woocommerce"),
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_15__["default"]
  }, {
    id: "video",
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Video", "wpbean-product-gallery-slider-for-woocommerce"),
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_12__["default"]
  }]
}];
const GALLERY_SUB_TABS = [{
  id: "general",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General", "wpbean-product-gallery-slider-for-woocommerce"),
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_14__["default"]
}, {
  id: "thumbnails",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnails", "wpbean-product-gallery-slider-for-woocommerce"),
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"],
  hideForHierarchyGrid: true,
  hideForTiles: true
}, {
  id: "main-image",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Main Image", "wpbean-product-gallery-slider-for-woocommerce"),
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"],
  hideForTiles: true
}, {
  id: "navigation",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Navigation", "wpbean-product-gallery-slider-for-woocommerce"),
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_11__["default"],
  hideForHierarchyGrid: true,
  hideForTiles: true
}, {
  id: "transition",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Transition", "wpbean-product-gallery-slider-for-woocommerce"),
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"],
  hideForAnchor: true,
  hideForStickySplit: true,
  hideForHierarchyGrid: true,
  hideForTiles: true
}, {
  id: "stacked",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stacked Layout", "wpbean-product-gallery-slider-for-woocommerce"),
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"],
  requireAnchor: true
}, {
  id: "sticky-split",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sticky Split", "wpbean-product-gallery-slider-for-woocommerce"),
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"],
  requireStickySplit: true
}, {
  id: "hierarchy-grid",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hierarchy Grid", "wpbean-product-gallery-slider-for-woocommerce"),
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"],
  requireHierarchyGrid: true
}, {
  id: "tiles",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tiles", "wpbean-product-gallery-slider-for-woocommerce"),
  icon: lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"],
  requireTiles: true
}];
function NavButton({
  tab,
  active,
  onClick,
  children
}) {
  const {
    icon: Icon,
    label
  } = tab;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("button", {
    type: "button",
    onClick: onClick,
    className: ["group flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-start", "text-[13px] font-medium transition-colors duration-100", "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset", active ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"].join(" "),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(Icon, {
      className: ["h-[15px] w-[15px] shrink-0 transition-colors", active ? "text-blue-100" : "text-gray-400 group-hover:text-gray-500"].join(" "),
      strokeWidth: 2
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("span", {
      className: "truncate",
      children: label
    }), children]
  });
}
const pluginVersion = window.WPBean_PGS_Options?.version ?? "";
function SettingsSidebar({
  isOpen,
  onClose
}) {
  const {
    state: {
      activeTab,
      gallerySubTab,
      settings
    },
    actions
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_20__.useSettings)();
  const isAnchorGallery = settings.galleryType === "anchor";
  const isStickySplitGallery = settings.galleryType === "sticky-split";
  const isHierarchyGridGallery = settings.galleryType === "hierarchy-grid";
  const isTilesGallery = settings.galleryType === "tiles";

  // Mirror #adminmenuback height — WP keeps this element exactly as tall as
  // the admin menu area, so it's the most reliable source for our sidebar height.
  const sidebarRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const update = () => {
      const menuBack = document.getElementById("adminmenuback");
      const adminBar = document.getElementById("wpadminbar");
      if (!menuBack || !sidebarRef.current) return;
      const barH = adminBar ? adminBar.offsetHeight : 0;
      sidebarRef.current.style.height = window.innerWidth > 782 ? `${menuBack.offsetHeight + barH}px` : "calc(100vh - var(--wp-admin--admin-bar--height, 32px))";
    };
    update();
    window.addEventListener("resize", update);
    document.addEventListener("wp-collapse-menu", update);
    document.addEventListener("wp-responsive-activate", update);
    document.addEventListener("wp-responsive-deactivate", update);
    return () => {
      window.removeEventListener("resize", update);
      document.removeEventListener("wp-collapse-menu", update);
      document.removeEventListener("wp-responsive-activate", update);
      document.removeEventListener("wp-responsive-deactivate", update);
    };
  }, []);
  const adminBarHeight = "var(--wp-admin--admin-bar--height, 32px)";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("aside", {
    ref: sidebarRef,
    className: ["fixed start-0 bottom-0 z-50 flex w-64 shrink-0 flex-col border-e border-gray-200/80 bg-white", "transition-transform duration-300 ease-in-out", "wp:sticky wp:bottom-auto wp:z-auto wp:self-start wp:translate-x-0", isOpen ? "translate-x-0" : "-translate-x-full"].join(" "),
    style: {
      top: adminBarHeight
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
      className: "flex h-[68px] shrink-0 items-center gap-3 border-b border-gray-200/80 px-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 shadow-sm shadow-blue-200/60",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "h-[15px] w-[15px] text-white",
          strokeWidth: 2.5
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
        className: "min-w-0 flex-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("p", {
          className: "truncate text-[13px] font-semibold leading-tight text-gray-900",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("WPBean Product Gallery", "wpbean-product-gallery-slider-for-woocommerce")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("p", {
          className: "text-[11px] leading-tight text-gray-400",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rule Settings", "wpbean-product-gallery-slider-for-woocommerce")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("button", {
        type: "button",
        onClick: onClose,
        className: "flex wp:hidden h-7 w-7 shrink-0 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600",
        "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Close navigation", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_17__["default"], {
          className: "h-4 w-4"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("nav", {
      className: "flex-1 overflow-y-auto px-3 py-3",
      children: [SECTIONS.map(({
        label,
        tabs
      }, sectionIdx) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
        className: sectionIdx > 0 ? "mt-4" : "",
        children: [label && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("p", {
          className: "mb-1 px-2.5 text-[10.5px] font-semibold uppercase tracking-wider text-gray-400",
          children: label
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
          className: "space-y-0.5",
          children: tabs.map(tab => {
            const active = activeTab === tab.id;
            const isGallery = tab.id === "gallery";
            const showSubTabs = isGallery && active;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(NavButton, {
                tab: tab,
                active: active,
                onClick: () => {
                  actions.setTab(tab.id);
                  onClose();
                }
              }), showSubTabs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
                className: "ms-3 mt-0.5 space-y-0.5 border-s-2 border-blue-100 ps-2",
                children: GALLERY_SUB_TABS.filter(t => (!t.requireAnchor || isAnchorGallery) && (!t.hideForAnchor || !isAnchorGallery) && (!t.requireStickySplit || isStickySplitGallery) && (!t.hideForStickySplit || !isStickySplitGallery) && (!t.requireHierarchyGrid || isHierarchyGridGallery) && (!t.hideForHierarchyGrid || !isHierarchyGridGallery) && (!t.requireTiles || isTilesGallery) && (!t.hideForTiles || !isTilesGallery)).map(({
                  id: subId,
                  label: subLabel,
                  icon: SubIcon
                }) => {
                  const subActive = gallerySubTab === subId;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("button", {
                    type: "button",
                    onClick: () => {
                      actions.setGallerySubTab(subId);
                      onClose();
                    },
                    className: ["group flex w-full items-center gap-2 rounded px-2.5 py-1.5 text-start", "text-[12px] font-medium transition-colors duration-100", "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset", subActive ? "bg-blue-50 text-blue-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"].join(" "),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(SubIcon, {
                      className: ["h-3 w-3 shrink-0", subActive ? "text-blue-500" : "text-gray-400 group-hover:text-gray-500"].join(" "),
                      strokeWidth: 2
                    }), subLabel]
                  }, subId);
                })
              })]
            }, tab.id);
          })
        })]
      }, sectionIdx)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
        className: "mt-4 border-t border-gray-100 pt-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(NavButton, {
          tab: {
            id: "assignments",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Assignments", "wpbean-product-gallery-slider-for-woocommerce"),
            icon: lucide_react__WEBPACK_IMPORTED_MODULE_16__["default"]
          },
          active: activeTab === "assignments",
          onClick: () => {
            actions.setTab("assignments");
            onClose();
          }
        })
      }), !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_21__.isPremium)() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
        className: "mt-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("a", {
          href: window.WPBean_PGS_Options?.upgradeUrl ?? "#",
          target: "_blank",
          rel: "noopener noreferrer",
          className: ["group flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-start", "text-[13px] font-medium transition-colors duration-100", "bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800", "border border-amber-200 hover:border-amber-300", "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-inset"].join(" "),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_18__["default"], {
            className: "h-[15px] w-[15px] shrink-0 text-amber-500 group-hover:text-amber-600 transition-colors",
            strokeWidth: 2
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("span", {
            className: "truncate",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upgrade to Pro", "wpbean-product-gallery-slider-for-woocommerce")
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)("div", {
      className: "border-t border-gray-100 px-4 py-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)("p", {
        className: "text-[11px] font-medium text-gray-300",
        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("WPBean Product Gallery", "wpbean-product-gallery-slider-for-woocommerce"), pluginVersion ? ` · ${pluginVersion}` : ""]
      })
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/ShortcutsModal.jsx"
/*!********************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/ShortcutsModal.jsx ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShortcutsModal)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/keyboard.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _hooks_useKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useKeyboardShortcuts */ "./src/admin/pages/rulesDetails/hooks/useKeyboardShortcuts.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);





const SHORTCUT_DEFS = [{
  id: "save",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Save Settings", "wpbean-product-gallery-slider-for-woocommerce"),
  hint: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Save all current changes", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  id: "undo",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Undo", "wpbean-product-gallery-slider-for-woocommerce"),
  hint: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Step back one change", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  id: "redo",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Redo", "wpbean-product-gallery-slider-for-woocommerce"),
  hint: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Step forward one change", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  id: "search",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open Search", "wpbean-product-gallery-slider-for-woocommerce"),
  hint: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spotlight-style settings search", "wpbean-product-gallery-slider-for-woocommerce")
}];
function ShortcutsModal({
  open,
  onClose,
  shortcuts,
  onUpdate,
  onReset
}) {
  const [recording, setRecording] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  // Capture the next key combo while recording
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!recording) return;
    const onKey = e => {
      e.preventDefault();
      e.stopPropagation();
      if (e.key === "Escape") {
        setRecording(null);
        return;
      }
      if (["Control", "Meta", "Shift", "Alt"].includes(e.key)) return;
      onUpdate(recording, {
        key: e.key.toLowerCase(),
        ctrl: e.ctrlKey || e.metaKey,
        shift: e.shiftKey,
        alt: e.altKey
      });
      setRecording(null);
    };
    window.addEventListener("keydown", onKey, {
      capture: true
    });
    return () => window.removeEventListener("keydown", onKey, {
      capture: true
    });
  }, [recording, onUpdate]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!open) setRecording(null);
  }, [open]);
  if (!open) return null;
  const modal = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "fixed inset-0 z-[99999] flex items-center justify-center",
    style: {
      background: "rgba(15,23,42,0.45)",
      backdropFilter: "blur(2px)"
    },
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose();
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10",
      style: {
        animation: "wcpg-palette-in 0.18s cubic-bezier(0.32,0.72,0,1)"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center justify-between border-b border-gray-100 px-5 py-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "flex items-center gap-2.5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              className: "h-4 w-4 text-blue-600"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "text-[13px] font-semibold text-gray-800",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Keyboard Shortcuts", "wpbean-product-gallery-slider-for-woocommerce")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
              className: "text-[11px] text-gray-400",
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Click a shortcut badge to reassign it", "wpbean-product-gallery-slider-for-woocommerce")
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          onClick: onClose,
          className: "flex h-7 w-7 items-center justify-center rounded-lg text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "h-3.5 w-3.5"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "divide-y divide-gray-50 px-5 py-1",
        children: SHORTCUT_DEFS.map(({
          id,
          label,
          hint
        }) => {
          const sc = shortcuts[id];
          const isRec = recording === id;
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "flex items-center justify-between py-3.5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-[13px] font-medium text-gray-800",
                children: label
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                className: "text-[11px] text-gray-400",
                children: hint
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
              onClick: () => setRecording(isRec ? null : id),
              className: ["min-w-[96px] rounded-lg border px-3 py-1.5 text-center text-[12px] font-medium transition-all duration-150", isRec ? "animate-pulse border-blue-400 bg-blue-50 text-blue-600 ring-2 ring-blue-500/20" : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-300 hover:bg-white"].join(" "),
              children: isRec ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Press keys…", "wpbean-product-gallery-slider-for-woocommerce") : sc ? (0,_hooks_useKeyboardShortcuts__WEBPACK_IMPORTED_MODULE_5__.formatShortcut)(sc) : "—"
            })]
          }, id);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center justify-between border-t border-gray-100 bg-gray-50/70 px-5 py-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
          className: "text-[11px] text-gray-400",
          children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Press", "wpbean-product-gallery-slider-for-woocommerce"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("kbd", {
            className: "rounded border border-gray-200 bg-white px-1 text-[10px]",
            children: "Esc"
          }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("to cancel recording", "wpbean-product-gallery-slider-for-woocommerce")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
          onClick: onReset,
          className: "flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-medium text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "h-3 w-3"
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reset defaults", "wpbean-product-gallery-slider-for-woocommerce")]
        })]
      })]
    })
  });
  const portalTarget = document.getElementById("wpbean-pgs-setting-rule-app") || document.body;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createPortal)(modal, portalTarget);
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/panels/AssignmentsPanel.jsx"
/*!*****************************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/panels/AssignmentsPanel.jsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/loader-circle.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-right.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/package.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/tag.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _api_assignments__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../api/assignments */ "./src/admin/pages/rulesDetails/api/assignments.js");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/index */ "./src/admin/pages/rulesDetails/components/ui/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__);
/**
 * AssignmentsPanel.jsx
 *
 * Assign a zoom settings rule to specific WooCommerce product categories
 * and/or individual products.
 *
 * Architecture (mirrors FormSettingsPanel.jsx from the form builder):
 *  - No local Save button. PluginSettingsApp calls assignmentsSaveRef.current(id)
 *    inside handleSave, so assignments save atomically with the settings row.
 *  - assignmentsSaveRef.current receives the final id at call time — safe for
 *    new items that didn't have an id when the panel mounted.
 *  - Category tree shows a flat filtered list when the filter input is active.
 *  - Product search is debounced at 350 ms.
 */







const APPLY_TO_OPTIONS = [{
  value: "all",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("All Products", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "selected",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Selected Only", "wpbean-product-gallery-slider-for-woocommerce")
}];

// ── Helpers ───────────────────────────────────────────────────────────────────

const buildTree = (cats, parent = 0) => cats.filter(c => c.parent === parent).map(c => ({
  ...c,
  children: buildTree(cats, c.id)
}));

// ── Category tree node ────────────────────────────────────────────────────────

const CategoryNode = ({
  node,
  selected,
  onToggle,
  depth = 0
}) => {
  const [expanded, setExpanded] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(depth < 1);
  const isSelected = selected.includes(node.id);
  const hasChildren = node.children?.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: ["flex items-center gap-1.5 rounded-md py-[6px] cursor-pointer", "transition-colors duration-100", isSelected ? "bg-blue-50" : "hover:bg-gray-50"].join(" "),
      style: {
        paddingLeft: `${10 + depth * 14}px`,
        paddingRight: "10px"
      },
      onClick: () => onToggle(node.id),
      children: [hasChildren ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
        className: "h-4 w-4 shrink-0 flex items-center justify-center rounded text-gray-300 hover:text-gray-500 transition-colors",
        onClick: e => {
          e.stopPropagation();
          setExpanded(v => !v);
        },
        "aria-label": expanded ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Collapse", "wpbean-product-gallery-slider-for-woocommerce") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Expand", "wpbean-product-gallery-slider-for-woocommerce"),
        children: expanded ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
          size: 11
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
          size: 11
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
        className: "w-4 shrink-0"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
        className: ["h-[15px] w-[15px] shrink-0 rounded-[3px] border-[1.5px]", "flex items-center justify-center transition-colors duration-100", isSelected ? "border-blue-600 bg-blue-600" : "border-gray-200 bg-white"].join(" "),
        children: isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
          size: 9,
          strokeWidth: 3,
          className: "text-white"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
        className: ["flex-1 min-w-0 truncate text-[12px] leading-none transition-colors duration-100", isSelected ? "font-medium text-blue-600" : "text-gray-600"].join(" "),
        children: node.name
      }), node.count > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
        className: "shrink-0 tabular-nums text-[10px] text-gray-300",
        children: node.count
      })]
    }), hasChildren && expanded && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      children: node.children.map(child => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(CategoryNode, {
        node: child,
        selected: selected,
        onToggle: onToggle,
        depth: depth + 1
      }, child.id))
    })]
  });
};

// ── Flat filtered category row ────────────────────────────────────────────────

const CategoryFlatRow = ({
  cat,
  selected,
  onToggle
}) => {
  const isSelected = selected.includes(cat.id);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: ["flex items-center gap-1.5 rounded-md px-2.5 py-[6px] cursor-pointer", "transition-colors duration-100", isSelected ? "bg-blue-50" : "hover:bg-gray-50"].join(" "),
    onClick: () => onToggle(cat.id),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
      className: ["h-[15px] w-[15px] shrink-0 rounded-[3px] border-[1.5px]", "flex items-center justify-center transition-colors duration-100", isSelected ? "border-blue-600 bg-blue-600" : "border-gray-200 bg-white"].join(" "),
      children: isSelected && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: 9,
        strokeWidth: 3,
        className: "text-white"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
      className: ["flex-1 min-w-0 truncate text-[12px]", isSelected ? "font-medium text-blue-600" : "text-gray-600"].join(" "),
      children: cat.name
    }), cat.count > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
      className: "shrink-0 tabular-nums text-[10px] text-gray-300",
      children: cat.count
    })]
  });
};

// ── Accordion header ──────────────────────────────────────────────────────────

const AccordionHeader = ({
  icon: Icon,
  label,
  count,
  isOpen,
  onToggle
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("button", {
  type: "button",
  onClick: onToggle,
  className: ["flex w-full items-center justify-between px-5 py-[13px] text-left", "transition-colors duration-[130ms] hover:bg-gray-50/80", isOpen ? "bg-gray-50/80" : ""].join(" "),
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
    className: "flex items-center gap-2 text-[12.5px] font-semibold text-blue-600 tracking-[-0.01em]",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(Icon, {
      size: 13,
      strokeWidth: 1.8,
      className: "opacity-80"
    }), label, count > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
      className: "rounded-full bg-blue-600 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white",
      children: count
    })]
  }), isOpen ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: 14,
    className: "shrink-0 text-gray-300"
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: 14,
    className: "shrink-0 text-gray-300 rtl:rotate-180"
  })]
});

// ── Categories section ────────────────────────────────────────────────────────

const CategoriesSection = ({
  categories,
  selected,
  onToggle,
  isOpen,
  onOpenToggle
}) => {
  const [filterQuery, setFilterQuery] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const tree = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => buildTree(categories), [categories]);
  const filtered = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!filterQuery.trim()) return null;
    const q = filterQuery.toLowerCase();
    return categories.filter(c => c.name.toLowerCase().includes(q));
  }, [filterQuery, categories]);
  const isFiltering = filtered !== null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: "border-b border-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(AccordionHeader, {
      icon: lucide_react__WEBPACK_IMPORTED_MODULE_9__["default"],
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Product Categories", "wpbean-product-gallery-slider-for-woocommerce"),
      count: selected.length,
      isOpen: isOpen,
      onToggle: onOpenToggle
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "px-4 pb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "mb-3 px-0.5 text-[11.5px] leading-relaxed text-gray-400",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Apply this rule to all products in the selected categories.", "wpbean-product-gallery-slider-for-woocommerce")
      }), categories.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
        className: "text-[12px] text-gray-400 px-1 py-1",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No WooCommerce categories found.", "wpbean-product-gallery-slider-for-woocommerce")
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.Fragment, {
        children: [categories.length > 6 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
          className: "relative mb-2.5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
            size: 11,
            className: "absolute start-2.5 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", {
            type: "text",
            className: ["w-full rounded-lg border border-gray-200 bg-gray-50 py-[7px] ps-7 pe-7", "text-[12px] text-gray-800 placeholder:text-gray-400 outline-none", "transition-colors duration-150 focus:border-blue-400 focus:bg-white focus:ring-1 focus:ring-blue-500/20"].join(" "),
            placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Filter categories…", "wpbean-product-gallery-slider-for-woocommerce"),
            value: filterQuery,
            onChange: e => setFilterQuery(e.target.value)
          }), filterQuery && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
            className: "absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500",
            onClick: () => setFilterQuery(""),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
              size: 11
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
          className: "max-h-[220px] overflow-y-auto rounded-lg border border-gray-100 fb-scrollbar-thin",
          children: isFiltering ? filtered.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
            className: "px-3 py-3 text-[12px] text-gray-400",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('No categories match "%s"', "wpbean-product-gallery-slider-for-woocommerce"), filterQuery)
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "p-1",
            children: filtered.map(cat => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(CategoryFlatRow, {
              cat: cat,
              selected: selected,
              onToggle: onToggle
            }, cat.id))
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
            className: "p-1",
            children: tree.map(node => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(CategoryNode, {
              node: node,
              selected: selected,
              onToggle: onToggle
            }, node.id))
          })
        }), selected.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
          className: "mt-2 px-0.5 text-[11px] font-medium text-blue-600",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._n)("%d category selected", "%d categories selected", selected.length, "wpbean-product-gallery-slider-for-woocommerce"), selected.length)
        })]
      })]
    })]
  });
};

// ── Product search ────────────────────────────────────────────────────────────

const ProductSearch = ({
  selectedProducts,
  onAdd
}) => {
  const [query, setQuery] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [results, setResults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [open, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [dropdownPos, setDropdownPos] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    top: 0,
    left: 0,
    width: 0
  });
  const timerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const wrapRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const dropdownRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  // Compute portal position from the wrapper's bounding rect.
  // Runs on open and on any scroll / resize so it stays aligned.
  const updatePos = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => {
    if (!wrapRef.current) return;
    const r = wrapRef.current.getBoundingClientRect();
    setDropdownPos({
      top: r.bottom + 4,
      left: r.left,
      width: r.width
    });
  }, []);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!open) return;
    updatePos();
    window.addEventListener("scroll", updatePos, {
      capture: true,
      passive: true
    });
    window.addEventListener("resize", updatePos, {
      passive: true
    });
    return () => {
      window.removeEventListener("scroll", updatePos, {
        capture: true
      });
      window.removeEventListener("resize", updatePos);
    };
  }, [open, updatePos]);

  // Close on outside click — must check both the input wrapper AND the portal
  // dropdown (which lives in document.body, outside wrapRef).
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!open) return;
    const handler = e => {
      const inInput = wrapRef.current?.contains(e.target);
      const inDropdown = dropdownRef.current?.contains(e.target);
      if (!inInput && !inDropdown) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Debounced search
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!query.trim()) {
      setResults([]);
      setOpen(false);
      return;
    }
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(async () => {
      setLoading(true);
      try {
        const data = await (0,_api_assignments__WEBPACK_IMPORTED_MODULE_11__.searchWcProducts)({
          search: query,
          per_page: 15
        });
        setResults(data.items ?? []);
        setOpen(true);
        updatePos();
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 350);
    return () => clearTimeout(timerRef.current);
  }, [query]);
  const handleSelect = product => {
    if (!selectedProducts.find(p => p.id === product.id)) onAdd(product);
    setQuery("");
    setResults([]);
    setOpen(false);
  };

  // Portal dropdown — rendered at body level so no overflow clipping occurs.
  // Outer div carries `wpbean-pgs-wrapper` so PostCSS-scoped Tailwind classes apply.
  const dropdown = open && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
    className: "wpbean-pgs-wrapper",
    style: {
      position: "fixed",
      top: dropdownPos.top,
      left: dropdownPos.left,
      width: dropdownPos.width,
      zIndex: 999999
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      ref: dropdownRef,
      className: "overflow-hidden rounded-xl border border-gray-100 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)]",
      children: results.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
        className: "max-h-[256px] overflow-y-auto fb-scrollbar-thin divide-y divide-gray-50",
        children: results.map(product => {
          const added = !!selectedProducts.find(p => p.id === product.id);
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("button", {
            className: ["flex w-full items-center gap-3 px-3 py-2.5 text-start transition-colors duration-100", added ? "cursor-default bg-gray-50/60" : "hover:bg-blue-50/50"].join(" "),
            onClick: () => !added && handleSelect(product),
            disabled: added,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
              className: "h-9 w-9 shrink-0 rounded-lg overflow-hidden border border-gray-100 bg-gray-50 flex items-center justify-center",
              children: product.image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("img", {
                src: product.image,
                alt: "",
                style: {
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
                size: 14,
                className: "text-gray-300"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
              className: "flex min-w-0 flex-1 flex-col gap-[3px]",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
                className: ["truncate text-[12.5px] font-medium leading-tight", added ? "text-gray-400" : "text-gray-800"].join(" "),
                children: product.name
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
                className: "flex items-center gap-1.5 text-[10.5px] leading-none text-gray-400",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
                  className: "rounded bg-gray-100 px-1 py-px font-mono text-[9.5px] text-gray-500",
                  children: ["#", product.id]
                }), product.sku && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
                  className: "text-gray-300",
                  children: ["SKU: ", product.sku]
                })]
              })]
            }), added ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
              size: 13,
              className: "shrink-0 text-blue-400"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
              className: "shrink-0 rounded-md border border-blue-100 bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-500 opacity-0 transition-opacity duration-100 group-hover:opacity-100",
              children: "Add"
            })]
          }, product.id);
        })
      }) : loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "flex items-center justify-center gap-2 px-4 py-5 text-[12px] text-gray-400",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
          size: 13,
          className: "animate-spin"
        }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Searching…", "wpbean-product-gallery-slider-for-woocommerce")]
      }) : query.trim() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "px-4 py-5 text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
          className: "text-[12px] font-medium text-gray-500",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No products found", "wpbean-product-gallery-slider-for-woocommerce")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
          className: "mt-0.5 text-[11px] text-gray-400",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Try a different name or SKU", "wpbean-product-gallery-slider-for-woocommerce")
        })]
      })
    })
  }), document.body);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    ref: wrapRef,
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "relative flex items-center",
      children: [loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 12,
        className: "absolute start-3 top-1/2 -translate-y-1/2 text-gray-300 animate-spin pointer-events-none"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
        size: 12,
        className: "absolute start-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("input", {
        type: "text",
        className: ["w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 ps-8 pe-3", "text-[12.5px] text-gray-800 placeholder:text-gray-400 outline-none", "transition-all duration-150 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-500/10"].join(" "),
        placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Search products by name or SKU…", "wpbean-product-gallery-slider-for-woocommerce"),
        value: query,
        onChange: e => setQuery(e.target.value),
        onFocus: () => results.length > 0 && (updatePos(), setOpen(true))
      }), query && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
        className: "absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-300 hover:text-gray-500",
        onClick: () => {
          setQuery("");
          setResults([]);
          setOpen(false);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
          size: 12
        })
      })]
    }), dropdown]
  });
};

// ── Product tag chip ──────────────────────────────────────────────────────────

const ProductTag = ({
  product,
  onRemove
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
  className: "flex items-center gap-2.5 rounded-xl border border-gray-100 bg-white px-2.5 py-2 shadow-[0_1px_3px_rgba(0,0,0,0.04)]",
  children: [product.image ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("img", {
    src: product.image,
    alt: "",
    className: "h-9 w-9 shrink-0 rounded-lg object-cover border border-gray-100"
  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
    className: "h-9 w-9 shrink-0 rounded-lg bg-gray-100 border border-gray-100 flex items-center justify-center text-gray-300",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
      size: 14
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: "flex min-w-0 flex-1 flex-col gap-0.5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
      className: "truncate text-[12.5px] font-medium text-gray-800 leading-tight",
      title: product.name,
      children: product.name
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
      className: "text-[10.5px] text-gray-400 leading-none",
      children: ["ID: ", product.id, product.sku && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("span", {
        className: "ms-1.5 text-gray-300",
        children: ["\xB7 SKU: ", product.sku]
      })]
    })]
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("button", {
    onClick: () => onRemove(product.id),
    className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-gray-300 transition-colors duration-100 hover:bg-red-50 hover:text-red-400",
    "aria-label": `Remove ${product.name}`,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
      size: 11,
      strokeWidth: 2.5
    })
  })]
});

// ── Products section ──────────────────────────────────────────────────────────

const ProductsSection = ({
  selectedProducts,
  onAdd,
  onRemove,
  isOpen,
  onOpenToggle
}) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
  className: "border-b border-gray-100",
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(AccordionHeader, {
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"],
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Specific Products", "wpbean-product-gallery-slider-for-woocommerce"),
    count: selectedProducts.length,
    isOpen: isOpen,
    onToggle: onOpenToggle
  }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: "px-4 pb-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
      className: "mb-3 px-0.5 text-[11.5px] leading-relaxed text-gray-400",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Apply this rule directly to individual products.", "wpbean-product-gallery-slider-for-woocommerce")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(ProductSearch, {
      selectedProducts: selectedProducts,
      onAdd: onAdd
    }), selectedProducts.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("div", {
      className: "mt-2.5 flex flex-col gap-1.5",
      children: selectedProducts.map(p => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(ProductTag, {
        product: p,
        onRemove: onRemove
      }, p.id))
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
      className: "mt-2 px-0.5 text-[11px] text-gray-400",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No products added yet.", "wpbean-product-gallery-slider-for-woocommerce")
    })]
  })]
});

// ── Main panel ────────────────────────────────────────────────────────────────

const AssignmentsPanel = ({
  id,
  assignmentsSaveRef,
  onAssignmentsDirty,
  onAssignmentsClean
}) => {
  const isNew = !id || id === 0;
  const [applyTo, setApplyTo] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("all");
  const [categories, setCategories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [selectedCategories, setSelectedCategories] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [selectedProducts, setSelectedProducts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [loadingInit, setLoadingInit] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [catOpen, setCatOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [prodOpen, setProdOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const savedSnapshotRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  // ── Snapshot helpers ──────────────────────────────────────────────────────

  const getCurrentSnapshot = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => JSON.stringify({
    applyTo,
    categories: [...selectedCategories].sort(),
    products: selectedProducts.map(p => p.id).sort()
  }), [applyTo, selectedCategories, selectedProducts]);

  // Notify parent whenever assignments dirty state changes.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!savedSnapshotRef.current) return; // still loading — don't fire yet
    const dirty = savedSnapshotRef.current !== getCurrentSnapshot();
    if (dirty) {
      onAssignmentsDirty?.();
    } else {
      onAssignmentsClean?.();
    }
  }, [applyTo, selectedCategories, selectedProducts, getCurrentSnapshot, onAssignmentsDirty, onAssignmentsClean]);

  // ── Load ──────────────────────────────────────────────────────────────────

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let cancelled = false;
    (async () => {
      try {
        // Always load the category tree — even for new items.
        // Only fetch existing assignments when the row already exists.
        const [cats, assignments] = await Promise.all([(0,_api_assignments__WEBPACK_IMPORTED_MODULE_11__.getWcCategories)(), isNew ? Promise.resolve({
          apply_to: "all",
          categories: [],
          products: []
        }) : (0,_api_assignments__WEBPACK_IMPORTED_MODULE_11__.getAssignments)(id)]);
        if (cancelled) return;
        setCategories(cats);
        setApplyTo(assignments.apply_to ?? "all");
        setSelectedCategories(assignments.categories ?? []);
        if (!isNew && assignments.products?.length) {
          const data = await (0,_api_assignments__WEBPACK_IMPORTED_MODULE_11__.getWcProductsByIds)(assignments.products).catch(() => ({
            items: []
          }));
          const itemMap = Object.fromEntries((data.items ?? []).map(p => [p.id, p]));
          const resolved = assignments.products.map(pid => itemMap[pid] ?? {
            id: pid,
            name: `Product #${pid}`,
            sku: ""
          });
          if (!cancelled) setSelectedProducts(resolved);
        }
        if (!cancelled) {
          savedSnapshotRef.current = JSON.stringify({
            applyTo: assignments.apply_to ?? "all",
            categories: [...(assignments.categories ?? [])].sort(),
            products: [...(assignments.products ?? [])].sort()
          });
          onAssignmentsClean?.(); // start clean after load
        }
      } catch {
        /* panel renders empty */
      } finally {
        if (!cancelled) setLoadingInit(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  // ── Expose save — called by PluginSettingsApp.handleSave ─────────────────

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!assignmentsSaveRef) return;
    assignmentsSaveRef.current = async finalId => {
      if (!finalId || finalId === 0) return;
      await (0,_api_assignments__WEBPACK_IMPORTED_MODULE_11__.saveAssignments)(finalId, applyTo, selectedCategories, selectedProducts.map(p => p.id));
      savedSnapshotRef.current = JSON.stringify({
        applyTo,
        categories: [...selectedCategories].sort(),
        products: selectedProducts.map(p => p.id).sort()
      });
      onAssignmentsClean?.(); // reset dirty after save
    };
  }, [applyTo, selectedCategories, selectedProducts, assignmentsSaveRef, onAssignmentsClean]);

  // ── Handlers ──────────────────────────────────────────────────────────────

  const toggleCategory = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(termId => setSelectedCategories(prev => prev.includes(termId) ? prev.filter(c => c !== termId) : [...prev, termId]), []);
  const addProduct = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(p => setSelectedProducts(prev => [...prev, p]), []);
  const removeProduct = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useCallback)(pid => setSelectedProducts(prev => prev.filter(p => p.id !== pid)), []);

  // ── Loading ───────────────────────────────────────────────────────────────

  if (loadingInit) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "flex h-40 items-center justify-center gap-2 text-[12px] text-gray-300",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: 16,
        className: "animate-spin"
      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loading assignments…", "wpbean-product-gallery-slider-for-woocommerce")]
    });
  }
  const showPickers = applyTo === "selected";
  const totalSelected = selectedCategories.length + selectedProducts.length;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
    className: "mx-auto max-w-[680px] pb-10 space-y-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "overflow-hidden rounded-xl border border-gray-200 bg-white",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "border-b border-gray-100 bg-gray-50/60 px-5 py-[14px]",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("h3", {
          className: "text-[13px] font-semibold text-gray-700",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Apply Rule To", "wpbean-product-gallery-slider-for-woocommerce")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
          className: "mt-0.5 text-[11.5px] leading-relaxed text-gray-400",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose whether this zoom rule applies to all products or only specific ones.", "wpbean-product-gallery-slider-for-woocommerce")
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "px-5 py-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_12__.ButtonGroup, {
          options: APPLY_TO_OPTIONS,
          value: applyTo,
          onChange: setApplyTo
        }), applyTo === "all" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("p", {
          className: "mt-3 text-[11.5px] text-gray-400 leading-relaxed",
          children: ["This rule will be applied to", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("span", {
            className: "font-medium text-gray-600",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("all products", "wpbean-product-gallery-slider-for-woocommerce")
          }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('in your store. To limit it, switch to "Selected Only".', "wpbean-product-gallery-slider-for-woocommerce")]
        })]
      })]
    }), showPickers && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
      className: "overflow-hidden rounded-xl border border-gray-200 bg-white",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(CategoriesSection, {
        categories: categories,
        selected: selectedCategories,
        onToggle: toggleCategory,
        isOpen: catOpen,
        onOpenToggle: () => setCatOpen(v => !v)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(ProductsSection, {
        selectedProducts: selectedProducts,
        onAdd: addProduct,
        onRemove: removeProduct,
        isOpen: prodOpen,
        onOpenToggle: () => setProdOpen(v => !v)
      }), totalSelected > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxs)("div", {
        className: "m-4 flex items-start gap-2.5 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          size: 14,
          className: "mt-px shrink-0 text-amber-500"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_13__.jsx)("p", {
          className: "text-[11.5px] leading-relaxed text-amber-700",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("If a product matches multiple rules, the rule with the highest ID (most recently created) will be applied.", "wpbean-product-gallery-slider-for-woocommerce")
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AssignmentsPanel);

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/panels/GalleryPanel.jsx"
/*!*************************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/panels/GalleryPanel.jsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GalleryPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/SettingsContext */ "./src/admin/pages/rulesDetails/context/SettingsContext.jsx");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/index */ "./src/admin/pages/rulesDetails/components/ui/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const ARROW_ICONS = [{
  value: "chevron",
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("polyline", {
      points: "15 18 9 12 15 6"
    })
  })
}, {
  value: "arrow",
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("line", {
      x1: "19",
      y1: "12",
      x2: "5",
      y2: "12"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("polyline", {
      points: "12 5 5 12 12 19"
    })]
  })
}, {
  value: "caret",
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      d: "M14 5L6 12L14 19Z",
      fill: "currentColor"
    })
  })
}, {
  value: "angle",
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
      d: "M15 19L8 12L15 5"
    })
  })
}, {
  value: "thin",
  label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("polyline", {
      points: "15 18 9 12 15 6"
    })
  })
}];
const THUMB_TRIGGERS = [{
  value: "click",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Click", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "hover",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover", "wpbean-product-gallery-slider-for-woocommerce")
}];
const THUMB_SLIDE_TYPES = [{
  value: "row",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide by Row", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "item",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide by Item", "wpbean-product-gallery-slider-for-woocommerce")
}];
const THUMB_POSITIONS = [{
  value: "bottom",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "top",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "left",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "right",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "wpbean-product-gallery-slider-for-woocommerce")
}];
const THUMB_LAYOUTS = [{
  value: "slider",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slider", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "grid",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid", "wpbean-product-gallery-slider-for-woocommerce")
}];
const THUMB_ALIGNMENTS_HORIZONTAL = [{
  value: "left",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "center",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "right",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "wpbean-product-gallery-slider-for-woocommerce")
}];
const THUMB_ALIGNMENTS_VERTICAL = [{
  value: "left",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "center",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "right",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "wpbean-product-gallery-slider-for-woocommerce")
}];
const IMAGE_SIZES = [{
  value: "thumbnail",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnail (150×150)", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "medium",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Medium (300×300)", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "medium_large",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Medium Large (768px)", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "large",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Large (1024px)", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "woocommerce_thumbnail",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("WC Thumbnail", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "woocommerce_single",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("WC Single", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "woocommerce_gallery_thumbnail",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("WC Gallery Thumbnail", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "full",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Full (original)", "wpbean-product-gallery-slider-for-woocommerce")
}];
const HEIGHT_MODES = [{
  value: "lock",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lock", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "adaptive",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Adaptive", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "fixed",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fixed", "wpbean-product-gallery-slider-for-woocommerce")
}];
const IMG_FITS = [{
  value: "contain",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contain", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "cover",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cover", "wpbean-product-gallery-slider-for-woocommerce")
}];
const TRANSITIONS = [{
  value: "fade",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fade", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "slide",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "zoom",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "none",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "wpbean-product-gallery-slider-for-woocommerce")
}];
const SLIDE_DIRECTIONS = [{
  value: "horizontal",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Horizontal", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "vertical",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vertical", "wpbean-product-gallery-slider-for-woocommerce")
}];
const PAGINATION_TYPES = [{
  value: "dots",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dots", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "progressbar",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Progress Bar", "wpbean-product-gallery-slider-for-woocommerce"),
  premium: true
}, {
  value: "count",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Count", "wpbean-product-gallery-slider-for-woocommerce"),
  premium: true
}];
const PAGINATION_POSITIONS = [{
  value: "bottom",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "top",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "left",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "right",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "wpbean-product-gallery-slider-for-woocommerce")
}];
const GALLERY_TYPES = [{
  value: "thumbnail",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnail Gallery", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "hierarchy-grid",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hierarchy Grid", "wpbean-product-gallery-slider-for-woocommerce"),
  premium: true
}, {
  value: "anchor",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anchor Navigation", "wpbean-product-gallery-slider-for-woocommerce"),
  premium: true
}, {
  value: "sticky-split",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sticky Split", "wpbean-product-gallery-slider-for-woocommerce"),
  premium: true
}, {
  value: "tiles",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tiles", "wpbean-product-gallery-slider-for-woocommerce"),
  premium: true
}];
const THUMB_ASPECTS = [{
  value: "auto",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "1/1",
  label: "1:1"
}, {
  value: "4/3",
  label: "4:3"
}, {
  value: "3/2",
  label: "3:2"
}, {
  value: "3/4",
  label: "3:4"
}, {
  value: "2/3",
  label: "2:3"
}];
const TILES_ITEM_ASPECTS = [{
  value: "auto",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "1/1",
  label: "1:1"
}, {
  value: "4/3",
  label: "4:3"
}, {
  value: "3/2",
  label: "3:2"
}, {
  value: "16/9",
  label: "16:9"
}];
const SS_MAIN_SIDES = [{
  value: "left",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "right",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "wpbean-product-gallery-slider-for-woocommerce")
}];
const SS_ITEM_ASPECTS = [{
  value: "auto",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "1/1",
  label: "1:1"
}, {
  value: "4/3",
  label: "4:3"
}, {
  value: "3/2",
  label: "3:2"
}, {
  value: "16/9",
  label: "16:9"
}];
const SS_CLICK_ACTIONS = [{
  value: "lightbox",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lightbox", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "none",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "wpbean-product-gallery-slider-for-woocommerce")
}];
const HG_ITEM_ASPECTS = [{
  value: "auto",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "1/1",
  label: "1:1"
}, {
  value: "4/3",
  label: "4:3"
}, {
  value: "3/2",
  label: "3:2"
}, {
  value: "16/9",
  label: "16:9"
}];

// ── General sub-panel ─────────────────────────────────────────────────────────

function GeneralSubPanel({
  settings,
  s,
  actions,
  gallerySubTab
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "space-y-5",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gallery Type", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose the overall gallery layout. Thumbnail Gallery shows images alongside a strip of clickable thumbnails. Anchor Navigation stacks all images vertically with dot navigation. Sticky Split shows a sticky main viewer alongside a vertically scrollable column of full-size images.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gallery Type", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sets the primary display mode for the product gallery.", "wpbean-product-gallery-slider-for-woocommerce"),
        className: "flex flex-col items-start gap-2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: GALLERY_TYPES,
          value: settings.galleryType,
          className: "grid grid-cols-2 wpsm:inline-flex wpsm:items-center",
          onChange: v => {
            s("galleryType", v);
            if (v === "anchor") {
              if (["top", "bottom"].includes(settings.thumbnailPosition)) {
                s("thumbnailPosition", "left");
              }
              // anchor only supports left/right position
              if (!["left", "right"].includes(settings.mainImagePaginationPosition)) {
                s("mainImagePaginationPosition", "left");
              }
              // anchor dots always require "dots" type
              if (settings.mainImagePaginationType !== "dots") {
                s("mainImagePaginationType", "dots");
              }
              if (gallerySubTab === "transition") {
                actions.setGallerySubTab("general");
              }
            }
            if (v !== "anchor") {
              // count/progressbar only support top/bottom; reset if leaving anchor with left/right
              if ((settings.mainImagePaginationType === "count" || settings.mainImagePaginationType === "progressbar") && ["left", "right"].includes(settings.mainImagePaginationPosition)) {
                s("mainImagePaginationPosition", "bottom");
              }
            }
            if (v === "sticky-split") {
              if (gallerySubTab === "transition") {
                actions.setGallerySubTab("general");
              }
            }
            if (v === "hierarchy-grid") {
              if (gallerySubTab === "transition") {
                actions.setGallerySubTab("general");
              }
            }
            if (v === "tiles") {
              if (["transition", "thumbnails", "main-image", "navigation"].includes(gallerySubTab)) {
                actions.setGallerySubTab("general");
              }
            }
            if (v !== "tiles") {
              // If switching away from tiles while on tiles sub-tab, go back to general
              if (gallerySubTab === "tiles") {
                actions.setGallerySubTab("general");
              }
            }
          }
        })
      })
    })
  });
}

// ── Thumbnails sub-panel ──────────────────────────────────────────────────────

function ThumbnailsSubPanel({
  settings,
  s
}) {
  const showThumbs = settings.thumbnailShow !== false;
  const isSlider = settings.thumbnailLayout === "slider";
  const isGrid = settings.thumbnailLayout === "grid";
  const isSidePos = ["left", "right"].includes(settings.thumbnailPosition);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnail Image Size", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose which WordPress-registered image size is loaded for thumbnail items.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnail Image", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image size used for the thumbnail strip items.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SelectInput, {
          options: IMAGE_SIZES,
          value: settings.thumbnailImageSize,
          onChange: v => s("thumbnailImageSize", v)
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnails", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Configure gallery thumbnail position and layout.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Thumbnails", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display the thumbnail strip alongside the main product image.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.thumbnailShow !== false,
          onChange: v => s("thumbnailShow", v)
        })
      }), showThumbs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Layout", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How thumbnails are arranged.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
            options: THUMB_LAYOUTS,
            value: settings.thumbnailLayout,
            onChange: v => s("thumbnailLayout", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Position", "wpbean-product-gallery-slider-for-woocommerce"),
          description: settings.galleryType === "anchor" ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Where thumbnails appear relative to the stacked images. Only left and right are supported for Anchor Navigation.", "wpbean-product-gallery-slider-for-woocommerce") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Where thumbnails appear relative to the main image.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
            options: settings.galleryType === "anchor" ? THUMB_POSITIONS.filter(p => p.value === "left" || p.value === "right") : THUMB_POSITIONS,
            value: settings.galleryType === "anchor" && settings.thumbnailPosition !== "left" && settings.thumbnailPosition !== "right" ? "left" : settings.thumbnailPosition,
            onChange: v => s("thumbnailPosition", v)
          })
        }), settings.galleryType !== "anchor" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alignment", "wpbean-product-gallery-slider-for-woocommerce"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Position of thumbnails within the strip when they don't fill the full area. Has no effect when Fit to Main Image is on or when thumbnails overflow and scroll.", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
              options: isSidePos ? THUMB_ALIGNMENTS_VERTICAL : THUMB_ALIGNMENTS_HORIZONTAL,
              value: settings.thumbnailAlignment,
              onChange: v => s("thumbnailAlignment", v)
            })
          }), isSidePos && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Responsive Breakpoint", "wpbean-product-gallery-slider-for-woocommerce"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("When the gallery width drops below this value, left/right thumbnails move to the bottom. Set to 0 to disable.", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
              value: settings.thumbnailBreakpoint,
              onChange: v => s("thumbnailBreakpoint", v),
              min: 0,
              max: 2560,
              unit: "px",
              width: "w-24"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trigger", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How hovering or clicking a thumbnail swaps the main image.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
            options: THUMB_TRIGGERS,
            value: settings.thumbnailTrigger,
            onChange: v => s("thumbnailTrigger", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Entrance Animation", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnails fade and slide in with a staggered delay when the gallery first loads.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
            value: settings.thumbnailAnimation,
            onChange: v => s("thumbnailAnimation", v)
          })
        })]
      })]
    }), showThumbs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnail Size", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Set the dimensions of individual thumbnail images.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CSS display width of each thumbnail. Does not affect the image file loaded.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.thumbnailWidth,
            onChange: v => s("thumbnailWidth", v),
            min: 40,
            max: 300,
            unit: "px"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CSS display height of each thumbnail. Does not affect the image file loaded.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.thumbnailHeight,
            onChange: v => s("thumbnailHeight", v),
            min: 40,
            max: 300,
            unit: "px"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aspect Ratio", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Force a fixed aspect ratio on thumbnail items. When set, the height is derived from the width and this ratio overrides the Height setting.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
            options: THUMB_ASPECTS,
            value: settings.thumbnailAspectRatio ?? "auto",
            onChange: v => s("thumbnailAspectRatio", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gap", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space between thumbnail items.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.thumbnailGap,
            onChange: v => s("thumbnailGap", v),
            min: 0,
            max: 40,
            unit: "px"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded corner radius for thumbnails.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.thumbnailBorderRadius,
            onChange: v => s("thumbnailBorderRadius", v),
            min: 0,
            max: 50,
            unit: "px"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background color applied to each thumbnail item. When set, images use mix-blend-mode: darken so white backgrounds of product images blend away cleanly.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
            value: settings.thumbnailBackground ?? "",
            onChange: v => s("thumbnailBackground", v)
          })
        }), isSidePos && !settings.thumbnailFitToImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
          variant: "tip",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tip:", "wpbean-product-gallery-slider-for-woocommerce")
          }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("With a Left/Right position, enabling", "wpbean-product-gallery-slider-for-woocommerce"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("em", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fit to Main Image", "wpbean-product-gallery-slider-for-woocommerce")
          }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("is recommended — it scales thumbnails to fill the full height of the main image for a cleaner look.", "wpbean-product-gallery-slider-for-woocommerce")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fit to Main Image", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stretch or shrink thumbnails to fill the full width (or height for left/right) of the main image area.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
            value: settings.thumbnailFitToImage,
            onChange: v => s("thumbnailFitToImage", v)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Active Thumbnail", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Styling applied to the currently selected thumbnail.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Highlight Color", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border color shown on the active thumbnail.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
            value: settings.thumbnailActiveBorderColor,
            onChange: v => s("thumbnailActiveBorderColor", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Highlight Width", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thickness of the active thumbnail border.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.thumbnailActiveBorderWidth,
            onChange: v => s("thumbnailActiveBorderWidth", v),
            min: 1,
            max: 10,
            unit: "px"
          })
        })]
      }), isSlider && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slider Options", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Settings specific to the slider layout.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Navigation Arrows", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show previous/next arrow buttons on the thumbnail slider.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
            value: settings.thumbnailSliderButtons,
            onChange: v => s("thumbnailSliderButtons", v)
          })
        }), settings.thumbnailSliderButtons && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlay Arrows", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Position arrows over the slider edges so thumbnails fill the full strip width.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
            value: settings.thumbnailArrowsOverlay,
            onChange: v => s("thumbnailArrowsOverlay", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide Type", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide by Row moves a full visible page at once. Slide by Item moves one thumbnail at a time.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
            options: THUMB_SLIDE_TYPES,
            value: settings.thumbnailSlideType,
            onChange: v => s("thumbnailSlideType", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loop", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allow the slider to wrap around from the last thumbnail back to the first, and vice versa. The wrap-around uses a distinct fade animation.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
            value: settings.thumbnailLoop,
            onChange: v => s("thumbnailLoop", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Drag Navigation", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Click-and-drag or touch-drag to scroll through thumbnails.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
            value: settings.thumbnailDragNav !== false,
            onChange: v => s("thumbnailDragNav", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scroll Navigation", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Use the mouse wheel or trackpad to scroll through thumbnails. Scrolls vertically for left/right strips and horizontally for top/bottom strips.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
            value: settings.thumbnailScrollNav !== false,
            onChange: v => s("thumbnailScrollNav", v)
          })
        })]
      }), isGrid && settings.galleryType !== "anchor" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid Options", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Settings specific to the grid layout.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Columns", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number of columns in the thumbnail grid.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.thumbnailGridColumns,
            onChange: v => s("thumbnailGridColumns", v),
            min: 1,
            max: 8
          })
        })
      })]
    })]
  });
}

// ── Main Image sub-panel ──────────────────────────────────────────────────────

function MainImageSubPanel({
  settings,
  s
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image File Size", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose which WordPress-registered image size is served for the main product image. Larger sizes are sharper but slower.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Main Image", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image size used for the main product image display.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SelectInput, {
          options: IMAGE_SIZES,
          value: settings.mainImageSize,
          onChange: v => s("mainImageSize", v)
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Main Image", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Control the main product image display area.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [settings.galleryType !== "anchor" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height Mode", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lock freezes the height after the first item loads — prevents layout shift. Adaptive grows the container to fit the tallest item seen, never shrinking. Fixed sets an explicit pixel height.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: HEIGHT_MODES,
          value: settings.mainImageHeightMode,
          onChange: v => s("mainImageHeightMode", v)
        })
      }), settings.mainImageHeightMode === "fixed" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fixed Height", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Explicit height for the main image area in pixels.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.mainImageHeight || 0,
          onChange: v => s("mainImageHeight", v || 0),
          min: 100,
          max: 1200,
          unit: "px",
          width: "w-24"
        })
      }), settings.galleryType !== "anchor" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Fit", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How the image fills the display area.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: IMG_FITS,
          value: settings.mainImageFit,
          onChange: v => s("mainImageFit", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background shown behind the image.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
          value: settings.mainImageBackground,
          onChange: v => s("mainImageBackground", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Strip Gap", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space between the thumbnail strip and the main image area. Independent of the gap between individual thumbnail items.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.thumbnailStripGap,
          onChange: v => s("thumbnailStripGap", v),
          min: 0,
          max: 80,
          unit: "px",
          width: "w-24"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded corner radius of the main image and its container.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.mainImageBorderRadius,
          onChange: v => s("mainImageBorderRadius", v),
          min: 0,
          max: 80,
          unit: "px"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Width", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thickness of the border around the main image area.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.mainImageBorderWidth,
          onChange: v => s("mainImageBorderWidth", v),
          min: 0,
          max: 10,
          unit: "px"
        })
      }), settings.mainImageBorderWidth > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
          value: settings.mainImageBorderColor,
          onChange: v => s("mainImageBorderColor", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Drop Shadow", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Apply a soft shadow around the main image area.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.mainImageShadow,
          onChange: v => s("mainImageShadow", v)
        })
      })]
    })]
  });
}

// ── Navigation sub-panel ─────────────────────────────────────────────────────

function NavigationSubPanel({
  settings,
  s,
  actions
}) {
  // Write back a corrected position whenever galleryType or pagination type
  // makes the stored mainImagePaginationPosition invalid (e.g. "bottom" is
  // invalid for anchor; "left"/"right" are invalid for count/progressbar).
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!settings.mainImagePagination) return;
    const isTopBottomOnly = settings.mainImagePaginationType === "count" || settings.mainImagePaginationType === "progressbar";
    const posOpts = settings.galleryType === "anchor" ? PAGINATION_POSITIONS.filter(p => p.value === "left" || p.value === "right") : isTopBottomOnly ? PAGINATION_POSITIONS.filter(p => p.value === "bottom" || p.value === "top") : PAGINATION_POSITIONS;
    const isValid = posOpts.some(p => p.value === settings.mainImagePaginationPosition);
    if (!isValid && posOpts.length > 0) {
      s("mainImagePaginationPosition", posOpts[0].value);
    }
  }, [settings.galleryType, settings.mainImagePaginationType, settings.mainImagePagination, settings.mainImagePaginationPosition]);
  const isAnchor = settings.galleryType === "anchor";
  const isStickySplit = settings.galleryType === "sticky-split";
  const isThumbnail = settings.galleryType === "thumbnail";
  const isDots = settings.mainImagePaginationType === "dots";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "space-y-5",
    children: [isStickySplit && (settings.mainImageArrows || settings.mainImagePagination) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
      variant: "tip",
      children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("With", "wpbean-product-gallery-slider-for-woocommerce"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sticky Split", "wpbean-product-gallery-slider-for-woocommerce")
      }), ", ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("the scroll column acts as the primary navigation. It is recommended to keep", "wpbean-product-gallery-slider-for-woocommerce"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Navigation Arrows", "wpbean-product-gallery-slider-for-woocommerce")
      }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("and", "wpbean-product-gallery-slider-for-woocommerce"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pagination", "wpbean-product-gallery-slider-for-woocommerce")
      }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("disabled.", "wpbean-product-gallery-slider-for-woocommerce")]
    }), !isAnchor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Navigation Arrows", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Previous/next arrow buttons overlaid on the main image.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Arrows", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show previous/next arrow buttons on the main image. Syncs with the thumbnail strip.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.mainImageArrows,
          onChange: v => s("mainImageArrows", v)
        })
      }), settings.mainImageArrows && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto-hide", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide arrows when the cursor leaves the image. Turn off to keep them always visible.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
            value: settings.mainImageArrowsAutoHide,
            onChange: v => s("mainImageArrowsAutoHide", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Style", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose the shape of the arrow icon.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
            options: ARROW_ICONS,
            value: settings.mainImageArrowIcon ?? "chevron",
            onChange: v => s("mainImageArrowIcon", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Size", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Diameter of the arrow buttons.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.mainImageArrowSize ?? 40,
            onChange: v => s("mainImageArrowSize", v),
            min: 24,
            max: 80,
            unit: "px",
            width: "w-24"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Corner radius of the arrow buttons. 50% gives a circle, 0% gives a square.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.mainImageArrowBorderRadius ?? 50,
            onChange: v => s("mainImageArrowBorderRadius", v),
            min: 0,
            max: 50,
            unit: "%",
            width: "w-24"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Size", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Size of the arrow SVG icon inside the button.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.mainImageArrowIconSize ?? 18,
            onChange: v => s("mainImageArrowIconSize", v),
            min: 8,
            max: 40,
            unit: "px",
            width: "w-24"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button background color in normal state.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
            value: settings.mainImageArrowBg ?? "rgba(255,255,255,0.92)",
            onChange: v => s("mainImageArrowBg", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Color", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arrow icon color in normal state.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
            value: settings.mainImageArrowColor ?? "#1a1a1a",
            onChange: v => s("mainImageArrowColor", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Background", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Button background color on hover.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
            value: settings.mainImageArrowHoverBg ?? "rgba(0,0,0,0.82)",
            onChange: v => s("mainImageArrowHoverBg", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover Icon Color", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Arrow icon color on hover.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
            value: settings.mainImageArrowHoverColor ?? "#ffffff",
            onChange: v => s("mainImageArrowHoverColor", v)
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pagination", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dot, progress bar, or count indicators for the main image.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [isAnchor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dot Position", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Which side the scroll-linked navigation dots appear on.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: PAGINATION_POSITIONS.filter(p => p.value === "left" || p.value === "right"),
          value: ["left", "right"].includes(settings.mainImagePaginationPosition) ? settings.mainImagePaginationPosition : "left",
          onChange: v => s("mainImagePaginationPosition", v)
        })
      }), !isAnchor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Pagination", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show a pagination indicator for the main image for quick navigation.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
            value: settings.mainImagePagination,
            onChange: v => s("mainImagePagination", v)
          })
        }), settings.mainImagePagination && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style", "wpbean-product-gallery-slider-for-woocommerce"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dots are clickable indicators. Progress Bar shows a thin fill line. Count shows a numeric counter (e.g. 2 / 8) with arrow buttons.", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
              options: PAGINATION_TYPES,
              value: settings.mainImagePaginationType,
              onChange: v => {
                s("mainImagePaginationType", v);
                if ((v === "count" || v === "progressbar") && ["left", "right"].includes(settings.mainImagePaginationPosition)) {
                  s("mainImagePaginationPosition", "bottom");
                }
              }
            })
          }), isDots && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dot Size", "wpbean-product-gallery-slider-for-woocommerce"),
              description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Diameter of each dot. The active dot stretches proportionally.", "wpbean-product-gallery-slider-for-woocommerce"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
                value: settings.mainImageDotSize ?? 5,
                onChange: v => s("mainImageDotSize", v),
                min: 3,
                max: 16,
                unit: "px",
                width: "w-24"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dot Color", "wpbean-product-gallery-slider-for-woocommerce"),
              description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color of the inactive pagination dots.", "wpbean-product-gallery-slider-for-woocommerce"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
                value: settings.mainImageDotColor ?? "rgba(0,0,0,0.2)",
                onChange: v => s("mainImageDotColor", v)
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Active Dot Color", "wpbean-product-gallery-slider-for-woocommerce"),
              description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color of the currently active pagination dot.", "wpbean-product-gallery-slider-for-woocommerce"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
                value: settings.mainImageDotActiveColor ?? "rgba(0,0,0,0.82)",
                onChange: v => s("mainImageDotActiveColor", v)
              })
            })]
          }), (() => {
            const isTopBottomOnly = settings.mainImagePaginationType === "count" || settings.mainImagePaginationType === "progressbar";
            const posOpts = isTopBottomOnly ? PAGINATION_POSITIONS.filter(p => p.value === "bottom" || p.value === "top") : PAGINATION_POSITIONS;
            const safePos = posOpts.some(p => p.value === settings.mainImagePaginationPosition) ? settings.mainImagePaginationPosition : posOpts[0]?.value;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Position", "wpbean-product-gallery-slider-for-woocommerce"),
              description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Where the pagination appears. Progress Bar and Count support Top or Bottom only.", "wpbean-product-gallery-slider-for-woocommerce"),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
                options: posOpts,
                value: safePos,
                onChange: v => s("mainImagePaginationPosition", v)
              })
            });
          })(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto-hide", "wpbean-product-gallery-slider-for-woocommerce"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide pagination when the cursor leaves the image. Turn off to keep it always visible.", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
              value: settings.mainImagePaginationAutoHide,
              onChange: v => s("mainImagePaginationAutoHide", v)
            })
          })]
        })]
      })]
    }), (isThumbnail || isStickySplit) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Swipe & Scroll", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gesture and scroll-wheel navigation for the main image.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [!settings.zoomOnHover && !settings.touchZoom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Swipe / Drag Navigation", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Drag or swipe the main image to navigate between gallery items. Only available when Zoom on Hover and Touch Zoom are both disabled.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.mainImageSwipe,
          onChange: v => s("mainImageSwipe", v)
        })
      }), isThumbnail && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scroll Navigation", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Use the mouse scroll wheel to navigate between gallery images.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
            value: settings.mainImageScrollNav,
            onChange: v => s("mainImageScrollNav", v)
          })
        }), settings.mainImageScrollNav && settings.zoomOnHover && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
          variant: "tip",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Note:", "wpbean-product-gallery-slider-for-woocommerce")
          }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scroll Navigation works best when", "wpbean-product-gallery-slider-for-woocommerce"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
              type: "button",
              onClick: () => actions.setTab("zoom"),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom on Hover", "wpbean-product-gallery-slider-for-woocommerce")
            })
          }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("is disabled — enabling both at the same time could cause interference.", "wpbean-product-gallery-slider-for-woocommerce")]
        }), settings.mainImageScrollNav && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scroll Response Speed", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Minimum time between scroll-triggered navigations. Higher values slow down how fast scrolling moves through images.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.mainImageScrollNavDelay ?? 500,
            onChange: v => s("mainImageScrollNavDelay", v),
            min: 100,
            max: 2000,
            unit: "ms",
            width: "w-24"
          })
        })]
      })]
    }), settings.lightbox && settings.lightboxOnClick && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lightbox Button", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("The expand button that opens the full-screen lightbox viewer.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto-hide Expand Button", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide the lightbox expand button when the cursor leaves the image. Turn off to keep it always visible.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.lightboxButtonAutoHide,
          onChange: v => s("lightboxButtonAutoHide", v)
        })
      })
    })]
  });
}

// ── Transition sub-panel ─────────────────────────────────────────────────────

function TransitionSubPanel({
  settings,
  s
}) {
  const isSidePos = ["left", "right"].includes(settings.thumbnailPosition);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "space-y-5",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Transition", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Animation when switching between gallery images.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Effect", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: TRANSITIONS,
          value: settings.mainImageTransition,
          onChange: v => s("mainImageTransition", v)
        })
      }), settings.mainImageTransition === "slide" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide Direction", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Direction images slide when navigating between gallery items.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
            options: SLIDE_DIRECTIONS,
            value: settings.mainImageSlideDirection,
            onChange: v => s("mainImageSlideDirection", v)
          })
        }), isSidePos && settings.mainImageSlideDirection !== "vertical" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tip:", "wpbean-product-gallery-slider-for-woocommerce")
          }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("With a Left/Right thumbnail position, setting the slide direction to", "wpbean-product-gallery-slider-for-woocommerce"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("em", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vertical", "wpbean-product-gallery-slider-for-woocommerce")
          }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("complements the side-by-side layout better.", "wpbean-product-gallery-slider-for-woocommerce")]
        }), !isSidePos && settings.mainImageSlideDirection !== "horizontal" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tip:", "wpbean-product-gallery-slider-for-woocommerce")
          }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("With a Top/Bottom thumbnail position, setting the slide direction to", "wpbean-product-gallery-slider-for-woocommerce"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("em", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Horizontal", "wpbean-product-gallery-slider-for-woocommerce")
          }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("complements the stacked layout better.", "wpbean-product-gallery-slider-for-woocommerce")]
        })]
      }), settings.mainImageTransition !== "none" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duration", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How long the transition animation takes.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.mainImageTransitionDuration,
          onChange: v => s("mainImageTransitionDuration", v),
          min: 50,
          max: 2000,
          unit: "ms",
          width: "w-24"
        })
      })]
    })
  });
}

// ── Stacked Layout sub-panel ──────────────────────────────────────────────────

function StackedSubPanel({
  settings,
  s,
  actions
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stacked Layout", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Customise the Anchor Navigation (stacked) gallery layout and its dot pagination.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Item Gap", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vertical space between each stacked gallery item.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.stackedItemGap,
          onChange: v => s("stackedItemGap", v),
          min: 0,
          max: 120,
          unit: "px",
          width: "w-24"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Navigation Type", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Navigation type for the Stacked Layout. Dot Navigation places clickable dots on the side for navigation. Thumbnails shows a vertical strip of thumbnail images instead.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: [{
            value: "dots",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dot", "wpbean-product-gallery-slider-for-woocommerce")
          }, {
            value: "thumbs",
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnail", "wpbean-product-gallery-slider-for-woocommerce")
          }],
          value: settings.stackedNavigationType,
          onChange: v => s("stackedNavigationType", v)
        })
      }), settings.stackedNavigationType === "thumbs" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sticky Offset", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Distance from the top of the viewport when the thumbnail strip is sticky (left/right positions only).", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.stackedThumbsStickyTop,
          onChange: v => s("stackedThumbsStickyTop", v),
          min: 0,
          max: 500,
          unit: "px",
          width: "w-24"
        })
      }), settings.stackedNavigationType === "thumbs" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
        className: "mt-2 mb-2",
        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Go to the", "wpbean-product-gallery-slider-for-woocommerce"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          type: "button",
          onClick: () => actions.setGallerySubTab("thumbnails"),
          className: "font-medium text-blue-600 underline underline-offset-2 hover:text-blue-700",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnails tab", "wpbean-product-gallery-slider-for-woocommerce")
        }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("and adjust the thumbnail settings there to style the thumbnail navigation for the stacked layout.", "wpbean-product-gallery-slider-for-woocommerce")]
      }), settings.stackedNavigationType === "dots" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dot Navigation", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlay dots float on top of the images. Outside places them in a separate column beside the gallery.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
            options: [{
              value: "overlay",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlay", "wpbean-product-gallery-slider-for-woocommerce")
            }, {
              value: "outside",
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outside", "wpbean-product-gallery-slider-for-woocommerce")
            }],
            value: settings.stackedDotsPosition,
            onChange: v => s("stackedDotsPosition", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dot Gap", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space between the pagination dots.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.stackedDotGap,
            onChange: v => s("stackedDotGap", v),
            min: 2,
            max: 30,
            unit: "px",
            width: "w-24"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dot Size", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Diameter of each pagination dot.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.stackedDotSize,
            onChange: v => s("stackedDotSize", v),
            min: 4,
            max: 24,
            unit: "px",
            width: "w-24"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dot Color", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color of the inactive pagination dots.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
            value: settings.stackedDotColor,
            onChange: v => s("stackedDotColor", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Active Dot Color", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color of the currently active pagination dot.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
            value: settings.stackedDotActiveColor,
            onChange: v => s("stackedDotActiveColor", v)
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover zoom for the stacked images. Uses the zoom type and settings from the Zoom tab.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom on Hover", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable zoom when hovering over each image in the stacked gallery. Requires Zoom on Hover to be enabled in the Zoom tab.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.anchorZoom !== false,
          onChange: v => s("anchorZoom", v)
        })
      }), settings.anchorZoom !== false && !settings.zoomOnHover && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
        variant: "tip",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom on Hover", "wpbean-product-gallery-slider-for-woocommerce")
        }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("is currently disabled in the Zoom tab. Enable it there for this setting to take effect.", "wpbean-product-gallery-slider-for-woocommerce")]
      })]
    })]
  });
}

// ── Hierarchy Grid sub-panel ──────────────────────────────────────────────────

function HierarchyGridSubPanel({
  settings,
  s
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid Layout", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Configure the hierarchy grid below the hero image. The first gallery image is always displayed full-width; remaining images fill a multi-column grid.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid Columns", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number of columns in the grid below the hero image.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.hierarchyGridColumns,
          onChange: v => s("hierarchyGridColumns", v),
          min: 1,
          max: 6,
          width: "w-20"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gap", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space between the hero image and grid items, and between grid items.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.hierarchyGridGap,
          onChange: v => s("hierarchyGridGap", v),
          min: 0,
          max: 80,
          unit: "px",
          width: "w-24"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Item Border Radius", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded corner radius applied to each grid item.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.hierarchyGridItemBorderRadius,
          onChange: v => s("hierarchyGridItemBorderRadius", v),
          min: 0,
          max: 60,
          unit: "px",
          width: "w-24"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid Item Style", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Control how images inside the grid cells are sized and fitted.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aspect Ratio", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enforce a fixed aspect ratio on grid items. Auto uses each image's natural dimensions.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: HG_ITEM_ASPECTS,
          value: settings.hierarchyGridItemAspect,
          onChange: v => s("hierarchyGridItemAspect", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Fit", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How images fill the grid item area when an aspect ratio is enforced.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: IMG_FITS,
          value: settings.hierarchyGridItemFit,
          onChange: v => s("hierarchyGridItemFit", v)
        })
      })]
    }), settings.zoomOnHover !== false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover zoom for individual images in the hierarchy grid. Uses the zoom type and settings from the Zoom tab.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom on Hover", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable zoom when hovering over each image in the grid. Requires Zoom on Hover to be enabled in the Zoom tab.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.hierarchyGridZoom !== false,
          onChange: v => s("hierarchyGridZoom", v)
        })
      }), settings.hierarchyGridZoom !== false && !settings.zoomOnHover && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
        variant: "tip",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom on Hover", "wpbean-product-gallery-slider-for-woocommerce")
        }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("is currently disabled in the Zoom tab. Enable it there for this setting to take effect.", "wpbean-product-gallery-slider-for-woocommerce")]
      })]
    })]
  });
}

// ── Sticky Split sub-panel ────────────────────────────────────────────────────

function StickySplitSubPanel({
  settings,
  s
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Layout", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Configure the two-column sticky split layout. The sticky column holds the main image viewer; the scroll column shows all images full-size.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Main Side", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Which column holds the sticky image viewer.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: SS_MAIN_SIDES,
          value: settings.stickySplitMainSide,
          onChange: v => s("stickySplitMainSide", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Main Column Width", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Percentage of the total gallery width used by the sticky viewer column.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.stickySplitMainWidthPercent,
          onChange: v => s("stickySplitMainWidthPercent", v),
          min: 20,
          max: 80,
          unit: "%",
          width: "w-24"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Column Gap", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space between the sticky viewer column and the scroll column.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.stickySplitGap,
          onChange: v => s("stickySplitGap", v),
          min: 0,
          max: 120,
          unit: "px",
          width: "w-24"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sticky Top Offset", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Distance from the top of the viewport when the main viewer is in sticky position.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.stickySplitStickyTop,
          onChange: v => s("stickySplitStickyTop", v),
          min: 0,
          max: 300,
          unit: "px",
          width: "w-24"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Click Sync", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("When enabled, clicking a scroll item also swaps the sticky viewer to that image. Independent of the lightbox click action.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.stickySplitClickSync,
          onChange: v => s("stickySplitClickSync", v)
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Scroll Column", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Style the full-size images in the scrollable column.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Item Gap", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vertical space between images in the scroll column.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.stickySplitScrollItemGap,
          onChange: v => s("stickySplitScrollItemGap", v),
          min: 0,
          max: 120,
          unit: "px",
          width: "w-24"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aspect Ratio", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enforce a fixed aspect ratio on scroll items. Auto uses each image's natural ratio.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: SS_ITEM_ASPECTS,
          value: settings.stickySplitScrollItemAspect,
          onChange: v => s("stickySplitScrollItemAspect", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Fit", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How images fill the scroll item area when an aspect ratio is enforced.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: IMG_FITS,
          value: settings.stickySplitScrollItemFit,
          onChange: v => s("stickySplitScrollItemFit", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded corner radius applied to each scroll item.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.stickySplitScrollItemBorderRadius,
          onChange: v => s("stickySplitScrollItemBorderRadius", v),
          min: 0,
          max: 60,
          unit: "px",
          width: "w-24"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Include Main Image", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show the main product image as the first item in the scroll column. When disabled, the scroll column starts from the second gallery image.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.stickySplitShowMainInScroll === true,
          onChange: v => s("stickySplitShowMainInScroll", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Captions", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display caption text below each scroll item.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.stickySplitShowCaption,
          onChange: v => s("stickySplitShowCaption", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom on Hover", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable zoom when hovering over images in the scroll column. Uses the same zoom type configured for the main viewer.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.stickySplitThumbZoom,
          onChange: v => s("stickySplitThumbZoom", v)
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Click Action", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("What happens when a scroll item is clicked.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("On Click", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open the lightbox viewer, or disable click interaction.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: SS_CLICK_ACTIONS,
          value: settings.stickySplitClickAction,
          onChange: v => s("stickySplitClickAction", v)
        })
      })
    })]
  });
}

// ── Tiles sub-panel ───────────────────────────────────────────────────────────

function TilesSubPanel({
  settings,
  s
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tiles Grid", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("All product images are displayed as equal-sized tiles in a grid. A Show More / Show Less button controls how many tiles are visible at once.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Columns", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number of equal-width columns in the tiles grid.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.tilesColumns,
          onChange: v => s("tilesColumns", v),
          min: 1,
          max: 6,
          width: "w-20"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gap", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space between tiles.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.tilesGap,
          onChange: v => s("tilesGap", v),
          min: 0,
          max: 80,
          unit: "px",
          width: "w-24"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Aspect Ratio", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enforce a fixed aspect ratio on each tile. Auto uses each image's natural dimensions.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: TILES_ITEM_ASPECTS,
          value: settings.tilesItemAspect,
          onChange: v => s("tilesItemAspect", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Fit", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How images fill the tile area when an aspect ratio is enforced.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: IMG_FITS,
          value: settings.tilesItemFit,
          onChange: v => s("tilesItemFit", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded corner radius applied to each tile.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.tilesItemBorderRadius,
          onChange: v => s("tilesItemBorderRadius", v),
          min: 0,
          max: 60,
          unit: "px",
          width: "w-24"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show More / Show Less", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Limit the initial number of visible tiles and let visitors reveal the rest with a button.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show More Button", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display a button at the bottom that reveals tiles beyond the initial count.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.tilesShowMoreEnabled !== false,
          onChange: v => s("tilesShowMoreEnabled", v)
        })
      }), settings.tilesShowMoreEnabled !== false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Initial Count", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number of tiles visible before the Show More button is clicked. Set to 0 to show all tiles.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.tilesInitialCount,
            onChange: v => s("tilesInitialCount", v),
            min: 0,
            max: 100,
            width: "w-24"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show More Text", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Label on the button that reveals hidden tiles.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.TextInput, {
            value: settings.tilesShowMoreText,
            onChange: v => s("tilesShowMoreText", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Less Text", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Label on the button that collapses tiles back to the initial count.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.TextInput, {
            value: settings.tilesShowLessText,
            onChange: v => s("tilesShowLessText", v)
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hover zoom for individual tiles. Uses the zoom type and settings from the Zoom tab.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom on Hover", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable zoom when hovering over each tile. Requires Zoom on Hover to be enabled in the Zoom tab.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.tilesZoom !== false,
          onChange: v => s("tilesZoom", v)
        })
      }), settings.tilesZoom !== false && !settings.zoomOnHover && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.InfoBox, {
        variant: "tip",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom on Hover", "wpbean-product-gallery-slider-for-woocommerce")
        }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("is currently disabled in the Zoom tab. Enable it there for this setting to take effect.", "wpbean-product-gallery-slider-for-woocommerce")]
      })]
    })]
  });
}

// ── Root panel — routes to the active sub-panel ───────────────────────────────

function GalleryPanel() {
  const {
    state: {
      settings,
      gallerySubTab
    },
    actions
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__.useSettings)();
  const s = (key, val) => actions.set(key, val);
  switch (gallerySubTab) {
    case "general":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GeneralSubPanel, {
        settings: settings,
        s: s,
        actions: actions,
        gallerySubTab: gallerySubTab
      });
    case "main-image":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MainImageSubPanel, {
        settings: settings,
        s: s
      });
    case "navigation":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(NavigationSubPanel, {
        settings: settings,
        actions: actions,
        s: s
      });
    case "transition":
      if (settings.galleryType === "anchor" || settings.galleryType === "sticky-split" || settings.galleryType === "hierarchy-grid" || settings.galleryType === "tiles") {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(GeneralSubPanel, {
          settings: settings,
          s: s,
          actions: actions,
          gallerySubTab: gallerySubTab
        });
      }
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TransitionSubPanel, {
        settings: settings,
        s: s
      });
    case "stacked":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StackedSubPanel, {
        settings: settings,
        s: s,
        actions: actions
      });
    case "sticky-split":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(StickySplitSubPanel, {
        settings: settings,
        s: s
      });
    case "hierarchy-grid":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HierarchyGridSubPanel, {
        settings: settings,
        s: s
      });
    case "tiles":
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(TilesSubPanel, {
        settings: settings,
        s: s
      });
    default:
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ThumbnailsSubPanel, {
        settings: settings,
        s: s
      });
  }
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/panels/GeneralPanel.jsx"
/*!*************************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/panels/GeneralPanel.jsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GeneralPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/SettingsContext */ "./src/admin/pages/rulesDetails/context/SettingsContext.jsx");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/index */ "./src/admin/pages/rulesDetails/components/ui/index.jsx");
/* harmony import */ var _utils_isPremium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/isPremium */ "./src/admin/pages/rulesDetails/utils/isPremium.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function GeneralPanel() {
  const {
    state: {
      settings
    },
    actions
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__.useSettings)();
  const s = (key, val) => actions.set(key, val);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Variation Images", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Control how product variation images interact with the gallery.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Variation Image Change", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Automatically swap the main image and add a gallery entry when a product variation with its own image is selected.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.variationImageChange,
          onChange: v => s("variationImageChange", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
          className: "inline-flex items-center gap-1.5",
          children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Variation Gallery", "wpbean-product-gallery-slider-for-woocommerce"), !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ProBadge, {})]
        }),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allow each variation to have its own set of gallery thumbnail images. When a variation is selected the entire gallery is replaced with the variation's images. Requires the gallery field to be filled in on each product variation.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.variationGallery,
          onChange: v => s("variationGallery", v),
          disabled: !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)()
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Performance", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Control image loading behavior.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preload Images", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preload all gallery and zoom images in the background on page load for a smoother experience.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.preloadImages,
          onChange: v => s("preloadImages", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom Before Image Loads", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allow zoom to activate immediately without waiting for the image to finish loading. Off by default — disabling the wait ensures zoom window sizing is always accurate.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.zoomBeforeLoad,
          onChange: v => s("zoomBeforeLoad", v)
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loading Spinner", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show an animated spinner while images are loading.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Spinner", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display a loading indicator while images are being fetched.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.spinner,
          onChange: v => s("spinner", v)
        })
      }), settings.spinner && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spinner Color", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("The color of the loading spinner animation.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ColorInput, {
          value: settings.spinnerColor,
          onChange: v => s("spinnerColor", v)
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
        className: "inline-flex items-center gap-1.5",
        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sticky Summary", "wpbean-product-gallery-slider-for-woocommerce"), !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ProBadge, {})]
      }),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Keep the product summary (title, price, add-to-cart) fixed in the viewport while scrolling. Designed for wide-screen layouts where the gallery and summary sit side by side.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Apply sticky positioning to the product summary alongside the gallery.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.stackedStickyEnabled !== false && !!settings.stackedStickyEnabled,
          onChange: v => s("stackedStickyEnabled", v),
          disabled: !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)()
        })
      }), settings.stackedStickyEnabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: "Fix Theme Overflow",
          description: "Automatically override overflow:hidden on parent elements that would block the sticky effect. Disable if your theme layout breaks with this on.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.stackedStickyFixOverflow !== false,
            onChange: v => s("stackedStickyFixOverflow", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: "Summary Selector",
          description: "CSS selector for the product summary element. Default targets the standard WooCommerce summary div.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.TextInput, {
            value: settings.stackedStickySelector,
            onChange: v => s("stackedStickySelector", v),
            placeholder: ".summary.entry-summary",
            width: "w-52"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: "Top Offset",
          description: "Distance from the top of the viewport when the summary is in sticky position.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
            value: settings.stackedStickyTop,
            onChange: v => s("stackedStickyTop", v),
            min: 0,
            max: 300,
            unit: "px",
            width: "w-24"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: "Disable Below",
          description: "Viewport width below which sticky is disabled \u2014 keeps the effect large-screen only. Set to 0 to always enable.",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
            value: settings.stackedStickyBreakpoint,
            onChange: v => s("stackedStickyBreakpoint", v),
            min: 0,
            max: 2560,
            unit: "px",
            width: "w-24"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.InfoBox, {
          className: "mt-2 mb-2",
          children: ["Sticky summary works when the gallery and summary are in a ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
            children: "side-by-side flex or grid layout"
          }), " \u2014 the most common WooCommerce single-product template. If your theme stacks them vertically, this option has no visible effect."]
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/panels/LightboxPanel.jsx"
/*!**************************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/panels/LightboxPanel.jsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LightboxPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/SettingsContext */ "./src/admin/pages/rulesDetails/context/SettingsContext.jsx");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/index */ "./src/admin/pages/rulesDetails/components/ui/index.jsx");
/* harmony import */ var _utils_isPremium__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/isPremium */ "./src/admin/pages/rulesDetails/utils/isPremium.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const PAGINATION_TYPES = [{
  value: "thumbs",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnails", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "dots",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dots", "wpbean-product-gallery-slider-for-woocommerce")
}];
const BUTTON_POSITIONS = [{
  value: "bottom-right",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom Right", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "bottom-left",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom Left", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "top-right",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top Right", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "top-left",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top Left", "wpbean-product-gallery-slider-for-woocommerce")
}];
const LIGHTBOX_TRANSITIONS = [{
  value: "slide",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "fade",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fade", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "zoom",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "none",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "wpbean-product-gallery-slider-for-woocommerce")
}];
function LightboxPanel() {
  const {
    state: {
      settings
    },
    actions
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__.useSettings)();
  const s = (key, val) => actions.set(key, val);
  const enabled = settings.lightbox;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lightbox", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Full-screen image viewer overlay.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Lightbox", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allow product images to be opened in a full-screen lightbox.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.lightbox,
          onChange: v => s("lightbox", v)
        })
      })
    }), enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Opening Behaviour", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How and when the lightbox is triggered.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Expand Button", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display a fullscreen icon button on the main image.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxOnClick,
            onChange: v => s("lightboxOnClick", v)
          })
        }), settings.lightboxOnClick && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Expand Button Position", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Corner of the main image where the expand button is placed.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
            options: BUTTON_POSITIONS,
            value: settings.lightboxButtonPosition,
            onChange: v => s("lightboxButtonPosition", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Open on Image Click", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Also open the lightbox when clicking the main product image directly.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxOpenOnImageClick,
            onChange: v => s("lightboxOpenOnImageClick", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Close on Overlay Click", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Close the lightbox when clicking the dark background overlay.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxCloseOnOverlay,
            onChange: v => s("lightboxCloseOnOverlay", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Keyboard Navigation", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Use arrow keys to navigate and Escape to close the lightbox.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxKeyboard,
            onChange: v => s("lightboxKeyboard", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "inline-flex items-center gap-1.5",
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Swipe / Drag Navigation", "wpbean-product-gallery-slider-for-woocommerce"), !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ProBadge, {})]
          }),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Drag or swipe the lightbox image to navigate between images. Works on desktop (mouse drag) and mobile (touch swipe).", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxSwipe,
            onChange: v => s("lightboxSwipe", v),
            disabled: !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)()
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("What elements are shown inside the lightbox.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "inline-flex items-center gap-1.5",
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Single Image Mode", "wpbean-product-gallery-slider-for-woocommerce"), !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ProBadge, {})]
          }),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show only the clicked image in the lightbox instead of the full gallery.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxSingleImage,
            onChange: v => s("lightboxSingleImage", v),
            disabled: !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)()
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overlay Background", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background color and opacity of the dark backdrop behind the lightbox image.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ColorInput, {
            value: settings.lightboxOverlayColor,
            onChange: v => s("lightboxOverlayColor", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Navigation Arrows", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show previous and next arrow buttons for navigating between images.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxShowArrows,
            onChange: v => s("lightboxShowArrows", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "inline-flex items-center gap-1.5",
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loop Images", "wpbean-product-gallery-slider-for-woocommerce"), !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ProBadge, {})]
          }),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loop back to the first image after reaching the last.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxLoop,
            onChange: v => s("lightboxLoop", v),
            disabled: !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)()
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Counter", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show current position indicator (e.g. "2 / 5").', "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxShowCounter,
            onChange: v => s("lightboxShowCounter", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Caption", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show the image alt text as a caption below the image.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxShowCaption,
            onChange: v => s("lightboxShowCaption", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pagination", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show navigation indicators below the lightbox image.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxShowThumbnails,
            onChange: v => s("lightboxShowThumbnails", v)
          })
        }), settings.lightboxShowThumbnails && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pagination Style", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display as thumbnail images or simple dot indicators.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
            options: PAGINATION_TYPES,
            value: settings.lightboxPaginationType,
            onChange: v => s("lightboxPaginationType", v)
          })
        }), settings.lightboxShowThumbnails && settings.lightboxPaginationType === "thumbs" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnail Radius", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded corner radius of thumbnail strip items.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
            value: settings.lightboxThumbBorderRadius,
            onChange: v => s("lightboxThumbBorderRadius", v),
            min: 0,
            max: 50,
            unit: "px"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Radius", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded corner radius of the main lightbox image.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
            value: settings.lightboxImageBorderRadius,
            onChange: v => s("lightboxImageBorderRadius", v),
            min: 0,
            max: 80,
            unit: "px"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Toolbar Buttons", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buttons shown in the lightbox toolbar.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom In / Out", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show zoom in and zoom out buttons in the lightbox toolbar.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxZoomIn,
            onChange: v => s("lightboxZoomIn", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "inline-flex items-center gap-1.5",
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mouse Scroll Zoom", "wpbean-product-gallery-slider-for-woocommerce"), !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ProBadge, {})]
          }),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allow scrolling the mouse wheel to zoom in and out on the lightbox image.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxScrollZoom,
            onChange: v => s("lightboxScrollZoom", v),
            disabled: !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)()
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Autoplay Button", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show the slideshow play/pause toggle button in the toolbar.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxShowAutoplayButton,
            onChange: v => s("lightboxShowAutoplayButton", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fullscreen", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show the fullscreen toggle button.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxFullscreen,
            onChange: v => s("lightboxFullscreen", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "inline-flex items-center gap-1.5",
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Tools", "wpbean-product-gallery-slider-for-woocommerce"), !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ProBadge, {})]
          }),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show the center toolbar with rotate, flip, and 1:1 zoom buttons.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxImageTools,
            onChange: v => s("lightboxImageTools", v),
            disabled: !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)()
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "inline-flex items-center gap-1.5",
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share Button", "wpbean-product-gallery-slider-for-woocommerce"), !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)() && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ProBadge, {})]
          }),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show a share button in the toolbar that opens a menu with sharing and download options.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxShare,
            onChange: v => s("lightboxShare", v),
            disabled: !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_3__.isPremium)()
          })
        }), settings.lightboxShare && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Share on Facebook", "wpbean-product-gallery-slider-for-woocommerce"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Include 'Share on Facebook' in the share menu.", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
              value: settings.lightboxShareFacebook,
              onChange: v => s("lightboxShareFacebook", v)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tweet", "wpbean-product-gallery-slider-for-woocommerce"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Include 'Tweet' (Twitter/X) in the share menu.", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
              value: settings.lightboxShareTwitter,
              onChange: v => s("lightboxShareTwitter", v)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pin it", "wpbean-product-gallery-slider-for-woocommerce"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Include 'Pin it' (Pinterest) in the share menu.", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
              value: settings.lightboxSharePinterest,
              onChange: v => s("lightboxSharePinterest", v)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Download Image", "wpbean-product-gallery-slider-for-woocommerce"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Include 'Download image' in the share menu.", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
              value: settings.lightboxShareDownload,
              onChange: v => s("lightboxShareDownload", v)
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Animation", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Transition effect and speed for lightbox.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Effect", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Animation style when navigating between images.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
            options: LIGHTBOX_TRANSITIONS,
            value: settings.lightboxTransition,
            onChange: v => s("lightboxTransition", v)
          })
        }), settings.lightboxTransition !== "none" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duration", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Length of the open/close and navigation animations.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
            value: settings.lightboxAnimationDuration,
            onChange: v => s("lightboxAnimationDuration", v),
            min: 0,
            max: 2000,
            unit: "ms",
            width: "w-24"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom From Image", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Animate the lightbox opening and closing by zooming from/to the source image position.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxZoomOrigin,
            onChange: v => s("lightboxZoomOrigin", v)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slideshow", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto-advance through images automatically.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Autoplay", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Automatically advance to the next image at a set interval.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.lightboxAutoplay,
            onChange: v => s("lightboxAutoplay", v)
          })
        }), settings.lightboxAutoplay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide Interval", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Time between slides during autoplay.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
            value: settings.lightboxAutoplayDelay,
            onChange: v => s("lightboxAutoplayDelay", v),
            min: 500,
            max: 30000,
            unit: "ms",
            width: "w-24"
          })
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/panels/MobilePanel.jsx"
/*!************************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/panels/MobilePanel.jsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobilePanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/SettingsContext */ "./src/admin/pages/rulesDetails/context/SettingsContext.jsx");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/index */ "./src/admin/pages/rulesDetails/components/ui/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const MOBILE_PG_POSITIONS = [{
  value: "bottom",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "left",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "right",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "wpbean-product-gallery-slider-for-woocommerce")
}];
const MOBILE_THUMB_POSITIONS = [{
  value: "bottom",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "top",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "left",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "right",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "wpbean-product-gallery-slider-for-woocommerce")
}];
function MobilePanel() {
  const {
    state: {
      settings
    },
    actions
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__.useSettings)();
  const s = (key, val) => actions.set(key, val);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mobile Fallback", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Below this breakpoint, Anchor Navigation and Sticky Split galleries collapse to a standard carousel. The Thumbnail Gallery applies mobile-specific arrow, pagination, and thumbnail settings instead.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mobile Breakpoint", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Viewport width below which mobile settings take effect. Anchor and Sticky Split switch to a standard carousel; Thumbnail Gallery applies the mobile navigation and thumbnail options below. Set to 0 to disable.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
          value: settings.mobileBreakpoint,
          onChange: v => s("mobileBreakpoint", v),
          min: 0,
          max: 1280,
          unit: "px",
          width: "w-24"
        })
      }), settings.mobileBreakpoint > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Navigation Arrows", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show previous/next arrow buttons on the mobile carousel. Independent of the desktop arrow setting.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.mobileArrows !== false,
            onChange: v => s("mobileArrows", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dot Pagination", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show dot indicators below the mobile carousel for quick navigation.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.mobilePagination !== false,
            onChange: v => s("mobilePagination", v)
          })
        }), settings.mobilePagination !== false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dot Position", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Where the pagination dots appear in the mobile carousel.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
            options: MOBILE_PG_POSITIONS,
            value: settings.mobilePaginationPosition || "bottom",
            onChange: v => s("mobilePaginationPosition", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Thumbnails", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show the thumbnail strip in the mobile carousel fallback. Off by default for a cleaner mobile experience.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
            value: settings.mobileShowThumbs,
            onChange: v => s("mobileShowThumbs", v)
          })
        }), settings.mobileShowThumbs && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnail Position", "wpbean-product-gallery-slider-for-woocommerce"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Where the thumbnail strip appears on mobile. Independent of the desktop thumbnail position.", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
              options: MOBILE_THUMB_POSITIONS,
              value: settings.mobileThumbnailPosition || "bottom",
              onChange: v => s("mobileThumbnailPosition", v)
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnail Width", "wpbean-product-gallery-slider-for-woocommerce"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width of each thumbnail item on mobile. Set to 0 to use the desktop thumbnail width.", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
              value: settings.mobileThumbnailWidth,
              onChange: v => s("mobileThumbnailWidth", v),
              min: 0,
              max: 300,
              unit: "px",
              width: "w-24"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnail Height", "wpbean-product-gallery-slider-for-woocommerce"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height of each thumbnail item on mobile. Set to 0 to use the desktop thumbnail height.", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
              value: settings.mobileThumbnailHeight,
              onChange: v => s("mobileThumbnailHeight", v),
              min: 0,
              max: 300,
              unit: "px",
              width: "w-24"
            })
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Touch Zoom", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pinch-to-zoom behavior on touch devices.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Touch Zoom", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Allow users to pinch to zoom the main image on mobile and tablet devices.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.touchZoom,
          onChange: v => s("touchZoom", v)
        })
      }), settings.touchZoom && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Minimum Scale", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Minimum zoom level (1 = original size).", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
            value: settings.touchZoomMin,
            onChange: v => s("touchZoomMin", v),
            min: 1,
            max: 3,
            step: 0.1
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maximum Scale", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Maximum zoom level users can reach by pinching.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
            value: settings.touchZoomMax,
            onChange: v => s("touchZoomMax", v),
            min: 1.5,
            max: 10,
            step: 0.5
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Swipe Navigation", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Swipe gesture settings for navigating the gallery.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Swipe Threshold", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Minimum swipe distance in pixels required to trigger a gallery slide.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
          value: settings.swipeThreshold,
          onChange: v => s("swipeThreshold", v),
          min: 10,
          max: 200,
          unit: "px"
        })
      })
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/panels/QuickStartPanel.jsx"
/*!****************************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/panels/QuickStartPanel.jsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ QuickStartPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/circle-check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/check.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/lock.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/SettingsContext */ "./src/admin/pages/rulesDetails/context/SettingsContext.jsx");
/* harmony import */ var _constants_galleryLayouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../constants/galleryLayouts */ "./src/admin/pages/rulesDetails/constants/galleryLayouts.jsx");
/* harmony import */ var _utils_isPremium__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/isPremium */ "./src/admin/pages/rulesDetails/utils/isPremium.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);







function ApplyModal({
  layout,
  onConfirm,
  onCancel
}) {
  const portalTarget = document.getElementById("wpbean-pgs-setting-rule-app");
  const modal = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "fixed inset-0 z-40 bg-black/40",
      onClick: onCancel
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "fixed inset-0 z-50 flex items-center justify-center p-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "w-full max-w-md rounded-xl bg-white shadow-2xl",
        onClick: e => e.stopPropagation(),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "p-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h2", {
            className: "text-[15px] font-semibold text-gray-900",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Apply "%s" layout?', "wpbean-product-gallery-slider-for-woocommerce"), layout.title)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "mt-2 text-[13px] leading-relaxed text-gray-600",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("This will replace your current gallery configuration with the %s preset defaults. Settings in other tabs (Zoom, Lightbox, Mobile, Video) will not be affected.", "wpbean-product-gallery-slider-for-woocommerce"), layout.title)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "mt-4 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              className: "mt-0.5 h-4 w-4 shrink-0 text-amber-500"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
                className: "text-[12px] font-semibold text-amber-800",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back up your current setup first", "wpbean-product-gallery-slider-for-woocommerce")
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
                className: "mt-0.5 text-[12px] leading-relaxed text-amber-700",
                children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("If your current gallery configuration is important, save this rule and use Duplicate (⋯ menu) to create a backup copy before applying. You can undo with Ctrl+Z before saving, but changes are permanent once saved.", "wpbean-product-gallery-slider-for-woocommerce")
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "flex justify-end gap-2 border-t border-gray-100 px-6 py-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
            type: "button",
            onClick: onCancel,
            className: "rounded-lg border border-gray-200 px-4 py-2 text-[13px] font-medium text-gray-700 transition-colors hover:bg-gray-50",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cancel", "wpbean-product-gallery-slider-for-woocommerce")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
            type: "button",
            onClick: onConfirm,
            className: "rounded-lg bg-blue-600 px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 active:bg-blue-800",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Apply Layout", "wpbean-product-gallery-slider-for-woocommerce")
          })]
        })]
      })
    })]
  });
  return portalTarget ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createPortal)(modal, portalTarget) : modal;
}
function QuickStartPanel() {
  const {
    actions
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_7__.useSettings)();
  const [pending, setPending] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [appliedId, setAppliedId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [showSuccess, setShowSuccess] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);

  // Auto-dismiss the success banner after 6 s
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!showSuccess) return;
    const t = setTimeout(() => setShowSuccess(false), 6000);
    return () => clearTimeout(t);
  }, [showSuccess]);
  const handleConfirm = () => {
    actions.applyLayout(pending.config);
    setAppliedId(pending.id);
    setShowSuccess(true);
    setPending(null);
  };
  const appliedLayout = _constants_galleryLayouts__WEBPACK_IMPORTED_MODULE_8__.GALLERY_LAYOUTS.find(l => l.id === appliedId);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [showSuccess && appliedLayout && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "mb-5 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "min-w-0 flex-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
          className: "text-[13px] font-semibold text-emerald-800",
          children: ["\"", appliedLayout.title, "\" layout applied"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
          className: "mt-0.5 text-[12px] leading-relaxed text-emerald-700",
          children: ["Gallery settings have been updated. Click", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong", {
            children: "Save Changes"
          }), " in the top bar to save, or visit the ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong", {
            children: "Gallery"
          }), " tab to fine-tune the options."]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
        type: "button",
        onClick: () => setShowSuccess(false),
        className: "flex h-5 w-5 shrink-0 items-center justify-center rounded text-emerald-400 transition-colors hover:text-emerald-600",
        "aria-label": "Dismiss",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: "h-3.5 w-3.5"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "mb-5",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("p", {
        className: "text-[13px] leading-relaxed text-gray-600",
        children: ["Pick a preset to instantly configure your gallery layout. You can fine-tune every option in the", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("strong", {
          children: "Gallery"
        }), " tab afterwards. Only gallery-related settings will be changed."]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "grid grid-cols-1 wpxs:grid-cols-2 wpsm:grid-cols-3 gap-4",
      children: _constants_galleryLayouts__WEBPACK_IMPORTED_MODULE_8__.GALLERY_LAYOUTS.map(layout => {
        const {
          id,
          title,
          description,
          Icon
        } = layout;
        const isApplied = appliedId === id;
        const isLocked = layout.premium && !(0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_9__.isPremium)();
        const upgradeUrl = window.WPBean_PGS_Options?.upgradeUrl || "#";
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          type: "button",
          onClick: () => {
            if (isLocked) {
              window.open(upgradeUrl, "_blank", "noopener,noreferrer");
            } else {
              setPending(layout);
            }
          },
          title: isLocked ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Available in Pro — click to upgrade", "wpbean-product-gallery-slider-for-woocommerce") : undefined,
          className: ["group relative flex flex-col overflow-hidden rounded-xl border bg-white text-start", "transition-all duration-200", "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500", isApplied ? "border-emerald-400 shadow-md" : isLocked ? "border-gray-200 hover:border-amber-300 hover:shadow-md" : "border-gray-200 hover:border-blue-300 hover:shadow-md"].join(" "),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
            className: ["flex items-center justify-center px-6 py-5 transition-colors", isApplied ? "bg-emerald-50" : isLocked ? "bg-gray-50 group-hover:bg-amber-50/40" : "bg-gray-50 group-hover:bg-blue-50/40"].join(" "),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
              className: isLocked ? "opacity-40" : "",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(Icon, {})
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "flex-1 px-3 py-2.5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
              className: ["text-[12.5px] font-semibold", isApplied ? "text-emerald-700" : isLocked ? "text-gray-400" : "text-gray-900 group-hover:text-blue-700"].join(" "),
              children: title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
              className: ["mt-0.5 text-[11px] leading-snug", isLocked ? "text-gray-300" : "text-gray-500"].join(" "),
              children: description
            })]
          }), isApplied && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
            className: "absolute end-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "h-3 w-3 text-white",
              strokeWidth: 2.5
            })
          }), isLocked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("span", {
            className: "absolute end-2 top-2 inline-flex items-center gap-0.5 rounded border border-amber-200 bg-amber-50 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-600",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
              size: 8,
              strokeWidth: 2.5
            }), "Pro"]
          })]
        }, id);
      })
    }), pending && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(ApplyModal, {
      layout: pending,
      onConfirm: handleConfirm,
      onCancel: () => setPending(null)
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/panels/VideoPanel.jsx"
/*!***********************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/panels/VideoPanel.jsx ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/SettingsContext */ "./src/admin/pages/rulesDetails/context/SettingsContext.jsx");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/index */ "./src/admin/pages/rulesDetails/components/ui/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function VideoPanel() {
  const {
    state: {
      settings
    },
    actions
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__.useSettings)();
  const s = (key, val) => actions.set(key, val);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How to Add Videos", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Videos are added per-product. Go to the product edit page in WooCommerce and use the 'Product Gallery Videos' metabox in the sidebar to add YouTube, Vimeo, or uploaded video files.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "mt-2 mb-2 flex items-start gap-2 rounded-md border border-blue-200 bg-blue-50 px-3 py-2.5 text-xs text-blue-800",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          className: "mt-0.5 size-3.5 shrink-0 text-blue-500",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("circle", {
            cx: "12",
            cy: "12",
            r: "10"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("line", {
            x1: "12",
            y1: "8",
            x2: "12",
            y2: "12"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("line", {
            x1: "12",
            y1: "16",
            x2: "12.01",
            y2: "16"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Videos appear after product images in the gallery thumbnail strip. Clicking a video thumbnail plays it in the main display area. These settings control playback behaviour across all products using this rule.", "wpbean-product-gallery-slider-for-woocommerce")
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("General", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Global video behaviour settings.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Video Position", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Where product videos appear in the gallery thumbnail strip — before or after product images.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          value: settings.videoPosition,
          onChange: v => s("videoPosition", v),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Start", "wpbean-product-gallery-slider-for-woocommerce"),
            value: "start"
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("End", "wpbean-product-gallery-slider-for-woocommerce"),
            value: "end"
          }]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Embed Playback", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Settings for YouTube and Vimeo embeds.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Autoplay", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Automatically start playing the embed when navigated to. Most browsers require the video to also be muted for autoplay to work.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.videoAutoplay,
          onChange: v => s("videoAutoplay", v)
        })
      }), settings.videoAutoplay && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Muted", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mute the embed by default. Required for autoplay in most browsers. Users can unmute inside the player.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.videoMuted,
          onChange: v => s("videoMuted", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loop", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Restart the video from the beginning when it ends.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.videoLoop,
          onChange: v => s("videoLoop", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hide Related Videos", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("For YouTube: hide suggested videos shown after the video ends (sets rel=0).", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.videoHideRelated,
          onChange: v => s("videoHideRelated", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Controls", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display the player controls bar inside the YouTube / Vimeo embed (play, pause, volume, fullscreen).", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.videoEmbedControls,
          onChange: v => s("videoEmbedControls", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fit to Container", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stretch the embed to fill the full width and height of the main image area. The video will be cropped as needed to remove any empty space.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.videoEmbedFitContainer,
          onChange: v => s("videoEmbedFitContainer", v)
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hosted Video", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Settings for video files uploaded to the WordPress media library.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Autoplay", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Automatically start playing the hosted video when navigated to. For silent autoplay, enable Muted as well.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.videoHostedAutoplay,
          onChange: v => s("videoHostedAutoplay", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Muted", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mute hosted videos by default. Required for autoplay in most browsers. Useful for background-style videos.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.videoHostedMuted,
          onChange: v => s("videoHostedMuted", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Controls", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display the browser's native video controls (play, pause, seek, volume).", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.videoControls,
          onChange: v => s("videoControls", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Loop", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Restart hosted videos from the beginning when they end.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.videoHostedLoop,
          onChange: v => s("videoHostedLoop", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fit to Container", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stretch the video to fill the full width and height of the main image area. The video will be cropped as needed to remove any empty space.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.videoHostedFitContainer,
          onChange: v => s("videoHostedFitContainer", v)
        })
      })]
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/panels/ZoomPanel.jsx"
/*!**********************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/panels/ZoomPanel.jsx ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/SettingsContext */ "./src/admin/pages/rulesDetails/context/SettingsContext.jsx");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/index */ "./src/admin/pages/rulesDetails/components/ui/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const ZOOM_TYPES = [{
  value: "lens",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lens", "wpbean-product-gallery-slider-for-woocommerce"),
  premium: true
}, {
  value: "window",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Window", "wpbean-product-gallery-slider-for-woocommerce"),
  premium: true
}, {
  value: "inner",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inner", "wpbean-product-gallery-slider-for-woocommerce")
}];
const LENS_SHAPES = [{
  value: "circle",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Circle", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "square",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Square", "wpbean-product-gallery-slider-for-woocommerce")
}];
const CURSORS = [{
  value: "crosshair",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Crosshair", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "zoom-in",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom-in", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "default",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "wpbean-product-gallery-slider-for-woocommerce")
}];
function ZoomPanel() {
  const {
    state: {
      settings
    },
    actions
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_1__.useSettings)();
  const s = (key, val) => actions.set(key, val);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Activation", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Control when zoom is triggered.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom on Hover", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Activate zoom when the cursor hovers over the main image.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.zoomOnHover,
          onChange: v => s("zoomOnHover", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cursor Style", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Mouse cursor appearance over the main image.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SelectInput, {
          options: CURSORS,
          value: settings.zoomCursor,
          onChange: v => s("zoomCursor", v)
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom Type", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Choose how the magnified image is displayed.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display Mode", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lens overlays the image, Window shows a separate panel, Inner zooms inside the image.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          options: ZOOM_TYPES,
          value: settings.zoomType,
          onChange: v => s("zoomType", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom Level", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Magnification multiplier applied to the full-size image.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
          value: settings.zoomLevel,
          onChange: v => s("zoomLevel", v),
          min: 1,
          max: 10,
          step: 0.5
        })
      })]
    }), settings.zoomType !== "inner" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Easing", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Smooth the zoom movement for a polished feel.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Easing", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Apply a smooth follow-through to zoom position updates.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.Toggle, {
          value: settings.zoomEasing,
          onChange: v => s("zoomEasing", v)
        })
      }), settings.zoomEasing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Easing Amount", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Easing lag factor. Higher values produce a slower, more fluid follow.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
          value: settings.zoomEasingAmount,
          onChange: v => s("zoomEasingAmount", v),
          min: 1,
          max: 50
        })
      })]
    }), settings.zoomType === "lens" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lens Appearance", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Customize the zoom lens overlay.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lens Size", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Diameter or width of the circular/square lens in pixels.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
          value: settings.lensSize,
          onChange: v => s("lensSize", v),
          min: 50,
          max: 500,
          unit: "px"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lens Shape", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Visual shape of the zoom lens.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ButtonGroup, {
          options: LENS_SHAPES,
          value: settings.lensShape,
          onChange: v => s("lensShape", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color of the lens border ring.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.ColorInput, {
          value: settings.lensBorderColor,
          onChange: v => s("lensBorderColor", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Width", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thickness of the lens border in pixels.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_2__.NumberInput, {
          value: settings.lensBorderWidth,
          onChange: v => s("lensBorderWidth", v),
          min: 0,
          max: 20,
          unit: "px"
        })
      })]
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/panels/ZoomWindowPanel.jsx"
/*!****************************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/panels/ZoomWindowPanel.jsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ZoomWindowPanel)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/info.js");
/* harmony import */ var _context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/SettingsContext */ "./src/admin/pages/rulesDetails/context/SettingsContext.jsx");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/index */ "./src/admin/pages/rulesDetails/components/ui/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const POSITIONS = [{
  value: "right",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "left",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "top",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "bottom",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "wpbean-product-gallery-slider-for-woocommerce")
}];
const SIZE_MODES = [{
  value: "auto",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "custom",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "match",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Match Image", "wpbean-product-gallery-slider-for-woocommerce")
}];
const CURSOR_SIZE_MODES = [{
  value: "auto",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto", "wpbean-product-gallery-slider-for-woocommerce")
}, {
  value: "custom",
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Custom", "wpbean-product-gallery-slider-for-woocommerce")
}];
function ZoomWindowPanel() {
  const {
    state: {
      settings
    },
    actions
  } = (0,_context_SettingsContext__WEBPACK_IMPORTED_MODULE_2__.useSettings)();
  const s = (key, val) => actions.set(key, val);
  if (settings.zoomType !== "window") {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "overflow-hidden rounded-xl border border-gray-200 bg-white p-10 text-center",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-blue-50",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
          className: "h-5 w-5 text-blue-500"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
        className: "text-sm font-semibold text-gray-800",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom Window is inactive", "wpbean-product-gallery-slider-for-woocommerce")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        className: "mt-1.5 text-sm text-gray-400",
        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Go to the", "wpbean-product-gallery-slider-for-woocommerce"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
          type: "button",
          onClick: () => actions.setTab("zoom"),
          className: "font-medium text-blue-600 underline underline-offset-2 hover:text-blue-700",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Zoom tab", "wpbean-product-gallery-slider-for-woocommerce")
        }), " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("and set the Display Mode to", "wpbean-product-gallery-slider-for-woocommerce"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
          className: "text-gray-600",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Window", "wpbean-product-gallery-slider-for-woocommerce")
        }), "."]
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "space-y-5",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Window Size", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dimensions of the floating zoom panel.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Size Mode", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto fits the available space while preserving image aspect ratio. Match Image mirrors the main image exactly. Custom uses your defined dimensions.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: SIZE_MODES,
          value: settings.zoomWindowSizeMode,
          onChange: v => s("zoomWindowSizeMode", v)
        })
      }), settings.zoomWindowSizeMode === "custom" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width of the zoom window in pixels.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.zoomWindowWidth,
            onChange: v => s("zoomWindowWidth", v),
            min: 100,
            max: 1200,
            unit: "px",
            width: "w-24"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height of the zoom window in pixels.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.zoomWindowHeight,
            onChange: v => s("zoomWindowHeight", v),
            min: 100,
            max: 1200,
            unit: "px",
            width: "w-24"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Position", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Where the zoom window appears relative to the main image.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Placement", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
          options: POSITIONS,
          value: settings.zoomWindowPosition,
          onChange: v => s("zoomWindowPosition", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Horizontal Offset", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Extra space between the image edge and the window.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.zoomWindowOffsetX,
          onChange: v => s("zoomWindowOffsetX", v),
          min: -100,
          max: 200,
          unit: "px"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vertical Offset", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Extra vertical space between the image edge and the window.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.zoomWindowOffsetY,
          onChange: v => s("zoomWindowOffsetY", v),
          min: -100,
          max: 200,
          unit: "px"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fade Easing", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Smooth the zoom window appearing and disappearing.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Enable Fade", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fade the zoom window in and out instead of snapping.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.zoomWindowFadeEasing,
          onChange: v => s("zoomWindowFadeEasing", v)
        })
      }), settings.zoomWindowFadeEasing && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fade Duration", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("How long the fade takes. Higher values are slower.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.zoomWindowFadeEasingAmount,
          onChange: v => s("zoomWindowFadeEasingAmount", v),
          min: 50,
          max: 2000,
          unit: "ms",
          width: "w-24"
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Window Style", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Visual appearance of the zoom window panel.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded corner radius of the window.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.zoomWindowBorderRadius,
          onChange: v => s("zoomWindowBorderRadius", v),
          min: 0,
          max: 50,
          unit: "px"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
          value: settings.zoomWindowBorderColor,
          onChange: v => s("zoomWindowBorderColor", v)
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Width", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thickness of the window border.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
          value: settings.zoomWindowBorderWidth,
          onChange: v => s("zoomWindowBorderWidth", v),
          min: 0,
          max: 10,
          unit: "px"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Drop Shadow", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Apply a soft box shadow around the zoom window.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.zoomWindowShadow,
          onChange: v => s("zoomWindowShadow", v)
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SectionCard, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cursor Overlay", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Selection-box indicator drawn on the main image to show what area the zoom window is displaying.", "wpbean-product-gallery-slider-for-woocommerce"),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Show Cursor", "wpbean-product-gallery-slider-for-woocommerce"),
        description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Display a selection box on the image while zooming.", "wpbean-product-gallery-slider-for-woocommerce"),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.Toggle, {
          value: settings.zoomWindowCursor,
          onChange: v => s("zoomWindowCursor", v)
        })
      }), settings.zoomWindowCursor && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Size Mode", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto accurately represents the visible zoom area. Custom lets you set any fixed size.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
            options: CURSOR_SIZE_MODES,
            value: settings.zoomWindowCursorSizeMode,
            onChange: v => s("zoomWindowCursorSizeMode", v)
          })
        }), settings.zoomWindowCursorSizeMode === "custom" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Width", "wpbean-product-gallery-slider-for-woocommerce"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fixed width of the cursor selection box.", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
              value: settings.zoomWindowCursorWidth,
              onChange: v => s("zoomWindowCursorWidth", v),
              min: 10,
              max: 600,
              unit: "px",
              width: "w-24"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Height", "wpbean-product-gallery-slider-for-woocommerce"),
            description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fixed height of the cursor selection box.", "wpbean-product-gallery-slider-for-woocommerce"),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
              value: settings.zoomWindowCursorHeight,
              onChange: v => s("zoomWindowCursorHeight", v),
              min: 10,
              max: 600,
              unit: "px",
              width: "w-24"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Radius", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rounded corner radius of the cursor box. Use 50% of its size for a circle.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.zoomWindowCursorBorderRadius,
            onChange: v => s("zoomWindowCursorBorderRadius", v),
            min: 0,
            max: 300,
            unit: "px"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill color inside the selection box. Use a semi-transparent color.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
            value: settings.zoomWindowCursorBg,
            onChange: v => s("zoomWindowCursorBg", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Color", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color of the selection box border.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.ColorInput, {
            value: settings.zoomWindowCursorBorderColor,
            onChange: v => s("zoomWindowCursorBorderColor", v)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.SettingRow, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border Width", "wpbean-product-gallery-slider-for-woocommerce"),
          description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thickness of the selection box border.", "wpbean-product-gallery-slider-for-woocommerce"),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_index__WEBPACK_IMPORTED_MODULE_3__.NumberInput, {
            value: settings.zoomWindowCursorBorderWidth,
            onChange: v => s("zoomWindowCursorBorderWidth", v),
            min: 0,
            max: 8,
            unit: "px"
          })
        })]
      })]
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/ui/InfoBox.jsx"
/*!****************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/ui/InfoBox.jsx ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InfoBox: () => (/* binding */ InfoBox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * components/ui/InfoBox.jsx
 * Contextual notice box used throughout the settings panels.
 *
 * variant="info"  — blue, circle-i icon  (default)
 * variant="tip"   — amber, triangle-warning icon
 */

function InfoBox({
  variant = "info",
  className = "",
  children
}) {
  const isInfo = variant === "info";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: `flex items-start gap-2 rounded-md border px-3 py-2.5 text-xs ${isInfo ? "border-blue-200 bg-blue-50 text-blue-800" : "border-amber-200 bg-amber-50 text-amber-800"}${className ? " " + className : ""}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: `mt-0.5 size-3.5 shrink-0 ${isInfo ? "text-blue-500" : "text-amber-500"}`,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: isInfo ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
          cx: "12",
          cy: "12",
          r: "10"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
          x1: "12",
          y1: "8",
          x2: "12",
          y2: "12"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
          x1: "12",
          y1: "16",
          x2: "12.01",
          y2: "16"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
          d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
          x1: "12",
          y1: "9",
          x2: "12",
          y2: "13"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
          x1: "12",
          y1: "17",
          x2: "12.01",
          y2: "17"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      children: children
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/components/ui/index.jsx"
/*!**************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/components/ui/index.jsx ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonGroup: () => (/* binding */ ButtonGroup),
/* harmony export */   ColorInput: () => (/* binding */ ColorInput),
/* harmony export */   InfoBox: () => (/* reexport safe */ _InfoBox__WEBPACK_IMPORTED_MODULE_0__.InfoBox),
/* harmony export */   NumberInput: () => (/* binding */ NumberInput),
/* harmony export */   ProBadge: () => (/* binding */ ProBadge),
/* harmony export */   SectionCard: () => (/* binding */ SectionCard),
/* harmony export */   SelectInput: () => (/* binding */ SelectInput),
/* harmony export */   SettingRow: () => (/* binding */ SettingRow),
/* harmony export */   TextInput: () => (/* binding */ TextInput),
/* harmony export */   Toggle: () => (/* binding */ Toggle)
/* harmony export */ });
/* harmony import */ var _InfoBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InfoBox */ "./src/admin/pages/rulesDetails/components/ui/InfoBox.jsx");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/lock.js");
/* harmony import */ var _utils_isPremium__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/isPremium */ "./src/admin/pages/rulesDetails/utils/isPremium.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * components/ui/index.jsx
 * Reusable primitive UI components for the settings app.
 */



// ── ProBadge ──────────────────────────────────────────────────────────────────
function ProBadge() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
    className: "inline-flex items-center rounded border border-amber-200 bg-amber-50 px-1 py-px text-[9px] font-bold uppercase tracking-wider text-amber-600",
    children: "Pro"
  });
}




// ── Toggle ────────────────────────────────────────────────────────────────────

function Toggle({
  value,
  onChange,
  disabled = false
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
    type: "button",
    role: "switch",
    dir: "ltr",
    "aria-checked": value,
    disabled: disabled,
    onClick: () => !disabled && onChange(!value),
    className: ["relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full", "border-2 border-transparent outline-none transition-colors duration-200 ease-in-out", "focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2", value ? "bg-blue-600" : "bg-gray-200 hover:bg-gray-300", disabled ? "cursor-not-allowed opacity-50" : ""].join(" "),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: ["pointer-events-none inline-block h-4 w-4 transform rounded-full", "bg-white shadow-sm ring-0 transition duration-200 ease-in-out", value ? "translate-x-4" : "translate-x-0"].join(" ")
    })
  });
}

// ── ButtonGroup (segmented control) ──────────────────────────────────────────
function ButtonGroup({
  options,
  value,
  onChange,
  className
}) {
  const premium = (0,_utils_isPremium__WEBPACK_IMPORTED_MODULE_4__.isPremium)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: ["rounded-lg border border-gray-200 bg-gray-50 p-0.5", className ?? "inline-flex items-center"].join(" "),
    children: options.map(opt => {
      const isLocked = opt.premium && !premium;
      const isActive = value === opt.value;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
        type: "button",
        onClick: () => !isLocked && onChange(opt.value),
        title: isLocked ? "Available in Pro" : undefined,
        className: ["inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all duration-150", "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500", isLocked ? isActive ? "cursor-not-allowed bg-white text-blue-400 shadow-sm" : "cursor-not-allowed text-gray-300" : isActive ? "bg-white text-blue-600 shadow-sm" : "text-gray-500 hover:text-gray-800"].join(" "),
        children: [opt.label, isLocked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
          size: 10,
          strokeWidth: 2.5,
          className: "shrink-0 text-amber-400"
        })]
      }, opt.value);
    })
  });
}

// ── NumberInput ───────────────────────────────────────────────────────────────
function NumberInput({
  value,
  onChange,
  min,
  max,
  step = 1,
  unit,
  width = "w-[72px]"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "flex items-center gap-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
      type: "number",
      value: value ?? "",
      onChange: e => onChange(e.target.value === "" ? "" : Number(e.target.value)),
      min: min,
      max: max,
      step: step,
      className: [width, "rounded-lg border border-gray-200 bg-white px-3 py-1.5", "text-sm text-gray-800 tabular-nums", "transition-colors duration-150", "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30", "hover:border-gray-300"].join(" ")
    }), unit && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
      className: "min-w-[22px] shrink-0 text-[11px] font-medium text-gray-400",
      children: unit
    })]
  });
}

// ── ColorInput helpers ────────────────────────────────────────────────────────
function parseColorValue(val) {
  if (!val) return {
    hex: "#000000",
    alpha: 1
  };
  const m = val.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)/);
  if (m) {
    const hex = "#" + [+m[1], +m[2], +m[3]].map(n => n.toString(16).padStart(2, "0")).join("");
    return {
      hex,
      alpha: m[4] !== undefined ? parseFloat(m[4]) : 1
    };
  }
  if (/^#[0-9a-fA-F]{3,8}$/.test(val)) {
    let h = val.slice(1);
    if (h.length === 3) h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2];
    return {
      hex: "#" + h.slice(0, 6),
      alpha: 1
    };
  }
  return {
    hex: "#000000",
    alpha: 1
  };
}
function buildColorValue(hex, alpha) {
  if (alpha >= 1) return hex;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${Math.round(alpha * 100) / 100})`;
}
const CHECKER = {
  backgroundImage: ["linear-gradient(45deg,#e5e7eb 25%,transparent 25%)", "linear-gradient(-45deg,#e5e7eb 25%,transparent 25%)", "linear-gradient(45deg,transparent 75%,#e5e7eb 75%)", "linear-gradient(-45deg,transparent 75%,#e5e7eb 75%)"].join(","),
  backgroundSize: "8px 8px",
  backgroundPosition: "0 0,0 4px,4px -4px,-4px 0"
};

// ── ColorInput ────────────────────────────────────────────────────────────────
function ColorInput({
  value,
  onChange
}) {
  const [open, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [popoverPos, setPopoverPos] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    top: 0,
    left: undefined,
    right: undefined
  });
  const swatchRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const popoverRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const {
    hex,
    alpha
  } = parseColorValue(value);
  const r = parseInt(hex.slice(1, 3), 16) || 0;
  const g = parseInt(hex.slice(3, 5), 16) || 0;
  const b = parseInt(hex.slice(5, 7), 16) || 0;
  const displayColor = alpha < 1 ? `rgba(${r},${g},${b},${alpha})` : hex;
  const getSwatchPos = (rect, top) => {
    const isRTL = document.documentElement.getAttribute("dir") === "rtl";
    return isRTL ? {
      top,
      right: window.innerWidth - rect.right,
      left: undefined
    } : {
      top,
      left: rect.left,
      right: undefined
    };
  };

  // Always open below the swatch; useEffect flips above if it overflows.
  const handleOpen = () => {
    if (swatchRef.current) {
      const rect = swatchRef.current.getBoundingClientRect();
      setPopoverPos(getSwatchPos(rect, rect.bottom + 6));
    }
    setOpen(o => !o);
  };

  // After the popover renders, check if it overflows the viewport bottom and
  // flip it above the swatch if so. Uses the actual rendered height, not an estimate.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!open || !popoverRef.current || !swatchRef.current) return;
    const pop = popoverRef.current.getBoundingClientRect();
    const swatch = swatchRef.current.getBoundingClientRect();
    if (pop.bottom > window.innerHeight - 8) {
      setPopoverPos(getSwatchPos(swatch, swatch.top - pop.height - 6));
    }
  }, [open]);

  // Close on outside click
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (!open) return;
    const close = e => {
      if (popoverRef.current && !popoverRef.current.contains(e.target) && swatchRef.current && !swatchRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, [open]);
  const handleHex = h => onChange(buildColorValue(h, alpha));
  const handleAlpha = a => onChange(buildColorValue(hex, a));

  // Portal target: the React mount element (has class wpbean-pgs-wrapper)
  // so all Tailwind scoped CSS applies correctly inside the portal.
  const portalTarget = document.getElementById("wpbean-pgs-setting-rule-app") || document.body;
  const popover = open && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createPortal)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    ref: popoverRef,
    style: {
      position: "fixed",
      top: popoverPos.top,
      ...(popoverPos.right !== undefined ? {
        right: popoverPos.right
      } : {
        left: popoverPos.left
      }),
      zIndex: 999999
    },
    className: "w-60 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "relative h-9 w-full overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute inset-0",
        style: CHECKER
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        className: "absolute inset-0",
        style: {
          backgroundColor: displayColor
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "space-y-4 p-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
          className: "mb-2 text-[10px] font-semibold uppercase tracking-wider text-gray-400",
          children: "Color"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("label", {
            className: "relative flex-shrink-0 cursor-pointer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
              type: "color",
              value: hex,
              onChange: e => handleHex(e.target.value),
              className: "sr-only"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
              className: "block h-8 w-8 cursor-pointer rounded-lg border border-gray-200 shadow-sm transition-shadow hover:shadow-md",
              style: {
                backgroundColor: hex
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            type: "text",
            value: hex,
            onChange: e => {
              const v = e.target.value;
              if (/^#[0-9a-fA-F]{6}$/.test(v)) handleHex(v);
            },
            className: "flex-1 rounded-lg border border-gray-200 bg-gray-50 px-2.5 py-1.5 font-mono text-xs text-gray-700 transition-colors focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500/30",
            maxLength: 7,
            spellCheck: false
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "mb-2 flex items-center justify-between",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            className: "text-[10px] font-semibold uppercase tracking-wider text-gray-400",
            children: "Opacity"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            className: "text-[11px] font-medium tabular-nums text-gray-600",
            children: [Math.round(alpha * 100), "%"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "relative h-5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: "absolute inset-x-0 top-1/2 h-3 -translate-y-1/2 overflow-hidden rounded-full border border-gray-200",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "absolute inset-0",
              style: CHECKER
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "absolute inset-0",
              style: {
                background: `linear-gradient(to right,rgba(${r},${g},${b},0),rgba(${r},${g},${b},1))`
              }
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "pointer-events-none absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-white shadow-md ring-1 ring-gray-200",
            style: {
              left: `${alpha * 100}%`,
              backgroundColor: hex
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
            type: "range",
            min: 0,
            max: 1,
            step: 0.01,
            value: alpha,
            onChange: e => handleAlpha(parseFloat(e.target.value)),
            style: {
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              margin: 0,
              opacity: 0,
              cursor: "pointer",
              WebkitAppearance: "none",
              appearance: "none"
            }
          })]
        })]
      })]
    })]
  }), portalTarget);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "relative flex items-center gap-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
      ref: swatchRef,
      type: "button",
      onClick: handleOpen,
      className: "relative h-7 w-7 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 shadow-sm transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
      title: displayColor,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: "absolute inset-0",
        style: CHECKER
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
        className: "absolute inset-0",
        style: {
          backgroundColor: displayColor
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
      type: "text",
      value: value || "",
      onChange: e => onChange(e.target.value),
      placeholder: "#000000",
      className: "w-[120px] rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 font-mono text-xs text-gray-700 tabular-nums transition-colors hover:border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30"
    }), popover]
  });
}

// ── TextInput ─────────────────────────────────────────────────────────────────
function TextInput({
  value,
  onChange,
  placeholder = "",
  width = "w-48"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
    type: "text",
    value: value ?? "",
    onChange: e => onChange(e.target.value),
    placeholder: placeholder,
    spellCheck: false,
    className: [width, "rounded-lg border border-gray-200 bg-white px-3 py-1.5", "text-sm text-gray-800 font-mono", "transition-colors duration-150", "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30", "hover:border-gray-300"].join(" ")
  });
}

// ── SelectInput ───────────────────────────────────────────────────────────────
function SelectInput({
  options,
  value,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "relative inline-flex items-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("select", {
      value: value,
      onChange: e => onChange(e.target.value),
      className: ["appearance-none rounded-lg border border-gray-200 bg-white", "ps-3 pe-9 py-1.5", "text-sm text-gray-800 cursor-pointer", "transition-colors duration-150", "focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/30", "hover:border-gray-300"].join(" "),
      children: options.map(opt => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("option", {
        value: opt.value,
        children: opt.label
      }, opt.value))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 13,
      strokeWidth: 2,
      className: "pointer-events-none absolute end-2.5 top-1/2 -translate-y-1/2 text-gray-400"
    })]
  });
}

// ── SettingRow ────────────────────────────────────────────────────────────────
function SettingRow({
  label,
  description,
  children,
  className
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: [className ?? "flex items-center justify-between", "py-[15px] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-gray-100"].join(" "),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "min-w-0 flex-1 pe-10",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "text-[13px] font-medium leading-snug text-gray-800",
        children: label
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "mt-0.5 text-[11.5px] leading-relaxed text-gray-400",
        children: description
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "shrink-0",
      children: children
    })]
  });
}

// ── SectionCard ───────────────────────────────────────────────────────────────
function SectionCard({
  title,
  description,
  children
}) {
  const id = title && typeof title === "string" ? "wcpg-s-" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") : undefined;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    id: id,
    className: "overflow-hidden rounded-xl border border-gray-200 bg-white transition-[box-shadow] duration-300 [&.wcpg-search-hit]:ring-2 [&.wcpg-search-hit]:ring-blue-400",
    children: [(title || description) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "border-b border-gray-100 bg-gray-50/60 px-5 py-[14px]",
      children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
        className: "text-[13px] font-semibold text-gray-700",
        children: title
      }), description && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
        className: "mt-0.5 text-[11.5px] leading-relaxed text-gray-400",
        children: description
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "px-5",
      children: children
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/constants/defaultSettings.js"
/*!*******************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/constants/defaultSettings.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_SETTINGS: () => (/* binding */ DEFAULT_SETTINGS)
/* harmony export */ });
/**
 * constants/defaultSettings.js
 * Mirrors the DEFAULTS object in wc-product-gallery.js so the UI has
 * sensible fallbacks when settings have not been saved yet.
 */

const DEFAULT_SETTINGS = {
  // ── General ──────────────────────────────────────────────────────────────
  variationImageChange: true,
  variationGallery: true,
  preloadImages: true,
  zoomBeforeLoad: false,
  spinner: false,
  spinnerColor: "rgba(0, 0, 0, 0.82)",
  // ── Zoom ─────────────────────────────────────────────────────────────────
  zoomType: "inner",
  // 'lens' | 'window' | 'inner'
  zoomLevel: 2.5,
  zoomOnHover: true,
  zoomCursor: "crosshair",
  // 'crosshair' | 'zoom-in' | 'default'
  zoomEasing: true,
  zoomEasingAmount: 12,
  // ── Lens ─────────────────────────────────────────────────────────────────
  lensSize: 130,
  lensShape: "circle",
  // 'circle' | 'square'
  lensBorderColor: "#ffffff",
  lensBorderWidth: 2,
  // ── Zoom Window ───────────────────────────────────────────────────────────
  zoomWindowSizeMode: "custom",
  // 'custom' | 'auto' | 'match'
  zoomWindowWidth: 400,
  zoomWindowHeight: 400,
  zoomWindowPosition: "right",
  // 'right' | 'left' | 'top' | 'bottom'
  zoomWindowOffsetX: 14,
  zoomWindowOffsetY: 0,
  zoomWindowBorderRadius: 8,
  zoomWindowBorderColor: "#e0e0e0",
  zoomWindowBorderWidth: 1,
  zoomWindowShadow: true,
  zoomWindowFadeEasing: true,
  zoomWindowFadeEasingAmount: 300,
  // Cursor overlay on main image (window zoom only)
  zoomWindowCursor: true,
  zoomWindowCursorSizeMode: "auto",
  // 'auto' | 'custom'
  zoomWindowCursorWidth: 100,
  zoomWindowCursorHeight: 100,
  zoomWindowCursorBorderRadius: 4,
  zoomWindowCursorBg: "rgba(255,255,255,0.50)",
  zoomWindowCursorBorderColor: "#ffffff",
  zoomWindowCursorBorderWidth: 1,
  // ── Gallery / Thumbnails ──────────────────────────────────────────────────
  galleryType: "thumbnail",
  // 'thumbnail' | 'anchor' | 'sticky-split' | 'hierarchy-grid'
  mainImageSize: "large",
  // WP registered image size for the main display image
  thumbnailImageSize: "woocommerce_gallery_thumbnail",
  // WP registered image size for thumbnails
  thumbnailShow: true,
  // show or hide the thumbnail strip entirely
  thumbnailPosition: "bottom",
  // 'bottom' | 'top' | 'left' | 'right'
  thumbnailLayout: "slider",
  // 'slider' | 'grid'
  thumbnailWidth: 80,
  thumbnailHeight: 80,
  thumbnailAspectRatio: "auto",
  thumbnailGap: 8,
  thumbnailStripGap: 8,
  thumbnailBorderRadius: 4,
  thumbnailBackground: "",
  thumbnailActiveBorderColor: "rgba(0, 0, 0, 0.82)",
  thumbnailActiveBorderWidth: 2,
  thumbnailSliderButtons: true,
  thumbnailSlideType: "row",
  thumbnailLoop: false,
  thumbnailDragNav: true,
  thumbnailScrollNav: true,
  thumbnailVisible: 5,
  thumbnailGridColumns: 4,
  thumbnailFitToImage: true,
  thumbnailTrigger: "click",
  thumbnailArrowsOverlay: false,
  thumbnailBreakpoint: 1025,
  thumbnailAlignment: "left",
  // 'left' | 'center' | 'right' (horizontal strips only)
  thumbnailAnimation: true,
  // staggered fade-in entrance animation for thumbnail items

  // ── Main Image ────────────────────────────────────────────────────────────
  mainImageHeightMode: "lock",
  // 'lock' | 'adaptive' | 'fixed'
  mainImageHeight: 0,
  // px, used when mainImageHeightMode === 'fixed'
  mainImageFit: "contain",
  // 'contain' | 'cover'
  mainImageBackground: "",
  mainImageBorderRadius: 6,
  mainImageBorderWidth: 0,
  mainImageBorderColor: "#e0e0e0",
  mainImageShadow: false,
  mainImageArrows: true,
  mainImageArrowsAutoHide: true,
  mainImageArrowIcon: "chevron",
  mainImageArrowSize: 40,
  mainImageArrowBorderRadius: 50,
  mainImageArrowIconSize: 18,
  mainImageArrowBg: "rgba(255,255,255,0.92)",
  mainImageArrowColor: "#1a1a1a",
  mainImageArrowHoverBg: "rgba(0,0,0,0.82)",
  mainImageArrowHoverColor: "#ffffff",
  mainImagePagination: true,
  mainImagePaginationAutoHide: true,
  mainImagePaginationType: "dots",
  // 'dots' | 'progressbar'
  mainImagePaginationPosition: "bottom",
  // 'bottom' | 'left' | 'right'
  mainImageDotSize: 5,
  mainImageDotColor: "rgba(0,0,0,0.2)",
  mainImageDotActiveColor: "rgba(0,0,0,0.82)",
  mainImageSwipe: false,
  // swipe left/right on main image to navigate (requires zoomOnHover and touchZoom both disabled)
  mainImageScrollNav: false,
  // scroll wheel on main image to navigate next/prev
  mainImageScrollNavDelay: 700,
  // ms cooldown between scroll-triggered navigations

  // Stacked layout (Anchor Navigation mode)
  stackedItemGap: 24,
  stackedNavigationType: "dots",
  // 'dots' | 'thumbs'
  anchorZoom: true,
  stackedThumbsStickyTop: 40,
  stackedDotsPosition: "outside",
  // 'overlay' | 'outside'
  stackedDotGap: 8,
  stackedDotSize: 8,
  stackedDotColor: "rgba(0, 0, 0, 0.5)",
  stackedDotActiveColor: "#000000",
  // Stacked layout — sticky product summary
  stackedStickyEnabled: false,
  stackedStickySelector: ".summary.entry-summary",
  stackedStickyTop: 100,
  stackedStickyBreakpoint: 1024,
  stackedStickyFixOverflow: true,
  // Sticky Split layout
  stickySplitMainSide: "left",
  stickySplitMainWidthPercent: 65,
  stickySplitGap: 20,
  stickySplitStickyTop: 50,
  stickySplitScrollItemGap: 20,
  stickySplitScrollItemAspect: "auto",
  stickySplitScrollItemFit: "cover",
  stickySplitScrollItemBorderRadius: 6,
  stickySplitShowCaption: false,
  stickySplitClickAction: "lightbox",
  stickySplitClickSync: false,
  stickySplitThumbZoom: false,
  stickySplitShowMainInScroll: false,
  // Hierarchy Grid layout
  hierarchyGridColumns: 2,
  hierarchyGridGap: 16,
  hierarchyGridItemAspect: "1/1",
  hierarchyGridItemFit: "cover",
  hierarchyGridItemBorderRadius: 6,
  hierarchyGridZoom: true,
  // Tiles layout
  tilesColumns: 2,
  tilesGap: 8,
  tilesItemAspect: "3/2",
  tilesItemFit: "cover",
  tilesItemBorderRadius: 0,
  tilesInitialCount: 6,
  tilesShowMoreEnabled: true,
  tilesShowMoreText: "Show More",
  tilesShowLessText: "Show Less",
  tilesZoom: true,
  mobileBreakpoint: 768,
  mobileShowThumbs: false,
  mobileThumbnailPosition: "bottom",
  // 'bottom' | 'top' | 'left' | 'right'
  mobileThumbnailWidth: 100,
  mobileThumbnailHeight: 100,
  mobileArrows: true,
  mobilePagination: true,
  mobilePaginationPosition: "bottom",
  mainImageTransition: "slide",
  // 'fade' | 'slide' | 'zoom' | 'none'
  mainImageTransitionDuration: 500,
  mainImageSlideDirection: "horizontal",
  // 'horizontal' | 'vertical' (slide transition only)

  // ── Lightbox ──────────────────────────────────────────────────────────────
  lightbox: true,
  lightboxOnClick: true,
  lightboxButtonAutoHide: true,
  lightboxButtonPosition: "bottom-right",
  // 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  lightboxOverlayColor: "rgba(5, 5, 8, 0.95)",
  lightboxOpenOnImageClick: false,
  lightboxLoop: true,
  lightboxShowCounter: true,
  lightboxShowCaption: true,
  lightboxShowThumbnails: true,
  lightboxPaginationType: "thumbs",
  lightboxCloseOnOverlay: true,
  lightboxKeyboard: true,
  lightboxAnimationDuration: 320,
  lightboxTransition: "slide",
  // 'slide' | 'fade' | 'zoom' | 'none'
  lightboxAutoplay: false,
  lightboxAutoplayDelay: 3500,
  lightboxShowAutoplayButton: true,
  lightboxZoomIn: true,
  lightboxScrollZoom: true,
  lightboxFullscreen: true,
  lightboxShowArrows: true,
  lightboxSwipe: true,
  lightboxSingleImage: false,
  lightboxImageBorderRadius: 6,
  lightboxThumbBorderRadius: 5,
  lightboxZoomOrigin: false,
  lightboxImageTools: true,
  lightboxShare: false,
  lightboxShareFacebook: true,
  lightboxShareTwitter: true,
  lightboxSharePinterest: true,
  lightboxShareDownload: true,
  // ── Mobile / Touch ────────────────────────────────────────────────────────
  touchZoom: true,
  touchZoomMin: 1,
  touchZoomMax: 5,
  swipeThreshold: 50,
  // ── Video ─────────────────────────────────────────────────────────────────
  videoPosition: "end",
  // 'start' | 'end' — where product videos appear in the thumbnail strip
  videoAutoplay: false,
  // autoplay embed when navigated to
  videoMuted: true,
  // mute by default (required for browser autoplay)
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
  videoHostedFitContainer: false // fill the main image area (crop hosted video to match container)
};

/***/ },

/***/ "./src/admin/pages/rulesDetails/constants/galleryLayouts.jsx"
/*!*******************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/constants/galleryLayouts.jsx ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GALLERY_LAYOUTS: () => (/* binding */ GALLERY_LAYOUTS)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
// Quick-Start layout presets. Each entry defines:
//   id          — unique slug
//   title       — display name
//   description — one-line explanation shown on the card
//   Icon        — React component rendering an SVG preview of the layout
//   config      — partial settings object merged over the current state on apply



function ClassicSliderIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 80 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "4",
      width: "72",
      height: "40",
      rx: "3",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "47",
      width: "16",
      height: "9",
      rx: "2",
      fill: "#3b82f6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "22",
      y: "47",
      width: "16",
      height: "9",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "40",
      y: "47",
      width: "16",
      height: "9",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "58",
      y: "47",
      width: "16",
      height: "9",
      rx: "2",
      fill: "#dbe4ee"
    })]
  });
}
function LeftThumbsIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 80 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "4",
      width: "12",
      height: "10",
      rx: "2",
      fill: "#3b82f6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "17",
      width: "12",
      height: "10",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "30",
      width: "12",
      height: "10",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "43",
      width: "12",
      height: "10",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "19",
      y: "4",
      width: "57",
      height: "52",
      rx: "3",
      fill: "#e2eaf4"
    })]
  });
}
function RightThumbsIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 80 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "4",
      width: "57",
      height: "52",
      rx: "3",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "64",
      y: "4",
      width: "12",
      height: "10",
      rx: "2",
      fill: "#3b82f6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "64",
      y: "17",
      width: "12",
      height: "10",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "64",
      y: "30",
      width: "12",
      height: "10",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "64",
      y: "43",
      width: "12",
      height: "10",
      rx: "2",
      fill: "#dbe4ee"
    })]
  });
}
function GridThumbsIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 80 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "4",
      width: "72",
      height: "31",
      rx: "3",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "38",
      width: "22",
      height: "8",
      rx: "2",
      fill: "#3b82f6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "29",
      y: "38",
      width: "22",
      height: "8",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "54",
      y: "38",
      width: "22",
      height: "8",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "49",
      width: "22",
      height: "8",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "29",
      y: "49",
      width: "22",
      height: "8",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "54",
      y: "49",
      width: "22",
      height: "8",
      rx: "2",
      fill: "#dbe4ee"
    })]
  });
}
function MinimalSliderIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 80 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "3",
      width: "72",
      height: "44",
      rx: "3",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "11",
      cy: "25",
      r: "5",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
      points: "12.5,22 9.5,25 12.5,28",
      stroke: "#94a3b8",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "69",
      cy: "25",
      r: "5",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
      points: "67.5,22 70.5,25 67.5,28",
      stroke: "#94a3b8",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "26",
      cy: "54",
      r: "1.5",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "31",
      cy: "54",
      r: "1.5",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "34.5",
      y: "52.5",
      width: "8",
      height: "3",
      rx: "1.5",
      fill: "#3b82f6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "46",
      cy: "54",
      r: "1.5",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "51",
      cy: "54",
      r: "1.5",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "56",
      cy: "54",
      r: "1.5",
      fill: "#dbe4ee"
    })]
  });
}
function AnchorNavIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 80 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "9",
      cy: "16",
      r: "2.5",
      fill: "#3b82f6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "9",
      cy: "26",
      r: "2.5",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "9",
      cy: "36",
      r: "2.5",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("circle", {
      cx: "9",
      cy: "46",
      r: "2.5",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "18",
      y: "4",
      width: "58",
      height: "24",
      rx: "3",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "18",
      y: "32",
      width: "58",
      height: "24",
      rx: "3",
      fill: "#e2eaf4"
    })]
  });
}
function VerticalScrollIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 80 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "4",
      width: "13",
      height: "11",
      rx: "2",
      fill: "#3b82f6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "17",
      width: "13",
      height: "11",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "30",
      width: "13",
      height: "11",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "43",
      width: "13",
      height: "11",
      rx: "2",
      fill: "#dbe4ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "20",
      y: "4",
      width: "56",
      height: "26",
      rx: "3",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "20",
      y: "33",
      width: "56",
      height: "24",
      rx: "3",
      fill: "#e2eaf4"
    })]
  });
}
function StickySplitRightIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 80 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "3",
      y: "3",
      width: "15",
      height: "15",
      rx: "2",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "3",
      y: "21",
      width: "15",
      height: "15",
      rx: "2",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "3",
      y: "39",
      width: "15",
      height: "15",
      rx: "2",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "21",
      y: "8",
      width: "27",
      height: "27",
      rx: "3",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "52",
      y: "10",
      width: "14",
      height: "2",
      rx: "1",
      fill: "#dde5ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "52",
      y: "16",
      width: "22",
      height: "3",
      rx: "1.5",
      fill: "#c8d5e2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "52",
      y: "23",
      width: "14",
      height: "2",
      rx: "1",
      fill: "#dde5ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "52",
      y: "29",
      width: "18",
      height: "1.5",
      rx: "0.75",
      fill: "#dde5ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "52",
      y: "33",
      width: "15",
      height: "1.5",
      rx: "0.75",
      fill: "#dde5ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "52",
      y: "42",
      width: "22",
      height: "7",
      rx: "2",
      fill: "#3b82f6"
    })]
  });
}
function SingleColumnGridIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 80 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "11",
      y: "4",
      width: "58",
      height: "24",
      rx: "3",
      fill: "#3b82f6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "11",
      y: "32",
      width: "58",
      height: "24",
      rx: "3",
      fill: "#e2eaf4"
    })]
  });
}
function HierarchyGridIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 80 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "4",
      width: "72",
      height: "30",
      rx: "3",
      fill: "#3b82f6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "4",
      y: "38",
      width: "34",
      height: "18",
      rx: "2",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "42",
      y: "38",
      width: "34",
      height: "18",
      rx: "2",
      fill: "#e2eaf4"
    })]
  });
}
function StickySplitIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 80 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "3",
      y: "8",
      width: "27",
      height: "27",
      rx: "3",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "33",
      y: "3",
      width: "15",
      height: "15",
      rx: "2",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "33",
      y: "21",
      width: "15",
      height: "15",
      rx: "2",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "33",
      y: "39",
      width: "15",
      height: "15",
      rx: "2",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "51",
      y: "10",
      width: "16",
      height: "2",
      rx: "1",
      fill: "#dde5ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "51",
      y: "16",
      width: "22",
      height: "3",
      rx: "1.5",
      fill: "#c8d5e2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "51",
      y: "23",
      width: "14",
      height: "2",
      rx: "1",
      fill: "#dde5ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "51",
      y: "29",
      width: "18",
      height: "1.5",
      rx: "0.75",
      fill: "#dde5ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "51",
      y: "33",
      width: "15",
      height: "1.5",
      rx: "0.75",
      fill: "#dde5ee"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "51",
      y: "42",
      width: "22",
      height: "7",
      rx: "2",
      fill: "#3b82f6"
    })]
  });
}
function TilesIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    viewBox: "0 0 80 60",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "w-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "3",
      y: "3",
      width: "35",
      height: "18",
      rx: "2",
      fill: "#3b82f6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "42",
      y: "3",
      width: "35",
      height: "18",
      rx: "2",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "3",
      y: "24",
      width: "35",
      height: "18",
      rx: "2",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "42",
      y: "24",
      width: "35",
      height: "18",
      rx: "2",
      fill: "#e2eaf4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "22",
      y: "46",
      width: "36",
      height: "10",
      rx: "2",
      fill: "none",
      stroke: "#94a3b8",
      strokeWidth: "1"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      x: "28",
      y: "50",
      width: "18",
      height: "2",
      rx: "1",
      fill: "#94a3b8"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("polyline", {
      points: "50,49 52,51 50,53",
      stroke: "#94a3b8",
      strokeWidth: "1.2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  });
}
const GALLERY_LAYOUTS = [{
  id: "classic-slider",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Classic Slider", "wpbean-product-gallery-slider-for-woocommerce"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Horizontal thumbnails below the main image with a smooth slide transition.", "wpbean-product-gallery-slider-for-woocommerce"),
  Icon: ClassicSliderIcon,
  config: {
    galleryType: "thumbnail",
    thumbnailShow: true,
    thumbnailPosition: "bottom",
    thumbnailLayout: "slider",
    mainImageTransition: "slide",
    mainImagePagination: true,
    mainImagePaginationPosition: "bottom"
  }
}, {
  id: "left-thumbnails",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left Thumbnails", "wpbean-product-gallery-slider-for-woocommerce"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vertical thumbnail strip on the left side with a clean fade transition.", "wpbean-product-gallery-slider-for-woocommerce"),
  Icon: LeftThumbsIcon,
  config: {
    galleryType: "thumbnail",
    thumbnailShow: true,
    thumbnailPosition: "left",
    thumbnailLayout: "slider",
    mainImageTransition: "fade",
    thumbnailFitToImage: true,
    mainImagePagination: true,
    mainImagePaginationPosition: "bottom"
  }
}, {
  id: "right-thumbnails",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right Thumbnails", "wpbean-product-gallery-slider-for-woocommerce"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vertical thumbnail strip on the right side with a clean fade transition.", "wpbean-product-gallery-slider-for-woocommerce"),
  Icon: RightThumbsIcon,
  config: {
    galleryType: "thumbnail",
    thumbnailShow: true,
    thumbnailPosition: "right",
    thumbnailLayout: "slider",
    mainImageTransition: "fade"
  }
}, {
  id: "grid-thumbnails",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid Thumbnails", "wpbean-product-gallery-slider-for-woocommerce"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grid of thumbnails below the main image — great for products with many images.", "wpbean-product-gallery-slider-for-woocommerce"),
  Icon: GridThumbsIcon,
  config: {
    galleryType: "thumbnail",
    thumbnailShow: true,
    thumbnailPosition: "bottom",
    thumbnailLayout: "grid",
    mainImageTransition: "fade",
    thumbnailFitToImage: true
  }
}, {
  id: "minimal-slider",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Minimal Slider", "wpbean-product-gallery-slider-for-woocommerce"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Full-width image slider with no thumbnails — clean arrows and dot pagination only.", "wpbean-product-gallery-slider-for-woocommerce"),
  Icon: MinimalSliderIcon,
  config: {
    galleryType: "thumbnail",
    thumbnailShow: false
  }
}, {
  id: "anchor-navigation",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anchor Navigation", "wpbean-product-gallery-slider-for-woocommerce"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stacked full-width images with scroll-linked dot navigation.", "wpbean-product-gallery-slider-for-woocommerce"),
  Icon: AnchorNavIcon,
  premium: true,
  config: {
    galleryType: "anchor",
    thumbnailPosition: "left",
    mainImagePaginationType: "dots",
    mainImagePaginationPosition: "left"
  }
}, {
  id: "vertical-scroll",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Vertical Scroll", "wpbean-product-gallery-slider-for-woocommerce"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Stacked full-width images with a grid thumbnail strip for navigation.", "wpbean-product-gallery-slider-for-woocommerce"),
  Icon: VerticalScrollIcon,
  premium: true,
  config: {
    galleryType: "anchor",
    thumbnailPosition: "left",
    mainImagePaginationType: "dots",
    mainImagePaginationPosition: "left",
    stackedNavigationType: "thumbs",
    thumbnailLayout: "grid"
  }
}, {
  id: "hierarchy-grid",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hierarchy Grid", "wpbean-product-gallery-slider-for-woocommerce"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("One large featured image on top with smaller supporting images in a grid below.", "wpbean-product-gallery-slider-for-woocommerce"),
  Icon: HierarchyGridIcon,
  premium: true,
  config: {
    galleryType: "hierarchy-grid",
    hierarchyGridColumns: 2,
    hierarchyGridItemAspect: "auto"
  }
}, {
  id: "single-column-grid",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Single Column", "wpbean-product-gallery-slider-for-woocommerce"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("All images stacked vertically in a single full-width column.", "wpbean-product-gallery-slider-for-woocommerce"),
  Icon: SingleColumnGridIcon,
  premium: true,
  config: {
    galleryType: "hierarchy-grid",
    hierarchyGridColumns: 1,
    hierarchyGridItemAspect: "auto"
  }
}, {
  id: "sticky-split",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sticky Split", "wpbean-product-gallery-slider-for-woocommerce"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Two-column layout with a scrollable gallery and a sticky product summary.", "wpbean-product-gallery-slider-for-woocommerce"),
  Icon: StickySplitIcon,
  premium: true,
  config: {
    galleryType: "sticky-split",
    stickySplitMainSide: "left"
  }
}, {
  id: "sticky-split-right",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sticky Split Right", "wpbean-product-gallery-slider-for-woocommerce"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gallery on the left, large sticky image in the centre, and product info pinned on the right.", "wpbean-product-gallery-slider-for-woocommerce"),
  Icon: StickySplitRightIcon,
  premium: true,
  config: {
    galleryType: "sticky-split",
    stickySplitMainSide: "right"
  }
}, {
  id: "tiles",
  title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tiles", "wpbean-product-gallery-slider-for-woocommerce"),
  description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("All images in an equal-sized grid with a Show More / Show Less button to control how many are visible.", "wpbean-product-gallery-slider-for-woocommerce"),
  Icon: TilesIcon,
  premium: true,
  config: {
    galleryType: "tiles",
    tilesColumns: 2,
    tilesItemAspect: "3/2",
    tilesItemFit: "cover",
    tilesInitialCount: 6,
    tilesShowMoreEnabled: true
  }
}];

/***/ },

/***/ "./src/admin/pages/rulesDetails/constants/searchIndex.js"
/*!***************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/constants/searchIndex.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SEARCH_INDEX: () => (/* binding */ SEARCH_INDEX),
/* harmony export */   sectionId: () => (/* binding */ sectionId)
/* harmony export */ });
/**
 * searchIndex.js
 * Flat list of every setting field used by SearchPalette.
 * Tabs and section titles must match SectionCard `title` props exactly.
 */

const TAB_LABELS = {
  general: "General",
  zoom: "Zoom",
  "zoom-window": "Zoom Window",
  gallery: "Gallery",
  lightbox: "Lightbox",
  mobile: "Mobile",
  video: "Video"
};
function entry(key, label, description, tab, section) {
  return {
    key,
    label,
    description,
    tab,
    section,
    tabLabel: TAB_LABELS[tab]
  };
}
const SEARCH_INDEX = [
// ── General ───────────────────────────────────────────────────────────────
entry("variationImageChange", "Variation Image Change", "Swap the main image when a variation with its own image is selected.", "general", "Variation Images"), entry("preloadImages", "Preload Images", "Preload all gallery and zoom images in the background on page load.", "general", "Performance"), entry("zoomBeforeLoad", "Zoom Before Image Loads", "Allow zoom to activate without waiting for the image to fully load.", "general", "Performance"), entry("spinner", "Enable Spinner", "Show an animated loading indicator while images are being fetched.", "general", "Loading Spinner"), entry("spinnerColor", "Spinner Color", "The color of the loading spinner animation.", "general", "Loading Spinner"),
// ── Zoom ──────────────────────────────────────────────────────────────────
entry("zoomType", "Display Mode", "Choose between Lens, Window, or Inner zoom type.", "zoom", "Zoom Type"), entry("zoomLevel", "Zoom Level", "Magnification factor applied when hovering over the product image.", "zoom", "Zoom Type"), entry("zoomOnHover", "Zoom on Hover", "Enable or disable zoom activation on mouse hover.", "zoom", "Activation"), entry("zoomCursor", "Cursor Style", "The mouse cursor shown while hovering over the zoomable image.", "zoom", "Activation"), entry("zoomEasing", "Enable Easing", "Smooth the lens or window movement with an easing animation.", "zoom", "Easing"), entry("zoomEasingAmount", "Easing Amount", "Controls how quickly the lens or window catches up to the cursor.", "zoom", "Easing"), entry("lensSize", "Lens Size", "Diameter of the circular zoom lens in pixels.", "zoom", "Lens Appearance"), entry("lensShape", "Lens Shape", "Shape of the zoom lens — circle or square.", "zoom", "Lens Appearance"), entry("lensBorderColor", "Border Color", "Color of the lens border ring.", "zoom", "Lens Appearance"), entry("lensBorderWidth", "Border Width", "Thickness of the lens border in pixels.", "zoom", "Lens Appearance"),
// ── Zoom Window ───────────────────────────────────────────────────────────
entry("zoomWindowSizeMode", "Size Mode", "How the zoom window size is determined — custom, auto, or match.", "zoom-window", "Window Size"), entry("zoomWindowWidth", "Window Width", "Width of the zoom window in pixels (custom mode).", "zoom-window", "Window Size"), entry("zoomWindowHeight", "Window Height", "Height of the zoom window in pixels (custom mode).", "zoom-window", "Window Size"), entry("zoomWindowPosition", "Position", "Where the zoom window appears relative to the main image.", "zoom-window", "Position"), entry("zoomWindowOffsetX", "Offset X", "Horizontal gap between the main image and the zoom window.", "zoom-window", "Position"), entry("zoomWindowOffsetY", "Offset Y", "Vertical offset of the zoom window from the top of the main image.", "zoom-window", "Position"), entry("zoomWindowBorderRadius", "Border Radius", "Rounded corner radius of the zoom window.", "zoom-window", "Window Style"), entry("zoomWindowBorderColor", "Border Color", "Color of the zoom window border.", "zoom-window", "Window Style"), entry("zoomWindowBorderWidth", "Border Width", "Thickness of the zoom window border.", "zoom-window", "Window Style"), entry("zoomWindowShadow", "Drop Shadow", "Show a drop shadow behind the zoom window.", "zoom-window", "Window Style"), entry("zoomWindowCursor", "Cursor Overlay", "Show a transparent cursor indicator on the main image in window zoom mode.", "zoom-window", "Cursor Overlay"), entry("zoomWindowCursorSizeMode", "Cursor Size Mode", "How the cursor overlay size is determined — auto or custom.", "zoom-window", "Cursor Overlay"), entry("zoomWindowCursorWidth", "Cursor Width", "Custom width of the cursor overlay box.", "zoom-window", "Cursor Overlay"), entry("zoomWindowCursorHeight", "Cursor Height", "Custom height of the cursor overlay box.", "zoom-window", "Cursor Overlay"), entry("zoomWindowCursorBorderRadius", "Cursor Border Radius", "Rounded corners of the cursor overlay box.", "zoom-window", "Cursor Overlay"), entry("zoomWindowCursorBg", "Cursor Background", "Background fill of the cursor overlay.", "zoom-window", "Cursor Overlay"), entry("zoomWindowCursorBorderColor", "Cursor Border Color", "Border color of the cursor overlay.", "zoom-window", "Cursor Overlay"), entry("zoomWindowCursorBorderWidth", "Cursor Border Width", "Border thickness of the cursor overlay.", "zoom-window", "Cursor Overlay"),
// ── Gallery ───────────────────────────────────────────────────────────────
entry("mainImageSize", "Main Image Size", "WordPress image size served for the main display image.", "gallery", "Image File Sizes"), entry("thumbnailImageSize", "Thumbnail Image Size", "WordPress image size served for thumbnail strip items.", "gallery", "Image File Sizes"), entry("thumbnailShow", "Show Thumbnails", "Show or hide the thumbnail strip below the main image.", "gallery", "Thumbnails"), entry("thumbnailPosition", "Thumbnail Position", "Where the thumbnail strip appears relative to the main image.", "gallery", "Thumbnails"), entry("thumbnailLayout", "Thumbnail Layout", "Slider or grid arrangement for the thumbnail strip.", "gallery", "Thumbnails"), entry("thumbnailTrigger", "Thumbnail Trigger", "Whether clicking or hovering a thumbnail swaps the main image.", "gallery", "Thumbnails"), entry("thumbnailBreakpoint", "Responsive Breakpoint", "Gallery width below which side thumbnails move to the bottom.", "gallery", "Thumbnails"), entry("thumbnailWidth", "Thumbnail Width", "CSS display width of each thumbnail item.", "gallery", "Thumbnail Size"), entry("thumbnailHeight", "Thumbnail Height", "CSS display height of each thumbnail item.", "gallery", "Thumbnail Size"), entry("thumbnailGap", "Thumbnail Gap", "Space between thumbnail items in the strip.", "gallery", "Thumbnail Size"), entry("thumbnailBorderRadius", "Thumbnail Border Radius", "Rounded corner radius for thumbnail items.", "gallery", "Thumbnail Size"), entry("thumbnailBackground", "Thumbnail Background Color", "Background color applied to each thumbnail item. Images use mix-blend-mode: darken when set.", "gallery", "Thumbnail Size"), entry("thumbnailAspectRatio", "Thumbnail Aspect Ratio", "Force a fixed aspect ratio on thumbnail items, overriding the height setting.", "gallery", "Thumbnail Size"), entry("thumbnailFitToImage", "Fit to Main Image", "Stretch thumbnails to fill the height or width of the main image area.", "gallery", "Thumbnail Size"), entry("thumbnailActiveBorderColor", "Highlight Color", "Border color shown on the currently selected thumbnail.", "gallery", "Active Thumbnail"), entry("thumbnailActiveBorderWidth", "Highlight Width", "Border thickness of the active thumbnail highlight.", "gallery", "Active Thumbnail"), entry("thumbnailSliderButtons", "Navigation Arrows", "Show previous/next arrow buttons on the thumbnail slider.", "gallery", "Slider Options"), entry("thumbnailArrowsOverlay", "Overlay Arrows", "Position slider arrows over the track edges.", "gallery", "Slider Options"), entry("thumbnailDragNav", "Drag Navigation", "Click-and-drag or touch-drag to scroll through the thumbnail strip.", "gallery", "Slider Options"), entry("thumbnailScrollNav", "Scroll Navigation", "Use the mouse wheel or trackpad to scroll through the thumbnail strip.", "gallery", "Slider Options"), entry("thumbnailGridColumns", "Grid Columns", "Number of columns in the thumbnail grid.", "gallery", "Grid Options"), entry("mainImageArrows", "Navigation Arrows", "Show previous/next arrow buttons on the main image.", "gallery", "Main Image Navigation"), entry("mainImageArrowsAutoHide", "Auto-hide Arrows", "Hide main image arrows when the cursor leaves the image.", "gallery", "Main Image Navigation"), entry("mainImageArrowIcon", "Arrow Icon Style", "Shape of the navigation arrow icon — chevron, arrow, caret, angle, or thin.", "gallery", "Main Image Navigation"), entry("mainImageArrowSize", "Arrow Size", "Diameter of the previous/next arrow buttons on the main image.", "gallery", "Main Image Navigation"), entry("mainImageArrowBorderRadius", "Arrow Border Radius", "Corner radius of the arrow buttons. 50% gives a circle, 0% gives a square.", "gallery", "Main Image Navigation"), entry("mainImageArrowIconSize", "Arrow Icon Size", "Size of the SVG arrow icon inside the button.", "gallery", "Main Image Navigation"), entry("mainImageArrowBg", "Arrow Background", "Background color of the navigation arrow buttons in their normal state.", "gallery", "Main Image Navigation"), entry("mainImageArrowColor", "Arrow Icon Color", "Icon color of the navigation arrow buttons in their normal state.", "gallery", "Main Image Navigation"), entry("mainImageArrowHoverBg", "Arrow Hover Background", "Background color of the navigation arrow buttons on hover.", "gallery", "Main Image Navigation"), entry("mainImageArrowHoverColor", "Arrow Hover Icon Color", "Icon color of the navigation arrow buttons on hover.", "gallery", "Main Image Navigation"), entry("mainImageDotSize", "Dot Size", "Diameter of the pagination dots. The active dot stretches proportionally.", "gallery", "Main Image Navigation"), entry("mainImageDotColor", "Dot Color", "Color of the inactive pagination dots.", "gallery", "Main Image Navigation"), entry("mainImageDotActiveColor", "Active Dot Color", "Color of the currently active pagination dot.", "gallery", "Main Image Navigation"), entry("mainImagePagination", "Pagination", "Show a pagination indicator below the main image for navigation.", "gallery", "Main Image Navigation"), entry("mainImagePaginationType", "Pagination Style", "Style of pagination — Dots, Progress Bar, or Count (numeric counter with arrow buttons).", "gallery", "Main Image Navigation"), entry("mainImagePaginationPosition", "Dot Position", "Where dot indicators appear — Bottom, Left, or Right. Left/Right enables the Anchor Navigation style.", "gallery", "Main Image Navigation"), entry("mainImagePaginationAutoHide", "Auto-hide Pagination", "Hide the pagination indicator when the cursor leaves the image.", "gallery", "Main Image Navigation"), entry("mainImageSwipe", "Swipe Navigation", "Drag or swipe the main image to navigate. Works on desktop (mouse drag) and mobile (touch swipe). Requires Zoom on Hover and Touch Zoom both disabled.", "gallery", "Main Image Navigation"), entry("mainImageScrollNav", "Scroll Navigation", "Use the mouse scroll wheel to navigate between gallery images. Both scroll directions move to the next or previous image. Thumbnail gallery only.", "gallery", "Main Image Navigation"), entry("mainImageScrollNavDelay", "Scroll Response Speed", "Minimum time between scroll-triggered navigations. Higher values slow down how fast scrolling moves through images.", "gallery", "Main Image Navigation"), entry("lightboxButtonAutoHide", "Auto-hide Expand Button", "Hide the lightbox expand button when the cursor leaves the image.", "gallery", "Main Image Navigation"), entry("stackedItemGap", "Item Gap", "Vertical space between each stacked gallery item (Anchor Navigation mode).", "gallery", "Stacked Layout"), entry("stackedNavigationType", "Navigation Type", "Type of navigation for the Stacked Layout. Dot Navigation places clickable dots on the side for navigation. Thumbnails shows a vertical strip of thumbnail images instead.", "gallery", "Stacked Layout"), entry("stackedThumbsStickyTop", "Sticky Offset", "Distance from the top of the viewport when the thumbnail strip is sticky (left/right positions only).", "gallery", "Stacked Layout"), entry("stackedDotsPosition", "Dot Navigation", "Overlay dots on images or place them in a separate column outside the gallery.", "gallery", "Stacked Layout"), entry("stackedDotGap", "Dot Gap", "Space between the pagination dots in the stacked layout.", "gallery", "Stacked Layout"), entry("stackedDotSize", "Dot Size", "Diameter of each pagination dot in the stacked layout.", "gallery", "Stacked Layout"), entry("stackedDotColor", "Dot Color", "Color of the inactive pagination dots in the stacked layout.", "gallery", "Stacked Layout"), entry("stackedDotActiveColor", "Active Dot Color", "Color of the currently active pagination dot in the stacked layout.", "gallery", "Stacked Layout"), entry("anchorZoom", "Zoom on Hover", "Enable zoom when hovering over images in the anchor stacked gallery.", "gallery", "Zoom"), entry("stackedStickyEnabled", "Sticky Summary", "Keep the product summary fixed in the viewport while scrolling the stacked gallery.", "gallery", "Sticky Summary"), entry("stackedStickySelector", "Summary Selector", "CSS selector for the product summary element to apply sticky positioning.", "gallery", "Sticky Summary"), entry("stackedStickyTop", "Sticky Top Offset", "Distance from the top of the viewport when the summary is in sticky position.", "gallery", "Sticky Summary"), entry("stackedStickyBreakpoint", "Disable Below", "Viewport width below which the sticky summary is disabled. Set to 0 to always enable.", "gallery", "Sticky Summary"), entry("stackedStickyFixOverflow", "Fix Theme Overflow", "Override overflow:hidden on ancestor elements that block the sticky summary effect.", "gallery", "Sticky Summary"), entry("thumbnailStripGap", "Strip Gap", "Space between the thumbnail strip and the main image area.", "gallery", "Main Image"), entry("mainImageHeightMode", "Height Mode", "How the gallery height is managed — Lock, Adaptive, or Fixed pixel height.", "gallery", "Main Image"), entry("mainImageHeight", "Fixed Height", "Fixed height in pixels for the main image area (used when Height Mode is Fixed).", "gallery", "Main Image"), entry("mainImageFit", "Image Fit", "How the image fills the display area — contain or cover.", "gallery", "Main Image"), entry("mainImageBackground", "Background Color", "Background color shown behind the main image.", "gallery", "Main Image"), entry("mainImageBorderRadius", "Image Border Radius", "Rounded corner radius of the main image and container.", "gallery", "Main Image"), entry("mainImageTransition", "Transition Effect", "Animation when switching between gallery images.", "gallery", "Image Transition"), entry("mainImageSlideDirection", "Slide Direction", "Direction images slide when the Slide transition is active — horizontal or vertical.", "gallery", "Image Transition"), entry("mainImageTransitionDuration", "Transition Duration", "How long the image transition animation takes.", "gallery", "Image Transition"), entry("stickySplitMainSide", "Main Side", "Which column holds the sticky image viewer — left or right.", "gallery", "Sticky Split"), entry("stickySplitMainWidthPercent", "Main Column Width", "Percentage of the total gallery width used by the sticky viewer column.", "gallery", "Sticky Split"), entry("stickySplitGap", "Column Gap", "Space between the sticky viewer column and the scroll column.", "gallery", "Sticky Split"), entry("stickySplitStickyTop", "Sticky Top Offset", "Distance from the top of the viewport when the main viewer is stuck.", "gallery", "Sticky Split"), entry("stickySplitClickSync", "Click Sync", "Swap the sticky viewer to the clicked scroll item. Independent of the lightbox click action.", "gallery", "Sticky Split"), entry("stickySplitThumbZoom", "Scroll Column Zoom on Hover", "Enable zoom on hover for images in the scroll column. Uses the same zoom type as the main viewer.", "gallery", "Sticky Split"), entry("stickySplitScrollItemGap", "Item Gap", "Vertical space between images in the scroll column.", "gallery", "Sticky Split"), entry("stickySplitScrollItemAspect", "Item Aspect Ratio", "Aspect ratio enforced on each scroll item — auto uses the natural image ratio.", "gallery", "Sticky Split"), entry("stickySplitScrollItemFit", "Item Image Fit", "How the image fills the scroll item — contain or cover.", "gallery", "Sticky Split"), entry("stickySplitScrollItemBorderRadius", "Item Border Radius", "Rounded corner radius applied to each scroll item.", "gallery", "Sticky Split"), entry("stickySplitShowCaption", "Show Captions", "Show caption text below each scroll item in the scroll column.", "gallery", "Sticky Split"), entry("stickySplitClickAction", "Click Action", "What happens when a scroll item is clicked — open lightbox or do nothing.", "gallery", "Sticky Split"), entry("stickySplitShowMainInScroll", "Include Main Image", "Show the main product image as the first item in the scroll column.", "gallery", "Sticky Split"),
// ── Hierarchy Grid ────────────────────────────────────────────────────────
entry("hierarchyGridColumns", "Grid Columns", "Number of columns in the hierarchy grid below the hero image.", "gallery", "Hierarchy Grid"), entry("hierarchyGridGap", "Grid Gap", "Space between items in the hierarchy grid.", "gallery", "Hierarchy Grid"), entry("hierarchyGridItemAspect", "Item Aspect Ratio", "Aspect ratio enforced on hierarchy grid items — auto uses the natural image ratio.", "gallery", "Hierarchy Grid"), entry("hierarchyGridItemFit", "Item Image Fit", "How images fill grid items — contain or cover.", "gallery", "Hierarchy Grid"), entry("hierarchyGridItemBorderRadius", "Item Border Radius", "Rounded corner radius applied to each hierarchy grid item.", "gallery", "Hierarchy Grid"), entry("hierarchyGridZoom", "Hierarchy Grid Zoom on Hover", "Enable zoom when hovering over images in the hierarchy grid.", "gallery", "Hierarchy Grid"),
// ── Tiles ─────────────────────────────────────────────────────────────────
entry("tilesColumns", "Tiles Columns", "Number of equal-width columns in the tiles grid.", "gallery", "Tiles"), entry("tilesGap", "Tiles Gap", "Space between tiles in the grid.", "gallery", "Tiles"), entry("tilesItemAspect", "Tiles Aspect Ratio", "Aspect ratio enforced on each tile — auto uses the natural image ratio.", "gallery", "Tiles"), entry("tilesItemFit", "Tiles Image Fit", "How images fill each tile — contain or cover.", "gallery", "Tiles"), entry("tilesItemBorderRadius", "Tiles Border Radius", "Rounded corner radius applied to each tile.", "gallery", "Tiles"), entry("tilesInitialCount", "Tiles Initial Count", "Number of tiles visible before the Show More button is clicked.", "gallery", "Tiles"), entry("tilesShowMoreEnabled", "Show More Button", "Show a button at the bottom to reveal hidden tiles beyond the initial count.", "gallery", "Tiles"), entry("tilesShowMoreText", "Show More Text", "Label on the button that reveals hidden tiles.", "gallery", "Tiles"), entry("tilesShowLessText", "Show Less Text", "Label on the button that collapses tiles back to the initial count.", "gallery", "Tiles"), entry("tilesZoom", "Tiles Zoom on Hover", "Enable zoom when hovering over images in the tiles gallery.", "gallery", "Tiles"), entry("mobileBreakpoint", "Mobile Breakpoint", "Viewport width below which Anchor and Sticky Split layouts collapse to a standard carousel.", "mobile", "Mobile Fallback"), entry("mobileArrows", "Mobile Navigation Arrows", "Show previous/next arrow buttons in the mobile carousel fallback. Independent of the desktop arrow setting.", "mobile", "Mobile Fallback"), entry("mobilePagination", "Mobile Dot Pagination", "Show dot indicators in the mobile carousel fallback.", "mobile", "Mobile Fallback"), entry("mobilePaginationPosition", "Mobile Dot Position", "Where pagination dots appear in the mobile carousel fallback — bottom, left, or right.", "mobile", "Mobile Fallback"), entry("mobileShowThumbs", "Show Thumbnails on Mobile", "Show the thumbnail strip in the mobile carousel fallback.", "mobile", "Mobile Fallback"), entry("mobileThumbnailPosition", "Mobile Thumbnail Position", "Where the thumbnail strip appears on mobile — bottom, top, left, or right. Independent of the desktop thumbnail position.", "mobile", "Mobile Fallback"), entry("mobileThumbnailWidth", "Mobile Thumbnail Width", "Width of each thumbnail item on mobile. Set to 0 to use the desktop thumbnail width.", "mobile", "Mobile Fallback"), entry("mobileThumbnailHeight", "Mobile Thumbnail Height", "Height of each thumbnail item on mobile. Set to 0 to use the desktop thumbnail height.", "mobile", "Mobile Fallback"),
// ── Lightbox ──────────────────────────────────────────────────────────────
entry("lightbox", "Enable Lightbox", "Enable the full-screen lightbox image viewer.", "lightbox", "Lightbox"), entry("lightboxOnClick", "Open on Button Click", "Open the lightbox when the expand button is clicked.", "lightbox", "Opening Behaviour"), entry("lightboxButtonPosition", "Expand Button Position", "Corner of the main image where the expand button is placed.", "lightbox", "Opening Behaviour"), entry("lightboxOpenOnImageClick", "Open on Image Click", "Open the lightbox when the main image itself is clicked.", "lightbox", "Opening Behaviour"), entry("lightboxLoop", "Loop", "Loop back to the first image after the last in the lightbox.", "lightbox", "Opening Behaviour"), entry("lightboxCloseOnOverlay", "Close on Overlay Click", "Close the lightbox when the background overlay is clicked.", "lightbox", "Opening Behaviour"), entry("lightboxKeyboard", "Keyboard Navigation", "Enable arrow keys and Escape to navigate and close the lightbox.", "lightbox", "Opening Behaviour"), entry("lightboxSwipe", "Swipe / Drag Navigation", "Drag or swipe the lightbox image to navigate between images. Works on desktop (mouse drag) and mobile (touch swipe).", "lightbox", "Opening Behaviour"), entry("lightboxOverlayColor", "Overlay Background", "Background color and opacity of the dark backdrop behind the lightbox image.", "lightbox", "Display"), entry("lightboxSingleImage", "Single Image Mode", "Show only the clicked image in the lightbox instead of the full gallery.", "lightbox", "Display"), entry("lightboxShowArrows", "Navigation Arrows", "Show previous and next arrow buttons for navigating between lightbox images.", "lightbox", "Display"), entry("lightboxShowCounter", "Show Counter", "Display the current image index out of total in the lightbox.", "lightbox", "Display"), entry("lightboxShowCaption", "Show Caption", "Display the image caption in the lightbox.", "lightbox", "Display"), entry("lightboxShowThumbnails", "Show Thumbnails", "Show a thumbnail strip at the bottom of the lightbox.", "lightbox", "Display"), entry("lightboxPaginationType", "Pagination Type", "Style of pagination — thumbnails or dots.", "lightbox", "Display"), entry("lightboxZoomIn", "Zoom In/Out", "Show zoom in and zoom out buttons in the lightbox toolbar.", "lightbox", "Toolbar Buttons"), entry("lightboxScrollZoom", "Mouse Scroll Zoom", "Allow mouse wheel scrolling to zoom in and out on the lightbox image.", "lightbox", "Toolbar Buttons"), entry("lightboxShowAutoplayButton", "Autoplay Button", "Show the slideshow play/pause toggle button in the lightbox toolbar.", "lightbox", "Toolbar Buttons"), entry("lightboxFullscreen", "Fullscreen", "Show a fullscreen toggle button in the lightbox toolbar.", "lightbox", "Toolbar Buttons"), entry("lightboxImageTools", "Image Tools", "Show the center toolbar with rotate, flip, and 1:1 zoom buttons.", "lightbox", "Toolbar Buttons"), entry("lightboxShare", "Share Button", "Show a share button in the lightbox toolbar with social sharing and download options.", "lightbox", "Toolbar Buttons"), entry("lightboxShareFacebook", "Share on Facebook", "Show the Facebook sharing option in the lightbox share menu.", "lightbox", "Toolbar Buttons"), entry("lightboxShareTwitter", "Tweet", "Show the Twitter/X sharing option in the lightbox share menu.", "lightbox", "Toolbar Buttons"), entry("lightboxSharePinterest", "Pin it", "Show the Pinterest sharing option in the lightbox share menu.", "lightbox", "Toolbar Buttons"), entry("lightboxShareDownload", "Download Image", "Show the download image option in the lightbox share menu.", "lightbox", "Toolbar Buttons"), entry("lightboxZoomOrigin", "Zoom From Image", "Animate the lightbox open/close by zooming from/to the source image position.", "lightbox", "Animation"), entry("lightboxAnimationDuration", "Animation Duration", "Duration of the lightbox open/close animation.", "lightbox", "Animation"), entry("lightboxTransition", "Transition Effect", "Transition style between lightbox images.", "lightbox", "Animation"), entry("lightboxImageBorderRadius", "Image Border Radius", "Rounded corner radius for images inside the lightbox.", "lightbox", "Animation"), entry("lightboxThumbBorderRadius", "Thumbnail Border Radius", "Rounded corner radius for thumbnails inside the lightbox.", "lightbox", "Animation"), entry("lightboxAutoplay", "Autoplay", "Automatically advance to the next image in the lightbox.", "lightbox", "Slideshow"), entry("lightboxAutoplayDelay", "Autoplay Delay", "Time between slides during autoplay in milliseconds.", "lightbox", "Slideshow"),
// ── Video ─────────────────────────────────────────────────────────────────
entry("videoPosition", "Video Position", "Where product videos appear in the gallery thumbnail strip — before or after product images.", "video", "General"),
// ── Mobile ────────────────────────────────────────────────────────────────
entry("touchZoom", "Touch Zoom", "Enable pinch-to-zoom on touch devices.", "mobile", "Touch Zoom"), entry("touchZoomMin", "Min Scale", "Minimum zoom scale factor on touch devices.", "mobile", "Touch Zoom"), entry("touchZoomMax", "Max Scale", "Maximum zoom scale factor on touch devices.", "mobile", "Touch Zoom"), entry("swipeThreshold", "Swipe Threshold", "Minimum swipe distance in pixels required to advance to the next image.", "mobile", "Swipe Navigation")];

/** Compute a stable DOM id from a section title — mirrors SectionCard's own logic. */
function sectionId(title) {
  return "wcpg-s-" + title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/context/SettingsContext.jsx"
/*!******************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/context/SettingsContext.jsx ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsProvider: () => (/* binding */ SettingsProvider),
/* harmony export */   useSettings: () => (/* binding */ useSettings)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_defaultSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/defaultSettings */ "./src/admin/pages/rulesDetails/constants/defaultSettings.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const Ctx = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const HISTORY_LIMIT = 50;
function snapshot(state) {
  return {
    settings: state.settings,
    title: state.title
  };
}
function reducer(state, action) {
  switch (action.type) {
    case "LOAD":
      return {
        ...state,
        title: action.title ?? state.title,
        settings: {
          ..._constants_defaultSettings__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_SETTINGS,
          ...action.data
        },
        loaded: true,
        isDirty: false,
        past: [],
        future: []
      };
    case "SET":
      {
        const past = [...state.past, snapshot(state)].slice(-HISTORY_LIMIT);
        return {
          ...state,
          past,
          future: [],
          isDirty: true,
          settings: {
            ...state.settings,
            [action.key]: action.value
          }
        };
      }
    case "APPLY_LAYOUT":
      {
        const past = [...state.past, snapshot(state)].slice(-HISTORY_LIMIT);
        const merged = {
          ...state.settings,
          ...action.config
        };
        // Enforce constraints for gallery types that only support a subset
        // of position values — prevents a stale saved value from being
        // preserved when galleryType is overridden by the layout config.
        if (merged.galleryType === "anchor") {
          if (!["left", "right"].includes(merged.thumbnailPosition)) {
            merged.thumbnailPosition = "left";
          }
          if (!["left", "right"].includes(merged.mainImagePaginationPosition)) {
            merged.mainImagePaginationPosition = "left";
          }
          if (merged.mainImagePaginationType !== "dots") {
            merged.mainImagePaginationType = "dots";
          }
        }
        return {
          ...state,
          past,
          future: [],
          isDirty: true,
          settings: merged
        };
      }
    case "SET_TITLE":
      {
        const past = [...state.past, snapshot(state)].slice(-HISTORY_LIMIT);
        return {
          ...state,
          past,
          future: [],
          isDirty: true,
          title: action.title
        };
      }
    case "UNDO":
      {
        if (state.past.length === 0) return state;
        const prev = state.past[state.past.length - 1];
        const past = state.past.slice(0, -1);
        const future = [snapshot(state), ...state.future].slice(0, HISTORY_LIMIT);
        return {
          ...state,
          past,
          future,
          settings: prev.settings,
          title: prev.title,
          isDirty: true
        };
      }
    case "REDO":
      {
        if (state.future.length === 0) return state;
        const next = state.future[0];
        const future = state.future.slice(1);
        const past = [...state.past, snapshot(state)].slice(-HISTORY_LIMIT);
        return {
          ...state,
          past,
          future,
          settings: next.settings,
          title: next.title,
          isDirty: true
        };
      }
    case "SET_TAB":
      return {
        ...state,
        activeTab: action.tab
      };
    case "SET_GALLERY_SUB_TAB":
      return {
        ...state,
        gallerySubTab: action.subTab
      };
    case "SAVING":
      return {
        ...state,
        saving: true,
        saved: false,
        error: null
      };
    case "SAVED":
      return {
        ...state,
        saving: false,
        saved: true,
        isDirty: false
      };
    case "ERROR":
      return {
        ...state,
        saving: false,
        error: action.msg
      };
    case "CLEAR_SAVED":
      return {
        ...state,
        saved: false
      };
    default:
      return state;
  }
}
function SettingsProvider({
  children
}) {
  const [state, dispatch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, {
    title: "",
    settings: {
      ..._constants_defaultSettings__WEBPACK_IMPORTED_MODULE_1__.DEFAULT_SETTINGS
    },
    activeTab: "general",
    gallerySubTab: "general",
    loaded: false,
    saving: false,
    saved: false,
    error: null,
    isDirty: false,
    past: [],
    future: []
  });
  const actions = {
    load: (data, title) => dispatch({
      type: "LOAD",
      data,
      title
    }),
    set: (key, value) => dispatch({
      type: "SET",
      key,
      value
    }),
    applyLayout: config => dispatch({
      type: "APPLY_LAYOUT",
      config
    }),
    setTitle: title => dispatch({
      type: "SET_TITLE",
      title
    }),
    setTab: tab => dispatch({
      type: "SET_TAB",
      tab
    }),
    setGallerySubTab: subTab => dispatch({
      type: "SET_GALLERY_SUB_TAB",
      subTab
    }),
    undo: () => dispatch({
      type: "UNDO"
    }),
    redo: () => dispatch({
      type: "REDO"
    }),
    setSaving: () => dispatch({
      type: "SAVING"
    }),
    setSaved: () => dispatch({
      type: "SAVED"
    }),
    setError: msg => dispatch({
      type: "ERROR",
      msg
    }),
    clearSaved: () => dispatch({
      type: "CLEAR_SAVED"
    })
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Ctx.Provider, {
    value: {
      state,
      actions
    },
    children: children
  });
}
function useSettings() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(Ctx);
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/hooks/useKeyboardShortcuts.js"
/*!********************************************************************!*\
  !*** ./src/admin/pages/rulesDetails/hooks/useKeyboardShortcuts.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_SHORTCUTS: () => (/* binding */ DEFAULT_SHORTCUTS),
/* harmony export */   formatShortcut: () => (/* binding */ formatShortcut),
/* harmony export */   matchesShortcut: () => (/* binding */ matchesShortcut),
/* harmony export */   useKeyboardShortcuts: () => (/* binding */ useKeyboardShortcuts)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const STORAGE_KEY = "wpbean_pgs_shortcuts";
const DEFAULT_SHORTCUTS = {
  save: {
    key: "s",
    ctrl: true,
    shift: false,
    alt: false,
    label: "Save"
  },
  undo: {
    key: "z",
    ctrl: true,
    shift: false,
    alt: false,
    label: "Undo"
  },
  redo: {
    key: "z",
    ctrl: true,
    shift: true,
    alt: false,
    label: "Redo"
  },
  search: {
    key: "k",
    ctrl: true,
    shift: false,
    alt: false,
    label: "Open Search"
  }
};
function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SHORTCUTS;
    const saved = JSON.parse(raw);
    // Merge with defaults so new shortcuts added in future updates appear
    return {
      ...DEFAULT_SHORTCUTS,
      ...saved
    };
  } catch {
    return DEFAULT_SHORTCUTS;
  }
}

/** Returns true when the event matches a shortcut descriptor. */
function matchesShortcut(e, shortcut) {
  const ctrlOrMeta = e.ctrlKey || e.metaKey;
  return e.key.toLowerCase() === shortcut.key.toLowerCase() && !!shortcut.ctrl === ctrlOrMeta && !!shortcut.shift === e.shiftKey && !!shortcut.alt === e.altKey;
}
const isMac = typeof navigator !== "undefined" && /mac/i.test(navigator.platform);

/** Produce a human-readable label like ⌘K or Ctrl+K. */
function formatShortcut(sc) {
  if (!sc?.key) return "";
  const parts = [];
  if (sc.ctrl) parts.push(isMac ? "⌘" : "Ctrl");
  if (sc.alt) parts.push(isMac ? "⌥" : "Alt");
  if (sc.shift) parts.push(isMac ? "⇧" : "Shift");
  parts.push(sc.key.toUpperCase());
  return isMac ? parts.join("") : parts.join("+");
}
function useKeyboardShortcuts() {
  const [shortcuts, setShortcuts] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(load);
  const update = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((id, sc) => {
    setShortcuts(prev => {
      const next = {
        ...prev,
        [id]: {
          ...prev[id],
          ...sc
        }
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });
  }, []);
  const reset = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    setShortcuts(DEFAULT_SHORTCUTS);
  }, []);
  return {
    shortcuts,
    update,
    reset
  };
}

/***/ },

/***/ "./src/admin/pages/rulesDetails/index.js"
/*!***********************************************!*\
  !*** ./src/admin/pages/rulesDetails/index.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PluginSettingsApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PluginSettingsApp */ "./src/admin/pages/rulesDetails/PluginSettingsApp.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/admin/pages/rulesDetails/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  if (window.WPBean_PGS_Options?.nonce) {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().createNonceMiddleware(window.WPBean_PGS_Options.nonce));
  }
  const el = document.getElementById("wpbean-pgs-setting-rule-app");
  if (!el) {
    console.warn("#wpbean-pgs-setting-rule-app not found.");
    return;
  }

  // Read the settings row ID from the mount element's data attribute.
  // The PHP page sets data-id="<?php echo $id; ?>" on the div.
  const id = parseInt(el.dataset.id, 10) || 0;
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(el);
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_PluginSettingsApp__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: id
  }));
});

/***/ },

/***/ "./src/admin/pages/rulesDetails/utils/isPremium.js"
/*!*********************************************************!*\
  !*** ./src/admin/pages/rulesDetails/utils/isPremium.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canUseField: () => (/* binding */ canUseField),
/* harmony export */   isPremium: () => (/* binding */ isPremium)
/* harmony export */ });
/**
 * utils/isPremium.js
 *
 * Single source of truth for the premium status check in JS.
 *
 * PHP injects this via wp_localize_script:
 *   wp_localize_script( 'apafw-form-builder', 'WPBean_PA_CONFIG', [
 *       'is_premium' => wpbean_pa_fs()->is_paying_or_trial(),
 *   ]);
 *
 * Usage:
 *   import { isPremium, canUseField } from '../utils/isPremium';
 *
 *   if ( isPremium() ) { ... }
 *   if ( canUseField(definition) ) { ... }
 */

/** Returns true when the current site has an active premium licence. */
const isPremium = () => Boolean(window.WPBean_PGS_Options?.is_premium);

/**
 * Returns true when a field definition is usable on the current licence.
 * Free fields (no isPremium flag) are always usable.
 */
const canUseField = definition => !definition.isPremium || isPremium();

/***/ },

/***/ "./node_modules/lucide-react/dist/esm/Icon.js"
/*!****************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/Icon.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ "./node_modules/lucide-react/dist/esm/defaultAttributes.js");
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
    "svg",
    {
      ref,
      ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__["default"],
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.mergeClasses)("lucide", className),
      ...!children && !(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_2__.hasA11yProp)(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);


//# sourceMappingURL=Icon.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/createLucideIcon.js"
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/createLucideIcon.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLucideIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/src/utils.js */ "./node_modules/lucide-react/dist/esm/shared/src/utils.js");
/* harmony import */ var _Icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon.js */ "./node_modules/lucide-react/dist/esm/Icon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(
    ({ className, ...props }, ref) => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Icon_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      ref,
      iconNode,
      className: (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.mergeClasses)(
        `lucide-${(0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.toKebabCase)((0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.toPascalCase)(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = (0,_shared_src_utils_js__WEBPACK_IMPORTED_MODULE_1__.toPascalCase)(iconName);
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/defaultAttributes.js"
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/defaultAttributes.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ defaultAttributes)
/* harmony export */ });
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/arrow-left.js"
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/arrow-left.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ArrowLeft)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("arrow-left", __iconNode);


//# sourceMappingURL=arrow-left.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/check.js"
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/check.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Check)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("check", __iconNode);


//# sourceMappingURL=check.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/chevron-down.js"
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/chevron-down.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ChevronDown)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]];
const ChevronDown = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("chevron-down", __iconNode);


//# sourceMappingURL=chevron-down.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/chevron-right.js"
/*!*******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/chevron-right.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ChevronRight)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("chevron-right", __iconNode);


//# sourceMappingURL=chevron-right.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/circle-alert.js"
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/circle-alert.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ CircleAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("circle-alert", __iconNode);


//# sourceMappingURL=circle-alert.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/circle-check.js"
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/circle-check.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ CircleCheck)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("circle-check", __iconNode);


//# sourceMappingURL=circle-check.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/copy.js"
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/copy.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Copy)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
  ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
];
const Copy = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("copy", __iconNode);


//# sourceMappingURL=copy.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/corner-down-left.js"
/*!**********************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/corner-down-left.js ***!
  \**********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ CornerDownLeft)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
  ["path", { d: "m9 10-5 5 5 5", key: "1kshq7" }]
];
const CornerDownLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("corner-down-left", __iconNode);


//# sourceMappingURL=corner-down-left.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/ellipsis.js"
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/ellipsis.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Ellipsis)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
];
const Ellipsis = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("ellipsis", __iconNode);


//# sourceMappingURL=ellipsis.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/external-link.js"
/*!*******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/external-link.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ExternalLink)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
];
const ExternalLink = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("external-link", __iconNode);


//# sourceMappingURL=external-link.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/gallery-horizontal-end.js"
/*!****************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/gallery-horizontal-end.js ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ GalleryHorizontalEnd)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M2 7v10", key: "a2pl2d" }],
  ["path", { d: "M6 5v14", key: "1kq3d7" }],
  ["rect", { width: "12", height: "18", x: "10", y: "3", rx: "2", key: "13i7bc" }]
];
const GalleryHorizontalEnd = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("gallery-horizontal-end", __iconNode);


//# sourceMappingURL=gallery-horizontal-end.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/image.js"
/*!***********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/image.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Image)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
const Image = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("image", __iconNode);


//# sourceMappingURL=image.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/images.js"
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/images.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Images)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16", key: "9kzy35" }],
  ["path", { d: "M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2", key: "1t0f0t" }],
  ["circle", { cx: "13", cy: "7", r: "1", fill: "currentColor", key: "1obus6" }],
  ["rect", { x: "8", y: "2", width: "14", height: "14", rx: "2", key: "1gvhby" }]
];
const Images = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("images", __iconNode);


//# sourceMappingURL=images.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/info.js"
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/info.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Info)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("info", __iconNode);


//# sourceMappingURL=info.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/keyboard.js"
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/keyboard.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M10 8h.01", key: "1r9ogq" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M14 8h.01", key: "1primd" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }],
  ["path", { d: "M18 8h.01", key: "emo2bl" }],
  ["path", { d: "M6 8h.01", key: "x9i8wu" }],
  ["path", { d: "M7 16h10", key: "wp8him" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  ["rect", { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" }]
];
const Keyboard = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("keyboard", __iconNode);


//# sourceMappingURL=keyboard.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/layers.js"
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/layers.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Layers)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("layers", __iconNode);


//# sourceMappingURL=layers.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/layout-grid.js"
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/layout-grid.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ LayoutGrid)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "7", height: "7", x: "3", y: "3", rx: "1", key: "1g98yp" }],
  ["rect", { width: "7", height: "7", x: "14", y: "3", rx: "1", key: "6d4xhi" }],
  ["rect", { width: "7", height: "7", x: "14", y: "14", rx: "1", key: "nxv5o0" }],
  ["rect", { width: "7", height: "7", x: "3", y: "14", rx: "1", key: "1bb6yr" }]
];
const LayoutGrid = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("layout-grid", __iconNode);


//# sourceMappingURL=layout-grid.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/layout-template.js"
/*!*********************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/layout-template.js ***!
  \*********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ LayoutTemplate)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "18", height: "7", x: "3", y: "3", rx: "1", key: "f1a2em" }],
  ["rect", { width: "9", height: "7", x: "3", y: "14", rx: "1", key: "jqznyg" }],
  ["rect", { width: "5", height: "7", x: "16", y: "14", rx: "1", key: "q5h2i8" }]
];
const LayoutTemplate = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("layout-template", __iconNode);


//# sourceMappingURL=layout-template.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/loader-circle.js"
/*!*******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/loader-circle.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ LoaderCircle)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]];
const LoaderCircle = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("loader-circle", __iconNode);


//# sourceMappingURL=loader-circle.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/lock.js"
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/lock.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Lock)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("lock", __iconNode);


//# sourceMappingURL=lock.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/maximize-2.js"
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/maximize-2.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Maximize2)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "m21 3-7 7", key: "1l2asr" }],
  ["path", { d: "m3 21 7-7", key: "tjx5ai" }],
  ["path", { d: "M9 21H3v-6", key: "wtvkvv" }]
];
const Maximize2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("maximize-2", __iconNode);


//# sourceMappingURL=maximize-2.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/menu.js"
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/menu.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Menu)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 18h16", key: "19g7jn" }],
  ["path", { d: "M4 6h16", key: "1o0s65" }]
];
const Menu = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("menu", __iconNode);


//# sourceMappingURL=menu.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/monitor.js"
/*!*************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/monitor.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Monitor)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
  ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
  ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
];
const Monitor = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("monitor", __iconNode);


//# sourceMappingURL=monitor.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/navigation-2.js"
/*!******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/navigation-2.js ***!
  \******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Navigation2)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["polygon", { points: "12 2 19 21 12 17 5 21 12 2", key: "x8c0qg" }]
];
const Navigation2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("navigation-2", __iconNode);


//# sourceMappingURL=navigation-2.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/package.js"
/*!*************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/package.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Package)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",
      key: "1a0edw"
    }
  ],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
  ["polyline", { points: "3.29 7 12 12 20.71 7", key: "ousv84" }],
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }]
];
const Package = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("package", __iconNode);


//# sourceMappingURL=package.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/play.js"
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/play.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Play)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
];
const Play = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("play", __iconNode);


//# sourceMappingURL=play.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/refresh-cw.js"
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/refresh-cw.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ RefreshCw)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("refresh-cw", __iconNode);


//# sourceMappingURL=refresh-cw.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js"
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ RotateCcw)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }]
];
const RotateCcw = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("rotate-ccw", __iconNode);


//# sourceMappingURL=rotate-ccw.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/save.js"
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/save.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("save", __iconNode);


//# sourceMappingURL=save.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/search.js"
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/search.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
];
const Search = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("search", __iconNode);


//# sourceMappingURL=search.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/settings.js"
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/settings.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Settings)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("settings", __iconNode);


//# sourceMappingURL=settings.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js"
/*!************************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ SlidersHorizontal)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["line", { x1: "21", x2: "14", y1: "4", y2: "4", key: "obuewd" }],
  ["line", { x1: "10", x2: "3", y1: "4", y2: "4", key: "1q6298" }],
  ["line", { x1: "21", x2: "12", y1: "12", y2: "12", key: "1iu8h1" }],
  ["line", { x1: "8", x2: "3", y1: "12", y2: "12", key: "ntss68" }],
  ["line", { x1: "21", x2: "16", y1: "20", y2: "20", key: "14d8ph" }],
  ["line", { x1: "12", x2: "3", y1: "20", y2: "20", key: "m0wm8r" }],
  ["line", { x1: "14", x2: "14", y1: "2", y2: "6", key: "14e1ph" }],
  ["line", { x1: "8", x2: "8", y1: "10", y2: "14", key: "1i6ji0" }],
  ["line", { x1: "16", x2: "16", y1: "18", y2: "22", key: "1lctlv" }]
];
const SlidersHorizontal = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("sliders-horizontal", __iconNode);


//# sourceMappingURL=sliders-horizontal.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/smartphone.js"
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/smartphone.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Smartphone)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["rect", { width: "14", height: "20", x: "5", y: "2", rx: "2", ry: "2", key: "1yt0o3" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }]
];
const Smartphone = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("smartphone", __iconNode);


//# sourceMappingURL=smartphone.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/sparkles.js"
/*!**************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/sparkles.js ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Sparkles)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("sparkles", __iconNode);


//# sourceMappingURL=sparkles.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/tag.js"
/*!*********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/tag.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Tag)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
      key: "vktsd0"
    }
  ],
  ["circle", { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" }]
];
const Tag = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("tag", __iconNode);


//# sourceMappingURL=tag.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/toggle-left.js"
/*!*****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/toggle-left.js ***!
  \*****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ToggleLeft)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "9", cy: "12", r: "3", key: "u3jwor" }],
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" }]
];
const ToggleLeft = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("toggle-left", __iconNode);


//# sourceMappingURL=toggle-left.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/trash-2.js"
/*!*************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/trash-2.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Trash2)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("trash-2", __iconNode);


//# sourceMappingURL=trash-2.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.js"
/*!********************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/triangle-alert.js ***!
  \********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ TriangleAlert)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq"
    }
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }]
];
const TriangleAlert = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("triangle-alert", __iconNode);


//# sourceMappingURL=triangle-alert.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/wand-sparkles.js"
/*!*******************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/wand-sparkles.js ***!
  \*******************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ WandSparkles)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6"
    }
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }]
];
const WandSparkles = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("wand-sparkles", __iconNode);


//# sourceMappingURL=wand-sparkles.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/x.js"
/*!*******************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/x.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ X)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("x", __iconNode);


//# sourceMappingURL=x.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/zap.js"
/*!*********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/zap.js ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Zap)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("zap", __iconNode);


//# sourceMappingURL=zap.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/zoom-in.js"
/*!*************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/zoom-in.js ***!
  \*************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ ZoomIn)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
];
const ZoomIn = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("zoom-in", __iconNode);


//# sourceMappingURL=zoom-in.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/shared/src/utils.js"
/*!****************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/shared/src/utils.js ***!
  \****************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hasA11yProp: () => (/* binding */ hasA11yProp),
/* harmony export */   mergeClasses: () => (/* binding */ mergeClasses),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase),
/* harmony export */   toKebabCase: () => (/* binding */ toKebabCase),
/* harmony export */   toPascalCase: () => (/* binding */ toPascalCase)
/* harmony export */ });
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};


//# sourceMappingURL=utils.js.map


/***/ },

/***/ "./src/admin/pages/rulesDetails/style.scss"
/*!*************************************************!*\
  !*** ./src/admin/pages/rulesDetails/style.scss ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ },

/***/ "@wordpress/api-fetch"
/*!**********************************!*\
  !*** external ["wp","apiFetch"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["apiFetch"];

/***/ },

/***/ "@wordpress/dom-ready"
/*!**********************************!*\
  !*** external ["wp","domReady"] ***!
  \**********************************/
(module) {

module.exports = window["wp"]["domReady"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
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
/******/ 			"admin/assets/build/rulesDetails": 0,
/******/ 			"admin/assets/build/style-rulesDetails": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["admin/assets/build/style-rulesDetails"], () => (__webpack_require__("./src/admin/pages/rulesDetails/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=rulesDetails.js.map