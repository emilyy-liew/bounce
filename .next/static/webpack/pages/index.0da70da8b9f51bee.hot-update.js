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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./pages/components/Task.js\");\n/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ \"./pages/components/Toggle.js\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/ToDoList.module.css */ \"./styles/ToDoList.module.css\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ToDoList() {\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [someday, setSomeday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [name, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const newDate = new Date();\n            if (newDate.getDate() !== currentDate.getDate()) {\n                setCompleted([]);\n            }\n            setCurrentDate(newDate);\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    function handleCheckboxClick(task) {\n        task.checked = !task.checked;\n        if (task.taskDeadline === \"\") {\n            updateLists(task, someday.slice(), setSomeday, completed.slice());\n        } else {\n            updateLists(task, taskList.slice(), setTaskList, completed.slice());\n        }\n    }\n    function updateLists(task, list, setter, newCompleted) {\n        if (task.checked) {\n            newCompleted.push(task);\n            list = list.filter((curr)=>curr.id != task.id);\n        } else {\n            list.push(task);\n            newCompleted = newCompleted.filter((curr)=>curr.id != task.id);\n        }\n        setter(list);\n        setCompleted(newCompleted);\n    }\n    function handleKeyPress(event) {\n        if (event.key == \"Enter\") {\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n                taskName: name,\n                taskDeadline: deadline,\n                taskDuration: duration === \"\" || duration < 0 ? 0 : duration,\n                checked: false\n            };\n            if (deadline === \"\") {\n                let newSomeday = someday.slice();\n                newTask.today = newTask.taskDuration;\n                newSomeday.push(newTask);\n                setSomeday(newSomeday);\n            } else {\n                let newTaskList = taskList.slice();\n                newTaskList.push(newTask);\n                setTaskList(newTaskList);\n            }\n            setTaskName(\"\");\n            setDeadline(\"\");\n            setDuration(\"\");\n        }\n    }\n    function handleChange(event, setter) {\n        setter(event.target.value);\n    }\n    let categories = [];\n    taskList.map((task)=>{\n        const deadline = new Date(task.taskDeadline);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        task.today = Math.ceil(task.taskDuration / (difference < 1 ? 1 : difference));\n        difference = difference - Math.ceil(task.taskDuration / 30);\n        if (difference < 1) {\n            difference = 0;\n        }\n        if (categories[difference] === undefined) {\n            categories[difference] = [];\n        }\n        task.difference = difference;\n        categories[difference].push(task);\n    });\n    function renderList(list, label, visibility) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                label: label,\n                initialVisiblility: visibility,\n                children: list.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        task: task,\n                        onCheckboxClick: ()=>handleCheckboxClick(task),\n                        onStopClick: handleStop\n                    }, task.id, false, {\n                        fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                        lineNumber: 107,\n                        columnNumber: 31\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 106,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n            lineNumber: 105,\n            columnNumber: 7\n        }, this);\n    }\n    function handleStop(time, task) {\n        const deadline = new Date(task.taskDeadline);\n        console.log(task.taskDuration);\n        task.taskDuration -= Math.floor(time / 60);\n        console.log(task.taskDuration);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        console.log(difference);\n        task.today = Math.ceil(task.taskDuration / (difference < 1 ? 1 : difference));\n        difference = difference - Math.ceil(task.taskDuration / 30);\n        console.log(task.today);\n        console.log(difference);\n        categories[task.difference] = categories[task.difference].filter((curr)=>{\n            curr.id != task.id;\n        });\n        task.difference = difference;\n        categories[difference].push(task);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter task\",\n                value: name,\n                onChange: (event)=>handleChange(event, setTaskName),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 136,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: deadline,\n                onChange: (event)=>handleChange(event, setDeadline),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 137,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Enter task duration\",\n                min: \"0\",\n                value: duration,\n                onChange: (event)=>handleChange(event, setDuration),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 138,\n                columnNumber: 7\n            }, this),\n            completed.length > 0 ? renderList(completed, \"Completed (\".concat(completed.length, \")\"), true, setCompleted) : false,\n            categories.map((tasks, index)=>{\n                if (index) {\n                    return renderList(tasks, \"\".concat(index, \" \").concat(index === 1 ? \"day\" : \"days\", \" left (\").concat(tasks.length, \")\"), false);\n                } else {\n                    return renderList(tasks, \"0 days left (\".concat(tasks.length, \")\"), true);\n                }\n            }),\n            someday.length > 0 ? renderList(someday, \"Someday (\".concat(someday.length, \")\"), false) : false\n        ]\n    }, void 0, true);\n}\n_s(ToDoList, \"WJDsqDD3IQkO+E2zQXuS27CARZc=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5RixPQUFPO29CQUNMLE9BQU9uQixXQUFXb0IsT0FBTyxnQkFBNkIsT0FBYkEsTUFBTUQsUUFBTyxNQUFJO2dCQUM1RDtZQUNGO1lBRUNwRSxRQUFRb0UsU0FBUyxJQUFJbkIsV0FBV2pELFNBQVMsWUFBMkIsT0FBZkEsUUFBUW9FLFFBQU8sTUFBSSxTQUFTOzs7QUFJeEY7R0FqSndCekU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Ub0RvTGlzdC5qcz9jNjdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcblxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IFRvZ2dsZSBmcm9tIFwiLi9Ub2dnbGVcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvVG9Eb0xpc3QubW9kdWxlLmNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvRG9MaXN0KCkge1xuICBjb25zdCBbdGFza0xpc3QsIHNldFRhc2tMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2NvbXBsZXRlZCwgc2V0Q29tcGxldGVkXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NvbWVkYXksIHNldFNvbWVkYXldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbmFtZSwgc2V0VGFza05hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZGVhZGxpbmUsIHNldERlYWRsaW5lXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtjdXJyZW50RGF0ZSwgc2V0Q3VycmVudERhdGVdID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgaWYgKG5ld0RhdGUuZ2V0RGF0ZSgpICE9PSBjdXJyZW50RGF0ZS5nZXREYXRlKCkpIHtcbiAgICAgICAgc2V0Q29tcGxldGVkKFtdKTtcbiAgICAgIH1cbiAgICAgIHNldEN1cnJlbnREYXRlKG5ld0RhdGUpO1xuICAgIH0sIDEwMDApO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiBoYW5kbGVDaGVja2JveENsaWNrKHRhc2spIHtcbiAgICB0YXNrLmNoZWNrZWQgPSAhdGFzay5jaGVja2VkO1xuXG4gICAgaWYgKHRhc2sudGFza0RlYWRsaW5lID09PSAnJykge1xuICAgICAgdXBkYXRlTGlzdHModGFzaywgc29tZWRheS5zbGljZSgpLCBzZXRTb21lZGF5LCBjb21wbGV0ZWQuc2xpY2UoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZUxpc3RzKHRhc2ssIHRhc2tMaXN0LnNsaWNlKCksIHNldFRhc2tMaXN0LCBjb21wbGV0ZWQuc2xpY2UoKSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTGlzdHModGFzaywgbGlzdCwgc2V0dGVyLCBuZXdDb21wbGV0ZWQpIHtcbiAgICBpZiAodGFzay5jaGVja2VkKSB7XG4gICAgICBuZXdDb21wbGV0ZWQucHVzaCh0YXNrKTtcbiAgICAgIGxpc3QgPSBsaXN0LmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPSB0YXNrLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdC5wdXNoKHRhc2spO1xuICAgICAgbmV3Q29tcGxldGVkID0gbmV3Q29tcGxldGVkLmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPSB0YXNrLmlkKTtcbiAgICB9XG5cbiAgICBzZXR0ZXIobGlzdCk7XG4gICAgc2V0Q29tcGxldGVkKG5ld0NvbXBsZXRlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIHRhc2tOYW1lOiBuYW1lLFxuICAgICAgICB0YXNrRGVhZGxpbmU6IGRlYWRsaW5lLFxuICAgICAgICB0YXNrRHVyYXRpb246IGR1cmF0aW9uID09PSAnJyB8fCBkdXJhdGlvbiA8IDAgPyAwIDogZHVyYXRpb24sXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChkZWFkbGluZSA9PT0gJycpIHtcbiAgICAgICAgbGV0IG5ld1NvbWVkYXkgPSBzb21lZGF5LnNsaWNlKCk7XG4gICAgICAgIG5ld1Rhc2sudG9kYXkgPSBuZXdUYXNrLnRhc2tEdXJhdGlvbjtcbiAgICAgICAgbmV3U29tZWRheS5wdXNoKG5ld1Rhc2spO1xuICAgICAgICBzZXRTb21lZGF5KG5ld1NvbWVkYXkpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbmV3VGFza0xpc3QgPSB0YXNrTGlzdC5zbGljZSgpO1xuICAgICAgICBuZXdUYXNrTGlzdC5wdXNoKG5ld1Rhc2spO1xuICAgICAgICBzZXRUYXNrTGlzdChuZXdUYXNrTGlzdCk7XG4gICAgICB9XG4gICAgICBzZXRUYXNrTmFtZSgnJyk7XG4gICAgICBzZXREZWFkbGluZSgnJyk7XG4gICAgICBzZXREdXJhdGlvbignJyk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXR0ZXIpIHtcbiAgICBzZXR0ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfVxuXG4gIGxldCBjYXRlZ29yaWVzID0gW107XG4gIHRhc2tMaXN0Lm1hcCgodGFzaykgPT4ge1xuICAgIGNvbnN0IGRlYWRsaW5lID0gbmV3IERhdGUodGFzay50YXNrRGVhZGxpbmUpO1xuICAgIGxldCBkaWZmZXJlbmNlID0gTWF0aC5mbG9vcigoZGVhZGxpbmUuZ2V0VGltZSgpIC0gY3VycmVudERhdGUuZ2V0VGltZSgpKSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgdGFzay50b2RheSA9IE1hdGguY2VpbCh0YXNrLnRhc2tEdXJhdGlvbi8oZGlmZmVyZW5jZSA8IDEgPyAxIDogZGlmZmVyZW5jZSkpO1xuICAgIGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlIC0gTWF0aC5jZWlsKHRhc2sudGFza0R1cmF0aW9uIC8gMzApO1xuICAgIGlmIChkaWZmZXJlbmNlIDwgMSkge1xuICAgICAgZGlmZmVyZW5jZSA9IDA7XG4gICAgfVxuICAgIFxuICAgIGlmIChjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhdGVnb3JpZXNbZGlmZmVyZW5jZV0gPSBbXTtcbiAgICB9XG5cbiAgICB0YXNrLmRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlO1xuICAgIGNhdGVnb3JpZXNbZGlmZmVyZW5jZV0ucHVzaCh0YXNrKTtcbiAgfSlcblxuICBmdW5jdGlvbiByZW5kZXJMaXN0KGxpc3QsIGxhYmVsLCB2aXNpYmlsaXR5KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFRvZ2dsZSBsYWJlbD17bGFiZWx9IGluaXRpYWxWaXNpYmxpbGl0eT17dmlzaWJpbGl0eX0+XG4gICAgICAgICAge2xpc3QubWFwKCh0YXNrKSA9PiA8VGFzayBrZXk9e3Rhc2suaWR9IHRhc2s9e3Rhc2t9IG9uQ2hlY2tib3hDbGljaz17KCkgPT4gaGFuZGxlQ2hlY2tib3hDbGljayh0YXNrKX0gb25TdG9wQ2xpY2s9e2hhbmRsZVN0b3B9IC8+KX1cbiAgICAgICAgPC9Ub2dnbGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdG9wKHRpbWUsIHRhc2spIHtcbiAgICBjb25zdCBkZWFkbGluZSA9IG5ldyBEYXRlKHRhc2sudGFza0RlYWRsaW5lKTtcblxuICAgIGNvbnNvbGUubG9nKHRhc2sudGFza0R1cmF0aW9uKTtcblxuICAgIHRhc2sudGFza0R1cmF0aW9uIC09IE1hdGguZmxvb3IodGltZSAvIDYwKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrLnRhc2tEdXJhdGlvbik7XG5cbiAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguZmxvb3IoKGRlYWRsaW5lLmdldFRpbWUoKSAtIGN1cnJlbnREYXRlLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIGNvbnNvbGUubG9nKGRpZmZlcmVuY2UpO1xuXG4gICAgdGFzay50b2RheSA9IE1hdGguY2VpbCh0YXNrLnRhc2tEdXJhdGlvbi8oZGlmZmVyZW5jZSA8IDEgPyAxIDogZGlmZmVyZW5jZSkpO1xuICAgIGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlIC0gTWF0aC5jZWlsKHRhc2sudGFza0R1cmF0aW9uIC8gMzApO1xuICAgIGNvbnNvbGUubG9nKHRhc2sudG9kYXkpO1xuICAgIGNvbnNvbGUubG9nKGRpZmZlcmVuY2UpO1xuXG4gICAgY2F0ZWdvcmllc1t0YXNrLmRpZmZlcmVuY2VdID0gY2F0ZWdvcmllc1t0YXNrLmRpZmZlcmVuY2VdLmZpbHRlcigoY3VycikgPT4ge2N1cnIuaWQgIT0gdGFzay5pZH0pXG4gICAgdGFzay5kaWZmZXJlbmNlID0gZGlmZmVyZW5jZTtcbiAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdLnB1c2godGFzayk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2tcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXRUYXNrTmFtZSl9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2RlYWRsaW5lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldERlYWRsaW5lKX0gb25LZXlQcmVzcz17KGV2ZW50KSA9PiBoYW5kbGVLZXlQcmVzcyhldmVudCl9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGFzayBkdXJhdGlvblwiIG1pbj1cIjBcIiB2YWx1ZT17ZHVyYXRpb259IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0RHVyYXRpb24pfSBvbktleVByZXNzPXsoZXZlbnQpID0+IGhhbmRsZUtleVByZXNzKGV2ZW50KX0gLz5cblxuICAgICAge2NvbXBsZXRlZC5sZW5ndGggPiAwID8gcmVuZGVyTGlzdChjb21wbGV0ZWQsIGBDb21wbGV0ZWQgKCR7Y29tcGxldGVkLmxlbmd0aH0pYCwgdHJ1ZSwgc2V0Q29tcGxldGVkKSA6IGZhbHNlfVxuICAgICAgXG4gICAgICB7Y2F0ZWdvcmllcy5tYXAoKHRhc2tzLCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gcmVuZGVyTGlzdCh0YXNrcywgYCR7aW5kZXh9ICR7aW5kZXggPT09IDEgPyBcImRheVwiIDogXCJkYXlzXCJ9IGxlZnQgKCR7dGFza3MubGVuZ3RofSlgLCBmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHJlbmRlckxpc3QodGFza3MsIGAwIGRheXMgbGVmdCAoJHt0YXNrcy5sZW5ndGh9KWAsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9KX1cblxuICAgICAge3NvbWVkYXkubGVuZ3RoID4gMCA/IHJlbmRlckxpc3Qoc29tZWRheSwgYFNvbWVkYXkgKCR7c29tZWRheS5sZW5ndGh9KWAsIGZhbHNlKSA6IGZhbHNlfVxuXG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ2NCIsInV1aWR2NCIsIlRhc2siLCJUb2dnbGUiLCJzdHlsZXMiLCJUb0RvTGlzdCIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJjb21wbGV0ZWQiLCJzZXRDb21wbGV0ZWQiLCJzb21lZGF5Iiwic2V0U29tZWRheSIsIm5hbWUiLCJzZXRUYXNrTmFtZSIsImRlYWRsaW5lIiwic2V0RGVhZGxpbmUiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwiY3VycmVudERhdGUiLCJzZXRDdXJyZW50RGF0ZSIsIkRhdGUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibmV3RGF0ZSIsImdldERhdGUiLCJjbGVhckludGVydmFsIiwiaGFuZGxlQ2hlY2tib3hDbGljayIsInRhc2siLCJjaGVja2VkIiwidGFza0RlYWRsaW5lIiwidXBkYXRlTGlzdHMiLCJzbGljZSIsImxpc3QiLCJzZXR0ZXIiLCJuZXdDb21wbGV0ZWQiLCJwdXNoIiwiZmlsdGVyIiwiY3VyciIsImlkIiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsImtleSIsIm5ld1Rhc2siLCJ0YXNrTmFtZSIsInRhc2tEdXJhdGlvbiIsIm5ld1NvbWVkYXkiLCJ0b2RheSIsIm5ld1Rhc2tMaXN0IiwiaGFuZGxlQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJjYXRlZ29yaWVzIiwibWFwIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJmbG9vciIsImdldFRpbWUiLCJjZWlsIiwidW5kZWZpbmVkIiwicmVuZGVyTGlzdCIsImxhYmVsIiwidmlzaWJpbGl0eSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImluaXRpYWxWaXNpYmxpbGl0eSIsIm9uQ2hlY2tib3hDbGljayIsIm9uU3RvcENsaWNrIiwiaGFuZGxlU3RvcCIsInRpbWUiLCJjb25zb2xlIiwibG9nIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uS2V5UHJlc3MiLCJtaW4iLCJsZW5ndGgiLCJ0YXNrcyIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/ToDoList.js\n"));

/***/ })

});