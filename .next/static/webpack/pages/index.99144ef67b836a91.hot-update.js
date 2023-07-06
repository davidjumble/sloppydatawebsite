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

/***/ "./components/barChart.js":
/*!********************************!*\
  !*** ./components/barChart.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nvar duration = 500;\nfunction BarChart(param) {\n    var width = param.width, height = param.height, data = param.data, yAxisTitle = param.yAxisTitle;\n    _s();\n    var margin = {\n        top: 60,\n        bottom: 100,\n        left: 80,\n        right: 40\n    };\n    var innerWidth = width - margin.left - margin.right;\n    var innerHeight = height - margin.top - margin.bottom;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        d3__WEBPACK_IMPORTED_MODULE_1__.select(ref.current).attr(\"width\", width).attr(\"height\", height).append(\"g\").attr(\"transform\", \"translate(\".concat(margin.left, \", \").concat(margin.top, \")\")).attr(\"align\", \"center\");\n        ;\n    }, []); // eslint-disable-line react-hooks/exhaustive-deps\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        draw();\n    }, [\n        data\n    ]); // eslint-disable-line react-hooks/exhaustive-deps\n    var draw = function() {\n        var xScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleBand().domain(data.map(function(d) {\n            return d.question;\n        })).range([\n            0,\n            innerWidth\n        ]);\n        var yScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().domain([\n            0,\n            d3__WEBPACK_IMPORTED_MODULE_1__.max(data, function(d) {\n                return d.value;\n            })\n        ]).range([\n            innerHeight,\n            0\n        ]);\n        var colorScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal([\n            \"#d75858\",\n            \"#fddc82\"\n        ]);\n        var svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(ref.current);\n        var chart = svg.select(\"g\");\n        var tooltip = d3__WEBPACK_IMPORTED_MODULE_1__.select(\".bar\").append(\"div\").style(\"opacity\", 0).attr(\"class\", \"tooltip\").style(\"background-color\", \"white\").style(\"border\", \"solid\").style(\"border-width\", \"1px\").style(\"border-radius\", \"5px\").style(\"padding\", \"10px\");\n        chart.selectAll(\".bar\").data(data).join(function(enter) {\n            return enter.append(\"rect\").classed(\"bar\", true).attr(\"y\", function(d) {\n                return yScale(0);\n            }).attr(\"height\", 0).on(\"mouseover\", function(d, i) {\n                tooltip.html(\"<div>Country: \".concat(d.country, \"</div><div>Value: \").concat(d.value, \"</div>\")).style(\"visibility\", \"visible\");\n                d3__WEBPACK_IMPORTED_MODULE_1__.select(this).transition().attr(\"fill\", hoverColor);\n            });\n        }).attr(\"x\", function(d) {\n            return xScale(d.question);\n        }).style(\"fill\", function(d, i) {\n            return colorScale(i);\n        }).attr(\"width\", function(d) {\n            return xScale.bandwidth();\n        }).transition().duration(duration).delay(function(d, i) {\n            return i * duration / 10;\n        }).attr(\"height\", function(d) {\n            return innerHeight - yScale(d.value);\n        }).attr(\"y\", function(d) {\n            return yScale(d.value);\n        });\n        var xAxis = d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom().scale(xScale);\n        chart.selectAll(\".x.axis\").data([\n            null\n        ]).join(\"g\").classed(\"x axis\", true).attr(\"transform\", \"translate(0,\".concat(innerHeight, \")\")).transition().duration(duration).call(xAxis);\n        var yAxis = d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft().ticks(5).scale(yScale);\n        chart.selectAll(\".y.axis\").data([\n            null\n        ]).join(\"g\").classed(\"y axis\", true).attr(\"transform\", \"translate(0,0)\").transition().duration(duration).call(yAxis);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"chartContainer\",\n        className: \"chart\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            ref: ref\n        }, void 0, false, {\n            fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/components/barChart.js\",\n            lineNumber: 114,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/components/barChart.js\",\n        lineNumber: 113,\n        columnNumber: 5\n    }, this);\n}\n_s(BarChart, \"lq1tzM4DdcBd9rchfALtCTAkzkA=\");\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFFbERPLEtBQUssQ0FDRkcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUNwQmhDLElBQUksQ0FBQztZQUFDLElBQUk7U0FBQyxDQUFDLENBQ1ppQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQ1RFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQ3ZCdkIsSUFBSSxDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUNuQzRCLFVBQVUsRUFBRSxDQUNaNUMsUUFBUSxDQUFDQSxRQUFRLENBQUMsQ0FDbEJtRCxJQUFJLENBQUNDLEtBQUssQ0FBQyxDQUFDO0tBSWhCO0lBRUQscUJBQ0UsOERBQUNHLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLGdCQUFnQjtRQUFDQyxTQUFTLEVBQUMsT0FBTztrQkFDeEMsNEVBQUN6QixLQUFHO1lBRUZuQixHQUFHLEVBQUVBLEdBQUc7Ozs7O2dCQUFROzs7OztZQUNkLENBQ047Q0FDSDtHQWxIUVosUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBb0hqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYmFyQ2hhcnQuanM/ODY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBkdXJhdGlvbiA9IDUwMDtcbmZ1bmN0aW9uIEJhckNoYXJ0KHsgd2lkdGgsIGhlaWdodCwgZGF0YSwgeUF4aXNUaXRsZSB9KSB7XG4gIGNvbnN0IG1hcmdpbiA9IHtcbiAgICB0b3A6IDYwLFxuICAgIGJvdHRvbTogMTAwLFxuICAgIGxlZnQ6IDgwLFxuICAgIHJpZ2h0OiA0MCxcbiAgfTtcbiAgY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gIGNvbnN0IGlubmVySGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWApLmF0dHIoXCJhbGlnblwiLCBcImNlbnRlclwiKTs7XG4gIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRyYXcoKTtcbiAgfSwgW2RhdGFdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICBjb25zdCBkcmF3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHhTY2FsZSA9IGQzXG4gICAgICAuc2NhbGVCYW5kKClcbiAgICAgIC5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQucXVlc3Rpb24pKVxuICAgICAgLnJhbmdlKFswLCBpbm5lcldpZHRoXSk7XG5cbiAgICBjb25zdCB5U2NhbGUgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhLCAoZCkgPT4gZC52YWx1ZSldKVxuICAgICAgLnJhbmdlKFtpbm5lckhlaWdodCwgMF0pO1xuXG4gICAgY29uc3QgY29sb3JTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbChbJyNkNzU4NTgnLCAnI2ZkZGM4MiddKTtcblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChyZWYuY3VycmVudCk7XG4gICAgY29uc3QgY2hhcnQgPSBzdmcuc2VsZWN0KFwiZ1wiKTtcblxuICAgIGNvbnN0IHRvb2x0aXAgPSBkMy5zZWxlY3QoXCIuYmFyXCIpXG4gICAgICAuYXBwZW5kKFwiZGl2XCIpXG4gICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG4gICAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAgICAgLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcIndoaXRlXCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXJcIiwgXCJzb2xpZFwiKVxuICAgICAgLnN0eWxlKFwiYm9yZGVyLXdpZHRoXCIsIFwiMXB4XCIpXG4gICAgICAuc3R5bGUoXCJib3JkZXItcmFkaXVzXCIsIFwiNXB4XCIpXG4gICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIFwiMTBweFwiKVxuXG5cblxuICAgIGNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgICAgLmRhdGEoZGF0YSlcbiAgICAgIC5qb2luKChlbnRlcikgPT5cbiAgICAgICAgZW50ZXJcbiAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgIC5jbGFzc2VkKFwiYmFyXCIsIHRydWUpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIChkKSA9PiB5U2NhbGUoMCkpXG4gICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMCkub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICB0b29sdGlwXG4gICAgICAgICAgICAgIC5odG1sKFxuICAgICAgICAgICAgICAgIGA8ZGl2PkNvdW50cnk6ICR7ZC5jb3VudHJ5fTwvZGl2PjxkaXY+VmFsdWU6ICR7ZC52YWx1ZX08L2Rpdj5gXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKCkuYXR0cignZmlsbCcsIGhvdmVyQ29sb3IpO1xuICAgICAgICAgIH0pXG4gICAgICApXG4gICAgICAuYXR0cihcInhcIiwgKGQpID0+IHhTY2FsZShkLnF1ZXN0aW9uKSlcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgKGQsIGkpID0+IGNvbG9yU2NhbGUoaSkpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIChkKSA9PiB4U2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAuZGVsYXkoKGQsIGkpID0+IChpICogZHVyYXRpb24pIC8gMTApXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gaW5uZXJIZWlnaHQgLSB5U2NhbGUoZC52YWx1ZSkpXG4gICAgICAuYXR0cihcInlcIiwgKGQpID0+IHlTY2FsZShkLnZhbHVlKSlcblxuXG5cbiAgICBjb25zdCB4QXhpcyA9IGQzLmF4aXNCb3R0b20oKS5zY2FsZSh4U2NhbGUpO1xuXG4gICAgY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoXCIueC5heGlzXCIpXG4gICAgICAuZGF0YShbbnVsbF0pXG4gICAgICAuam9pbihcImdcIilcbiAgICAgIC5jbGFzc2VkKFwieCBheGlzXCIsIHRydWUpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsJHtpbm5lckhlaWdodH0pYClcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgIC5jYWxsKHhBeGlzKTtcblxuICAgIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoKS50aWNrcyg1KS5zY2FsZSh5U2NhbGUpO1xuXG4gICAgY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoXCIueS5heGlzXCIpXG4gICAgICAuZGF0YShbbnVsbF0pXG4gICAgICAuam9pbihcImdcIilcbiAgICAgIC5jbGFzc2VkKFwieSBheGlzXCIsIHRydWUpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLDApXCIpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAuY2FsbCh5QXhpcyk7XG5cblxuXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiY2hhcnRDb250YWluZXJcIiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgPHN2Z1xuXG4gICAgICAgIHJlZj17cmVmfT48L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFyQ2hhcnQ7Il0sIm5hbWVzIjpbImQzIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJkdXJhdGlvbiIsIkJhckNoYXJ0Iiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIiwieUF4aXNUaXRsZSIsIm1hcmdpbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlZiIsInNlbGVjdCIsImN1cnJlbnQiLCJhdHRyIiwiYXBwZW5kIiwiZHJhdyIsInhTY2FsZSIsInNjYWxlQmFuZCIsImRvbWFpbiIsIm1hcCIsImQiLCJxdWVzdGlvbiIsInJhbmdlIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJtYXgiLCJ2YWx1ZSIsImNvbG9yU2NhbGUiLCJzY2FsZU9yZGluYWwiLCJzdmciLCJjaGFydCIsInRvb2x0aXAiLCJzdHlsZSIsInNlbGVjdEFsbCIsImpvaW4iLCJlbnRlciIsImNsYXNzZWQiLCJvbiIsImkiLCJodG1sIiwiY291bnRyeSIsInRyYW5zaXRpb24iLCJob3ZlckNvbG9yIiwiYmFuZHdpZHRoIiwiZGVsYXkiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJzY2FsZSIsImNhbGwiLCJ5QXhpcyIsImF4aXNMZWZ0IiwidGlja3MiLCJkaXYiLCJpZCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/barChart.js\n");

/***/ })

});