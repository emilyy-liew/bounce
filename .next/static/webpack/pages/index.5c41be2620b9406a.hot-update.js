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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./pages/components/Task.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction ToDoList() {\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [name, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new Date());\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            setCurrentDate(new Date());\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    function handleCheckboxClick(task) {\n        let newCompleted = completed.slice();\n        let newTaskList = taskList.slice();\n        task.checked = !task.checked;\n        if (task.checked) {\n            newCompleted.push(task);\n            newTaskList = taskList.filter((curr)=>curr.id != task.id);\n        } else {\n            newTaskList.push(task);\n            newCompleted = completed.filter((curr)=>curr.id != task.id);\n        }\n        setTaskList(newTaskList);\n        setCompleted(newCompleted);\n    }\n    function handleKeyPress(event) {\n        if (event.key == \"Enter\") {\n            let newTaskList = taskList.slice();\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n                taskName: name,\n                taskDeadline: deadline,\n                taskDuration: duration,\n                checked: false\n            };\n            newTaskList.push(newTask);\n            setTaskList(newTaskList);\n            setTaskName(\"\");\n            setDeadline(\"\");\n            setDuration(\"\");\n        }\n    }\n    function handleChange(event, setter) {\n        setter(event.target.value);\n    }\n    let categories = [];\n    taskList.map((task)=>{\n        const deadline = new Date(task.taskDeadline);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        if (difference < 1) {\n            difference = 0;\n        }\n        if (categories[difference] === undefined) {\n            categories[difference] = [];\n        }\n        categories[difference].push(task);\n    });\n    categories = [\n        completed,\n        ...categories\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter task\",\n                value: name,\n                onChange: (event)=>handleChange(event, setTaskName),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: deadline,\n                onChange: (event)=>handleChange(event, setDeadline),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Enter task duration\",\n                value: duration,\n                onChange: (event)=>handleChange(event, setDuration),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            categories.map((tasks, index)=>{\n                if (index > 0 && tasks !== undefined) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    index - 1,\n                                    \" days left\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, this),\n                            tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    task: task,\n                                    onCheckboxClick: ()=>handleCheckboxClick(task)\n                                }, task.id, false, {\n                                    fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 36\n                                }, this))\n                        ]\n                    }, void 0, true);\n                } else if (tasks !== undefined && tasks.length > 0) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Completed\"\n                            }, void 0, false, {\n                                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                                lineNumber: 96,\n                                columnNumber: 15\n                            }, this),\n                            tasks.map((task)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    task: task,\n                                    onCheckboxClick: ()=>handleCheckboxClick(task)\n                                }, task.id, false, {\n                                    fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                                    lineNumber: 97,\n                                    columnNumber: 36\n                                }, this))\n                        ]\n                    }, void 0, true);\n                }\n            })\n        ]\n    }, void 0, true);\n}\n_s(ToDoList, \"XFE31iGx/6HOqp1AiAh5P09aOS0=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2dCQUFTQyxhQUFZO2dCQUFzQlYsT0FBTzVCO2dCQUFVdUMsVUFBVSxDQUFDcEIsUUFBVU0sYUFBYU4sT0FBT2xCO2dCQUFjdUMsWUFBWSxDQUFDckIsUUFBVUQsZUFBZUM7Ozs7OztZQUNwS1UsV0FBV0MsSUFBSSxDQUFDVyxPQUFPQztnQkFDdEIsSUFBSUEsUUFBUSxLQUFLRCxVQUFVTixXQUFXO29CQUNwQyxxQkFDRTs7MENBQ0UsOERBQUNROztvQ0FBR0QsUUFBUTtvQ0FBRTs7Ozs7Ozs0QkFDYkQsTUFBTVgsSUFBSSxDQUFDckIscUJBQVMsOERBQUN2Qiw2Q0FBSUE7b0NBQWV1QixNQUFNQTtvQ0FBTW1DLGlCQUFpQixJQUFNcEMsb0JBQW9CQzttQ0FBaEVBLEtBQUtROzs7Ozs7O2dCQUczQyxPQUFPLElBQUl3QixVQUFVTixhQUFhTSxNQUFNSSxTQUFTLEdBQUc7b0JBQ2xELHFCQUNFOzswQ0FDRSw4REFBQ0Y7MENBQUU7Ozs7Ozs0QkFDRkYsTUFBTVgsSUFBSSxDQUFDckIscUJBQVMsOERBQUN2Qiw2Q0FBSUE7b0NBQWV1QixNQUFNQTtvQ0FBTW1DLGlCQUFpQixJQUFNcEMsb0JBQW9CQzttQ0FBaEVBLEtBQUtROzs7Ozs7O2dCQUczQztZQUNGOzs7QUFHTjtHQW5Hd0IxQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1RvRG9MaXN0LmpzP2M2N2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb0RvTGlzdCgpIHtcbiAgY29uc3QgW3Rhc2tMaXN0LCBzZXRUYXNrTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtjb21wbGV0ZWQsIHNldENvbXBsZXRlZF0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuYW1lLCBzZXRUYXNrTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkZWFkbGluZSwgc2V0RGVhZGxpbmVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2N1cnJlbnREYXRlLCBzZXRDdXJyZW50RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgc2V0Q3VycmVudERhdGUobmV3IERhdGUoKSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzaykge1xuICAgIGxldCBuZXdDb21wbGV0ZWQgPSBjb21wbGV0ZWQuc2xpY2UoKTtcbiAgICBsZXQgbmV3VGFza0xpc3QgPSB0YXNrTGlzdC5zbGljZSgpO1xuXG4gICAgdGFzay5jaGVja2VkID0gIXRhc2suY2hlY2tlZDtcblxuICAgIGlmICh0YXNrLmNoZWNrZWQpIHtcbiAgICAgIG5ld0NvbXBsZXRlZC5wdXNoKHRhc2spO1xuICAgICAgbmV3VGFza0xpc3QgPSB0YXNrTGlzdC5maWx0ZXIoKGN1cnIpID0+IGN1cnIuaWQgIT0gdGFzay5pZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1Rhc2tMaXN0LnB1c2godGFzayk7XG4gICAgICBuZXdDb21wbGV0ZWQgPSBjb21wbGV0ZWQuZmlsdGVyKChjdXJyKSA9PiBjdXJyLmlkICE9IHRhc2suaWQpO1xuICAgIH1cblxuICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tMaXN0KTtcbiAgICBzZXRDb21wbGV0ZWQobmV3Q29tcGxldGVkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PSBcIkVudGVyXCIpIHtcbiAgICAgIGxldCBuZXdUYXNrTGlzdCA9IHRhc2tMaXN0LnNsaWNlKCk7XG4gICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIHRhc2tOYW1lOiBuYW1lLFxuICAgICAgICB0YXNrRGVhZGxpbmU6IGRlYWRsaW5lLFxuICAgICAgICB0YXNrRHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgfVxuICAgICAgbmV3VGFza0xpc3QucHVzaChuZXdUYXNrKTtcbiAgICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tMaXN0KTtcbiAgICAgIHNldFRhc2tOYW1lKCcnKTtcbiAgICAgIHNldERlYWRsaW5lKCcnKTtcbiAgICAgIHNldER1cmF0aW9uKCcnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldHRlcikge1xuICAgIHNldHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcbiAgdGFza0xpc3QubWFwKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgZGVhZGxpbmUgPSBuZXcgRGF0ZSh0YXNrLnRhc2tEZWFkbGluZSk7XG4gICAgbGV0IGRpZmZlcmVuY2UgPSBNYXRoLmZsb29yKChkZWFkbGluZS5nZXRUaW1lKCkgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2F0ZWdvcmllc1tkaWZmZXJlbmNlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID0gW107XG4gICAgfVxuXG4gICAgY2F0ZWdvcmllc1tkaWZmZXJlbmNlXS5wdXNoKHRhc2spO1xuICB9KVxuXG4gIGNhdGVnb3JpZXMgPSBbY29tcGxldGVkLCAuLi5jYXRlZ29yaWVzXTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2tcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXRUYXNrTmFtZSl9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgdmFsdWU9e2RlYWRsaW5lfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldERlYWRsaW5lKX0gb25LZXlQcmVzcz17KGV2ZW50KSA9PiBoYW5kbGVLZXlQcmVzcyhldmVudCl9IC8+XG4gICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGFzayBkdXJhdGlvblwiIHZhbHVlPXtkdXJhdGlvbn0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXREdXJhdGlvbil9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfSAvPlxuICAgICAge2NhdGVnb3JpZXMubWFwKCh0YXNrcywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4ID4gMCAmJiB0YXNrcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwPntpbmRleCAtIDF9IGRheXMgbGVmdDwvcD5cbiAgICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkNoZWNrYm94Q2xpY2s9eygpID0+IGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzayl9IC8+KX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFza3MgIT09IHVuZGVmaW5lZCAmJiB0YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxwPkNvbXBsZXRlZDwvcD5cbiAgICAgICAgICAgICAge3Rhc2tzLm1hcCgodGFzaykgPT4gPFRhc2sga2V5PXt0YXNrLmlkfSB0YXNrPXt0YXNrfSBvbkNoZWNrYm94Q2xpY2s9eygpID0+IGhhbmRsZUNoZWNrYm94Q2xpY2sodGFzayl9IC8+KX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSl9XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVGFzayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidjQiLCJ1dWlkdjQiLCJUb0RvTGlzdCIsInRhc2tMaXN0Iiwic2V0VGFza0xpc3QiLCJjb21wbGV0ZWQiLCJzZXRDb21wbGV0ZWQiLCJuYW1lIiwic2V0VGFza05hbWUiLCJkZWFkbGluZSIsInNldERlYWRsaW5lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImN1cnJlbnREYXRlIiwic2V0Q3VycmVudERhdGUiLCJEYXRlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVDaGVja2JveENsaWNrIiwidGFzayIsIm5ld0NvbXBsZXRlZCIsInNsaWNlIiwibmV3VGFza0xpc3QiLCJjaGVja2VkIiwicHVzaCIsImZpbHRlciIsImN1cnIiLCJpZCIsImhhbmRsZUtleVByZXNzIiwiZXZlbnQiLCJrZXkiLCJuZXdUYXNrIiwidGFza05hbWUiLCJ0YXNrRGVhZGxpbmUiLCJ0YXNrRHVyYXRpb24iLCJoYW5kbGVDaGFuZ2UiLCJzZXR0ZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNhdGVnb3JpZXMiLCJtYXAiLCJkaWZmZXJlbmNlIiwiTWF0aCIsImZsb29yIiwiZ2V0VGltZSIsInVuZGVmaW5lZCIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbktleVByZXNzIiwidGFza3MiLCJpbmRleCIsInAiLCJvbkNoZWNrYm94Q2xpY2siLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/ToDoList.js\n"));

/***/ })

});