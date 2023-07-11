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

/***/ "./pages/components/Toggle.tsx":
/*!*************************************!*\
  !*** ./pages/components/Toggle.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Toggle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_toggle_open_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/toggle_open.png */ \"./images/toggle_open.png\");\n/* harmony import */ var _images_toggle_close_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/toggle_close.png */ \"./images/toggle_close.png\");\n/* harmony import */ var _styles_Toggle_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Toggle.module.css */ \"./styles/Toggle.module.css\");\n/* harmony import */ var _styles_Toggle_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Toggle_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/utils.module.css */ \"./styles/utils.module.css\");\n/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Toggle(param) {\n    let { children , label , length  } = param;\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    function handleOnClick() {\n        setIsVisible(!isVisible);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: isVisible ? _images_toggle_open_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"] : _images_toggle_close_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                width: 18,\n                height: 18,\n                className: (_styles_Toggle_module_css__WEBPACK_IMPORTED_MODULE_5___default().icon),\n                onClick: handleOnClick,\n                alt: \"expand toggle button\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Toggle.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: handleOnClick,\n                className: (_styles_Toggle_module_css__WEBPACK_IMPORTED_MODULE_5___default().p),\n                children: [\n                    label,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_6___default().subtext),\n                        children: [\n                            \"(\",\n                            length,\n                            \")\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Toggle.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Toggle.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            isVisible ? children : false\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Toggle.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Toggle, \"C45KFF5iQHXNkju7O/pllv86QL4=\");\n_c = Toggle;\nvar _c;\n$RefreshReg$(_c, \"Toggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1RvZ2dsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ2I7QUFFMEI7QUFDRTtBQUVQO0FBQ0c7QUFFeEMsU0FBU00sT0FBTyxLQUk5QjtRQUo4QixFQUFFQyxTQUFRLEVBQUVDLE1BQUssRUFBRUMsT0FBTSxFQUl2RCxHQUo4Qjs7SUFLN0IsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdYLCtDQUFRQSxDQUFVO0lBRXBELFNBQVNZO1FBQ1BELGFBQWEsQ0FBQ0Q7SUFDaEI7SUFFQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDWixtREFBS0E7Z0JBQ0phLEtBQUtKLFlBQVlSLCtEQUFhQSxHQUFHQyxnRUFBY0E7Z0JBQy9DWSxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxXQUFXYix1RUFBV2M7Z0JBQ3RCQyxTQUFTUDtnQkFDVFEsS0FBSTs7Ozs7OzBCQUVOLDhEQUFDQztnQkFBRUYsU0FBU1A7Z0JBQWVLLFdBQVdiLG9FQUFRaUI7O29CQUMzQ2I7a0NBQ0QsOERBQUNjO3dCQUFLTCxXQUFXWix5RUFBa0JrQjs7NEJBQUU7NEJBQUVkOzRCQUFPOzs7Ozs7Ozs7Ozs7O1lBRS9DQyxZQUFZSCxXQUFXOzs7Ozs7O0FBRzlCO0dBNUJ3QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Ub2dnbGUudHN4Pzc5NTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmltcG9ydCBvcGVuVG9nZ2xlSW1nIGZyb20gXCIuLi8uLi9pbWFnZXMvdG9nZ2xlX29wZW4ucG5nXCI7XG5pbXBvcnQgY2xvc2VUb2dnbGVJbWcgZnJvbSBcIi4uLy4uL2ltYWdlcy90b2dnbGVfY2xvc2UucG5nXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ub2dnbGUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvZ2dsZSh7IGNoaWxkcmVuLCBsYWJlbCwgbGVuZ3RoIH06IHtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbiAgbGFiZWw6IHN0cmluZztcbiAgbGVuZ3RoOiBudW1iZXI7XG59KSB7XG4gIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcblxuICBmdW5jdGlvbiBoYW5kbGVPbkNsaWNrKCkge1xuICAgIHNldElzVmlzaWJsZSghaXNWaXNpYmxlKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e2lzVmlzaWJsZSA/IG9wZW5Ub2dnbGVJbWcgOiBjbG9zZVRvZ2dsZUltZ31cbiAgICAgICAgd2lkdGg9ezE4fVxuICAgICAgICBoZWlnaHQ9ezE4fVxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29ufVxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfVxuICAgICAgICBhbHQ9XCJleHBhbmQgdG9nZ2xlIGJ1dHRvblwiXG4gICAgICAvPlxuICAgICAgPHAgb25DbGljaz17aGFuZGxlT25DbGlja30gY2xhc3NOYW1lPXtzdHlsZXMucH0+XG4gICAgICAgIHtsYWJlbH1cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnN1YnRleHR9Pih7bGVuZ3RofSk8L3NwYW4+XG4gICAgICA8L3A+XG4gICAgICB7aXNWaXNpYmxlID8gY2hpbGRyZW4gOiBmYWxzZX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkltYWdlIiwib3BlblRvZ2dsZUltZyIsImNsb3NlVG9nZ2xlSW1nIiwic3R5bGVzIiwidXRpbFN0eWxlcyIsIlRvZ2dsZSIsImNoaWxkcmVuIiwibGFiZWwiLCJsZW5ndGgiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJoYW5kbGVPbkNsaWNrIiwiZGl2Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJpY29uIiwib25DbGljayIsImFsdCIsInAiLCJzcGFuIiwic3VidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Toggle.tsx\n"));

/***/ })

});