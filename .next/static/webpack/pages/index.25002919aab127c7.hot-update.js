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

/***/ "./data/particles.js":
/*!***************************!*\
  !*** ./data/particles.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ParticlesBox; }\n/* harmony export */ });\n/* harmony import */ var _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nfunction ParticlesBox() {\n    var particlesInit = function() {\n        var _ref = _asyncToGenerator(_Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(main) {\n            return _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(main);\n                        _ctx.next = 3;\n                        return (0,tsparticles__WEBPACK_IMPORTED_MODULE_3__.loadFull)(main);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function particlesInit(main) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var particlesLoaded = function(container) {\n        console.log(container);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_tsparticles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        id: \"tsparticles\",\n        init: particlesInit,\n        loaded: particlesLoaded,\n        options: {\n            fullScreen: false,\n            particles: {\n                number: {\n                    value: 20,\n                    limit: 30,\n                    density: {\n                        enable: true,\n                        value_area: 80\n                    }\n                },\n                color: {\n                    value: \"#ffffff\"\n                },\n                shape: {\n                    type: \"circle\",\n                    stroke: {\n                        width: 0,\n                        color: \"#000000\"\n                    },\n                    polygon: {\n                        nb_sides: 5\n                    },\n                    image: {\n                        src: \"images/github.svg\",\n                        width: 100,\n                        height: 500\n                    }\n                },\n                opacity: {\n                    value: 0.5,\n                    random: true,\n                    anim: {\n                        enable: true,\n                        speed: 1,\n                        opacity_min: 0.5,\n                        sync: false\n                    }\n                },\n                size: {\n                    value: 10,\n                    random: true,\n                    anim: {\n                        enable: true,\n                        speed: 10,\n                        size_min: 10,\n                        sync: false\n                    }\n                },\n                links: {\n                    enable: false\n                },\n                move: {\n                    enable: true,\n                    speed: 3,\n                    direction: \"none\",\n                    random: false,\n                    straight: false,\n                    out_mode: \"out\",\n                    bounce: false,\n                    attract: {\n                        enable: false,\n                        rotateX: 600,\n                        rotateY: 1200\n                    }\n                }\n            },\n            detectRetina: true,\n            fpsLimit: 60,\n            background: {\n                color: \"#000\"\n            }\n        }\n    }, void 0, false, {\n        fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/data/particles.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_c = ParticlesBox;\nvar _c;\n$RefreshReg$(_c, \"ParticlesBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L2RhdGEvcGFydGljbGVzLmpzP2YyOTQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC10c3BhcnRpY2xlc1wiO1xuaW1wb3J0IHsgbG9hZEZ1bGwgfSBmcm9tIFwidHNwYXJ0aWNsZXNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhcnRpY2xlc0JveCgpIHtcbiAgY29uc3QgcGFydGljbGVzSW5pdCA9IGFzeW5jIChtYWluKSA9PiB7XG4gICAgY29uc29sZS5sb2cobWFpbik7XG5cbiAgICAvLyB5b3UgY2FuIGluaXRpYWxpemUgdGhlIHRzUGFydGljbGVzIGluc3RhbmNlIChtYWluKSBoZXJlLCBhZGRpbmcgY3VzdG9tIHNoYXBlcyBvciBwcmVzZXRzXG4gICAgLy8gdGhpcyBsb2FkcyB0aGUgdHNwYXJ0aWNsZXMgcGFja2FnZSBidW5kbGUsIGl0J3MgdGhlIGVhc2llc3QgbWV0aG9kIGZvciBnZXR0aW5nIGV2ZXJ5dGhpbmcgcmVhZHlcbiAgICAvLyBzdGFydGluZyBmcm9tIHYyIHlvdSBjYW4gYWRkIG9ubHkgdGhlIGZlYXR1cmVzIHlvdSBuZWVkIHJlZHVjaW5nIHRoZSBidW5kbGUgc2l6ZVxuICAgIGF3YWl0IGxvYWRGdWxsKG1haW4pO1xuICB9O1xuXG4gIGNvbnN0IHBhcnRpY2xlc0xvYWRlZCA9IChjb250YWluZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhjb250YWluZXIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxQYXJ0aWNsZXNcbiAgICAgIGlkPVwidHNwYXJ0aWNsZXNcIlxuICAgICAgaW5pdD17cGFydGljbGVzSW5pdH1cbiAgICAgIGxvYWRlZD17cGFydGljbGVzTG9hZGVkfVxuICAgICAgb3B0aW9ucz17e1xuICAgICAgICBmdWxsU2NyZWVuOiBmYWxzZSxcbiAgICAgICAgcGFydGljbGVzOiB7XG4gICAgICAgICAgbnVtYmVyOiB7XG4gICAgICAgICAgICB2YWx1ZTogMjAsXG4gICAgICAgICAgICBsaW1pdDogMzAsXG4gICAgICAgICAgICBkZW5zaXR5OiB7XG4gICAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgdmFsdWVfYXJlYTogODBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogXCIjZmZmZmZmXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBcImNpcmNsZVwiLFxuICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwb2x5Z29uOiB7XG4gICAgICAgICAgICAgIG5iX3NpZGVzOiA1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgc3JjOiBcImltYWdlcy9naXRodWIuc3ZnXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgIGhlaWdodDogNTAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBvcGFjaXR5OiB7XG4gICAgICAgICAgICB2YWx1ZTogMC41LFxuICAgICAgICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgICAgICAgYW5pbToge1xuICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHNwZWVkOiAxLFxuICAgICAgICAgICAgICBvcGFjaXR5X21pbjogMC41LFxuICAgICAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdmFsdWU6IDEwLFxuICAgICAgICAgICAgcmFuZG9tOiB0cnVlLFxuICAgICAgICAgICAgYW5pbToge1xuICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIHNwZWVkOiAxMCxcbiAgICAgICAgICAgICAgc2l6ZV9taW46IDEwLFxuICAgICAgICAgICAgICBzeW5jOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbGlua3M6IHtcbiAgICAgICAgICAgIGVuYWJsZTogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vdmU6IHtcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHNwZWVkOiAzLFxuICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgIHJhbmRvbTogZmFsc2UsXG4gICAgICAgICAgICBzdHJhaWdodDogZmFsc2UsXG4gICAgICAgICAgICBvdXRfbW9kZTogXCJvdXRcIixcbiAgICAgICAgICAgIGJvdW5jZTogZmFsc2UsXG4gICAgICAgICAgICBhdHRyYWN0OiB7XG4gICAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgIHJvdGF0ZVg6IDYwMCxcbiAgICAgICAgICAgICAgcm90YXRlWTogMTIwMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkZXRlY3RSZXRpbmE6IHRydWUsXG4gICAgICAgIGZwc0xpbWl0OiA2MCxcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIlxuICAgICAgICB9XG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59Il0sIm5hbWVzIjpbIlBhcnRpY2xlcyIsImxvYWRGdWxsIiwiUGFydGljbGVzQm94IiwicGFydGljbGVzSW5pdCIsIm1haW4iLCJjb25zb2xlIiwibG9nIiwicGFydGljbGVzTG9hZGVkIiwiY29udGFpbmVyIiwiaWQiLCJpbml0IiwibG9hZGVkIiwib3B0aW9ucyIsImZ1bGxTY3JlZW4iLCJwYXJ0aWNsZXMiLCJudW1iZXIiLCJ2YWx1ZSIsImxpbWl0IiwiZGVuc2l0eSIsImVuYWJsZSIsInZhbHVlX2FyZWEiLCJjb2xvciIsInNoYXBlIiwidHlwZSIsInN0cm9rZSIsIndpZHRoIiwicG9seWdvbiIsIm5iX3NpZGVzIiwiaW1hZ2UiLCJzcmMiLCJoZWlnaHQiLCJvcGFjaXR5IiwicmFuZG9tIiwiYW5pbSIsInNwZWVkIiwib3BhY2l0eV9taW4iLCJzeW5jIiwic2l6ZSIsInNpemVfbWluIiwibGlua3MiLCJtb3ZlIiwiZGlyZWN0aW9uIiwic3RyYWlnaHQiLCJvdXRfbW9kZSIsImJvdW5jZSIsImF0dHJhY3QiLCJyb3RhdGVYIiwicm90YXRlWSIsImRldGVjdFJldGluYSIsImZwc0xpbWl0IiwiYmFja2dyb3VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/particles.js\n");

/***/ })

});