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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CheckBox = (param)=>{\n    let { addFilterItem  } = param;\n    _s();\n    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleChecked = (e)=>{\n        console.log(e.target.value);\n        setIsChecked(!isChecked);\n    };\n    const passValues = (value)=>{\n        if (isChecked) {\n            addFilterItem({\n                value: value,\n                action: \"remove\"\n            });\n        } else {\n            addFilterItem({\n                value: value,\n                action: \"add\"\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"checkbox\",\n        onChange: (e)=>handleChecked(e),\n        value: \"hmada\",\n        checked: isChecked\n    }, void 0, false, {\n        fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\components\\\\CheckBox.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CheckBox, \"IqwjskjINf25CGxiIwnERX6nsyk=\");\n_c = CheckBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CheckBox);\nvar _c;\n$RefreshReg$(_c, \"CheckBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGVja0JveC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWdDO0FBR2hDLE1BQU1DLFdBQVcsU0FBb0I7UUFBbkIsRUFBQ0MsY0FBYSxFQUFDOztJQUM3QixNQUFNLENBQUNDLFdBQVVDLGFBQWEsR0FBR0osK0NBQVFBLENBQUMsS0FBSztJQUUvQyxNQUFNSyxnQkFBZ0IsQ0FBQ0MsSUFBSztRQUN4QkMsUUFBUUMsR0FBRyxDQUFDRixFQUFFRyxNQUFNLENBQUNDLEtBQUs7UUFDMUJOLGFBQWEsQ0FBQ0Q7SUFDbEI7SUFDQSxNQUFNUSxhQUFhLENBQUNELFFBQVM7UUFDekIsSUFBR1AsV0FBVTtZQUNURCxjQUFjO2dCQUFDUSxPQUFNQTtnQkFBTUUsUUFBTztZQUFRO1FBRTlDLE9BQ0k7WUFDQVYsY0FBYztnQkFBQ1EsT0FBTUE7Z0JBQU1FLFFBQU87WUFBSztRQUMzQyxDQUFDO0lBRUw7SUFHQSxxQkFDSSw4REFBQ0M7UUFBTUMsTUFBSztRQUFXQyxVQUFVLENBQUNULElBQUlELGNBQWNDO1FBQUlJLE9BQU07UUFBUU0sU0FBU2I7Ozs7OztBQUV2RjtHQXRCTUY7S0FBQUE7QUF1Qk4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hlY2tCb3guanM/NDFiNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5cclxuY29uc3QgQ2hlY2tCb3ggPSAoe2FkZEZpbHRlckl0ZW19KSA9PntcclxuICAgIGNvbnN0IFtpc0NoZWNrZWQsc2V0SXNDaGVja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoZWNrZWQgPSAoZSkgPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpXHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXNzVmFsdWVzID0gKHZhbHVlKSA9PntcclxuICAgICAgICBpZihpc0NoZWNrZWQpe1xyXG4gICAgICAgICAgICBhZGRGaWx0ZXJJdGVtKHt2YWx1ZTp2YWx1ZSxhY3Rpb246XCJyZW1vdmVcIn0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBhZGRGaWx0ZXJJdGVtKHt2YWx1ZTp2YWx1ZSxhY3Rpb246XCJhZGRcIn0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2hhbmdlPXsoZSk9PmhhbmRsZUNoZWNrZWQoZSl9IHZhbHVlPVwiaG1hZGFcIiBjaGVja2VkPXtpc0NoZWNrZWR9Lz5cclxuICAgIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBDaGVja0JveCJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNoZWNrQm94IiwiYWRkRmlsdGVySXRlbSIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsImhhbmRsZUNoZWNrZWQiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwicGFzc1ZhbHVlcyIsImFjdGlvbiIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiY2hlY2tlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CheckBox.js\n"));

/***/ })

});