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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./pages/components/Task.js\");\n/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ \"./pages/components/Toggle.js\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/ToDoList.module.css */ \"./styles/ToDoList.module.css\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ToDoList() {\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [someday, setSomeday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [name, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const test = [\n        \"hi\",\n        \"this\",\n        \"is\",\n        \"a\",\n        \"test\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const newDate = new Date();\n            if (newDate.getDate() !== currentDate.getDate()) {\n                setCompleted([]);\n            }\n            setCurrentDate(newDate);\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    function handleCheckboxClick(task) {\n        let newCompleted = completed.slice();\n        task.checked = !task.checked;\n        if (task.taskDeadline == \"\") {\n            let newSomeday = someday.slice();\n            if (task.checked) {\n                newCompleted.push(task);\n                newSomeday = someday.filter((curr)=>curr.id != task.id);\n            } else {\n                newSomeday.push(task);\n                newCompleted = completed.filter((curr)=>curr.id != task.id);\n            }\n            setSomeday(newSomeday);\n        } else {\n            let newTaskList = taskList.slice();\n            if (task.checked) {\n                newCompleted.push(task);\n                newTaskList = taskList.filter((curr)=>curr.id != task.id);\n            } else {\n                newTaskList.push(task);\n                newCompleted = completed.filter((curr)=>curr.id != task.id);\n            }\n            setTaskList(newTaskList);\n        }\n        setCompleted(newCompleted);\n    }\n    function handleKeyPress(event) {\n        if (event.key == \"Enter\") {\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),\n                taskName: name,\n                taskDeadline: deadline,\n                taskDuration: duration,\n                checked: false\n            };\n            if (deadline === \"\") {\n                let newSomeday = someday.slice();\n                newSomeday.push(newTask);\n                setSomeday(newSomeday);\n            } else {\n                let newTaskList = taskList.slice();\n                newTaskList.push(newTask);\n                setTaskList(newTaskList);\n            }\n            setTaskName(\"\");\n            setDeadline(\"\");\n            setDuration(\"\");\n        }\n    }\n    function handleChange(event, setter) {\n        setter(event.target.value);\n    }\n    let categories = [];\n    taskList.map((task)=>{\n        const deadline = new Date(task.taskDeadline);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        task.difference = difference;\n        difference = difference - Math.ceil(task.taskDuration / 30);\n        if (difference < 1) {\n            difference = 0;\n        }\n        if (categories[difference] === undefined) {\n            categories[difference] = [];\n        }\n        categories[difference].push(task);\n    });\n    function renderList(list, label, visibility) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                label: label,\n                initialVisiblility: visibility,\n                children: list.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        task: task,\n                        onCheckboxClick: ()=>handleCheckboxClick(task)\n                    }, task.id, false, {\n                        fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                        lineNumber: 118,\n                        columnNumber: 31\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter task\",\n                value: name,\n                onChange: (event)=>handleChange(event, setTaskName),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 126,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: deadline,\n                onChange: (event)=>handleChange(event, setDeadline),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 127,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Enter task duration\",\n                value: duration,\n                onChange: (event)=>handleChange(event, setDuration),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, this),\n            completed.length > 0 ? renderList(completed, \"Completed\", true) : false,\n            categories.map((tasks, index)=>{\n                if (index) {\n                    return renderList(tasks, \"\".concat(index, \" \").concat(index === 1 ? \"day\" : \"days\", \" left (\").concat(tasks.length, \")\"), false);\n                } else {\n                    return renderList(tasks, \"0 days left (\".concat(tasks.length, \")\"), true);\n                }\n            }),\n            someday.length > 0 ? renderList(someday, \"Someday\", false) : false\n        ]\n    }, void 0, true);\n}\n_s(ToDoList, \"WJDsqDD3IQkO+E2zQXuS27CARZc=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dCQUFzQnBCLE9BQU9oQztnQkFBVXFELFVBQVUsQ0FBQzdCLFFBQVVLLGFBQWFMLE9BQU92QjtnQkFBY3FELFlBQVksQ0FBQzlCLFFBQVVELGVBQWVDOzs7Ozs7WUFFcEtoQyxVQUFVK0QsU0FBUyxJQUFJZCxXQUFXakQsV0FBVyxhQUFhLFFBQVE7WUFFbEV5QyxXQUFXQyxJQUFJLENBQUNzQixPQUFPQztnQkFDdEIsSUFBSUEsT0FBTztvQkFDVCxPQUFPaEIsV0FBV2UsT0FBTyxHQUFZQyxPQUFUQSxPQUFNLEtBQXlDRCxPQUF0Q0MsVUFBVSxJQUFJLFFBQVEsUUFBTyxXQUFzQixPQUFiRCxNQUFNRCxRQUFPLE1BQUk7Z0JBQzlGLE9BQU87b0JBQ0wsT0FBT2QsV0FBV2UsT0FBTyxnQkFBNkIsT0FBYkEsTUFBTUQsUUFBTyxNQUFJO2dCQUM1RDtZQUNGO1lBRUM3RCxRQUFRNkQsU0FBUyxJQUFJZCxXQUFXL0MsU0FBUyxXQUFXLFNBQVM7OztBQUlwRTtHQXRJd0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvVG9Eb0xpc3QuanM/YzY3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCBUb2dnbGUgZnJvbSBcIi4vVG9nZ2xlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1RvRG9MaXN0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9Eb0xpc3QoKSB7XG4gIGNvbnN0IFt0YXNrTGlzdCwgc2V0VGFza0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc29tZWRheSwgc2V0U29tZWRheV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuYW1lLCBzZXRUYXNrTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkZWFkbGluZSwgc2V0RGVhZGxpbmVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2N1cnJlbnREYXRlLCBzZXRDdXJyZW50RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICBjb25zdCB0ZXN0ID0gWydoaScsICd0aGlzJywgJ2lzJywgJ2EnLCAndGVzdCddO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGlmIChuZXdEYXRlLmdldERhdGUoKSAhPT0gY3VycmVudERhdGUuZ2V0RGF0ZSgpKSB7XG4gICAgICAgIHNldENvbXBsZXRlZChbXSk7XG4gICAgICB9XG4gICAgICBzZXRDdXJyZW50RGF0ZShuZXdEYXRlKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3hDbGljayh0YXNrKSB7XG4gICAgbGV0IG5ld0NvbXBsZXRlZCA9IGNvbXBsZXRlZC5zbGljZSgpO1xuICAgIHRhc2suY2hlY2tlZCA9ICF0YXNrLmNoZWNrZWQ7XG5cbiAgICBpZiAodGFzay50YXNrRGVhZGxpbmUgPT0gJycpIHtcbiAgICAgIGxldCBuZXdTb21lZGF5ID0gc29tZWRheS5zbGljZSgpO1xuICAgICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgICBuZXdDb21wbGV0ZWQucHVzaCh0YXNrKTtcbiAgICAgICAgbmV3U29tZWRheSA9IHNvbWVkYXkuZmlsdGVyKChjdXJyKSA9PiBjdXJyLmlkICE9IHRhc2suaWQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3U29tZWRheS5wdXNoKHRhc2spO1xuICAgICAgICBuZXdDb21wbGV0ZWQgPSBjb21wbGV0ZWQuZmlsdGVyKChjdXJyKSA9PiBjdXJyLmlkICE9IHRhc2suaWQpO1xuICAgICAgfVxuXG4gICAgICBzZXRTb21lZGF5KG5ld1NvbWVkYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbmV3VGFza0xpc3QgPSB0YXNrTGlzdC5zbGljZSgpO1xuXG4gICAgICBpZiAodGFzay5jaGVja2VkKSB7XG4gICAgICAgIG5ld0NvbXBsZXRlZC5wdXNoKHRhc2spO1xuICAgICAgICBuZXdUYXNrTGlzdCA9IHRhc2tMaXN0LmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPSB0YXNrLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1Rhc2tMaXN0LnB1c2godGFzayk7XG4gICAgICAgIG5ld0NvbXBsZXRlZCA9IGNvbXBsZXRlZC5maWx0ZXIoKGN1cnIpID0+IGN1cnIuaWQgIT0gdGFzay5pZCk7XG4gICAgICB9XG4gIFxuICAgICAgc2V0VGFza0xpc3QobmV3VGFza0xpc3QpO1xuICAgIH1cbiAgICBcbiAgICBzZXRDb21wbGV0ZWQobmV3Q29tcGxldGVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgIGNvbnN0IG5ld1Rhc2sgPSB7XG4gICAgICAgIGlkOiB1dWlkdjQoKSxcbiAgICAgICAgdGFza05hbWU6IG5hbWUsXG4gICAgICAgIHRhc2tEZWFkbGluZTogZGVhZGxpbmUsXG4gICAgICAgIHRhc2tEdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChkZWFkbGluZSA9PT0gJycpIHtcbiAgICAgICAgbGV0IG5ld1NvbWVkYXkgPSBzb21lZGF5LnNsaWNlKCk7XG4gICAgICAgIG5ld1NvbWVkYXkucHVzaChuZXdUYXNrKTtcbiAgICAgICAgc2V0U29tZWRheShuZXdTb21lZGF5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IG5ld1Rhc2tMaXN0ID0gdGFza0xpc3Quc2xpY2UoKTtcbiAgICAgICAgbmV3VGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICAgICAgc2V0VGFza0xpc3QobmV3VGFza0xpc3QpO1xuICAgICAgfVxuICAgICAgc2V0VGFza05hbWUoJycpO1xuICAgICAgc2V0RGVhZGxpbmUoJycpO1xuICAgICAgc2V0RHVyYXRpb24oJycpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCwgc2V0dGVyKSB7XG4gICAgc2V0dGVyKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICBsZXQgY2F0ZWdvcmllcyA9IFtdO1xuICB0YXNrTGlzdC5tYXAoKHRhc2spID0+IHtcbiAgICBjb25zdCBkZWFkbGluZSA9IG5ldyBEYXRlKHRhc2sudGFza0RlYWRsaW5lKTtcbiAgICBsZXQgZGlmZmVyZW5jZSA9IE1hdGguZmxvb3IoKGRlYWRsaW5lLmdldFRpbWUoKSAtIGN1cnJlbnREYXRlLmdldFRpbWUoKSkgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICAgIHRhc2suZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2U7XG4gICAgZGlmZmVyZW5jZSA9IGRpZmZlcmVuY2UgLSBNYXRoLmNlaWwodGFzay50YXNrRHVyYXRpb24gLyAzMCk7XG4gIFxuICAgIGlmIChkaWZmZXJlbmNlIDwgMSkge1xuICAgICAgZGlmZmVyZW5jZSA9IDA7XG4gICAgfVxuICAgIFxuICAgIGlmIChjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhdGVnb3JpZXNbZGlmZmVyZW5jZV0gPSBbXTtcbiAgICB9XG5cbiAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdLnB1c2godGFzayk7XG4gIH0pXG5cbiAgZnVuY3Rpb24gcmVuZGVyTGlzdChsaXN0LCBsYWJlbCwgdmlzaWJpbGl0eSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxUb2dnbGUgbGFiZWw9e2xhYmVsfSBpbml0aWFsVmlzaWJsaWxpdHk9e3Zpc2liaWxpdHl9PlxuICAgICAgICAgIHtsaXN0Lm1hcCgodGFzaykgPT4gPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkNoZWNrYm94Q2xpY2s9eygpID0+IGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzayl9IC8+KX1cbiAgICAgICAgPC9Ub2dnbGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2tcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXRUYXNrTmFtZSl9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2RlYWRsaW5lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldERlYWRsaW5lKX0gb25LZXlQcmVzcz17KGV2ZW50KSA9PiBoYW5kbGVLZXlQcmVzcyhldmVudCl9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGFzayBkdXJhdGlvblwiIHZhbHVlPXtkdXJhdGlvbn0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXREdXJhdGlvbil9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfSAvPlxuXG4gICAgICB7Y29tcGxldGVkLmxlbmd0aCA+IDAgPyByZW5kZXJMaXN0KGNvbXBsZXRlZCwgXCJDb21wbGV0ZWRcIiwgdHJ1ZSkgOiBmYWxzZX1cbiAgICAgIFxuICAgICAge2NhdGVnb3JpZXMubWFwKCh0YXNrcywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHJlbmRlckxpc3QodGFza3MsIGAke2luZGV4fSAke2luZGV4ID09PSAxID8gXCJkYXlcIiA6IFwiZGF5c1wifSBsZWZ0ICgke3Rhc2tzLmxlbmd0aH0pYCwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZW5kZXJMaXN0KHRhc2tzLCBgMCBkYXlzIGxlZnQgKCR7dGFza3MubGVuZ3RofSlgLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSl9XG5cbiAgICAgIHtzb21lZGF5Lmxlbmd0aCA+IDAgPyByZW5kZXJMaXN0KHNvbWVkYXksIFwiU29tZWRheVwiLCBmYWxzZSkgOiBmYWxzZX1cblxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidjQiLCJ1dWlkdjQiLCJUYXNrIiwiVG9nZ2xlIiwic3R5bGVzIiwicmVuZGVyIiwiVG9Eb0xpc3QiLCJ0YXNrTGlzdCIsInNldFRhc2tMaXN0IiwiY29tcGxldGVkIiwic2V0Q29tcGxldGVkIiwic29tZWRheSIsInNldFNvbWVkYXkiLCJuYW1lIiwic2V0VGFza05hbWUiLCJkZWFkbGluZSIsInNldERlYWRsaW5lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImN1cnJlbnREYXRlIiwic2V0Q3VycmVudERhdGUiLCJEYXRlIiwidGVzdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJuZXdEYXRlIiwiZ2V0RGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVDaGVja2JveENsaWNrIiwidGFzayIsIm5ld0NvbXBsZXRlZCIsInNsaWNlIiwiY2hlY2tlZCIsInRhc2tEZWFkbGluZSIsIm5ld1NvbWVkYXkiLCJwdXNoIiwiZmlsdGVyIiwiY3VyciIsImlkIiwibmV3VGFza0xpc3QiLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwibmV3VGFzayIsInRhc2tOYW1lIiwidGFza0R1cmF0aW9uIiwiaGFuZGxlQ2hhbmdlIiwic2V0dGVyIiwidGFyZ2V0IiwidmFsdWUiLCJjYXRlZ29yaWVzIiwibWFwIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJmbG9vciIsImdldFRpbWUiLCJjZWlsIiwidW5kZWZpbmVkIiwicmVuZGVyTGlzdCIsImxpc3QiLCJsYWJlbCIsInZpc2liaWxpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbml0aWFsVmlzaWJsaWxpdHkiLCJvbkNoZWNrYm94Q2xpY2siLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwib25LZXlQcmVzcyIsImxlbmd0aCIsInRhc2tzIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/ToDoList.js\n"));

/***/ })

});