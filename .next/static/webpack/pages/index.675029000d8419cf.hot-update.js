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

/***/ "./pages/components/Toggle.js":
/*!************************************!*\
  !*** ./pages/components/Toggle.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Toggle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Toggle(param) {\n    let { children , initialVisiblility , label  } = param;\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(initialVisiblility);\n    function handleOnClick() {\n        setIsVisible(!isVisible);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: isVisible ? \"../../images/toggle_open.png\" : \"../../images/toggle_close.png\",\n                width: 10,\n                height: 10\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Toggle.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: handleOnClick,\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Toggle.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            isVisible ? children : false\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Toggle.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n_s(Toggle, \"G7pwLdO6Twrv/92KkCfhidJ12Yo=\");\n_c = Toggle;\nvar _c;\n$RefreshReg$(_c, \"Toggle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1RvZ2dsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFFRjtBQUVoQixTQUFTRSxPQUFPLEtBQXVDO1FBQXZDLEVBQUVDLFNBQVEsRUFBRUMsbUJBQWtCLEVBQUVDLE1BQUssRUFBRSxHQUF2Qzs7SUFDM0IsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdQLCtDQUFRQSxDQUFDSTtJQUUzQyxTQUFTSTtRQUNMRCxhQUFhLENBQUNEO0lBQ2xCO0lBRUEscUJBQ0ksOERBQUNHOzswQkFDRyw4REFBQ1IsbURBQUtBO2dCQUFDUyxLQUFLSixZQUFZLGlDQUFpQztnQkFBaUNLLE9BQU87Z0JBQUlDLFFBQVE7Ozs7OzswQkFDN0csOERBQUNDO2dCQUFFQyxTQUFTTjswQkFBZ0JIOzs7Ozs7WUFDM0JDLFlBQVlILFdBQVc7Ozs7Ozs7QUFHcEM7R0Fkd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvVG9nZ2xlLmpzP2FhOTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9nZ2xlKHsgY2hpbGRyZW4sIGluaXRpYWxWaXNpYmxpbGl0eSwgbGFiZWwgfSkge1xuICAgIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShpbml0aWFsVmlzaWJsaWxpdHkpO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlT25DbGljaygpIHtcbiAgICAgICAgc2V0SXNWaXNpYmxlKCFpc1Zpc2libGUpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpc1Zpc2libGUgPyBcIi4uLy4uL2ltYWdlcy90b2dnbGVfb3Blbi5wbmdcIiA6IFwiLi4vLi4vaW1hZ2VzL3RvZ2dsZV9jbG9zZS5wbmdcIn0gd2lkdGg9ezEwfSBoZWlnaHQ9ezEwfS8+XG4gICAgICAgICAgICA8cCBvbkNsaWNrPXtoYW5kbGVPbkNsaWNrfT57bGFiZWx9PC9wPlxuICAgICAgICAgICAge2lzVmlzaWJsZSA/IGNoaWxkcmVuIDogZmFsc2V9XG4gICAgICAgIDwvZGl2PlxuICAgICkgICAgXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW1hZ2UiLCJUb2dnbGUiLCJjaGlsZHJlbiIsImluaXRpYWxWaXNpYmxpbGl0eSIsImxhYmVsIiwiaXNWaXNpYmxlIiwic2V0SXNWaXNpYmxlIiwiaGFuZGxlT25DbGljayIsImRpdiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwicCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Toggle.js\n"));

/***/ })

});