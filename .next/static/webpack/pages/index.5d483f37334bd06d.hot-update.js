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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* harmony import */ var _components_barChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/barChart */ \"./components/barChart.js\");\n\n\n\n\n\nfunction Home() {\n    var svg = document.getElementsByClassName(\"Chart\");\n    var clone = svg.cloneNode(true);\n    console.log(\"svg\", clone);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            \"glow on\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_barChart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                width: 800,\n                height: 450,\n                data: _data_data__WEBPACK_IMPORTED_MODULE_2__[\"default\"].USData,\n                yAxisTitle: \" GDP growth\"\n            }, void 0, false, {\n                fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQTtBQUE4QztBQUNMO0FBRVQ7QUFDYztBQUcvQixTQUFTSyxJQUFJLEdBQUc7SUFDN0IsSUFBSUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQztJQUVsRCxJQUFNQyxLQUFLLEdBQUdILEdBQUcsQ0FBQ0ksU0FBUyxDQUFDLElBQUksQ0FBQztJQUNqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsS0FBSyxFQUFFSCxLQUFLLENBQUM7SUFDekIscUJBQ0UsOERBQUNJLEtBQUc7UUFBQ0MsU0FBUyxFQUFFZCwwRUFBZ0I7O1lBQUUsU0FFaEM7MEJBQUEsOERBQUNJLDREQUFRO2dCQUFDWSxLQUFLLEVBQUUsR0FBRztnQkFDbEJDLE1BQU0sRUFBRSxHQUFHO2dCQUNYZCxJQUFJLEVBQ0ZBLHlEQUFXO2dCQUViZ0IsVUFBVSxFQUFHLGFBQVc7Ozs7O29CQUFLOzs7Ozs7WUFDM0IsQ0FDUDtDQUNGO0FBaEJ1QmQsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYmFyQ2hhcnRcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICB2YXIgc3ZnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIkNoYXJ0XCIpXG5cbiAgY29uc3QgY2xvbmUgPSBzdmcuY2xvbmVOb2RlKHRydWUpXG4gIGNvbnNvbGUubG9nKCdzdmcnLCBjbG9uZSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICBnbG93IG9uXG4gICAgICA8QmFyQ2hhcnQgd2lkdGg9ezgwMH1cbiAgICAgICAgaGVpZ2h0PXs0NTB9XG4gICAgICAgIGRhdGE9e1xuICAgICAgICAgIGRhdGEuVVNEYXRhXG4gICAgICAgIH1cbiAgICAgICAgeUF4aXNUaXRsZT17YCBHRFAgZ3Jvd3RoYH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZGF0YSIsIkJhckNoYXJ0IiwiSG9tZSIsInN2ZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsb25lIiwiY2xvbmVOb2RlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIndpZHRoIiwiaGVpZ2h0IiwiVVNEYXRhIiwieUF4aXNUaXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});