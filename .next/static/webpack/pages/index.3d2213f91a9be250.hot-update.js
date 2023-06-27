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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ToDoList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./pages/components/Task.js\");\n/* harmony import */ var _Toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Toggle */ \"./pages/components/Toggle.js\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/ToDoList.module.css */ \"./styles/ToDoList.module.css\");\n/* harmony import */ var _styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ToDoList() {\n    _s();\n    const [taskList, setTaskList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [completed, setCompleted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [someday, setSomeday] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [name, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [deadline, setDeadline] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentDate, setCurrentDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    const test = [\n        \"hi\",\n        \"this\",\n        \"is\",\n        \"a\",\n        \"test\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const interval = setInterval(()=>{\n            const newDate = new Date();\n            if (newDate.getDate() !== currentDate.getDate()) {\n                setCompleted([]);\n            }\n            setCurrentDate(newDate);\n        }, 1000);\n        return ()=>{\n            clearInterval(interval);\n        };\n    }, []);\n    function handleCheckboxClick(task1) {\n        let newCompleted1 = completed.slice();\n        task1.checked = !task1.checked;\n        let newList1 = taskList;\n        let setter = setTaskList;\n        if (task1.taskDeadline = \"\") {\n            newList1 = someday;\n            setter = setSomeday;\n        }\n        updateLists(newList1, setter);\n        setCompleted(newCompleted1);\n    }\n    function updateLists(list, setter) {\n        if (task.checked) {\n            newCompleted.push(task);\n            newList = list.filter((curr)=>curr.id != task.id);\n        } else {\n            newList.push(task);\n            newCompleted = completed.filter((curr)=>curr.id != task.id);\n        }\n        setter(newList);\n    }\n    function handleKeyPress(event) {\n        if (event.key == \"Enter\") {\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),\n                taskName: name,\n                taskDeadline: deadline,\n                taskDuration: duration,\n                checked: false\n            };\n            if (deadline === \"\") {\n                let newSomeday = someday.slice();\n                newSomeday.push(newTask);\n                setSomeday(newSomeday);\n            } else {\n                let newTaskList = taskList.slice();\n                newTaskList.push(newTask);\n                setTaskList(newTaskList);\n            }\n            setTaskName(\"\");\n            setDeadline(\"\");\n            setDuration(\"\");\n        }\n    }\n    function handleChange(event, setter) {\n        setter(event.target.value);\n    }\n    let categories = [];\n    taskList.map((task1)=>{\n        const deadline = new Date(task1.taskDeadline);\n        let difference = Math.floor((deadline.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));\n        task1.today = Math.ceil(task1.taskDuration / (task1.difference < 1 ? 1 : task1.difference));\n        difference = difference - Math.ceil(task1.taskDuration / 30);\n        if (difference < 1) {\n            difference = 0;\n        }\n        if (categories[difference] === undefined) {\n            categories[difference] = [];\n        }\n        categories[difference].push(task1);\n    });\n    function renderList(list, label, visibility) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_ToDoList_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Toggle__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                label: label,\n                initialVisiblility: visibility,\n                children: list.map((task1)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Task__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        task: task1,\n                        onCheckboxClick: ()=>handleCheckboxClick(task1)\n                    }, task1.id, false, {\n                        fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                        lineNumber: 114,\n                        columnNumber: 31\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 113,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n            lineNumber: 112,\n            columnNumber: 7\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                placeholder: \"Enter task\",\n                value: name,\n                onChange: (event)=>handleChange(event, setTaskName),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 122,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"date\",\n                value: deadline,\n                onChange: (event)=>handleChange(event, setDeadline),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                placeholder: \"Enter task duration\",\n                value: duration,\n                onChange: (event)=>handleChange(event, setDuration),\n                onKeyPress: (event)=>handleKeyPress(event)\n            }, void 0, false, {\n                fileName: \"/Users/emilyliew/Desktop/bounce/pages/components/ToDoList.js\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this),\n            completed.length > 0 ? renderList(completed, \"Completed\", true, setCompleted) : false,\n            categories.map((tasks, index)=>{\n                if (index) {\n                    return renderList(tasks, \"\".concat(index, \" \").concat(index === 1 ? \"day\" : \"days\", \" left (\").concat(tasks.length, \")\"), false);\n                } else {\n                    return renderList(tasks, \"0 days left (\".concat(tasks.length, \")\"), true);\n                }\n            }),\n            someday.length > 0 ? renderList(someday, \"Someday\", false) : false\n        ]\n    }, void 0, true);\n}\n_s(ToDoList, \"WJDsqDD3IQkO+E2zQXuS27CARZc=\");\n_c = ToDoList;\nvar _c;\n$RefreshReg$(_c, \"ToDoList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1RvRG9MaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ1I7QUFFVjtBQUNJO0FBRXdCO0FBQ25CO0FBRXBCLFNBQVNROztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNXLFdBQVdDLGFBQWEsR0FBR1osK0NBQVFBLENBQUMsRUFBRTtJQUM3QyxNQUFNLENBQUNhLFNBQVNDLFdBQVcsR0FBR2QsK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNlLE1BQU1DLFlBQVksR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2lCLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ21CLFVBQVVDLFlBQVksR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3FCLGFBQWFDLGVBQWUsR0FBR3RCLCtDQUFRQSxDQUFDLElBQUl1QjtJQUVuRCxNQUFNQyxPQUFPO1FBQUM7UUFBTTtRQUFRO1FBQU07UUFBSztLQUFPO0lBRTlDdkIsZ0RBQVNBLENBQUM7UUFDUixNQUFNd0IsV0FBV0MsWUFBWTtZQUMzQixNQUFNQyxVQUFVLElBQUlKO1lBQ3BCLElBQUlJLFFBQVFDLGNBQWNQLFlBQVlPLFdBQVc7Z0JBQy9DaEIsYUFBYSxFQUFFO1lBQ2pCO1lBQ0FVLGVBQWVLO1FBQ2pCLEdBQUc7UUFFSCxPQUFPO1lBQ0xFLGNBQWNKO1FBQ2hCO0lBQ0YsR0FBRyxFQUFFO0lBRUwsU0FBU0ssb0JBQW9CQyxLQUFJO1FBQy9CLElBQUlDLGdCQUFlckIsVUFBVXNCO1FBQzdCRixNQUFLRyxVQUFVLENBQUNILE1BQUtHO1FBRXJCLElBQUlDLFdBQVUxQjtRQUNkLElBQUkyQixTQUFTMUI7UUFFYixJQUFJcUIsTUFBS00sZUFBZSxJQUFJO1lBQzFCRixXQUFVdEI7WUFDVnVCLFNBQVN0QjtRQUNYO1FBRUF3QixZQUFZSCxVQUFTQztRQUNyQnhCLGFBQWFvQjtJQUNmO0lBRUEsU0FBU00sWUFBWUMsSUFBSSxFQUFFSCxNQUFNO1FBQy9CLElBQUlMLEtBQUtHLFNBQVM7WUFDaEJGLGFBQWFRLEtBQUtUO1lBQ2xCSSxVQUFVSSxLQUFLRSxPQUFPLENBQUNDLE9BQVNBLEtBQUtDLE1BQU1aLEtBQUtZO1FBQ2xELE9BQU87WUFDTFIsUUFBUUssS0FBS1Q7WUFDYkMsZUFBZXJCLFVBQVU4QixPQUFPLENBQUNDLE9BQVNBLEtBQUtDLE1BQU1aLEtBQUtZO1FBQzVEO1FBRUFQLE9BQU9EO0lBQ1Q7SUFFQSxTQUFTUyxlQUFlQyxLQUFLO1FBQzNCLElBQUlBLE1BQU1DLE9BQU8sU0FBUztZQUN4QixNQUFNQyxVQUFVO2dCQUNkSixJQUFJeEMsd0NBQU1BO2dCQUNWNkMsVUFBVWpDO2dCQUNWc0IsY0FBY3BCO2dCQUNkZ0MsY0FBYzlCO2dCQUNkZSxTQUFTO1lBQ1g7WUFFQSxJQUFJakIsYUFBYSxJQUFJO2dCQUNuQixJQUFJaUMsYUFBYXJDLFFBQVFvQjtnQkFDekJpQixXQUFXVixLQUFLTztnQkFDaEJqQyxXQUFXb0M7WUFDYixPQUFPO2dCQUNMLElBQUlDLGNBQWMxQyxTQUFTd0I7Z0JBQzNCa0IsWUFBWVgsS0FBS087Z0JBQ2pCckMsWUFBWXlDO1lBQ2Q7WUFDQW5DLFlBQVk7WUFDWkUsWUFBWTtZQUNaRSxZQUFZO1FBQ2Q7SUFDRjtJQUVBLFNBQVNnQyxhQUFhUCxLQUFLLEVBQUVULE1BQU07UUFDakNBLE9BQU9TLE1BQU1RLE9BQU9DO0lBQ3RCO0lBRUEsSUFBSUMsYUFBYSxFQUFFO0lBQ25COUMsU0FBUytDLElBQUksQ0FBQ3pCO1FBQ1osTUFBTWQsV0FBVyxJQUFJTSxLQUFLUSxNQUFLTTtRQUMvQixJQUFJb0IsYUFBYUMsS0FBS0MsTUFBTSxDQUFDMUMsU0FBUzJDLFlBQVl2QyxZQUFZdUMsU0FBUSxJQUFNLFFBQU8sS0FBSyxLQUFLLEVBQUM7UUFDOUY3QixNQUFLOEIsUUFBUUgsS0FBS0ksS0FBSy9CLE1BQUtrQixlQUFjbEIsQ0FBQUEsTUFBSzBCLGFBQWEsSUFBSSxJQUFJMUIsTUFBSzBCLFVBQVM7UUFDbEZBLGFBQWFBLGFBQWFDLEtBQUtJLEtBQUsvQixNQUFLa0IsZUFBZTtRQUV4RCxJQUFJUSxhQUFhLEdBQUc7WUFDbEJBLGFBQWE7UUFDZjtRQUVBLElBQUlGLFVBQVUsQ0FBQ0UsV0FBVyxLQUFLTSxXQUFXO1lBQ3hDUixVQUFVLENBQUNFLFdBQVcsR0FBRyxFQUFFO1FBQzdCO1FBRUFGLFVBQVUsQ0FBQ0UsV0FBVyxDQUFDakIsS0FBS1Q7SUFDOUI7SUFFQSxTQUFTaUMsV0FBV3pCLElBQUksRUFBRTBCLEtBQUssRUFBRUMsVUFBVTtRQUN6QyxxQkFDRSw4REFBQ0M7WUFBSUMsV0FBVzlELDhFQUFnQitEO3NCQUM5Qiw0RUFBQ2hFLCtDQUFNQTtnQkFBQzRELE9BQU9BO2dCQUFPSyxvQkFBb0JKOzBCQUN2QzNCLEtBQUtpQixJQUFJLENBQUN6QixzQkFBUyw4REFBQzNCLDZDQUFJQTt3QkFBZTJCLE1BQU1BO3dCQUFNd0MsaUJBQWlCLElBQU16QyxvQkFBb0JDO3VCQUFoRUEsTUFBS1k7Ozs7Ozs7Ozs7Ozs7OztJQUk1QztJQUVBLHFCQUNFOzswQkFDRSw4REFBQzZCO2dCQUFNQyxNQUFLO2dCQUFPQyxhQUFZO2dCQUFhcEIsT0FBT3ZDO2dCQUFNNEQsVUFBVSxDQUFDOUIsUUFBVU8sYUFBYVAsT0FBTzdCO2dCQUFjNEQsWUFBWSxDQUFDL0IsUUFBVUQsZUFBZUM7Ozs7OzswQkFDdEosOERBQUMyQjtnQkFBTUMsTUFBSztnQkFBT25CLE9BQU9yQztnQkFBVTBELFVBQVUsQ0FBQzlCLFFBQVVPLGFBQWFQLE9BQU8zQjtnQkFBYzBELFlBQVksQ0FBQy9CLFFBQVVELGVBQWVDOzs7Ozs7MEJBQ2pJLDhEQUFDMkI7Z0JBQU1DLE1BQUs7Z0JBQVNDLGFBQVk7Z0JBQXNCcEIsT0FBT25DO2dCQUFVd0QsVUFBVSxDQUFDOUIsUUFBVU8sYUFBYVAsT0FBT3pCO2dCQUFjd0QsWUFBWSxDQUFDL0IsUUFBVUQsZUFBZUM7Ozs7OztZQUVwS2xDLFVBQVVrRSxTQUFTLElBQUliLFdBQVdyRCxXQUFXLGFBQWEsTUFBTUMsZ0JBQWdCO1lBRWhGMkMsV0FBV0MsSUFBSSxDQUFDc0IsT0FBT0M7Z0JBQ3RCLElBQUlBLE9BQU87b0JBQ1QsT0FBT2YsV0FBV2MsT0FBTyxHQUFZQyxPQUFUQSxPQUFNLEtBQXlDRCxPQUF0Q0MsVUFBVSxJQUFJLFFBQVEsUUFBTyxXQUFzQixPQUFiRCxNQUFNRCxRQUFPLE1BQUk7Z0JBQzlGLE9BQU87b0JBQ0wsT0FBT2IsV0FBV2MsT0FBTyxnQkFBNkIsT0FBYkEsTUFBTUQsUUFBTyxNQUFJO2dCQUM1RDtZQUNGO1lBRUNoRSxRQUFRZ0UsU0FBUyxJQUFJYixXQUFXbkQsU0FBUyxXQUFXLFNBQVM7OztBQUlwRTtHQWxJd0JMO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvVG9Eb0xpc3QuanM/YzY3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5cbmltcG9ydCBUYXNrIGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCBUb2dnbGUgZnJvbSBcIi4vVG9nZ2xlXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL1RvRG9MaXN0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9Eb0xpc3QoKSB7XG4gIGNvbnN0IFt0YXNrTGlzdCwgc2V0VGFza0xpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbY29tcGxldGVkLCBzZXRDb21wbGV0ZWRdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbc29tZWRheSwgc2V0U29tZWRheV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtuYW1lLCBzZXRUYXNrTmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkZWFkbGluZSwgc2V0RGVhZGxpbmVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZHVyYXRpb24sIHNldER1cmF0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2N1cnJlbnREYXRlLCBzZXRDdXJyZW50RGF0ZV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKTtcblxuICBjb25zdCB0ZXN0ID0gWydoaScsICd0aGlzJywgJ2lzJywgJ2EnLCAndGVzdCddO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgIGlmIChuZXdEYXRlLmdldERhdGUoKSAhPT0gY3VycmVudERhdGUuZ2V0RGF0ZSgpKSB7XG4gICAgICAgIHNldENvbXBsZXRlZChbXSk7XG4gICAgICB9XG4gICAgICBzZXRDdXJyZW50RGF0ZShuZXdEYXRlKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2hlY2tib3hDbGljayh0YXNrKSB7XG4gICAgbGV0IG5ld0NvbXBsZXRlZCA9IGNvbXBsZXRlZC5zbGljZSgpO1xuICAgIHRhc2suY2hlY2tlZCA9ICF0YXNrLmNoZWNrZWQ7XG5cbiAgICBsZXQgbmV3TGlzdCA9IHRhc2tMaXN0O1xuICAgIGxldCBzZXR0ZXIgPSBzZXRUYXNrTGlzdDtcblxuICAgIGlmICh0YXNrLnRhc2tEZWFkbGluZSA9ICcnKSB7XG4gICAgICBuZXdMaXN0ID0gc29tZWRheTtcbiAgICAgIHNldHRlciA9IHNldFNvbWVkYXk7XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZUxpc3RzKG5ld0xpc3QsIHNldHRlcik7XG4gICAgc2V0Q29tcGxldGVkKG5ld0NvbXBsZXRlZCk7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMaXN0cyhsaXN0LCBzZXR0ZXIpIHtcbiAgICBpZiAodGFzay5jaGVja2VkKSB7XG4gICAgICBuZXdDb21wbGV0ZWQucHVzaCh0YXNrKTtcbiAgICAgIG5ld0xpc3QgPSBsaXN0LmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPSB0YXNrLmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3TGlzdC5wdXNoKHRhc2spO1xuICAgICAgbmV3Q29tcGxldGVkID0gY29tcGxldGVkLmZpbHRlcigoY3VycikgPT4gY3Vyci5pZCAhPSB0YXNrLmlkKTtcbiAgICB9XG5cbiAgICBzZXR0ZXIobmV3TGlzdCk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT0gXCJFbnRlclwiKSB7XG4gICAgICBjb25zdCBuZXdUYXNrID0ge1xuICAgICAgICBpZDogdXVpZHY0KCksXG4gICAgICAgIHRhc2tOYW1lOiBuYW1lLFxuICAgICAgICB0YXNrRGVhZGxpbmU6IGRlYWRsaW5lLFxuICAgICAgICB0YXNrRHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICBjaGVja2VkOiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoZGVhZGxpbmUgPT09ICcnKSB7XG4gICAgICAgIGxldCBuZXdTb21lZGF5ID0gc29tZWRheS5zbGljZSgpO1xuICAgICAgICBuZXdTb21lZGF5LnB1c2gobmV3VGFzayk7XG4gICAgICAgIHNldFNvbWVkYXkobmV3U29tZWRheSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdUYXNrTGlzdCA9IHRhc2tMaXN0LnNsaWNlKCk7XG4gICAgICAgIG5ld1Rhc2tMaXN0LnB1c2gobmV3VGFzayk7XG4gICAgICAgIHNldFRhc2tMaXN0KG5ld1Rhc2tMaXN0KTtcbiAgICAgIH1cbiAgICAgIHNldFRhc2tOYW1lKCcnKTtcbiAgICAgIHNldERlYWRsaW5lKCcnKTtcbiAgICAgIHNldER1cmF0aW9uKCcnKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZXZlbnQsIHNldHRlcikge1xuICAgIHNldHRlcihldmVudC50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgbGV0IGNhdGVnb3JpZXMgPSBbXTtcbiAgdGFza0xpc3QubWFwKCh0YXNrKSA9PiB7XG4gICAgY29uc3QgZGVhZGxpbmUgPSBuZXcgRGF0ZSh0YXNrLnRhc2tEZWFkbGluZSk7XG4gICAgbGV0IGRpZmZlcmVuY2UgPSBNYXRoLmZsb29yKChkZWFkbGluZS5nZXRUaW1lKCkgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgICB0YXNrLnRvZGF5ID0gTWF0aC5jZWlsKHRhc2sudGFza0R1cmF0aW9uLyh0YXNrLmRpZmZlcmVuY2UgPCAxID8gMSA6IHRhc2suZGlmZmVyZW5jZSkpO1xuICAgIGRpZmZlcmVuY2UgPSBkaWZmZXJlbmNlIC0gTWF0aC5jZWlsKHRhc2sudGFza0R1cmF0aW9uIC8gMzApO1xuICBcbiAgICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICAgIGRpZmZlcmVuY2UgPSAwO1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2F0ZWdvcmllc1tkaWZmZXJlbmNlXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjYXRlZ29yaWVzW2RpZmZlcmVuY2VdID0gW107XG4gICAgfVxuXG4gICAgY2F0ZWdvcmllc1tkaWZmZXJlbmNlXS5wdXNoKHRhc2spO1xuICB9KVxuXG4gIGZ1bmN0aW9uIHJlbmRlckxpc3QobGlzdCwgbGFiZWwsIHZpc2liaWxpdHkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8VG9nZ2xlIGxhYmVsPXtsYWJlbH0gaW5pdGlhbFZpc2libGlsaXR5PXt2aXNpYmlsaXR5fT5cbiAgICAgICAgICB7bGlzdC5tYXAoKHRhc2spID0+IDxUYXNrIGtleT17dGFzay5pZH0gdGFzaz17dGFza30gb25DaGVja2JveENsaWNrPXsoKSA9PiBoYW5kbGVDaGVja2JveENsaWNrKHRhc2spfSAvPil9XG4gICAgICAgIDwvVG9nZ2xlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0VGFza05hbWUpfSBvbktleVByZXNzPXsoZXZlbnQpID0+IGhhbmRsZUtleVByZXNzKGV2ZW50KX0gLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPXtkZWFkbGluZX0gb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hhbmdlKGV2ZW50LCBzZXREZWFkbGluZSl9IG9uS2V5UHJlc3M9eyhldmVudCkgPT4gaGFuZGxlS2V5UHJlc3MoZXZlbnQpfSAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHRhc2sgZHVyYXRpb25cIiB2YWx1ZT17ZHVyYXRpb259IG9uQ2hhbmdlPXsoZXZlbnQpID0+IGhhbmRsZUNoYW5nZShldmVudCwgc2V0RHVyYXRpb24pfSBvbktleVByZXNzPXsoZXZlbnQpID0+IGhhbmRsZUtleVByZXNzKGV2ZW50KX0gLz5cblxuICAgICAge2NvbXBsZXRlZC5sZW5ndGggPiAwID8gcmVuZGVyTGlzdChjb21wbGV0ZWQsIFwiQ29tcGxldGVkXCIsIHRydWUsIHNldENvbXBsZXRlZCkgOiBmYWxzZX1cbiAgICAgIFxuICAgICAge2NhdGVnb3JpZXMubWFwKCh0YXNrcywgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIHJlbmRlckxpc3QodGFza3MsIGAke2luZGV4fSAke2luZGV4ID09PSAxID8gXCJkYXlcIiA6IFwiZGF5c1wifSBsZWZ0ICgke3Rhc2tzLmxlbmd0aH0pYCwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiByZW5kZXJMaXN0KHRhc2tzLCBgMCBkYXlzIGxlZnQgKCR7dGFza3MubGVuZ3RofSlgLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSl9XG5cbiAgICAgIHtzb21lZGF5Lmxlbmd0aCA+IDAgPyByZW5kZXJMaXN0KHNvbWVkYXksIFwiU29tZWRheVwiLCBmYWxzZSkgOiBmYWxzZX1cblxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidjQiLCJ1dWlkdjQiLCJUYXNrIiwiVG9nZ2xlIiwic3R5bGVzIiwicmVuZGVyIiwiVG9Eb0xpc3QiLCJ0YXNrTGlzdCIsInNldFRhc2tMaXN0IiwiY29tcGxldGVkIiwic2V0Q29tcGxldGVkIiwic29tZWRheSIsInNldFNvbWVkYXkiLCJuYW1lIiwic2V0VGFza05hbWUiLCJkZWFkbGluZSIsInNldERlYWRsaW5lIiwiZHVyYXRpb24iLCJzZXREdXJhdGlvbiIsImN1cnJlbnREYXRlIiwic2V0Q3VycmVudERhdGUiLCJEYXRlIiwidGVzdCIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJuZXdEYXRlIiwiZ2V0RGF0ZSIsImNsZWFySW50ZXJ2YWwiLCJoYW5kbGVDaGVja2JveENsaWNrIiwidGFzayIsIm5ld0NvbXBsZXRlZCIsInNsaWNlIiwiY2hlY2tlZCIsIm5ld0xpc3QiLCJzZXR0ZXIiLCJ0YXNrRGVhZGxpbmUiLCJ1cGRhdGVMaXN0cyIsImxpc3QiLCJwdXNoIiwiZmlsdGVyIiwiY3VyciIsImlkIiwiaGFuZGxlS2V5UHJlc3MiLCJldmVudCIsImtleSIsIm5ld1Rhc2siLCJ0YXNrTmFtZSIsInRhc2tEdXJhdGlvbiIsIm5ld1NvbWVkYXkiLCJuZXdUYXNrTGlzdCIsImhhbmRsZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiY2F0ZWdvcmllcyIsIm1hcCIsImRpZmZlcmVuY2UiLCJNYXRoIiwiZmxvb3IiLCJnZXRUaW1lIiwidG9kYXkiLCJjZWlsIiwidW5kZWZpbmVkIiwicmVuZGVyTGlzdCIsImxhYmVsIiwidmlzaWJpbGl0eSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImluaXRpYWxWaXNpYmxpbGl0eSIsIm9uQ2hlY2tib3hDbGljayIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJvbktleVByZXNzIiwibGVuZ3RoIiwidGFza3MiLCJpbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/ToDoList.js\n"));

/***/ })

});