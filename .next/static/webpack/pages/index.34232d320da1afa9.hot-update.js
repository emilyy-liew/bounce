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

/***/ "./pages/components/Stopwatch.tsx":
/*!****************************************!*\
  !*** ./pages/components/Stopwatch.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Stopwatch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_play_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/play.png */ \"./images/play.png\");\n/* harmony import */ var _images_pause_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/pause.png */ \"./images/pause.png\");\n/* harmony import */ var _images_stop_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/stop.png */ \"./images/stop.png\");\n/* harmony import */ var _styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Stopwatch.module.css */ \"./styles/Stopwatch.module.css\");\n/* harmony import */ var _styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Stopwatch(param) {\n    let { task , onStopClick , onPlayClick  } = param;\n    _s();\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let timer;\n        if (task.isRunning) {\n            timer = setInterval(()=>{\n                setTime((prevTime)=>prevTime + 1);\n            }, 1000);\n        }\n        return ()=>{\n            clearInterval(timer);\n        };\n    }, [\n        task.isRunning\n    ]);\n    function handlePause() {\n        task.isRunning = false;\n    }\n    const formatTime = (time)=>{\n        const hours = Math.floor(time / 3600);\n        let minutes = time % 3600;\n        minutes = Math.floor(minutes / 60);\n        let seconds = time % 3600 % 60;\n        return \"\".concat(hours.toString().padStart(2, \"0\"), \":\").concat(minutes.toString().padStart(2, \"0\"), \":\").concat(seconds.toString().padStart(2, \"0\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _images_play_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                width: 18,\n                height: 18,\n                className: (_styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                onClick: (event)=>onPlayClick(task),\n                alt: \"Start timer button\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Stopwatch.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _images_pause_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                width: 18,\n                height: 18,\n                className: (_styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                onClick: (event)=>handlePause(),\n                alt: \"Pause timer button\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Stopwatch.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _images_stop_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                width: 18,\n                height: 18,\n                className: (_styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                onClick: (event)=>{\n                    handlePause();\n                    onStopClick(time, task);\n                    setTime(0);\n                },\n                alt: \"Stop timer button\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Stopwatch.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6___default().time),\n                children: formatTime(time)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/Stopwatch.tsx\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Stopwatch, \"5hWQWrdOaoNaY+yZN4rUVWF/ZFM=\");\n_c = Stopwatch;\nvar _c;\n$RefreshReg$(_c, \"Stopwatch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1N0b3B3YXRjaC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Q7QUFDaEM7QUFFVTtBQUNFO0FBQ0Y7QUFHYztBQUV4QyxTQUFTTyxVQUFVLEtBSWpDO1FBSmlDLEVBQUVDLEtBQUksRUFBRUMsWUFBVyxFQUFFQyxZQUFXLEVBSWpFLEdBSmlDOztJQUtoQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFFakNDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVk7UUFFSixJQUFJTCxLQUFLTSxXQUFXO1lBQ2xCRCxRQUFRRSxZQUFZO2dCQUNsQkgsUUFBUSxDQUFDSSxXQUFhQSxXQUFXO1lBQ25DLEdBQUc7UUFDTDtRQUVBLE9BQU87WUFDTEMsY0FBY0o7UUFDaEI7SUFDRixHQUFHO1FBQUNMLEtBQUtNO0tBQVU7SUFFbkIsU0FBU0k7UUFDUFYsS0FBS00sWUFBWTtJQUNuQjtJQUVBLE1BQU1LLGFBQWEsQ0FBQ1I7UUFDbEIsTUFBTVMsUUFBUUMsS0FBS0MsTUFBTVgsT0FBTztRQUNoQyxJQUFJWSxVQUFVWixPQUFPO1FBQ3JCWSxVQUFVRixLQUFLQyxNQUFNQyxVQUFVO1FBQy9CLElBQUlDLFVBQVUsT0FBUSxPQUFRO1FBRTlCLE9BQU8sR0FBd0NELE9BQXJDSCxNQUFNSyxXQUFXQyxTQUFTLEdBQUcsTUFBSyxLQUVyQkYsT0FGd0JELFFBQzVDRSxXQUNBQyxTQUFTLEdBQUcsTUFBSyxLQUF1QyxPQUFwQ0YsUUFBUUMsV0FBV0MsU0FBUyxHQUFHO0lBQ3hEO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDeEIsbURBQUtBO2dCQUNKeUIsS0FBS3hCLHdEQUFJQTtnQkFDVHlCLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLFdBQVd4Qiw0RUFBYXlCO2dCQUN4QkMsU0FBUyxDQUFDQyxRQUFVdkIsWUFBWUY7Z0JBQ2hDMEIsS0FBSTs7Ozs7OzBCQUVOLDhEQUFDaEMsbURBQUtBO2dCQUNKeUIsS0FBS3ZCLHlEQUFLQTtnQkFDVndCLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLFdBQVd4Qiw0RUFBYXlCO2dCQUN4QkMsU0FBUyxDQUFDQyxRQUFVZjtnQkFDcEJnQixLQUFJOzs7Ozs7MEJBRU4sOERBQUNoQyxtREFBS0E7Z0JBQ0p5QixLQUFLdEIsd0RBQUlBO2dCQUNUdUIsT0FBTztnQkFDUEMsUUFBUTtnQkFDUkMsV0FBV3hCLDRFQUFheUI7Z0JBQ3hCQyxTQUFTLENBQUNDO29CQUNSZjtvQkFDQVQsWUFBWUUsTUFBTUg7b0JBQ2xCSSxRQUFRO2dCQUNWO2dCQUNBc0IsS0FBSTs7Ozs7OzBCQUVOLDhEQUFDQztnQkFBRUwsV0FBV3hCLDBFQUFXSzswQkFBR1EsV0FBV1I7Ozs7Ozs7O0FBRzdDO0dBckV3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TdG9wd2F0Y2gudHN4P2U5ZWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgTW91c2VFdmVudEhhbmRsZXIgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgcGxheSBmcm9tIFwiLi4vLi4vaW1hZ2VzL3BsYXkucG5nXCI7XG5pbXBvcnQgcGF1c2UgZnJvbSBcIi4uLy4uL2ltYWdlcy9wYXVzZS5wbmdcIjtcbmltcG9ydCBzdG9wIGZyb20gXCIuLi8uLi9pbWFnZXMvc3RvcC5wbmdcIjtcbmltcG9ydCB7IFRhc2tJdGVtIH0gZnJvbSBcIi4vVGFza1wiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvU3RvcHdhdGNoLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RvcHdhdGNoKHsgdGFzaywgb25TdG9wQ2xpY2ssIG9uUGxheUNsaWNrIH06IHtcbiAgdGFzazogVGFza0l0ZW07XG4gIG9uU3RvcENsaWNrOiAodGltZTogbnVtYmVyLCB0YXNrOiBUYXNrSXRlbSkgPT4gdm9pZDtcbiAgb25QbGF5Q2xpY2s6ICh0YXNrOiBUYXNrSXRlbSkgPT4gdm9pZDtcbn0pIHtcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGltZXI7XG5cbiAgICBpZiAodGFzay5pc1J1bm5pbmcpIHtcbiAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBzZXRUaW1lKChwcmV2VGltZSkgPT4gcHJldlRpbWUgKyAxKTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB9O1xuICB9LCBbdGFzay5pc1J1bm5pbmddKTtcblxuICBmdW5jdGlvbiBoYW5kbGVQYXVzZSgpIHtcbiAgICB0YXNrLmlzUnVubmluZyA9IGZhbHNlO1xuICB9XG5cbiAgY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lKSA9PiB7XG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRpbWUgLyAzNjAwKTtcbiAgICBsZXQgbWludXRlcyA9IHRpbWUgJSAzNjAwO1xuICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgbGV0IHNlY29uZHMgPSAodGltZSAlIDM2MDApICUgNjA7XG5cbiAgICByZXR1cm4gYCR7aG91cnMudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIil9OiR7bWludXRlc1xuICAgICAgLnRvU3RyaW5nKClcbiAgICAgIC5wYWRTdGFydCgyLCBcIjBcIil9OiR7c2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKX1gO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e3BsYXl9XG4gICAgICAgIHdpZHRoPXsxOH1cbiAgICAgICAgaGVpZ2h0PXsxOH1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IG9uUGxheUNsaWNrKHRhc2spfVxuICAgICAgICBhbHQ9XCJTdGFydCB0aW1lciBidXR0b25cIlxuICAgICAgLz5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e3BhdXNlfVxuICAgICAgICB3aWR0aD17MTh9XG4gICAgICAgIGhlaWdodD17MTh9XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiBoYW5kbGVQYXVzZSgpfVxuICAgICAgICBhbHQ9XCJQYXVzZSB0aW1lciBidXR0b25cIlxuICAgICAgLz5cbiAgICAgIDxJbWFnZVxuICAgICAgICBzcmM9e3N0b3B9XG4gICAgICAgIHdpZHRoPXsxOH1cbiAgICAgICAgaGVpZ2h0PXsxOH1cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICBoYW5kbGVQYXVzZSgpO1xuICAgICAgICAgIG9uU3RvcENsaWNrKHRpbWUsIHRhc2spO1xuICAgICAgICAgIHNldFRpbWUoMCk7XG4gICAgICAgIH19XG4gICAgICAgIGFsdD1cIlN0b3AgdGltZXIgYnV0dG9uXCJcbiAgICAgIC8+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT57Zm9ybWF0VGltZSh0aW1lKX08L3A+XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJwbGF5IiwicGF1c2UiLCJzdG9wIiwic3R5bGVzIiwiU3RvcHdhdGNoIiwidGFzayIsIm9uU3RvcENsaWNrIiwib25QbGF5Q2xpY2siLCJ0aW1lIiwic2V0VGltZSIsInRpbWVyIiwiaXNSdW5uaW5nIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVQYXVzZSIsImZvcm1hdFRpbWUiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwidG9TdHJpbmciLCJwYWRTdGFydCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsImV2ZW50IiwiYWx0IiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/Stopwatch.tsx\n"));

/***/ })

});