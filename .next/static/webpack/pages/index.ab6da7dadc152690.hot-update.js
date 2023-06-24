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

/***/ "./pages/components/ToDoList.js":
/*!**************************************!*\
  !*** ./pages/components/ToDoList.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./pages/components/Task.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ToDoList() {\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [name, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Date());\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setCurrentDate(new Date());\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    function handleCheckboxClick(id) {\n        let newCompleted;\n        for(let i = 0; i < taskList.length; i++){\n            if (taskList[i].id === id) {\n                newCompleted = [\n                    ...completed,\n                    taskList[i]\n                ];\n                break;\n            }\n        }\n        const newTaskList = taskList.filter((task)=>task.id != id);\n        setTaskList(newTaskList);\n        setCompleted(newCompleted);\n    }\n    function handleKeyPress(event) {\n        if (event.key == \"Enter\") {\n            let newTaskList = taskList.slice();\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n                taskName: name,\n                taskDeadline: deadline,\n                taskDuration: duration\n            };\n            newTaskList.push(newTask);\n            setTaskList(newTaskList);\n            setTaskName(\"\");\n            setDeadline(\"\");\n            setDuration(\"\");\n        }\n    }\n    function handleChange(event, setter) {\n        setter(event.target.value);\n    }\n    let categories = [];\n    taskList.map((task)=>{\n        const deadline = new Date(task.taskDeadline);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        if (difference < 1) {\n            difference = 0;\n        }\n        if (categories[difference] === undefined) {\n            categories[difference] = [];\n        }\n        categories[difference].push(task);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter task\",\n                value: name,\n                onChange: (event)=>handleChange(event, setTaskName),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: deadline,\n                onChange: (event)=>handleChange(event, setDeadline),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 75,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Enter task duration\",\n                value: duration,\n                onChange: (event)=>handleChange(event, setDuration),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            categories.map((tasks, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                index,\n                                \" days left\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, this),\n                        tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                task: task,\n                                onCheckboxClick: ()=>handleCheckboxClick(task.id)\n                            }, task.id, false, {\n                                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                                lineNumber: 81,\n                                columnNumber: 34\n                            }, this))\n                    ]\n                }, void 0, true);\n            })\n        ]\n    }, void 0, true);\n}\n_s(ToDoList, \"XFE31iGx/6HOqp1AiAh5P09aOS0=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUN2QixRQUFVRCxlQUFlQzs7Ozs7O1lBQ3BLWSxXQUFXQyxJQUFJLENBQUNXLE9BQU9DO2dCQUN0QixxQkFDRTs7c0NBQ0UsOERBQUNDOztnQ0FBR0Q7Z0NBQU07Ozs7Ozs7d0JBQ1RELE1BQU1YLElBQUksQ0FBQ2YscUJBQVMsOERBQUM3Qiw2Q0FBSUE7Z0NBQWU2QixNQUFNQTtnQ0FBTTZCLGlCQUFpQixJQUFNcEMsb0JBQW9CTyxLQUFLTjsrQkFBckVNLEtBQUtOOzs7Ozs7O1lBRzNDOzs7QUFHTjtHQWxGd0JsQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1RvRG9MaXN0LmpzP2M2N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb0RvTGlzdCgpIHtcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuYW1lLCBzZXRUYXNrTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkZWFkbGluZSwgc2V0RGVhZGxpbmVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2N1cnJlbnREYXRlLCBzZXRDdXJyZW50RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Q3VycmVudERhdGUobmV3IERhdGUoKSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2xpY2soaWQpIHtcbiAgICBsZXQgbmV3Q29tcGxldGVkO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmICh0YXNrTGlzdFtpXS5pZCA9PT0gaWQpIHtcbiAgICAgICAgbmV3Q29tcGxldGVkID0gWy4uLmNvbXBsZXRlZCwgdGFza0xpc3RbaV1dO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgbmV3VGFza0xpc3QgPSB0YXNrTGlzdC5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT0gaWQpO1xuICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tMaXN0KTtcbiAgICBzZXRDb21wbGV0ZWQobmV3Q29tcGxldGVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgIGxldCBuZXdUYXNrTGlzdCA9IHRhc2tMaXN0LnNsaWNlKCk7XG4gICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIHRhc2tOYW1lOiBuYW1lLFxuICAgICAgICB0YXNrRGVhZGxpbmU6IGRlYWRsaW5lLFxuICAgICAgICB0YXNrRHVyYXRpb246IGR1cmF0aW9uXG4gICAgICB9XG4gICAgICBuZXdUYXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xuICAgICAgc2V0VGFza0xpc3QobmV3VGFza0xpc3QpO1xuICAgICAgc2V0VGFza05hbWUoJycpO1xuICAgICAgc2V0RGVhZGxpbmUoJycpO1xuICAgICAgc2V0RHVyYXRpb24oJycpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCwgc2V0dGVyKSB7XG4gICAgc2V0dGVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBsZXQgY2F0ZWdvcmllcyA9IFtdO1xuICB0YXNrTGlzdC5tYXAoKHRhc2spID0+IHtcbiAgICBjb25zdCBkZWFkbGluZSA9IG5ldyBEYXRlKHRhc2sudGFza0RlYWRsaW5lKTtcbiAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguZmxvb3IoKGRlYWRsaW5lLmdldFRpbWUoKSAtIGN1cnJlbnREYXRlLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIGlmIChkaWZmZXJlbmNlIDwgMSkge1xuICAgICAgZGlmZmVyZW5jZSA9IDA7XG4gICAgfVxuICAgIFxuICAgIGlmIChjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhdGVnb3JpZXNbZGlmZmVyZW5jZV0gPSBbXTtcbiAgICB9XG5cbiAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdLnB1c2godGFzayk7XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0VGFza05hbWUpfSBvbktleVByZXNzPXsoZXZlbnQpID0+IGhhbmRsZUtleVByZXNzKGV2ZW50KX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPXtkZWFkbGluZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXREZWFkbGluZSl9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2sgZHVyYXRpb25cIiB2YWx1ZT17ZHVyYXRpb259IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0RHVyYXRpb24pfSBvbktleVByZXNzPXsoZXZlbnQpID0+IGhhbmRsZUtleVByZXNzKGV2ZW50KX0gLz5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgodGFza3MsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxwPntpbmRleH0gZGF5cyBsZWZ0PC9wPlxuICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkNoZWNrYm94Q2xpY2s9eygpID0+IGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzay5pZCl9IC8+KX1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRhc2siLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInY0IiwidXVpZHY0IiwiVG9Eb0xpc3QiLCJ0YXNrTGlzdCIsInNldFRhc2tMaXN0IiwiY29tcGxldGVkIiwic2V0Q29tcGxldGVkIiwibmFtZSIsInNldFRhc2tOYW1lIiwiZGVhZGxpbmUiLCJzZXREZWFkbGluZSIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJjdXJyZW50RGF0ZSIsInNldEN1cnJlbnREYXRlIiwiRGF0ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiaGFuZGxlQ2hlY2tib3hDbGljayIsImlkIiwibmV3Q29tcGxldGVkIiwiaSIsImxlbmd0aCIsIm5ld1Rhc2tMaXN0IiwiZmlsdGVyIiwidGFzayIsImhhbmRsZUtleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJzbGljZSIsIm5ld1Rhc2siLCJ0YXNrTmFtZSIsInRhc2tEZWFkbGluZSIsInRhc2tEdXJhdGlvbiIsInB1c2giLCJoYW5kbGVDaGFuZ2UiLCJzZXR0ZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNhdGVnb3JpZXMiLCJtYXAiLCJkaWZmZXJlbmNlIiwiTWF0aCIsImZsb29yIiwiZ2V0VGltZSIsInVuZGVmaW5lZCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbktleVByZXNzIiwidGFza3MiLCJpbmRleCIsInAiLCJvbkNoZWNrYm94Q2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/ToDoList.js\n"));

/***/ })

});