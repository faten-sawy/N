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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CheckBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CheckBox */ \"./src/components/CheckBox.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst Filter = ()=>{\n    _s();\n    const categoryList = [\n        {\n            name: \"التصميم\"\n        },\n        {\n            name: \"اللغات\"\n        },\n        {\n            name: \"الشباكات والبرمجة\"\n        }\n    ];\n    const [filterItems, setFilterItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const addFilterItem = (data)=>{\n        switch(data.action){\n            case \"remove\":\n                {\n                    setFilterItems(filterItems.filter((item)=>item.value !== data.value));\n                    break;\n                }\n            case \"add\":\n                {\n                    setFilterItems([\n                        ...filterItems,\n                        data\n                    ]);\n                    break;\n                }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            categoryList.map((item)=>{\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CheckBox__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        addFilterItem: addFilterItem\n                    }, void 0, false, {\n                        fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\AllPaths\\\\filter.js\",\n                        lineNumber: 37,\n                        columnNumber: 21\n                    }, undefined)\n                }, item.name, false, {\n                    fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\AllPaths\\\\filter.js\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                }, undefined);\n            }),\n            console.log(filterItems)\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\AllPaths\\\\filter.js\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Filter, \"67v180JkqVkvI+W7w3+NYIue/Xc=\");\n_c = Filter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Filter);\nvar _c;\n$RefreshReg$(_c, \"Filter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbGxQYXRocy9maWx0ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDRTtBQUVsQyxNQUFNRSxTQUFTLElBQUs7O0lBQ2hCLE1BQU1DLGVBQWU7UUFDakI7WUFDSUMsTUFBSztRQUNUO1FBQ0E7WUFDSUEsTUFBSztRQUNUO1FBQ0E7WUFDSUEsTUFBSztRQUNUO0tBQ0g7SUFDRCxNQUFNLENBQUNDLGFBQVlDLGVBQWUsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUVoRCxNQUFNTyxnQkFBZ0IsQ0FBQ0MsT0FBUTtRQUMzQixPQUFRQSxLQUFLQyxNQUFNO1lBQ2YsS0FBSztnQkFBVTtvQkFDWkgsZUFBZUQsWUFBWUssTUFBTSxDQUFDLENBQUNDLE9BQU9BLEtBQUtDLEtBQUssS0FBS0osS0FBS0ksS0FBSztvQkFDbkUsS0FBTTtnQkFFVDtZQUNBLEtBQUs7Z0JBQU87b0JBQ1JOLGVBQWU7MkJBQUlEO3dCQUFZRztxQkFBSztvQkFDcEMsS0FBTTtnQkFDVjtRQUVKO0lBQ0o7SUFFQSxxQkFDSSw4REFBQ0s7O1lBQ0lWLGFBQWFXLEdBQUcsQ0FBQyxDQUFDSCxPQUFPOzhCQUN0Qiw4REFBQ0U7OEJBQ0csNEVBQUNaLGlEQUFRQTt3QkFBQ00sZUFBZUE7Ozs7OzttQkFEbkJJLEtBQUtQLElBQUk7Ozs7O1lBSXZCO1lBRUNXLFFBQVFDLEdBQUcsQ0FBQ1g7Ozs7Ozs7QUFJekI7R0ExQ01IO0tBQUFBO0FBMkNOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FsbFBhdGhzL2ZpbHRlci5qcz85NTk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IENoZWNrQm94IGZyb20gXCIuLi9DaGVja0JveFwiXHJcblxyXG5jb25zdCBGaWx0ZXIgPSAoKSA9PntcclxuICAgIGNvbnN0IGNhdGVnb3J5TGlzdCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6XCLYp9mE2KrYtdmF2YrZhVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6XCLYp9mE2YTYutin2KpcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOlwi2KfZhNi02KjYp9mD2KfYqiDZiNin2YTYqNix2YXYrNipXCJcclxuICAgICAgICB9XHJcbiAgICBdXHJcbiAgICBjb25zdCBbZmlsdGVySXRlbXMsc2V0RmlsdGVySXRlbXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgYWRkRmlsdGVySXRlbSA9IChkYXRhKSA9PntcclxuICAgICAgICBzd2l0Y2ggKGRhdGEuYWN0aW9uKXtcclxuICAgICAgICAgICAgY2FzZSBcInJlbW92ZVwiOiB7XHJcbiAgICAgICAgICAgICAgIHNldEZpbHRlckl0ZW1zKGZpbHRlckl0ZW1zLmZpbHRlcigoaXRlbSk9Pml0ZW0udmFsdWUgIT09IGRhdGEudmFsdWUpKVxyXG4gICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBcImFkZFwiOiB7XHJcbiAgICAgICAgICAgICAgICBzZXRGaWx0ZXJJdGVtcyhbLi4uZmlsdGVySXRlbXMsZGF0YV0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjYXRlZ29yeUxpc3QubWFwKChpdGVtKT0+e1xyXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoZWNrQm94IGFkZEZpbHRlckl0ZW09e2FkZEZpbHRlckl0ZW19Lz4gXHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2NvbnNvbGUubG9nKGZpbHRlckl0ZW1zKX1cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ2hlY2tCb3giLCJGaWx0ZXIiLCJjYXRlZ29yeUxpc3QiLCJuYW1lIiwiZmlsdGVySXRlbXMiLCJzZXRGaWx0ZXJJdGVtcyIsImFkZEZpbHRlckl0ZW0iLCJkYXRhIiwiYWN0aW9uIiwiZmlsdGVyIiwiaXRlbSIsInZhbHVlIiwiZGl2IiwibWFwIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AllPaths/filter.js\n"));

/***/ })

});