/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/swc-loader/src/index.js??ruleSet[1].rules[1].use!./src/simple.worker.ts":
/*!**************************************************************************************************!*\
  !*** ../../node_modules/swc-loader/src/index.js??ruleSet[1].rules[1].use!./src/simple.worker.ts ***!
  \**************************************************************************************************/
/***/ (() => {

eval("// const ctx: Worker = self as any;\n// ctx.addEventListener(\"message\", (data: any) => {\n//   console.log(\"got data in worker \", data);\n//   ctx.postMessage(\"Message back\");\n// });\nvar ctx = self;\n// Post data to parent thread\nctx.postMessage({\n    foo: \"foo\"\n});\n// Respond to message from parent thread\nctx.addEventListener(\"message\", function(event) {\n    return console.log(event);\n});\n\n\n//# sourceURL=webpack://web_worker_ts/./src/simple.worker.ts?../../node_modules/swc-loader/src/index.js??ruleSet%5B1%5D.rules%5B1%5D.use");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["../../node_modules/swc-loader/src/index.js??ruleSet[1].rules[1].use!./src/simple.worker.ts"]();
/******/ 	
/******/ })()
;