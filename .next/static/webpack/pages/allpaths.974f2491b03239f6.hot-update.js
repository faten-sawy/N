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

/***/ "./src/components/CheckBox.js":
/*!************************************!*\
  !*** ./src/components/CheckBox.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CheckBox = (param)=>{\n    let { addFilterItem , value , clearFlag  } = param;\n    _s();\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (clearFlag) {\n            setIsChecked(false);\n        }\n    }, [\n        clearFlag\n    ]);\n    const handleChecked = (e)=>{\n        passValues(e.target.value);\n        setIsChecked(!isChecked);\n    };\n    const passValues = (value)=>{\n        isChecked ? addFilterItem({\n            value: value,\n            action: \"remove\"\n        }) : addFilterItem({\n            value: value,\n            action: \"add\"\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"checkbox\",\n        onChange: (e)=>handleChecked(e),\n        value: value,\n        checked: isChecked\n    }, void 0, false, {\n        fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\CheckBox.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CheckBox, \"gWoKSrOKDofDsULlKXPJTKCgn/4=\");\n_c = CheckBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckBox);\nvar _c;\n$RefreshReg$(_c, \"CheckBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGVja0JveC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBRzNDLE1BQU1FLFdBQVcsU0FBb0M7UUFBbkMsRUFBQ0MsY0FBYSxFQUFDQyxNQUFLLEVBQUNDLFVBQVMsRUFBQzs7SUFDN0MsTUFBTSxDQUFDQyxXQUFVQyxhQUFhLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUs7SUFFL0NELGdEQUFTQSxDQUFDLElBQUk7UUFDVixJQUFHSyxXQUFVO1lBQ1RFLGFBQWEsS0FBSztRQUN0QixDQUFDO0lBRUwsR0FBRTtRQUFDRjtLQUFVO0lBRWIsTUFBTUcsZ0JBQWdCLENBQUNDLElBQUs7UUFDeEJDLFdBQVdELEVBQUVFLE1BQU0sQ0FBQ1AsS0FBSztRQUN6QkcsYUFBYSxDQUFDRDtJQUNsQjtJQUNBLE1BQU1JLGFBQWEsQ0FBQ04sUUFBUztRQUN6QkUsWUFBWUgsY0FBYztZQUFDQyxPQUFNQTtZQUFNUSxRQUFPO1FBQVEsS0FBS1QsY0FBYztZQUFDQyxPQUFNQTtZQUFNUSxRQUFPO1FBQUssRUFBRTtJQUN4RztJQUdBLHFCQUNJLDhEQUFDQztRQUFNQyxNQUFLO1FBQVdDLFVBQVUsQ0FBQ04sSUFBSUQsY0FBY0M7UUFBSUwsT0FBT0E7UUFBT1ksU0FBU1Y7Ozs7OztBQUV2RjtHQXRCTUo7S0FBQUE7QUF1Qk4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tCb3guanM/NDFiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuXHJcblxyXG5jb25zdCBDaGVja0JveCA9ICh7YWRkRmlsdGVySXRlbSx2YWx1ZSxjbGVhckZsYWd9KSA9PntcclxuICAgIGNvbnN0IFtpc0NoZWNrZWQsc2V0SXNDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGlmKGNsZWFyRmxhZyl7XHJcbiAgICAgICAgICAgIHNldElzQ2hlY2tlZChmYWxzZSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxbY2xlYXJGbGFnXSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGVja2VkID0gKGUpID0+e1xyXG4gICAgICAgIHBhc3NWYWx1ZXMoZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXNzVmFsdWVzID0gKHZhbHVlKSA9PntcclxuICAgICAgICBpc0NoZWNrZWQgPyBhZGRGaWx0ZXJJdGVtKHt2YWx1ZTp2YWx1ZSxhY3Rpb246XCJyZW1vdmVcIn0pIDogYWRkRmlsdGVySXRlbSh7dmFsdWU6dmFsdWUsYWN0aW9uOlwiYWRkXCJ9KSAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgb25DaGFuZ2U9eyhlKT0+aGFuZGxlQ2hlY2tlZChlKX0gdmFsdWU9e3ZhbHVlfSBjaGVja2VkPXtpc0NoZWNrZWR9IC8+XHJcbiAgICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tCb3giXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDaGVja0JveCIsImFkZEZpbHRlckl0ZW0iLCJ2YWx1ZSIsImNsZWFyRmxhZyIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsImhhbmRsZUNoZWNrZWQiLCJlIiwicGFzc1ZhbHVlcyIsInRhcmdldCIsImFjdGlvbiIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiY2hlY2tlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CheckBox.js\n"));

/***/ })

});