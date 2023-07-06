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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ \"./node_modules/d3/src/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\nvar duration = 500;\nfunction BarChart(param) {\n    var width = param.width, height = param.height, data = param.data, yAxisTitle = param.yAxisTitle;\n    _s();\n    var margin = {\n        top: 60,\n        bottom: 100,\n        left: 80,\n        right: 40\n    };\n    var innerWidth = width - margin.left - margin.right;\n    var innerHeight = height - margin.top - margin.bottom;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        d3__WEBPACK_IMPORTED_MODULE_1__.select(ref.current).attr(\"width\", width).attr(\"height\", height).append(\"g\").attr(\"transform\", \"translate(\".concat(margin.left, \", \").concat(margin.top, \")\")).attr(\"align\", \"center\");\n        ;\n    }, []); // eslint-disable-line react-hooks/exhaustive-deps\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        draw();\n    }, [\n        data\n    ]); // eslint-disable-line react-hooks/exhaustive-deps\n    var draw = function() {\n        var xScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleBand().domain(data.map(function(d) {\n            return d.question;\n        })).range([\n            0,\n            innerWidth\n        ]);\n        var yScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleLinear().domain([\n            0,\n            d3__WEBPACK_IMPORTED_MODULE_1__.max(data, function(d) {\n                return d.value;\n            })\n        ]).range([\n            innerHeight,\n            0\n        ]);\n        var colorScale = d3__WEBPACK_IMPORTED_MODULE_1__.scaleOrdinal(d3__WEBPACK_IMPORTED_MODULE_1__.schemeCategory10);\n        var svg = d3__WEBPACK_IMPORTED_MODULE_1__.select(ref.current);\n        var chart = svg.select(\"g\");\n        chart.selectAll(\".bar\").data(data).join(function(enter) {\n            return enter.append(\"rect\").classed(\"bar\", true).attr(\"y\", function(d) {\n                return yScale(0);\n            }).attr(\"height\", 0);\n        }).attr(\"x\", function(d) {\n            return xScale(d.question);\n        }).style(\"fill\", function(d, i) {\n            return colorScale(i);\n        }).attr(\"width\", function(d) {\n            return xScale.bandwidth();\n        }).transition().duration(duration).delay(function(d, i) {\n            return i * duration / 10;\n        }).attr(\"height\", function(d) {\n            return innerHeight - yScale(d.value);\n        }).attr(\"y\", function(d) {\n            return yScale(d.value);\n        });\n        var xAxis = d3__WEBPACK_IMPORTED_MODULE_1__.axisBottom().scale(xScale);\n        chart.selectAll(\".x.axis\").data([\n            null\n        ]).join(\"g\").classed(\"x axis\", true).attr(\"transform\", \"translate(0,\".concat(innerHeight, \")\")).transition().duration(duration).call(xAxis);\n        var yAxis = d3__WEBPACK_IMPORTED_MODULE_1__.axisLeft().ticks(5).scale(yScale);\n        chart.selectAll(\".y.axis\").data([\n            null\n        ]).join(\"g\").classed(\"y axis\", true).attr(\"transform\", \"translate(0,0)\").transition().duration(duration).call(yAxis);\n        chart.selectAll(\".x-axis-title\").data([\n            \"question\"\n        ]).join(\"text\").classed(\"x-axis-title\", true).attr(\"x\", innerWidth / 2).attr(\"y\", innerHeight + 60).attr(\"fill\", \"#000\").style(\"font-size\", \"20px\").style(\"text-anchor\", \"middle\").text(function(d) {\n            return d;\n        });\n        chart.selectAll(\".y-axis-title\").data([\n            yAxisTitle\n        ]).join(\"text\").classed(\"y-axis-title\", true).attr(\"x\", 0).attr(\"y\", 0).attr(\"transform\", \"translate(-50, \".concat(innerHeight / 2, \") rotate(-90)\")).attr(\"fill\", \"#000\").style(\"font-size\", \"20px\").style(\"text-anchor\", \"middle\").text(function(d) {\n            return d;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"chartContainer\",\n        className: \"chart\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n            ref: ref\n        }, void 0, false, {\n            fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/components/barChart.js\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/components/barChart.js\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n_s(BarChart, \"lq1tzM4DdcBd9rchfALtCTAkzkA=\");\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQWUsQ0FBQyxDQUMxQi9CLElBQUksQ0FBQztZQUFDQyxVQUFVO1NBQUMsQ0FBQyxDQUNsQitCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FDWkUsT0FBTyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FDN0J0QixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUNaQSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUNaQSxJQUFJLENBQUMsV0FBVyxFQUFFLGlCQUFnQixDQUFrQixNQUFhLENBQTdCSixXQUFXLEdBQUcsQ0FBQyxFQUFDLGVBQWEsQ0FBQyxDQUFDLENBQ25FSSxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUNwQnVCLEtBQUssQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQzFCQSxLQUFLLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUM5QlksSUFBSSxDQUFDLFNBQUM1QixDQUFDO21CQUFLQSxDQUFDO1NBQUEsQ0FBQyxDQUFDO0tBQ25CO0lBRUQscUJBQ0UsOERBQUM2QixLQUFHO1FBQUNDLEVBQUUsRUFBQyxnQkFBZ0I7UUFBQ0MsU0FBUyxFQUFDLE9BQU87a0JBQ3hDLDRFQUFDckIsS0FBRztZQUVGcEIsR0FBRyxFQUFFQSxHQUFHOzs7OztnQkFBUTs7Ozs7WUFDZCxDQUNOO0NBQ0g7R0FwSFFaLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQXNIakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JhckNoYXJ0LmpzPzg2NTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgZHVyYXRpb24gPSA1MDA7XG5mdW5jdGlvbiBCYXJDaGFydCh7IHdpZHRoLCBoZWlnaHQsIGRhdGEsIHlBeGlzVGl0bGUgfSkge1xuICBjb25zdCBtYXJnaW4gPSB7XG4gICAgdG9wOiA2MCxcbiAgICBib3R0b206IDEwMCxcbiAgICBsZWZ0OiA4MCxcbiAgICByaWdodDogNDAsXG4gIH07XG4gIGNvbnN0IGlubmVyV2lkdGggPSB3aWR0aCAtIG1hcmdpbi5sZWZ0IC0gbWFyZ2luLnJpZ2h0O1xuICBjb25zdCBpbm5lckhlaWdodCA9IGhlaWdodCAtIG1hcmdpbi50b3AgLSBtYXJnaW4uYm90dG9tO1xuICBjb25zdCByZWYgPSB1c2VSZWYoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGQzLnNlbGVjdChyZWYuY3VycmVudClcbiAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgke21hcmdpbi5sZWZ0fSwgJHttYXJnaW4udG9wfSlgKS5hdHRyKFwiYWxpZ25cIiwgXCJjZW50ZXJcIik7O1xuICB9LCBbXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkcmF3KCk7XG4gIH0sIFtkYXRhXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG5cbiAgY29uc3QgZHJhdyA9ICgpID0+IHtcbiAgICBjb25zdCB4U2NhbGUgPSBkM1xuICAgICAgLnNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKGRhdGEubWFwKChkKSA9PiBkLnF1ZXN0aW9uKSlcbiAgICAgIC5yYW5nZShbMCwgaW5uZXJXaWR0aF0pO1xuXG4gICAgY29uc3QgeVNjYWxlID0gZDNcbiAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgKGQpID0+IGQudmFsdWUpXSlcbiAgICAgIC5yYW5nZShbaW5uZXJIZWlnaHQsIDBdKTtcblxuICAgIGNvbnN0IGNvbG9yU2NhbGUgPSBkMy5zY2FsZU9yZGluYWwoZDMuc2NoZW1lQ2F0ZWdvcnkxMCk7XG5cbiAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QocmVmLmN1cnJlbnQpO1xuICAgIGNvbnN0IGNoYXJ0ID0gc3ZnLnNlbGVjdChcImdcIik7XG5cbiAgICBjaGFydFxuICAgICAgLnNlbGVjdEFsbChcIi5iYXJcIilcbiAgICAgIC5kYXRhKGRhdGEpXG4gICAgICAuam9pbigoZW50ZXIpID0+XG4gICAgICAgIGVudGVyXG4gICAgICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAuY2xhc3NlZChcImJhclwiLCB0cnVlKVxuICAgICAgICAgIC5hdHRyKFwieVwiLCAoZCkgPT4geVNjYWxlKDApKVxuICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDApXG4gICAgICApXG4gICAgICAuYXR0cihcInhcIiwgKGQpID0+IHhTY2FsZShkLnF1ZXN0aW9uKSlcbiAgICAgIC5zdHlsZShcImZpbGxcIiwgKGQsIGkpID0+IGNvbG9yU2NhbGUoaSkpXG4gICAgICAuYXR0cihcIndpZHRoXCIsIChkKSA9PiB4U2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAuZGVsYXkoKGQsIGkpID0+IChpICogZHVyYXRpb24pIC8gMTApXG4gICAgICAuYXR0cihcImhlaWdodFwiLCAoZCkgPT4gaW5uZXJIZWlnaHQgLSB5U2NhbGUoZC52YWx1ZSkpXG4gICAgICAuYXR0cihcInlcIiwgKGQpID0+IHlTY2FsZShkLnZhbHVlKSk7XG5cblxuXG4gICAgY29uc3QgeEF4aXMgPSBkMy5heGlzQm90dG9tKCkuc2NhbGUoeFNjYWxlKTtcblxuICAgIGNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiLnguYXhpc1wiKVxuICAgICAgLmRhdGEoW251bGxdKVxuICAgICAgLmpvaW4oXCJnXCIpXG4gICAgICAuY2xhc3NlZChcInggYXhpc1wiLCB0cnVlKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCR7aW5uZXJIZWlnaHR9KWApXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZHVyYXRpb24oZHVyYXRpb24pXG4gICAgICAuY2FsbCh4QXhpcyk7XG5cbiAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KCkudGlja3MoNSkuc2NhbGUoeVNjYWxlKTtcblxuICAgIGNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiLnkuYXhpc1wiKVxuICAgICAgLmRhdGEoW251bGxdKVxuICAgICAgLmpvaW4oXCJnXCIpXG4gICAgICAuY2xhc3NlZChcInkgYXhpc1wiLCB0cnVlKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCwwKVwiKVxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmR1cmF0aW9uKGR1cmF0aW9uKVxuICAgICAgLmNhbGwoeUF4aXMpO1xuXG4gICAgY2hhcnRcbiAgICAgIC5zZWxlY3RBbGwoXCIueC1heGlzLXRpdGxlXCIpXG4gICAgICAuZGF0YShbXCJxdWVzdGlvblwiXSlcbiAgICAgIC5qb2luKFwidGV4dFwiKVxuICAgICAgLmNsYXNzZWQoXCJ4LWF4aXMtdGl0bGVcIiwgdHJ1ZSlcbiAgICAgIC5hdHRyKFwieFwiLCBpbm5lcldpZHRoIC8gMilcbiAgICAgIC5hdHRyKFwieVwiLCBpbm5lckhlaWdodCArIDYwKVxuICAgICAgLmF0dHIoXCJmaWxsXCIsIFwiIzAwMFwiKVxuICAgICAgLnN0eWxlKFwiZm9udC1zaXplXCIsIFwiMjBweFwiKVxuICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJtaWRkbGVcIilcbiAgICAgIC50ZXh0KChkKSA9PiBkKVxuICAgIGNoYXJ0XG4gICAgICAuc2VsZWN0QWxsKFwiLnktYXhpcy10aXRsZVwiKVxuICAgICAgLmRhdGEoW3lBeGlzVGl0bGVdKVxuICAgICAgLmpvaW4oXCJ0ZXh0XCIpXG4gICAgICAuY2xhc3NlZChcInktYXhpcy10aXRsZVwiLCB0cnVlKVxuICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgICAuYXR0cihcInlcIiwgMClcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoLTUwLCAke2lubmVySGVpZ2h0IC8gMn0pIHJvdGF0ZSgtOTApYClcbiAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIiMwMDBcIilcbiAgICAgIC5zdHlsZShcImZvbnQtc2l6ZVwiLCBcIjIwcHhcIilcbiAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwibWlkZGxlXCIpXG4gICAgICAudGV4dCgoZCkgPT4gZCk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiY2hhcnRDb250YWluZXJcIiBjbGFzc05hbWU9XCJjaGFydFwiPlxuICAgICAgPHN2Z1xuXG4gICAgICAgIHJlZj17cmVmfT48L3N2Zz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFyQ2hhcnQ7Il0sIm5hbWVzIjpbImQzIiwiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJkdXJhdGlvbiIsIkJhckNoYXJ0Iiwid2lkdGgiLCJoZWlnaHQiLCJkYXRhIiwieUF4aXNUaXRsZSIsIm1hcmdpbiIsInRvcCIsImJvdHRvbSIsImxlZnQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInJlZiIsInNlbGVjdCIsImN1cnJlbnQiLCJhdHRyIiwiYXBwZW5kIiwiZHJhdyIsInhTY2FsZSIsInNjYWxlQmFuZCIsImRvbWFpbiIsIm1hcCIsImQiLCJxdWVzdGlvbiIsInJhbmdlIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJtYXgiLCJ2YWx1ZSIsImNvbG9yU2NhbGUiLCJzY2FsZU9yZGluYWwiLCJzY2hlbWVDYXRlZ29yeTEwIiwic3ZnIiwiY2hhcnQiLCJzZWxlY3RBbGwiLCJqb2luIiwiZW50ZXIiLCJjbGFzc2VkIiwic3R5bGUiLCJpIiwiYmFuZHdpZHRoIiwidHJhbnNpdGlvbiIsImRlbGF5IiwieEF4aXMiLCJheGlzQm90dG9tIiwic2NhbGUiLCJjYWxsIiwieUF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwidGV4dCIsImRpdiIsImlkIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/barChart.js\n");

/***/ })

});