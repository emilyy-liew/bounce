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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./pages/components/Task.js\");\n/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ \"./pages/components/Toggle.js\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/ToDoList.module.css */ \"./styles/ToDoList.module.css\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ToDoList() {\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [someday, setSomeday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [name, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const test = [\n        \"hi\",\n        \"this\",\n        \"is\",\n        \"a\",\n        \"test\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const newDate = new Date();\n            console.log(newDate.getDate() + \" \" + currentDate.getDate());\n            if (newDate.getDate() !== currentDate.getDate()) {\n                setCompleted([]);\n            }\n            setCurrentDate(newDate);\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    function handleCheckboxClick(task) {\n        let newCompleted = completed.slice();\n        task.checked = !task.checked;\n        if (task.taskDeadline == \"\") {\n            let newSomeday = someday.slice();\n            if (task.checked) {\n                newCompleted.push(task);\n                newSomeday = someday.filter((curr)=>curr.id != task.id);\n            } else {\n                newSomeday.push(task);\n                newCompleted = completed.filter((curr)=>curr.id != task.id);\n            }\n            setSomeday(newSomeday);\n        } else {\n            let newTaskList = taskList.slice();\n            if (task.checked) {\n                newCompleted.push(task);\n                newTaskList = taskList.filter((curr)=>curr.id != task.id);\n            } else {\n                newTaskList.push(task);\n                newCompleted = completed.filter((curr)=>curr.id != task.id);\n            }\n            setTaskList(newTaskList);\n        }\n        setCompleted(newCompleted);\n    }\n    function handleKeyPress(event) {\n        if (event.key == \"Enter\") {\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)(),\n                taskName: name,\n                taskDeadline: deadline,\n                taskDuration: duration,\n                checked: false\n            };\n            if (deadline === \"\") {\n                let newSomeday = someday.slice();\n                newSomeday.push(newTask);\n                setSomeday(newSomeday);\n            } else {\n                let newTaskList = taskList.slice();\n                newTaskList.push(newTask);\n                setTaskList(newTaskList);\n            }\n            setTaskName(\"\");\n            setDeadline(\"\");\n            setDuration(\"\");\n        }\n    }\n    function handleChange(event, setter) {\n        setter(event.target.value);\n    }\n    let categories = [];\n    taskList.map((task)=>{\n        const deadline = new Date(task.taskDeadline);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        if (difference < 1) {\n            difference = 0;\n        }\n        if (categories[difference] === undefined) {\n            categories[difference] = [];\n        }\n        categories[difference].push(task);\n    });\n    function renderList(list1, label1, visibility1) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                label: label1,\n                initialVisiblility: visibility1,\n                children: list1.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        task: task,\n                        onCheckboxClick: ()=>handleCheckboxClick(task)\n                    }, task.id, false, {\n                        fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                        lineNumber: 115,\n                        columnNumber: 31\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n            lineNumber: 113,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter task\",\n                value: name,\n                onChange: (event)=>handleChange(event, setTaskName),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: deadline,\n                onChange: (event)=>handleChange(event, setDeadline),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Enter task duration\",\n                value: duration,\n                onChange: (event)=>handleChange(event, setDuration),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 125,\n                columnNumber: 7\n            }, this),\n            completed.length > 0 ? renderList(completed, \"Completed\", true) : false,\n            categories.map((tasks, index)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        label: label,\n                        initialVisiblility: visibility,\n                        children: list.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                task: task,\n                                onCheckboxClick: ()=>handleCheckboxClick(task)\n                            }, task.id, false, {\n                                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                                lineNumber: 133,\n                                columnNumber: 35\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                        lineNumber: 132,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                    lineNumber: 131,\n                    columnNumber: 11\n                }, this);\n            }),\n            someday.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Someday\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                        lineNumber: 141,\n                        columnNumber: 13\n                    }, this),\n                    someday.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            task: task,\n                            onCheckboxClick: ()=>handleCheckboxClick(task)\n                        }, task.id, false, {\n                            fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                            lineNumber: 142,\n                            columnNumber: 36\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 140,\n                columnNumber: 11\n            }, this) : false\n        ]\n    }, void 0, true);\n}\n_s(ToDoList, \"WJDsqDD3IQkO+E2zQXuS27CARZc=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzVCLFFBQVVLLGFBQWFMLE9BQU96QjtnQkFBY3NELFlBQVksQ0FBQzdCLFFBQVVELGVBQWVDOzs7Ozs7WUFFcEtsQyxVQUFVZ0UsU0FBUyxJQUFJZCxXQUFXbEQsV0FBVyxhQUFhLFFBQVE7WUFFbEUyQyxXQUFXQyxJQUFJLENBQUNxQixPQUFPQztnQkFDdEIscUJBQ0UsOERBQUNaO29CQUFJQyxXQUFXM0QsOEVBQWdCNEQ7OEJBQzlCLDRFQUFDN0QsK0NBQU1BO3dCQUFDeUQsT0FBT0E7d0JBQU9LLG9CQUFvQko7a0NBQ3ZDRixLQUFLUCxJQUFJLENBQUN0QixxQkFBUyw4REFBQzVCLDZDQUFJQTtnQ0FBZTRCLE1BQU1BO2dDQUFNb0MsaUJBQWlCLElBQU1yQyxvQkFBb0JDOytCQUFoRUEsS0FBS1M7Ozs7Ozs7Ozs7Ozs7OztZQUk1QztZQUVDN0IsUUFBUThELFNBQVMsa0JBQ2QsOERBQUNWO2dCQUFJQyxXQUFXM0QsOEVBQWdCNEQ7O2tDQUM5Qiw4REFBQ1c7a0NBQUU7Ozs7OztvQkFDRmpFLFFBQVEwQyxJQUFJLENBQUN0QixxQkFBUyw4REFBQzVCLDZDQUFJQTs0QkFBZTRCLE1BQU1BOzRCQUFNb0MsaUJBQWlCLElBQU1yQyxvQkFBb0JDOzJCQUFoRUEsS0FBS1M7Ozs7Ozs7Ozs7dUJBRXpDOzs7QUFHVjtHQTFJd0JsQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1RvRG9MaXN0LmpzP2M2N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5pbXBvcnQgVGFzayBmcm9tIFwiLi9UYXNrXCI7XG5pbXBvcnQgVG9nZ2xlIGZyb20gXCIuL1RvZ2dsZVwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9Ub0RvTGlzdC5tb2R1bGUuY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9Eb0xpc3QoKSB7XG4gIGNvbnN0IFt0YXNrTGlzdCwgc2V0VGFza0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc29tZWRheSwgc2V0U29tZWRheV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuYW1lLCBzZXRUYXNrTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkZWFkbGluZSwgc2V0RGVhZGxpbmVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2N1cnJlbnREYXRlLCBzZXRDdXJyZW50RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICBjb25zdCB0ZXN0ID0gWydoaScsICd0aGlzJywgJ2lzJywgJ2EnLCAndGVzdCddO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGNvbnNvbGUubG9nKG5ld0RhdGUuZ2V0RGF0ZSgpICsgXCIgXCIgKyBjdXJyZW50RGF0ZS5nZXREYXRlKCkpXG4gICAgICBpZiAobmV3RGF0ZS5nZXREYXRlKCkgIT09IGN1cnJlbnREYXRlLmdldERhdGUoKSkge1xuICAgICAgICBzZXRDb21wbGV0ZWQoW10pO1xuICAgICAgfVxuICAgICAgc2V0Q3VycmVudERhdGUobmV3RGF0ZSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzaykge1xuICAgIGxldCBuZXdDb21wbGV0ZWQgPSBjb21wbGV0ZWQuc2xpY2UoKTtcbiAgICB0YXNrLmNoZWNrZWQgPSAhdGFzay5jaGVja2VkO1xuXG4gICAgaWYgKHRhc2sudGFza0RlYWRsaW5lID09ICcnKSB7XG4gICAgICBsZXQgbmV3U29tZWRheSA9IHNvbWVkYXkuc2xpY2UoKTtcbiAgICAgIGlmICh0YXNrLmNoZWNrZWQpIHtcbiAgICAgICAgbmV3Q29tcGxldGVkLnB1c2godGFzayk7XG4gICAgICAgIG5ld1NvbWVkYXkgPSBzb21lZGF5LmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPSB0YXNrLmlkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1NvbWVkYXkucHVzaCh0YXNrKTtcbiAgICAgICAgbmV3Q29tcGxldGVkID0gY29tcGxldGVkLmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPSB0YXNrLmlkKTtcbiAgICAgIH1cblxuICAgICAgc2V0U29tZWRheShuZXdTb21lZGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG5ld1Rhc2tMaXN0ID0gdGFza0xpc3Quc2xpY2UoKTtcblxuICAgICAgaWYgKHRhc2suY2hlY2tlZCkge1xuICAgICAgICBuZXdDb21wbGV0ZWQucHVzaCh0YXNrKTtcbiAgICAgICAgbmV3VGFza0xpc3QgPSB0YXNrTGlzdC5maWx0ZXIoKGN1cnIpID0+IGN1cnIuaWQgIT0gdGFzay5pZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdUYXNrTGlzdC5wdXNoKHRhc2spO1xuICAgICAgICBuZXdDb21wbGV0ZWQgPSBjb21wbGV0ZWQuZmlsdGVyKChjdXJyKSA9PiBjdXJyLmlkICE9IHRhc2suaWQpO1xuICAgICAgfVxuICBcbiAgICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tMaXN0KTtcbiAgICB9XG4gICAgXG4gICAgc2V0Q29tcGxldGVkKG5ld0NvbXBsZXRlZCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIHRhc2tOYW1lOiBuYW1lLFxuICAgICAgICB0YXNrRGVhZGxpbmU6IGRlYWRsaW5lLFxuICAgICAgICB0YXNrRHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoZGVhZGxpbmUgPT09ICcnKSB7XG4gICAgICAgIGxldCBuZXdTb21lZGF5ID0gc29tZWRheS5zbGljZSgpO1xuICAgICAgICBuZXdTb21lZGF5LnB1c2gobmV3VGFzayk7XG4gICAgICAgIHNldFNvbWVkYXkobmV3U29tZWRheSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdUYXNrTGlzdCA9IHRhc2tMaXN0LnNsaWNlKCk7XG4gICAgICAgIG5ld1Rhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tMaXN0KTtcbiAgICAgIH1cbiAgICAgIHNldFRhc2tOYW1lKCcnKTtcbiAgICAgIHNldERlYWRsaW5lKCcnKTtcbiAgICAgIHNldER1cmF0aW9uKCcnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldHRlcikge1xuICAgIHNldHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcbiAgdGFza0xpc3QubWFwKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgZGVhZGxpbmUgPSBuZXcgRGF0ZSh0YXNrLnRhc2tEZWFkbGluZSk7XG4gICAgbGV0IGRpZmZlcmVuY2UgPSBNYXRoLmZsb29yKChkZWFkbGluZS5nZXRUaW1lKCkgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2F0ZWdvcmllc1tkaWZmZXJlbmNlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID0gW107XG4gICAgfVxuXG4gICAgY2F0ZWdvcmllc1tkaWZmZXJlbmNlXS5wdXNoKHRhc2spO1xuICB9KVxuXG4gIGZ1bmN0aW9uIHJlbmRlckxpc3QobGlzdCwgbGFiZWwsIHZpc2liaWxpdHkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8VG9nZ2xlIGxhYmVsPXtsYWJlbH0gaW5pdGlhbFZpc2libGlsaXR5PXt2aXNpYmlsaXR5fT5cbiAgICAgICAgICB7bGlzdC5tYXAoKHRhc2spID0+IDxUYXNrIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gb25DaGVja2JveENsaWNrPXsoKSA9PiBoYW5kbGVDaGVja2JveENsaWNrKHRhc2spfSAvPil9XG4gICAgICAgIDwvVG9nZ2xlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0VGFza05hbWUpfSBvbktleVByZXNzPXsoZXZlbnQpID0+IGhhbmRsZUtleVByZXNzKGV2ZW50KX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPXtkZWFkbGluZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXREZWFkbGluZSl9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2sgZHVyYXRpb25cIiB2YWx1ZT17ZHVyYXRpb259IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0RHVyYXRpb24pfSBvbktleVByZXNzPXsoZXZlbnQpID0+IGhhbmRsZUtleVByZXNzKGV2ZW50KX0gLz5cblxuICAgICAge2NvbXBsZXRlZC5sZW5ndGggPiAwID8gcmVuZGVyTGlzdChjb21wbGV0ZWQsIFwiQ29tcGxldGVkXCIsIHRydWUpIDogZmFsc2V9XG4gICAgICBcbiAgICAgIHtjYXRlZ29yaWVzLm1hcCgodGFza3MsIGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgICAgPFRvZ2dsZSBsYWJlbD17bGFiZWx9IGluaXRpYWxWaXNpYmxpbGl0eT17dmlzaWJpbGl0eX0+XG4gICAgICAgICAgICAgIHtsaXN0Lm1hcCgodGFzaykgPT4gPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkNoZWNrYm94Q2xpY2s9eygpID0+IGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzayl9IC8+KX1cbiAgICAgICAgICAgIDwvVG9nZ2xlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgICB9KX1cblxuICAgICAge3NvbWVkYXkubGVuZ3RoID4gMFxuICAgICAgICA/IDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxwPlNvbWVkYXk8L3A+XG4gICAgICAgICAgICB7c29tZWRheS5tYXAoKHRhc2spID0+IDxUYXNrIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gb25DaGVja2JveENsaWNrPXsoKSA9PiBoYW5kbGVDaGVja2JveENsaWNrKHRhc2spfSAvPil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDogZmFsc2V9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ2NCIsInV1aWR2NCIsIlRhc2siLCJUb2dnbGUiLCJzdHlsZXMiLCJUb0RvTGlzdCIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJjb21wbGV0ZWQiLCJzZXRDb21wbGV0ZWQiLCJzb21lZGF5Iiwic2V0U29tZWRheSIsIm5hbWUiLCJzZXRUYXNrTmFtZSIsImRlYWRsaW5lIiwic2V0RGVhZGxpbmUiLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwiY3VycmVudERhdGUiLCJzZXRDdXJyZW50RGF0ZSIsIkRhdGUiLCJ0ZXN0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5ld0RhdGUiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVDaGVja2JveENsaWNrIiwidGFzayIsIm5ld0NvbXBsZXRlZCIsInNsaWNlIiwiY2hlY2tlZCIsInRhc2tEZWFkbGluZSIsIm5ld1NvbWVkYXkiLCJwdXNoIiwiZmlsdGVyIiwiY3VyciIsImlkIiwibmV3VGFza0xpc3QiLCJoYW5kbGVLZXlQcmVzcyIsImV2ZW50Iiwia2V5IiwibmV3VGFzayIsInRhc2tOYW1lIiwidGFza0R1cmF0aW9uIiwiaGFuZGxlQ2hhbmdlIiwic2V0dGVyIiwidGFyZ2V0IiwidmFsdWUiLCJjYXRlZ29yaWVzIiwibWFwIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJmbG9vciIsImdldFRpbWUiLCJ1bmRlZmluZWQiLCJyZW5kZXJMaXN0IiwibGlzdCIsImxhYmVsIiwidmlzaWJpbGl0eSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImluaXRpYWxWaXNpYmxpbGl0eSIsIm9uQ2hlY2tib3hDbGljayIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbktleVByZXNzIiwibGVuZ3RoIiwidGFza3MiLCJpbmRleCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/ToDoList.js\n"));

/***/ })

});