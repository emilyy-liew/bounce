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

/***/ "./pages/components/Task.js":
/*!**********************************!*\
  !*** ./pages/components/Task.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_play_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/play.png */ \"./images/play.png\");\n/* harmony import */ var _images_pause_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/pause.png */ \"./images/pause.png\");\n/* harmony import */ var _images_stop_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/stop.png */ \"./images/stop.png\");\n/* harmony import */ var _styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Task.module.css */ \"./styles/Task.module.css\");\n/* harmony import */ var _styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nfunction Task(param) {\n    let { task , onCheckboxClick  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                className: (_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().element),\n                type: \"checkbox\",\n                checked: task.checked,\n                id: task.id,\n                onClick: onCheckboxClick\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Task.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"\".concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().element), \" \").concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().label), \" \").concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().name)),\n                children: task.taskName\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Task.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                className: \"\".concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().element), \" \").concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().label), \" \").concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().deadline)),\n                children: task.taskDeadline\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Task.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                    className: \"\".concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().element), \" \").concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().label), \" \").concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().duration)),\n                    children: [\n                        task.today,\n                        \" min\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Task.js\",\n                    lineNumber: 15,\n                    columnNumber: 41\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Task.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: _images_play_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                width: 18,\n                height: 18,\n                className: (_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().button),\n                alt: \"Start timer button\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Task.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: _images_pause_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                width: 18,\n                height: 18,\n                className: \"\".concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().button), \" \").concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().pause)),\n                alt: \"Pause timer button\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Task.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: _images_stop_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                width: 18,\n                height: 18,\n                className: \"\".concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().button), \" \").concat((_styles_Task_module_css__WEBPACK_IMPORTED_MODULE_5___default().stop)),\n                alt: \"Stop timer button\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Task.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Task.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = Task;\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1Rhc2suanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFFVTtBQUNFO0FBQ0Y7QUFFUztBQUVuQyxTQUFTSyxLQUFLLEtBQXlCO1FBQXpCLEVBQUVDLEtBQUksRUFBRUMsZ0JBQWUsRUFBRSxHQUF6QjtJQUMzQixxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV0wsMEVBQWdCTTs7MEJBQzlCLDhEQUFDQztnQkFBTUYsV0FBV0wsd0VBQWNRO2dCQUFFQyxNQUFLO2dCQUFXQyxTQUFTUixLQUFLUTtnQkFBU0MsSUFBSVQsS0FBS1M7Z0JBQUlDLFNBQVNUOzs7Ozs7MEJBQy9GLDhEQUFDVTtnQkFBTVIsV0FBVyxHQUFxQkwsT0FBbEJBLHdFQUFjUSxFQUFDLEtBQW1CUixPQUFoQkEsc0VBQVlhLEVBQUMsS0FBZSxPQUFaYixxRUFBV2M7MEJBQUtaLEtBQUthOzs7Ozs7MEJBQzVFLDhEQUFDRjtnQkFBTVIsV0FBVyxHQUFxQkwsT0FBbEJBLHdFQUFjUSxFQUFDLEtBQW1CUixPQUFoQkEsc0VBQVlhLEVBQUMsS0FBbUIsT0FBaEJiLHlFQUFlZ0I7MEJBQUtkLEtBQUtlOzs7Ozs7MEJBQ2hGLDhEQUFDYjtnQkFBSUMsV0FBV0wsMEVBQWdCTTswQkFBRSw0RUFBQ087b0JBQU1SLFdBQVcsR0FBcUJMLE9BQWxCQSx3RUFBY1EsRUFBQyxLQUFtQlIsT0FBaEJBLHNFQUFZYSxFQUFDLEtBQW1CLE9BQWhCYix5RUFBZWtCOzt3QkFBS2hCLEtBQUtpQjt3QkFBTTs7Ozs7Ozs7Ozs7OzBCQUN4SCw4REFBQ3ZCLG1EQUFLQTtnQkFDSndCLEtBQUt2Qix3REFBSUE7Z0JBQ1R3QixPQUFPO2dCQUNQQyxRQUFRO2dCQUNSakIsV0FBV0wsdUVBQWF1QjtnQkFDeEJDLEtBQUk7Ozs7OzswQkFFTiw4REFBQzVCLG1EQUFLQTtnQkFDSndCLEtBQUt0Qix5REFBS0E7Z0JBQ1Z1QixPQUFPO2dCQUNQQyxRQUFRO2dCQUNSakIsV0FBVyxHQUFvQkwsT0FBakJBLHVFQUFhdUIsRUFBQyxLQUFnQixPQUFidkIsc0VBQVlGO2dCQUMzQzBCLEtBQUk7Ozs7OzswQkFFTiw4REFBQzVCLG1EQUFLQTtnQkFDSndCLEtBQUtyQix3REFBSUE7Z0JBQ1RzQixPQUFPO2dCQUNQQyxRQUFRO2dCQUNSakIsV0FBVyxHQUFvQkwsT0FBakJBLHVFQUFhdUIsRUFBQyxLQUFlLE9BQVp2QixxRUFBV0Q7Z0JBQzFDeUIsS0FBSTs7Ozs7Ozs7Ozs7O0FBSVo7S0E5QndCdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9UYXNrLmpzP2NhMmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuXG5pbXBvcnQgcGxheSBmcm9tICcuLi8uLi9pbWFnZXMvcGxheS5wbmcnO1xuaW1wb3J0IHBhdXNlIGZyb20gJy4uLy4uL2ltYWdlcy9wYXVzZS5wbmcnO1xuaW1wb3J0IHN0b3AgZnJvbSAnLi4vLi4vaW1hZ2VzL3N0b3AucG5nJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvVGFzay5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFzayh7IHRhc2ssIG9uQ2hlY2tib3hDbGljayB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLmVsZW1lbnR9IHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ9e3Rhc2suY2hlY2tlZH0gaWQ9e3Rhc2suaWR9IG9uQ2xpY2s9e29uQ2hlY2tib3hDbGlja30vPlxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17YCR7c3R5bGVzLmVsZW1lbnR9ICR7c3R5bGVzLmxhYmVsfSAke3N0eWxlcy5uYW1lfWB9Pnt0YXNrLnRhc2tOYW1lfTwvbGFiZWw+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZWxlbWVudH0gJHtzdHlsZXMubGFiZWx9ICR7c3R5bGVzLmRlYWRsaW5lfWB9Pnt0YXNrLnRhc2tEZWFkbGluZX08L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PjxsYWJlbCBjbGFzc05hbWU9e2Ake3N0eWxlcy5lbGVtZW50fSAke3N0eWxlcy5sYWJlbH0gJHtzdHlsZXMuZHVyYXRpb259YH0+e3Rhc2sudG9kYXl9IG1pbjwvbGFiZWw+PC9kaXY+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtwbGF5fVxuICAgICAgICB3aWR0aD17MTh9XG4gICAgICAgIGhlaWdodD17MTh9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgYWx0PSdTdGFydCB0aW1lciBidXR0b24nXG4gICAgICAgIC8+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtwYXVzZX1cbiAgICAgICAgd2lkdGg9ezE4fVxuICAgICAgICBoZWlnaHQ9ezE4fVxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5idXR0b259ICR7c3R5bGVzLnBhdXNlfWB9XG4gICAgICAgIGFsdD0nUGF1c2UgdGltZXIgYnV0dG9uJ1xuICAgICAgICAvPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17c3RvcH1cbiAgICAgICAgd2lkdGg9ezE4fVxuICAgICAgICBoZWlnaHQ9ezE4fVxuICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5idXR0b259ICR7c3R5bGVzLnN0b3B9YH1cbiAgICAgICAgYWx0PSdTdG9wIHRpbWVyIGJ1dHRvbidcbiAgICAgICAgLz4gXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJwbGF5IiwicGF1c2UiLCJzdG9wIiwic3R5bGVzIiwiVGFzayIsInRhc2siLCJvbkNoZWNrYm94Q2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbnB1dCIsImVsZW1lbnQiLCJ0eXBlIiwiY2hlY2tlZCIsImlkIiwib25DbGljayIsImxhYmVsIiwibmFtZSIsInRhc2tOYW1lIiwiZGVhZGxpbmUiLCJ0YXNrRGVhZGxpbmUiLCJkdXJhdGlvbiIsInRvZGF5Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b24iLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Task.js\n"));

/***/ })

});