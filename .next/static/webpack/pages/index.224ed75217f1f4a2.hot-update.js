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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Stopwatch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _images_play_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/play.png */ \"./images/play.png\");\n/* harmony import */ var _images_pause_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../images/pause.png */ \"./images/pause.png\");\n/* harmony import */ var _images_stop_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../images/stop.png */ \"./images/stop.png\");\n/* harmony import */ var _styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Stopwatch.module.css */ \"./styles/Stopwatch.module.css\");\n/* harmony import */ var _styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Stopwatch(param) {\n    let { task , onStopClick  } = param;\n    _s();\n    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isRunning, setIsRunning] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let timer;\n        if (isRunning) {\n            timer = setInterval(()=>{\n                setTime((prevTime)=>prevTime + 1);\n            }, 1000);\n        }\n        return ()=>{\n            clearInterval(timer);\n        };\n    }, [\n        isRunning\n    ]);\n    function handlePlay() {\n        setIsRunning(true);\n    }\n    function handlePause() {\n        setIsRunning(false);\n    }\n    function handleStop() {\n        handlePause();\n    }\n    const formatTime = (time)=>{\n        const hours = Math.floor(time / 3600);\n        let minutes = time % 3600;\n        minutes = Math.floor(minutes / 60);\n        let seconds = time % 3600 % 60;\n        return \"\".concat(hours.toString().padStart(2, \"0\"), \":\").concat(minutes.toString().padStart(2, \"0\"), \":\").concat(seconds.toString().padStart(2, \"0\"));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _images_play_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                width: 18,\n                height: 18,\n                className: (_styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                onClick: handlePlay,\n                alt: \"Start timer button\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Stopwatch.js\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _images_pause_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                width: 18,\n                height: 18,\n                className: (_styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                onClick: handlePause,\n                alt: \"Pause timer button\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Stopwatch.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: _images_stop_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                width: 18,\n                height: 18,\n                className: (_styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6___default().button),\n                onclick: handleStop,\n                alt: \"Stop timer button\"\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Stopwatch.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_styles_Stopwatch_module_css__WEBPACK_IMPORTED_MODULE_6___default().time),\n                children: formatTime(time)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/Stopwatch.js\",\n                lineNumber: 77,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Stopwatch, \"th9G96ix7qzT0R5Zt2LTZjfttJA=\");\n_c = Stopwatch;\nvar _c;\n$RefreshReg$(_c, \"Stopwatch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1N0b3B3YXRjaC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUE0QztBQUNiO0FBRVU7QUFDRTtBQUNGO0FBRWM7QUFFeEMsU0FBU08sVUFBVSxLQUFvQjtRQUFwQixFQUFFQyxLQUFJLEVBQUVDLFlBQVcsRUFBQyxHQUFwQjs7SUFDOUIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ1ksV0FBV0MsYUFBYSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUUzQ0MsZ0RBQVNBLENBQUM7UUFDTixJQUFJYTtRQUVKLElBQUlGLFdBQVc7WUFDWEUsUUFBUUMsWUFBWTtnQkFDaEJKLFFBQVEsQ0FBQ0ssV0FBYUEsV0FBVztZQUNyQyxHQUFHO1FBQ1A7UUFFQSxPQUFPO1lBQ0hDLGNBQWNIO1FBQ2xCO0lBRUosR0FBRztRQUFDRjtLQUFVO0lBRWQsU0FBU007UUFDTEwsYUFBYTtJQUNqQjtJQUVBLFNBQVNNO1FBQ0xOLGFBQWE7SUFDakI7SUFFQSxTQUFTTztRQUNMRDtJQUVKO0lBRUEsTUFBTUUsYUFBYSxDQUFDWDtRQUNoQixNQUFNWSxRQUFRQyxLQUFLQyxNQUFNZCxPQUFPO1FBQ2hDLElBQUllLFVBQVVmLE9BQU87UUFDckJlLFVBQVVGLEtBQUtDLE1BQU1DLFVBQVU7UUFDL0IsSUFBSUMsVUFBVSxPQUFRLE9BQVE7UUFFOUIsT0FBTyxHQUF3Q0QsT0FBckNILE1BQU1LLFdBQVdDLFNBQVMsR0FBRyxNQUFLLEtBQTBDRixPQUF2Q0QsUUFBUUUsV0FBV0MsU0FBUyxHQUFHLE1BQUssS0FBdUMsT0FBcENGLFFBQVFDLFdBQVdDLFNBQVMsR0FBRztJQUN2SDtJQUVGLHFCQUNJOzswQkFDSSw4REFBQzFCLG1EQUFLQTtnQkFDTjJCLEtBQUsxQix3REFBSUE7Z0JBQ1QyQixPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxXQUFXMUIsNEVBQWEyQjtnQkFDeEJDLFNBQVNoQjtnQkFDVGlCLEtBQUk7Ozs7OzswQkFFSiw4REFBQ2pDLG1EQUFLQTtnQkFDTjJCLEtBQUt6Qix5REFBS0E7Z0JBQ1YwQixPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxXQUFXMUIsNEVBQWEyQjtnQkFDeEJDLFNBQVNmO2dCQUNUZ0IsS0FBSTs7Ozs7OzBCQUVKLDhEQUFDakMsbURBQUtBO2dCQUNOMkIsS0FBS3hCLHdEQUFJQTtnQkFDVHlCLE9BQU87Z0JBQ1BDLFFBQVE7Z0JBQ1JDLFdBQVcxQiw0RUFBYTJCO2dCQUN4QkcsU0FBU2hCO2dCQUNUZSxLQUFJOzs7Ozs7MEJBRUosOERBQUNFO2dCQUFFTCxXQUFXMUIsMEVBQVdJOzBCQUFHVyxXQUFXWDs7Ozs7Ozs7QUFHbkQ7R0F0RXdCSDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1N0b3B3YXRjaC5qcz9kOWQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5cbmltcG9ydCBwbGF5IGZyb20gJy4uLy4uL2ltYWdlcy9wbGF5LnBuZyc7XG5pbXBvcnQgcGF1c2UgZnJvbSAnLi4vLi4vaW1hZ2VzL3BhdXNlLnBuZyc7XG5pbXBvcnQgc3RvcCBmcm9tICcuLi8uLi9pbWFnZXMvc3RvcC5wbmcnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9TdG9wd2F0Y2gubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0b3B3YXRjaCh7IHRhc2ssIG9uU3RvcENsaWNrfSkge1xuICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFtpc1J1bm5pbmcsIHNldElzUnVubmluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IHRpbWVyO1xuXG4gICAgICAgIGlmIChpc1J1bm5pbmcpIHtcbiAgICAgICAgICAgIHRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldFRpbWUoKHByZXZUaW1lKSA9PiBwcmV2VGltZSArIDEpO1xuICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgIH0sIFtpc1J1bm5pbmddKTtcblxuICAgIGZ1bmN0aW9uIGhhbmRsZVBsYXkoKSB7XG4gICAgICAgIHNldElzUnVubmluZyh0cnVlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVQYXVzZSgpIHtcbiAgICAgICAgc2V0SXNSdW5uaW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVTdG9wKCkge1xuICAgICAgICBoYW5kbGVQYXVzZSgpO1xuXG4gICAgfVxuXG4gICAgY29uc3QgZm9ybWF0VGltZSA9ICh0aW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0aW1lIC8gMzYwMCk7XG4gICAgICAgIGxldCBtaW51dGVzID0gdGltZSAlIDM2MDA7XG4gICAgICAgIG1pbnV0ZXMgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XG4gICAgICAgIGxldCBzZWNvbmRzID0gKHRpbWUgJSAzNjAwKSAlIDYwO1xuXG4gICAgICAgIHJldHVybiBgJHtob3Vycy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9OiR7bWludXRlcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9OiR7c2Vjb25kcy50b1N0cmluZygpLnBhZFN0YXJ0KDIsICcwJyl9YDtcbiAgICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICBzcmM9e3BsYXl9XG4gICAgICAgICAgICB3aWR0aD17MTh9XG4gICAgICAgICAgICBoZWlnaHQ9ezE4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlUGxheX1cbiAgICAgICAgICAgIGFsdD0nU3RhcnQgdGltZXIgYnV0dG9uJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtwYXVzZX1cbiAgICAgICAgICAgIHdpZHRoPXsxOH1cbiAgICAgICAgICAgIGhlaWdodD17MTh9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVQYXVzZX1cbiAgICAgICAgICAgIGFsdD0nUGF1c2UgdGltZXIgYnV0dG9uJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtzdG9wfVxuICAgICAgICAgICAgd2lkdGg9ezE4fVxuICAgICAgICAgICAgaGVpZ2h0PXsxOH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICAgIG9uY2xpY2s9e2hhbmRsZVN0b3B9XG4gICAgICAgICAgICBhbHQ9J1N0b3AgdGltZXIgYnV0dG9uJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9Pntmb3JtYXRUaW1lKHRpbWUpfTwvcD5cbiAgICAgICAgPC8+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsInBsYXkiLCJwYXVzZSIsInN0b3AiLCJzdHlsZXMiLCJTdG9wd2F0Y2giLCJ0YXNrIiwib25TdG9wQ2xpY2siLCJ0aW1lIiwic2V0VGltZSIsImlzUnVubmluZyIsInNldElzUnVubmluZyIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJwcmV2VGltZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVQbGF5IiwiaGFuZGxlUGF1c2UiLCJoYW5kbGVTdG9wIiwiZm9ybWF0VGltZSIsImhvdXJzIiwiTWF0aCIsImZsb29yIiwibWludXRlcyIsInNlY29uZHMiLCJ0b1N0cmluZyIsInBhZFN0YXJ0Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwiYWx0Iiwib25jbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Stopwatch.js\n"));

/***/ })

});