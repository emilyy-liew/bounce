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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./pages/components/Task.tsx\");\n/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ \"./pages/components/Toggle.tsx\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/ToDoList.module.css */ \"./styles/ToDoList.module.css\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ToDoList() {\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [someday, setSomeday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [currentTask, setCurrentTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const newDate = new Date();\n            if (newDate.getDate() !== currentDate.getDate()) {\n                setCompleted([]);\n            }\n            setCurrentDate(newDate);\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    function handleCheckboxClick(task) {\n        task.checked = !task.checked;\n        if (task.deadline === \"\") {\n            updateLists(task, someday.slice(), setSomeday, completed.slice());\n        } else {\n            updateLists(task, taskList.slice(), setTaskList, completed.slice());\n        }\n    }\n    function updateLists(task, list, setter, newCompleted) {\n        if (task.checked) {\n            newCompleted.push(task);\n            list = list.filter((curr)=>curr.id != task.id);\n        } else {\n            list.push(task);\n            newCompleted = newCompleted.filter((curr)=>curr.id !== task.id);\n        }\n        setter(list);\n        setCompleted(newCompleted);\n    }\n    function handleKeyPress(event) {\n        if (event.key == \"Enter\") {\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n                name: name,\n                deadline: deadline,\n                duration: duration === null || duration < 0 ? 0 : duration,\n                checked: false,\n                isRunning: false\n            };\n            if (deadline === \"\") {\n                let newSomeday = someday.slice();\n                newTask.today = newTask.duration;\n                newSomeday.push(newTask);\n                setSomeday(newSomeday);\n            } else {\n                let newTaskList = taskList.slice();\n                newTaskList.push(newTask);\n                setTaskList(newTaskList);\n            }\n            setName(\"\");\n            setDeadline(\"\");\n            setDuration(null);\n        }\n    }\n    function handleChange(event, setter) {\n        setter(event.target.value);\n    }\n    let categories = [];\n    taskList.map((task)=>{\n        const deadline = new Date(task.deadline);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        task.today = Math.ceil(task.duration / (difference < 1 ? 1 : difference));\n        difference = difference - Math.ceil(task.duration / 30);\n        if (difference < 1) {\n            difference = 0;\n        }\n        if (categories[difference] === undefined) {\n            categories[difference] = [];\n        }\n        task.difference = difference;\n        categories[difference].push(task);\n    });\n    function renderList(list, label, length) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                label: label,\n                length: length,\n                children: list.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        task: task,\n                        onCheckboxClick: ()=>handleCheckboxClick(task),\n                        onStopClick: handleStop,\n                        onPlayClick: ()=>handlePlay(task)\n                    }, void 0, false, void 0, void 0))\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n                lineNumber: 120,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n            lineNumber: 119,\n            columnNumber: 7\n        }, this);\n    }\n    function handlePlay(task) {\n        if (currentTask && currentTask !== task) {\n            currentTask.isRunning = false;\n        }\n        task.isRunning = true;\n        setCurrentTask(task);\n    }\n    function handleStop(time, task) {\n        if (taskList.includes(task)) {\n            const deadline = new Date(task.deadline);\n            task.duration -= Math.floor(time / 60);\n            if (task.duration < 0) {\n                task.duration = 0;\n            }\n            let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n            task.today = Math.ceil(task.duration / (difference < 1 ? 1 : difference));\n            difference = difference - Math.ceil(task.duration / 30);\n            console.log(difference);\n            categories[task.difference] = categories[task.difference].filter((curr)=>{\n                curr.id !== task.id;\n            });\n            task.difference = difference;\n            if (categories[difference] === undefined) {\n                categories[difference] = [];\n            }\n            categories[difference].push(task);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter task\",\n                value: name,\n                onChange: (event)=>handleChange(event, setName),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n                lineNumber: 179,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: deadline,\n                onChange: (event)=>handleChange(event, setDeadline),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n                lineNumber: 186,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Enter task duration\",\n                min: \"0\",\n                value: duration,\n                onChange: (event)=>handleChange(event, setDuration),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n                lineNumber: 192,\n                columnNumber: 7\n            }, this),\n            completed.length > 0 ? renderList(completed, \"Completed\", completed.length) : false,\n            categories.map((tasks, index)=>{\n                if (index) {\n                    return renderList(tasks, \"\".concat(index, \" \").concat(index === 1 ? \"day\" : \"days\", \" left\"), tasks.length);\n                } else {\n                    return renderList(tasks, \"0 days left\", tasks.length);\n                }\n            }),\n            someday.length > 0 ? renderList(someday, \"Someday\", someday.length) : false\n        ]\n    }, void 0, true);\n}\n_s(ToDoList, \"Yz4MnAS8OzDBEhi7Hy3iP8cuDVI=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ekM4RCxZQUFZLENBQUN0QyxRQUFVRCxlQUFlQzs7Ozs7O1lBR3ZDakMsVUFBVXFELFNBQVMsSUFDaEJGLFdBQVduRCxXQUFZLGFBQVlBLFVBQVVxRCxVQUM3QztZQUVIVixXQUFXQyxJQUFJLENBQUM2QixPQUFPQztnQkFDdEIsSUFBSUEsT0FBTztvQkFDVCxPQUFPdkIsV0FDTHNCLE9BQ0EsR0FBWUMsT0FBVEEsT0FBTSxLQUFnQyxPQUE3QkEsVUFBVSxJQUFJLFFBQVEsUUFBTyxVQUN6Q0QsTUFBTXBCO2dCQUVWLE9BQU87b0JBQ0wsT0FBT0YsV0FBV3NCLE9BQVEsZUFBY0EsTUFBTXBCO2dCQUNoRDtZQUNGO1lBRUNuRCxRQUFRbUQsU0FBUyxJQUNkRixXQUFXakQsU0FBVSxXQUFVQSxRQUFRbUQsVUFDdkM7OztBQUdWO0dBbk53QnhEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvVG9Eb0xpc3QudHN4P2NkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCB7IFRhc2tJdGVtIH0gZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiLi9Ub2dnbGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1RvRG9MaXN0Lm1vZHVsZS5jc3NcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb0RvTGlzdCgpIHtcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZTxUYXNrSXRlbVtdPihbXSk7XG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSB1c2VTdGF0ZTxUYXNrSXRlbVtdPihbXSk7XG4gIGNvbnN0IFtzb21lZGF5LCBzZXRTb21lZGF5XSA9IHVzZVN0YXRlPFRhc2tJdGVtW10+KFtdKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcbiAgY29uc3QgW2RlYWRsaW5lLCBzZXREZWFkbGluZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlPG51bWJlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbY3VycmVudERhdGUsIHNldEN1cnJlbnREYXRlXSA9IHVzZVN0YXRlPERhdGU+KG5ldyBEYXRlKCkpO1xuICBjb25zdCBbY3VycmVudFRhc2ssIHNldEN1cnJlbnRUYXNrXSA9IHVzZVN0YXRlPFRhc2tJdGVtPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICBpZiAobmV3RGF0ZS5nZXREYXRlKCkgIT09IGN1cnJlbnREYXRlLmdldERhdGUoKSkge1xuICAgICAgICBzZXRDb21wbGV0ZWQoW10pO1xuICAgICAgfVxuICAgICAgc2V0Q3VycmVudERhdGUobmV3RGF0ZSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2xpY2soIHRhc2s6IFRhc2tJdGVtICkge1xuICAgIHRhc2suY2hlY2tlZCA9ICF0YXNrLmNoZWNrZWQ7XG5cbiAgICBpZiAodGFzay5kZWFkbGluZSA9PT0gXCJcIikge1xuICAgICAgdXBkYXRlTGlzdHModGFzaywgc29tZWRheS5zbGljZSgpLCBzZXRTb21lZGF5LCBjb21wbGV0ZWQuc2xpY2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZUxpc3RzKHRhc2ssIHRhc2tMaXN0LnNsaWNlKCksIHNldFRhc2tMaXN0LCBjb21wbGV0ZWQuc2xpY2UoKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTGlzdHModGFzazogVGFza0l0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdDogVGFza0l0ZW1bXSxcbiAgICAgICAgICAgICAgICAgICAgICBzZXR0ZXI6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPFRhc2tJdGVtW10+PixcbiAgICAgICAgICAgICAgICAgICAgICBuZXdDb21wbGV0ZWQ6IFRhc2tJdGVtW10pIHtcbiAgICBpZiAodGFzay5jaGVja2VkKSB7XG4gICAgICBuZXdDb21wbGV0ZWQucHVzaCh0YXNrKTtcbiAgICAgIGxpc3QgPSBsaXN0LmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPSB0YXNrLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5wdXNoKHRhc2spO1xuICAgICAgbmV3Q29tcGxldGVkID0gbmV3Q29tcGxldGVkLmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPT0gdGFzay5pZCk7XG4gICAgfVxuXG4gICAgc2V0dGVyKGxpc3QpO1xuICAgIHNldENvbXBsZXRlZChuZXdDb21wbGV0ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pIHtcbiAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgY29uc3QgbmV3VGFzayA6IFRhc2tJdGVtID0ge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIGRlYWRsaW5lOiBkZWFkbGluZSxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uID09PSBudWxsIHx8IGR1cmF0aW9uIDwgMCA/IDAgOiBkdXJhdGlvbixcbiAgICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgICAgIGlzUnVubmluZzogZmFsc2UsXG4gICAgICB9O1xuXG4gICAgICBpZiAoZGVhZGxpbmUgPT09IFwiXCIpIHtcbiAgICAgICAgbGV0IG5ld1NvbWVkYXkgPSBzb21lZGF5LnNsaWNlKCk7XG4gICAgICAgIG5ld1Rhc2sudG9kYXkgPSBuZXdUYXNrLmR1cmF0aW9uO1xuICAgICAgICBuZXdTb21lZGF5LnB1c2gobmV3VGFzayk7XG4gICAgICAgIHNldFNvbWVkYXkobmV3U29tZWRheSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbmV3VGFza0xpc3QgPSB0YXNrTGlzdC5zbGljZSgpO1xuICAgICAgICBuZXdUYXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xuICAgICAgICBzZXRUYXNrTGlzdChuZXdUYXNrTGlzdCk7XG4gICAgICB9XG4gICAgICBzZXROYW1lKFwiXCIpO1xuICAgICAgc2V0RGVhZGxpbmUoXCJcIik7XG4gICAgICBzZXREdXJhdGlvbihudWxsKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGVyOiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxhbnk+Pikge1xuICAgIHNldHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgbGV0IGNhdGVnb3JpZXMgOiBUYXNrSXRlbVtdW10gPSBbXTtcbiAgdGFza0xpc3QubWFwKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgZGVhZGxpbmUgPSBuZXcgRGF0ZSh0YXNrLmRlYWRsaW5lKTtcbiAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguZmxvb3IoXG4gICAgICAoZGVhZGxpbmUuZ2V0VGltZSgpIC0gY3VycmVudERhdGUuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KVxuICAgICk7XG4gICAgdGFzay50b2RheSA9IE1hdGguY2VpbChcbiAgICAgIHRhc2suZHVyYXRpb24gLyAoZGlmZmVyZW5jZSA8IDEgPyAxIDogZGlmZmVyZW5jZSlcbiAgICApO1xuICAgIGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlIC0gTWF0aC5jZWlsKHRhc2suZHVyYXRpb24gLyAzMCk7XG4gICAgaWYgKGRpZmZlcmVuY2UgPCAxKSB7XG4gICAgICBkaWZmZXJlbmNlID0gMDtcbiAgICB9XG5cbiAgICBpZiAoY2F0ZWdvcmllc1tkaWZmZXJlbmNlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID0gW107XG4gICAgfVxuXG4gICAgdGFzay5kaWZmZXJlbmNlID0gZGlmZmVyZW5jZTtcbiAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdLnB1c2godGFzayk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbmRlckxpc3QobGlzdDogVGFza0l0ZW1bXSxcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFRvZ2dsZSBsYWJlbD17bGFiZWx9IGxlbmd0aD17bGVuZ3RofVxuICAgICAgICAgIGNoaWxkcmVuPXtsaXN0Lm1hcCgodGFzaykgPT4gKFxuICAgICAgICAgICAgPFRhc2tcbiAgICAgICAgICAgICAgdGFzaz17dGFza31cbiAgICAgICAgICAgICAgb25DaGVja2JveENsaWNrPXsoKSA9PiBoYW5kbGVDaGVja2JveENsaWNrKHRhc2spfVxuICAgICAgICAgICAgICBvblN0b3BDbGljaz17aGFuZGxlU3RvcH1cbiAgICAgICAgICAgICAgb25QbGF5Q2xpY2s9eygpID0+IGhhbmRsZVBsYXkodGFzayl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVBsYXkodGFzazogVGFza0l0ZW0pIHtcbiAgICBpZiAoY3VycmVudFRhc2sgJiYgY3VycmVudFRhc2sgIT09IHRhc2spIHtcbiAgICAgIGN1cnJlbnRUYXNrLmlzUnVubmluZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRhc2suaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICBzZXRDdXJyZW50VGFzayh0YXNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZVN0b3AodGltZTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgaWYgKHRhc2tMaXN0LmluY2x1ZGVzKHRhc2spKSB7XG4gICAgICBjb25zdCBkZWFkbGluZSA9IG5ldyBEYXRlKHRhc2suZGVhZGxpbmUpO1xuXG4gICAgICB0YXNrLmR1cmF0aW9uIC09IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgICAgIGlmICh0YXNrLmR1cmF0aW9uIDwgMCkge1xuICAgICAgICB0YXNrLmR1cmF0aW9uID0gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGRpZmZlcmVuY2UgPSBNYXRoLmZsb29yKFxuICAgICAgICAoZGVhZGxpbmUuZ2V0VGltZSgpIC0gY3VycmVudERhdGUuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KVxuICAgICAgKTtcblxuICAgICAgdGFzay50b2RheSA9IE1hdGguY2VpbChcbiAgICAgICAgdGFzay5kdXJhdGlvbiAvIChkaWZmZXJlbmNlIDwgMSA/IDEgOiBkaWZmZXJlbmNlKVxuICAgICAgKTtcbiAgICAgIGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlIC0gTWF0aC5jZWlsKHRhc2suZHVyYXRpb24gLyAzMCk7XG4gICAgICBjb25zb2xlLmxvZyhkaWZmZXJlbmNlKTtcbiAgICAgIGNhdGVnb3JpZXNbdGFzay5kaWZmZXJlbmNlXSA9IGNhdGVnb3JpZXNbdGFzay5kaWZmZXJlbmNlXS5maWx0ZXIoXG4gICAgICAgIChjdXJyKSA9PiB7XG4gICAgICAgICAgY3Vyci5pZCAhPT0gdGFzay5pZDtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHRhc2suZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG5cbiAgICAgIGlmIChjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2F0ZWdvcmllc1tkaWZmZXJlbmNlXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdLnB1c2godGFzayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrXCJcbiAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0TmFtZSl9XG4gICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfVxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgIHZhbHVlPXtkZWFkbGluZX1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXREZWFkbGluZSl9XG4gICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfVxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrIGR1cmF0aW9uXCJcbiAgICAgICAgbWluPVwiMFwiXG4gICAgICAgIHZhbHVlPXtkdXJhdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXREdXJhdGlvbil9XG4gICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfVxuICAgICAgLz5cblxuICAgICAge2NvbXBsZXRlZC5sZW5ndGggPiAwXG4gICAgICAgID8gcmVuZGVyTGlzdChjb21wbGV0ZWQsIGBDb21wbGV0ZWRgLCBjb21wbGV0ZWQubGVuZ3RoKVxuICAgICAgICA6IGZhbHNlfVxuXG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKHRhc2tzLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyTGlzdChcbiAgICAgICAgICAgIHRhc2tzLFxuICAgICAgICAgICAgYCR7aW5kZXh9ICR7aW5kZXggPT09IDEgPyBcImRheVwiIDogXCJkYXlzXCJ9IGxlZnRgLFxuICAgICAgICAgICAgdGFza3MubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyTGlzdCh0YXNrcywgYDAgZGF5cyBsZWZ0YCwgdGFza3MubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgfSl9XG5cbiAgICAgIHtzb21lZGF5Lmxlbmd0aCA+IDBcbiAgICAgICAgPyByZW5kZXJMaXN0KHNvbWVkYXksIGBTb21lZGF5YCwgc29tZWRheS5sZW5ndGgpXG4gICAgICAgIDogZmFsc2V9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInY0IiwidXVpZHY0IiwiVGFzayIsIlRvZ2dsZSIsInN0eWxlcyIsIlRvRG9MaXN0IiwidGFza0xpc3QiLCJzZXRUYXNrTGlzdCIsImNvbXBsZXRlZCIsInNldENvbXBsZXRlZCIsInNvbWVkYXkiLCJzZXRTb21lZGF5IiwibmFtZSIsInNldE5hbWUiLCJkZWFkbGluZSIsInNldERlYWRsaW5lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImN1cnJlbnREYXRlIiwic2V0Q3VycmVudERhdGUiLCJEYXRlIiwiY3VycmVudFRhc2siLCJzZXRDdXJyZW50VGFzayIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJuZXdEYXRlIiwiZ2V0RGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVDaGVja2JveENsaWNrIiwidGFzayIsImNoZWNrZWQiLCJ1cGRhdGVMaXN0cyIsInNsaWNlIiwibGlzdCIsInNldHRlciIsIm5ld0NvbXBsZXRlZCIsInB1c2giLCJmaWx0ZXIiLCJjdXJyIiwiaWQiLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwibmV3VGFzayIsImlzUnVubmluZyIsIm5ld1NvbWVkYXkiLCJ0b2RheSIsIm5ld1Rhc2tMaXN0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjYXRlZ29yaWVzIiwibWFwIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJmbG9vciIsImdldFRpbWUiLCJjZWlsIiwidW5kZWZpbmVkIiwicmVuZGVyTGlzdCIsImxhYmVsIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJvbkNoZWNrYm94Q2xpY2siLCJvblN0b3BDbGljayIsImhhbmRsZVN0b3AiLCJvblBsYXlDbGljayIsImhhbmRsZVBsYXkiLCJ0aW1lIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uS2V5UHJlc3MiLCJtaW4iLCJ0YXNrcyIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/ToDoList.tsx\n"));

/***/ })

});