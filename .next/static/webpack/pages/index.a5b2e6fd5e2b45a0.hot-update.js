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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_particles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/particles */ \"./data/particles.js\");\n/* harmony import */ var _public_googlingGod_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/googlingGod.png */ \"./public/googlingGod.png\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* harmony import */ var _components_barChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/barChart */ \"./components/barChart.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"USData\"), dataToShow = ref[0], updateDataToShow = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var bars = document.getElementsByClassName(\"bar\");\n        console.log(\"svg\", bars.item(1).getAttribute(\"width\"));\n        console.log(\"svg\", bars.item(1).getAttribute(\"height\"));\n    }, []);\n    // useEffect(() => {\n    //   console.log('effect');\n    //   return () => {\n    //     console.log('cleaned up');\n    //     document.getElementById(\"tsparticles\").disabled = true;\n    //   };\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: function() {\n            updateDataToShow(\"JapanData\");\n        },\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            \"glow on\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_data_particles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                style: {\n                    position: \"relative\",\n                    top: \"0\",\n                    left: 0,\n                    right: 0,\n                    maxWidth: \"100%\",\n                    objectFit: \"cover\",\n                    zIndex: 0\n                },\n                src: _public_googlingGod_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src\n            }, void 0, false, {\n                fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_barChart__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                width: 250,\n                height: 400,\n                onMouseOver: function() {},\n                data: _data_data__WEBPACK_IMPORTED_MODULE_4__[\"default\"][dataToShow],\n                yAxisTitle: \" GDP growth\"\n            }, void 0, false, {\n                fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"mhsIKQX1VtQit7pYb94XQ2pwo/s=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQThDO0FBQ0s7QUFDUDtBQUNGO0FBR1Y7QUFDYzs7QUFLL0IsU0FBU1EsSUFBSSxHQUFHOztJQUM3QixJQUF1Q0wsR0FBa0IsR0FBbEJBLCtDQUFRLENBQUMsUUFBUSxDQUFDLEVBZDNELFVBY21CLEdBQXNCQSxHQUFrQixHQUF4QyxFQWRuQixnQkFjcUMsR0FBSUEsR0FBa0IsR0FBdEI7SUFDbkNELGdEQUFTLENBQ1AsV0FBTTtRQUNKLElBQUlTLElBQUksR0FBR0MsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7UUFHakRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssRUFBRUosSUFBSSxDQUFDSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0REgsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFSixJQUFJLENBQUNLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBRXhELEVBQUUsRUFBRSxDQUNOO0lBRUQsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUczQixtQkFBbUI7SUFDbkIsaUNBQWlDO0lBQ2pDLDhEQUE4RDtJQUU5RCxPQUFPO0lBQ1AsVUFBVTtJQUVWLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLE9BQU8sRUFBRSxXQUFNO1lBQUVULGdCQUFnQixDQUFDLFdBQVcsQ0FBQztTQUFFO1FBQUVVLFNBQVMsRUFBRXBCLDBFQUFnQjs7WUFBRSxTQUVsRjswQkFJQSw4REFBQ0ksdURBQVk7Ozs7b0JBQUc7MEJBQ2hCLDhEQUFDa0IsS0FBRztnQkFBQ0MsS0FBSyxFQUFFO29CQUNWQyxRQUFRLEVBQUUsVUFBVTtvQkFDcEJDLEdBQUcsRUFBRSxHQUFHO29CQUNSQyxJQUFJLEVBQUUsQ0FBQztvQkFDUEMsS0FBSyxFQUFFLENBQUM7b0JBQ1JDLFFBQVEsRUFBRSxNQUFNO29CQUNoQkMsU0FBUyxFQUFFLE9BQU87b0JBQ2xCQyxNQUFNLEVBQUUsQ0FBQztpQkFDVjtnQkFBRUMsR0FBRyxFQUFFMUIsbUVBQU07Ozs7O29CQUFJOzBCQUNsQiw4REFBQ0UsNERBQVE7Z0JBQUN5QixLQUFLLEVBQUUsR0FBRztnQkFDbEJDLE1BQU0sRUFBRSxHQUFHO2dCQUNYQyxXQUFXLEVBQUUsV0FBTSxFQUFHO2dCQUN0QjVCLElBQUksRUFDRkEsa0RBQUksQ0FBQ0csVUFBVSxDQUFDO2dCQUVsQjBCLFVBQVUsRUFBRyxhQUFXOzs7OztvQkFBZ0I7Ozs7OztZQUNyQyxDQUNSO0NBQ0Y7R0FsRHVCM0IsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFBhcnRpY2xlc0JveCBmcm9tICcuLi9kYXRhL3BhcnRpY2xlcydcbmltcG9ydCBiZyBmcm9tICcuLi9wdWJsaWMvZ29vZ2xpbmdHb2QucG5nJ1xuXG5cbmltcG9ydCBkYXRhIGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcbmltcG9ydCBCYXJDaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9iYXJDaGFydFwiO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGF0YVRvU2hvdywgdXBkYXRlRGF0YVRvU2hvd10gPSB1c2VTdGF0ZSgnVVNEYXRhJylcbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIHZhciBiYXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJhclwiKVxuXG5cbiAgICAgIGNvbnNvbGUubG9nKCdzdmcnLCBiYXJzLml0ZW0oMSkuZ2V0QXR0cmlidXRlKCd3aWR0aCcpKVxuICAgICAgY29uc29sZS5sb2coJ3N2ZycsIGJhcnMuaXRlbSgxKS5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpKVxuXG4gICAgfSwgW11cbiAgKVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coJ2VmZmVjdCcpO1xuXG5cbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coJ2NsZWFuZWQgdXAnKTtcbiAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHNwYXJ0aWNsZXNcIikuZGlzYWJsZWQgPSB0cnVlO1xuXG4gIC8vICAgfTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7IHVwZGF0ZURhdGFUb1Nob3coJ0phcGFuRGF0YScpIH19IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICBnbG93IG9uXG4gICAgICB7LyogPGRpdiBzdHlsZT17cGFydGljbGVCYXJzfT48L2Rpdj4gKi99XG5cblxuXG4gICAgICA8UGFydGljbGVzQm94IC8+XG4gICAgICA8aW1nIHN0eWxlPXt7XG4gICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgIHRvcDogJzAnLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0OiAnY292ZXInLFxuICAgICAgICB6SW5kZXg6IDBcbiAgICAgIH19IHNyYz17Ymcuc3JjfSAvPlxuICAgICAgPEJhckNoYXJ0IHdpZHRoPXsyNTB9XG4gICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4geyB9fVxuICAgICAgICBkYXRhPXtcbiAgICAgICAgICBkYXRhW2RhdGFUb1Nob3ddXG4gICAgICAgIH1cbiAgICAgICAgeUF4aXNUaXRsZT17YCBHRFAgZ3Jvd3RoYH0gPjwvQmFyQ2hhcnQgPlxuICAgIDwvZGl2ID5cbiAgKVxufVxuXG5cblxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQYXJ0aWNsZXNCb3giLCJiZyIsImRhdGEiLCJCYXJDaGFydCIsIkhvbWUiLCJkYXRhVG9TaG93IiwidXBkYXRlRGF0YVRvU2hvdyIsImJhcnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb25zb2xlIiwibG9nIiwiaXRlbSIsImdldEF0dHJpYnV0ZSIsImRpdiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJpbWciLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwibWF4V2lkdGgiLCJvYmplY3RGaXQiLCJ6SW5kZXgiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsIm9uTW91c2VPdmVyIiwieUF4aXNUaXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});