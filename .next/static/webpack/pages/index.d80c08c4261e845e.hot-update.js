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

/***/ "./src/components/Cards/NewsCard.js":
/*!******************************************!*\
  !*** ./src/components/Cards/NewsCard.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var public_assets_utils_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! public/assets/utils/environment */ \"./public/assets/utils/environment.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_assets_Images_Slider_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../public/assets/Images/Slider.png */ \"./public/assets/Images/Slider.png\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst NewsCard = (param)=>{\n    let { data  } = param;\n    /*  data ?`url(${URL.IMAGE_PATH + data.photourl})`:  */ console.log(_public_assets_Images_Slider_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src, typeof _public_assets_Images_Slider_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    const bgStyle = {\n        background: data ? \"url(\".concat(public_assets_utils_environment__WEBPACK_IMPORTED_MODULE_1__.URL.IMAGE_PATH + data.photourl, \")\") : _public_assets_Images_Slider_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        backgroundRepeat: \"no-repeat\",\n        backgroundSize: \"cover\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-[100vh] px-8  \".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().test), \" news-slider bg-no-repeat relative\"),\n        style: bgStyle,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            className: \"text-[52px] font-bold\",\n            children: \"Build Skills With Experts Anytime Anywhere\"\n        }, void 0, false, {\n            fileName: \"D:\\\\old project\\\\N\\\\src\\\\components\\\\Cards\\\\NewsCard.js\",\n            lineNumber: 16,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\old project\\\\N\\\\src\\\\components\\\\Cards\\\\NewsCard.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n_c = NewsCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsCard);\nvar _c;\n$RefreshReg$(_c, \"NewsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkcy9OZXdzQ2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXFEO0FBQ0o7QUFDbUI7QUFDdEM7QUFFOUIsTUFBTUksV0FBVyxTQUFXO1FBQVYsRUFBQ0MsS0FBSSxFQUFDO0lBQ3hCLHFEQUFxRCxHQUNyREMsUUFBUUMsR0FBRyxDQUFDTCw0RUFBaUIsRUFBQyxPQUFPQSx3RUFBYUE7SUFDOUMsTUFBTU8sVUFBVTtRQUNaQyxZQUFjTCxPQUFNLE9BQXNDLE9BQS9CTCwyRUFBYyxHQUFHSyxLQUFLTyxRQUFRLEVBQUMsT0FBR1Ysd0VBQWE7UUFDMUVXLGtCQUFpQjtRQUNqQkMsZ0JBQWU7SUFDbkI7SUFDQSxxQkFDSSw4REFBQ0M7UUFBSUMsV0FBVyxtQkFBK0IsT0FBWmYscUVBQVcsRUFBQztRQUE2RmlCLE9BQU9UO2tCQUMvSSw0RUFBQ1U7WUFBR0gsV0FBVTtzQkFBeUI7Ozs7Ozs7Ozs7O0FBTW5EO0tBaEJNWjtBQWtCTiwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DYXJkcy9OZXdzQ2FyZC5qcz9iMzVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVSTCB9IGZyb20gXCJwdWJsaWMvYXNzZXRzL3V0aWxzL2Vudmlyb25tZW50XCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBzbGlkZXJEZWZhdWx0IGZyb20gXCIuLi8uLi8uLi9wdWJsaWMvYXNzZXRzL0ltYWdlcy9TbGlkZXIucG5nXCJcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCJcclxuXHJcbmNvbnN0IE5ld3NDYXJkID0gKHtkYXRhfSkgPT57XHJcbi8qICBkYXRhID9gdXJsKCR7VVJMLklNQUdFX1BBVEggKyBkYXRhLnBob3RvdXJsfSlgOiAgKi9cclxuY29uc29sZS5sb2coc2xpZGVyRGVmYXVsdC5zcmMsdHlwZW9mKHNsaWRlckRlZmF1bHQpKVxyXG4gICAgY29uc3QgYmdTdHlsZSA9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kIDooIGRhdGEgP2B1cmwoJHtVUkwuSU1BR0VfUEFUSCArIGRhdGEucGhvdG91cmx9KWA6c2xpZGVyRGVmYXVsdCkgLFxyXG4gICAgICAgIGJhY2tncm91bmRSZXBlYXQ6XCJuby1yZXBlYXRcIixcclxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTpcImNvdmVyXCJcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGgtWzEwMHZoXSBweC04ICAke3N0eWxlcy50ZXN0fSBuZXdzLXNsaWRlciBiZy1uby1yZXBlYXQgcmVsYXRpdmVgfSAvKiBzdHlsZT17e2JhY2tncm91bmRJbWFnZTpgdXJsKCR7c2xpZGVyRGVmYXVsdH0pYH19ICovIHN0eWxlPXtiZ1N0eWxlfSA+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LVs1MnB4XSAgZm9udC1ib2xkXCI+QnVpbGQgU2tpbGxzIFdpdGggRXhwZXJ0c1xyXG4gICAgICAgICAgICBBbnl0aW1lIEFueXdoZXJlPC9oMT5cclxuICAgICAgICAgICAgey8qIDxJbWFnZSBzcmM9e3NsaWRlckRlZmF1bHR9Lz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NDYXJkIl0sIm5hbWVzIjpbIlVSTCIsInN0eWxlcyIsInNsaWRlckRlZmF1bHQiLCJJbWFnZSIsIk5ld3NDYXJkIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzcmMiLCJiZ1N0eWxlIiwiYmFja2dyb3VuZCIsIklNQUdFX1BBVEgiLCJwaG90b3VybCIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImRpdiIsImNsYXNzTmFtZSIsInRlc3QiLCJzdHlsZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Cards/NewsCard.js\n"));

/***/ })

});