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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Stopwatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Stopwatch */ \"./pages/components/Stopwatch.tsx\");\n/* harmony import */ var _styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/Task.module.css */ \"./styles/Task.module.css\");\n/* harmony import */ var _styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Task(param) {\n    let { task , onCheckboxChange , onStopClick , onPlayClick  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().element),\n                type: \"checkbox\",\n                id: task.id,\n                onChange: onCheckboxChange\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().labelsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().label),\n                        children: task.name\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"\".concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().label), \" \").concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().deadline)),\n                        children: task.deadline\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: \"\".concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().label), \" \").concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_2___default().duration)),\n                        children: [\n                            task.today,\n                            \" min\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Stopwatch__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        task: task,\n                        onStopClick: onStopClick,\n                        onPlayClick: onPlayClick\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Task.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = Task;\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1Rhc2sudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0M7QUFFYztBQWFuQyxTQUFTRSxLQUFLLEtBTTFCO1FBTjBCLEVBQUVDLEtBQUksRUFBRUMsaUJBQWdCLEVBQUVDLFlBQVcsRUFBRUMsWUFBVyxFQU01RSxHQU4wQjtJQVEzQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1AsMEVBQWdCUTs7MEJBQzlCLDhEQUFDQztnQkFBTUYsV0FBV1Asd0VBQWNVO2dCQUFFQyxNQUFLO2dCQUFXQyxJQUFJVixLQUFLVTtnQkFBSUMsVUFBVVY7Ozs7OzswQkFDekUsOERBQUNHO2dCQUFJQyxXQUFXUCxnRkFBc0JjOztrQ0FDcEMsOERBQUNDO3dCQUFNUixXQUFXUCxzRUFBWWU7a0NBQUdiLEtBQUtjOzs7Ozs7a0NBQ3RDLDhEQUFDRDt3QkFBTVIsV0FBVyxHQUFtQlAsT0FBaEJBLHNFQUFZZSxFQUFDLEtBQW1CLE9BQWhCZix5RUFBZWlCO2tDQUFLZixLQUFLZTs7Ozs7O2tDQUM5RCw4REFBQ0Y7d0JBQU1SLFdBQVcsR0FBbUJQLE9BQWhCQSxzRUFBWWUsRUFBQyxLQUFtQixPQUFoQmYseUVBQWVrQjs7NEJBQUtoQixLQUFLaUI7NEJBQU07Ozs7Ozs7a0NBQ3BFLDhEQUFDcEIsa0RBQVNBO3dCQUFDRyxNQUFNQTt3QkFBTUUsYUFBYUE7d0JBQWFDLGFBQWFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJdEU7S0FuQndCSiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1Rhc2sudHN4PzVjMTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0b3B3YXRjaCBmcm9tICcuL1N0b3B3YXRjaCc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1Rhc2subW9kdWxlLmNzcyc7XG5pbXBvcnQgeyBNb3VzZUV2ZW50SGFuZGxlciB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBUYXNrSXRlbSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVhZGxpbmU6IHN0cmluZztcbiAgZHVyYXRpb246IG51bWJlcjtcbiAgaXNSdW5uaW5nOiBib29sZWFuO1xuICB0b2RheT86IG51bWJlcjtcbiAgZGlmZmVyZW5jZT86IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayh7IHRhc2ssIG9uQ2hlY2tib3hDaGFuZ2UsIG9uU3RvcENsaWNrLCBvblBsYXlDbGljayB9OiB7IFxuICAgIGtleTogc3RyaW5nO1xuICAgIHRhc2s6IFRhc2tJdGVtO1xuICAgIG9uQ2hlY2tib3hDaGFuZ2U6ICh0YXNrOiBUYXNrSXRlbSkgPT4gdm9pZDtcbiAgICBvblN0b3BDbGljazogKHRpbWU6IG51bWJlciwgdGFzazogVGFza0l0ZW0pID0+IHZvaWQ7XG4gICAgb25QbGF5Q2xpY2s6ICh0YXNrOiBUYXNrSXRlbSkgPT4gdm9pZDtcbiAgfSkge1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnR9IHR5cGU9XCJjaGVja2JveFwiIGlkPXt0YXNrLmlkfSBvbkNoYW5nZT17b25DaGVja2JveENoYW5nZX0vPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbHNDb250YWluZXJ9PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9Pnt0YXNrLm5hbWV9PC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7c3R5bGVzLmxhYmVsfSAke3N0eWxlcy5kZWFkbGluZX1gfT57dGFzay5kZWFkbGluZX08L2xhYmVsPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHtzdHlsZXMubGFiZWx9ICR7c3R5bGVzLmR1cmF0aW9ufWB9Pnt0YXNrLnRvZGF5fSBtaW48L2xhYmVsPlxuICAgICAgICA8U3RvcHdhdGNoIHRhc2s9e3Rhc2t9IG9uU3RvcENsaWNrPXtvblN0b3BDbGlja30gb25QbGF5Q2xpY2s9e29uUGxheUNsaWNrfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiU3RvcHdhdGNoIiwic3R5bGVzIiwiVGFzayIsInRhc2siLCJvbkNoZWNrYm94Q2hhbmdlIiwib25TdG9wQ2xpY2siLCJvblBsYXlDbGljayIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImlucHV0IiwiZWxlbWVudCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwibGFiZWxzQ29udGFpbmVyIiwibGFiZWwiLCJuYW1lIiwiZGVhZGxpbmUiLCJkdXJhdGlvbiIsInRvZGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Task.tsx\n"));

/***/ })

});