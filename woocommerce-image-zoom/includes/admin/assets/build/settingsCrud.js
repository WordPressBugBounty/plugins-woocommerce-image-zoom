/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/admin/pages/settingsCrud/CrudApp.jsx"
/*!**************************************************!*\
  !*** ./src/admin/pages/settingsCrud/CrudApp.jsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CrudApp)
/* harmony export */ });
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
/* harmony import */ var _hooks_useCrudApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/useCrudApi */ "./src/admin/pages/settingsCrud/hooks/useCrudApi.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Header */ "./src/admin/pages/settingsCrud/components/Header.jsx");
/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Controls */ "./src/admin/pages/settingsCrud/components/Controls.jsx");
/* harmony import */ var _components_CrudTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CrudTable */ "./src/admin/pages/settingsCrud/components/CrudTable.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/**
 * CrudApp.jsx
 * Root component. useCrudApi is called ONCE here — it owns the fetch loop.
 * All mutation handlers flow down as props so no child needs to call the hook.
 */







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
  } = (0,_hooks_useCrudApi__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    className: "mx-auto p-3 sm:p-6 bg-gray-50 min-h-screen",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Controls__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onBulkTrash: handleBulkTrash,
        onBulkRestore: handleBulkRestore,
        onBulkPermanentDelete: handleBulkPermanentDelete,
        onBulkStatus: handleBulkStatus
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_CrudTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        onToggleStatus: handleToggleStatus,
        onDuplicate: handleDuplicate,
        onTrash: handleTrash,
        onRestore: handleRestore,
        onPermanentDelete: handlePermanentDelete
      })]
    })
  });
}
function CrudApp() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.CrudProvider, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(CrudAppInner, {})
  });
}

/***/ },

/***/ "./src/admin/pages/settingsCrud/api/forms.js"
/*!***************************************************!*\
  !*** ./src/admin/pages/settingsCrud/api/forms.js ***!
  \***************************************************/
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

/***/ "./src/admin/pages/settingsCrud/components/Controls.jsx"
/*!**************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/Controls.jsx ***!
  \**************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Controls)
/* harmony export */ });
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
/* harmony import */ var _controls_ControlSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls/ControlSearch */ "./src/admin/pages/settingsCrud/components/controls/ControlSearch.jsx");
/* harmony import */ var _controls_StatusFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls/StatusFilter */ "./src/admin/pages/settingsCrud/components/controls/StatusFilter.jsx");
/* harmony import */ var _controls_BulkActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controls/BulkActions */ "./src/admin/pages/settingsCrud/components/controls/BulkActions.jsx");
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

/***/ "./src/admin/pages/settingsCrud/components/CrudTable.jsx"
/*!***************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/CrudTable.jsx ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CrudTable)
/* harmony export */ });
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
/* harmony import */ var _tableElements_ResultsInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tableElements/ResultsInfo */ "./src/admin/pages/settingsCrud/components/tableElements/ResultsInfo.jsx");
/* harmony import */ var _tableElements_TableHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tableElements/TableHeader */ "./src/admin/pages/settingsCrud/components/tableElements/TableHeader.jsx");
/* harmony import */ var _tableElements_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tableElements/TableBody */ "./src/admin/pages/settingsCrud/components/tableElements/TableBody.jsx");
/* harmony import */ var _tableElements_TableFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tableElements/TableFooter */ "./src/admin/pages/settingsCrud/components/tableElements/TableFooter.jsx");
/* harmony import */ var _tableElements_EmptyState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tableElements/EmptyState */ "./src/admin/pages/settingsCrud/components/tableElements/EmptyState.jsx");
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

/***/ "./src/admin/pages/settingsCrud/components/Header.jsx"
/*!************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/Header.jsx ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 * components/Header.jsx
 * Page title, subtitle and "Add New" CTA — matches rules app Header.jsx pattern.
 */




function Header() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "px-4 sm:px-6 py-5 border-b border-gray-200",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
          className: "text-xl sm:text-2xl font-bold text-gray-900 p-0 m-0",
          children: "Settings Rules"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
          className: "mt-1 text-xs sm:text-sm text-gray-500",
          children: "Manage your zoom settings rules and configurations."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("a", {
        href: (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.getAddNewUrl)(),
        className: "inline-flex items-center justify-center px-4 py-2 bg-accent text-white border border-accent shadow-btn-accent hover:bg-accent-hover hover:border-accent-hover text-sm font-medium rounded-md transition-all w-full sm:w-auto no-underline",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
          className: "w-4 h-4 me-2"
        }), "Add New"]
      })]
    })
  });
}

/***/ },

/***/ "./src/admin/pages/settingsCrud/components/controls/BulkActions.jsx"
/*!**************************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/controls/BulkActions.jsx ***!
  \**************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BulkActions)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
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
  } = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_1__.useCrudListState)();
  const [bulkAction, setBulkAction] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)("none");
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex items-center space-x-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("select", {
      value: bulkAction,
      onChange: e => setBulkAction(e.target.value),
      className: "w-full bg-white hover:text-inherit border border-gray-200 rounded-md ps-3 pe-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
        value: "none",
        children: "Bulk Actions"
      }), isTrashView ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "restore",
          children: "Restore"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "delete_forever",
          children: "Delete Permanently"
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "publish",
          children: "Set Published"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "draft",
          children: "Set Draft"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("option", {
          value: "trash",
          children: "Move to Trash"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
      onClick: apply,
      disabled: bulkAction === "none",
      className: "px-3 py-2 bg-gray-200/80 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-300/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
      children: "Apply"
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/settingsCrud/components/controls/ControlSearch.jsx"
/*!****************************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/controls/ControlSearch.jsx ***!
  \****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControlSearch)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/x.js");
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/**
 * components/controls/ControlSearch.jsx
 */





function ControlSearch() {
  const dispatch = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_3__.useCrudListDispatch)();
  const state = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_3__.useCrudListState)();
  const [local, setLocal] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(state.search);
  const debounce = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_3__.ACTIONS.SET_SEARCH,
      payload: local
    }), 350);
    return () => clearTimeout(debounce.current);
  }, [local]);

  // Sync on external reset
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setLocal(state.search);
  }, [state.search]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "relative flex-1 sm:flex-initial",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "absolute start-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", {
      type: "search",
      placeholder: "Search rules...",
      value: local,
      onChange: e => setLocal(e.target.value),
      className: "w-full ps-10 pe-10 py-2 bg-white border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-accent [&::-webkit-search-cancel-button]:hidden"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
      onClick: () => {
        setLocal("");
        dispatch({
          type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_3__.ACTIONS.SET_SEARCH,
          payload: ""
        });
      },
      className: `absolute end-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 w-4 h-4 flex items-center justify-center transition-all duration-200 ${local ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"}`,
      "aria-label": "Clear search",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "w-4 h-4"
      })
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/settingsCrud/components/controls/StatusFilter.jsx"
/*!***************************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/controls/StatusFilter.jsx ***!
  \***************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StatusFilter)
/* harmony export */ });
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * components/controls/StatusFilter.jsx
 */




function StatusFilter() {
  const dispatch = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.useCrudListDispatch)();
  const state = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.useCrudListState)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("select", {
    value: state.status,
    onChange: e => dispatch({
      type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.SET_STATUS,
      payload: e.target.value
    }),
    className: "w-full sm:w-auto bg-white hover:text-inherit border border-gray-200 rounded-md ps-4 pe-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
      value: "",
      children: "All Status"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
      value: "publish",
      children: "Published"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
      value: "draft",
      children: "Draft"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("option", {
      value: "trash",
      children: "Trash"
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/settingsCrud/components/tableElements/ActionDropdown.jsx"
/*!**********************************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/tableElements/ActionDropdown.jsx ***!
  \**********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionDropdown)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/ellipsis.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/triangle-alert.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/copy.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/pencil.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/rotate-ccw.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/toggle-left.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/trash-2.js");
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
/* harmony import */ var _ConfirmModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ConfirmModal */ "./src/admin/pages/settingsCrud/components/tableElements/ConfirmModal.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
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
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [position, setPosition] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)({
    top: 0,
    right: 0,
    left: undefined
  });
  const [confirmPermDelete, setConfirmPermDelete] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const [confirmDupe, setConfirmDupe] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const buttonRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
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
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (isOpen) requestAnimationFrame(calcPosition);
  }, [isOpen]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!isOpen) return;
    window.addEventListener("resize", calcPosition);
    window.addEventListener("scroll", calcPosition, true);
    return () => {
      window.removeEventListener("resize", calcPosition);
      window.removeEventListener("scroll", calcPosition, true);
    };
  }, [isOpen]);
  const close = () => setIsOpen(false);
  const portalTarget = document.getElementById("wpbean-pgs-settings-app");
  const isTrashed = form.status === "trash";
  const isPublished = form.status === "publish";
  const dropdown = isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div", {
      className: "fixed inset-0 z-10",
      onClick: close
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: "fixed w-52 bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 py-1 z-20",
      style: {
        top: `${position.top}px`,
        ...(position.left !== undefined ? {
          left: `${position.left}px`
        } : {
          right: `${position.right}px`
        })
      },
      children: [!isTrashed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("a", {
          href: (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_8__.getEditUrl)(form.id),
          className: "flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 no-underline",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: "w-4 h-4 me-3 flex-shrink-0"
          }), "Edit"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          onClick: () => {
            close();
            setConfirmDupe(true);
          },
          className: "flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
            className: "w-4 h-4 me-3 flex-shrink-0"
          }), "Duplicate"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          onClick: () => {
            close();
            onToggleStatus(form);
          },
          className: "flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "w-4 h-4 me-3 flex-shrink-0"
          }), isPublished ? "Set to Draft" : "Publish"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("hr", {
          className: "my-1 border-gray-100"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          onClick: () => {
            close();
            onTrash(form.id);
          },
          className: "flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: "w-4 h-4 me-3 flex-shrink-0"
          }), "Move to Trash"]
        })]
      }), isTrashed && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          onClick: () => {
            close();
            onRestore(form.id);
          },
          className: "flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "w-4 h-4 me-3 flex-shrink-0"
          }), "Restore"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("hr", {
          className: "my-1 border-gray-100"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("button", {
          onClick: () => {
            close();
            setConfirmPermDelete(true);
          },
          className: "flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "w-4 h-4 me-3 flex-shrink-0"
          }), "Delete Permanently"]
        })]
      })]
    })]
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("button", {
      ref: buttonRef,
      onClick: () => setIsOpen(o => !o),
      className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-colors",
      "aria-label": "Row actions",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "w-4 h-4"
      })
    }), isOpen && portalTarget && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createPortal)(dropdown, portalTarget), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ConfirmModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      open: confirmPermDelete,
      title: "Delete permanently?",
      description: `"${form.title}" will be deleted forever and cannot be recovered.`,
      confirmText: "Delete Permanently",
      danger: true,
      onConfirm: () => {
        setConfirmPermDelete(false);
        onPermanentDelete(form.id);
      },
      onCancel: () => setConfirmPermDelete(false)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_ConfirmModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
      open: confirmDupe,
      title: "Duplicate form?",
      description: `A copy of "${form.title}" will be created as a draft.`,
      confirmText: "Duplicate",
      onConfirm: () => {
        setConfirmDupe(false);
        onDuplicate(form);
      },
      onCancel: () => setConfirmDupe(false)
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/settingsCrud/components/tableElements/ConfirmModal.jsx"
/*!********************************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/tableElements/ConfirmModal.jsx ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ConfirmModal)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * components/tableElements/ConfirmModal.jsx
 * Simple confirm dialog rendered inline via portal when open.
 */



function ConfirmModal({
  open,
  title,
  description,
  confirmText = "Confirm",
  danger = false,
  onConfirm,
  onCancel
}) {
  if (!open) return null;
  const portal = document.getElementById("wpbean-pgs-settings-app");
  const modal = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center p-4",
    style: {
      background: "rgba(0,0,0,0.4)"
    },
    onClick: onCancel,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "bg-white rounded-lg shadow-xl w-full max-w-sm p-6",
      onClick: e => e.stopPropagation(),
      role: "dialog",
      "aria-modal": "true",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
        className: "text-base font-semibold text-gray-900 mb-2",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
        className: "text-sm text-gray-500 mb-6",
        children: description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex justify-end gap-3",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: onCancel,
          className: "px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors",
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: onConfirm,
          className: `px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors ${danger ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"}`,
          children: confirmText
        })]
      })]
    })
  });
  return portal ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createPortal)(modal, portal) : modal;
}

/***/ },

/***/ "./src/admin/pages/settingsCrud/components/tableElements/EmptyState.jsx"
/*!******************************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/tableElements/EmptyState.jsx ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmptyState)
/* harmony export */ });
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/plus.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/search.js");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lucide-react */ "./node_modules/lucide-react/dist/esm/icons/settings.js");
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
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
  } = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_3__.useCrudList)();
  const {
    search,
    status
  } = state;
  const isFiltered = Boolean(search || status);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "px-6 py-12 text-center",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "text-gray-400 mb-4",
      children: isFiltered ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "w-12 h-12 mx-auto"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "w-12 h-12 mx-auto"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
      className: "text-lg font-medium text-gray-900 mb-2",
      children: isFiltered ? "No settings rules found" : "No settings rules yet"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
      className: "text-gray-500 mb-4",
      children: isFiltered ? "Try adjusting your search or filter to find what you're looking for." : "Get started by creating your first setting rule."
    }), !isFiltered && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
      href: getAddNewUrl(),
      className: "inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors no-underline",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
        className: "w-4 h-4 me-2"
      }), "Add New"]
    })]
  });
}

/***/ },

/***/ "./src/admin/pages/settingsCrud/components/tableElements/ResultsInfo.jsx"
/*!*******************************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/tableElements/ResultsInfo.jsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResultsInfo)
/* harmony export */ });
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * components/tableElements/ResultsInfo.jsx
 */



function ResultsInfo() {
  const state = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.useCrudListState)();
  const count = state.items.length;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "px-4 sm:px-6 py-3 bg-white border-b border-gray-200",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex items-center justify-between text-sm text-gray-600",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
        children: [count, " ", count === 1 ? "item" : "items"]
      }), state.selected.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("span", {
        children: [state.selected.length, " selected"]
      })]
    })
  });
}

/***/ },

/***/ "./src/admin/pages/settingsCrud/components/tableElements/StatusBadge.jsx"
/*!*******************************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/tableElements/StatusBadge.jsx ***!
  \*******************************************************************************/
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

/***/ "./src/admin/pages/settingsCrud/components/tableElements/TableBody.jsx"
/*!*****************************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/tableElements/TableBody.jsx ***!
  \*****************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableBody)
/* harmony export */ });
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
/* harmony import */ var _StatusBadge__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatusBadge */ "./src/admin/pages/settingsCrud/components/tableElements/StatusBadge.jsx");
/* harmony import */ var _ActionDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionDropdown */ "./src/admin/pages/settingsCrud/components/tableElements/ActionDropdown.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 * components/tableElements/TableBody.jsx
 */





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
  const state = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.useCrudListState)();
  const dispatch = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.useCrudListDispatch)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("tbody", {
    className: "divide-y divide-gray-200 bg-white",
    children: state.items.map(form => {
      const isSelected = state.selected.includes(form.id);
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
        className: `hover:bg-gray-50 transition-colors ${isSelected ? "bg-accent-subtle" : ""}`,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
          className: "px-4 sm:px-6 py-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
            type: "checkbox",
            checked: isSelected,
            onChange: () => dispatch({
              type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.TOGGLE_SELECT,
              payload: form.id
            }),
            className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
          className: "px-3 py-4 whitespace-nowrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: "text-sm text-gray-500 font-mono",
            children: ["#", form.id]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
          className: "px-3 py-4 whitespace-nowrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "text-sm font-medium text-gray-900",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("a", {
              href: (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.getEditUrl)(form.id),
              className: "text-sm font-medium text-gray-900 hover:text-blue-600 no-underline transition-colors",
              children: form.title
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
          className: "px-3 py-4 whitespace-nowrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_StatusBadge__WEBPACK_IMPORTED_MODULE_1__["default"], {
            status: form.status
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
          className: "px-3 py-4 whitespace-nowrap",
          children: form.apply_to === "selected" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-2.5 py-0.5 text-[11px] font-medium text-blue-600",
            children: "Selected Only"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "inline-flex items-center rounded-full border border-gray-100 bg-gray-50 px-2.5 py-0.5 text-[11px] font-medium text-gray-500",
            children: "All Products"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
          className: "px-3 py-4 whitespace-nowrap",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
            className: "text-sm text-gray-500",
            children: formatDate(form.created_at)
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("td", {
          className: "px-3 py-4 whitespace-nowrap text-end",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ActionDropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
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

/***/ "./src/admin/pages/settingsCrud/components/tableElements/TableFooter.jsx"
/*!*******************************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/tableElements/TableFooter.jsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableFooter)
/* harmony export */ });
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * components/tableElements/TableFooter.jsx
 */



function TableFooter() {
  const dispatch = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.useCrudListDispatch)();
  const state = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.useCrudListState)();
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "px-4 sm:px-6 py-5 bg-gray-50 border-t border-gray-200 rounded-b-lg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "flex flex-col sm:flex-row items-center justify-between gap-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "text-sm text-gray-500",
        children: ["Showing ", Math.min((page - 1) * perPage + 1, total), "\u2013", Math.min(page * perPage, total), " of ", total, " forms"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "flex items-center space-x-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: () => dispatch({
            type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.SET_PAGE,
            payload: page - 1
          }),
          disabled: page === 1,
          className: "px-3 py-1 text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed",
          children: "Previous"
        }), pages.map((p, i) => p === "…" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "px-2 text-sm text-gray-400",
          children: "\u2026"
        }, `e${i}`) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: () => dispatch({
            type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.SET_PAGE,
            payload: p
          }),
          className: `px-3 py-1 text-sm rounded ${page === p ? "bg-accent text-white" : "text-gray-600 hover:text-gray-800"}`,
          children: p
        }, p)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          onClick: () => dispatch({
            type: _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.ACTIONS.SET_PAGE,
            payload: page + 1
          }),
          disabled: page === totalPages,
          className: "px-3 py-1 text-sm text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed",
          children: "Next"
        })]
      })]
    })
  });
}

/***/ },

/***/ "./src/admin/pages/settingsCrud/components/tableElements/TableHeader.jsx"
/*!*******************************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/components/tableElements/TableHeader.jsx ***!
  \*******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TableHeader)
/* harmony export */ });
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * components/tableElements/TableHeader.jsx
 */



function TableHeader() {
  const {
    state,
    actions
  } = (0,_context_CrudContext__WEBPACK_IMPORTED_MODULE_0__.useCrudList)();
  const allSelected = state.items.length > 0 && state.selected.length === state.items.length;
  const someSelected = state.selected.length > 0 && state.selected.length < state.items.length;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("thead", {
    className: "bg-gray-50 border-b border-gray-200",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("tr", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
        className: "px-4 sm:px-6 py-3 text-start",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "checkbox",
          checked: allSelected,
          ref: el => {
            if (el) el.indeterminate = someSelected;
          },
          onChange: () => actions.selectAll(),
          disabled: state.items.length === 0,
          className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
        className: "px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap",
        children: "ID"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
        className: "px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap",
        children: "Title"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
        className: "px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap",
        children: "Status"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
        className: "px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap",
        children: "Applies To"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
        className: "px-3 py-3 text-start text-xs font-medium text-gray-500 uppercase tracking-wide whitespace-nowrap",
        children: "Date Created"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("th", {
        className: "px-3 py-3 w-10"
      })]
    })
  });
}

/***/ },

/***/ "./src/admin/pages/settingsCrud/context/CrudContext.jsx"
/*!**************************************************************!*\
  !*** ./src/admin/pages/settingsCrud/context/CrudContext.jsx ***!
  \**************************************************************/
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
  error: null,
  openMenuId: null
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
        items: action.payload.items,
        total: action.payload.total,
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

/***/ "./src/admin/pages/settingsCrud/hooks/useCrudApi.js"
/*!**********************************************************!*\
  !*** ./src/admin/pages/settingsCrud/hooks/useCrudApi.js ***!
  \**********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/forms */ "./src/admin/pages/settingsCrud/api/forms.js");
/* harmony import */ var _context_CrudContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/CrudContext */ "./src/admin/pages/settingsCrud/context/CrudContext.jsx");
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
        payload: data
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

/***/ "./src/admin/pages/settingsCrud/index.js"
/*!***********************************************!*\
  !*** ./src/admin/pages/settingsCrud/index.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/dom-ready */ "@wordpress/dom-ready");
/* harmony import */ var _wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_dom_ready__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _CrudApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CrudApp */ "./src/admin/pages/settingsCrud/CrudApp.jsx");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/admin/pages/settingsCrud/style.scss");
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

/***/ "./src/admin/pages/settingsCrud/style.scss"
/*!*************************************************!*\
  !*** ./src/admin/pages/settingsCrud/style.scss ***!
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
/******/ 			"admin/assets/build/settingsCrud": 0,
/******/ 			"admin/assets/build/style-settingsCrud": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["admin/assets/build/style-settingsCrud"], () => (__webpack_require__("./src/admin/pages/settingsCrud/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=settingsCrud.js.map