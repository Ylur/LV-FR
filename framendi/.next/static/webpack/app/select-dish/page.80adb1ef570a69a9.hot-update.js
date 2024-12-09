"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/select-dish/page",{

/***/ "(app-pages-browser)/./src/app/select-dish/page.tsx":
/*!**************************************!*\
  !*** ./src/app/select-dish/page.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ SelectDishPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction SelectDishPage() {\n    _s();\n    const [dishes, setDishes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams)();\n    const email = searchParams.get(\"email\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"SelectDishPage.useEffect\": ()=>{\n            async function fetchRandomDishes() {\n                const fetchedDishes = [];\n                for(let i = 0; i < 3; i++){\n                    const res = await fetch(\"https://themealdb.com/api/json/v1/1/random.php\");\n                    const data = await res.json();\n                    if (data.meals && data.meals.length > 0) {\n                        fetchedDishes.push(data.meals[0]);\n                    }\n                }\n                setDishes(fetchedDishes);\n            }\n            fetchRandomDishes();\n        }\n    }[\"SelectDishPage.useEffect\"], []);\n    function toggleDish(dish) {\n        setSelected((prev)=>{\n            const existing = prev.find((d)=>d.idMeal === dish.idMeal);\n            if (existing) {\n                // If already selected, remove it\n                return prev.filter((d)=>d.idMeal !== dish.idMeal);\n            } else {\n                // Add with quantity 1 by default\n                return [\n                    ...prev,\n                    {\n                        idMeal: dish.idMeal,\n                        strMeal: dish.strMeal,\n                        quantity: 1\n                    }\n                ];\n            }\n        });\n    }\n    function updateQuantity(dishId, quantity) {\n        setSelected((prev)=>prev.map((d)=>d.idMeal === dishId ? {\n                    ...d,\n                    quantity\n                } : d));\n    }\n    function handleNext() {\n        if (selected.length === 0) {\n            alert(\"Please select at least one dish.\");\n            return;\n        }\n        const params = new URLSearchParams();\n        if (email) params.set(\"email\", email);\n        // Pass selected dishes as a query parameter (encode as JSON string)\n        const selectedDishes = selected.map((dish)=>({\n                idMeal: dish.idMeal,\n                strMeal: dish.strMeal,\n                quantity: dish.quantity\n            }));\n        params.set(\"dishes\", JSON.stringify(selectedDishes));\n        router.push(\"/select-drinks?\".concat(params.toString()));\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto p-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold text-center mb-6\",\n                children: \"Select Dish\"\n            }, void 0, false, {\n                fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/select-dish/page.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            dishes.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Loading dishes...\"\n            }, void 0, false, {\n                fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/select-dish/page.tsx\",\n                lineNumber: 86,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4\",\n                children: dishes.map((dish)=>{\n                    const isSelected = selected.some((d)=>d.idMeal === dish.idMeal);\n                    const selectedDish = selected.find((d)=>d.idMeal === dish.idMeal);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-4 bg-black rounded shadow relative \".concat(isSelected ? \"border-2 border-blue-500\" : \"\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                src: dish.strMealThumb,\n                                alt: dish.strMeal,\n                                width: 400,\n                                height: 300,\n                                className: \"w-full h-40 object-cover rounded mb-4\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/select-dish/page.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-bold mb-2\",\n                                children: dish.strMeal\n                            }, void 0, false, {\n                                fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/select-dish/page.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>toggleDish(dish),\n                                className: \"bg-blue-500 text-white px-2 py-1 rounded\",\n                                children: isSelected ? \"Remove\" : \"Select\"\n                            }, void 0, false, {\n                                fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/select-dish/page.tsx\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, this),\n                            isSelected && selectedDish && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-2 flex items-center space-x-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: \"Qty:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/select-dish/page.tsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"number\",\n                                        min: 1,\n                                        value: selectedDish.quantity,\n                                        onChange: (e)=>updateQuantity(dish.idMeal, Number(e.target.value)),\n                                        className: \"border p-1 w-16 text-center text-black\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/select-dish/page.tsx\",\n                                        lineNumber: 117,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/select-dish/page.tsx\",\n                                lineNumber: 115,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, dish.idMeal, true, {\n                        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/select-dish/page.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 15\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/select-dish/page.tsx\",\n                lineNumber: 88,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleNext,\n                    className: \"bg-green-500 text-white px-4 py-2 rounded\",\n                    children: \"Next (Select Drinks)\"\n                }, void 0, false, {\n                    fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/select-dish/page.tsx\",\n                    lineNumber: 133,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/select-dish/page.tsx\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ingiharalds/Next/Lokaverkefni/Lokaverkefni/framendi/src/app/select-dish/page.tsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(SelectDishPage, \"qRoJorGLIUq3P8suVrKDXJ276xQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useSearchParams\n    ];\n});\n_c = SelectDishPage;\nvar _c;\n$RefreshReg$(_c, \"SelectDishPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2VsZWN0LWRpc2gvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFbUQ7QUFDVTtBQUM5QjtBQWVoQixTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdOLCtDQUFRQSxDQUFTLEVBQUU7SUFDL0MsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFpQixFQUFFO0lBQzNELE1BQU1TLFNBQVNQLDBEQUFTQTtJQUN4QixNQUFNUSxlQUFlVCxnRUFBZUE7SUFDcEMsTUFBTVUsUUFBUUQsYUFBYUUsR0FBRyxDQUFDO0lBRS9CYixnREFBU0E7b0NBQUM7WUFDUixlQUFlYztnQkFDYixNQUFNQyxnQkFBd0IsRUFBRTtnQkFDaEMsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSztvQkFDMUIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO29CQUN4QixNQUFNQyxPQUFPLE1BQU1GLElBQUlHLElBQUk7b0JBQzNCLElBQUlELEtBQUtFLEtBQUssSUFBSUYsS0FBS0UsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRzt3QkFDdkNQLGNBQWNRLElBQUksQ0FBQ0osS0FBS0UsS0FBSyxDQUFDLEVBQUU7b0JBQ2xDO2dCQUNGO2dCQUNBZCxVQUFVUTtZQUNaO1lBQ0FEO1FBQ0Y7bUNBQUcsRUFBRTtJQUVMLFNBQVNVLFdBQVdDLElBQVU7UUFDNUJoQixZQUFZLENBQUNpQjtZQUNYLE1BQU1DLFdBQVdELEtBQUtFLElBQUksQ0FBQyxDQUFDQyxJQUFNQSxFQUFFQyxNQUFNLEtBQUtMLEtBQUtLLE1BQU07WUFDMUQsSUFBSUgsVUFBVTtnQkFDWixpQ0FBaUM7Z0JBQ2pDLE9BQU9ELEtBQUtLLE1BQU0sQ0FBQyxDQUFDRixJQUFNQSxFQUFFQyxNQUFNLEtBQUtMLEtBQUtLLE1BQU07WUFDcEQsT0FBTztnQkFDTCxpQ0FBaUM7Z0JBQ2pDLE9BQU87dUJBQUlKO29CQUFNO3dCQUFFSSxRQUFRTCxLQUFLSyxNQUFNO3dCQUFFRSxTQUFTUCxLQUFLTyxPQUFPO3dCQUFFQyxVQUFVO29CQUFFO2lCQUFFO1lBQy9FO1FBQ0Y7SUFDRjtJQUVBLFNBQVNDLGVBQWVDLE1BQWMsRUFBRUYsUUFBZ0I7UUFDdER4QixZQUFZLENBQUNpQixPQUNYQSxLQUFLVSxHQUFHLENBQUMsQ0FBQ1AsSUFBT0EsRUFBRUMsTUFBTSxLQUFLSyxTQUFTO29CQUFFLEdBQUdOLENBQUM7b0JBQUVJO2dCQUFTLElBQUlKO0lBRWhFO0lBRUEsU0FBU1E7UUFDUCxJQUFJN0IsU0FBU2MsTUFBTSxLQUFLLEdBQUc7WUFDekJnQixNQUFNO1lBQ047UUFDRjtRQUVBLE1BQU1DLFNBQVMsSUFBSUM7UUFDbkIsSUFBSTVCLE9BQU8yQixPQUFPRSxHQUFHLENBQUMsU0FBUzdCO1FBRTlCLG9FQUFvRTtRQUN2RSxNQUFNOEIsaUJBQWlCbEMsU0FBUzRCLEdBQUcsQ0FBQyxDQUFDWCxPQUFVO2dCQUM3Q0ssUUFBUUwsS0FBS0ssTUFBTTtnQkFDbkJFLFNBQVNQLEtBQUtPLE9BQU87Z0JBQ3JCQyxVQUFVUixLQUFLUSxRQUFRO1lBQ3pCO1FBQ0FNLE9BQU9FLEdBQUcsQ0FBQyxVQUFVRSxLQUFLQyxTQUFTLENBQUNGO1FBRXBDaEMsT0FBT2EsSUFBSSxDQUFDLGtCQUFvQyxPQUFsQmdCLE9BQU9NLFFBQVE7SUFDL0M7SUFFRSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFHRCxXQUFVOzBCQUFzQzs7Ozs7O1lBRW5EekMsT0FBT2dCLE1BQU0sS0FBSyxrQkFDakIsOERBQUMyQjswQkFBRTs7Ozs7cUNBRUgsOERBQUNIO2dCQUFJQyxXQUFVOzBCQUNaekMsT0FBTzhCLEdBQUcsQ0FBQyxDQUFDWDtvQkFDWCxNQUFNeUIsYUFBYTFDLFNBQVMyQyxJQUFJLENBQUMsQ0FBQ3RCLElBQU1BLEVBQUVDLE1BQU0sS0FBS0wsS0FBS0ssTUFBTTtvQkFDaEUsTUFBTXNCLGVBQWU1QyxTQUFTb0IsSUFBSSxDQUFDLENBQUNDLElBQU1BLEVBQUVDLE1BQU0sS0FBS0wsS0FBS0ssTUFBTTtvQkFFbEUscUJBQ0UsOERBQUNnQjt3QkFFQ0MsV0FBVyx3Q0FBcUYsT0FBN0NHLGFBQWEsNkJBQTZCOzswQ0FFN0YsOERBQUM5QyxrREFBS0E7Z0NBQ0ppRCxLQUFLNUIsS0FBSzZCLFlBQVk7Z0NBQ3RCQyxLQUFLOUIsS0FBS08sT0FBTztnQ0FDakJ3QixPQUFPO2dDQUNQQyxRQUFRO2dDQUNSVixXQUFVOzs7Ozs7MENBRVosOERBQUNXO2dDQUFHWCxXQUFVOzBDQUEwQnRCLEtBQUtPLE9BQU87Ozs7OzswQ0FFcEQsOERBQUMyQjtnQ0FDQ0MsU0FBUyxJQUFNcEMsV0FBV0M7Z0NBQzFCc0IsV0FBVTswQ0FFVEcsYUFBYSxXQUFXOzs7Ozs7NEJBRzFCQSxjQUFjRSw4QkFDYiw4REFBQ047Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDYztrREFBTTs7Ozs7O2tEQUNQLDhEQUFDQzt3Q0FDQ0MsTUFBSzt3Q0FDTEMsS0FBSzt3Q0FDTEMsT0FBT2IsYUFBYW5CLFFBQVE7d0NBQzVCaUMsVUFBVSxDQUFDQyxJQUFNakMsZUFBZVQsS0FBS0ssTUFBTSxFQUFFc0MsT0FBT0QsRUFBRUUsTUFBTSxDQUFDSixLQUFLO3dDQUNsRWxCLFdBQVU7Ozs7Ozs7Ozs7Ozs7dUJBM0JYdEIsS0FBS0ssTUFBTTs7Ozs7Z0JBaUN0Qjs7Ozs7OzBCQUlKLDhEQUFDZ0I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNZO29CQUNDQyxTQUFTdkI7b0JBQ1RVLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0ExSHdCMUM7O1FBR1BGLHNEQUFTQTtRQUNIRCw0REFBZUE7OztLQUpkRyIsInNvdXJjZXMiOlsiL1VzZXJzL2luZ2loYXJhbGRzL05leHQvTG9rYXZlcmtlZm5pL0xva2F2ZXJrZWZuaS9mcmFtZW5kaS9zcmMvYXBwL3NlbGVjdC1kaXNoL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW50ZXJmYWNlIE1lYWwge1xuICBzdHJNZWFsOiBzdHJpbmc7XG4gIHN0ck1lYWxUaHVtYjogc3RyaW5nO1xuICBzdHJJbnN0cnVjdGlvbnM6IHN0cmluZztcbiAgaWRNZWFsOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTZWxlY3RlZE1lYWwge1xuICBpZE1lYWw6IHN0cmluZztcbiAgc3RyTWVhbDogc3RyaW5nO1xuICBxdWFudGl0eTogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3REaXNoUGFnZSgpIHtcbiAgY29uc3QgW2Rpc2hlcywgc2V0RGlzaGVzXSA9IHVzZVN0YXRlPE1lYWxbXT4oW10pO1xuICBjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlPFNlbGVjdGVkTWVhbFtdPihbXSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgZW1haWwgPSBzZWFyY2hQYXJhbXMuZ2V0KFwiZW1haWxcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaFJhbmRvbURpc2hlcygpIHtcbiAgICAgIGNvbnN0IGZldGNoZWREaXNoZXM6IE1lYWxbXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3RoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9yYW5kb20ucGhwXCIpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgaWYgKGRhdGEubWVhbHMgJiYgZGF0YS5tZWFscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZmV0Y2hlZERpc2hlcy5wdXNoKGRhdGEubWVhbHNbMF0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzZXREaXNoZXMoZmV0Y2hlZERpc2hlcyk7XG4gICAgfVxuICAgIGZldGNoUmFuZG9tRGlzaGVzKCk7XG4gIH0sIFtdKTtcblxuICBmdW5jdGlvbiB0b2dnbGVEaXNoKGRpc2g6IE1lYWwpIHtcbiAgICBzZXRTZWxlY3RlZCgocHJldikgPT4ge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSBwcmV2LmZpbmQoKGQpID0+IGQuaWRNZWFsID09PSBkaXNoLmlkTWVhbCk7XG4gICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgLy8gSWYgYWxyZWFkeSBzZWxlY3RlZCwgcmVtb3ZlIGl0XG4gICAgICAgIHJldHVybiBwcmV2LmZpbHRlcigoZCkgPT4gZC5pZE1lYWwgIT09IGRpc2guaWRNZWFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEFkZCB3aXRoIHF1YW50aXR5IDEgYnkgZGVmYXVsdFxuICAgICAgICByZXR1cm4gWy4uLnByZXYsIHsgaWRNZWFsOiBkaXNoLmlkTWVhbCwgc3RyTWVhbDogZGlzaC5zdHJNZWFsLCBxdWFudGl0eTogMSB9XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVF1YW50aXR5KGRpc2hJZDogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKSB7XG4gICAgc2V0U2VsZWN0ZWQoKHByZXYpID0+XG4gICAgICBwcmV2Lm1hcCgoZCkgPT4gKGQuaWRNZWFsID09PSBkaXNoSWQgPyB7IC4uLmQsIHF1YW50aXR5IH0gOiBkKSlcbiAgICApO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV4dCgpIHtcbiAgICBpZiAoc2VsZWN0ZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICBhbGVydChcIlBsZWFzZSBzZWxlY3QgYXQgbGVhc3Qgb25lIGRpc2guXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICBpZiAoZW1haWwpIHBhcmFtcy5zZXQoXCJlbWFpbFwiLCBlbWFpbCk7XG4gICAgXG4gICAgIC8vIFBhc3Mgc2VsZWN0ZWQgZGlzaGVzIGFzIGEgcXVlcnkgcGFyYW1ldGVyIChlbmNvZGUgYXMgSlNPTiBzdHJpbmcpXG4gIGNvbnN0IHNlbGVjdGVkRGlzaGVzID0gc2VsZWN0ZWQubWFwKChkaXNoKSA9PiAoe1xuICAgIGlkTWVhbDogZGlzaC5pZE1lYWwsXG4gICAgc3RyTWVhbDogZGlzaC5zdHJNZWFsLFxuICAgIHF1YW50aXR5OiBkaXNoLnF1YW50aXR5LFxuICB9KSk7XG4gIHBhcmFtcy5zZXQoXCJkaXNoZXNcIiwgSlNPTi5zdHJpbmdpZnkoc2VsZWN0ZWREaXNoZXMpKTtcblxuICByb3V0ZXIucHVzaChgL3NlbGVjdC1kcmlua3M/JHtwYXJhbXMudG9TdHJpbmcoKX1gKTtcbn1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcC04XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtY2VudGVyIG1iLTZcIj5TZWxlY3QgRGlzaDwvaDE+XG5cbiAgICAgIHtkaXNoZXMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICA8cD5Mb2FkaW5nIGRpc2hlcy4uLjwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgIHtkaXNoZXMubWFwKChkaXNoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gc2VsZWN0ZWQuc29tZSgoZCkgPT4gZC5pZE1lYWwgPT09IGRpc2guaWRNZWFsKTtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRGlzaCA9IHNlbGVjdGVkLmZpbmQoKGQpID0+IGQuaWRNZWFsID09PSBkaXNoLmlkTWVhbCk7XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2Rpc2guaWRNZWFsfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHAtNCBiZy1ibGFjayByb3VuZGVkIHNoYWRvdyByZWxhdGl2ZSAke2lzU2VsZWN0ZWQgPyBcImJvcmRlci0yIGJvcmRlci1ibHVlLTUwMFwiIDogXCJcIn1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e2Rpc2guc3RyTWVhbFRodW1ifVxuICAgICAgICAgICAgICAgICAgYWx0PXtkaXNoLnN0ck1lYWx9XG4gICAgICAgICAgICAgICAgICB3aWR0aD17NDAwfVxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMDB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00MCBvYmplY3QtY292ZXIgcm91bmRlZCBtYi00XCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi0yXCI+e2Rpc2guc3RyTWVhbH08L2gyPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGlzaChkaXNoKX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtMiBweS0xIHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtpc1NlbGVjdGVkID8gXCJSZW1vdmVcIiA6IFwiU2VsZWN0XCJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICB7aXNTZWxlY3RlZCAmJiBzZWxlY3RlZERpc2ggJiYgKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yIGZsZXggaXRlbXMtY2VudGVyIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UXR5OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIG1pbj17MX1cbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWREaXNoLnF1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdXBkYXRlUXVhbnRpdHkoZGlzaC5pZE1lYWwsIE51bWJlcihlLnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBwLTEgdy0xNiB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LThcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWRcIlxuICAgICAgICA+XG4gICAgICAgICAgTmV4dCAoU2VsZWN0IERyaW5rcylcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2VhcmNoUGFyYW1zIiwidXNlUm91dGVyIiwiSW1hZ2UiLCJTZWxlY3REaXNoUGFnZSIsImRpc2hlcyIsInNldERpc2hlcyIsInNlbGVjdGVkIiwic2V0U2VsZWN0ZWQiLCJyb3V0ZXIiLCJzZWFyY2hQYXJhbXMiLCJlbWFpbCIsImdldCIsImZldGNoUmFuZG9tRGlzaGVzIiwiZmV0Y2hlZERpc2hlcyIsImkiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibWVhbHMiLCJsZW5ndGgiLCJwdXNoIiwidG9nZ2xlRGlzaCIsImRpc2giLCJwcmV2IiwiZXhpc3RpbmciLCJmaW5kIiwiZCIsImlkTWVhbCIsImZpbHRlciIsInN0ck1lYWwiLCJxdWFudGl0eSIsInVwZGF0ZVF1YW50aXR5IiwiZGlzaElkIiwibWFwIiwiaGFuZGxlTmV4dCIsImFsZXJ0IiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwic2V0Iiwic2VsZWN0ZWREaXNoZXMiLCJKU09OIiwic3RyaW5naWZ5IiwidG9TdHJpbmciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInAiLCJpc1NlbGVjdGVkIiwic29tZSIsInNlbGVjdGVkRGlzaCIsInNyYyIsInN0ck1lYWxUaHVtYiIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJtaW4iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsIk51bWJlciIsInRhcmdldCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/select-dish/page.tsx\n"));

/***/ })

});