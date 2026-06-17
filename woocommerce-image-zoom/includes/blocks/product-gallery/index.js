/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

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

/***/ },

/***/ "@wordpress/url"
/*!*****************************!*\
  !*** external ["wp","url"] ***!
  \*****************************/
(module) {

module.exports = window["wp"]["url"];

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/blocks/product-gallery/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/url */ "@wordpress/url");
/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








const BLOCK_NAME = "wpbean-pgs/product-gallery";
function decodeHtml(html) {
  const el = document.createElement("textarea");
  el.innerHTML = html;
  return el.value;
}
function productLabel(id, renderedTitle) {
  return `${decodeHtml(renderedTitle)} (#${id})`;
}

// ── Icons ──────────────────────────────────────────────────────────────────────

function ZoomIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "36",
    height: "36",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("path", {
      d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("circle", {
      cx: "12",
      cy: "13",
      r: "4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("line", {
      x1: "12",
      y1: "11",
      x2: "12",
      y2: "15"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("line", {
      x1: "10",
      y1: "13",
      x2: "14",
      y2: "13"
    })]
  });
}

// ── Placeholder component ──────────────────────────────────────────────────────

function GalleryPlaceholder({
  productId,
  productLabel
}) {
  const adminUrl = window?.WPBean_PGS_Options?.adminUrl ?? "";
  const rulesUrl = adminUrl ? `${adminUrl}admin.php?page=wpbean-product-gallery-rules` : "#";
  const thumbStyle = {
    height: "66px",
    backgroundColor: "#dde0e4",
    borderRadius: "3px"
  };
  const contextNote = productId && productLabel ? `${productLabel} (#${productId})` : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("current product", "wpbean-product-gallery-slider-for-woocommerce");
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: "8px",
      minHeight: "310px",
      borderRadius: "4px",
      overflow: "hidden"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        width: "74px",
        flexShrink: 0
      },
      children: [0, 1, 2, 3].map(i => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
        style: thumbStyle
      }, i))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      style: {
        flex: 1,
        backgroundColor: "#dde0e4",
        borderRadius: "3px"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.92)",
        padding: "28px 24px",
        textAlign: "center",
        gap: "10px"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
        style: {
          color: "#3858e9",
          lineHeight: 1
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(ZoomIcon, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("strong", {
        style: {
          display: "block",
          fontSize: "14px",
          fontWeight: 600,
          color: "#1e1e1e",
          lineHeight: 1.4
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("WPBean Product Gallery", "wpbean-product-gallery-slider-for-woocommerce")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("p", {
        style: {
          margin: 0,
          fontSize: "12.5px",
          color: "#757575",
          maxWidth: "300px",
          lineHeight: 1.6
        },
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("The gallery renders here on the frontend based on your active Gallery Rule. This block has no individual settings.", "wpbean-product-gallery-slider-for-woocommerce")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
        style: {
          margin: 0,
          fontSize: "12px",
          color: "#3858e9",
          fontWeight: 500
        },
        children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Showing gallery for: ", "wpbean-product-gallery-slider-for-woocommerce"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("em", {
          children: contextNote
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("a", {
        href: rulesUrl,
        style: {
          display: "inline-block",
          marginTop: "6px",
          padding: "7px 18px",
          backgroundColor: "#3858e9",
          color: "#fff",
          borderRadius: "4px",
          fontSize: "12px",
          fontWeight: 500,
          textDecoration: "none",
          lineHeight: 1.5,
          boxShadow: "0 1px 3px rgba(56,88,233,0.35)"
        },
        target: "_blank",
        rel: "noreferrer",
        onClick: e => e.stopPropagation(),
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Manage Gallery Rules ↗", "wpbean-product-gallery-slider-for-woocommerce")
      })]
    })]
  });
}

// ── Block edit component ───────────────────────────────────────────────────────

function Edit({
  attributes,
  setAttributes
}) {
  const {
    productId
  } = attributes;

  // The saved selection — kept separately so the search results never evict it.
  const [selectedOption, setSelectedOption] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const [searchOptions, setSearchOptions] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const [filterValue, setFilterValue] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)("");

  // Merge: always keep the selected option visible regardless of search results.
  const options = selectedOption ? [selectedOption, ...searchOptions.filter(o => o.value !== selectedOption.value)] : searchOptions;

  // On mount: if a productId is already saved, fetch its title once.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (!productId) return;
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)("/wp/v2/product", {
        include: [productId],
        per_page: 1,
        _fields: "id,title"
      })
    }).then(results => {
      if (results?.[0]) {
        const p = results[0];
        setSelectedOption({
          value: p.id,
          label: productLabel(p.id, p.title.rendered),
          title: decodeHtml(p.title.rendered)
        });
      }
    }).catch(() => {});
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Fetch matching products whenever the user types in the combobox.
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const query = {
      search: filterValue,
      per_page: 20,
      status: "publish",
      _fields: "id,title"
    };
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5___default()({
      path: (0,_wordpress_url__WEBPACK_IMPORTED_MODULE_6__.addQueryArgs)("/wp/v2/product", query)
    }).then(results => {
      setSearchOptions((results ?? []).map(p => ({
        value: p.id,
        label: productLabel(p.id, p.title.rendered),
        title: decodeHtml(p.title.rendered)
      })));
    }).catch(() => {});
  }, [filterValue]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    style: {
      padding: 0,
      border: "1px dashed #c3c4c7",
      borderRadius: "4px",
      overflow: "hidden"
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Product", "wpbean-product-gallery-slider-for-woocommerce"),
        initialOpen: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ComboboxControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Override product", "wpbean-product-gallery-slider-for-woocommerce"),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Optional. Leave blank to display the gallery for the current product page.", "wpbean-product-gallery-slider-for-woocommerce"),
          value: productId || null,
          options: options,
          onFilterValueChange: val => setFilterValue(val),
          onChange: val => {
            const id = val ? parseInt(val, 10) : 0;
            setAttributes({
              productId: id
            });
            const match = options.find(o => o.value === id);
            setSelectedOption(match ?? null);
          },
          allowReset: true
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(GalleryPlaceholder, {
        productId: productId,
        productLabel: selectedOption?.title ?? ""
      })
    })]
  });
}

// ── Register ───────────────────────────────────────────────────────────────────

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.registerBlockType)(BLOCK_NAME, {
  edit: Edit,
  // Dynamic block: all output is server-rendered, save returns null.
  save: () => null
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map