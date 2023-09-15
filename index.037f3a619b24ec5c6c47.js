/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/main.scss */ \"./src/main.scss\");\n/* harmony import */ var _js_mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mobile */ \"./src/js/mobile.js\");\n\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/index.js?");

/***/ }),

/***/ "./src/js/mobile.js":
/*!**************************!*\
  !*** ./src/js/mobile.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_images_Close_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/Close.svg */ \"./src/assets/images/Close.svg\");\n/* harmony import */ var _assets_images_menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/menu.svg */ \"./src/assets/images/menu.svg\");\nconst burgerBtn = document.querySelector('.mobile__burger');\nconst mobileMenu = document.querySelector('.mobile__menu');\nconst mobileFooter = document.querySelector('.mobile__footer');\nconst burgerIcon = document.querySelector('.burger__icon');\n\n\nconst mobile = document.querySelector('.mobile');\nconst mobileHeader = document.querySelector('.mobile__header');\nburgerBtn.addEventListener('click', () => {\n  if (burgerIcon.src == _assets_images_menu_svg__WEBPACK_IMPORTED_MODULE_1__) {\n    burgerIcon.src = _assets_images_Close_svg__WEBPACK_IMPORTED_MODULE_0__;\n    mobileMenu.style.display = 'flex';\n    mobileFooter.style.display = 'block';\n    mobile.style.paddingBottom = '92px';\n    mobileHeader.style.marginBottom = '40px';\n  } else {\n    burgerIcon.src = _assets_images_menu_svg__WEBPACK_IMPORTED_MODULE_1__;\n    mobileMenu.style.display = 'none';\n    mobileFooter.style.display = 'none';\n    mobile.style.paddingBottom = '10px';\n    mobileHeader.style.marginBottom = '0';\n  }\n});\n\n//# sourceURL=webpack://webpackbaseconfig/./src/js/mobile.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpackbaseconfig/./src/main.scss?");

/***/ }),

/***/ "./src/assets/images/Close.svg":
/*!*************************************!*\
  !*** ./src/assets/images/Close.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"Close.1748db0d5dc2fa55c7d1.svg\";\n\n//# sourceURL=webpack://webpackbaseconfig/./src/assets/images/Close.svg?");

/***/ }),

/***/ "./src/assets/images/menu.svg":
/*!************************************!*\
  !*** ./src/assets/images/menu.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"menu.7d20f209089895e0ca65.svg\";\n\n//# sourceURL=webpack://webpackbaseconfig/./src/assets/images/menu.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;