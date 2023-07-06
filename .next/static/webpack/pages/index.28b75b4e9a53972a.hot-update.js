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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nvar duration = 500;\nfunction BarChart(param) {\n    var width = param.width, height = param.height, data = param.data, yAxisTitle = param.yAxisTitle;\n    _s();\n    var margin = {\n        top: 60,\n        bottom: 100,\n        left: 80,\n        right: 40\n    };\n    var innerWidth = width - margin.left - margin.right;\n    var innerHeight = height - margin.top - margin.bottom;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        d3__WEBPACK_IMPORTED_MODULE_1__.select(ref.current).attr(\"width\", width).attr(\"height\", height).append(\"g\").attr(\"transform\", \"translate(\".concat(margin.left, \", \").concat(margin.top, \")\"));\n    }, []); // eslint-disable-line react-hooks/exhaustive-deps\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        draw();\n    }, [\n        data\n    ]); // eslint-disable-line react-hooks/exhaustive-deps\n    var draw = function() {\n        var xScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleBand().domain(data.map(function(d) {\n            return d.year;\n        })).range([\n            0,\n            innerWidth\n        ]);\n        var yScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().domain([\n            0,\n            d3__WEBPACK_IMPORTED_MODULE_1__.max(data, function(d) {\n                return d.value;\n            })\n        ]).range([\n            innerHeight,\n            0\n        ]);\n        var colorScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal(d3__WEBPACK_IMPORTED_MODULE_1__.schemeCategory10);\n        var svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(ref.current);\n        var chart = svg.select(\"g\");\n        chart.selectAll(\".bar\").data(data).join(function(enter) {\n            return enter.append(\"rect\").classed(\"bar\", true).attr(\"y\", function(d) {\n                return yScale(0);\n            }).attr(\"height\", 0);\n        }).attr(\"x\", function(d) {\n            return xScale(d.year);\n        }).style(\"fill\", function(d, i) {\n            return colorScale(i);\n        }).attr(\"width\", function(d) {\n            return xScale.bandwidth();\n        }).transition().duration(duration).delay(function(d, i) {\n            return i * duration / 10;\n        }).attr(\"height\", function(d) {\n            return innerHeight - yScale(d.value);\n        }).attr(\"y\", function(d) {\n            return yScale(d.value);\n        });\n        chart.selectAll(\".bar-label\").data(data).join(function(enter) {\n            return enter.append(\"text\").classed(\"bar-label\", true).attr(\"text-anchor\", \"middle\").attr(\"dx\", 0).attr(\"y\", yScale(0)).attr(\"dy\", -6).attr(\"opacity\", 0);\n        }).attr(\"x\", function(d) {\n            return xScale(d.year) + xScale.bandwidth() / 2;\n        }).text(function(d) {\n            return d.value;\n        }).transition().duration(duration).delay(function(d, i) {\n            return i * duration / 10;\n        }).attr(\"opacity\", 1).attr(\"y\", function(d) {\n            return yScale(d.value);\n        });\n        var xAxis = d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom().scale(xScale);\n        chart.selectAll(\".x.axis\").data([\n            null\n        ]).join(\"g\").classed(\"x axis\", true).attr(\"transform\", \"translate(0,\".concat(innerHeight, \")\")).transition().duration(duration).call(xAxis);\n        var yAxis = d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft().ticks(5).scale(yScale);\n        chart.selectAll(\".y.axis\").data([\n            null\n        ]).join(\"g\").classed(\"y axis\", true).attr(\"transform\", \"translate(0,0)\").transition().duration(duration).call(yAxis);\n        chart.selectAll(\".x-axis-title\").data([\n            \"Year\"\n        ]).join(\"text\").classed(\"x-axis-title\", true).attr(\"x\", innerWidth / 2).attr(\"y\", innerHeight + 60).attr(\"fill\", \"#000\").style(\"font-size\", \"20px\").style(\"text-anchor\", \"middle\").text(function(d) {\n            return d;\n        });\n        chart.selectAll(\".y-axis-title\").data([\n            yAxisTitle\n        ]).join(\"text\").classed(\"y-axis-title\", true).attr(\"x\", 0).attr(\"y\", 0).attr(\"transform\", \"translate(-50, \".concat(innerHeight / 2, \") rotate(-90)\")).attr(\"fill\", \"#000\").style(\"font-size\", \"20px\").style(\"text-anchor\", \"middle\").text(function(d) {\n            return d;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"chart\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            ref: ref\n        }, void 0, false, {\n            fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/components/barChart.js\",\n            lineNumber: 135,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/components/barChart.js\",\n        lineNumber: 134,\n        columnNumber: 5\n    }, this);\n}\n_s(BarChart, \"lq1tzM4DdcBd9rchfALtCTAkzkA=\");\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUMsQ0FDN0J0QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUNaQSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUNaQSxJQUFJLENBQUMsV0FBVyxFQUFFLGlCQUFnQixDQUFrQixNQUFhLENBQTdCSixXQUFXLEdBQUcsQ0FBQyxFQUFDLGVBQWEsQ0FBQyxDQUFDLENBQ25FSSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUNwQnVCLEtBQUssQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQzFCQSxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUM5QkssSUFBSSxDQUFDLFNBQUNyQixDQUFDO21CQUFLQSxDQUFDO1NBQUEsQ0FBQyxDQUFDO0tBQ25CO0lBRUQscUJBQ0UsOERBQUM2QixLQUFHO1FBQUNDLFNBQVMsRUFBQyxPQUFPO2tCQUNwQiw0RUFBQ3BCLEtBQUc7WUFBQ3BCLEdBQUcsRUFBRUEsR0FBRzs7Ozs7Z0JBQVE7Ozs7O1lBQ2pCLENBQ047Q0FDSDtHQXJJUVosUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBdUlqQiwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYmFyQ2hhcnQuanM/ODY1OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkMyBmcm9tIFwiZDNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBkdXJhdGlvbiA9IDUwMDtcbmZ1bmN0aW9uIEJhckNoYXJ0KHsgd2lkdGgsIGhlaWdodCwgZGF0YSwgeUF4aXNUaXRsZSB9KSB7XG4gIGNvbnN0IG1hcmdpbiA9IHtcbiAgICB0b3A6IDYwLFxuICAgIGJvdHRvbTogMTAwLFxuICAgIGxlZnQ6IDgwLFxuICAgIHJpZ2h0OiA0MCxcbiAgfTtcbiAgY29uc3QgaW5uZXJXaWR0aCA9IHdpZHRoIC0gbWFyZ2luLmxlZnQgLSBtYXJnaW4ucmlnaHQ7XG4gIGNvbnN0IGlubmVySGVpZ2h0ID0gaGVpZ2h0IC0gbWFyZ2luLnRvcCAtIG1hcmdpbi5ib3R0b207XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWApO1xuICB9LCBbXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkcmF3KCk7XG4gIH0sIFtkYXRhXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgY29uc3QgZHJhdyA9ICgpID0+IHtcbiAgICBjb25zdCB4U2NhbGUgPSBkM1xuICAgICAgLnNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKGRhdGEubWFwKChkKSA9PiBkLnllYXIpKVxuICAgICAgLnJhbmdlKFswLCBpbm5lcldpZHRoXSk7XG5cbiAgICBjb25zdCB5U2NhbGUgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhLCAoZCkgPT4gZC52YWx1ZSldKVxuICAgICAgLnJhbmdlKFtpbm5lckhlaWdodCwgMF0pO1xuXG4gICAgY29uc3QgY29sb3JTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbChkMy5zY2hlbWVDYXRlZ29yeTEwKTtcblxuICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChyZWYuY3VycmVudCk7XG4gICAgY29uc3QgY2hhcnQgPSBzdmcuc2VsZWN0KFwiZ1wiKTtcblxuICAgIGNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiLmJhclwiKVxuICAgICAgLmRhdGEoZGF0YSlcbiAgICAgIC5qb2luKChlbnRlcikgPT5cbiAgICAgICAgZW50ZXJcbiAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgIC5jbGFzc2VkKFwiYmFyXCIsIHRydWUpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIChkKSA9PiB5U2NhbGUoMCkpXG4gICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgMClcbiAgICAgIClcbiAgICAgIC5hdHRyKFwieFwiLCAoZCkgPT4geFNjYWxlKGQueWVhcikpXG4gICAgICAuc3R5bGUoXCJmaWxsXCIsIChkLCBpKSA9PiBjb2xvclNjYWxlKGkpKVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCAoZCkgPT4geFNjYWxlLmJhbmR3aWR0aCgpKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgLmRlbGF5KChkLCBpKSA9PiAoaSAqIGR1cmF0aW9uKSAvIDEwKVxuICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgKGQpID0+IGlubmVySGVpZ2h0IC0geVNjYWxlKGQudmFsdWUpKVxuICAgICAgLmF0dHIoXCJ5XCIsIChkKSA9PiB5U2NhbGUoZC52YWx1ZSkpO1xuXG4gICAgY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoXCIuYmFyLWxhYmVsXCIpXG4gICAgICAuZGF0YShkYXRhKVxuICAgICAgLmpvaW4oKGVudGVyKSA9PlxuICAgICAgICBlbnRlclxuICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgLmNsYXNzZWQoXCJiYXItbGFiZWxcIiwgdHJ1ZSlcbiAgICAgICAgICAuYXR0cihcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAgICAgLmF0dHIoXCJkeFwiLCAwKVxuICAgICAgICAgIC5hdHRyKFwieVwiLCB5U2NhbGUoMCkpXG4gICAgICAgICAgLmF0dHIoXCJkeVwiLCAtNilcbiAgICAgICAgICAuYXR0cihcIm9wYWNpdHlcIiwgMClcbiAgICAgIClcbiAgICAgIC5hdHRyKFwieFwiLCAoZCkgPT4geFNjYWxlKGQueWVhcikgKyB4U2NhbGUuYmFuZHdpZHRoKCkgLyAyKVxuICAgICAgLnRleHQoKGQpID0+IGQudmFsdWUpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAuZGVsYXkoKGQsIGkpID0+IChpICogZHVyYXRpb24pIC8gMTApXG4gICAgICAuYXR0cihcIm9wYWNpdHlcIiwgMSlcbiAgICAgIC5hdHRyKFwieVwiLCAoZCkgPT4geVNjYWxlKGQudmFsdWUpKTtcblxuICAgIGNvbnN0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSgpLnNjYWxlKHhTY2FsZSk7XG5cbiAgICBjaGFydFxuICAgICAgLnNlbGVjdEFsbChcIi54LmF4aXNcIilcbiAgICAgIC5kYXRhKFtudWxsXSlcbiAgICAgIC5qb2luKFwiZ1wiKVxuICAgICAgLmNsYXNzZWQoXCJ4IGF4aXNcIiwgdHJ1ZSlcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwke2lubmVySGVpZ2h0fSlgKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgLmNhbGwoeEF4aXMpO1xuXG4gICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKDUpLnNjYWxlKHlTY2FsZSk7XG5cbiAgICBjaGFydFxuICAgICAgLnNlbGVjdEFsbChcIi55LmF4aXNcIilcbiAgICAgIC5kYXRhKFtudWxsXSlcbiAgICAgIC5qb2luKFwiZ1wiKVxuICAgICAgLmNsYXNzZWQoXCJ5IGF4aXNcIiwgdHJ1ZSlcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsMClcIilcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgIC5jYWxsKHlBeGlzKTtcblxuICAgIGNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiLngtYXhpcy10aXRsZVwiKVxuICAgICAgLmRhdGEoW1wiWWVhclwiXSlcbiAgICAgIC5qb2luKFwidGV4dFwiKVxuICAgICAgLmNsYXNzZWQoXCJ4LWF4aXMtdGl0bGVcIiwgdHJ1ZSlcbiAgICAgIC5hdHRyKFwieFwiLCBpbm5lcldpZHRoIC8gMilcbiAgICAgIC5hdHRyKFwieVwiLCBpbm5lckhlaWdodCArIDYwKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiIzAwMFwiKVxuICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMjBweFwiKVxuICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC50ZXh0KChkKSA9PiBkKVxuICAgIGNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiLnktYXhpcy10aXRsZVwiKVxuICAgICAgLmRhdGEoW3lBeGlzVGl0bGVdKVxuICAgICAgLmpvaW4oXCJ0ZXh0XCIpXG4gICAgICAuY2xhc3NlZChcInktYXhpcy10aXRsZVwiLCB0cnVlKVxuICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgICAuYXR0cihcInlcIiwgMClcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoLTUwLCAke2lubmVySGVpZ2h0IC8gMn0pIHJvdGF0ZSgtOTApYClcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiMwMDBcIilcbiAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjIwcHhcIilcbiAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dCgoZCkgPT4gZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICA8c3ZnIHJlZj17cmVmfT48L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFyQ2hhcnQ7Il0sIm5hbWVzIjpbImQzIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJkdXJhdGlvbiIsIkJhckNoYXJ0Iiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIiwieUF4aXNUaXRsZSIsIm1hcmdpbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlZiIsInNlbGVjdCIsImN1cnJlbnQiLCJhdHRyIiwiYXBwZW5kIiwiZHJhdyIsInhTY2FsZSIsInNjYWxlQmFuZCIsImRvbWFpbiIsIm1hcCIsImQiLCJ5ZWFyIiwicmFuZ2UiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsIm1heCIsInZhbHVlIiwiY29sb3JTY2FsZSIsInNjYWxlT3JkaW5hbCIsInNjaGVtZUNhdGVnb3J5MTAiLCJzdmciLCJjaGFydCIsInNlbGVjdEFsbCIsImpvaW4iLCJlbnRlciIsImNsYXNzZWQiLCJzdHlsZSIsImkiLCJiYW5kd2lkdGgiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJ0ZXh0IiwieEF4aXMiLCJheGlzQm90dG9tIiwic2NhbGUiLCJjYWxsIiwieUF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/barChart.js\n");

/***/ })

});