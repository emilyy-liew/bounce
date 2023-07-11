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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./pages/components/Task.tsx\");\n/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ \"./pages/components/Toggle.tsx\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/ToDoList.module.css */ \"./styles/ToDoList.module.css\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ToDoList() {\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [someday, setSomeday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const [currentTask, setCurrentTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const newDate = new Date();\n            if (newDate.getDate() !== currentDate.getDate()) {\n                setCompleted([]);\n            }\n            setCurrentDate(newDate);\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    function handleCheckboxClick(event, task) {\n        console.log(event);\n    // if (task.deadline === \"\") {\n    //   updateLists(task, someday.slice(), setSomeday, completed.slice());\n    // } else {\n    //   updateLists(task, taskList.slice(), setTaskList, completed.slice());\n    // }\n    }\n    function updateLists(task, list, setter, newCompleted) {\n        if (true) {\n            newCompleted.push(task);\n            list = list.filter((curr)=>curr.id != task.id);\n        } else {}\n        setter(list);\n        setCompleted(newCompleted);\n    }\n    function handleKeyPress(event) {\n        if (event.key == \"Enter\") {\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n                name: name,\n                deadline: deadline,\n                duration: duration === null || duration < 0 ? 0 : duration,\n                isRunning: false\n            };\n            if (deadline === \"\") {\n                let newSomeday = someday.slice();\n                newTask.today = newTask.duration;\n                newSomeday.push(newTask);\n                setSomeday(newSomeday);\n            } else {\n                let newTaskList = taskList.slice();\n                newTaskList.push(newTask);\n                setTaskList(newTaskList);\n            }\n            setName(\"\");\n            setDeadline(\"\");\n            setDuration(null);\n        }\n    }\n    function handleChange(event, setter) {\n        setter(event.target.value);\n    }\n    let categories = [];\n    taskList.map((task)=>{\n        const deadline = new Date(task.deadline);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        task.today = Math.ceil(task.duration / (difference < 1 ? 1 : difference));\n        difference = difference - Math.ceil(task.duration / 30);\n        if (difference < 1) {\n            difference = 0;\n        }\n        if (categories[difference] === undefined) {\n            categories[difference] = [];\n        }\n        task.difference = difference;\n        categories[difference].push(task);\n    });\n    function renderList(list, label, length) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                label: label,\n                length: length,\n                children: list.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        task: task,\n                        onCheckboxChange: (event)=>handleCheckboxClick(event, task),\n                        onStopClick: handleStop,\n                        onPlayClick: ()=>handlePlay(task)\n                    }, task.id, false, void 0, void 0))\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n                lineNumber: 118,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n            lineNumber: 117,\n            columnNumber: 7\n        }, this);\n    }\n    function handlePlay(task) {\n        if (currentTask && currentTask !== task) {\n            currentTask.isRunning = false;\n        }\n        task.isRunning = true;\n        setCurrentTask(task);\n    }\n    console.log(taskList);\n    function handleStop(time, task) {\n        if (taskList.includes(task)) {\n            const deadline = new Date(task.deadline);\n            task.duration -= Math.floor(time / 60);\n            if (task.duration < 0) {\n                task.duration = 0;\n            }\n            let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n            task.today = Math.ceil(task.duration / (difference < 1 ? 1 : difference));\n            difference = difference - Math.ceil(task.duration / 30);\n            console.log(difference);\n            categories[task.difference] = categories[task.difference].filter((curr)=>{\n                curr.id !== task.id;\n            });\n            task.difference = difference;\n            if (categories[difference] === undefined) {\n                categories[difference] = [];\n            }\n            categories[difference].push(task);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter task\",\n                value: name,\n                onChange: (event)=>handleChange(event, setName),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n                lineNumber: 180,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: deadline,\n                onChange: (event)=>handleChange(event, setDeadline),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n                lineNumber: 187,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Enter task duration\",\n                min: \"0\",\n                value: duration,\n                onChange: (event)=>handleChange(event, setDuration),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/coding/bounce/pages/components/ToDoList.tsx\",\n                lineNumber: 193,\n                columnNumber: 7\n            }, this),\n            completed.length > 0 ? renderList(completed, \"Completed\", completed.length) : false,\n            categories.map((tasks, index)=>{\n                if (index) {\n                    return renderList(tasks, \"\".concat(index, \" \").concat(index === 1 ? \"day\" : \"days\", \" left\"), tasks.length);\n                } else {\n                    return renderList(tasks, \"0 days left\", tasks.length);\n                }\n            }),\n            someday.length > 0 ? renderList(someday, \"Someday\", someday.length) : false\n        ]\n    }, void 0, true);\n}\n_s(ToDoList, \"Yz4MnAS8OzDBEhi7Hy3iP8cuDVI=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzJCLE9BQU9DO2dCQUN0QixJQUFJQSxPQUFPO29CQUNULE9BQU9yQixXQUNMb0IsT0FDQSxHQUFZQyxPQUFUQSxPQUFNLEtBQWdDLE9BQTdCQSxVQUFVLElBQUksUUFBUSxRQUFPLFVBQ3pDRCxNQUFNbEI7Z0JBRVYsT0FBTztvQkFDTCxPQUFPRixXQUFXb0IsT0FBUSxlQUFjQSxNQUFNbEI7Z0JBQ2hEO1lBQ0Y7WUFFQ3BELFFBQVFvRCxTQUFTLElBQ2RGLFdBQVdsRCxTQUFVLFdBQVVBLFFBQVFvRCxVQUN2Qzs7O0FBR1Y7R0FwTndCekQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Ub0RvTGlzdC50c3g/Y2RhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IHsgVGFza0l0ZW0gfSBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuL1RvZ2dsZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvVG9Eb0xpc3QubW9kdWxlLmNzc1wiO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvRG9MaXN0KCkge1xuICBjb25zdCBbdGFza0xpc3QsIHNldFRhc2tMaXN0XSA9IHVzZVN0YXRlPFRhc2tJdGVtW10+KFtdKTtcbiAgY29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IHVzZVN0YXRlPFRhc2tJdGVtW10+KFtdKTtcbiAgY29uc3QgW3NvbWVkYXksIHNldFNvbWVkYXldID0gdXNlU3RhdGU8VGFza0l0ZW1bXT4oW10pO1xuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbZGVhZGxpbmUsIHNldERlYWRsaW5lXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtjdXJyZW50RGF0ZSwgc2V0Q3VycmVudERhdGVdID0gdXNlU3RhdGU8RGF0ZT4obmV3IERhdGUoKSk7XG4gIGNvbnN0IFtjdXJyZW50VGFzaywgc2V0Q3VycmVudFRhc2tdID0gdXNlU3RhdGU8VGFza0l0ZW0+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGlmIChuZXdEYXRlLmdldERhdGUoKSAhPT0gY3VycmVudERhdGUuZ2V0RGF0ZSgpKSB7XG4gICAgICAgIHNldENvbXBsZXRlZChbXSk7XG4gICAgICB9XG4gICAgICBzZXRDdXJyZW50RGF0ZShuZXdEYXRlKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3hDbGljayggZXZlbnQsIHRhc2s6IFRhc2tJdGVtICkge1xuICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAvLyBpZiAodGFzay5kZWFkbGluZSA9PT0gXCJcIikge1xuICAgIC8vICAgdXBkYXRlTGlzdHModGFzaywgc29tZWRheS5zbGljZSgpLCBzZXRTb21lZGF5LCBjb21wbGV0ZWQuc2xpY2UoKSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHVwZGF0ZUxpc3RzKHRhc2ssIHRhc2tMaXN0LnNsaWNlKCksIHNldFRhc2tMaXN0LCBjb21wbGV0ZWQuc2xpY2UoKSk7XG4gICAgLy8gfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTGlzdHModGFzazogVGFza0l0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgbGlzdDogVGFza0l0ZW1bXSxcbiAgICAgICAgICAgICAgICAgICAgICBzZXR0ZXI6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPFRhc2tJdGVtW10+PixcbiAgICAgICAgICAgICAgICAgICAgICBuZXdDb21wbGV0ZWQ6IFRhc2tJdGVtW10pIHtcbiAgICBpZiAodHJ1ZSkge1xuICAgICAgbmV3Q29tcGxldGVkLnB1c2godGFzayk7XG4gICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoKGN1cnIpID0+IGN1cnIuaWQgIT0gdGFzay5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3QucHVzaCh0YXNrKTtcbiAgICAgIG5ld0NvbXBsZXRlZCA9IG5ld0NvbXBsZXRlZC5maWx0ZXIoKGN1cnIpID0+IGN1cnIuaWQgIT09IHRhc2suaWQpO1xuICAgIH1cblxuICAgIHNldHRlcihsaXN0KTtcbiAgICBzZXRDb21wbGV0ZWQobmV3Q29tcGxldGVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50OiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgOiBUYXNrSXRlbSA9IHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBkZWFkbGluZTogZGVhZGxpbmUsXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbiA9PT0gbnVsbCB8fCBkdXJhdGlvbiA8IDAgPyAwIDogZHVyYXRpb24sXG4gICAgICAgIGlzUnVubmluZzogZmFsc2VcbiAgICAgIH07XG5cbiAgICAgIGlmIChkZWFkbGluZSA9PT0gXCJcIikge1xuICAgICAgICBsZXQgbmV3U29tZWRheSA9IHNvbWVkYXkuc2xpY2UoKTtcbiAgICAgICAgbmV3VGFzay50b2RheSA9IG5ld1Rhc2suZHVyYXRpb247XG4gICAgICAgIG5ld1NvbWVkYXkucHVzaChuZXdUYXNrKTtcbiAgICAgICAgc2V0U29tZWRheShuZXdTb21lZGF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdUYXNrTGlzdCA9IHRhc2tMaXN0LnNsaWNlKCk7XG4gICAgICAgIG5ld1Rhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tMaXN0KTtcbiAgICAgIH1cbiAgICAgIHNldE5hbWUoXCJcIik7XG4gICAgICBzZXREZWFkbGluZShcIlwiKTtcbiAgICAgIHNldER1cmF0aW9uKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0ZXI6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPGFueT4+KSB7XG4gICAgc2V0dGVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBsZXQgY2F0ZWdvcmllcyA6IFRhc2tJdGVtW11bXSA9IFtdO1xuICB0YXNrTGlzdC5tYXAoKHRhc2spID0+IHtcbiAgICBjb25zdCBkZWFkbGluZSA9IG5ldyBEYXRlKHRhc2suZGVhZGxpbmUpO1xuICAgIGxldCBkaWZmZXJlbmNlID0gTWF0aC5mbG9vcihcbiAgICAgIChkZWFkbGluZS5nZXRUaW1lKCkgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpXG4gICAgKTtcbiAgICB0YXNrLnRvZGF5ID0gTWF0aC5jZWlsKFxuICAgICAgdGFzay5kdXJhdGlvbiAvIChkaWZmZXJlbmNlIDwgMSA/IDEgOiBkaWZmZXJlbmNlKVxuICAgICk7XG4gICAgZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2UgLSBNYXRoLmNlaWwodGFzay5kdXJhdGlvbiAvIDMwKTtcbiAgICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgIH1cblxuICAgIGlmIChjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhdGVnb3JpZXNbZGlmZmVyZW5jZV0gPSBbXTtcbiAgICB9XG5cbiAgICB0YXNrLmRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlO1xuICAgIGNhdGVnb3JpZXNbZGlmZmVyZW5jZV0ucHVzaCh0YXNrKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyTGlzdChsaXN0OiBUYXNrSXRlbVtdLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBudW1iZXIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8VG9nZ2xlIGxhYmVsPXtsYWJlbH0gbGVuZ3RoPXtsZW5ndGh9XG4gICAgICAgICAgY2hpbGRyZW49e2xpc3QubWFwKCh0YXNrKSA9PiAoXG4gICAgICAgICAgICA8VGFza1xuICAgICAgICAgICAgICBrZXk9e3Rhc2suaWR9XG4gICAgICAgICAgICAgIHRhc2s9e3Rhc2t9XG4gICAgICAgICAgICAgIG9uQ2hlY2tib3hDaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hlY2tib3hDbGljayhldmVudCwgdGFzayl9XG4gICAgICAgICAgICAgIG9uU3RvcENsaWNrPXtoYW5kbGVTdG9wfVxuICAgICAgICAgICAgICBvblBsYXlDbGljaz17KCkgPT4gaGFuZGxlUGxheSh0YXNrKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlUGxheSh0YXNrOiBUYXNrSXRlbSkge1xuICAgIGlmIChjdXJyZW50VGFzayAmJiBjdXJyZW50VGFzayAhPT0gdGFzaykge1xuICAgICAgY3VycmVudFRhc2suaXNSdW5uaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGFzay5pc1J1bm5pbmcgPSB0cnVlO1xuICAgIHNldEN1cnJlbnRUYXNrKHRhc2spO1xuICB9XG5cbiAgY29uc29sZS5sb2codGFza0xpc3QpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZVN0b3AodGltZTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgIHRhc2s6IFRhc2tJdGVtKSB7XG4gICAgaWYgKHRhc2tMaXN0LmluY2x1ZGVzKHRhc2spKSB7XG4gICAgICBjb25zdCBkZWFkbGluZSA9IG5ldyBEYXRlKHRhc2suZGVhZGxpbmUpO1xuXG4gICAgICB0YXNrLmR1cmF0aW9uIC09IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgICAgIGlmICh0YXNrLmR1cmF0aW9uIDwgMCkge1xuICAgICAgICB0YXNrLmR1cmF0aW9uID0gMDtcbiAgICAgIH1cblxuICAgICAgbGV0IGRpZmZlcmVuY2UgPSBNYXRoLmZsb29yKFxuICAgICAgICAoZGVhZGxpbmUuZ2V0VGltZSgpIC0gY3VycmVudERhdGUuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KVxuICAgICAgKTtcblxuICAgICAgdGFzay50b2RheSA9IE1hdGguY2VpbChcbiAgICAgICAgdGFzay5kdXJhdGlvbiAvIChkaWZmZXJlbmNlIDwgMSA/IDEgOiBkaWZmZXJlbmNlKVxuICAgICAgKTtcbiAgICAgIGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlIC0gTWF0aC5jZWlsKHRhc2suZHVyYXRpb24gLyAzMCk7XG4gICAgICBjb25zb2xlLmxvZyhkaWZmZXJlbmNlKTtcbiAgICAgIGNhdGVnb3JpZXNbdGFzay5kaWZmZXJlbmNlXSA9IGNhdGVnb3JpZXNbdGFzay5kaWZmZXJlbmNlXS5maWx0ZXIoXG4gICAgICAgIChjdXJyKSA9PiB7XG4gICAgICAgICAgY3Vyci5pZCAhPT0gdGFzay5pZDtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHRhc2suZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG5cbiAgICAgIGlmIChjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY2F0ZWdvcmllc1tkaWZmZXJlbmNlXSA9IFtdO1xuICAgICAgfVxuXG4gICAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdLnB1c2godGFzayk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrXCJcbiAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0TmFtZSl9XG4gICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfVxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgIHZhbHVlPXtkZWFkbGluZX1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXREZWFkbGluZSl9XG4gICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfVxuICAgICAgLz5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrIGR1cmF0aW9uXCJcbiAgICAgICAgbWluPVwiMFwiXG4gICAgICAgIHZhbHVlPXtkdXJhdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXREdXJhdGlvbil9XG4gICAgICAgIG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfVxuICAgICAgLz5cblxuICAgICAge2NvbXBsZXRlZC5sZW5ndGggPiAwXG4gICAgICAgID8gcmVuZGVyTGlzdChjb21wbGV0ZWQsIGBDb21wbGV0ZWRgLCBjb21wbGV0ZWQubGVuZ3RoKVxuICAgICAgICA6IGZhbHNlfVxuXG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKHRhc2tzLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyTGlzdChcbiAgICAgICAgICAgIHRhc2tzLFxuICAgICAgICAgICAgYCR7aW5kZXh9ICR7aW5kZXggPT09IDEgPyBcImRheVwiIDogXCJkYXlzXCJ9IGxlZnRgLFxuICAgICAgICAgICAgdGFza3MubGVuZ3RoXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyTGlzdCh0YXNrcywgYDAgZGF5cyBsZWZ0YCwgdGFza3MubGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgfSl9XG5cbiAgICAgIHtzb21lZGF5Lmxlbmd0aCA+IDBcbiAgICAgICAgPyByZW5kZXJMaXN0KHNvbWVkYXksIGBTb21lZGF5YCwgc29tZWRheS5sZW5ndGgpXG4gICAgICAgIDogZmFsc2V9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInY0IiwidXVpZHY0IiwiVGFzayIsIlRvZ2dsZSIsInN0eWxlcyIsIlRvRG9MaXN0IiwidGFza0xpc3QiLCJzZXRUYXNrTGlzdCIsImNvbXBsZXRlZCIsInNldENvbXBsZXRlZCIsInNvbWVkYXkiLCJzZXRTb21lZGF5IiwibmFtZSIsInNldE5hbWUiLCJkZWFkbGluZSIsInNldERlYWRsaW5lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImN1cnJlbnREYXRlIiwic2V0Q3VycmVudERhdGUiLCJEYXRlIiwiY3VycmVudFRhc2siLCJzZXRDdXJyZW50VGFzayIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJuZXdEYXRlIiwiZ2V0RGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVDaGVja2JveENsaWNrIiwiZXZlbnQiLCJ0YXNrIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUxpc3RzIiwibGlzdCIsInNldHRlciIsIm5ld0NvbXBsZXRlZCIsInB1c2giLCJmaWx0ZXIiLCJjdXJyIiwiaWQiLCJoYW5kbGVLZXlQcmVzcyIsImtleSIsIm5ld1Rhc2siLCJpc1J1bm5pbmciLCJuZXdTb21lZGF5Iiwic2xpY2UiLCJ0b2RheSIsIm5ld1Rhc2tMaXN0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjYXRlZ29yaWVzIiwibWFwIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJmbG9vciIsImdldFRpbWUiLCJjZWlsIiwidW5kZWZpbmVkIiwicmVuZGVyTGlzdCIsImxhYmVsIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJvbkNoZWNrYm94Q2hhbmdlIiwib25TdG9wQ2xpY2siLCJoYW5kbGVTdG9wIiwib25QbGF5Q2xpY2siLCJoYW5kbGVQbGF5IiwidGltZSIsImluY2x1ZGVzIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uS2V5UHJlc3MiLCJtaW4iLCJ0YXNrcyIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/ToDoList.tsx\n"));

/***/ })

});