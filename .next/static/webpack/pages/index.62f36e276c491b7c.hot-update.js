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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ParticlesBox; }\n/* harmony export */ });\n/* harmony import */ var _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tsparticles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tsparticles */ \"./node_modules/react-tsparticles/esm/index.js\");\n/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tsparticles */ \"./node_modules/tsparticles/esm/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nfunction ParticlesBox() {\n    var particlesInit = function() {\n        var _ref = _asyncToGenerator(_Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(main) {\n            return _Users_davidjumble_Desktop_websites_sloppydata_sloppydatawebsite_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(main);\n                        _ctx.next = 3;\n                        return (0,tsparticles__WEBPACK_IMPORTED_MODULE_3__.loadFull)(main);\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function particlesInit(main) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var particlesLoaded = function(container) {\n        console.log(container);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_tsparticles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        id: \"tsparticles\",\n        init: particlesInit,\n        loaded: particlesLoaded,\n        options: {\n            background: {\n                color: {\n                    value: \"#121\"\n                }\n            },\n            fullScreen: false,\n            fpsLimit: 30,\n            interactivity: {\n                events: {\n                    onClick: {\n                        enable: true,\n                        mode: \"push\"\n                    },\n                    onHover: {\n                        enable: true,\n                        mode: \"repulse\"\n                    },\n                    resize: true\n                },\n                modes: {\n                    bubble: {\n                        distance: 400,\n                        duration: 2,\n                        opacity: 0.8,\n                        size: 40\n                    },\n                    push: {\n                        quantity: 4\n                    },\n                    repulse: {\n                        distance: 200,\n                        duration: 0.4\n                    }\n                }\n            },\n            particles: {\n                color: {\n                    value: \"#a13f23\"\n                },\n                links: {\n                    color: \"#098712\",\n                    distance: 150,\n                    enable: true,\n                    opacity: 0.5,\n                    width: 1\n                },\n                collisions: {\n                    enable: true\n                },\n                move: {\n                    direction: \"none\",\n                    enable: true,\n                    outMode: \"bounce\",\n                    random: false,\n                    speed: 6,\n                    straight: false\n                },\n                number: {\n                    density: {\n                        enable: true,\n                        area: 800\n                    },\n                    value: 80\n                },\n                opacity: {\n                    value: 0.5\n                },\n                shape: {\n                    type: \"circle\"\n                },\n                size: {\n                    random: true,\n                    value: 5\n                }\n            },\n            detectRetina: true\n        }\n    }, void 0, false, {\n        fileName: \"/Users/davidjumble/Desktop/websites/sloppydata/sloppydatawebsite/data/particles.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n};\n_c = ParticlesBox;\nvar _c;\n$RefreshReg$(_c, \"ParticlesBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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InNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhL3BhcnRpY2xlcy5qcz9mMjk0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFBhcnRpY2xlcyBmcm9tIFwicmVhY3QtdHNwYXJ0aWNsZXNcIjtcbmltcG9ydCB7IGxvYWRGdWxsIH0gZnJvbSBcInRzcGFydGljbGVzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYXJ0aWNsZXNCb3goKSB7XG4gIGNvbnN0IHBhcnRpY2xlc0luaXQgPSBhc3luYyAobWFpbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKG1haW4pO1xuXG4gICAgLy8geW91IGNhbiBpbml0aWFsaXplIHRoZSB0c1BhcnRpY2xlcyBpbnN0YW5jZSAobWFpbikgaGVyZSwgYWRkaW5nIGN1c3RvbSBzaGFwZXMgb3IgcHJlc2V0c1xuICAgIC8vIHRoaXMgbG9hZHMgdGhlIHRzcGFydGljbGVzIHBhY2thZ2UgYnVuZGxlLCBpdCdzIHRoZSBlYXNpZXN0IG1ldGhvZCBmb3IgZ2V0dGluZyBldmVyeXRoaW5nIHJlYWR5XG4gICAgLy8gc3RhcnRpbmcgZnJvbSB2MiB5b3UgY2FuIGFkZCBvbmx5IHRoZSBmZWF0dXJlcyB5b3UgbmVlZCByZWR1Y2luZyB0aGUgYnVuZGxlIHNpemVcbiAgICBhd2FpdCBsb2FkRnVsbChtYWluKTtcbiAgfTtcblxuICBjb25zdCBwYXJ0aWNsZXNMb2FkZWQgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgY29uc29sZS5sb2coY29udGFpbmVyKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UGFydGljbGVzXG4gICAgICBpZD1cInRzcGFydGljbGVzXCJcbiAgICAgIGluaXQ9e3BhcnRpY2xlc0luaXR9XG4gICAgICBsb2FkZWQ9e3BhcnRpY2xlc0xvYWRlZH1cbiAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogXCIjMTIxXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bGxTY3JlZW46IGZhbHNlLFxuICAgICAgICBmcHNMaW1pdDogMzAsXG4gICAgICAgIGludGVyYWN0aXZpdHk6IHtcbiAgICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICAgIG9uQ2xpY2s6IHtcbiAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBtb2RlOiBcInB1c2hcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uSG92ZXI6IHtcbiAgICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBtb2RlOiBcInJlcHVsc2VcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc2l6ZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZXM6IHtcbiAgICAgICAgICAgIGJ1YmJsZToge1xuICAgICAgICAgICAgICBkaXN0YW5jZTogNDAwLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMixcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44LFxuICAgICAgICAgICAgICBzaXplOiA0MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB1c2g6IHtcbiAgICAgICAgICAgICAgcXVhbnRpdHk6IDRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXB1bHNlOiB7XG4gICAgICAgICAgICAgIGRpc3RhbmNlOiAyMDAsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBhcnRpY2xlczoge1xuICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB2YWx1ZTogXCIjYTEzZjIzXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGxpbmtzOiB7XG4gICAgICAgICAgICBjb2xvcjogXCIjMDk4NzEyXCIsXG4gICAgICAgICAgICBkaXN0YW5jZTogMTUwLFxuICAgICAgICAgICAgZW5hYmxlOiB0cnVlLFxuICAgICAgICAgICAgb3BhY2l0eTogMC41LFxuICAgICAgICAgICAgd2lkdGg6IDFcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbGxpc2lvbnM6IHtcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW92ZToge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiBcIm5vbmVcIixcbiAgICAgICAgICAgIGVuYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIG91dE1vZGU6IFwiYm91bmNlXCIsXG4gICAgICAgICAgICByYW5kb206IGZhbHNlLFxuICAgICAgICAgICAgc3BlZWQ6IDYsXG4gICAgICAgICAgICBzdHJhaWdodDogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIG51bWJlcjoge1xuICAgICAgICAgICAgZGVuc2l0eToge1xuICAgICAgICAgICAgICBlbmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGFyZWE6IDgwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhbHVlOiA4MFxuICAgICAgICAgIH0sXG4gICAgICAgICAgb3BhY2l0eToge1xuICAgICAgICAgICAgdmFsdWU6IDAuNVxuICAgICAgICAgIH0sXG4gICAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFwiY2lyY2xlXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHJhbmRvbTogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiA1XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZXRlY3RSZXRpbmE6IHRydWVcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcbn0iXSwibmFtZXMiOlsiUGFydGljbGVzIiwibG9hZEZ1bGwiLCJQYXJ0aWNsZXNCb3giLCJwYXJ0aWNsZXNJbml0IiwibWFpbiIsImNvbnNvbGUiLCJsb2ciLCJwYXJ0aWNsZXNMb2FkZWQiLCJjb250YWluZXIiLCJpZCIsImluaXQiLCJsb2FkZWQiLCJvcHRpb25zIiwiYmFja2dyb3VuZCIsImNvbG9yIiwidmFsdWUiLCJmdWxsU2NyZWVuIiwiZnBzTGltaXQiLCJpbnRlcmFjdGl2aXR5IiwiZXZlbnRzIiwib25DbGljayIsImVuYWJsZSIsIm1vZGUiLCJvbkhvdmVyIiwicmVzaXplIiwibW9kZXMiLCJidWJibGUiLCJkaXN0YW5jZSIsImR1cmF0aW9uIiwib3BhY2l0eSIsInNpemUiLCJwdXNoIiwicXVhbnRpdHkiLCJyZXB1bHNlIiwicGFydGljbGVzIiwibGlua3MiLCJ3aWR0aCIsImNvbGxpc2lvbnMiLCJtb3ZlIiwiZGlyZWN0aW9uIiwib3V0TW9kZSIsInJhbmRvbSIsInNwZWVkIiwic3RyYWlnaHQiLCJudW1iZXIiLCJkZW5zaXR5IiwiYXJlYSIsInNoYXBlIiwidHlwZSIsImRldGVjdFJldGluYSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./data/particles.js\n");

/***/ })

});