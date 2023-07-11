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

/***/ "./pages/components/Task.tsx":
/*!***********************************!*\
  !*** ./pages/components/Task.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Stopwatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stopwatch */ \"./pages/components/Stopwatch.tsx\");\n/* harmony import */ var _styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Task.module.css */ \"./styles/Task.module.css\");\n/* harmony import */ var _styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Task(param) {\n    let { task , onCheckboxClick , onStopClick , onPlayClick  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().element),\n                type: \"checkbox\",\n                checked: task.checked,\n                id: task.id,\n                onClick: onCheckboxClick\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().labelsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                        children: task.name\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"\".concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().label), \" \").concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().deadline)),\n                        children: task.deadline\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"\".concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().label), \" \").concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().duration)),\n                        children: [\n                            task.today,\n                            \" min\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Stopwatch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        task: task,\n                        onStopClick: onStopClick,\n                        onPlayClick: onPlayClick\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = Task;\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1Rhc2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0M7QUFFYztBQWNuQyxTQUFTRSxLQUFLLEtBTTFCO1FBTjBCLEVBQUVDLEtBQUksRUFBRUMsZ0JBQWUsRUFBRUMsWUFBVyxFQUFFQyxZQUFXLEVBTTNFLEdBTjBCO0lBTzNCLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXUCwwRUFBZ0JROzswQkFDOUIsOERBQUNDO2dCQUFNRixXQUFXUCx3RUFBY1U7Z0JBQUVDLE1BQUs7Z0JBQVdDLFNBQVNWLEtBQUtVO2dCQUFTQyxJQUFJWCxLQUFLVztnQkFBSUMsU0FBU1g7Ozs7OzswQkFDL0YsOERBQUNHO2dCQUFJQyxXQUFXUCxnRkFBc0JlOztrQ0FDcEMsOERBQUNDO3dCQUFNVCxXQUFXUCxzRUFBWWdCO2tDQUFHZCxLQUFLZTs7Ozs7O2tDQUN0Qyw4REFBQ0Q7d0JBQU1ULFdBQVcsR0FBbUJQLE9BQWhCQSxzRUFBWWdCLEVBQUMsS0FBbUIsT0FBaEJoQix5RUFBZWtCO2tDQUFLaEIsS0FBS2dCOzs7Ozs7a0NBQzlELDhEQUFDRjt3QkFBTVQsV0FBVyxHQUFtQlAsT0FBaEJBLHNFQUFZZ0IsRUFBQyxLQUFtQixPQUFoQmhCLHlFQUFlbUI7OzRCQUFLakIsS0FBS2tCOzRCQUFNOzs7Ozs7O2tDQUNwRSw4REFBQ3JCLGtEQUFTQTt3QkFBQ0csTUFBTUE7d0JBQU1FLGFBQWFBO3dCQUFhQyxhQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXRFO0tBbEJ3QkoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9UYXNrLnRzeD81YzE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdG9wd2F0Y2ggZnJvbSAnLi9TdG9wd2F0Y2gnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9UYXNrLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFza0l0ZW0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRlYWRsaW5lOiBzdHJpbmc7XG4gIGR1cmF0aW9uOiBudW1iZXI7XG4gIGNoZWNrZWQ6IGJvb2xlYW47XG4gIGlzUnVubmluZzogYm9vbGVhbjtcbiAgdG9kYXk/OiBudW1iZXI7XG4gIGRpZmZlcmVuY2U/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhc2soeyB0YXNrLCBvbkNoZWNrYm94Q2xpY2ssIG9uU3RvcENsaWNrLCBvblBsYXlDbGljayB9OiB7IFxuICAgIGtleTogc3RyaW5nO1xuICAgIHRhc2s6IFRhc2tJdGVtO1xuICAgIG9uQ2hlY2tib3hDbGljazogTW91c2VFdmVudEhhbmRsZXI8SFRNTElucHV0RWxlbWVudD47XG4gICAgb25TdG9wQ2xpY2s6ICh0aW1lOiBudW1iZXIsIHRhc2s6IFRhc2tJdGVtKSA9PiB2b2lkO1xuICAgIG9uUGxheUNsaWNrOiAodGFzazogVGFza0l0ZW0pID0+IHZvaWQ7XG4gIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuZWxlbWVudH0gdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD17dGFzay5jaGVja2VkfSBpZD17dGFzay5pZH0gb25DbGljaz17b25DaGVja2JveENsaWNrfS8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsc0NvbnRhaW5lcn0+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+e3Rhc2submFtZX08L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGFiZWx9ICR7c3R5bGVzLmRlYWRsaW5lfWB9Pnt0YXNrLmRlYWRsaW5lfTwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2Ake3N0eWxlcy5sYWJlbH0gJHtzdHlsZXMuZHVyYXRpb259YH0+e3Rhc2sudG9kYXl9IG1pbjwvbGFiZWw+XG4gICAgICAgIDxTdG9wd2F0Y2ggdGFzaz17dGFza30gb25TdG9wQ2xpY2s9e29uU3RvcENsaWNrfSBvblBsYXlDbGljaz17b25QbGF5Q2xpY2t9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTdG9wd2F0Y2giLCJzdHlsZXMiLCJUYXNrIiwidGFzayIsIm9uQ2hlY2tib3hDbGljayIsIm9uU3RvcENsaWNrIiwib25QbGF5Q2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbnB1dCIsImVsZW1lbnQiLCJ0eXBlIiwiY2hlY2tlZCIsImlkIiwib25DbGljayIsImxhYmVsc0NvbnRhaW5lciIsImxhYmVsIiwibmFtZSIsImRlYWRsaW5lIiwiZHVyYXRpb24iLCJ0b2RheSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Task.tsx\n"));

/***/ })

});