/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/pages/rulesCrud/CrudApp.jsx"
/*!***********************************************!*\
  !*** ./src/admin/pages/rulesCrud/CrudApp.jsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CrudApp)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/* harmony import */ var _hooks_useCrudApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useCrudApi */ "./src/admin/pages/rulesCrud/hooks/useCrudApi.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Header */ "./src/admin/pages/rulesCrud/components/Header.jsx");
/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Controls */ "./src/admin/pages/rulesCrud/components/Controls.jsx");
/* harmony import */ var _components_CrudTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CrudTable */ "./src/admin/pages/rulesCrud/components/CrudTable.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * CrudApp.jsx
 * Root component. useCrudApi is called ONCE here — it owns the fetch loop.
 * All mutation handlers flow down as props so no child needs to call the hook.
 */








function MultiRuleProTip() {
  const isPremium = window.WPBean_PGS_Options?.is_premium;
  if (isPremium) return null;
  const upgradeUrl = window.WPBean_PGS_Options?.upgradeUrl || "#";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "px-4 sm:px-6 py-3 border-t border-gray-100",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
      className: "text-xs text-gray-400 text-center m-0",
      children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pro tip: multiple rules let you show different gallery layouts per product or category.", "wpbean-product-gallery-slider-for-woocommerce"), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("a", {
        href: upgradeUrl,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "text-gray-400 underline hover:text-gray-500 transition-colors",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upgrade to Pro", "wpbean-product-gallery-slider-for-woocommerce")
      })]
    })
  });
}
function CrudAppInner() {
  const {
    handleToggleStatus,
    handleDuplicate,
    handleTrash,
    handleRestore,
    handlePermanentDelete,
    handleBulkTrash,
    handleBulkRestore,
    handleBulkPermanentDelete,
    handleBulkStatus
  } = (0,_hooks_useCrudApi__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
    className: "mx-auto p-3 sm:p-6 bg-gray-50 min-h-screen",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Controls__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onBulkTrash: handleBulkTrash,
        onBulkRestore: handleBulkRestore,
        onBulkPermanentDelete: handleBulkPermanentDelete,
        onBulkStatus: handleBulkStatus
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_CrudTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onToggleStatus: handleToggleStatus,
        onDuplicate: handleDuplicate,
        onTrash: handleTrash,
        onRestore: handleRestore,
        onPermanentDelete: handlePermanentDelete
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(MultiRuleProTip, {})]
    })
  });
}
function CrudApp() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.CrudProvider, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(CrudAppInner, {})
  });
}

/***/ },

/***/ "./src/admin/pages/rulesCrud/api/forms.js"
/*!************************************************!*\
  !*** ./src/admin/pages/rulesCrud/api/forms.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bulkPermanentDeleteForms: () => (/* binding */ bulkPermanentDeleteForms),
/* harmony export */   bulkRestoreForms: () => (/* binding */ bulkRestoreForms),
/* harmony export */   bulkTrashForms: () => (/* binding */ bulkTrashForms),
/* harmony export */   bulkUpdateStatus: () => (/* binding */ bulkUpdateStatus),
/* harmony export */   createForm: () => (/* binding */ createForm),
/* harmony export */   duplicateForm: () => (/* binding */ duplicateForm),
/* harmony export */   getForm: () => (/* binding */ getForm),
/* harmony export */   getForms: () => (/* binding */ getForms),
/* harmony export */   patchForm: () => (/* binding */ patchForm),
/* harmony export */   permanentDeleteForm: () => (/* binding */ permanentDeleteForm),
/* harmony export */   restoreForm: () => (/* binding */ restoreForm),
/* harmony export */   toggleFormStatus: () => (/* binding */ toggleFormStatus),
/* harmony export */   trashForm: () => (/* binding */ trashForm),
/* harmony export */   updateForm: () => (/* binding */ updateForm)
/* harmony export */ });
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/**
 * api/forms.js
 * All REST API calls for the forms CRUD page.
 * Base endpoint: /wp-json/wpbean-pgs/v1/settings
 */


const BASE = "/wpbean-pgs/v1/settings";

/**
 * @typedef {Object} Setting
 * @property {string} id
 * @property {string} title
 * @property {string} status      - "publish" | "draft" | "trash"
 * @property {string} created_at
 */

/**
 * @typedef {Object} FormsResponse
 * @property {Form[]} items
 * @property {number} total
 */

const getForms = ({
  page = 1,
  per_page = 10,
  search = "",
  status = ""
} = {}) => {
  const query = new URLSearchParams({
    page,
    per_page,
    ...(search && {
      search
    }),
    ...(status && {
      status
    })
  }).toString();
  return _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
    path: `${BASE}?${query}`
  });
};
const getForm = id => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/${id}`
});
const createForm = data => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: BASE,
  method: "POST",
  data
});

/**
 * Full update — replaces title, status, and config.
 * Used by the form builder Save button.
 */
const updateForm = (id, data) => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/${id}`,
  method: "PUT",
  data
});

/**
 * Partial update — only sends the fields you provide.
 * Uses PATCH so PHP only writes the keys that are present in the request.
 */
const patchForm = (id, data) => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/${id}`,
  method: "PATCH",
  data
});
const duplicateForm = async id => {
  const form = await getForm(id);
  return createForm({
    title: `${form.title} (Copy)`,
    status: "draft",
    config: form.config ?? {}
  });
};

/**
 * Toggles status between "publish" and "draft".
 * Uses PATCH so only the status column is touched in the DB.
 */
const toggleFormStatus = (id, currentStatus) => patchForm(id, {
  status: currentStatus === "publish" ? "draft" : "publish"
});

/** Move to trash (soft delete — recoverable). */
const trashForm = id => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/${id}/trash`,
  method: "POST"
});

/** Restore a trashed form back to draft. */
const restoreForm = id => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/${id}/restore`,
  method: "POST"
});

/** Hard delete — only call this after user confirmation. */
const permanentDeleteForm = id => _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
  path: `${BASE}/${id}`,
  method: "DELETE"
});

// ── Bulk ──────────────────────────────────────────────────────────────────────

const bulkTrashForms = ids => Promise.all(ids.map(trashForm));
const bulkRestoreForms = ids => Promise.all(ids.map(restoreForm));
const bulkPermanentDeleteForms = ids => Promise.all(ids.map(permanentDeleteForm));
const bulkUpdateStatus = (ids, status) => Promise.all(ids.map(id => patchForm(id, {
  status
})));

/***/ },

/***/ "./src/admin/pages/rulesCrud/components/Controls.jsx"
/*!***********************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/Controls.jsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controls)
/* harmony export */ });
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/* harmony import */ var _controls_ControlSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/ControlSearch */ "./src/admin/pages/rulesCrud/components/controls/ControlSearch.jsx");
/* harmony import */ var _controls_StatusFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/StatusFilter */ "./src/admin/pages/rulesCrud/components/controls/StatusFilter.jsx");
/* harmony import */ var _controls_BulkActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/BulkActions */ "./src/admin/pages/rulesCrud/components/controls/BulkActions.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * components/Controls.jsx
 * Receives bulk handlers from FormsListApp, passes to BulkActions.
 */






function Controls({
  onBulkTrash,
  onBulkRestore,
  onBulkPermanentDelete,
  onBulkStatus
}) {
  const {
    selected
  } = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.useCrudListState)();
  const hasSelection = selected.length > 0;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "px-4 sm:px-6 py-4 bg-gray-50 border-b border-gray-200",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "flex flex-col sm:flex-row sm:items-center gap-3",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_controls_ControlSearch__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_controls_StatusFilter__WEBPACK_IMPORTED_MODULE_2__["default"], {}), hasSelection && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_controls_BulkActions__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onBulkTrash: onBulkTrash,
          onBulkRestore: onBulkRestore,
          onBulkPermanentDelete: onBulkPermanentDelete,
          onBulkStatus: onBulkStatus
        })]
      })
    })
  });
}

/***/ },

/***/ "./src/admin/pages/rulesCrud/components/CrudTable.jsx"
/*!************************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/CrudTable.jsx ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CrudTable)
/* harmony export */ });
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/* harmony import */ var _tableElements_ResultsInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableElements/ResultsInfo */ "./src/admin/pages/rulesCrud/components/tableElements/ResultsInfo.jsx");
/* harmony import */ var _tableElements_TableHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableElements/TableHeader */ "./src/admin/pages/rulesCrud/components/tableElements/TableHeader.jsx");
/* harmony import */ var _tableElements_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableElements/TableBody */ "./src/admin/pages/rulesCrud/components/tableElements/TableBody.jsx");
/* harmony import */ var _tableElements_TableFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tableElements/TableFooter */ "./src/admin/pages/rulesCrud/components/tableElements/TableFooter.jsx");
/* harmony import */ var _tableElements_EmptyState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tableElements/EmptyState */ "./src/admin/pages/rulesCrud/components/tableElements/EmptyState.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 * components/CrudTable.jsx
 * Table shell — loading skeleton, empty state, or full table.
 * Receives row action handlers from FormsListApp and passes to TableBody.
 */








function CrudTable({
  onToggleStatus,
  onDuplicate,
  onTrash,
  onRestore,
  onPermanentDelete
}) {
  const {
    loading,
    error,
    items
  } = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.useCrudListState)();
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "min-h-[200px] flex items-center justify-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "animate-pulse space-y-4 w-full p-6",
        children: [...Array(5)].map((_, i) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "h-6 bg-gray-200 rounded w-full"
        }, i))
      })
    });
  }
  if (error) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "px-6 py-8 text-center",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
        className: "text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3",
        children: error
      })
    });
  }
  if (items.length === 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tableElements_EmptyState__WEBPACK_IMPORTED_MODULE_5__["default"], {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tableElements_ResultsInfo__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "overflow-x-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("table", {
        className: "w-full",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tableElements_TableHeader__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tableElements_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
          onToggleStatus: onToggleStatus,
          onDuplicate: onDuplicate,
          onTrash: onTrash,
          onRestore: onRestore,
          onPermanentDelete: onPermanentDelete
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_tableElements_TableFooter__WEBPACK_IMPORTED_MODULE_4__["default"], {})]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesCrud/components/Header.jsx"
/*!*********************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/Header.jsx ***!
  \*********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/sparkles.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/lock.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/zap.js");
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/* harmony import */ var _admin_pages_rulesDetails_api_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/admin/pages/rulesDetails/api/settings */ "./src/admin/pages/rulesDetails/api/settings.js");
/* harmony import */ var _admin_pages_rulesDetails_components_AiGeneratorModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/admin/pages/rulesDetails/components/AiGeneratorModal */ "./src/admin/pages/rulesDetails/components/AiGeneratorModal.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
/**
 * components/Header.jsx
 * Page title, subtitle, "Add New" CTA, and "Generate with AI" button.
 */









function UpgradeModal({
  open,
  onClose,
  upgradeUrl
}) {
  if (!open) return null;
  const portal = document.getElementById("wpbean-pgs-settings-app");
  const modal = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4",
    style: {
      background: "rgba(0,0,0,0.45)"
    },
    onClick: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "bg-white rounded-lg shadow-xl w-full max-w-md",
      onClick: e => e.stopPropagation(),
      role: "dialog",
      "aria-modal": "true",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "flex items-start justify-between p-5 pb-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "flex items-center gap-3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
            className: "flex items-center justify-center w-9 h-9 rounded-full bg-amber-100 shrink-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
              className: "w-4.5 h-4.5 text-amber-500"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h3", {
            className: "text-base font-semibold text-gray-900 m-0",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Unlock Unlimited Rules", "wpbean-product-gallery-slider-for-woocommerce")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
          onClick: onClose,
          className: "text-gray-400 hover:text-gray-600 transition-colors p-0.5 rounded",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "w-4 h-4"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "px-5 pb-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
          className: "text-sm text-gray-600 mb-2 mt-0",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("You're on the free plan, which includes 1 gallery rule.", "wpbean-product-gallery-slider-for-woocommerce")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
          className: "text-sm text-gray-600 mb-5 mt-0",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upgrade to Pro to create unlimited rules — assign different gallery layouts to different products, categories, or your entire store.", "wpbean-product-gallery-slider-for-woocommerce")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "flex justify-end gap-2.5",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
            onClick: onClose,
            className: "px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Not Now", "wpbean-product-gallery-slider-for-woocommerce")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("a", {
            href: upgradeUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-amber-500 hover:bg-amber-600 rounded-md no-underline transition-colors",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
              className: "w-3.5 h-3.5"
            }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upgrade to Pro", "wpbean-product-gallery-slider-for-woocommerce")]
          })]
        })]
      })]
    })
  });
  return portal ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createPortal)(modal, portal) : modal;
}
function Header() {
  const {
    limitReached,
    loaded
  } = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_7__.useCrudListState)();
  const isPremium = window.WPBean_PGS_Options?.is_premium;
  const upgradeUrl = window.WPBean_PGS_Options?.upgradeUrl || "#";
  const adminUrl = window.WPBean_PGS_Options?.adminUrl || "";
  const isLocked = !isPremium && limitReached;
  const [aiOpen, setAiOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [creating, setCreating] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [upgradeOpen, setUpgradeOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const handleAiApply = async (settings, title) => {
    setCreating(true);
    try {
      const {
        id
      } = await (0,_admin_pages_rulesDetails_api_settings__WEBPACK_IMPORTED_MODULE_8__.createSettings)({
        title: title || (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("AI Gallery Rule", "wpbean-product-gallery-slider-for-woocommerce"),
        status: "draft",
        config: settings
      });
      const url = new URL(adminUrl + "admin.php");
      url.searchParams.set("page", "wpbean-product-gallery-rule");
      url.searchParams.set("id", id);
      window.location.href = url.toString();
    } catch {
      setCreating(false);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "px-4 sm:px-6 py-5 border-b border-gray-200",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("h1", {
            className: "text-xl sm:text-2xl font-bold text-gray-900 p-0 m-0",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Settings Rules", "wpbean-product-gallery-slider-for-woocommerce")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("p", {
            className: "mt-1 text-xs sm:text-sm text-gray-500",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Manage your zoom settings rules and configurations.", "wpbean-product-gallery-slider-for-woocommerce")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
          className: "flex items-center gap-2 w-full sm:w-auto",
          children: [loaded && !isLocked && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
            type: "button",
            disabled: creating,
            onClick: () => setAiOpen(true),
            className: "inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-md text-sm font-medium border border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 hover:border-violet-300 transition-all w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
              className: "w-3.5 h-3.5"
            }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Generate with AI", "wpbean-product-gallery-slider-for-woocommerce")]
          }), isLocked ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
            type: "button",
            onClick: () => setUpgradeOpen(true),
            title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upgrade to Pro to create unlimited rules", "wpbean-product-gallery-slider-for-woocommerce"),
            className: "inline-flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-400 border border-gray-200 text-sm font-medium rounded-md w-full sm:w-auto hover:bg-gray-200 transition-colors cursor-pointer",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              className: "w-4 h-4 me-2"
            }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add New", "wpbean-product-gallery-slider-for-woocommerce")]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("a", {
            href: (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_7__.getAddNewUrl)(),
            className: "inline-flex items-center justify-center px-4 py-2 bg-accent text-white border border-accent shadow-btn-accent hover:bg-accent-hover hover:border-accent-hover text-sm font-medium rounded-md transition-all w-full sm:w-auto no-underline",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "w-4 h-4 me-2"
            }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Add New", "wpbean-product-gallery-slider-for-woocommerce")]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_admin_pages_rulesDetails_components_AiGeneratorModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      open: aiOpen,
      onClose: () => setAiOpen(false),
      onApply: handleAiApply,
      mode: "create"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(UpgradeModal, {
      open: upgradeOpen,
      onClose: () => setUpgradeOpen(false),
      upgradeUrl: upgradeUrl
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesCrud/components/controls/BulkActions.jsx"
/*!***********************************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/controls/BulkActions.jsx ***!
  \***********************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BulkActions)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * components/controls/BulkActions.jsx
 *
 * Options switch based on the active status filter:
 *   Trash view  →  Restore | Delete Permanently
 *   Normal view →  Set Published | Set Draft | Move to Trash
 */






function BulkActions({
  onBulkTrash,
  onBulkRestore,
  onBulkPermanentDelete,
  onBulkStatus
}) {
  const {
    selected,
    status: activeFilter
  } = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.useCrudListState)();
  const [bulkAction, setBulkAction] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("none");
  const isTrashView = activeFilter === "trash";
  const apply = () => {
    if (bulkAction === "none" || selected.length === 0) return;
    switch (bulkAction) {
      case "trash":
        onBulkTrash(selected);
        break;
      case "restore":
        onBulkRestore(selected);
        break;
      case "delete_forever":
        onBulkPermanentDelete(selected);
        break;
      default:
        onBulkStatus(selected, bulkAction);
    }
    setBulkAction("none");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "flex items-center space-x-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
      value: bulkAction,
      onChange: e => setBulkAction(e.target.value),
      className: "w-full bg-white hover:text-inherit border border-gray-200 rounded-md ps-3 pe-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
        value: "none",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bulk Actions", "wpbean-product-gallery-slider-for-woocommerce")
      }), isTrashView ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
          value: "restore",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Restore", "wpbean-product-gallery-slider-for-woocommerce")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
          value: "delete_forever",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delete Permanently", "wpbean-product-gallery-slider-for-woocommerce")
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
          value: "publish",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Set Published", "wpbean-product-gallery-slider-for-woocommerce")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
          value: "draft",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Set Draft", "wpbean-product-gallery-slider-for-woocommerce")
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
          value: "trash",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move to Trash", "wpbean-product-gallery-slider-for-woocommerce")
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      onClick: apply,
      disabled: bulkAction === "none",
      className: "px-3 py-2 bg-gray-200/80 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-300/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Apply", "wpbean-product-gallery-slider-for-woocommerce")
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesCrud/components/controls/ControlSearch.jsx"
/*!*************************************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/controls/ControlSearch.jsx ***!
  \*************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControlSearch)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * components/controls/ControlSearch.jsx
 */






function ControlSearch() {
  const dispatch = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_4__.useCrudListDispatch)();
  const state = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_4__.useCrudListState)();
  const [local, setLocal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(state.search);
  const debounce = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_4__.ACTIONS.SET_SEARCH,
      payload: local
    }), 350);
    return () => clearTimeout(debounce.current);
  }, [local]);

  // Sync on external reset
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setLocal(state.search);
  }, [state.search]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "relative flex-1 sm:flex-initial",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "absolute start-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("input", {
      type: "search",
      placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Search rules...", "wpbean-product-gallery-slider-for-woocommerce"),
      value: local,
      onChange: e => setLocal(e.target.value),
      className: "w-full ps-10 pe-10 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent [&::-webkit-search-cancel-button]:hidden"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      onClick: () => {
        setLocal("");
        dispatch({
          type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_4__.ACTIONS.SET_SEARCH,
          payload: ""
        });
      },
      className: `absolute end-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 w-4 h-4 flex items-center justify-center transition-all duration-200 ${local ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`,
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Clear search", "wpbean-product-gallery-slider-for-woocommerce"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "w-4 h-4"
      })
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesCrud/components/controls/StatusFilter.jsx"
/*!************************************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/controls/StatusFilter.jsx ***!
  \************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StatusFilter)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * components/controls/StatusFilter.jsx
 */





function StatusFilter() {
  const dispatch = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.useCrudListDispatch)();
  const state = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.useCrudListState)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
    value: state.status,
    onChange: e => dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.ACTIONS.SET_STATUS,
      payload: e.target.value
    }),
    className: "w-full sm:w-auto bg-white hover:text-inherit border border-gray-200 rounded-md ps-4 pe-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
      value: "",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("All Status", "wpbean-product-gallery-slider-for-woocommerce")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
      value: "publish",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Published", "wpbean-product-gallery-slider-for-woocommerce")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
      value: "draft",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Draft", "wpbean-product-gallery-slider-for-woocommerce")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
      value: "trash",
      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Trash", "wpbean-product-gallery-slider-for-woocommerce")
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesCrud/components/tableElements/ActionDropdown.jsx"
/*!*******************************************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/tableElements/ActionDropdown.jsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionDropdown)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/ellipsis.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/copy.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pencil.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/toggle-left.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/* harmony import */ var _ConfirmModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ConfirmModal */ "./src/admin/pages/rulesCrud/components/tableElements/ConfirmModal.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);
/**
 * components/tableElements/ActionDropdown.jsx
 *
 * Non-trashed forms show:  Edit · Duplicate · Publish/Draft toggle · Move to Trash
 * Trashed forms show:      Restore · Delete Permanently (with confirm modal)
 *
 * Edit and Duplicate are hidden for trashed forms since the builder
 * shouldn't open a trashed form.
 */







function ActionDropdown({
  form,
  onToggleStatus,
  onDuplicate,
  onTrash,
  onRestore,
  onPermanentDelete
}) {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [position, setPosition] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
    top: 0,
    right: 0,
    left: undefined
  });
  const [confirmPermDelete, setConfirmPermDelete] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
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
  const {
    limitReached
  } = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_9__.useCrudListState)();
  const isPremium = window.WPBean_PGS_Options?.is_premium;
  const close = () => setIsOpen(false);
  const portalTarget = document.getElementById("wpbean-pgs-settings-app");
  const isTrashed = form.status === "trash";
  const isPublished = form.status === "publish";
  const canDuplicate = isPremium || !limitReached;
  const dropdown = isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
      className: "fixed inset-0 z-10",
      onClick: close
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      className: "fixed w-52 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 py-1 z-20",
      style: {
        top: `${position.top}px`,
        ...(position.left !== undefined ? {
          left: `${position.left}px`
        } : {
          right: `${position.right}px`
        })
      },
      children: [!isTrashed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("a", {
          href: (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_9__.getEditUrl)(form.id),
          className: "flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 no-underline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "w-4 h-4 me-3 flex-shrink-0"
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Edit", "wpbean-product-gallery-slider-for-woocommerce")]
        }), canDuplicate && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("button", {
          onClick: () => {
            close();
            setConfirmDupe(true);
          },
          className: "flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "w-4 h-4 me-3 flex-shrink-0"
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duplicate", "wpbean-product-gallery-slider-for-woocommerce")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("button", {
          onClick: () => {
            close();
            onToggleStatus(form);
          },
          className: "flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "w-4 h-4 me-3 flex-shrink-0"
          }), isPublished ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Set to Draft", "wpbean-product-gallery-slider-for-woocommerce") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Publish", "wpbean-product-gallery-slider-for-woocommerce")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("hr", {
          className: "my-1 border-gray-100"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("button", {
          onClick: () => {
            close();
            onTrash(form.id);
          },
          className: "flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: "w-4 h-4 me-3 flex-shrink-0"
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Move to Trash", "wpbean-product-gallery-slider-for-woocommerce")]
        })]
      }), isTrashed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("button", {
          onClick: () => {
            close();
            onRestore(form.id);
          },
          className: "flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "w-4 h-4 me-3 flex-shrink-0"
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Restore", "wpbean-product-gallery-slider-for-woocommerce")]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("hr", {
          className: "my-1 border-gray-100"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("button", {
          onClick: () => {
            close();
            setConfirmPermDelete(true);
          },
          className: "flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "w-4 h-4 me-3 flex-shrink-0"
          }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delete Permanently", "wpbean-product-gallery-slider-for-woocommerce")]
        })]
      })]
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("button", {
      ref: buttonRef,
      onClick: () => setIsOpen(o => !o),
      className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors",
      "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Row actions", "wpbean-product-gallery-slider-for-woocommerce"),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "w-4 h-4"
      })
    }), isOpen && portalTarget && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createPortal)(dropdown, portalTarget), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ConfirmModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      open: confirmPermDelete,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delete permanently?", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('"%s" will be deleted forever and cannot be recovered.', "wpbean-product-gallery-slider-for-woocommerce"), form.title),
      confirmText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Delete Permanently", "wpbean-product-gallery-slider-for-woocommerce"),
      danger: true,
      onConfirm: () => {
        setConfirmPermDelete(false);
        onPermanentDelete(form.id);
      },
      onCancel: () => setConfirmPermDelete(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ConfirmModal__WEBPACK_IMPORTED_MODULE_10__["default"], {
      open: confirmDupe,
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duplicate form?", "wpbean-product-gallery-slider-for-woocommerce"),
      description: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('A copy of "%s" will be created as a draft.', "wpbean-product-gallery-slider-for-woocommerce"), form.title),
      confirmText: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Duplicate", "wpbean-product-gallery-slider-for-woocommerce"),
      onConfirm: () => {
        setConfirmDupe(false);
        onDuplicate(form);
      },
      onCancel: () => setConfirmDupe(false)
    })]
  });
}

/***/ },

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

/***/ "./src/admin/pages/rulesCrud/components/tableElements/EmptyState.jsx"
/*!***************************************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/tableElements/EmptyState.jsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmptyState)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/settings.js");
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * components/tableElements/EmptyState.jsx
 */





const getAddNewUrl = () => {
  const url = new URL(window.location.href);
  url.searchParams.set("page", "wpbean-product-gallery-rule");
  url.searchParams.delete("id");
  return url.toString();
};
function EmptyState() {
  const {
    state
  } = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_4__.useCrudList)();
  const {
    search,
    status
  } = state;
  const isFiltered = Boolean(search || status);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "px-6 py-12 text-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "text-gray-400 mb-4",
      children: isFiltered ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "w-12 h-12 mx-auto"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "w-12 h-12 mx-auto"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("h3", {
      className: "text-lg font-medium text-gray-900 mb-2",
      children: isFiltered ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No gallery rules found", "wpbean-product-gallery-slider-for-woocommerce") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No gallery rules yet", "wpbean-product-gallery-slider-for-woocommerce")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
      className: "text-gray-500 mb-4",
      children: isFiltered ? (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Try adjusting your search or filter to find what you're looking for.", "wpbean-product-gallery-slider-for-woocommerce") : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Get started by creating your first gallery rule.", "wpbean-product-gallery-slider-for-woocommerce")
    }), !isFiltered && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
      href: getAddNewUrl(),
      className: "inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors no-underline",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "w-4 h-4 me-2"
      }), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add New", "wpbean-product-gallery-slider-for-woocommerce")]
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesCrud/components/tableElements/ResultsInfo.jsx"
/*!****************************************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/tableElements/ResultsInfo.jsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResultsInfo)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * components/tableElements/ResultsInfo.jsx
 */




function ResultsInfo() {
  const state = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.useCrudListState)();
  const count = state.items.length;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "px-4 sm:px-6 py-3 bg-white border-b border-gray-200",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-center justify-between text-sm text-gray-600",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
        children: [count, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__._n)("item", "items", count, "wpbean-product-gallery-slider-for-woocommerce")]
      }), state.selected.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
        children: [state.selected.length, " ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("selected", "wpbean-product-gallery-slider-for-woocommerce")]
      })]
    })
  });
}

/***/ },

/***/ "./src/admin/pages/rulesCrud/components/tableElements/StatusBadge.jsx"
/*!****************************************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/tableElements/StatusBadge.jsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StatusBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

/**
 * components/tableElements/StatusBadge.jsx
 */

function StatusBadge({
  status
}) {
  const styles = {
    publish: "bg-green-100 text-green-800 border-green-200",
    draft: "bg-gray-100 text-gray-600 border-gray-200",
    trash: "bg-red-100 text-red-700 border-red-200"
  };
  const dots = {
    publish: "bg-green-500",
    draft: "bg-gray-400",
    trash: "bg-red-400"
  };
  if (!status) return null;
  const key = status.toLowerCase();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
    className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[key] ?? styles.draft}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: `w-1.5 h-1.5 rounded-full me-1.5 ${dots[key] ?? "bg-gray-400"}`
    }), status.charAt(0).toUpperCase() + status.slice(1)]
  });
}

/***/ },

/***/ "./src/admin/pages/rulesCrud/components/tableElements/TableBody.jsx"
/*!**************************************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/tableElements/TableBody.jsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableBody)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/* harmony import */ var _StatusBadge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatusBadge */ "./src/admin/pages/rulesCrud/components/tableElements/StatusBadge.jsx");
/* harmony import */ var _ActionDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActionDropdown */ "./src/admin/pages/rulesCrud/components/tableElements/ActionDropdown.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * components/tableElements/TableBody.jsx
 */






const GALLERY_TYPE_LABELS = {
  thumbnail: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thumbnail", "wpbean-product-gallery-slider-for-woocommerce"),
  anchor: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Anchor Nav", "wpbean-product-gallery-slider-for-woocommerce"),
  "sticky-split": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sticky Split", "wpbean-product-gallery-slider-for-woocommerce"),
  "hierarchy-grid": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hierarchy Grid", "wpbean-product-gallery-slider-for-woocommerce")
};
const formatDate = str => {
  if (!str) return "—";
  const d = new Date(str.replace(" ", "T"));
  return isNaN(d) ? str : d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};
function TableBody({
  onToggleStatus,
  onDuplicate,
  onTrash,
  onRestore,
  onPermanentDelete
}) {
  const state = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.useCrudListState)();
  const dispatch = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.useCrudListDispatch)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", {
    className: "divide-y divide-gray-200 bg-white",
    children: state.items.map(form => {
      const isSelected = state.selected.includes(form.id);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
        className: `hover:bg-gray-50 transition-colors ${isSelected ? "bg-accent-subtle" : ""}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "px-4 sm:px-6 py-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
            type: "checkbox",
            checked: isSelected,
            onChange: () => dispatch({
              type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.ACTIONS.TOGGLE_SELECT,
              payload: form.id
            }),
            className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "px-3 py-4 whitespace-nowrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "text-sm text-gray-500 font-mono",
            children: ["#", form.id]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "px-3 py-4 whitespace-nowrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "text-sm font-medium text-gray-900",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
              href: (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.getEditUrl)(form.id),
              className: "text-sm font-medium text-gray-900 hover:text-blue-600 no-underline transition-colors",
              children: form.title
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "px-3 py-4 whitespace-nowrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "inline-flex items-center rounded-full border border-gray-100 bg-gray-50 px-2.5 py-0.5 text-[11px] font-medium text-ink-60 capitalize",
            children: GALLERY_TYPE_LABELS[form.gallery_type] ?? form.gallery_type
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "px-3 py-4 whitespace-nowrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_StatusBadge__WEBPACK_IMPORTED_MODULE_2__["default"], {
            status: form.status
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "px-3 py-4 whitespace-nowrap",
          children: form.apply_to === "selected" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-[11px] font-medium text-blue-600",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Selected Only", "wpbean-product-gallery-slider-for-woocommerce")
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "inline-flex items-center rounded-full border border-gray-100 bg-gray-50 px-2.5 py-0.5 text-[11px] font-medium text-gray-500",
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("All Products", "wpbean-product-gallery-slider-for-woocommerce")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "px-3 py-4 whitespace-nowrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "text-sm text-gray-500",
            children: formatDate(form.created_at)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", {
          className: "px-3 py-4 whitespace-nowrap text-end",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ActionDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
            form: form,
            onToggleStatus: onToggleStatus,
            onDuplicate: onDuplicate,
            onTrash: onTrash,
            onRestore: onRestore,
            onPermanentDelete: onPermanentDelete
          })
        })]
      }, form.id);
    })
  });
}

/***/ },

/***/ "./src/admin/pages/rulesCrud/components/tableElements/TableFooter.jsx"
/*!****************************************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/tableElements/TableFooter.jsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableFooter)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * components/tableElements/TableFooter.jsx
 */




function TableFooter() {
  const dispatch = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.useCrudListDispatch)();
  const state = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.useCrudListState)();
  const {
    page,
    perPage,
    total
  } = state;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  if (totalPages <= 1 && total <= perPage) return null;

  // Compact page window
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || i >= page - 1 && i <= page + 1) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "…") {
      pages.push("…");
    }
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "px-4 sm:px-6 py-5 bg-gray-50 border-t border-gray-200 rounded-b-lg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex flex-col sm:flex-row items-center justify-between gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "text-sm text-gray-500",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.sprintf)((0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Showing %1$s–%2$s of %3$s forms", "wpbean-product-gallery-slider-for-woocommerce"), Math.min((page - 1) * perPage + 1, total), Math.min(page * perPage, total), total)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "flex items-center space-x-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: () => dispatch({
            type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.ACTIONS.SET_PAGE,
            payload: page - 1
          }),
          disabled: page === 1,
          className: "px-3 py-1 text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Previous", "wpbean-product-gallery-slider-for-woocommerce")
        }), pages.map((p, i) => p === "…" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "px-2 text-sm text-gray-400",
          children: "\u2026"
        }, `e${i}`) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: () => dispatch({
            type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.ACTIONS.SET_PAGE,
            payload: p
          }),
          className: `px-3 py-1 text-sm rounded ${page === p ? "bg-accent text-white" : "text-gray-600 hover:text-gray-800"}`,
          children: p
        }, p)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          onClick: () => dispatch({
            type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.ACTIONS.SET_PAGE,
            payload: page + 1
          }),
          disabled: page === totalPages,
          className: "px-3 py-1 text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed",
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Next", "wpbean-product-gallery-slider-for-woocommerce")
        })]
      })]
    })
  });
}

/***/ },

/***/ "./src/admin/pages/rulesCrud/components/tableElements/TableHeader.jsx"
/*!****************************************************************************!*\
  !*** ./src/admin/pages/rulesCrud/components/tableElements/TableHeader.jsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableHeader)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * components/tableElements/TableHeader.jsx
 */




function TableHeader() {
  const {
    state,
    actions
  } = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.useCrudList)();
  const allSelected = state.items.length > 0 && state.selected.length === state.items.length;
  const someSelected = state.selected.length > 0 && state.selected.length < state.items.length;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("thead", {
    className: "bg-gray-50 border-b border-gray-200",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
        className: "px-4 sm:px-6 py-3 text-start",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
          type: "checkbox",
          checked: allSelected,
          ref: el => {
            if (el) el.indeterminate = someSelected;
          },
          onChange: () => actions.selectAll(),
          disabled: state.items.length === 0,
          className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
        className: "px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("ID", "wpbean-product-gallery-slider-for-woocommerce")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
        className: "px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "wpbean-product-gallery-slider-for-woocommerce")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
        className: "px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gallery Type", "wpbean-product-gallery-slider-for-woocommerce")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
        className: "px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Status", "wpbean-product-gallery-slider-for-woocommerce")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
        className: "px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Applies To", "wpbean-product-gallery-slider-for-woocommerce")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
        className: "px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap",
        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Date Created", "wpbean-product-gallery-slider-for-woocommerce")
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("th", {
        className: "px-3 py-3 w-10"
      })]
    })
  });
}

/***/ },

/***/ "./src/admin/pages/rulesCrud/context/CrudContext.jsx"
/*!***********************************************************!*\
  !*** ./src/admin/pages/rulesCrud/context/CrudContext.jsx ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACTIONS: () => (/* binding */ ACTIONS),
/* harmony export */   CrudProvider: () => (/* binding */ CrudProvider),
/* harmony export */   getAddNewUrl: () => (/* binding */ getAddNewUrl),
/* harmony export */   getEditUrl: () => (/* binding */ getEditUrl),
/* harmony export */   useCrudList: () => (/* binding */ useCrudList),
/* harmony export */   useCrudListDispatch: () => (/* binding */ useCrudListDispatch),
/* harmony export */   useCrudListState: () => (/* binding */ useCrudListState)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * context/CrudContext.jsx
 * Global state for the forms list page via useReducer.
 */



const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_ERROR: "FETCH_ERROR",
  SET_SEARCH: "SET_SEARCH",
  SET_STATUS: "SET_STATUS",
  SET_PAGE: "SET_PAGE",
  TOGGLE_SELECT: "TOGGLE_SELECT",
  SELECT_ALL: "SELECT_ALL",
  CLEAR_SELECTION: "CLEAR_SELECTION",
  UPDATE_ITEM: "UPDATE_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  REMOVE_ITEMS: "REMOVE_ITEMS",
  SET_OPEN_MENU: "SET_OPEN_MENU"
};
const initialState = {
  items: [],
  total: 0,
  page: 1,
  perPage: 10,
  search: "",
  status: "",
  selected: [],
  loading: false,
  loaded: false,
  error: null,
  openMenuId: null,
  limitReached: false
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ACTIONS.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        items: action.payload.items,
        total: action.payload.total,
        limitReached: action.payload.limitReached ?? false,
        selected: []
      };
    case ACTIONS.FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case ACTIONS.SET_SEARCH:
      return {
        ...state,
        search: action.payload,
        page: 1,
        selected: []
      };
    case ACTIONS.SET_STATUS:
      return {
        ...state,
        status: action.payload,
        page: 1,
        selected: []
      };
    case ACTIONS.SET_PAGE:
      return {
        ...state,
        page: action.payload,
        selected: []
      };
    case ACTIONS.TOGGLE_SELECT:
      {
        const id = action.payload;
        return {
          ...state,
          selected: state.selected.includes(id) ? state.selected.filter(s => s !== id) : [...state.selected, id]
        };
      }
    case ACTIONS.SELECT_ALL:
      return {
        ...state,
        selected: state.selected.length === state.items.length ? [] : state.items.map(f => f.id)
      };
    case ACTIONS.CLEAR_SELECTION:
      return {
        ...state,
        selected: []
      };
    case ACTIONS.UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map(f => f.id === action.payload.id ? {
          ...f,
          ...action.payload.changes
        } : f)
      };
    case ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(f => f.id !== action.payload),
        total: state.total - 1,
        selected: state.selected.filter(id => id !== action.payload)
      };
    case ACTIONS.REMOVE_ITEMS:
      return {
        ...state,
        items: state.items.filter(f => !action.payload.includes(f.id)),
        total: state.total - action.payload.length,
        selected: []
      };
    case ACTIONS.SET_OPEN_MENU:
      return {
        ...state,
        openMenuId: action.payload
      };
    default:
      return state;
  }
}

/**
 * Builds the URL to open the form builder for creating a new form.
 * Exported here so any component can link to the add new page
 * without duplicating the URL logic.
 *
 * Usage:  <a href={getAddNewUrl()}>...</a>
 */
const getAddNewUrl = () => {
  const url = new URL(window.location.href);
  url.searchParams.set("page", "wpbean-product-gallery-rule");
  url.searchParams.delete("id");
  return url.toString();
};

/**
 * Builds the URL to open a form in the builder.
 * Exported here so any component can link to the edit page
 * without duplicating the URL logic.
 *
 * Usage:  <a href={getEditUrl(form.id)}>...</a>
 */
const getEditUrl = id => {
  const url = new URL(window.location.href);
  url.searchParams.set("page", "wpbean-product-gallery-rule");
  url.searchParams.set("id", id);
  return url.toString();
};
const StateCtx = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const DispatchCtx = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
const CrudProvider = ({
  children
}) => {
  const [state, dispatch] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useReducer)(reducer, initialState);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StateCtx.Provider, {
    value: state,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DispatchCtx.Provider, {
      value: dispatch,
      children: children
    })
  });
};
const useCrudListState = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(StateCtx);
const useCrudListDispatch = () => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(DispatchCtx);
const useCrudList = () => {
  const state = useCrudListState();
  const dispatch = useCrudListDispatch();
  const actions = {
    fetchStart: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => dispatch({
      type: ACTIONS.FETCH_START
    }), [dispatch]),
    fetchSuccess: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(d => dispatch({
      type: ACTIONS.FETCH_SUCCESS,
      payload: d
    }), [dispatch]),
    fetchError: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(m => dispatch({
      type: ACTIONS.FETCH_ERROR,
      payload: m
    }), [dispatch]),
    setSearch: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(v => dispatch({
      type: ACTIONS.SET_SEARCH,
      payload: v
    }), [dispatch]),
    setStatus: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(v => dispatch({
      type: ACTIONS.SET_STATUS,
      payload: v
    }), [dispatch]),
    setPage: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(v => dispatch({
      type: ACTIONS.SET_PAGE,
      payload: v
    }), [dispatch]),
    toggleSelect: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => dispatch({
      type: ACTIONS.TOGGLE_SELECT,
      payload: id
    }), [dispatch]),
    selectAll: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => dispatch({
      type: ACTIONS.SELECT_ALL
    }), [dispatch]),
    clearSelection: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => dispatch({
      type: ACTIONS.CLEAR_SELECTION
    }), [dispatch]),
    updateItem: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)((id, changes) => dispatch({
      type: ACTIONS.UPDATE_ITEM,
      payload: {
        id,
        changes
      }
    }), [dispatch]),
    removeItem: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => dispatch({
      type: ACTIONS.REMOVE_ITEM,
      payload: id
    }), [dispatch]),
    removeItems: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(ids => dispatch({
      type: ACTIONS.REMOVE_ITEMS,
      payload: ids
    }), [dispatch]),
    setOpenMenu: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(id => dispatch({
      type: ACTIONS.SET_OPEN_MENU,
      payload: id
    }), [dispatch])
  };
  return {
    state,
    actions
  };
};

/***/ },

/***/ "./src/admin/pages/rulesCrud/hooks/useCrudApi.js"
/*!*******************************************************!*\
  !*** ./src/admin/pages/rulesCrud/hooks/useCrudApi.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/forms */ "./src/admin/pages/rulesCrud/api/forms.js");
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CrudContext */ "./src/admin/pages/rulesCrud/context/CrudContext.jsx");
/**
 * hooks/useCrudApi.js
 * Bridges API layer and CrudContext.
 * Called once in FormsListApp — all side-effects live here.
 */




const useCrudApi = () => {
  const dispatch = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.useCrudListDispatch)();
  const {
    page,
    perPage,
    search,
    status
  } = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.useCrudListState)();

  // ── Fetch ─────────────────────────────────────────────────────────────────

  const fetchForms = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.ACTIONS.FETCH_START
    });
    try {
      const data = await (0,_api_forms__WEBPACK_IMPORTED_MODULE_1__.getForms)({
        page,
        per_page: perPage,
        search,
        status
      });
      dispatch({
        type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.ACTIONS.FETCH_SUCCESS,
        payload: {
          items: data.items,
          total: data.total,
          limitReached: data.free_tier_limit_reached ?? false
        }
      });
    } catch (err) {
      dispatch({
        type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.ACTIONS.FETCH_ERROR,
        payload: err?.message ?? "Failed to load forms."
      });
    }
  }, [dispatch, page, perPage, search, status]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchForms();
  }, [fetchForms]);

  // ── Toggle publish / draft ────────────────────────────────────────────────

  const handleToggleStatus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async form => {
    const next = form.status === "publish" ? "draft" : "publish";
    dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.ACTIONS.UPDATE_ITEM,
      payload: {
        id: form.id,
        changes: {
          status: next
        }
      }
    });
    try {
      await (0,_api_forms__WEBPACK_IMPORTED_MODULE_1__.toggleFormStatus)(form.id, form.status);
    } catch {
      dispatch({
        type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.ACTIONS.UPDATE_ITEM,
        payload: {
          id: form.id,
          changes: {
            status: form.status
          }
        }
      });
    }
  }, [dispatch]);

  // ── Duplicate ─────────────────────────────────────────────────────────────

  const handleDuplicate = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async form => {
    try {
      await (0,_api_forms__WEBPACK_IMPORTED_MODULE_1__.duplicateForm)(form.id);
      await fetchForms();
    } catch (err) {
      console.error("Duplicate failed:", err);
    }
  }, [fetchForms]);

  // ── Move to Trash ─────────────────────────────────────────────────────────

  const handleTrash = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async id => {
    dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.ACTIONS.REMOVE_ITEM,
      payload: id
    });
    try {
      await (0,_api_forms__WEBPACK_IMPORTED_MODULE_1__.trashForm)(id);
    } catch {
      await fetchForms();
    }
  }, [dispatch, fetchForms]);

  // ── Restore ───────────────────────────────────────────────────────────────

  const handleRestore = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async id => {
    dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.ACTIONS.REMOVE_ITEM,
      payload: id
    });
    try {
      await (0,_api_forms__WEBPACK_IMPORTED_MODULE_1__.restoreForm)(id);
    } catch {
      await fetchForms();
    }
  }, [dispatch, fetchForms]);

  // ── Permanent Delete ──────────────────────────────────────────────────────

  const handlePermanentDelete = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async id => {
    dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.ACTIONS.REMOVE_ITEM,
      payload: id
    });
    try {
      await (0,_api_forms__WEBPACK_IMPORTED_MODULE_1__.permanentDeleteForm)(id);
    } catch {
      await fetchForms();
    }
  }, [dispatch, fetchForms]);

  // ── Bulk: trash ───────────────────────────────────────────────────────────

  const handleBulkTrash = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ids => {
    dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.ACTIONS.REMOVE_ITEMS,
      payload: ids
    });
    try {
      await (0,_api_forms__WEBPACK_IMPORTED_MODULE_1__.bulkTrashForms)(ids);
    } catch {
      await fetchForms();
    }
  }, [dispatch, fetchForms]);

  // ── Bulk: restore ─────────────────────────────────────────────────────────

  const handleBulkRestore = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ids => {
    dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.ACTIONS.REMOVE_ITEMS,
      payload: ids
    });
    try {
      await (0,_api_forms__WEBPACK_IMPORTED_MODULE_1__.bulkRestoreForms)(ids);
    } catch {
      await fetchForms();
    }
  }, [dispatch, fetchForms]);

  // ── Bulk: permanent delete ────────────────────────────────────────────────

  const handleBulkPermanentDelete = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ids => {
    dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.ACTIONS.REMOVE_ITEMS,
      payload: ids
    });
    try {
      await (0,_api_forms__WEBPACK_IMPORTED_MODULE_1__.bulkPermanentDeleteForms)(ids);
    } catch {
      await fetchForms();
    }
  }, [dispatch, fetchForms]);

  // ── Bulk: publish / draft ─────────────────────────────────────────────────

  const handleBulkStatus = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async (ids, nextStatus) => {
    ids.forEach(id => dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.ACTIONS.UPDATE_ITEM,
      payload: {
        id,
        changes: {
          status: nextStatus
        }
      }
    }));
    dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__.ACTIONS.CLEAR_SELECTION
    });
    try {
      await (0,_api_forms__WEBPACK_IMPORTED_MODULE_1__.bulkUpdateStatus)(ids, nextStatus);
    } catch {
      await fetchForms();
    }
  }, [dispatch, fetchForms]);
  return {
    refetch: fetchForms,
    handleToggleStatus,
    handleDuplicate,
    handleTrash,
    handleRestore,
    handlePermanentDelete,
    handleBulkTrash,
    handleBulkRestore,
    handleBulkPermanentDelete,
    handleBulkStatus
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCrudApi);

/***/ },

/***/ "./src/admin/pages/rulesCrud/index.js"
/*!********************************************!*\
  !*** ./src/admin/pages/rulesCrud/index.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CrudApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CrudApp */ "./src/admin/pages/rulesCrud/CrudApp.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/admin/pages/rulesCrud/style.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);




 // your scoped styles

_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  if (window.WPBean_PGS_Options?.nonce) {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().use(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default().createNonceMiddleware(window.WPBean_PGS_Options.nonce));
  }
  const el = document.getElementById("wpbean-pgs-settings-app");
  if (!el) {
    console.warn("#wpbean-pgs-settings-app not found.");
    return;
  }
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(el);
  root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CrudApp__WEBPACK_IMPORTED_MODULE_3__["default"], {}));
});

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

/***/ "./node_modules/lucide-react/dist/esm/icons/pencil.js"
/*!************************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/pencil.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Pencil)
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
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }]
];
const Pencil = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("pencil", __iconNode);


//# sourceMappingURL=pencil.js.map


/***/ },

/***/ "./node_modules/lucide-react/dist/esm/icons/plus.js"
/*!**********************************************************!*\
  !*** ./node_modules/lucide-react/dist/esm/icons/plus.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __iconNode: () => (/* binding */ __iconNode),
/* harmony export */   "default": () => (/* binding */ Plus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ "./node_modules/lucide-react/dist/esm/createLucideIcon.js");
/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__["default"])("plus", __iconNode);


//# sourceMappingURL=plus.js.map


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

/***/ "./src/admin/pages/rulesCrud/style.scss"
/*!**********************************************!*\
  !*** ./src/admin/pages/rulesCrud/style.scss ***!
  \**********************************************/
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
/******/ 			"admin/assets/build/rulesCrud": 0,
/******/ 			"admin/assets/build/style-rulesCrud": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["admin/assets/build/style-rulesCrud"], () => (__webpack_require__("./src/admin/pages/rulesCrud/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=rulesCrud.js.map