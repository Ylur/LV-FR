"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/receipt/page",{

/***/ "(app-pages-browser)/./src/app/receipt/page.tsx":
/*!**********************************!*\
  !*** ./src/app/receipt/page.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ReceiptPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ReceiptPage() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const email = searchParams.get(\"email\");\n    const date = searchParams.get(\"date\");\n    const time = searchParams.get(\"time\");\n    const people = Number(searchParams.get(\"people\")) || 1;\n    const dishId = searchParams.get(\"dishId\");\n    const dishPricePerPerson = 20; // TODO skoða verðin\n    const selectedDrinks = [\n        // Normally you'd extract these from query params or global state.\n        // Hard-kóðað í bili\n        {\n            strDrink: \"Margarita\",\n            quantity: 2,\n            price: 8\n        },\n        {\n            strDrink: \"Mojito\",\n            quantity: 1,\n            price: 10\n        }\n    ];\n    const dishTotal = dishPricePerPerson * people;\n    const drinksTotal = selectedDrinks.reduce((sum, d)=>sum + d.price * d.quantity, 0);\n    const total = dishTotal + drinksTotal;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold text-center mb-6\",\n                children: \"Receipt\"\n            }, void 0, false, {\n                fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-md mx-auto bg-white p-4 rounded shadow\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-bold mb-4\",\n                        children: \"Overview\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-2\",\n                        children: [\n                            \"Email: \",\n                            email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-2\",\n                        children: [\n                            \"Date: \",\n                            date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-2\",\n                        children: [\n                            \"Time: \",\n                            time\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-2\",\n                        children: [\n                            \"People: \",\n                            people\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"my-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-lg font-bold mb-2\",\n                        children: \"Selected Dish:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: dishId ? \"Dish ID: \".concat(dishId) : \"No dish selected\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Price per person: $\",\n                            dishPricePerPerson\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Dish Total: $\",\n                            dishTotal\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"my-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-lg font-bold mb-2\",\n                        children: \"Selected Drinks:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    selectedDrinks.map((d, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-2\",\n                            children: [\n                                d.strDrink,\n                                \" x \",\n                                d.quantity,\n                                \" = $\",\n                                d.price * d.quantity\n                            ]\n                        }, i, true, {\n                            fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-bold\",\n                        children: [\n                            \"Drinks Total: $\",\n                            drinksTotal\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                        className: \"my-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-bold\",\n                        children: [\n                            \"Total: $\",\n                            total\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center mt-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>router.push(\"/\"),\n                            className: \"bg-green-500 text-white px-4 py-2 rounded\",\n                            children: \"Back to Home\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/receipt/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(ReceiptPage, \"+JhyKI/TCt/o3i650dm/GAytAZk=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ReceiptPage;\nvar _c;\n$RefreshReg$(_c, \"ReceiptPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVjZWlwdC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ1U7QUFFOUMsU0FBU0c7O0lBQ3RCLE1BQU1DLGVBQWVILGdFQUFlQTtJQUNwQyxNQUFNSSxTQUFTSCwwREFBU0E7SUFFeEIsTUFBTUksUUFBUUYsYUFBYUcsR0FBRyxDQUFDO0lBQy9CLE1BQU1DLE9BQU9KLGFBQWFHLEdBQUcsQ0FBQztJQUM5QixNQUFNRSxPQUFPTCxhQUFhRyxHQUFHLENBQUM7SUFDOUIsTUFBTUcsU0FBU0MsT0FBT1AsYUFBYUcsR0FBRyxDQUFDLGNBQWM7SUFDckQsTUFBTUssU0FBU1IsYUFBYUcsR0FBRyxDQUFDO0lBR2hDLE1BQU1NLHFCQUFxQixJQUFJLG9CQUFvQjtJQUNuRCxNQUFNQyxpQkFBaUI7UUFDckIsa0VBQWtFO1FBQ2xFLG9CQUFvQjtRQUNwQjtZQUFFQyxVQUFVO1lBQWFDLFVBQVU7WUFBR0MsT0FBTztRQUFFO1FBQy9DO1lBQUVGLFVBQVU7WUFBVUMsVUFBVTtZQUFHQyxPQUFPO1FBQUc7S0FDOUM7SUFFRCxNQUFNQyxZQUFZTCxxQkFBcUJIO0lBQ3ZDLE1BQU1TLGNBQWNMLGVBQWVNLE1BQU0sQ0FBQyxDQUFDQyxLQUFLQyxJQUFNRCxNQUFNQyxFQUFFTCxLQUFLLEdBQUdLLEVBQUVOLFFBQVEsRUFBRTtJQUNsRixNQUFNTyxRQUFRTCxZQUFZQztJQUUxQixxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFzQzs7Ozs7OzBCQUVwRCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRTt3QkFBR0YsV0FBVTtrQ0FBeUI7Ozs7OztrQ0FDdkMsOERBQUNHO3dCQUFFSCxXQUFVOzs0QkFBTzs0QkFBUW5COzs7Ozs7O2tDQUM1Qiw4REFBQ3NCO3dCQUFFSCxXQUFVOzs0QkFBTzs0QkFBT2pCOzs7Ozs7O2tDQUMzQiw4REFBQ29CO3dCQUFFSCxXQUFVOzs0QkFBTzs0QkFBT2hCOzs7Ozs7O2tDQUMzQiw4REFBQ21CO3dCQUFFSCxXQUFVOzs0QkFBTzs0QkFBU2Y7Ozs7Ozs7a0NBRTdCLDhEQUFDbUI7d0JBQUdKLFdBQVU7Ozs7OztrQ0FFZCw4REFBQ0s7d0JBQUdMLFdBQVU7a0NBQXlCOzs7Ozs7a0NBQ3ZDLDhEQUFDRztrQ0FBR2hCLFNBQVMsWUFBbUIsT0FBUEEsVUFBVzs7Ozs7O2tDQUNwQyw4REFBQ2dCOzs0QkFBRTs0QkFBb0JmOzs7Ozs7O2tDQUN2Qiw4REFBQ2U7OzRCQUFFOzRCQUFjVjs7Ozs7OztrQ0FFakIsOERBQUNXO3dCQUFHSixXQUFVOzs7Ozs7a0NBRWQsOERBQUNLO3dCQUFHTCxXQUFVO2tDQUF5Qjs7Ozs7O29CQUN0Q1gsZUFBZWlCLEdBQUcsQ0FBQyxDQUFDVCxHQUFHVSxrQkFDdEIsOERBQUNSOzRCQUFZQyxXQUFVOztnQ0FDcEJILEVBQUVQLFFBQVE7Z0NBQUM7Z0NBQUlPLEVBQUVOLFFBQVE7Z0NBQUM7Z0NBQUtNLEVBQUVMLEtBQUssR0FBR0ssRUFBRU4sUUFBUTs7MkJBRDVDZ0I7Ozs7O2tDQUlaLDhEQUFDSjt3QkFBRUgsV0FBVTs7NEJBQVk7NEJBQWdCTjs7Ozs7OztrQ0FFekMsOERBQUNVO3dCQUFHSixXQUFVOzs7Ozs7a0NBRWQsOERBQUNFO3dCQUFHRixXQUFVOzs0QkFBb0I7NEJBQVNGOzs7Ozs7O2tDQUUzQyw4REFBQ0M7d0JBQUlDLFdBQVU7a0NBRWIsNEVBQUNROzRCQUNDQyxTQUFTLElBQU03QixPQUFPOEIsSUFBSSxDQUFDOzRCQUMzQlYsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQW5Fd0J0Qjs7UUFDREYsNERBQWVBO1FBQ3JCQyxzREFBU0E7OztLQUZGQyIsInNvdXJjZXMiOlsiL1VzZXJzL2luZ2loYXJhbGRzL05leHQvTG9rYXZlcmtlZm5pL0xva2F2ZXJrZWZuaS9mcmFtZW5kaS9zcmMvYXBwL3JlY2VpcHQvcGFnZS50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjZWlwdFBhZ2UoKSB7XG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgXG4gIGNvbnN0IGVtYWlsID0gc2VhcmNoUGFyYW1zLmdldChcImVtYWlsXCIpO1xuICBjb25zdCBkYXRlID0gc2VhcmNoUGFyYW1zLmdldChcImRhdGVcIik7XG4gIGNvbnN0IHRpbWUgPSBzZWFyY2hQYXJhbXMuZ2V0KFwidGltZVwiKTtcbiAgY29uc3QgcGVvcGxlID0gTnVtYmVyKHNlYXJjaFBhcmFtcy5nZXQoXCJwZW9wbGVcIikpIHx8IDE7XG4gIGNvbnN0IGRpc2hJZCA9IHNlYXJjaFBhcmFtcy5nZXQoXCJkaXNoSWRcIik7XG4gIFxuIFxuICBjb25zdCBkaXNoUHJpY2VQZXJQZXJzb24gPSAyMDsgLy8gVE9ETyBza2/DsGEgdmVyw7BpblxuICBjb25zdCBzZWxlY3RlZERyaW5rcyA9IFtcbiAgICAvLyBOb3JtYWxseSB5b3UnZCBleHRyYWN0IHRoZXNlIGZyb20gcXVlcnkgcGFyYW1zIG9yIGdsb2JhbCBzdGF0ZS5cbiAgICAvLyBIYXJkLWvDs8OwYcOwIMOtIGJpbGlcbiAgICB7IHN0ckRyaW5rOiBcIk1hcmdhcml0YVwiLCBxdWFudGl0eTogMiwgcHJpY2U6IDggfSxcbiAgICB7IHN0ckRyaW5rOiBcIk1vaml0b1wiLCBxdWFudGl0eTogMSwgcHJpY2U6IDEwIH0sXG4gIF07XG5cbiAgY29uc3QgZGlzaFRvdGFsID0gZGlzaFByaWNlUGVyUGVyc29uICogcGVvcGxlO1xuICBjb25zdCBkcmlua3NUb3RhbCA9IHNlbGVjdGVkRHJpbmtzLnJlZHVjZSgoc3VtLCBkKSA9PiBzdW0gKyBkLnByaWNlICogZC5xdWFudGl0eSwgMCk7XG4gIGNvbnN0IHRvdGFsID0gZGlzaFRvdGFsICsgZHJpbmtzVG90YWw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHAtOFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlciBtYi02XCI+UmVjZWlwdDwvaDE+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctbWQgbXgtYXV0byBiZy13aGl0ZSBwLTQgcm91bmRlZCBzaGFkb3dcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIG1iLTRcIj5PdmVydmlldzwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj5FbWFpbDoge2VtYWlsfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPkRhdGU6IHtkYXRlfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPlRpbWU6IHt0aW1lfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPlBlb3BsZToge3Blb3BsZX08L3A+XG4gICAgICAgIFxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktNFwiIC8+XG4gICAgICAgIFxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgbWItMlwiPlNlbGVjdGVkIERpc2g6PC9oMz5cbiAgICAgICAgPHA+e2Rpc2hJZCA/IGBEaXNoIElEOiAke2Rpc2hJZH1gIDogXCJObyBkaXNoIHNlbGVjdGVkXCJ9PC9wPlxuICAgICAgICA8cD5QcmljZSBwZXIgcGVyc29uOiAke2Rpc2hQcmljZVBlclBlcnNvbn08L3A+XG4gICAgICAgIDxwPkRpc2ggVG90YWw6ICR7ZGlzaFRvdGFsfTwvcD5cblxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktNFwiIC8+XG5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkIG1iLTJcIj5TZWxlY3RlZCBEcmlua3M6PC9oMz5cbiAgICAgICAge3NlbGVjdGVkRHJpbmtzLm1hcCgoZCwgaSkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICB7ZC5zdHJEcmlua30geCB7ZC5xdWFudGl0eX0gPSAke2QucHJpY2UgKiBkLnF1YW50aXR5fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+RHJpbmtzIFRvdGFsOiAke2RyaW5rc1RvdGFsfTwvcD5cblxuICAgICAgICA8aHIgY2xhc3NOYW1lPVwibXktNFwiIC8+XG5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkXCI+VG90YWw6ICR7dG90YWx9PC9oMj5cbiAgICAgICAgXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtNFwiPlxuICAgICAgICAgIHsvKiBJbiBhIHJlYWwgZmxvdywgeW91IG1pZ2h0IGhhdmUgYSBidXR0b24gdG8gY29tcGxldGUgdGhlIG9yZGVyIG9yIGdvIGhvbWUgKi99XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEJhY2sgdG8gSG9tZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU2VhcmNoUGFyYW1zIiwidXNlUm91dGVyIiwiUmVjZWlwdFBhZ2UiLCJzZWFyY2hQYXJhbXMiLCJyb3V0ZXIiLCJlbWFpbCIsImdldCIsImRhdGUiLCJ0aW1lIiwicGVvcGxlIiwiTnVtYmVyIiwiZGlzaElkIiwiZGlzaFByaWNlUGVyUGVyc29uIiwic2VsZWN0ZWREcmlua3MiLCJzdHJEcmluayIsInF1YW50aXR5IiwicHJpY2UiLCJkaXNoVG90YWwiLCJkcmlua3NUb3RhbCIsInJlZHVjZSIsInN1bSIsImQiLCJ0b3RhbCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJwIiwiaHIiLCJoMyIsIm1hcCIsImkiLCJidXR0b24iLCJvbkNsaWNrIiwicHVzaCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/receipt/page.tsx\n"));

/***/ })

});