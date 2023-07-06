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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nvar duration = 500;\nfunction BarChart(param) {\n    var width = param.width, height = param.height, data = param.data, yAxisTitle = param.yAxisTitle;\n    _s();\n    var margin = {\n        top: 60,\n        bottom: 100,\n        left: 80,\n        right: 40\n    };\n    var innerWidth = width - margin.left - margin.right;\n    var innerHeight = height - margin.top - margin.bottom;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        d3__WEBPACK_IMPORTED_MODULE_1__.select(ref.current).attr(\"width\", width).attr(\"height\", height).append(\"g\").attr(\"transform\", \"translate(\".concat(margin.left, \", \").concat(margin.top, \")\")).attr(\"align\", \"center\");\n        ;\n    }, []); // eslint-disable-line react-hooks/exhaustive-deps\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        draw();\n    }, [\n        data\n    ]); // eslint-disable-line react-hooks/exhaustive-deps\n    var draw = function() {\n        var xScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleBand().domain(data.map(function(d) {\n            return d.question;\n        })).range([\n            0,\n            innerWidth\n        ]);\n        var yScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().domain([\n            0,\n            d3__WEBPACK_IMPORTED_MODULE_1__.max(data, function(d) {\n                return d.value;\n            })\n        ]).range([\n            innerHeight,\n            0\n        ]);\n        var colorScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal([\n            \"rgba(0,0,0,0.2)\",\n            \"rgba(0,0,0,0.6)\"\n        ]);\n        var svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(ref.current);\n        var chart = svg.select(\"g\");\n        chart.selectAll(\".bar\").data(data).join(function(enter) {\n            return enter.append(\"rect\").classed(\"bar\", true).attr(\"y\", function(d) {\n                return yScale(0);\n            }).attr(\"height\", 0).on(\"mouseover\", function(d, i) {\n                console.log(\"boop\");\n                d3__WEBPACK_IMPORTED_MODULE_1__.select(this).transition().attr(\"fill\", \"blue\");\n            });\n        }).attr(\"x\", function(d) {\n            return xScale(d.question);\n        }).style(\"fill\", function(d, i) {\n            return colorScale(i);\n        }).attr(\"width\", function(d) {\n            return xScale.bandwidth();\n        }).transition().duration(duration).delay(function(d, i) {\n            return i * duration / 10;\n        }).attr(\"height\", function(d) {\n            return innerHeight - yScale(d.value);\n        }).attr(\"y\", function(d) {\n            return yScale(d.value);\n        });\n        var xAxis = d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom().scale(xScale);\n        chart.selectAll(\".x.axis\").data([\n            null\n        ]).join(\"g\").classed(\"x axis\", true).attr(\"transform\", \"translate(0,\".concat(innerHeight, \")\")).transition().duration(duration).call(xAxis);\n        var yAxis = d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft().ticks(5).scale(yScale);\n        chart.selectAll(\".y.axis\").data([\n            null\n        ]).join(\"g\").classed(\"y axis\", true).attr(\"transform\", \"translate(0,0)\").transition().duration(duration).call(yAxis);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"chartContainer\",\n        className: \"chart\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"my_dataviz\"\n        }, void 0, false, {\n            fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/components/barChart.js\",\n            lineNumber: 103,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/components/barChart.js\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, this);\n}\n_s(BarChart, \"lq1tzM4DdcBd9rchfALtCTAkzkA=\");\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly9fTl9FLy4vY29tcG9uZW50cy9iYXJDaGFydC5qcz84NjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGQzIGZyb20gXCJkM1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGR1cmF0aW9uID0gNTAwO1xuZnVuY3Rpb24gQmFyQ2hhcnQoeyB3aWR0aCwgaGVpZ2h0LCBkYXRhLCB5QXhpc1RpdGxlIH0pIHtcbiAgY29uc3QgbWFyZ2luID0ge1xuICAgIHRvcDogNjAsXG4gICAgYm90dG9tOiAxMDAsXG4gICAgbGVmdDogODAsXG4gICAgcmlnaHQ6IDQwLFxuICB9O1xuICBjb25zdCBpbm5lcldpZHRoID0gd2lkdGggLSBtYXJnaW4ubGVmdCAtIG1hcmdpbi5yaWdodDtcbiAgY29uc3QgaW5uZXJIZWlnaHQgPSBoZWlnaHQgLSBtYXJnaW4udG9wIC0gbWFyZ2luLmJvdHRvbTtcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZDMuc2VsZWN0KHJlZi5jdXJyZW50KVxuICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKCR7bWFyZ2luLmxlZnR9LCAke21hcmdpbi50b3B9KWApLmF0dHIoXCJhbGlnblwiLCBcImNlbnRlclwiKTs7XG4gIH0sIFtdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRyYXcoKTtcbiAgfSwgW2RhdGFdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcblxuICBjb25zdCBkcmF3ID0gKCkgPT4ge1xuICAgIGNvbnN0IHhTY2FsZSA9IGQzXG4gICAgICAuc2NhbGVCYW5kKClcbiAgICAgIC5kb21haW4oZGF0YS5tYXAoKGQpID0+IGQucXVlc3Rpb24pKVxuICAgICAgLnJhbmdlKFswLCBpbm5lcldpZHRoXSk7XG5cbiAgICBjb25zdCB5U2NhbGUgPSBkM1xuICAgICAgLnNjYWxlTGluZWFyKClcbiAgICAgIC5kb21haW4oWzAsIGQzLm1heChkYXRhLCAoZCkgPT4gZC52YWx1ZSldKVxuICAgICAgLnJhbmdlKFtpbm5lckhlaWdodCwgMF0pO1xuXG4gICAgY29uc3QgY29sb3JTY2FsZSA9IGQzLnNjYWxlT3JkaW5hbChbXCJyZ2JhKDAsMCwwLDAuMilcIiwgXCJyZ2JhKDAsMCwwLDAuNilcIl0pO1xuXG4gICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KHJlZi5jdXJyZW50KTtcbiAgICBjb25zdCBjaGFydCA9IHN2Zy5zZWxlY3QoXCJnXCIpO1xuXG5cblxuXG4gICAgY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoXCIuYmFyXCIpXG4gICAgICAuZGF0YShkYXRhKVxuICAgICAgLmpvaW4oKGVudGVyKSA9PlxuICAgICAgICBlbnRlclxuICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgLmNsYXNzZWQoXCJiYXJcIiwgdHJ1ZSlcbiAgICAgICAgICAuYXR0cihcInlcIiwgKGQpID0+IHlTY2FsZSgwKSlcbiAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCAwKS5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdib29wJylcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS50cmFuc2l0aW9uKCkuYXR0cignZmlsbCcsICdibHVlJyk7XG4gICAgICAgICAgfSlcbiAgICAgIClcbiAgICAgIC5hdHRyKFwieFwiLCAoZCkgPT4geFNjYWxlKGQucXVlc3Rpb24pKVxuICAgICAgLnN0eWxlKFwiZmlsbFwiLCAoZCwgaSkgPT4gY29sb3JTY2FsZShpKSlcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgKGQpID0+IHhTY2FsZS5iYW5kd2lkdGgoKSlcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgIC5kZWxheSgoZCwgaSkgPT4gKGkgKiBkdXJhdGlvbikgLyAxMClcbiAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIChkKSA9PiBpbm5lckhlaWdodCAtIHlTY2FsZShkLnZhbHVlKSlcbiAgICAgIC5hdHRyKFwieVwiLCAoZCkgPT4geVNjYWxlKGQudmFsdWUpKVxuXG5cblxuICAgIGNvbnN0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSgpLnNjYWxlKHhTY2FsZSk7XG5cbiAgICBjaGFydFxuICAgICAgLnNlbGVjdEFsbChcIi54LmF4aXNcIilcbiAgICAgIC5kYXRhKFtudWxsXSlcbiAgICAgIC5qb2luKFwiZ1wiKVxuICAgICAgLmNsYXNzZWQoXCJ4IGF4aXNcIiwgdHJ1ZSlcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwke2lubmVySGVpZ2h0fSlgKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgLmNhbGwoeEF4aXMpO1xuXG4gICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKDUpLnNjYWxlKHlTY2FsZSk7XG5cbiAgICBjaGFydFxuICAgICAgLnNlbGVjdEFsbChcIi55LmF4aXNcIilcbiAgICAgIC5kYXRhKFtudWxsXSlcbiAgICAgIC5qb2luKFwiZ1wiKVxuICAgICAgLmNsYXNzZWQoXCJ5IGF4aXNcIiwgdHJ1ZSlcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsMClcIilcbiAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgIC5kdXJhdGlvbihkdXJhdGlvbilcbiAgICAgIC5jYWxsKHlBeGlzKTtcblxuXG5cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJjaGFydENvbnRhaW5lclwiIGNsYXNzTmFtZT1cImNoYXJ0XCI+XG4gICAgICA8ZGl2IGlkPVwibXlfZGF0YXZpelwiPjwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCYXJDaGFydDsiXSwibmFtZXMiOlsiZDMiLCJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImR1cmF0aW9uIiwiQmFyQ2hhcnQiLCJ3aWR0aCIsImhlaWdodCIsImRhdGEiLCJ5QXhpc1RpdGxlIiwibWFyZ2luIiwidG9wIiwiYm90dG9tIiwibGVmdCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVmIiwic2VsZWN0IiwiY3VycmVudCIsImF0dHIiLCJhcHBlbmQiLCJkcmF3IiwieFNjYWxlIiwic2NhbGVCYW5kIiwiZG9tYWluIiwibWFwIiwiZCIsInF1ZXN0aW9uIiwicmFuZ2UiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsIm1heCIsInZhbHVlIiwiY29sb3JTY2FsZSIsInNjYWxlT3JkaW5hbCIsInN2ZyIsImNoYXJ0Iiwic2VsZWN0QWxsIiwiam9pbiIsImVudGVyIiwiY2xhc3NlZCIsIm9uIiwiaSIsImNvbnNvbGUiLCJsb2ciLCJ0cmFuc2l0aW9uIiwic3R5bGUiLCJiYW5kd2lkdGgiLCJkZWxheSIsInhBeGlzIiwiYXhpc0JvdHRvbSIsInNjYWxlIiwiY2FsbCIsInlBeGlzIiwiYXhpc0xlZnQiLCJ0aWNrcyIsImRpdiIsImlkIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/barChart.js\n");

/***/ })

});