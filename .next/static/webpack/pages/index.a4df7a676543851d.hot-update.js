"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/Stopwatch.js":
/*!***************************************!*\
  !*** ./pages/components/Stopwatch.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Stopwatch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_play_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/play.png */ \"./images/play.png\");\n/* harmony import */ var _images_pause_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/pause.png */ \"./images/pause.png\");\n/* harmony import */ var _images_stop_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/stop.png */ \"./images/stop.png\");\n\n\n\n\n\n\nfunction Stopwatch() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _images_play_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                width: 18,\n                height: 18,\n                className: styles.button,\n                alt: \"Start timer button\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Stopwatch.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _images_pause_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                width: 18,\n                height: 18,\n                className: \"\".concat(styles.button, \" \").concat(styles.pause),\n                alt: \"Pause timer button\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Stopwatch.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _images_stop_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                width: 18,\n                height: 18,\n                className: \"\".concat(styles.button, \" \").concat(styles.stop),\n                alt: \"Stop timer button\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Stopwatch.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_c = Stopwatch;\nvar _c;\n$RefreshReg$(_c, \"Stopwatch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1N0b3B3YXRjaC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE0QztBQUViO0FBRVU7QUFDRTtBQUNGO0FBRTFCLFNBQVNNO0lBRXBCLHFCQUNJOzswQkFDSSw4REFBQ0osbURBQUtBO2dCQUNOSyxLQUFLSix3REFBSUE7Z0JBQ1RLLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLFdBQVdDLE9BQU9DO2dCQUNsQkMsS0FBSTs7Ozs7OzBCQUVKLDhEQUFDWCxtREFBS0E7Z0JBQ05LLEtBQUtILHlEQUFLQTtnQkFDVkksT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsV0FBVyxHQUFvQkMsT0FBakJBLE9BQU9DLFFBQU8sS0FBZ0IsT0FBYkQsT0FBT1A7Z0JBQ3RDUyxLQUFJOzs7Ozs7MEJBRUosOERBQUNYLG1EQUFLQTtnQkFDTkssS0FBS0Ysd0RBQUlBO2dCQUNURyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxXQUFXLEdBQW9CQyxPQUFqQkEsT0FBT0MsUUFBTyxLQUFlLE9BQVpELE9BQU9OO2dCQUN0Q1EsS0FBSTs7Ozs7Ozs7QUFJaEI7S0EzQndCUCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1N0b3B3YXRjaC5qcz9kOWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHBsYXkgZnJvbSAnLi4vLi4vaW1hZ2VzL3BsYXkucG5nJztcbmltcG9ydCBwYXVzZSBmcm9tICcuLi8uLi9pbWFnZXMvcGF1c2UucG5nJztcbmltcG9ydCBzdG9wIGZyb20gJy4uLy4uL2ltYWdlcy9zdG9wLnBuZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0b3B3YXRjaCgpIHtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17cGxheX1cbiAgICAgICAgICAgIHdpZHRoPXsxOH1cbiAgICAgICAgICAgIGhlaWdodD17MTh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICBhbHQ9J1N0YXJ0IHRpbWVyIGJ1dHRvbidcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17cGF1c2V9XG4gICAgICAgICAgICB3aWR0aD17MTh9XG4gICAgICAgICAgICBoZWlnaHQ9ezE4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSAke3N0eWxlcy5wYXVzZX1gfVxuICAgICAgICAgICAgYWx0PSdQYXVzZSB0aW1lciBidXR0b24nXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e3N0b3B9XG4gICAgICAgICAgICB3aWR0aD17MTh9XG4gICAgICAgICAgICBoZWlnaHQ9ezE4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnV0dG9ufSAke3N0eWxlcy5zdG9wfWB9XG4gICAgICAgICAgICBhbHQ9J1N0b3AgdGltZXIgYnV0dG9uJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsInBsYXkiLCJwYXVzZSIsInN0b3AiLCJTdG9wd2F0Y2giLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTmFtZSIsInN0eWxlcyIsImJ1dHRvbiIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Stopwatch.js\n"));

/***/ })

});