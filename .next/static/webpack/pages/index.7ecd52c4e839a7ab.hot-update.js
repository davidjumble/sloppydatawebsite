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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* harmony import */ var _components_barChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/barChart */ \"./components/barChart.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        width: \"60px\"\n    }), barStyles = ref[0], updateBarStyles = ref[2];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var bars = document.getElementsByClassName(\"bar\");\n        console.log(\"svg\", bars.item(1).getAttribute(\"width\"));\n    }, []);\n    var particleBars = {\n        width: \"200px\",\n        height: \"200px\",\n        backgroundColor: \"teal\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            \"glow on\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: particleBars\n            }, void 0, false, {\n                fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_barChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                width: 800,\n                height: 450,\n                data: _data_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].USData,\n                yAxisTitle: \" GDP growth\"\n            }, void 0, false, {\n                fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"ZmqIX/aEFo2qegZ+AkILXj/uPvQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtBQUE4QztBQUNLO0FBRW5CO0FBQ2M7O0FBRy9CLFNBQVNNLElBQUksR0FBRzs7SUFDN0IsSUFBdUNILEdBQTJCLEdBQTNCQSwrQ0FBUSxDQUFDO1FBQUVJLEtBQUssRUFBRSxNQUFNO0tBQUUsQ0FBQyxFQVRwRSxTQVNrQixHQUF1QkosR0FBMkIsR0FBbEQsRUFUbEIsZUFTcUMsR0FBSUEsR0FBMkIsR0FBL0I7SUFDbkNELGdEQUFTLENBQ1AsV0FBTTtRQUNKLElBQUlRLElBQUksR0FBR0MsUUFBUSxDQUFDQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUM7UUFHakRDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssRUFBRUosSUFBSSxDQUFDSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUV2RCxFQUFFLEVBQUUsQ0FDTjtJQUNELElBQU1DLFlBQVksR0FBRztRQUNuQlYsS0FBSyxFQUFFLE9BQU87UUFDZFcsTUFBTSxFQUFFLE9BQU87UUFDZkMsZUFBZSxFQUFFLE1BQU07S0FDeEI7SUFDRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVyQiwwRUFBZ0I7O1lBQUUsU0FFaEM7MEJBQUEsOERBQUNvQixLQUFHO2dCQUFDRyxLQUFLLEVBQUVOLFlBQVk7Ozs7O29CQUFROzBCQUVoQyw4REFBQ1osNERBQVE7Z0JBQUNFLEtBQUssRUFBRSxHQUFHO2dCQUNsQlcsTUFBTSxFQUFFLEdBQUc7Z0JBQ1hkLElBQUksRUFDRkEseURBQVc7Z0JBRWJxQixVQUFVLEVBQUcsYUFBVzs7Ozs7b0JBQWdCOzs7Ozs7WUFDckMsQ0FDUjtDQUNGO0dBN0J1Qm5CLElBQUk7QUFBSkEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2JhckNoYXJ0XCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2JhclN0eWxlcywgLCB1cGRhdGVCYXJTdHlsZXNdID0gdXNlU3RhdGUoeyB3aWR0aDogJzYwcHgnIH0pXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICB2YXIgYmFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJiYXJcIilcblxuXG4gICAgICBjb25zb2xlLmxvZygnc3ZnJywgYmFycy5pdGVtKDEpLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSlcblxuICAgIH0sIFtdXG4gIClcbiAgY29uc3QgcGFydGljbGVCYXJzID0ge1xuICAgIHdpZHRoOiAnMjAwcHgnLFxuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0ZWFsJ1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgZ2xvdyBvblxuICAgICAgPGRpdiBzdHlsZT17cGFydGljbGVCYXJzfT48L2Rpdj5cblxuICAgICAgPEJhckNoYXJ0IHdpZHRoPXs4MDB9XG4gICAgICAgIGhlaWdodD17NDUwfVxuICAgICAgICBkYXRhPXtcbiAgICAgICAgICBkYXRhLlVTRGF0YVxuICAgICAgICB9XG4gICAgICAgIHlBeGlzVGl0bGU9e2AgR0RQIGdyb3d0aGB9ID48L0JhckNoYXJ0ID5cbiAgICA8L2RpdiA+XG4gIClcbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZGF0YSIsIkJhckNoYXJ0IiwiSG9tZSIsIndpZHRoIiwiYmFyU3R5bGVzIiwidXBkYXRlQmFyU3R5bGVzIiwiYmFycyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtIiwiZ2V0QXR0cmlidXRlIiwicGFydGljbGVCYXJzIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwic3R5bGUiLCJVU0RhdGEiLCJ5QXhpc1RpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});