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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_particles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/particles */ \"./data/particles.js\");\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/data */ \"./data/data.js\");\n/* harmony import */ var _components_barChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/barChart */ \"./components/barChart.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar particlesInit = function() {\n    var _ref = _asyncToGenerator(_Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(main) {\n        return _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    console.log(main);\n                    _ctx.next = 3;\n                    return (0,tsparticles__WEBPACK_IMPORTED_MODULE_5__.loadFull)(main);\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function particlesInit(main) {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        width: \"60px\"\n    }), barStyles = ref[0], updateBarStyles = ref[2];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var bars = document.getElementsByClassName(\"bar\");\n        console.log(\"svg\", bars.item(1).getAttribute(\"width\"));\n        console.log(\"svg\", bars.item(1).getAttribute(\"height\"));\n    }, []);\n    var particleBars = {\n        width: barStyles.width,\n        height: \"200px\",\n        backgroundColor: \"teal\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: [\n            \"glow on\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                style: particleBars,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_tsparticles__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    id: \"tsparticles\",\n                    init: particlesInit,\n                    options: {\n                        \"fullScreen\": {\n                            \"enable\": true,\n                            \"zIndex\": 1\n                        },\n                        \"particles\": {\n                            \"number\": {\n                                \"value\": 40,\n                                \"density\": {\n                                    \"enable\": true,\n                                    \"value_area\": 800\n                                }\n                            },\n                            \"color\": {\n                                \"value\": \"#fff\"\n                            },\n                            \"shape\": {\n                                \"type\": \"circle\",\n                                \"options\": {\n                                    \"sides\": 5\n                                },\n                                \"stroke\": {\n                                    \"width\": 0,\n                                    \"color\": \"#000000\"\n                                },\n                                \"polygon\": {\n                                    \"nb_sides\": 5\n                                }\n                            },\n                            \"opacity\": {\n                                \"value\": 0.8,\n                                \"random\": false,\n                                \"anim\": {\n                                    \"enable\": false,\n                                    \"speed\": 1,\n                                    \"opacity_min\": 0.1,\n                                    \"sync\": false\n                                }\n                            },\n                            \"size\": {\n                                \"value\": 4,\n                                \"random\": false,\n                                \"anim\": {\n                                    \"enable\": false,\n                                    \"speed\": 40,\n                                    \"size_min\": 0.1,\n                                    \"sync\": false\n                                }\n                            },\n                            \"rotate\": {\n                                \"value\": 0,\n                                \"random\": true,\n                                \"direction\": \"clockwise\",\n                                \"animation\": {\n                                    \"enable\": true,\n                                    \"speed\": 5,\n                                    \"sync\": false\n                                }\n                            },\n                            \"line_linked\": {\n                                \"enable\": false\n                            },\n                            \"move\": {\n                                \"enable\": true,\n                                \"speed\": 2,\n                                \"direction\": \"none\",\n                                \"random\": false,\n                                \"straight\": false,\n                                \"out_mode\": \"out\",\n                                \"attract\": {\n                                    \"enable\": false,\n                                    \"rotateX\": 600,\n                                    \"rotateY\": 1200\n                                }\n                            }\n                        },\n                        \"interactivity\": {},\n                        \"retina_detect\": false\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_barChart__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                width: 800,\n                height: 450,\n                data: _data_data__WEBPACK_IMPORTED_MODULE_6__[\"default\"].USData,\n                yAxisTitle: \" GDP growth\"\n            }, void 0, false, {\n                fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n                lineNumber: 131,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"ZmqIX/aEFo2qegZ+AkILXj/uPvQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsS0FBSztpQ0FDZDs2QkFDRjs0QkFDRCxRQUFRLEVBQUU7Z0NBQ1IsT0FBTyxFQUFFLENBQUM7Z0NBQ1YsUUFBUSxFQUFFLElBQUk7Z0NBQ2QsV0FBVyxFQUFFLFdBQVc7Z0NBQ3hCLFdBQVcsRUFBRTtvQ0FDWCxRQUFRLEVBQUUsSUFBSTtvQ0FDZCxPQUFPLEVBQUUsQ0FBQztvQ0FDVixNQUFNLEVBQUUsS0FBSztpQ0FDZDs2QkFDRjs0QkFDRCxhQUFhLEVBQUU7Z0NBQ2IsUUFBUSxFQUFFLEtBQUs7NkJBRWhCOzRCQUNELE1BQU0sRUFBRTtnQ0FDTixRQUFRLEVBQUUsSUFBSTtnQ0FDZCxPQUFPLEVBQUUsQ0FBQztnQ0FDVixXQUFXLEVBQUUsTUFBTTtnQ0FDbkIsUUFBUSxFQUFFLEtBQUs7Z0NBQ2YsVUFBVSxFQUFFLEtBQUs7Z0NBQ2pCLFVBQVUsRUFBRSxLQUFLO2dDQUNqQixTQUFTLEVBQUU7b0NBQ1QsUUFBUSxFQUFFLEtBQUs7b0NBQ2YsU0FBUyxFQUFFLEdBQUc7b0NBQ2QsU0FBUyxFQUFFLElBQUk7aUNBQ2hCOzZCQUNGO3lCQUNGO3dCQUNELGVBQWUsRUFBRSxFQUVoQjt3QkFDRCxlQUFlLEVBQUUsS0FBSztxQkFFdkI7Ozs7O3dCQUNEOzs7OztvQkFDRTswQkFDTiw4REFBQ3ZCLDREQUFRO2dCQUFDTSxLQUFLLEVBQUUsR0FBRztnQkFDbEJTLE1BQU0sRUFBRSxHQUFHO2dCQUNYaEIsSUFBSSxFQUNGQSx5REFBVztnQkFFYjBCLFVBQVUsRUFBRyxhQUFXOzs7OztvQkFBZ0I7Ozs7OztZQUNyQyxDQUNSO0NBQ0Y7R0F0SHVCcEIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcGFydGljbGVzRGF0YSB9IGZyb20gJy4uL2RhdGEvcGFydGljbGVzJztcbmltcG9ydCBQYXJ0aWNsZXMgZnJvbSBcInJlYWN0LXRzcGFydGljbGVzXCI7XG5pbXBvcnQgeyBsb2FkRnVsbCB9IGZyb20gXCJ0c3BhcnRpY2xlc1wiO1xuXG5pbXBvcnQgZGF0YSBmcm9tIFwiLi4vZGF0YS9kYXRhXCI7XG5pbXBvcnQgQmFyQ2hhcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvYmFyQ2hhcnRcIjtcbmNvbnN0IHBhcnRpY2xlc0luaXQgPSBhc3luYyAobWFpbikgPT4ge1xuICBjb25zb2xlLmxvZyhtYWluKTtcblxuICAvLyB5b3UgY2FuIGluaXRpYWxpemUgdGhlIHRzUGFydGljbGVzIGluc3RhbmNlIChtYWluKSBoZXJlLCBhZGRpbmcgY3VzdG9tIHNoYXBlcyBvciBwcmVzZXRzXG4gIC8vIHRoaXMgbG9hZHMgdGhlIHRzcGFydGljbGVzIHBhY2thZ2UgYnVuZGxlLCBpdCdzIHRoZSBlYXNpZXN0IG1ldGhvZCBmb3IgZ2V0dGluZyBldmVyeXRoaW5nIHJlYWR5XG4gIC8vIHN0YXJ0aW5nIGZyb20gdjIgeW91IGNhbiBhZGQgb25seSB0aGUgZmVhdHVyZXMgeW91IG5lZWQgcmVkdWNpbmcgdGhlIGJ1bmRsZSBzaXplXG4gIGF3YWl0IGxvYWRGdWxsKG1haW4pO1xufTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtiYXJTdHlsZXMsICwgdXBkYXRlQmFyU3R5bGVzXSA9IHVzZVN0YXRlKHsgd2lkdGg6ICc2MHB4JyB9KVxuICB1c2VFZmZlY3QoXG4gICAgKCkgPT4ge1xuICAgICAgdmFyIGJhcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmFyXCIpXG5cblxuICAgICAgY29uc29sZS5sb2coJ3N2ZycsIGJhcnMuaXRlbSgxKS5nZXRBdHRyaWJ1dGUoJ3dpZHRoJykpXG4gICAgICBjb25zb2xlLmxvZygnc3ZnJywgYmFycy5pdGVtKDEpLmdldEF0dHJpYnV0ZSgnaGVpZ2h0JykpXG5cbiAgICB9LCBbXVxuICApXG4gIGNvbnN0IHBhcnRpY2xlQmFycyA9IHtcbiAgICB3aWR0aDogYmFyU3R5bGVzLndpZHRoLFxuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0ZWFsJ1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgZ2xvdyBvblxuICAgICAgPGRpdiBzdHlsZT17cGFydGljbGVCYXJzfT5cbiAgICAgICAgPFBhcnRpY2xlc1xuICAgICAgICAgIGlkPVwidHNwYXJ0aWNsZXNcIlxuICAgICAgICAgIGluaXQ9e3BhcnRpY2xlc0luaXR9XG5cbiAgICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgICBcImZ1bGxTY3JlZW5cIjoge1xuICAgICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICBcInpJbmRleFwiOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwYXJ0aWNsZXNcIjoge1xuICAgICAgICAgICAgICBcIm51bWJlclwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0MCxcbiAgICAgICAgICAgICAgICBcImRlbnNpdHlcIjoge1xuICAgICAgICAgICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwidmFsdWVfYXJlYVwiOiA4MDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY29sb3JcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCIjZmZmXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJzaGFwZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgXCJvcHRpb25zXCI6IHtcbiAgICAgICAgICAgICAgICAgIFwic2lkZXNcIjogNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJzdHJva2VcIjoge1xuICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAwLFxuICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJwb2x5Z29uXCI6IHtcbiAgICAgICAgICAgICAgICAgIFwibmJfc2lkZXNcIjogNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwib3BhY2l0eVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiAwLjgsXG4gICAgICAgICAgICAgICAgXCJyYW5kb21cIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgXCJhbmltXCI6IHtcbiAgICAgICAgICAgICAgICAgIFwiZW5hYmxlXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgXCJzcGVlZFwiOiAxLFxuICAgICAgICAgICAgICAgICAgXCJvcGFjaXR5X21pblwiOiAwLjEsXG4gICAgICAgICAgICAgICAgICBcInN5bmNcIjogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwic2l6ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiA0LFxuICAgICAgICAgICAgICAgIFwicmFuZG9tXCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwiYW5pbVwiOiB7XG4gICAgICAgICAgICAgICAgICBcImVuYWJsZVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIFwic3BlZWRcIjogNDAsXG4gICAgICAgICAgICAgICAgICBcInNpemVfbWluXCI6IDAuMSxcbiAgICAgICAgICAgICAgICAgIFwic3luY1wiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJyb3RhdGVcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogMCxcbiAgICAgICAgICAgICAgICBcInJhbmRvbVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiZGlyZWN0aW9uXCI6IFwiY2xvY2t3aXNlXCIsXG4gICAgICAgICAgICAgICAgXCJhbmltYXRpb25cIjoge1xuICAgICAgICAgICAgICAgICAgXCJlbmFibGVcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIFwic3BlZWRcIjogNSxcbiAgICAgICAgICAgICAgICAgIFwic3luY1wiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJsaW5lX2xpbmtlZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG5cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJtb3ZlXCI6IHtcbiAgICAgICAgICAgICAgICBcImVuYWJsZVwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwic3BlZWRcIjogMixcbiAgICAgICAgICAgICAgICBcImRpcmVjdGlvblwiOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICBcInJhbmRvbVwiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBcInN0cmFpZ2h0XCI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIFwib3V0X21vZGVcIjogXCJvdXRcIixcbiAgICAgICAgICAgICAgICBcImF0dHJhY3RcIjoge1xuICAgICAgICAgICAgICAgICAgXCJlbmFibGVcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBcInJvdGF0ZVhcIjogNjAwLFxuICAgICAgICAgICAgICAgICAgXCJyb3RhdGVZXCI6IDEyMDBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImludGVyYWN0aXZpdHlcIjoge1xuXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJyZXRpbmFfZGV0ZWN0XCI6IGZhbHNlLFxuXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEJhckNoYXJ0IHdpZHRoPXs4MDB9XG4gICAgICAgIGhlaWdodD17NDUwfVxuICAgICAgICBkYXRhPXtcbiAgICAgICAgICBkYXRhLlVTRGF0YVxuICAgICAgICB9XG4gICAgICAgIHlBeGlzVGl0bGU9e2AgR0RQIGdyb3d0aGB9ID48L0JhckNoYXJ0ID5cbiAgICA8L2RpdiA+XG4gIClcbn1cblxuXG5cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwicGFydGljbGVzRGF0YSIsIlBhcnRpY2xlcyIsImxvYWRGdWxsIiwiZGF0YSIsIkJhckNoYXJ0IiwicGFydGljbGVzSW5pdCIsIm1haW4iLCJjb25zb2xlIiwibG9nIiwiSG9tZSIsIndpZHRoIiwiYmFyU3R5bGVzIiwidXBkYXRlQmFyU3R5bGVzIiwiYmFycyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIml0ZW0iLCJnZXRBdHRyaWJ1dGUiLCJwYXJ0aWNsZUJhcnMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJzdHlsZSIsImlkIiwiaW5pdCIsIm9wdGlvbnMiLCJVU0RhdGEiLCJ5QXhpc1RpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});