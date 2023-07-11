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

/***/ "./pages/components/ToDoList.tsx":
/*!***************************************!*\
  !*** ./pages/components/ToDoList.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./pages/components/Task.tsx\");\n/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ \"./pages/components/Toggle.tsx\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/ToDoList.module.css */ \"./styles/ToDoList.module.css\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ToDoList() {\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [someday, setSomeday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [currentTask, setCurrentTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const newDate = new Date();\n            if (newDate.getDate() !== currentDate.getDate()) {\n                setCompleted([]);\n            }\n            setCurrentDate(newDate);\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    function handleCheckboxClick(task) {\n        task.checked = !task.checked;\n        if (task.deadline === \"\") {\n            updateLists(task, someday.slice(), setSomeday, completed.slice());\n        } else {\n            updateLists(task, taskList.slice(), setTaskList, completed.slice());\n        }\n    }\n    function updateLists(task, list, setter, newCompleted) {\n        if (task.checked) {\n            newCompleted.push(task);\n            list = list.filter((curr)=>curr.id != task.id);\n        } else {\n            list.push(task);\n            newCompleted = newCompleted.filter((curr)=>curr.id !== task.id);\n        }\n        setter(list);\n        setCompleted(newCompleted);\n    }\n    function handleKeyPress(event) {\n        if (event.key == \"Enter\") {\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n                name: name,\n                deadline: deadline,\n                duration: duration === null || duration < 0 ? 0 : duration,\n                checked: false\n            };\n            if (deadline === \"\") {\n                let newSomeday = someday.slice();\n                newTask.today = newTask.duration;\n                newSomeday.push(newTask);\n                setSomeday(newSomeday);\n            } else {\n                let newTaskList = taskList.slice();\n                newTaskList.push(newTask);\n                setTaskList(newTaskList);\n            }\n            setName(\"\");\n            setDeadline(\"\");\n            setDuration(null);\n        }\n    }\n    function handleChange(event, setter) {\n        setter(event.target.value);\n    }\n    let categories = [];\n    taskList.map((task)=>{\n        const deadline = new Date(task.deadline);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        task.today = Math.ceil(task.duration / (difference < 1 ? 1 : difference));\n        difference = difference - Math.ceil(task.duration / 30);\n        if (difference < 1) {\n            difference = 0;\n        }\n        if (categories[difference] === undefined) {\n            categories[difference] = [];\n        }\n        task.difference = difference;\n        categories[difference].push(task);\n    });\n    function renderList(list, label, length) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                label: label,\n                length: length,\n                children: list.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        task: task,\n                        onCheckboxClick: ()=>handleCheckboxClick(task),\n                        onStopClick: handleStop,\n                        onPlayClick: ()=>handlePlay(task)\n                    }, task.id, false, void 0, void 0))\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n                lineNumber: 119,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n            lineNumber: 118,\n            columnNumber: 7\n        }, this);\n    }\n    function handlePlay(task) {\n        const updatedTaskList = taskList.map((item)=>item.id === task.id ? {\n                ...item,\n                isRunning: true\n            } : {\n                ...item,\n                isRunning: false\n            });\n        setTaskList(updatedTaskList);\n    }\n    function handleStop(time, task) {\n        if (taskList.includes(task)) {\n            const deadline = new Date(task.deadline);\n            task.duration -= Math.floor(time / 60);\n            if (task.duration < 0) {\n                task.duration = 0;\n            }\n            let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n            task.today = Math.ceil(task.duration / (difference < 1 ? 1 : difference));\n            difference = difference - Math.ceil(task.duration / 30);\n            console.log(difference);\n            categories[task.difference] = categories[task.difference].filter((curr)=>{\n                curr.id !== task.id;\n            });\n            task.difference = difference;\n            if (categories[difference] === undefined) {\n                categories[difference] = [];\n            }\n            categories[difference].push(task);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter task\",\n                value: name,\n                onChange: (event)=>handleChange(event, setName),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n                lineNumber: 178,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: deadline,\n                onChange: (event)=>handleChange(event, setDeadline),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n                lineNumber: 185,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Enter task duration\",\n                min: \"0\",\n                value: duration,\n                onChange: (event)=>handleChange(event, setDuration),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n                lineNumber: 191,\n                columnNumber: 7\n            }, this),\n            completed.length > 0 ? renderList(completed, \"Completed\", completed.length) : false,\n            categories.map((tasks, index)=>{\n                if (index) {\n                    return renderList(tasks, \"\".concat(index, \" \").concat(index === 1 ? \"day\" : \"days\", \" left\"), tasks.length);\n                } else {\n                    return renderList(tasks, \"0 days left\", tasks.length);\n                }\n            }),\n            someday.length > 0 ? renderList(someday, \"Someday\", someday.length) : false\n        ]\n    }, void 0, true);\n}\n_s(ToDoList, \"Yz4MnAS8OzDBEhi7Hy3iP8cuDVI=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTtnQkFDWkcsS0FBSTtnQkFDSmpDLE9BQU9qQztnQkFDUGdFLFVBQVUsQ0FBQ3ZDLFFBQVVNLGFBQWFOLE9BQU94QjtnQkFDekNnRSxZQUFZLENBQUN4QyxRQUFVRCxlQUFlQzs7Ozs7O1lBR3ZDakMsVUFBVW9ELFNBQVMsSUFDaEJGLFdBQVdsRCxXQUFZLGFBQVlBLFVBQVVvRCxVQUM3QztZQUVIVixXQUFXQyxJQUFJLENBQUNnQyxPQUFPQztnQkFDdEIsSUFBSUEsT0FBTztvQkFDVCxPQUFPMUIsV0FDTHlCLE9BQ0EsR0FBWUMsT0FBVEEsT0FBTSxLQUFnQyxPQUE3QkEsVUFBVSxJQUFJLFFBQVEsUUFBTyxVQUN6Q0QsTUFBTXZCO2dCQUVWLE9BQU87b0JBQ0wsT0FBT0YsV0FBV3lCLE9BQVEsZUFBY0EsTUFBTXZCO2dCQUNoRDtZQUNGO1lBRUNsRCxRQUFRa0QsU0FBUyxJQUNkRixXQUFXaEQsU0FBVSxXQUFVQSxRQUFRa0QsVUFDdkM7OztBQUdWO0dBbE53QnZEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvVG9Eb0xpc3QudHN4P2NkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCB7IFRhc2tJdGVtIH0gZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiLi9Ub2dnbGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1RvRG9MaXN0Lm1vZHVsZS5jc3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb0RvTGlzdCgpIHtcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZTxUYXNrSXRlbVtdPihbXSk7XG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSB1c2VTdGF0ZTxUYXNrSXRlbVtdPihbXSk7XG4gIGNvbnN0IFtzb21lZGF5LCBzZXRTb21lZGF5XSA9IHVzZVN0YXRlPFRhc2tJdGVtW10+KFtdKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2RlYWRsaW5lLCBzZXREZWFkbGluZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY3VycmVudERhdGUsIHNldEN1cnJlbnREYXRlXSA9IHVzZVN0YXRlPERhdGU+KG5ldyBEYXRlKCkpO1xuICBjb25zdCBbY3VycmVudFRhc2ssIHNldEN1cnJlbnRUYXNrXSA9IHVzZVN0YXRlPFRhc2tJdGVtPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBpZiAobmV3RGF0ZS5nZXREYXRlKCkgIT09IGN1cnJlbnREYXRlLmdldERhdGUoKSkge1xuICAgICAgICBzZXRDb21wbGV0ZWQoW10pO1xuICAgICAgfVxuICAgICAgc2V0Q3VycmVudERhdGUobmV3RGF0ZSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2xpY2soIHRhc2s6IFRhc2tJdGVtICkge1xuICAgIHRhc2suY2hlY2tlZCA9ICF0YXNrLmNoZWNrZWQ7XG5cbiAgICBpZiAodGFzay5kZWFkbGluZSA9PT0gXCJcIikge1xuICAgICAgdXBkYXRlTGlzdHModGFzaywgc29tZWRheS5zbGljZSgpLCBzZXRTb21lZGF5LCBjb21wbGV0ZWQuc2xpY2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZUxpc3RzKHRhc2ssIHRhc2tMaXN0LnNsaWNlKCksIHNldFRhc2tMaXN0LCBjb21wbGV0ZWQuc2xpY2UoKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTGlzdHModGFzazogVGFza0l0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdDogVGFza0l0ZW1bXSxcbiAgICAgICAgICAgICAgICAgICAgICBzZXR0ZXI6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPFRhc2tJdGVtW10+PixcbiAgICAgICAgICAgICAgICAgICAgICBuZXdDb21wbGV0ZWQ6IFRhc2tJdGVtW10pIHtcbiAgICBpZiAodGFzay5jaGVja2VkKSB7XG4gICAgICBuZXdDb21wbGV0ZWQucHVzaCh0YXNrKTtcbiAgICAgIGxpc3QgPSBsaXN0LmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPSB0YXNrLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5wdXNoKHRhc2spO1xuICAgICAgbmV3Q29tcGxldGVkID0gbmV3Q29tcGxldGVkLmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPT0gdGFzay5pZCk7XG4gICAgfVxuXG4gICAgc2V0dGVyKGxpc3QpO1xuICAgIHNldENvbXBsZXRlZChuZXdDb21wbGV0ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgY29uc3QgbmV3VGFzayA6IFRhc2tJdGVtID0ge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGRlYWRsaW5lOiBkZWFkbGluZSxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uID09PSBudWxsIHx8IGR1cmF0aW9uIDwgMCA/IDAgOiBkdXJhdGlvbixcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgICBpZiAoZGVhZGxpbmUgPT09IFwiXCIpIHtcbiAgICAgICAgbGV0IG5ld1NvbWVkYXkgPSBzb21lZGF5LnNsaWNlKCk7XG4gICAgICAgIG5ld1Rhc2sudG9kYXkgPSBuZXdUYXNrLmR1cmF0aW9uO1xuICAgICAgICBuZXdTb21lZGF5LnB1c2gobmV3VGFzayk7XG4gICAgICAgIHNldFNvbWVkYXkobmV3U29tZWRheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbmV3VGFza0xpc3QgPSB0YXNrTGlzdC5zbGljZSgpO1xuICAgICAgICBuZXdUYXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xuICAgICAgICBzZXRUYXNrTGlzdChuZXdUYXNrTGlzdCk7XG4gICAgICB9XG4gICAgICBzZXROYW1lKFwiXCIpO1xuICAgICAgc2V0RGVhZGxpbmUoXCJcIik7XG4gICAgICBzZXREdXJhdGlvbihudWxsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGVyOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxhbnk+Pikge1xuICAgIHNldHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgbGV0IGNhdGVnb3JpZXMgOiBUYXNrSXRlbVtdW10gPSBbXTtcbiAgdGFza0xpc3QubWFwKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgZGVhZGxpbmUgPSBuZXcgRGF0ZSh0YXNrLmRlYWRsaW5lKTtcbiAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguZmxvb3IoXG4gICAgICAoZGVhZGxpbmUuZ2V0VGltZSgpIC0gY3VycmVudERhdGUuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KVxuICAgICk7XG4gICAgdGFzay50b2RheSA9IE1hdGguY2VpbChcbiAgICAgIHRhc2suZHVyYXRpb24gLyAoZGlmZmVyZW5jZSA8IDEgPyAxIDogZGlmZmVyZW5jZSlcbiAgICApO1xuICAgIGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlIC0gTWF0aC5jZWlsKHRhc2suZHVyYXRpb24gLyAzMCk7XG4gICAgaWYgKGRpZmZlcmVuY2UgPCAxKSB7XG4gICAgICBkaWZmZXJlbmNlID0gMDtcbiAgICB9XG5cbiAgICBpZiAoY2F0ZWdvcmllc1tkaWZmZXJlbmNlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID0gW107XG4gICAgfVxuXG4gICAgdGFzay5kaWZmZXJlbmNlID0gZGlmZmVyZW5jZTtcbiAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckxpc3QobGlzdDogVGFza0l0ZW1bXSxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFRvZ2dsZSBsYWJlbD17bGFiZWx9IGxlbmd0aD17bGVuZ3RofVxuICAgICAgICAgIGNoaWxkcmVuPXtsaXN0Lm1hcCgodGFzaykgPT4gKFxuICAgICAgICAgICAgPFRhc2tcbiAgICAgICAgICAgICAga2V5PXt0YXNrLmlkfVxuICAgICAgICAgICAgICB0YXNrPXt0YXNrfVxuICAgICAgICAgICAgICBvbkNoZWNrYm94Q2xpY2s9eygpID0+IGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzayl9XG4gICAgICAgICAgICAgIG9uU3RvcENsaWNrPXtoYW5kbGVTdG9wfVxuICAgICAgICAgICAgICBvblBsYXlDbGljaz17KCkgPT4gaGFuZGxlUGxheSh0YXNrKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUGxheSh0YXNrOiBUYXNrSXRlbSkge1xuICAgIGNvbnN0IHVwZGF0ZWRUYXNrTGlzdCA9IHRhc2tMaXN0Lm1hcCgoaXRlbSkgPT5cbiAgICAgIGl0ZW0uaWQgPT09IHRhc2suaWQgPyB7IC4uLml0ZW0sIGlzUnVubmluZzogdHJ1ZSB9IDogeyAuLi5pdGVtLCBpc1J1bm5pbmc6IGZhbHNlIH1cbiAgICApO1xuICBcbiAgICBzZXRUYXNrTGlzdCh1cGRhdGVkVGFza0xpc3QpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3RvcCh0aW1lOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgdGFzazogVGFza0l0ZW0pIHtcbiAgICBpZiAodGFza0xpc3QuaW5jbHVkZXModGFzaykpIHtcbiAgICAgIGNvbnN0IGRlYWRsaW5lID0gbmV3IERhdGUodGFzay5kZWFkbGluZSk7XG5cbiAgICAgIHRhc2suZHVyYXRpb24gLT0gTWF0aC5mbG9vcih0aW1lIC8gNjApO1xuICAgICAgaWYgKHRhc2suZHVyYXRpb24gPCAwKSB7XG4gICAgICAgIHRhc2suZHVyYXRpb24gPSAwO1xuICAgICAgfVxuXG4gICAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguZmxvb3IoXG4gICAgICAgIChkZWFkbGluZS5nZXRUaW1lKCkgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpXG4gICAgICApO1xuXG4gICAgICB0YXNrLnRvZGF5ID0gTWF0aC5jZWlsKFxuICAgICAgICB0YXNrLmR1cmF0aW9uIC8gKGRpZmZlcmVuY2UgPCAxID8gMSA6IGRpZmZlcmVuY2UpXG4gICAgICApO1xuICAgICAgZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2UgLSBNYXRoLmNlaWwodGFzay5kdXJhdGlvbiAvIDMwKTtcbiAgICAgIGNvbnNvbGUubG9nKGRpZmZlcmVuY2UpO1xuICAgICAgY2F0ZWdvcmllc1t0YXNrLmRpZmZlcmVuY2VdID0gY2F0ZWdvcmllc1t0YXNrLmRpZmZlcmVuY2VdLmZpbHRlcihcbiAgICAgICAgKGN1cnIpID0+IHtcbiAgICAgICAgICBjdXJyLmlkICE9PSB0YXNrLmlkO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgdGFzay5kaWZmZXJlbmNlID0gZGlmZmVyZW5jZTtcblxuICAgICAgaWYgKGNhdGVnb3JpZXNbZGlmZmVyZW5jZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID0gW107XG4gICAgICB9XG5cbiAgICAgIGNhdGVnb3JpZXNbZGlmZmVyZW5jZV0ucHVzaCh0YXNrKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2tcIlxuICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXROYW1lKX1cbiAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiBoYW5kbGVLZXlQcmVzcyhldmVudCl9XG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJkYXRlXCJcbiAgICAgICAgdmFsdWU9e2RlYWRsaW5lfVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldERlYWRsaW5lKX1cbiAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiBoYW5kbGVLZXlQcmVzcyhldmVudCl9XG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2sgZHVyYXRpb25cIlxuICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgdmFsdWU9e2R1cmF0aW9ufVxuICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldER1cmF0aW9uKX1cbiAgICAgICAgb25LZXlQcmVzcz17KGV2ZW50KSA9PiBoYW5kbGVLZXlQcmVzcyhldmVudCl9XG4gICAgICAvPlxuXG4gICAgICB7Y29tcGxldGVkLmxlbmd0aCA+IDBcbiAgICAgICAgPyByZW5kZXJMaXN0KGNvbXBsZXRlZCwgYENvbXBsZXRlZGAsIGNvbXBsZXRlZC5sZW5ndGgpXG4gICAgICAgIDogZmFsc2V9XG5cbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgodGFza3MsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpbmRleCkge1xuICAgICAgICAgIHJldHVybiByZW5kZXJMaXN0KFxuICAgICAgICAgICAgdGFza3MsXG4gICAgICAgICAgICBgJHtpbmRleH0gJHtpbmRleCA9PT0gMSA/IFwiZGF5XCIgOiBcImRheXNcIn0gbGVmdGAsXG4gICAgICAgICAgICB0YXNrcy5sZW5ndGhcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZW5kZXJMaXN0KHRhc2tzLCBgMCBkYXlzIGxlZnRgLCB0YXNrcy5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9KX1cblxuICAgICAge3NvbWVkYXkubGVuZ3RoID4gMFxuICAgICAgICA/IHJlbmRlckxpc3Qoc29tZWRheSwgYFNvbWVkYXlgLCBzb21lZGF5Lmxlbmd0aClcbiAgICAgICAgOiBmYWxzZX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidjQiLCJ1dWlkdjQiLCJUYXNrIiwiVG9nZ2xlIiwic3R5bGVzIiwiVG9Eb0xpc3QiLCJ0YXNrTGlzdCIsInNldFRhc2tMaXN0IiwiY29tcGxldGVkIiwic2V0Q29tcGxldGVkIiwic29tZWRheSIsInNldFNvbWVkYXkiLCJuYW1lIiwic2V0TmFtZSIsImRlYWRsaW5lIiwic2V0RGVhZGxpbmUiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwiY3VycmVudERhdGUiLCJzZXRDdXJyZW50RGF0ZSIsIkRhdGUiLCJjdXJyZW50VGFzayIsInNldEN1cnJlbnRUYXNrIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5ld0RhdGUiLCJnZXREYXRlIiwiY2xlYXJJbnRlcnZhbCIsImhhbmRsZUNoZWNrYm94Q2xpY2siLCJ0YXNrIiwiY2hlY2tlZCIsInVwZGF0ZUxpc3RzIiwic2xpY2UiLCJsaXN0Iiwic2V0dGVyIiwibmV3Q29tcGxldGVkIiwicHVzaCIsImZpbHRlciIsImN1cnIiLCJpZCIsImhhbmRsZUtleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJuZXdUYXNrIiwibmV3U29tZWRheSIsInRvZGF5IiwibmV3VGFza0xpc3QiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNhdGVnb3JpZXMiLCJtYXAiLCJkaWZmZXJlbmNlIiwiTWF0aCIsImZsb29yIiwiZ2V0VGltZSIsImNlaWwiLCJ1bmRlZmluZWQiLCJyZW5kZXJMaXN0IiwibGFiZWwiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJjaGlsZHJlbiIsIm9uQ2hlY2tib3hDbGljayIsIm9uU3RvcENsaWNrIiwiaGFuZGxlU3RvcCIsIm9uUGxheUNsaWNrIiwiaGFuZGxlUGxheSIsInVwZGF0ZWRUYXNrTGlzdCIsIml0ZW0iLCJpc1J1bm5pbmciLCJ0aW1lIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uS2V5UHJlc3MiLCJtaW4iLCJ0YXNrcyIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/ToDoList.tsx\n"));

/***/ })

});