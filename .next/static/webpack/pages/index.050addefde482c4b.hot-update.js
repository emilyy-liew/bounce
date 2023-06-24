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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./pages/components/Task.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ToDoList() {\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [name, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Date());\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setCurrentDate(new Date());\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    function handleCheckboxClick(id) {\n        let newCompleted;\n        for(let i = 0; i < taskList.length; i++){\n            if (taskList[i].id === id) {\n                newCompleted = [\n                    ...completed,\n                    taskList[i]\n                ];\n                break;\n            }\n        }\n        const newTaskList = taskList.filter((task)=>task.id != id);\n        setTaskList(newTaskList);\n        setCompleted(newCompleted);\n    }\n    function handleKeyPress(event) {\n        if (event.key == \"Enter\") {\n            let newTaskList = taskList.slice();\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n                taskName: name,\n                taskDeadline: deadline,\n                taskDuration: duration\n            };\n            newTaskList.push(newTask);\n            setTaskList(newTaskList);\n            setTaskName(\"\");\n            setDeadline(\"\");\n            setDuration(\"\");\n        }\n    }\n    function handleChange(event, setter) {\n        setter(event.target.value);\n    }\n    let categories = [];\n    taskList.map((task)=>{\n        const deadline = new Date(task.taskDeadline);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        if (difference < 1) {\n            difference = 0;\n        }\n        if (categories[difference] === undefined) {\n            categories[difference] = [];\n        }\n        categories[difference].push(task);\n    });\n    categories = [\n        [\n            completed\n        ],\n        ...categories\n    ];\n    console.log(categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter task\",\n                value: name,\n                onChange: (event)=>handleChange(event, setTaskName),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 77,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: deadline,\n                onChange: (event)=>handleChange(event, setDeadline),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Enter task duration\",\n                value: duration,\n                onChange: (event)=>handleChange(event, setDuration),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            categories.map((tasks, index)=>{\n                if (index > 0 && tasks !== undefined) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    index + 1,\n                                    \" days left\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, this),\n                            tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    task: task,\n                                    onCheckboxClick: ()=>handleCheckboxClick(task.id)\n                                }, task.id, false, {\n                                    fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 36\n                                }, this))\n                        ]\n                    }, void 0, true);\n                } else if (tasks.length > 0) {\n                    console.log(tasks.length);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Completed\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                                lineNumber: 92,\n                                columnNumber: 15\n                            }, this),\n                            tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    task: task,\n                                    onCheckboxClick: ()=>handleCheckboxClick(task.id)\n                                }, task.id, false, {\n                                    fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 36\n                                }, this))\n                        ]\n                    }, void 0, true);\n                }\n            })\n        ]\n    }, void 0, true);\n}\n_s(ToDoList, \"XFE31iGx/6HOqp1AiAh5P09aOS0=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1RvRG9MaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNrQjtBQUNSO0FBRXJCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNTLE1BQU1DLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNlLGFBQWFDLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDLElBQUlpQjtJQUVuRGhCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWlCLFdBQVdDLFlBQVk7WUFDM0JILGVBQWUsSUFBSUM7UUFDckIsR0FBRztRQUVILE9BQU87WUFDTEcsY0FBY0Y7UUFDaEI7SUFDRixHQUFHLEVBQUU7SUFFTCxTQUFTRyxvQkFBb0JDLEVBQUU7UUFDN0IsSUFBSUM7UUFDSixJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSW5CLFNBQVNvQixRQUFRRCxJQUFLO1lBQ3hDLElBQUluQixRQUFRLENBQUNtQixFQUFFLENBQUNGLE9BQU9BLElBQUk7Z0JBQ3pCQyxlQUFlO3VCQUFJaEI7b0JBQVdGLFFBQVEsQ0FBQ21CLEVBQUU7aUJBQUM7Z0JBQzFDO1lBQ0Y7UUFDRjtRQUNBLE1BQU1FLGNBQWNyQixTQUFTc0IsT0FBTyxDQUFDQyxPQUFTQSxLQUFLTixNQUFNQTtRQUN6RGhCLFlBQVlvQjtRQUNabEIsYUFBYWU7SUFDZjtJQUVBLFNBQVNNLGVBQWVDLEtBQUs7UUFDM0IsSUFBSUEsTUFBTUMsT0FBTyxTQUFTO1lBQ3hCLElBQUlMLGNBQWNyQixTQUFTMkI7WUFDM0IsTUFBTUMsVUFBVTtnQkFDZFgsSUFBSW5CLHdDQUFNQTtnQkFDVitCLFVBQVV6QjtnQkFDVjBCLGNBQWN4QjtnQkFDZHlCLGNBQWN2QjtZQUNoQjtZQUNBYSxZQUFZVyxLQUFLSjtZQUNqQjNCLFlBQVlvQjtZQUNaaEIsWUFBWTtZQUNaRSxZQUFZO1lBQ1pFLFlBQVk7UUFDZDtJQUNGO0lBRUEsU0FBU3dCLGFBQWFSLEtBQUssRUFBRVMsTUFBTTtRQUNqQ0EsT0FBT1QsTUFBTVUsT0FBT0M7SUFDdEI7SUFFQSxJQUFJQyxhQUFhLEVBQUU7SUFDbkJyQyxTQUFTc0MsSUFBSSxDQUFDZjtRQUNaLE1BQU1qQixXQUFXLElBQUlNLEtBQUtXLEtBQUtPO1FBQy9CLElBQUlTLGFBQWFDLEtBQUtDLE1BQU0sQ0FBQ25DLFNBQVNvQyxZQUFZaEMsWUFBWWdDLFNBQVEsSUFBTSxRQUFPLEtBQUssS0FBSyxFQUFDO1FBQzlGLElBQUlILGFBQWEsR0FBRztZQUNsQkEsYUFBYTtRQUNmO1FBRUEsSUFBSUYsVUFBVSxDQUFDRSxXQUFXLEtBQUtJLFdBQVc7WUFDeENOLFVBQVUsQ0FBQ0UsV0FBVyxHQUFHLEVBQUU7UUFDN0I7UUFFQUYsVUFBVSxDQUFDRSxXQUFXLENBQUNQLEtBQUtUO0lBQzlCO0lBRUFjLGFBQWE7UUFBQztZQUFDbkM7U0FBVTtXQUFLbUM7S0FBVztJQUN6Q08sUUFBUUMsSUFBSVI7SUFFWixxQkFDRTs7MEJBQ0UsOERBQUNTO2dCQUFNQyxNQUFLO2dCQUFPQyxhQUFZO2dCQUFhWixPQUFPaEM7Z0JBQU02QyxVQUFVLENBQUN4QixRQUFVUSxhQUFhUixPQUFPcEI7Z0JBQWM2QyxZQUFZLENBQUN6QixRQUFVRCxlQUFlQzs7Ozs7OzBCQUN0Siw4REFBQ3FCO2dCQUFNQyxNQUFLO2dCQUFPWCxPQUFPOUI7Z0JBQVUyQyxVQUFVLENBQUN4QixRQUFVUSxhQUFhUixPQUFPbEI7Z0JBQWMyQyxZQUFZLENBQUN6QixRQUFVRCxlQUFlQzs7Ozs7OzBCQUNqSSw4REFBQ3FCO2dCQUFNQyxNQUFLO2dCQUFTQyxhQUFZO2dCQUFzQlosT0FBTzVCO2dCQUFVeUMsVUFBVSxDQUFDeEIsUUFBVVEsYUFBYVIsT0FBT2hCO2dCQUFjeUMsWUFBWSxDQUFDekIsUUFBVUQsZUFBZUM7Ozs7OztZQUNwS1ksV0FBV0MsSUFBSSxDQUFDYSxPQUFPQztnQkFDdEIsSUFBSUEsUUFBUSxLQUFLRCxVQUFVUixXQUFXO29CQUNwQyxxQkFDRTs7MENBQ0UsOERBQUNVOztvQ0FBR0QsUUFBUTtvQ0FBRTs7Ozs7Ozs0QkFDYkQsTUFBTWIsSUFBSSxDQUFDZixxQkFBUyw4REFBQzdCLDZDQUFJQTtvQ0FBZTZCLE1BQU1BO29DQUFNK0IsaUJBQWlCLElBQU10QyxvQkFBb0JPLEtBQUtOO21DQUFyRU0sS0FBS047Ozs7Ozs7Z0JBRzNDLE9BQU8sSUFBSWtDLE1BQU0vQixTQUFTLEdBQUc7b0JBQzNCd0IsUUFBUUMsSUFBSU0sTUFBTS9CO29CQUNsQixxQkFDRTs7MENBQ0UsOERBQUNpQzswQ0FBRTs7Ozs7OzRCQUNGRixNQUFNYixJQUFJLENBQUNmLHFCQUFTLDhEQUFDN0IsNkNBQUlBO29DQUFlNkIsTUFBTUE7b0NBQU0rQixpQkFBaUIsSUFBTXRDLG9CQUFvQk8sS0FBS047bUNBQXJFTSxLQUFLTjs7Ozs7OztnQkFHM0M7WUFDRjs7O0FBR047R0EvRndCbEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Ub0RvTGlzdC5qcz9jNjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9Eb0xpc3QoKSB7XG4gIGNvbnN0IFt0YXNrTGlzdCwgc2V0VGFza0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmFtZSwgc2V0VGFza05hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGVhZGxpbmUsIHNldERlYWRsaW5lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjdXJyZW50RGF0ZSwgc2V0Q3VycmVudERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHNldEN1cnJlbnREYXRlKG5ldyBEYXRlKCkpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGVja2JveENsaWNrKGlkKSB7XG4gICAgbGV0IG5ld0NvbXBsZXRlZDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodGFza0xpc3RbaV0uaWQgPT09IGlkKSB7XG4gICAgICAgIG5ld0NvbXBsZXRlZCA9IFsuLi5jb21wbGV0ZWQsIHRhc2tMaXN0W2ldXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG5ld1Rhc2tMaXN0ID0gdGFza0xpc3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9IGlkKTtcbiAgICBzZXRUYXNrTGlzdChuZXdUYXNrTGlzdCk7XG4gICAgc2V0Q29tcGxldGVkKG5ld0NvbXBsZXRlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICBsZXQgbmV3VGFza0xpc3QgPSB0YXNrTGlzdC5zbGljZSgpO1xuICAgICAgY29uc3QgbmV3VGFzayA9IHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICB0YXNrTmFtZTogbmFtZSxcbiAgICAgICAgdGFza0RlYWRsaW5lOiBkZWFkbGluZSxcbiAgICAgICAgdGFza0R1cmF0aW9uOiBkdXJhdGlvblxuICAgICAgfVxuICAgICAgbmV3VGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tMaXN0KTtcbiAgICAgIHNldFRhc2tOYW1lKCcnKTtcbiAgICAgIHNldERlYWRsaW5lKCcnKTtcbiAgICAgIHNldER1cmF0aW9uKCcnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldHRlcikge1xuICAgIHNldHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcbiAgdGFza0xpc3QubWFwKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgZGVhZGxpbmUgPSBuZXcgRGF0ZSh0YXNrLnRhc2tEZWFkbGluZSk7XG4gICAgbGV0IGRpZmZlcmVuY2UgPSBNYXRoLmZsb29yKChkZWFkbGluZS5nZXRUaW1lKCkgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2F0ZWdvcmllc1tkaWZmZXJlbmNlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID0gW107XG4gICAgfVxuXG4gICAgY2F0ZWdvcmllc1tkaWZmZXJlbmNlXS5wdXNoKHRhc2spO1xuICB9KVxuXG4gIGNhdGVnb3JpZXMgPSBbW2NvbXBsZXRlZF0sIC4uLmNhdGVnb3JpZXNdO1xuICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2tcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXRUYXNrTmFtZSl9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2RlYWRsaW5lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldERlYWRsaW5lKX0gb25LZXlQcmVzcz17KGV2ZW50KSA9PiBoYW5kbGVLZXlQcmVzcyhldmVudCl9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGFzayBkdXJhdGlvblwiIHZhbHVlPXtkdXJhdGlvbn0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXREdXJhdGlvbil9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfSAvPlxuICAgICAge2NhdGVnb3JpZXMubWFwKCh0YXNrcywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID4gMCAmJiB0YXNrcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwPntpbmRleCArIDF9IGRheXMgbGVmdDwvcD5cbiAgICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkNoZWNrYm94Q2xpY2s9eygpID0+IGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzay5pZCl9IC8+KX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFza3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRhc2tzLmxlbmd0aCk7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwPkNvbXBsZXRlZDwvcD5cbiAgICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkNoZWNrYm94Q2xpY2s9eygpID0+IGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzay5pZCl9IC8+KX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVGFzayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidjQiLCJ1dWlkdjQiLCJUb0RvTGlzdCIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJjb21wbGV0ZWQiLCJzZXRDb21wbGV0ZWQiLCJuYW1lIiwic2V0VGFza05hbWUiLCJkZWFkbGluZSIsInNldERlYWRsaW5lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImN1cnJlbnREYXRlIiwic2V0Q3VycmVudERhdGUiLCJEYXRlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVDaGVja2JveENsaWNrIiwiaWQiLCJuZXdDb21wbGV0ZWQiLCJpIiwibGVuZ3RoIiwibmV3VGFza0xpc3QiLCJmaWx0ZXIiLCJ0YXNrIiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsImtleSIsInNsaWNlIiwibmV3VGFzayIsInRhc2tOYW1lIiwidGFza0RlYWRsaW5lIiwidGFza0R1cmF0aW9uIiwicHVzaCIsImhhbmRsZUNoYW5nZSIsInNldHRlciIsInRhcmdldCIsInZhbHVlIiwiY2F0ZWdvcmllcyIsIm1hcCIsImRpZmZlcmVuY2UiLCJNYXRoIiwiZmxvb3IiLCJnZXRUaW1lIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImxvZyIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbktleVByZXNzIiwidGFza3MiLCJpbmRleCIsInAiLCJvbkNoZWNrYm94Q2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/ToDoList.js\n"));

/***/ })

});