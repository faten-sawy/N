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

/***/ "./src/components/Sliders/NewsSlider.js":
/*!**********************************************!*\
  !*** ./src/components/Sliders/NewsSlider.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/swiper-bundle.css */ \"./node_modules/swiper/swiper-bundle.css\");\n/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/pagination */ \"./node_modules/swiper/modules/pagination/pagination.min.css\");\n/* harmony import */ var swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_pagination__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/scrollbar */ \"./node_modules/swiper/modules/scrollbar/scrollbar.min.css\");\n/* harmony import */ var swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_scrollbar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Cards_NewsCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Cards/NewsCard */ \"./src/components/Cards/NewsCard.js\");\n\n\n\n\n\n\n\n\nconst NewsSlider = (param)=>{\n    let { news  } = param;\n    swiper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].use([\n        swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,\n        swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper, {\n        className: \"items-center w-full h-full z-20\",\n        modules: [\n            swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,\n            swiper__WEBPACK_IMPORTED_MODULE_2__.Pagination\n        ],\n        navigation: true,\n        pagination: {\n            clickable: true\n        },\n        spaceBetween: 5,\n        slidesPerView: 1,\n        children: news === null || news === void 0 ? void 0 : news.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cards_NewsCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    data: items\n                }, void 0, false, {\n                    fileName: \"D:\\\\old project\\\\N\\\\src\\\\components\\\\Sliders\\\\NewsSlider.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\old project\\\\N\\\\src\\\\components\\\\Sliders\\\\NewsSlider.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"D:\\\\old project\\\\N\\\\src\\\\components\\\\Sliders\\\\NewsSlider.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_c = NewsSlider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewsSlider);\nvar _c;\n$RefreshReg$(_c, \"NewsSlider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TbGlkZXJzL05ld3NTbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ21EO0FBQ1E7QUFDekI7QUFDSDtBQUNBO0FBQ0Q7QUFFVztBQUN6QyxNQUFNTSxhQUFhLFNBQVc7UUFBVixFQUFDQyxLQUFJLEVBQUM7SUFDdEJMLGtEQUFjLENBQUM7UUFBQ0MsOENBQVVBO1FBQUNDLDhDQUFVQTtLQUFDO0lBQ3RDLHFCQUNJLDhEQUFDSixnREFBTUE7UUFDUFMsV0FBVTtRQUNWQyxTQUFTO1lBQUNQLDhDQUFVQTtZQUFFQyw4Q0FBVUE7U0FBQztRQUNqQ08sVUFBVTtRQUNWQyxZQUFZO1lBQ1JDLFdBQVcsSUFBSTtRQUNsQjtRQUNEQyxjQUFjO1FBQ2RDLGVBQWU7a0JBRVZSLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVMsR0FBRyxDQUFDLENBQUNDLHFCQUNaLDhEQUFDaEIscURBQVdBOzBCQUNSLDRFQUFDSSx1REFBUUE7b0JBQUNhLE1BQU1DOzs7Ozs7Ozs7Ozs7Ozs7O0FBT2hDO0tBdEJNYjtBQXdCTiwrREFBZUEsVUFBVUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TbGlkZXJzL05ld3NTbGlkZXIuanM/NGIxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gJ3N3aXBlci9yZWFjdCc7XHJcbmltcG9ydCBTd2lwZXJDb3JlLCB7IE5hdmlnYXRpb24sUGFnaW5hdGlvbiB9IGZyb20gJ3N3aXBlcic7XHJcbmltcG9ydCAnc3dpcGVyL3N3aXBlci1idW5kbGUuY3NzJztcclxuaW1wb3J0IFwic3dpcGVyL2Nzcy9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCBcInN3aXBlci9jc3MvcGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgXCJzd2lwZXIvY3NzL3Njcm9sbGJhclwiO1xyXG5cclxuaW1wb3J0IE5ld3NDYXJkIGZyb20gJy4uL0NhcmRzL05ld3NDYXJkJztcclxuY29uc3QgTmV3c1NsaWRlciA9ICh7bmV3c30pID0+e1xyXG4gICAgU3dpcGVyQ29yZS51c2UoW05hdmlnYXRpb24sUGFnaW5hdGlvbl0pO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxTd2lwZXJcclxuICAgICAgICBjbGFzc05hbWU9J2l0ZW1zLWNlbnRlciB3LWZ1bGwgaC1mdWxsIHotMjAnXHJcbiAgICAgICAgbW9kdWxlcz17W05hdmlnYXRpb24sIFBhZ2luYXRpb25dfVxyXG4gICAgICAgIG5hdmlnYXRpb25cclxuICAgICAgICBwYWdpbmF0aW9uPXt7XHJcbiAgICAgICAgICAgIGNsaWNrYWJsZTogdHJ1ZSwgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgIH19XHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuPXs1fVxyXG4gICAgICAgIHNsaWRlc1BlclZpZXc9ezF9ICAgXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7bmV3cz8ubWFwKChpdGVtKT0+KFxyXG4gICAgICAgICAgICA8U3dpcGVyU2xpZGU+XHJcbiAgICAgICAgICAgICAgICA8TmV3c0NhcmQgZGF0YT17aXRlbXN9Lz5cclxuICAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N3aXBlcj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5ld3NTbGlkZXIiXSwibmFtZXMiOlsiU3dpcGVyIiwiU3dpcGVyU2xpZGUiLCJTd2lwZXJDb3JlIiwiTmF2aWdhdGlvbiIsIlBhZ2luYXRpb24iLCJOZXdzQ2FyZCIsIk5ld3NTbGlkZXIiLCJuZXdzIiwidXNlIiwiY2xhc3NOYW1lIiwibW9kdWxlcyIsIm5hdmlnYXRpb24iLCJwYWdpbmF0aW9uIiwiY2xpY2thYmxlIiwic3BhY2VCZXR3ZWVuIiwic2xpZGVzUGVyVmlldyIsIm1hcCIsIml0ZW0iLCJkYXRhIiwiaXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Sliders/NewsSlider.js\n"));

/***/ })

});