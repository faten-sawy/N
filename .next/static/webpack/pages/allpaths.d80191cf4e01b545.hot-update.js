"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/allpaths",{

/***/ "./src/components/AllPaths/filter.js":
/*!*******************************************!*\
  !*** ./src/components/AllPaths/filter.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CheckBox */ \"./src/components/CheckBox.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Filter = ()=>{\n    _s();\n    const categoryList = [\n        {\n            name: \"التصميم\"\n        },\n        {\n            name: \"اللغات\"\n        },\n        {\n            name: \"الشباكات والبرمجة\"\n        }\n    ];\n    const period = [\n        {\n            name: \"ألكل\"\n        },\n        {\n            name: \"دورة قصيرة(ساعة-ساعتين)\"\n        },\n        {\n            name: \"دورة متوسطة(10-20)ساعة\"\n        }\n    ];\n    const [filterItems, setFilterItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addFilterItem = (data)=>{\n        switch(data.action){\n            case \"remove\":\n                {\n                    setFilterItems(filterItems.filter((item)=>item.value !== data.value));\n                    break;\n                }\n            case \"add\":\n                {\n                    setFilterItems([\n                        ...filterItems,\n                        data\n                    ]);\n                    break;\n                }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: categoryList.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"list-none mr-2\",\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\AllPaths\\\\filter.js\",\n                                lineNumber: 49,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                addFilterItem: addFilterItem,\n                                value: item.name\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\AllPaths\\\\filter.js\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, item.name, true, {\n                        fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\AllPaths\\\\filter.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\AllPaths\\\\filter.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: period.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"list-none mr-2\",\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\AllPaths\\\\filter.js\",\n                                lineNumber: 59,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                addFilterItem: addFilterItem,\n                                value: item.name\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\AllPaths\\\\filter.js\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, item.name, true, {\n                        fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\AllPaths\\\\filter.js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\AllPaths\\\\filter.js\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, undefined),\n            console.log(filterItems)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\AllPaths\\\\filter.js\",\n        lineNumber: 45,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Filter, \"67v180JkqVkvI+W7w3+NYIue/Xc=\");\n_c = Filter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Filter);\nvar _c;\n$RefreshReg$(_c, \"Filter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbGxQYXRocy9maWx0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDRTtBQUVsQyxNQUFNRSxTQUFTLElBQUs7O0lBQ2hCLE1BQU1DLGVBQWU7UUFDakI7WUFDSUMsTUFBSztRQUNUO1FBQ0E7WUFDSUEsTUFBSztRQUNUO1FBQ0E7WUFDSUEsTUFBSztRQUNUO0tBQ0g7SUFDRCxNQUFNQyxTQUFTO1FBQ1g7WUFDSUQsTUFBSztRQUNUO1FBQ0E7WUFDSUEsTUFBSztRQUNUO1FBQ0E7WUFDSUEsTUFBSztRQUNUO0tBQ0g7SUFDRCxNQUFNLENBQUNFLGFBQVlDLGVBQWUsR0FBR1AsK0NBQVFBLENBQUMsRUFBRTtJQUVoRCxNQUFNUSxnQkFBZ0IsQ0FBQ0MsT0FBUTtRQUMzQixPQUFRQSxLQUFLQyxNQUFNO1lBQ2YsS0FBSztnQkFBVTtvQkFDWkgsZUFBZUQsWUFBWUssTUFBTSxDQUFDLENBQUNDLE9BQU9BLEtBQUtDLEtBQUssS0FBS0osS0FBS0ksS0FBSztvQkFDbkUsS0FBTTtnQkFFVDtZQUNBLEtBQUs7Z0JBQU87b0JBQ1JOLGVBQWU7MkJBQUlEO3dCQUFZRztxQkFBSztvQkFDcEMsS0FBTTtnQkFDVjtRQUVKO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEOzBCQUNJWCxhQUFhYSxHQUFHLENBQUMsQ0FBQ0oscUJBQ2YsOERBQUNFO3dCQUFvQkMsV0FBVTs7MENBQzNCLDhEQUFDRTtnQ0FBR0YsV0FBVTswQ0FBa0JILEtBQUtSLElBQUk7Ozs7OzswQ0FDekMsOERBQUNILGlEQUFRQTtnQ0FBQ08sZUFBZUE7Z0NBQWVLLE9BQU9ELEtBQUtSLElBQUk7Ozs7Ozs7dUJBRmxEUSxLQUFLUixJQUFJOzs7Ozs7Ozs7OzBCQVEzQiw4REFBQ1U7MEJBQ0lULE9BQU9XLEdBQUcsQ0FBQyxDQUFDSixxQkFDVCw4REFBQ0U7d0JBQW9CQyxXQUFVOzswQ0FDM0IsOERBQUNFO2dDQUFHRixXQUFVOzBDQUFrQkgsS0FBS1IsSUFBSTs7Ozs7OzBDQUN6Qyw4REFBQ0gsaURBQVFBO2dDQUFDTyxlQUFlQTtnQ0FBZUssT0FBT0QsS0FBS1IsSUFBSTs7Ozs7Ozt1QkFGbERRLEtBQUtSLElBQUk7Ozs7Ozs7Ozs7WUFVM0JjLFFBQVFDLEdBQUcsQ0FBQ2I7Ozs7Ozs7QUFJeEI7R0FwRU1KO0tBQUFBO0FBcUVOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FsbFBhdGhzL2ZpbHRlci5qcz85NTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IENoZWNrQm94IGZyb20gXCIuLi9DaGVja0JveFwiXHJcblxyXG5jb25zdCBGaWx0ZXIgPSAoKSA9PntcclxuICAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6XCLYp9mE2KrYtdmF2YrZhVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6XCLYp9mE2YTYutin2KpcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOlwi2KfZhNi02KjYp9mD2KfYqiDZiNin2YTYqNix2YXYrNipXCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcbiAgICBjb25zdCBwZXJpb2QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOlwi2KPZhNmD2YRcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOlwi2K/ZiNix2Kkg2YLYtdmK2LHYqSjYs9in2LnYqS3Ys9in2LnYqtmK2YYpXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTpcItiv2YjYsdipINmF2KrZiNiz2LfYqSgxMC0yMCnYs9in2LnYqVwiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gICAgY29uc3QgW2ZpbHRlckl0ZW1zLHNldEZpbHRlckl0ZW1zXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IGFkZEZpbHRlckl0ZW0gPSAoZGF0YSkgPT57XHJcbiAgICAgICAgc3dpdGNoIChkYXRhLmFjdGlvbil7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyZW1vdmVcIjoge1xyXG4gICAgICAgICAgICAgICBzZXRGaWx0ZXJJdGVtcyhmaWx0ZXJJdGVtcy5maWx0ZXIoKGl0ZW0pPT5pdGVtLnZhbHVlICE9PSBkYXRhLnZhbHVlKSlcclxuICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJhZGRcIjoge1xyXG4gICAgICAgICAgICAgICAgc2V0RmlsdGVySXRlbXMoWy4uLmZpbHRlckl0ZW1zLGRhdGFdKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtjYXRlZ29yeUxpc3QubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLm5hbWV9IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3Qtbm9uZSBtci0yXCI+e2l0ZW0ubmFtZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tCb3ggYWRkRmlsdGVySXRlbT17YWRkRmlsdGVySXRlbX0gdmFsdWU9e2l0ZW0ubmFtZX0vPiBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge3BlcmlvZC5tYXAoKGl0ZW0pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubmFtZX0gY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ub25lIG1yLTJcIj57aXRlbS5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja0JveCBhZGRGaWx0ZXJJdGVtPXthZGRGaWx0ZXJJdGVtfSB2YWx1ZT17aXRlbS5uYW1lfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAge2NvbnNvbGUubG9nKGZpbHRlckl0ZW1zKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2hlY2tCb3giLCJGaWx0ZXIiLCJjYXRlZ29yeUxpc3QiLCJuYW1lIiwicGVyaW9kIiwiZmlsdGVySXRlbXMiLCJzZXRGaWx0ZXJJdGVtcyIsImFkZEZpbHRlckl0ZW0iLCJkYXRhIiwiYWN0aW9uIiwiZmlsdGVyIiwiaXRlbSIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwibGkiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AllPaths/filter.js\n"));

/***/ })

});