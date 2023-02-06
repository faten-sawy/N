"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/allinstructors";
exports.ids = ["pages/allinstructors"];
exports.modules = {

/***/ "./src/assets/Images/instractor.jpg":
/*!******************************************!*\
  !*** ./src/assets/Images/instractor.jpg ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\"src\":\"/_next/static/media/instractor.ba79c75c.jpg\",\"height\":191,\"width\":264,\"blurDataURL\":\"/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finstractor.ba79c75c.jpg&w=8&q=70\",\"blurWidth\":8,\"blurHeight\":6});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL0ltYWdlcy9pbnN0cmFjdG9yLmpwZy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsaUVBQWUsQ0FBQyx3TUFBd00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFuLWIvLi9zcmMvYXNzZXRzL0ltYWdlcy9pbnN0cmFjdG9yLmpwZz9kNTZmIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9tZWRpYS9pbnN0cmFjdG9yLmJhNzljNzVjLmpwZ1wiLFwiaGVpZ2h0XCI6MTkxLFwid2lkdGhcIjoyNjQsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRm1lZGlhJTJGaW5zdHJhY3Rvci5iYTc5Yzc1Yy5qcGcmdz04JnE9NzBcIixcImJsdXJXaWR0aFwiOjgsXCJibHVySGVpZ2h0XCI6Nn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/Images/instractor.jpg\n");

/***/ }),

/***/ "./src/assets/utils/Hooks/useInstructos.js":
/*!*************************************************!*\
  !*** ./src/assets/utils/Hooks/useInstructos.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useInstructor\": () => (/* binding */ useInstructor)\n/* harmony export */ });\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_0__]);\nswr__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction useInstructor(limit) {\n    const fetcher = (...args)=>fetch(...args).then((res)=>res.json());\n    /*  console.log(\"in Hook\") */ /*     console.log(limit)\r\n */ return (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`https://test2.plan-b-eg.com/api/Info/GetAllInstrutors?lang=en&limit=${limit}&page=1`, fetcher);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3V0aWxzL0hvb2tzL3VzZUluc3RydWN0b3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDd0I7QUFFaEIsU0FBU0MsY0FBY0MsS0FBSyxFQUFFO0lBQ2xDLE1BQU1DLFVBQVUsQ0FBQyxHQUFHQyxPQUFTQyxTQUFTRCxNQUFNRSxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUk7SUFDakUsMkJBQTJCLEdBQzlCO0NBQ0MsR0FBTSxPQUFPUiwrQ0FBTUEsQ0FBQyxDQUFDLG9FQUFvRSxFQUFFRSxNQUFNLE9BQU8sQ0FBQyxFQUFDQztBQUV6RyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhbi1iLy4vc3JjL2Fzc2V0cy91dGlscy9Ib29rcy91c2VJbnN0cnVjdG9zLmpzPzhmMDIiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJ1xyXG5cclxuZXhwb3J0ICBmdW5jdGlvbiB1c2VJbnN0cnVjdG9yKGxpbWl0KSB7XHJcbiAgICBjb25zdCBmZXRjaGVyID0gKC4uLmFyZ3MpID0+IGZldGNoKC4uLmFyZ3MpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgIC8qICBjb25zb2xlLmxvZyhcImluIEhvb2tcIikgKi9cclxuLyogICAgIGNvbnNvbGUubG9nKGxpbWl0KVxyXG4gKi8gICAgcmV0dXJuIHVzZVNXUihgaHR0cHM6Ly90ZXN0Mi5wbGFuLWItZWcuY29tL2FwaS9JbmZvL0dldEFsbEluc3RydXRvcnM/bGFuZz1lbiZsaW1pdD0ke2xpbWl0fSZwYWdlPTFgLGZldGNoZXIpO1xyXG4gICBcclxuICB9Il0sIm5hbWVzIjpbInVzZVNXUiIsInVzZUluc3RydWN0b3IiLCJsaW1pdCIsImZldGNoZXIiLCJhcmdzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/utils/Hooks/useInstructos.js\n");

/***/ }),

/***/ "./src/pages/allinstructors/index.js":
/*!*******************************************!*\
  !*** ./src/pages/allinstructors/index.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ \"react-icons/bs\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_Images_instractor_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/Images/instractor.jpg */ \"./src/assets/Images/instractor.jpg\");\n/* harmony import */ var _assets_utils_Hooks_useInstructos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/utils/Hooks/useInstructos */ \"./src/assets/utils/Hooks/useInstructos.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__, _assets_utils_Hooks_useInstructos__WEBPACK_IMPORTED_MODULE_5__]);\n([axios__WEBPACK_IMPORTED_MODULE_1__, _assets_utils_Hooks_useInstructos__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst AllInstractors = ()=>{\n    const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(12);\n    const { data  } = (0,_assets_utils_Hooks_useInstructos__WEBPACK_IMPORTED_MODULE_5__.useInstructor)(limit);\n    const [showingData, setShowingData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(\"HI\");\n        if (data) {\n            if (limit > 12) {\n                let arr = [\n                    ...data\n                ];\n                let length = data.length;\n                arr.length = length - 6;\n                setShowingData(arr);\n            } else {\n                setShowingData(data);\n            }\n        }\n    }, [\n        data\n    ]);\n    const handleLimit = ()=>{\n        if (data) {\n            if (showingData.length === data.length) {\n                setLimit(limit + 12);\n            } else {\n                setShowingData(data);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-white h-[300px] w-full bg-[url('https://static.aviva.io/content/dam/aviva-public/gb/images/personal/illustrations/contact-pages/hero-illustration-contact-us-primary-teal-bg_2880x1620px.$common_hero_desktop$.png?$common_hero_desktop$')]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-right relative right-24 top-32 font-bold text-[30px]\",\n                    children: \"المدبين\"\n                }, void 0, false, {\n                    fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\pages\\\\allinstructors\\\\index.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\pages\\\\allinstructors\\\\index.js\",\n                lineNumber: 43,\n                columnNumber: 14\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row-reverse justify-between mt-8 px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-right\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"مدبين بلان ب\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\pages\\\\allinstructors\\\\index.js\",\n                                lineNumber: 48,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"مدبينا متخصصون ومؤهلون لتقديم العلم والمعفة المكتسب\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\pages\\\\allinstructors\\\\index.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\pages\\\\allinstructors\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleLimit,\n                        className: \"flex items-center justify-center bg-[orange] rounded-xl w-[190px] text-white p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsArrowLeft, {\n                                className: \"mr-2\"\n                            }, void 0, false, {\n                                fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\pages\\\\allinstructors\\\\index.js\",\n                                lineNumber: 51,\n                                columnNumber: 140\n                            }, undefined),\n                            \"سجل الآن\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\pages\\\\allinstructors\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\pages\\\\allinstructors\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, undefined),\n            showingData?.map((item, _, arr)=>{\n                console.log(showingData.length);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"H:\\\\Plan B\\\\plan-b\\\\src\\\\pages\\\\allinstructors\\\\index.js\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllInstractors);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYWxsaW5zdHJ1Y3RvcnMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDa0I7QUFDRDtBQUNpQjtBQUNPO0FBQ2xFLE1BQU1NLGlCQUFpQixJQUFLO0lBRXhCLE1BQUssQ0FBQ0MsT0FBTUMsU0FBUyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLEVBQUNPLEtBQUksRUFBQyxHQUFHSixnRkFBYUEsQ0FBQ0U7SUFFN0IsTUFBTSxDQUFDRyxhQUFZQyxlQUFlLEdBQUdULCtDQUFRQTtJQUU3Q0QsZ0RBQVNBLENBQUMsSUFBSTtRQUNWVyxRQUFRQyxHQUFHLENBQUM7UUFDWixJQUFHSixNQUFLO1lBQ0osSUFBR0YsUUFBTyxJQUFHO2dCQUNULElBQUlPLE1BQU07dUJBQUlMO2lCQUFLO2dCQUNuQixJQUFJTSxTQUFTTixLQUFLTSxNQUFNO2dCQUN4QkQsSUFBSUMsTUFBTSxHQUFHQSxTQUFPO2dCQUNwQkosZUFBZUc7WUFDbkIsT0FDSTtnQkFDQUgsZUFBZUY7WUFDbkIsQ0FBQztRQUVMLENBQUM7SUFDTCxHQUFFO1FBQUNBO0tBQUs7SUFFUixNQUFNTyxjQUFjLElBQUs7UUFDckIsSUFBR1AsTUFBSztZQUNKLElBQUdDLFlBQVlLLE1BQU0sS0FBS04sS0FBS00sTUFBTSxFQUFDO2dCQUNsQ1AsU0FBU0QsUUFBTTtZQUNuQixPQUNLO2dCQUNESSxlQUFlRjtZQUNuQixDQUFDO1FBRUwsQ0FBQztJQUNMO0lBRUEscUJBQ0ksOERBQUNROzswQkFDSSw4REFBQ0E7Z0JBQUlDLFdBQVU7MEJBQ1osNEVBQUNDO29CQUFFRCxXQUFVOzhCQUE0RDs7Ozs7Ozs7Ozs7MEJBRTdFLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0M7MENBQUU7Ozs7OzswQ0FDSCw4REFBQ0E7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FFUCw4REFBQ0M7d0JBQU9DLFNBQVNMO3dCQUFhRSxXQUFVOzswQ0FBbUYsOERBQUNmLHVEQUFXQTtnQ0FBQ2UsV0FBVTs7Ozs7OzRCQUFROzs7Ozs7Ozs7Ozs7O1lBSTdKUixhQUFhWSxJQUFJLENBQUNDLE1BQUtDLEdBQUVWLE1BQU07Z0JBQzVCRixRQUFRQyxHQUFHLENBQUNILFlBQVlLLE1BQU07WUFDbEM7Ozs7Ozs7QUFPWjtBQUVBLGlFQUFlVCxjQUFjQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGxhbi1iLy4vc3JjL3BhZ2VzL2FsbGluc3RydWN0b3JzL2luZGV4LmpzPzk5MzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge0JzQXJyb3dMZWZ0fSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIlxyXG5pbXBvcnQgaW5zdHJ1Y3RvciBmcm9tIFwiLi4vLi4vYXNzZXRzL0ltYWdlcy9pbnN0cmFjdG9yLmpwZ1wiXHJcbmltcG9ydCB7IHVzZUluc3RydWN0b3IgfSBmcm9tIFwiQC9hc3NldHMvdXRpbHMvSG9va3MvdXNlSW5zdHJ1Y3Rvc1wiXHJcbmNvbnN0IEFsbEluc3RyYWN0b3JzID0gKCkgPT57XHJcblxyXG4gICAgY29uc3RbbGltaXQsc2V0TGltaXRdID0gdXNlU3RhdGUoMTIpXHJcbiAgICBjb25zdCB7ZGF0YX0gPSB1c2VJbnN0cnVjdG9yKGxpbWl0KVxyXG4gICAgXHJcbiAgICBjb25zdCBbc2hvd2luZ0RhdGEsc2V0U2hvd2luZ0RhdGFdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSElcIilcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgICAgaWYobGltaXQgPjEyKXtcclxuICAgICAgICAgICAgICAgIGxldCBhcnIgPSBbLi4uZGF0YV1cclxuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBkYXRhLmxlbmd0aFxyXG4gICAgICAgICAgICAgICAgYXJyLmxlbmd0aCA9IGxlbmd0aC02XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93aW5nRGF0YShhcnIpICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93aW5nRGF0YShkYXRhKVxyXG4gICAgICAgICAgICB9ICAgICBcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxbZGF0YV0pXHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZUxpbWl0ID0gKCkgPT57XHJcbiAgICAgICAgaWYoZGF0YSl7XHJcbiAgICAgICAgICAgIGlmKHNob3dpbmdEYXRhLmxlbmd0aCA9PT0gZGF0YS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgc2V0TGltaXQobGltaXQrMTIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzZXRTaG93aW5nRGF0YShkYXRhKSAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaC1bMzAwcHhdIHctZnVsbCBiZy1bdXJsKCdodHRwczovL3N0YXRpYy5hdml2YS5pby9jb250ZW50L2RhbS9hdml2YS1wdWJsaWMvZ2IvaW1hZ2VzL3BlcnNvbmFsL2lsbHVzdHJhdGlvbnMvY29udGFjdC1wYWdlcy9oZXJvLWlsbHVzdHJhdGlvbi1jb250YWN0LXVzLXByaW1hcnktdGVhbC1iZ18yODgweDE2MjBweC4kY29tbW9uX2hlcm9fZGVza3RvcCQucG5nPyRjb21tb25faGVyb19kZXNrdG9wJCcpXVwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1yaWdodCByZWxhdGl2ZSByaWdodC0yNCB0b3AtMzIgZm9udC1ib2xkIHRleHQtWzMwcHhdXCI+2KfZhNmF2K/YqNmK2YY8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3ctcmV2ZXJzZSBqdXN0aWZ5LWJldHdlZW4gbXQtOCBweC04XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD7Zhdiv2KjZitmGINio2YTYp9mGINioPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPtmF2K/YqNmK2YbYpyDZhdiq2K7Ytdi12YjZhiDZiNmF2KTZh9mE2YjZhiDZhNiq2YLYr9mK2YUg2KfZhNi52YTZhSDZiNin2YTZhdi52YHYqSDYp9mE2YXZg9iq2LPYqDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVMaW1pdH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctW29yYW5nZV0gcm91bmRlZC14bCB3LVsxOTBweF0gdGV4dC13aGl0ZSBwLTRcIj48QnNBcnJvd0xlZnQgY2xhc3NOYW1lPVwibXItMlwiLz7Ys9is2YQg2KfZhNii2YY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB7c2hvd2luZ0RhdGE/Lm1hcCgoaXRlbSxfLGFycik9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNob3dpbmdEYXRhLmxlbmd0aClcclxuICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsbEluc3RyYWN0b3JzIl0sIm5hbWVzIjpbImF4aW9zIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJCc0Fycm93TGVmdCIsImluc3RydWN0b3IiLCJ1c2VJbnN0cnVjdG9yIiwiQWxsSW5zdHJhY3RvcnMiLCJsaW1pdCIsInNldExpbWl0IiwiZGF0YSIsInNob3dpbmdEYXRhIiwic2V0U2hvd2luZ0RhdGEiLCJjb25zb2xlIiwibG9nIiwiYXJyIiwibGVuZ3RoIiwiaGFuZGxlTGltaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiYnV0dG9uIiwib25DbGljayIsIm1hcCIsIml0ZW0iLCJfIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/allinstructors/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/allinstructors/index.js"));
module.exports = __webpack_exports__;

})();