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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./pages/components/Task.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/ToDoList.module.css */ \"./styles/ToDoList.module.css\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction ToDoList() {\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [someday, setSomeday] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [name, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Date());\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const newDate = new Date();\n            console.log(newDate.getDate() + \" \" + currentDate.getDate());\n            if (newDate.getDate() !== currentDate.getDate()) {\n                setCompleted([]);\n            }\n            setCurrentDate(newDate);\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    function handleCheckboxClick(task) {\n        let newCompleted = completed.slice();\n        task.checked = !task.checked;\n        console.log(task.tas);\n        if (task.taskDeadline == \"\") {\n            let newSomeday = someday.slice();\n            if (task.checked) {\n                newCompleted.push(task);\n                newSomeday = someday.filter((curr)=>curr.id != task.id);\n            } else {\n                newSomeday.push(task);\n                newCompleted = completed.filter((curr)=>curr.id != task.id);\n            }\n            setSomeday(newSomeday);\n        } else {\n            let newTaskList = taskList.slice();\n            if (task.checked) {\n                newCompleted.push(task);\n                newTaskList = taskList.filter((curr)=>curr.id != task.id);\n            } else {\n                newTaskList.push(task);\n                newCompleted = completed.filter((curr)=>curr.id != task.id);\n            }\n            setTaskList(newTaskList);\n        }\n        setCompleted(newCompleted);\n    }\n    function handleKeyPress(event) {\n        if (event.key == \"Enter\") {\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n                taskName: name,\n                taskDeadline: deadline,\n                taskDuration: duration,\n                checked: false\n            };\n            if (deadline === \"\") {\n                let newSomeday = someday.slice();\n                newSomeday.push(newTask);\n                setSomeday(newSomeday);\n            } else {\n                let newTaskList = taskList.slice();\n                newTaskList.push(newTask);\n                setTaskList(newTaskList);\n            }\n            setTaskName(\"\");\n            setDeadline(\"\");\n            setDuration(\"\");\n        }\n    }\n    function handleChange(event, setter) {\n        setter(event.target.value);\n    }\n    let categories = [];\n    taskList.map((task)=>{\n        const deadline = new Date(task.taskDeadline);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        if (difference < 1) {\n            difference = 0;\n        }\n        if (categories[difference] === undefined) {\n            categories[difference] = [];\n        }\n        categories[difference].push(task);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter task\",\n                value: name,\n                onChange: (event)=>handleChange(event, setTaskName),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 109,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: deadline,\n                onChange: (event)=>handleChange(event, setDeadline),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Enter task duration\",\n                value: duration,\n                onChange: (event)=>handleChange(event, setDuration),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            completed.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Completed\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                        lineNumber: 115,\n                        columnNumber: 13\n                    }, this),\n                    completed.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            task: task,\n                            onCheckboxClick: ()=>handleCheckboxClick(task)\n                        }, task.id, false, {\n                            fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                            lineNumber: 116,\n                            columnNumber: 38\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 114,\n                columnNumber: 11\n            }, this) : false,\n            categories.map((tasks, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                index,\n                                \" \",\n                                index == 1 ? \"day\" : \"days\",\n                                \" left\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                            lineNumber: 123,\n                            columnNumber: 15\n                        }, this),\n                        tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                task: task,\n                                onCheckboxClick: ()=>handleCheckboxClick(task)\n                            }, task.id, false, {\n                                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                                lineNumber: 124,\n                                columnNumber: 36\n                            }, this))\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                    lineNumber: 122,\n                    columnNumber: 13\n                }, this);\n            }),\n            someday.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Someday\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                        lineNumber: 131,\n                        columnNumber: 13\n                    }, this),\n                    someday.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            task: task,\n                            onCheckboxClick: ()=>handleCheckboxClick(task)\n                        }, task.id, false, {\n                            fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                            lineNumber: 132,\n                            columnNumber: 36\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 130,\n                columnNumber: 11\n            }, this) : false\n        ]\n    }, void 0, true);\n}\n_s(ToDoList, \"WJDsqDD3IQkO+E2zQXuS27CARZc=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0M7Z0JBQ3BCLHFCQUNFLDhEQUFDTjtvQkFBSUMsV0FBVzdELDhFQUFnQjhEOztzQ0FDOUIsOERBQUNDOztnQ0FBR0c7Z0NBQU07Z0NBQUdBLFNBQVMsSUFBSSxRQUFRO2dDQUFROzs7Ozs7O3dCQUN6Q0QsTUFBTWpCLElBQUksQ0FBQ3ZCLHFCQUFTLDhEQUFDOUIsNkNBQUlBO2dDQUFlOEIsTUFBTUE7Z0NBQU11QyxpQkFBaUIsSUFBTXhDLG9CQUFvQkM7K0JBQWhFQSxLQUFLVTs7Ozs7Ozs7Ozs7WUFHN0M7WUFFQzdCLFFBQVFxRCxTQUFTLGtCQUNkLDhEQUFDQztnQkFBSUMsV0FBVzdELDhFQUFnQjhEOztrQ0FDOUIsOERBQUNDO2tDQUFFOzs7Ozs7b0JBQ0Z6RCxRQUFRMEMsSUFBSSxDQUFDdkIscUJBQVMsOERBQUM5Qiw2Q0FBSUE7NEJBQWU4QixNQUFNQTs0QkFBTXVDLGlCQUFpQixJQUFNeEMsb0JBQW9CQzsyQkFBaEVBLEtBQUtVOzs7Ozs7Ozs7O3VCQUV6Qzs7O0FBR1Y7R0FuSXdCbEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Ub0RvTGlzdC5qcz9jNjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1RvRG9MaXN0Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb0RvTGlzdCgpIHtcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzb21lZGF5LCBzZXRTb21lZGF5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25hbWUsIHNldFRhc2tOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2RlYWRsaW5lLCBzZXREZWFkbGluZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY3VycmVudERhdGUsIHNldEN1cnJlbnREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld0RhdGUuZ2V0RGF0ZSgpICsgXCIgXCIgKyBjdXJyZW50RGF0ZS5nZXREYXRlKCkpXG4gICAgICBpZiAobmV3RGF0ZS5nZXREYXRlKCkgIT09IGN1cnJlbnREYXRlLmdldERhdGUoKSkge1xuICAgICAgICBzZXRDb21wbGV0ZWQoW10pO1xuICAgICAgfVxuICAgICAgc2V0Q3VycmVudERhdGUobmV3RGF0ZSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzaykge1xuICAgIGxldCBuZXdDb21wbGV0ZWQgPSBjb21wbGV0ZWQuc2xpY2UoKTtcbiAgICB0YXNrLmNoZWNrZWQgPSAhdGFzay5jaGVja2VkO1xuXG4gICAgY29uc29sZS5sb2codGFzay50YXMpXG4gICAgaWYgKHRhc2sudGFza0RlYWRsaW5lID09ICcnKSB7XG4gICAgICBsZXQgbmV3U29tZWRheSA9IHNvbWVkYXkuc2xpY2UoKTtcbiAgICAgIGlmICh0YXNrLmNoZWNrZWQpIHtcbiAgICAgICAgbmV3Q29tcGxldGVkLnB1c2godGFzayk7XG4gICAgICAgIG5ld1NvbWVkYXkgPSBzb21lZGF5LmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPSB0YXNrLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1NvbWVkYXkucHVzaCh0YXNrKTtcbiAgICAgICAgbmV3Q29tcGxldGVkID0gY29tcGxldGVkLmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPSB0YXNrLmlkKTtcbiAgICAgIH1cblxuICAgICAgc2V0U29tZWRheShuZXdTb21lZGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1Rhc2tMaXN0ID0gdGFza0xpc3Quc2xpY2UoKTtcblxuICAgICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgICBuZXdDb21wbGV0ZWQucHVzaCh0YXNrKTtcbiAgICAgICAgbmV3VGFza0xpc3QgPSB0YXNrTGlzdC5maWx0ZXIoKGN1cnIpID0+IGN1cnIuaWQgIT0gdGFzay5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdUYXNrTGlzdC5wdXNoKHRhc2spO1xuICAgICAgICBuZXdDb21wbGV0ZWQgPSBjb21wbGV0ZWQuZmlsdGVyKChjdXJyKSA9PiBjdXJyLmlkICE9IHRhc2suaWQpO1xuICAgICAgfVxuICBcbiAgICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tMaXN0KTtcbiAgICB9XG4gICAgXG4gICAgc2V0Q29tcGxldGVkKG5ld0NvbXBsZXRlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIHRhc2tOYW1lOiBuYW1lLFxuICAgICAgICB0YXNrRGVhZGxpbmU6IGRlYWRsaW5lLFxuICAgICAgICB0YXNrRHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoZGVhZGxpbmUgPT09ICcnKSB7XG4gICAgICAgIGxldCBuZXdTb21lZGF5ID0gc29tZWRheS5zbGljZSgpO1xuICAgICAgICBuZXdTb21lZGF5LnB1c2gobmV3VGFzayk7XG4gICAgICAgIHNldFNvbWVkYXkobmV3U29tZWRheSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdUYXNrTGlzdCA9IHRhc2tMaXN0LnNsaWNlKCk7XG4gICAgICAgIG5ld1Rhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tMaXN0KTtcbiAgICAgIH1cbiAgICAgIHNldFRhc2tOYW1lKCcnKTtcbiAgICAgIHNldERlYWRsaW5lKCcnKTtcbiAgICAgIHNldER1cmF0aW9uKCcnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldHRlcikge1xuICAgIHNldHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcbiAgdGFza0xpc3QubWFwKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgZGVhZGxpbmUgPSBuZXcgRGF0ZSh0YXNrLnRhc2tEZWFkbGluZSk7XG4gICAgbGV0IGRpZmZlcmVuY2UgPSBNYXRoLmZsb29yKChkZWFkbGluZS5nZXRUaW1lKCkgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2F0ZWdvcmllc1tkaWZmZXJlbmNlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID0gW107XG4gICAgfVxuXG4gICAgY2F0ZWdvcmllc1tkaWZmZXJlbmNlXS5wdXNoKHRhc2spO1xuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGFza1wiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldFRhc2tOYW1lKX0gb25LZXlQcmVzcz17KGV2ZW50KSA9PiBoYW5kbGVLZXlQcmVzcyhldmVudCl9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiB2YWx1ZT17ZGVhZGxpbmV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0RGVhZGxpbmUpfSBvbktleVByZXNzPXsoZXZlbnQpID0+IGhhbmRsZUtleVByZXNzKGV2ZW50KX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrIGR1cmF0aW9uXCIgdmFsdWU9e2R1cmF0aW9ufSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldER1cmF0aW9uKX0gb25LZXlQcmVzcz17KGV2ZW50KSA9PiBoYW5kbGVLZXlQcmVzcyhldmVudCl9IC8+XG4gICAgXG4gICAgICB7Y29tcGxldGVkLmxlbmd0aCA+IDBcbiAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8cD5Db21wbGV0ZWQ8L3A+XG4gICAgICAgICAgICB7Y29tcGxldGVkLm1hcCgodGFzaykgPT4gPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkNoZWNrYm94Q2xpY2s9eygpID0+IGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzayl9IC8+KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgOiBmYWxzZX1cbiAgICAgIFxuICAgICAge2NhdGVnb3JpZXMubWFwKCh0YXNrcywgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgICA8cD57aW5kZXh9IHsoaW5kZXggPT0gMSA/IFwiZGF5XCIgOiBcImRheXNcIil9IGxlZnQ8L3A+XG4gICAgICAgICAgICAgIHt0YXNrcy5tYXAoKHRhc2spID0+IDxUYXNrIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gb25DaGVja2JveENsaWNrPXsoKSA9PiBoYW5kbGVDaGVja2JveENsaWNrKHRhc2spfSAvPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgfSl9XG5cbiAgICAgIHtzb21lZGF5Lmxlbmd0aCA+IDBcbiAgICAgICAgPyA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8cD5Tb21lZGF5PC9wPlxuICAgICAgICAgICAge3NvbWVkYXkubWFwKCh0YXNrKSA9PiA8VGFzayBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IG9uQ2hlY2tib3hDbGljaz17KCkgPT4gaGFuZGxlQ2hlY2tib3hDbGljayh0YXNrKX0gLz4pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA6IGZhbHNlfVxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlRhc2siLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInY0IiwidXVpZHY0Iiwic3R5bGVzIiwiVG9Eb0xpc3QiLCJ0YXNrTGlzdCIsInNldFRhc2tMaXN0IiwiY29tcGxldGVkIiwic2V0Q29tcGxldGVkIiwic29tZWRheSIsInNldFNvbWVkYXkiLCJuYW1lIiwic2V0VGFza05hbWUiLCJkZWFkbGluZSIsInNldERlYWRsaW5lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImN1cnJlbnREYXRlIiwic2V0Q3VycmVudERhdGUiLCJEYXRlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5ld0RhdGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVDaGVja2JveENsaWNrIiwidGFzayIsIm5ld0NvbXBsZXRlZCIsInNsaWNlIiwiY2hlY2tlZCIsInRhcyIsInRhc2tEZWFkbGluZSIsIm5ld1NvbWVkYXkiLCJwdXNoIiwiZmlsdGVyIiwiY3VyciIsImlkIiwibmV3VGFza0xpc3QiLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwibmV3VGFzayIsInRhc2tOYW1lIiwidGFza0R1cmF0aW9uIiwiaGFuZGxlQ2hhbmdlIiwic2V0dGVyIiwidGFyZ2V0IiwidmFsdWUiLCJjYXRlZ29yaWVzIiwibWFwIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJmbG9vciIsImdldFRpbWUiLCJ1bmRlZmluZWQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwib25LZXlQcmVzcyIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInAiLCJvbkNoZWNrYm94Q2xpY2siLCJ0YXNrcyIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/ToDoList.js\n"));

/***/ })

});