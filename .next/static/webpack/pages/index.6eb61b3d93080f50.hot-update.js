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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* harmony import */ var _components_barChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/barChart */ \"./components/barChart.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar particlesInit = function() {\n    var _ref = _asyncToGenerator(_Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(main) {\n        return _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    console.log(main);\n                    _ctx.next = 3;\n                    return (0,tsparticles__WEBPACK_IMPORTED_MODULE_4__.loadFull)(main);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function particlesInit(main) {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        width: \"60px\"\n    }), barStyles = ref[0], updateBarStyles = ref[2];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var bars = document.getElementsByClassName(\"bar\");\n        console.log(\"svg\", bars.item(1).getAttribute(\"width\"));\n        console.log(\"svg\", bars.item(1).getAttribute(\"height\"));\n    }, []);\n    // useEffect(() => {\n    //   console.log('effect');\n    //   return () => {\n    //     console.log('cleaned up');\n    //     document.getElementById(\"tsparticles\").disabled = true;\n    //   };\n    // }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            \"glow on\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_barChart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                width: 800,\n                height: 450,\n                data: _data_data__WEBPACK_IMPORTED_MODULE_5__[\"default\"].USData,\n                yAxisTitle: \" GDP growth\"\n            }, void 0, false, {\n                fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"ZmqIX/aEFo2qegZ+AkILXj/uPvQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDSztBQUNUO0FBRUg7QUFFUDtBQUNjOztBQUM5QyxJQUFNUSxhQUFhO2VBQUcsK01BQU9DLElBQUksRUFBSzs7OztvQkFDcENDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUMsQ0FBQzs7MkJBS1pKLHFEQUFRLENBQUNJLElBQUksQ0FBQzs7Ozs7O0tBQ3JCO29CQVBLRCxhQUFhLENBQVVDLElBQUk7OztHQU9oQztBQUljLFNBQVNHLElBQUksR0FBRzs7SUFDN0IsSUFBdUNULEdBQTJCLEdBQTNCQSwrQ0FBUSxDQUFDO1FBQUVVLEtBQUssRUFBRSxNQUFNO0tBQUUsQ0FBQyxFQXJCcEUsU0FxQmtCLEdBQXVCVixHQUEyQixHQUFsRCxFQXJCbEIsZUFxQnFDLEdBQUlBLEdBQTJCLEdBQS9CO0lBQ25DRCxnREFBUyxDQUNQLFdBQU07UUFDSixJQUFJYyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0Msc0JBQXNCLENBQUMsS0FBSyxDQUFDO1FBR2pEUixPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLEVBQUVLLElBQUksQ0FBQ0csSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdERWLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLEtBQUssRUFBRUssSUFBSSxDQUFDRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUNDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUV4RCxFQUFFLEVBQUUsQ0FDTjtJQUVELG9CQUFvQjtJQUNwQiwyQkFBMkI7SUFHM0IsbUJBQW1CO0lBQ25CLGlDQUFpQztJQUNqQyw4REFBOEQ7SUFFOUQsT0FBTztJQUNQLFVBQVU7SUFFVixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUV0QiwwRUFBZ0I7O1lBQUUsU0FFaEM7MEJBS0EsOERBQUNPLDREQUFRO2dCQUFDTSxLQUFLLEVBQUUsR0FBRztnQkFDbEJXLE1BQU0sRUFBRSxHQUFHO2dCQUNYbEIsSUFBSSxFQUNGQSx5REFBVztnQkFFYm9CLFVBQVUsRUFBRyxhQUFXOzs7OztvQkFBZ0I7Ozs7OztZQUNyQyxDQUNSO0NBQ0Y7R0F4Q3VCZCxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUGFydGljbGVzIGZyb20gJ3JlYWN0LXRzcGFydGljbGVzJztcblxuaW1wb3J0IHsgbG9hZEZ1bGwgfSBmcm9tIFwidHNwYXJ0aWNsZXNcIjtcblxuaW1wb3J0IGRhdGEgZnJvbSBcIi4uL2RhdGEvZGF0YVwiO1xuaW1wb3J0IEJhckNoYXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL2JhckNoYXJ0XCI7XG5jb25zdCBwYXJ0aWNsZXNJbml0ID0gYXN5bmMgKG1haW4pID0+IHtcbiAgY29uc29sZS5sb2cobWFpbik7XG5cbiAgLy8geW91IGNhbiBpbml0aWFsaXplIHRoZSB0c1BhcnRpY2xlcyBpbnN0YW5jZSAobWFpbikgaGVyZSwgYWRkaW5nIGN1c3RvbSBzaGFwZXMgb3IgcHJlc2V0c1xuICAvLyB0aGlzIGxvYWRzIHRoZSB0c3BhcnRpY2xlcyBwYWNrYWdlIGJ1bmRsZSwgaXQncyB0aGUgZWFzaWVzdCBtZXRob2QgZm9yIGdldHRpbmcgZXZlcnl0aGluZyByZWFkeVxuICAvLyBzdGFydGluZyBmcm9tIHYyIHlvdSBjYW4gYWRkIG9ubHkgdGhlIGZlYXR1cmVzIHlvdSBuZWVkIHJlZHVjaW5nIHRoZSBidW5kbGUgc2l6ZVxuICBhd2FpdCBsb2FkRnVsbChtYWluKTtcbn07XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbYmFyU3R5bGVzLCAsIHVwZGF0ZUJhclN0eWxlc10gPSB1c2VTdGF0ZSh7IHdpZHRoOiAnNjBweCcgfSlcbiAgdXNlRWZmZWN0KFxuICAgICgpID0+IHtcbiAgICAgIHZhciBiYXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImJhclwiKVxuXG5cbiAgICAgIGNvbnNvbGUubG9nKCdzdmcnLCBiYXJzLml0ZW0oMSkuZ2V0QXR0cmlidXRlKCd3aWR0aCcpKVxuICAgICAgY29uc29sZS5sb2coJ3N2ZycsIGJhcnMuaXRlbSgxKS5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpKVxuXG4gICAgfSwgW11cbiAgKVxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc29sZS5sb2coJ2VmZmVjdCcpO1xuXG5cbiAgLy8gICByZXR1cm4gKCkgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coJ2NsZWFuZWQgdXAnKTtcbiAgLy8gICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHNwYXJ0aWNsZXNcIikuZGlzYWJsZWQgPSB0cnVlO1xuXG4gIC8vICAgfTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgZ2xvdyBvblxuICAgICAgey8qIDxkaXYgc3R5bGU9e3BhcnRpY2xlQmFyc30+PC9kaXY+ICovfVxuXG5cblxuXG4gICAgICA8QmFyQ2hhcnQgd2lkdGg9ezgwMH1cbiAgICAgICAgaGVpZ2h0PXs0NTB9XG4gICAgICAgIGRhdGE9e1xuICAgICAgICAgIGRhdGEuVVNEYXRhXG4gICAgICAgIH1cbiAgICAgICAgeUF4aXNUaXRsZT17YCBHRFAgZ3Jvd3RoYH0gPjwvQmFyQ2hhcnQgPlxuICAgIDwvZGl2ID5cbiAgKVxufVxuXG5cblxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQYXJ0aWNsZXMiLCJsb2FkRnVsbCIsImRhdGEiLCJCYXJDaGFydCIsInBhcnRpY2xlc0luaXQiLCJtYWluIiwiY29uc29sZSIsImxvZyIsIkhvbWUiLCJ3aWR0aCIsImJhclN0eWxlcyIsInVwZGF0ZUJhclN0eWxlcyIsImJhcnMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJpdGVtIiwiZ2V0QXR0cmlidXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaGVpZ2h0IiwiVVNEYXRhIiwieUF4aXNUaXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});