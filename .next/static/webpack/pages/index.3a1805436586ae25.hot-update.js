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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./pages/components/Task.js\");\n/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ \"./pages/components/Toggle.js\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/ToDoList.module.css */ \"./styles/ToDoList.module.css\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ToDoList() {\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [someday, setSomeday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [name, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const newDate = new Date();\n            if (newDate.getDate() !== currentDate.getDate()) {\n                setCompleted([]);\n            }\n            setCurrentDate(newDate);\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    function handleCheckboxClick(task) {\n        task.checked = !task.checked;\n        if (task.taskDeadline === \"\") {\n            updateLists(task, someday.slice(), setSomeday, completed.slice());\n        } else {\n            updateLists(task, taskList.slice(), setTaskList, completed.slice());\n        }\n    }\n    function updateLists(task, list, setter, newCompleted) {\n        if (task.checked) {\n            newCompleted.push(task);\n            list = list.filter((curr)=>curr.id != task.id);\n        } else {\n            list.push(task);\n            newCompleted = newCompleted.filter((curr)=>curr.id != task.id);\n        }\n        setter(list);\n        setCompleted(newCompleted);\n    }\n    function handleKeyPress(event) {\n        if (event.key == \"Enter\") {\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n                taskName: name,\n                taskDeadline: deadline,\n                taskDuration: duration === \"\" || duration < 0 ? 0 : duration,\n                checked: false\n            };\n            if (deadline === \"\") {\n                let newSomeday = someday.slice();\n                newTask.today = newTask.taskDuration;\n                newSomeday.push(newTask);\n                setSomeday(newSomeday);\n            } else {\n                let newTaskList = taskList.slice();\n                newTaskList.push(newTask);\n                setTaskList(newTaskList);\n            }\n            setTaskName(\"\");\n            setDeadline(\"\");\n            setDuration(\"\");\n        }\n    }\n    function handleChange(event, setter) {\n        setter(event.target.value);\n    }\n    let categories = [];\n    taskList.map((task)=>{\n        const deadline = new Date(task.taskDeadline);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        task.today = Math.ceil(task.taskDuration / (difference < 1 ? 1 : difference));\n        difference = difference - Math.ceil(task.taskDuration / 30);\n        if (difference < 1) {\n            difference = 0;\n        }\n        if (categories[difference] === undefined) {\n            categories[difference] = [];\n        }\n        task.difference = difference;\n        categories[difference].push(task);\n    });\n    function renderList(list, label, visibility) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                label: label,\n                initialVisiblility: visibility,\n                children: list.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        task: task,\n                        onCheckboxClick: ()=>handleCheckboxClick(task),\n                        onStopClick: handleStop\n                    }, task.id, false, {\n                        fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                        lineNumber: 107,\n                        columnNumber: 31\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n            lineNumber: 105,\n            columnNumber: 7\n        }, this);\n    }\n    function handleStop(time, task) {\n        const deadline = new Date(task.taskDeadline);\n        task.taskDuration -= Math.floor(time / 60);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        task.today = Math.ceil(task.taskDuration / (difference < 1 ? 1 : difference));\n        difference = difference - Math.ceil(task.taskDuration / 30);\n        categories[task.difference] = categories[task.difference].filter((curr)=>{\n            curr.id != task.id;\n        });\n        task.difference = difference;\n        categories[difference].push(task);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter task\",\n                value: name,\n                onChange: (event)=>handleChange(event, setTaskName),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 130,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: deadline,\n                onChange: (event)=>handleChange(event, setDeadline),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Enter task duration\",\n                min: \"0\",\n                value: duration,\n                onChange: (event)=>handleChange(event, setDuration),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this),\n            completed.length > 0 ? renderList(completed, \"Completed (\".concat(completed.length, \")\"), true, setCompleted) : false,\n            categories.map((tasks, index)=>{\n                if (index) {\n                    return renderList(tasks, \"\".concat(index, \" \").concat(index === 1 ? \"day\" : \"days\", \" left (\").concat(tasks.length, \")\"), false);\n                } else {\n                    return renderList(tasks, \"0 days left (\".concat(tasks.length, \")\"), true);\n                }\n            }),\n            someday.length > 0 ? renderList(someday, \"Someday (\".concat(someday.length, \")\"), false) : false\n        ]\n    }, void 0, true);\n}\n_s(ToDoList, \"WJDsqDD3IQkO+E2zQXuS27CARZc=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWZBLFFBQVFrRSxRQUFPLE1BQUksU0FBUzs7O0FBSXhGO0dBM0l3QnZFO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvVG9Eb0xpc3QuanM/YzY3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCBUb2dnbGUgZnJvbSBcIi4vVG9nZ2xlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1RvRG9MaXN0Lm1vZHVsZS5jc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb0RvTGlzdCgpIHtcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzb21lZGF5LCBzZXRTb21lZGF5XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW25hbWUsIHNldFRhc2tOYW1lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2RlYWRsaW5lLCBzZXREZWFkbGluZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbY3VycmVudERhdGUsIHNldEN1cnJlbnREYXRlXSA9IHVzZVN0YXRlKG5ldyBEYXRlKCkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGlmIChuZXdEYXRlLmdldERhdGUoKSAhPT0gY3VycmVudERhdGUuZ2V0RGF0ZSgpKSB7XG4gICAgICAgIHNldENvbXBsZXRlZChbXSk7XG4gICAgICB9XG4gICAgICBzZXRDdXJyZW50RGF0ZShuZXdEYXRlKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3hDbGljayh0YXNrKSB7XG4gICAgdGFzay5jaGVja2VkID0gIXRhc2suY2hlY2tlZDtcblxuICAgIGlmICh0YXNrLnRhc2tEZWFkbGluZSA9PT0gJycpIHtcbiAgICAgIHVwZGF0ZUxpc3RzKHRhc2ssIHNvbWVkYXkuc2xpY2UoKSwgc2V0U29tZWRheSwgY29tcGxldGVkLnNsaWNlKCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVMaXN0cyh0YXNrLCB0YXNrTGlzdC5zbGljZSgpLCBzZXRUYXNrTGlzdCwgY29tcGxldGVkLnNsaWNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxpc3RzKHRhc2ssIGxpc3QsIHNldHRlciwgbmV3Q29tcGxldGVkKSB7XG4gICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgbmV3Q29tcGxldGVkLnB1c2godGFzayk7XG4gICAgICBsaXN0ID0gbGlzdC5maWx0ZXIoKGN1cnIpID0+IGN1cnIuaWQgIT0gdGFzay5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpc3QucHVzaCh0YXNrKTtcbiAgICAgIG5ld0NvbXBsZXRlZCA9IG5ld0NvbXBsZXRlZC5maWx0ZXIoKGN1cnIpID0+IGN1cnIuaWQgIT0gdGFzay5pZCk7XG4gICAgfVxuXG4gICAgc2V0dGVyKGxpc3QpO1xuICAgIHNldENvbXBsZXRlZChuZXdDb21wbGV0ZWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5UHJlc3MoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIikge1xuICAgICAgY29uc3QgbmV3VGFzayA9IHtcbiAgICAgICAgaWQ6IHV1aWR2NCgpLFxuICAgICAgICB0YXNrTmFtZTogbmFtZSxcbiAgICAgICAgdGFza0RlYWRsaW5lOiBkZWFkbGluZSxcbiAgICAgICAgdGFza0R1cmF0aW9uOiBkdXJhdGlvbiA9PT0gJycgfHwgZHVyYXRpb24gPCAwID8gMCA6IGR1cmF0aW9uLFxuICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoZGVhZGxpbmUgPT09ICcnKSB7XG4gICAgICAgIGxldCBuZXdTb21lZGF5ID0gc29tZWRheS5zbGljZSgpO1xuICAgICAgICBuZXdUYXNrLnRvZGF5ID0gbmV3VGFzay50YXNrRHVyYXRpb247XG4gICAgICAgIG5ld1NvbWVkYXkucHVzaChuZXdUYXNrKTtcbiAgICAgICAgc2V0U29tZWRheShuZXdTb21lZGF5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5ld1Rhc2tMaXN0ID0gdGFza0xpc3Quc2xpY2UoKTtcbiAgICAgICAgbmV3VGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICAgICAgc2V0VGFza0xpc3QobmV3VGFza0xpc3QpO1xuICAgICAgfVxuICAgICAgc2V0VGFza05hbWUoJycpO1xuICAgICAgc2V0RGVhZGxpbmUoJycpO1xuICAgICAgc2V0RHVyYXRpb24oJycpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCwgc2V0dGVyKSB7XG4gICAgc2V0dGVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBsZXQgY2F0ZWdvcmllcyA9IFtdO1xuICB0YXNrTGlzdC5tYXAoKHRhc2spID0+IHtcbiAgICBjb25zdCBkZWFkbGluZSA9IG5ldyBEYXRlKHRhc2sudGFza0RlYWRsaW5lKTtcbiAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguZmxvb3IoKGRlYWRsaW5lLmdldFRpbWUoKSAtIGN1cnJlbnREYXRlLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIHRhc2sudG9kYXkgPSBNYXRoLmNlaWwodGFzay50YXNrRHVyYXRpb24vKGRpZmZlcmVuY2UgPCAxID8gMSA6IGRpZmZlcmVuY2UpKTtcbiAgICBkaWZmZXJlbmNlID0gZGlmZmVyZW5jZSAtIE1hdGguY2VpbCh0YXNrLnRhc2tEdXJhdGlvbiAvIDMwKTtcbiAgICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2F0ZWdvcmllc1tkaWZmZXJlbmNlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID0gW107XG4gICAgfVxuXG4gICAgdGFzay5kaWZmZXJlbmNlID0gZGlmZmVyZW5jZTtcbiAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdLnB1c2godGFzayk7XG4gIH0pXG5cbiAgZnVuY3Rpb24gcmVuZGVyTGlzdChsaXN0LCBsYWJlbCwgdmlzaWJpbGl0eSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxUb2dnbGUgbGFiZWw9e2xhYmVsfSBpbml0aWFsVmlzaWJsaWxpdHk9e3Zpc2liaWxpdHl9PlxuICAgICAgICAgIHtsaXN0Lm1hcCgodGFzaykgPT4gPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkNoZWNrYm94Q2xpY2s9eygpID0+IGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzayl9IG9uU3RvcENsaWNrPXtoYW5kbGVTdG9wfSAvPil9XG4gICAgICAgIDwvVG9nZ2xlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3RvcCh0aW1lLCB0YXNrKSB7XG4gICAgY29uc3QgZGVhZGxpbmUgPSBuZXcgRGF0ZSh0YXNrLnRhc2tEZWFkbGluZSk7XG5cbiAgICB0YXNrLnRhc2tEdXJhdGlvbiAtPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG5cbiAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguZmxvb3IoKGRlYWRsaW5lLmdldFRpbWUoKSAtIGN1cnJlbnREYXRlLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuXG4gICAgdGFzay50b2RheSA9IE1hdGguY2VpbCh0YXNrLnRhc2tEdXJhdGlvbi8oZGlmZmVyZW5jZSA8IDEgPyAxIDogZGlmZmVyZW5jZSkpO1xuICAgIGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlIC0gTWF0aC5jZWlsKHRhc2sudGFza0R1cmF0aW9uIC8gMzApO1xuXG4gICAgY2F0ZWdvcmllc1t0YXNrLmRpZmZlcmVuY2VdID0gY2F0ZWdvcmllc1t0YXNrLmRpZmZlcmVuY2VdLmZpbHRlcigoY3VycikgPT4ge2N1cnIuaWQgIT0gdGFzay5pZH0pXG4gICAgdGFzay5kaWZmZXJlbmNlID0gZGlmZmVyZW5jZTtcbiAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdLnB1c2godGFzayk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2tcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXRUYXNrTmFtZSl9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2RlYWRsaW5lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldERlYWRsaW5lKX0gb25LZXlQcmVzcz17KGV2ZW50KSA9PiBoYW5kbGVLZXlQcmVzcyhldmVudCl9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGFzayBkdXJhdGlvblwiIG1pbj1cIjBcIiB2YWx1ZT17ZHVyYXRpb259IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0RHVyYXRpb24pfSBvbktleVByZXNzPXsoZXZlbnQpID0+IGhhbmRsZUtleVByZXNzKGV2ZW50KX0gLz5cblxuICAgICAge2NvbXBsZXRlZC5sZW5ndGggPiAwID8gcmVuZGVyTGlzdChjb21wbGV0ZWQsIGBDb21wbGV0ZWQgKCR7Y29tcGxldGVkLmxlbmd0aH0pYCwgdHJ1ZSwgc2V0Q29tcGxldGVkKSA6IGZhbHNlfVxuICAgICAgXG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKHRhc2tzLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyTGlzdCh0YXNrcywgYCR7aW5kZXh9ICR7aW5kZXggPT09IDEgPyBcImRheVwiIDogXCJkYXlzXCJ9IGxlZnQgKCR7dGFza3MubGVuZ3RofSlgLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlbmRlckxpc3QodGFza3MsIGAwIGRheXMgbGVmdCAoJHt0YXNrcy5sZW5ndGh9KWAsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KX1cblxuICAgICAge3NvbWVkYXkubGVuZ3RoID4gMCA/IHJlbmRlckxpc3Qoc29tZWRheSwgYFNvbWVkYXkgKCR7c29tZWRheS5sZW5ndGh9KWAsIGZhbHNlKSA6IGZhbHNlfVxuXG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ2NCIsInV1aWR2NCIsIlRhc2siLCJUb2dnbGUiLCJzdHlsZXMiLCJUb0RvTGlzdCIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJjb21wbGV0ZWQiLCJzZXRDb21wbGV0ZWQiLCJzb21lZGF5Iiwic2V0U29tZWRheSIsIm5hbWUiLCJzZXRUYXNrTmFtZSIsImRlYWRsaW5lIiwic2V0RGVhZGxpbmUiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwiY3VycmVudERhdGUiLCJzZXRDdXJyZW50RGF0ZSIsIkRhdGUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibmV3RGF0ZSIsImdldERhdGUiLCJjbGVhckludGVydmFsIiwiaGFuZGxlQ2hlY2tib3hDbGljayIsInRhc2siLCJjaGVja2VkIiwidGFza0RlYWRsaW5lIiwidXBkYXRlTGlzdHMiLCJzbGljZSIsImxpc3QiLCJzZXR0ZXIiLCJuZXdDb21wbGV0ZWQiLCJwdXNoIiwiZmlsdGVyIiwiY3VyciIsImlkIiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsImtleSIsIm5ld1Rhc2siLCJ0YXNrTmFtZSIsInRhc2tEdXJhdGlvbiIsIm5ld1NvbWVkYXkiLCJ0b2RheSIsIm5ld1Rhc2tMaXN0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjYXRlZ29yaWVzIiwibWFwIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJmbG9vciIsImdldFRpbWUiLCJjZWlsIiwidW5kZWZpbmVkIiwicmVuZGVyTGlzdCIsImxhYmVsIiwidmlzaWJpbGl0eSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImluaXRpYWxWaXNpYmxpbGl0eSIsIm9uQ2hlY2tib3hDbGljayIsIm9uU3RvcENsaWNrIiwiaGFuZGxlU3RvcCIsInRpbWUiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwib25LZXlQcmVzcyIsIm1pbiIsImxlbmd0aCIsInRhc2tzIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/ToDoList.js\n"));

/***/ })

});