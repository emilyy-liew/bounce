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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./pages/components/Task.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/ToDoList.module.css */ \"./styles/ToDoList.module.css\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ToDoList() {\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [someday, setSomeday] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [name, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Date());\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const newDate = new Date();\n            console.log(newDate.getDate() + \" \" + currentDate.getDate());\n            if (newDate.getDate() !== currentDate.getDate()) {\n                setCompleted([]);\n            }\n            setCurrentDate(newDate);\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    function handleCheckboxClick(task) {\n        let newCompleted = completed.slice();\n        task.checked = !task.checked;\n        if (task.deadline == \"\") {\n            let newSomeday = someday.slice();\n            if (task.checked) {\n                newCompleted.push(task);\n                newSomeday = someday.filter((curr)=>curr.id != task.id);\n            } else {\n                newSomeday.push(task);\n                newCompleted = completed.filter((curr)=>curr.id != task.id);\n            }\n            setSomeday(newSomeday);\n        } else {\n            let newTaskList = taskList.slice();\n            if (task.checked) {\n                newCompleted.push(task);\n                newTaskList = taskList.filter((curr)=>curr.id != task.id);\n            } else {\n                newTaskList.push(task);\n                newCompleted = completed.filter((curr)=>curr.id != task.id);\n            }\n            setTaskList(newTaskList);\n        }\n        setCompleted(newCompleted);\n    }\n    function handleKeyPress(event) {\n        if (event.key == \"Enter\") {\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n                taskName: name,\n                taskDeadline: deadline,\n                taskDuration: duration,\n                checked: false\n            };\n            if (deadline === \"\") {\n                let newSomeday = someday.slice();\n                newSomeday.push(newTask);\n                setSomeday(newSomeday);\n            } else {\n                let newTaskList = taskList.slice();\n                newTaskList.push(newTask);\n                setTaskList(newTaskList);\n            }\n            setTaskName(\"\");\n            setDeadline(\"\");\n            setDuration(\"\");\n        }\n    }\n    function handleChange(event, setter) {\n        setter(event.target.value);\n    }\n    let categories = [];\n    taskList.map((task)=>{\n        const deadline = new Date(task.taskDeadline);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        if (difference < 1) {\n            difference = 0;\n        }\n        if (categories[difference] === undefined) {\n            categories[difference] = [];\n        }\n        categories[difference].push(task);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter task\",\n                value: name,\n                onChange: (event)=>handleChange(event, setTaskName),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: deadline,\n                onChange: (event)=>handleChange(event, setDeadline),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Enter task duration\",\n                value: duration,\n                onChange: (event)=>handleChange(event, setDuration),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            completed.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Completed\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                        lineNumber: 114,\n                        columnNumber: 13\n                    }, this),\n                    completed.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            task: task,\n                            onCheckboxClick: ()=>handleCheckboxClick(task)\n                        }, task.id, false, {\n                            fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                            lineNumber: 115,\n                            columnNumber: 38\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 113,\n                columnNumber: 11\n            }, this) : false,\n            categories.map((tasks, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                index,\n                                \" \",\n                                index == 1 ? \"day\" : \"days\",\n                                \" left\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                            lineNumber: 122,\n                            columnNumber: 15\n                        }, this),\n                        tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                task: task,\n                                onCheckboxClick: ()=>handleCheckboxClick(task)\n                            }, task.id, false, {\n                                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                                lineNumber: 123,\n                                columnNumber: 36\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                    lineNumber: 121,\n                    columnNumber: 13\n                }, this);\n            }),\n            someday.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Someday\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                        lineNumber: 130,\n                        columnNumber: 13\n                    }, this),\n                    someday.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            task: task,\n                            onCheckboxClick: ()=>handleCheckboxClick(task)\n                        }, task.id, false, {\n                            fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                            lineNumber: 131,\n                            columnNumber: 36\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 129,\n                columnNumber: 11\n            }, this) : false\n        ]\n    }, void 0, true);\n}\n_s(ToDoList, \"WJDsqDD3IQkO+E2zQXuS27CARZc=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUMsV0FBVzVELDhFQUFnQjZEOztzQ0FDOUIsOERBQUNDOztnQ0FBR0c7Z0NBQU07Z0NBQUdBLFNBQVMsSUFBSSxRQUFRO2dDQUFROzs7Ozs7O3dCQUN6Q0QsTUFBTWpCLElBQUksQ0FBQ3RCLHFCQUFTLDhEQUFDOUIsNkNBQUlBO2dDQUFlOEIsTUFBTUE7Z0NBQU1zQyxpQkFBaUIsSUFBTXZDLG9CQUFvQkM7K0JBQWhFQSxLQUFLUTs7Ozs7Ozs7Ozs7WUFHN0M7WUFFQzNCLFFBQVFvRCxTQUFTLGtCQUNkLDhEQUFDQztnQkFBSUMsV0FBVzVELDhFQUFnQjZEOztrQ0FDOUIsOERBQUNDO2tDQUFFOzs7Ozs7b0JBQ0Z4RCxRQUFReUMsSUFBSSxDQUFDdEIscUJBQVMsOERBQUM5Qiw2Q0FBSUE7NEJBQWU4QixNQUFNQTs0QkFBTXNDLGlCQUFpQixJQUFNdkMsb0JBQW9CQzsyQkFBaEVBLEtBQUtROzs7Ozs7Ozs7O3VCQUV6Qzs7O0FBR1Y7R0FsSXdCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Ub0RvTGlzdC5qcz9jNjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1RvRG9MaXN0Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb0RvTGlzdCgpIHtcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzb21lZGF5LCBzZXRTb21lZGF5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25hbWUsIHNldFRhc2tOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2RlYWRsaW5lLCBzZXREZWFkbGluZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY3VycmVudERhdGUsIHNldEN1cnJlbnREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld0RhdGUuZ2V0RGF0ZSgpICsgXCIgXCIgKyBjdXJyZW50RGF0ZS5nZXREYXRlKCkpXG4gICAgICBpZiAobmV3RGF0ZS5nZXREYXRlKCkgIT09IGN1cnJlbnREYXRlLmdldERhdGUoKSkge1xuICAgICAgICBzZXRDb21wbGV0ZWQoW10pO1xuICAgICAgfVxuICAgICAgc2V0Q3VycmVudERhdGUobmV3RGF0ZSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzaykge1xuICAgIGxldCBuZXdDb21wbGV0ZWQgPSBjb21wbGV0ZWQuc2xpY2UoKTtcbiAgICB0YXNrLmNoZWNrZWQgPSAhdGFzay5jaGVja2VkO1xuXG4gICAgaWYgKHRhc2suZGVhZGxpbmUgPT0gJycpIHtcbiAgICAgIGxldCBuZXdTb21lZGF5ID0gc29tZWRheS5zbGljZSgpO1xuICAgICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgICBuZXdDb21wbGV0ZWQucHVzaCh0YXNrKTtcbiAgICAgICAgbmV3U29tZWRheSA9IHNvbWVkYXkuZmlsdGVyKChjdXJyKSA9PiBjdXJyLmlkICE9IHRhc2suaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U29tZWRheS5wdXNoKHRhc2spO1xuICAgICAgICBuZXdDb21wbGV0ZWQgPSBjb21wbGV0ZWQuZmlsdGVyKChjdXJyKSA9PiBjdXJyLmlkICE9IHRhc2suaWQpO1xuICAgICAgfVxuXG4gICAgICBzZXRTb21lZGF5KG5ld1NvbWVkYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VGFza0xpc3QgPSB0YXNrTGlzdC5zbGljZSgpO1xuXG4gICAgICBpZiAodGFzay5jaGVja2VkKSB7XG4gICAgICAgIG5ld0NvbXBsZXRlZC5wdXNoKHRhc2spO1xuICAgICAgICBuZXdUYXNrTGlzdCA9IHRhc2tMaXN0LmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPSB0YXNrLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1Rhc2tMaXN0LnB1c2godGFzayk7XG4gICAgICAgIG5ld0NvbXBsZXRlZCA9IGNvbXBsZXRlZC5maWx0ZXIoKGN1cnIpID0+IGN1cnIuaWQgIT0gdGFzay5pZCk7XG4gICAgICB9XG4gIFxuICAgICAgc2V0VGFza0xpc3QobmV3VGFza0xpc3QpO1xuICAgIH1cbiAgICBcbiAgICBzZXRDb21wbGV0ZWQobmV3Q29tcGxldGVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgdGFza05hbWU6IG5hbWUsXG4gICAgICAgIHRhc2tEZWFkbGluZTogZGVhZGxpbmUsXG4gICAgICAgIHRhc2tEdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChkZWFkbGluZSA9PT0gJycpIHtcbiAgICAgICAgbGV0IG5ld1NvbWVkYXkgPSBzb21lZGF5LnNsaWNlKCk7XG4gICAgICAgIG5ld1NvbWVkYXkucHVzaChuZXdUYXNrKTtcbiAgICAgICAgc2V0U29tZWRheShuZXdTb21lZGF5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5ld1Rhc2tMaXN0ID0gdGFza0xpc3Quc2xpY2UoKTtcbiAgICAgICAgbmV3VGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICAgICAgc2V0VGFza0xpc3QobmV3VGFza0xpc3QpO1xuICAgICAgfVxuICAgICAgc2V0VGFza05hbWUoJycpO1xuICAgICAgc2V0RGVhZGxpbmUoJycpO1xuICAgICAgc2V0RHVyYXRpb24oJycpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCwgc2V0dGVyKSB7XG4gICAgc2V0dGVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBsZXQgY2F0ZWdvcmllcyA9IFtdO1xuICB0YXNrTGlzdC5tYXAoKHRhc2spID0+IHtcbiAgICBjb25zdCBkZWFkbGluZSA9IG5ldyBEYXRlKHRhc2sudGFza0RlYWRsaW5lKTtcbiAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguZmxvb3IoKGRlYWRsaW5lLmdldFRpbWUoKSAtIGN1cnJlbnREYXRlLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIGlmIChkaWZmZXJlbmNlIDwgMSkge1xuICAgICAgZGlmZmVyZW5jZSA9IDA7XG4gICAgfVxuICAgIFxuICAgIGlmIChjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhdGVnb3JpZXNbZGlmZmVyZW5jZV0gPSBbXTtcbiAgICB9XG5cbiAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdLnB1c2godGFzayk7XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0VGFza05hbWUpfSBvbktleVByZXNzPXsoZXZlbnQpID0+IGhhbmRsZUtleVByZXNzKGV2ZW50KX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPXtkZWFkbGluZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXREZWFkbGluZSl9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2sgZHVyYXRpb25cIiB2YWx1ZT17ZHVyYXRpb259IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0RHVyYXRpb24pfSBvbktleVByZXNzPXsoZXZlbnQpID0+IGhhbmRsZUtleVByZXNzKGV2ZW50KX0gLz5cbiAgICBcbiAgICAgIHtjb21wbGV0ZWQubGVuZ3RoID4gMFxuICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxwPkNvbXBsZXRlZDwvcD5cbiAgICAgICAgICAgIHtjb21wbGV0ZWQubWFwKCh0YXNrKSA9PiA8VGFzayBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IG9uQ2hlY2tib3hDbGljaz17KCkgPT4gaGFuZGxlQ2hlY2tib3hDbGljayh0YXNrKX0gLz4pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA6IGZhbHNlfVxuICAgICAgXG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKHRhc2tzLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgIDxwPntpbmRleH0geyhpbmRleCA9PSAxID8gXCJkYXlcIiA6IFwiZGF5c1wiKX0gbGVmdDwvcD5cbiAgICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkNoZWNrYm94Q2xpY2s9eygpID0+IGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzayl9IC8+KX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICB9KX1cblxuICAgICAge3NvbWVkYXkubGVuZ3RoID4gMFxuICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxwPlNvbWVkYXk8L3A+XG4gICAgICAgICAgICB7c29tZWRheS5tYXAoKHRhc2spID0+IDxUYXNrIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gb25DaGVja2JveENsaWNrPXsoKSA9PiBoYW5kbGVDaGVja2JveENsaWNrKHRhc2spfSAvPil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDogZmFsc2V9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVGFzayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidjQiLCJ1dWlkdjQiLCJzdHlsZXMiLCJUb0RvTGlzdCIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJjb21wbGV0ZWQiLCJzZXRDb21wbGV0ZWQiLCJzb21lZGF5Iiwic2V0U29tZWRheSIsIm5hbWUiLCJzZXRUYXNrTmFtZSIsImRlYWRsaW5lIiwic2V0RGVhZGxpbmUiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwiY3VycmVudERhdGUiLCJzZXRDdXJyZW50RGF0ZSIsIkRhdGUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibmV3RGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXREYXRlIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZUNoZWNrYm94Q2xpY2siLCJ0YXNrIiwibmV3Q29tcGxldGVkIiwic2xpY2UiLCJjaGVja2VkIiwibmV3U29tZWRheSIsInB1c2giLCJmaWx0ZXIiLCJjdXJyIiwiaWQiLCJuZXdUYXNrTGlzdCIsImhhbmRsZUtleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJuZXdUYXNrIiwidGFza05hbWUiLCJ0YXNrRGVhZGxpbmUiLCJ0YXNrRHVyYXRpb24iLCJoYW5kbGVDaGFuZ2UiLCJzZXR0ZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNhdGVnb3JpZXMiLCJtYXAiLCJkaWZmZXJlbmNlIiwiTWF0aCIsImZsb29yIiwiZ2V0VGltZSIsInVuZGVmaW5lZCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbktleVByZXNzIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwicCIsIm9uQ2hlY2tib3hDbGljayIsInRhc2tzIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/ToDoList.js\n"));

/***/ })

});