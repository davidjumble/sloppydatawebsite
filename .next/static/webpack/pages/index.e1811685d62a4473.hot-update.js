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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_particles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/particles */ \"./data/particles.js\");\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* harmony import */ var _components_barChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/barChart */ \"./components/barChart.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar particlesInit = function() {\n    var _ref = _asyncToGenerator(_Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(main) {\n        return _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    console.log(main);\n                    _ctx.next = 3;\n                    return (0,tsparticles__WEBPACK_IMPORTED_MODULE_5__.loadFull)(main);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function particlesInit(main) {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        width: \"60px\"\n    }), barStyles = ref[0], updateBarStyles = ref[2];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var bars = document.getElementsByClassName(\"bar\");\n        console.log(\"svg\", bars.item(1).getAttribute(\"width\"));\n        console.log(\"svg\", bars.item(1).getAttribute(\"height\"));\n    }, []);\n    var particleBars = {\n        width: barStyles.width,\n        height: \"200px\",\n        backgroundColor: \"teal\"\n    };\n    var particlesContainer = {\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            \"glow on\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: particlesContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_tsparticles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"tsparticles\",\n                    init: particlesInit,\n                    options: {\n                        fullScreen: {\n                            enable: false,\n                            zIndex: 0\n                        },\n                        particles: {\n                            number: {\n                                value: 200,\n                                limit: 300,\n                                density: {\n                                    enable: true,\n                                    value_area: 800\n                                }\n                            },\n                            color: {\n                                value: \"#ffffff\"\n                            },\n                            shape: {\n                                type: \"circle\",\n                                stroke: {\n                                    width: 0,\n                                    color: \"#000000\"\n                                },\n                                polygon: {\n                                    nb_sides: 5\n                                }\n                            },\n                            opacity: {\n                                value: 0.5,\n                                random: true,\n                                anim: {\n                                    enable: true,\n                                    speed: 1,\n                                    opacity_min: 0.5,\n                                    sync: false\n                                }\n                            },\n                            size: {\n                                value: 30,\n                                random: true,\n                                anim: {\n                                    enable: true,\n                                    speed: 10,\n                                    size_min: 10,\n                                    sync: false\n                                }\n                            },\n                            links: {\n                                enable: false\n                            },\n                            move: {\n                                enable: true,\n                                speed: 3,\n                                direction: \"none\",\n                                random: false,\n                                straight: false,\n                                out_mode: \"out\",\n                                bounce: false,\n                                attract: {\n                                    enable: false,\n                                    rotateX: 600,\n                                    rotateY: 1200\n                                }\n                            }\n                        },\n                        interactivity: {\n                            detect_on: \"canvas\",\n                            events: {\n                                onHover: {\n                                    enable: true,\n                                    mode: \"bubble\",\n                                    parallax: {\n                                        enable: false,\n                                        force: 60,\n                                        smooth: 10\n                                    }\n                                },\n                                onClick: {\n                                    enable: true,\n                                    mode: \"push\"\n                                },\n                                resize: true\n                            },\n                            modes: {\n                                grab: {\n                                    distance: 400,\n                                    lineLinked: {\n                                        opacity: 1\n                                    }\n                                },\n                                bubble: {\n                                    distance: 400,\n                                    size: 100,\n                                    duration: 2,\n                                    opacity: 1,\n                                    speed: 2\n                                },\n                                repulse: {\n                                    distance: 200\n                                },\n                                push: {\n                                    particles_nb: 4\n                                },\n                                remove: {\n                                    particles_nb: 2\n                                }\n                            }\n                        },\n                        detectRetina: true,\n                        fpsLimit: 60,\n                        responsive: [\n                            {\n                                maxWidth: 400,\n                                options: {}\n                            },\n                            {\n                                maxWidth: 800,\n                                options: {}\n                            }\n                        ],\n                        background: {\n                            color: \"#000\"\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_barChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                width: 800,\n                height: 450,\n                data: _data_data__WEBPACK_IMPORTED_MODULE_6__[\"default\"].USData,\n                yAxisTitle: \" GDP growth\"\n            }, void 0, false, {\n                fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                lineNumber: 175,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"ZmqIX/aEFo2qegZ+AkILXj/uPvQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztvQ0FDWGhDLE9BQU8sRUFBRSxDQUFDO29DQUNWRyxLQUFLLEVBQUUsQ0FBQztpQ0FDVDtnQ0FDRDhCLE9BQU8sRUFBRTtvQ0FDUEosUUFBUSxFQUFFLEdBQUc7aUNBQ2Q7Z0NBQ0RLLElBQUksRUFBRTtvQ0FDSkMsWUFBWSxFQUFFLENBQUM7aUNBQ2hCO2dDQUNEQyxNQUFNLEVBQUU7b0NBQ05ELFlBQVksRUFBRSxDQUFDO2lDQUNoQjs2QkFDRjt5QkFDRjt3QkFDREUsWUFBWSxFQUFFLElBQUk7d0JBQ2xCQyxRQUFRLEVBQUUsRUFBRTt3QkFDWkMsVUFBVSxFQUFFOzRCQUFDO2dDQUNYQyxRQUFRLEVBQUUsR0FBRztnQ0FDYnhELE9BQU8sRUFBRSxFQUFpQjs2QkFDM0I7NEJBQUU7Z0NBQ0R3RCxRQUFRLEVBQUUsR0FBRztnQ0FDYnhELE9BQU8sRUFBRSxFQUFpQjs2QkFDM0I7eUJBQUM7d0JBQ0Z5RCxVQUFVLEVBQUU7NEJBQ1YvQyxLQUFLLEVBQUUsTUFBTTt5QkFDZDtxQkFDRjs7Ozs7d0JBQ0Q7Ozs7O29CQUNFOzBCQUNOLDhEQUFDakMsNERBQVE7Z0JBQUNNLEtBQUssRUFBRSxHQUFHO2dCQUNsQlMsTUFBTSxFQUFFLEdBQUc7Z0JBQ1hoQixJQUFJLEVBQ0ZBLHlEQUFXO2dCQUVibUYsVUFBVSxFQUFHLGFBQVc7Ozs7O29CQUFnQjs7Ozs7O1lBQ3JDLENBQ1I7Q0FDRjtHQWxLdUI3RSxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBwYXJ0aWNsZXNEYXRhIH0gZnJvbSAnLi4vZGF0YS9wYXJ0aWNsZXMnO1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tIFwicmVhY3QtdHNwYXJ0aWNsZXNcIjtcbmltcG9ydCB7IGxvYWRGdWxsIH0gZnJvbSBcInRzcGFydGljbGVzXCI7XG5cbmltcG9ydCBkYXRhIGZyb20gXCIuLi9kYXRhL2RhdGFcIjtcbmltcG9ydCBCYXJDaGFydCBmcm9tIFwiLi4vY29tcG9uZW50cy9iYXJDaGFydFwiO1xuY29uc3QgcGFydGljbGVzSW5pdCA9IGFzeW5jIChtYWluKSA9PiB7XG4gIGNvbnNvbGUubG9nKG1haW4pO1xuXG4gIC8vIHlvdSBjYW4gaW5pdGlhbGl6ZSB0aGUgdHNQYXJ0aWNsZXMgaW5zdGFuY2UgKG1haW4pIGhlcmUsIGFkZGluZyBjdXN0b20gc2hhcGVzIG9yIHByZXNldHNcbiAgLy8gdGhpcyBsb2FkcyB0aGUgdHNwYXJ0aWNsZXMgcGFja2FnZSBidW5kbGUsIGl0J3MgdGhlIGVhc2llc3QgbWV0aG9kIGZvciBnZXR0aW5nIGV2ZXJ5dGhpbmcgcmVhZHlcbiAgLy8gc3RhcnRpbmcgZnJvbSB2MiB5b3UgY2FuIGFkZCBvbmx5IHRoZSBmZWF0dXJlcyB5b3UgbmVlZCByZWR1Y2luZyB0aGUgYnVuZGxlIHNpemVcbiAgYXdhaXQgbG9hZEZ1bGwobWFpbik7XG59O1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2JhclN0eWxlcywgLCB1cGRhdGVCYXJTdHlsZXNdID0gdXNlU3RhdGUoeyB3aWR0aDogJzYwcHgnIH0pXG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICB2YXIgYmFycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJiYXJcIilcblxuXG4gICAgICBjb25zb2xlLmxvZygnc3ZnJywgYmFycy5pdGVtKDEpLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSlcbiAgICAgIGNvbnNvbGUubG9nKCdzdmcnLCBiYXJzLml0ZW0oMSkuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKSlcblxuICAgIH0sIFtdXG4gIClcbiAgY29uc3QgcGFydGljbGVCYXJzID0ge1xuICAgIHdpZHRoOiBiYXJTdHlsZXMud2lkdGgsXG4gICAgaGVpZ2h0OiAnMjAwcHgnLFxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RlYWwnXG4gIH1cbiAgY29uc3QgcGFydGljbGVzQ29udGFpbmVyID0ge1xuICAgIC8vIHdpZHRoOiAnNTAwcHgnLFxuICAgIC8vIGhlaWdodDogJzUwMHB4J1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgZ2xvdyBvblxuICAgICAgey8qIDxkaXYgc3R5bGU9e3BhcnRpY2xlQmFyc30+PC9kaXY+ICovfVxuICAgICAgPGRpdiBzdHlsZT17cGFydGljbGVzQ29udGFpbmVyfT5cbiAgICAgICAgPFBhcnRpY2xlc1xuICAgICAgICAgIGNsYXNzTmFtZT1cInRzcGFydGljbGVzXCJcbiAgICAgICAgICBpbml0PXtwYXJ0aWNsZXNJbml0fVxuXG4gICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgZnVsbFNjcmVlbjoge1xuICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICB6SW5kZXg6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgICAgbnVtYmVyOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IDIwMCxcbiAgICAgICAgICAgICAgICBsaW1pdDogMzAwLFxuICAgICAgICAgICAgICAgIGRlbnNpdHk6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHZhbHVlX2FyZWE6IDgwMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogXCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNpcmNsZVwiLFxuICAgICAgICAgICAgICAgIHN0cm9rZToge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHBvbHlnb246IHtcbiAgICAgICAgICAgICAgICAgIG5iX3NpZGVzOiA1XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvcGFjaXR5OiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IDAuNSxcbiAgICAgICAgICAgICAgICByYW5kb206IHRydWUsXG4gICAgICAgICAgICAgICAgYW5pbToge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc3BlZWQ6IDEsXG4gICAgICAgICAgICAgICAgICBvcGFjaXR5X21pbjogMC41LFxuICAgICAgICAgICAgICAgICAgc3luYzogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogMzAsXG4gICAgICAgICAgICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFuaW06IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHNwZWVkOiAxMCxcbiAgICAgICAgICAgICAgICAgIHNpemVfbWluOiAxMCxcbiAgICAgICAgICAgICAgICAgIHN5bmM6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBsaW5rczoge1xuICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW92ZToge1xuICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzcGVlZDogMyxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RyYWlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG91dF9tb2RlOiBcIm91dFwiLFxuICAgICAgICAgICAgICAgIGJvdW5jZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXR0cmFjdDoge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIHJvdGF0ZVg6IDYwMCxcbiAgICAgICAgICAgICAgICAgIHJvdGF0ZVk6IDEyMDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgICAgICAgICAgIGRldGVjdF9vbjogXCJjYW52YXNcIixcbiAgICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgb25Ib3Zlcjoge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbW9kZTogXCJidWJibGVcIixcbiAgICAgICAgICAgICAgICAgIHBhcmFsbGF4OiB7XG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGZvcmNlOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgc21vb3RoOiAxMFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25DbGljazoge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgbW9kZTogXCJwdXNoXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtb2Rlczoge1xuICAgICAgICAgICAgICAgIGdyYWI6IHtcbiAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiA0MDAsXG4gICAgICAgICAgICAgICAgICBsaW5lTGlua2VkOiB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGJ1YmJsZToge1xuICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDQwMCxcbiAgICAgICAgICAgICAgICAgIHNpemU6IDEwMCxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICAgIHNwZWVkOiAyXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXB1bHNlOiB7XG4gICAgICAgICAgICAgICAgICBkaXN0YW5jZTogMjAwXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwdXNoOiB7XG4gICAgICAgICAgICAgICAgICBwYXJ0aWNsZXNfbmI6IDRcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHJlbW92ZToge1xuICAgICAgICAgICAgICAgICAgcGFydGljbGVzX25iOiAyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGV0ZWN0UmV0aW5hOiB0cnVlLFxuICAgICAgICAgICAgZnBzTGltaXQ6IDYwLFxuICAgICAgICAgICAgcmVzcG9uc2l2ZTogW3tcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgb3B0aW9uczogeyAvKiBvbWlzc2lzICovIH1cbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgbWF4V2lkdGg6IDgwMCxcbiAgICAgICAgICAgICAgb3B0aW9uczogeyAvKiBvbWlzc2lzICovIH1cbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8QmFyQ2hhcnQgd2lkdGg9ezgwMH1cbiAgICAgICAgaGVpZ2h0PXs0NTB9XG4gICAgICAgIGRhdGE9e1xuICAgICAgICAgIGRhdGEuVVNEYXRhXG4gICAgICAgIH1cbiAgICAgICAgeUF4aXNUaXRsZT17YCBHRFAgZ3Jvd3RoYH0gPjwvQmFyQ2hhcnQgPlxuICAgIDwvZGl2ID5cbiAgKVxufVxuXG5cblxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJwYXJ0aWNsZXNEYXRhIiwiUGFydGljbGVzIiwibG9hZEZ1bGwiLCJkYXRhIiwiQmFyQ2hhcnQiLCJwYXJ0aWNsZXNJbml0IiwibWFpbiIsImNvbnNvbGUiLCJsb2ciLCJIb21lIiwid2lkdGgiLCJiYXJTdHlsZXMiLCJ1cGRhdGVCYXJTdHlsZXMiLCJiYXJzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiaXRlbSIsImdldEF0dHJpYnV0ZSIsInBhcnRpY2xlQmFycyIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBhcnRpY2xlc0NvbnRhaW5lciIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInN0eWxlIiwiaW5pdCIsIm9wdGlvbnMiLCJmdWxsU2NyZWVuIiwiZW5hYmxlIiwiekluZGV4IiwicGFydGljbGVzIiwibnVtYmVyIiwidmFsdWUiLCJsaW1pdCIsImRlbnNpdHkiLCJ2YWx1ZV9hcmVhIiwiY29sb3IiLCJzaGFwZSIsInR5cGUiLCJzdHJva2UiLCJwb2x5Z29uIiwibmJfc2lkZXMiLCJvcGFjaXR5IiwicmFuZG9tIiwiYW5pbSIsInNwZWVkIiwib3BhY2l0eV9taW4iLCJzeW5jIiwic2l6ZSIsInNpemVfbWluIiwibGlua3MiLCJtb3ZlIiwiZGlyZWN0aW9uIiwic3RyYWlnaHQiLCJvdXRfbW9kZSIsImJvdW5jZSIsImF0dHJhY3QiLCJyb3RhdGVYIiwicm90YXRlWSIsImludGVyYWN0aXZpdHkiLCJkZXRlY3Rfb24iLCJldmVudHMiLCJvbkhvdmVyIiwibW9kZSIsInBhcmFsbGF4IiwiZm9yY2UiLCJzbW9vdGgiLCJvbkNsaWNrIiwicmVzaXplIiwibW9kZXMiLCJncmFiIiwiZGlzdGFuY2UiLCJsaW5lTGlua2VkIiwiYnViYmxlIiwiZHVyYXRpb24iLCJyZXB1bHNlIiwicHVzaCIsInBhcnRpY2xlc19uYiIsInJlbW92ZSIsImRldGVjdFJldGluYSIsImZwc0xpbWl0IiwicmVzcG9uc2l2ZSIsIm1heFdpZHRoIiwiYmFja2dyb3VuZCIsIlVTRGF0YSIsInlBeGlzVGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});