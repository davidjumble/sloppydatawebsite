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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_particles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/particles */ \"./data/particles.js\");\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* harmony import */ var _components_barChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/barChart */ \"./components/barChart.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar particlesInit = function() {\n    var _ref = _asyncToGenerator(_Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(main) {\n        return _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    console.log(main);\n                    _ctx.next = 3;\n                    return (0,tsparticles__WEBPACK_IMPORTED_MODULE_5__.loadFull)(main);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function particlesInit(main) {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        width: \"60px\"\n    }), barStyles = ref[0], updateBarStyles = ref[2];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var bars = document.getElementsByClassName(\"bar\");\n        console.log(\"svg\", bars.item(1).getAttribute(\"width\"));\n        console.log(\"svg\", bars.item(1).getAttribute(\"height\"));\n    }, []);\n    var particleBars = {\n        width: barStyles.width,\n        height: \"200px\",\n        backgroundColor: \"teal\"\n    };\n    var particlesContainer = {\n        position: \"relative\"\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(\"effect\");\n        return function() {\n            console.log(\"cleaned up\");\n            document.getElementById(\"tsparticles\").disabled = true;\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            \"glow on\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: particlesContainer,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_tsparticles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    className: \"tsparticles\",\n                    init: particlesInit,\n                    options: {\n                        fullScreen: false,\n                        particles: {\n                            number: {\n                                value: 200,\n                                limit: 300,\n                                density: {\n                                    enable: true,\n                                    value_area: 800\n                                }\n                            },\n                            color: {\n                                value: \"#ffffff\"\n                            },\n                            shape: {\n                                type: \"circle\",\n                                stroke: {\n                                    width: 0,\n                                    color: \"#000000\"\n                                },\n                                polygon: {\n                                    nb_sides: 5\n                                }\n                            },\n                            opacity: {\n                                value: 0.5,\n                                random: true,\n                                anim: {\n                                    enable: true,\n                                    speed: 1,\n                                    opacity_min: 0.5,\n                                    sync: false\n                                }\n                            },\n                            size: {\n                                value: 30,\n                                random: true,\n                                anim: {\n                                    enable: true,\n                                    speed: 10,\n                                    size_min: 10,\n                                    sync: false\n                                }\n                            },\n                            links: {\n                                enable: false\n                            },\n                            move: {\n                                enable: true,\n                                speed: 3,\n                                direction: \"none\",\n                                random: false,\n                                straight: false,\n                                out_mode: \"out\",\n                                bounce: false,\n                                attract: {\n                                    enable: false,\n                                    rotateX: 600,\n                                    rotateY: 1200\n                                }\n                            }\n                        },\n                        interactivity: {\n                            detect_on: \"canvas\",\n                            events: {\n                                onHover: {\n                                    enable: true,\n                                    mode: \"bubble\",\n                                    parallax: {\n                                        enable: false,\n                                        force: 60,\n                                        smooth: 10\n                                    }\n                                },\n                                onClick: {\n                                    enable: true,\n                                    mode: \"push\"\n                                },\n                                resize: true\n                            },\n                            modes: {\n                                grab: {\n                                    distance: 400,\n                                    lineLinked: {\n                                        opacity: 1\n                                    }\n                                },\n                                bubble: {\n                                    distance: 400,\n                                    size: 100,\n                                    duration: 2,\n                                    opacity: 1,\n                                    speed: 2\n                                },\n                                repulse: {\n                                    distance: 200\n                                },\n                                push: {\n                                    particles_nb: 4\n                                },\n                                remove: {\n                                    particles_nb: 2\n                                }\n                            }\n                        },\n                        detectRetina: true,\n                        fpsLimit: 60,\n                        responsive: [\n                            {\n                                maxWidth: 400,\n                                options: {}\n                            },\n                            {\n                                maxWidth: 800,\n                                options: {}\n                            }\n                        ],\n                        background: {\n                            color: \"#000\"\n                        }\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_barChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                width: 800,\n                height: 450,\n                data: _data_data__WEBPACK_IMPORTED_MODULE_6__[\"default\"].USData,\n                yAxisTitle: \" GDP growth\"\n            }, void 0, false, {\n                fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                lineNumber: 184,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"zHBd4qfDmEFx03kce3o7c7dJzAM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnQiOlsiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcGFydGljbGVzRGF0YSB9IGZyb20gJy4uL2RhdGEvcGFydGljbGVzJztcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcInJlYWN0LXRzcGFydGljbGVzXCI7XG5pbXBvcnQgeyBsb2FkRnVsbCB9IGZyb20gXCJ0c3BhcnRpY2xlc1wiO1xuXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYmFyQ2hhcnRcIjtcbmNvbnN0IHBhcnRpY2xlc0luaXQgPSBhc3luYyAobWFpbikgPT4ge1xuICBjb25zb2xlLmxvZyhtYWluKTtcblxuICAvLyB5b3UgY2FuIGluaXRpYWxpemUgdGhlIHRzUGFydGljbGVzIGluc3RhbmNlIChtYWluKSBoZXJlLCBhZGRpbmcgY3VzdG9tIHNoYXBlcyBvciBwcmVzZXRzXG4gIC8vIHRoaXMgbG9hZHMgdGhlIHRzcGFydGljbGVzIHBhY2thZ2UgYnVuZGxlLCBpdCdzIHRoZSBlYXNpZXN0IG1ldGhvZCBmb3IgZ2V0dGluZyBldmVyeXRoaW5nIHJlYWR5XG4gIC8vIHN0YXJ0aW5nIGZyb20gdjIgeW91IGNhbiBhZGQgb25seSB0aGUgZmVhdHVyZXMgeW91IG5lZWQgcmVkdWNpbmcgdGhlIGJ1bmRsZSBzaXplXG4gIGF3YWl0IGxvYWRGdWxsKG1haW4pO1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtiYXJTdHlsZXMsICwgdXBkYXRlQmFyU3R5bGVzXSA9IHVzZVN0YXRlKHsgd2lkdGg6ICc2MHB4JyB9KVxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgdmFyIGJhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmFyXCIpXG5cblxuICAgICAgY29uc29sZS5sb2coJ3N2ZycsIGJhcnMuaXRlbSgxKS5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykpXG4gICAgICBjb25zb2xlLmxvZygnc3ZnJywgYmFycy5pdGVtKDEpLmdldEF0dHJpYnV0ZSgnaGVpZ2h0JykpXG5cbiAgICB9LCBbXVxuICApXG4gIGNvbnN0IHBhcnRpY2xlQmFycyA9IHtcbiAgICB3aWR0aDogYmFyU3R5bGVzLndpZHRoLFxuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0ZWFsJ1xuICB9XG4gIGNvbnN0IHBhcnRpY2xlc0NvbnRhaW5lciA9IHtcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2VmZmVjdCcpO1xuXG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2NsZWFuZWQgdXAnKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHNwYXJ0aWNsZXNcIikuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgZ2xvdyBvblxuICAgICAgey8qIDxkaXYgc3R5bGU9e3BhcnRpY2xlQmFyc30+PC9kaXY+ICovfVxuXG5cbiAgICAgIDxkaXYgc3R5bGU9e3BhcnRpY2xlc0NvbnRhaW5lcn0+XG4gICAgICAgIDxQYXJ0aWNsZXNcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0c3BhcnRpY2xlc1wiXG4gICAgICAgICAgaW5pdD17cGFydGljbGVzSW5pdH1cblxuICAgICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICAgIGZ1bGxTY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgcGFydGljbGVzOiB7XG4gICAgICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAyMDAsXG4gICAgICAgICAgICAgICAgbGltaXQ6IDMwMCxcbiAgICAgICAgICAgICAgICBkZW5zaXR5OiB7XG4gICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICB2YWx1ZV9hcmVhOiA4MDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IFwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJjaXJjbGVcIixcbiAgICAgICAgICAgICAgICBzdHJva2U6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMDAwMFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwb2x5Z29uOiB7XG4gICAgICAgICAgICAgICAgICBuYl9zaWRlczogNVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb3BhY2l0eToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAwLjUsXG4gICAgICAgICAgICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFuaW06IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHNwZWVkOiAxLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eV9taW46IDAuNSxcbiAgICAgICAgICAgICAgICAgIHN5bmM6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IDMwLFxuICAgICAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhbmltOiB7XG4gICAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzcGVlZDogMTAsXG4gICAgICAgICAgICAgICAgICBzaXplX21pbjogMTAsXG4gICAgICAgICAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vdmU6IHtcbiAgICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDMsXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICAgICAgICAgIHN0cmFpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBvdXRfbW9kZTogXCJvdXRcIixcbiAgICAgICAgICAgICAgICBib3VuY2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF0dHJhY3Q6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICByb3RhdGVYOiA2MDAsXG4gICAgICAgICAgICAgICAgICByb3RhdGVZOiAxMjAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW50ZXJhY3Rpdml0eToge1xuICAgICAgICAgICAgICBkZXRlY3Rfb246IFwiY2FudmFzXCIsXG4gICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgIG9uSG92ZXI6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1vZGU6IFwiYnViYmxlXCIsXG4gICAgICAgICAgICAgICAgICBwYXJhbGxheDoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBmb3JjZTogNjAsXG4gICAgICAgICAgICAgICAgICAgIHNtb290aDogMTBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1vZGU6IFwicHVzaFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZXNpemU6IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZXM6IHtcbiAgICAgICAgICAgICAgICBncmFiOiB7XG4gICAgICAgICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICAgICAgICAgICAgbGluZUxpbmtlZDoge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBidWJibGU6IHtcbiAgICAgICAgICAgICAgICAgIGRpc3RhbmNlOiA0MDAsXG4gICAgICAgICAgICAgICAgICBzaXplOiAxMDAsXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICAgICAgICBzcGVlZDogMlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcmVwdWxzZToge1xuICAgICAgICAgICAgICAgICAgZGlzdGFuY2U6IDIwMFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHVzaDoge1xuICAgICAgICAgICAgICAgICAgcGFydGljbGVzX25iOiA0XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICByZW1vdmU6IHtcbiAgICAgICAgICAgICAgICAgIHBhcnRpY2xlc19uYjogMlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRldGVjdFJldGluYTogdHJ1ZSxcbiAgICAgICAgICAgIGZwc0xpbWl0OiA2MCxcbiAgICAgICAgICAgIHJlc3BvbnNpdmU6IFt7XG4gICAgICAgICAgICAgIG1heFdpZHRoOiA0MDAsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHsgLyogb21pc3NpcyAqLyB9XG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgIG1heFdpZHRoOiA4MDAsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHsgLyogb21pc3NpcyAqLyB9XG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHtcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEJhckNoYXJ0IHdpZHRoPXs4MDB9XG4gICAgICAgIGhlaWdodD17NDUwfVxuICAgICAgICBkYXRhPXtcbiAgICAgICAgICBkYXRhLlVTRGF0YVxuICAgICAgICB9XG4gICAgICAgIHlBeGlzVGl0bGU9e2AgR0RQIGdyb3d0aGB9ID48L0JhckNoYXJ0ID5cbiAgICA8L2RpdiA+XG4gIClcbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicGFydGljbGVzRGF0YSIsIlBhcnRpY2xlcyIsImxvYWRGdWxsIiwiZGF0YSIsIkJhckNoYXJ0IiwicGFydGljbGVzSW5pdCIsIm1haW4iLCJjb25zb2xlIiwibG9nIiwiSG9tZSIsIndpZHRoIiwiYmFyU3R5bGVzIiwidXBkYXRlQmFyU3R5bGVzIiwiYmFycyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIml0ZW0iLCJnZXRBdHRyaWJ1dGUiLCJwYXJ0aWNsZUJhcnMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYXJ0aWNsZXNDb250YWluZXIiLCJwb3NpdGlvbiIsImdldEVsZW1lbnRCeUlkIiwiZGlzYWJsZWQiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzdHlsZSIsImluaXQiLCJvcHRpb25zIiwiZnVsbFNjcmVlbiIsInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwibGltaXQiLCJkZW5zaXR5IiwiZW5hYmxlIiwidmFsdWVfYXJlYSIsImNvbG9yIiwic2hhcGUiLCJ0eXBlIiwic3Ryb2tlIiwicG9seWdvbiIsIm5iX3NpZGVzIiwib3BhY2l0eSIsInJhbmRvbSIsImFuaW0iLCJzcGVlZCIsIm9wYWNpdHlfbWluIiwic3luYyIsInNpemUiLCJzaXplX21pbiIsImxpbmtzIiwibW92ZSIsImRpcmVjdGlvbiIsInN0cmFpZ2h0Iiwib3V0X21vZGUiLCJib3VuY2UiLCJhdHRyYWN0Iiwicm90YXRlWCIsInJvdGF0ZVkiLCJpbnRlcmFjdGl2aXR5IiwiZGV0ZWN0X29uIiwiZXZlbnRzIiwib25Ib3ZlciIsIm1vZGUiLCJwYXJhbGxheCIsImZvcmNlIiwic21vb3RoIiwib25DbGljayIsInJlc2l6ZSIsIm1vZGVzIiwiZ3JhYiIsImRpc3RhbmNlIiwibGluZUxpbmtlZCIsImJ1YmJsZSIsImR1cmF0aW9uIiwicmVwdWxzZSIsInB1c2giLCJwYXJ0aWNsZXNfbmIiLCJyZW1vdmUiLCJkZXRlY3RSZXRpbmEiLCJmcHNMaW1pdCIsInJlc3BvbnNpdmUiLCJtYXhXaWR0aCIsImJhY2tncm91bmQiLCJVU0RhdGEiLCJ5QXhpc1RpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});