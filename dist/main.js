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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/render */ \"./src/modules/render.js\");\n/* harmony import */ var _modules_userService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/userService */ \"./src/modules/userService.js\");\n/* harmony import */ var _modules_addUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addUser */ \"./src/modules/addUser.js\");\n/* harmony import */ var _modules_removeUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/removeUser */ \"./src/modules/removeUser.js\");\n/* harmony import */ var _modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/changePermissions */ \"./src/modules/changePermissions.js\");\n/* harmony import */ var _modules_editUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/editUser */ \"./src/modules/editUser.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.userService = new _modules_userService__WEBPACK_IMPORTED_MODULE_1__.UserService();\r\n\r\nuserService.getUser().then((data) => (0,_modules_render__WEBPACK_IMPORTED_MODULE_0__.render)(data));\r\n\r\n(0,_modules_addUser__WEBPACK_IMPORTED_MODULE_2__.addUser)();\r\n(0,_modules_removeUser__WEBPACK_IMPORTED_MODULE_3__.removeUser)();\r\n(0,_modules_changePermissions__WEBPACK_IMPORTED_MODULE_4__.changePermissions)();\r\n(0,_modules_editUser__WEBPACK_IMPORTED_MODULE_5__.editUser)();\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/index.js?");

/***/ }),

/***/ "./src/modules/addUser.js":
/*!********************************!*\
  !*** ./src/modules/addUser.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUser: () => (/* binding */ addUser)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\n\r\n\r\nconst addUser = () => {\r\n  const form = document.querySelector(\"form\");\r\n  const inputName = form.querySelector(\"#form-name\");\r\n  const inputEmail = form.querySelector(\"#form-email\");\r\n  const childInput = form.querySelector(\"#form-children\");\r\n\r\n  form.addEventListener(\"submit\", (event) => {\r\n    event.preventDefault();\r\n\r\n    const user = {\r\n      name: inputName.value,\r\n      email: inputEmail.value,\r\n      children: childInput.checked,\r\n      permissions: false,\r\n    };\r\n\r\n    userService.addUser(user).then(() => {\r\n      userService.getUser().then((users) => (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users));\r\n    });\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/addUser.js?");

/***/ }),

/***/ "./src/modules/changePermissions.js":
/*!******************************************!*\
  !*** ./src/modules/changePermissions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changePermissions: () => (/* binding */ changePermissions)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\n\r\n\r\nconst changePermissions = () => {\r\n  const tbody = document.getElementById(\"table-body\");\r\n\r\n  tbody.addEventListener(\"click\", (e) => {\r\n    if (e.target.closest(\"input[type=checkbox]\")) {\r\n      const tr = e.target.closest(\"tr\");\r\n      const input = tr.querySelector(\"input[type=checkbox]\");\r\n      const id = tr.dataset.key;\r\n\r\n      userService.changeUser(id, { permissions: input.checked }).then((res) => {\r\n        userService.getUser().then((users) => {\r\n          (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n        });\r\n      });\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/changePermissions.js?");

/***/ }),

/***/ "./src/modules/editUser.js":
/*!*********************************!*\
  !*** ./src/modules/editUser.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   editUser: () => (/* binding */ editUser)\n/* harmony export */ });\n\r\n\r\nconst editUser = () => {};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/editUser.js?");

/***/ }),

/***/ "./src/modules/removeUser.js":
/*!***********************************!*\
  !*** ./src/modules/removeUser.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   removeUser: () => (/* binding */ removeUser)\n/* harmony export */ });\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ \"./src/modules/render.js\");\n\r\n\r\n\r\n\r\nconst removeUser = () => {\r\n  const tbody = document.getElementById(\"table-body\");\r\n\r\n  tbody.addEventListener(\"click\", (e) => {\r\n    e.preventDefault();\r\n\r\n    if (e.target.closest(\".btn-remove\")) {\r\n      const tr = e.target.closest(\"tr\");\r\n      const id = tr.dataset.key;\r\n\r\n      userService.removeUser(id).then((res) => {\r\n        userService.getUser().then((users) => {\r\n          (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)(users);\r\n        });\r\n      });\r\n    }\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/removeUser.js?");

/***/ }),

/***/ "./src/modules/render.js":
/*!*******************************!*\
  !*** ./src/modules/render.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n\r\n\r\nconst render = (users) => {\r\n  const tbody = document.getElementById(\"table-body\");\r\n\r\n  tbody.innerHTML = \"\";\r\n\r\n  users.forEach((user) => {\r\n    tbody.insertAdjacentHTML(\r\n      \"beforeend\",\r\n      `<tr data-key=${user.id}>\r\n       <th scope=\"row\">${user.id}</th>\r\n       <td>${user.name}</td>\r\n       <td>${user.email}</td>\r\n       <td>${user.children ? \"Есть\" : \"Нет\"}</td>\r\n       <td>\r\n         <div class=\"form-check form-switch\">\r\n           <input\r\n             class=\"form-check-input\"\r\n             type=\"checkbox\"\r\n             role=\"switch\"\r\n             id=\"form-children\"\r\n             ${user.permissions ? \"checked\" : \"\"} \r\n           />\r\n         </div>\r\n       </td>\r\n       <td>\r\n         <div\r\n           class=\"btn-group btn-group-sm\"\r\n           role=\"group\"\r\n           aria-label=\"Basic example\"\r\n         >\r\n           <button type=\"button\" class=\"btn btn-warning\">\r\n             <i class=\"bi-pencil-square\"></i>\r\n           </button>\r\n           <button type=\"button\" class=\"btn btn-danger btn-remove\">\r\n             <i class=\"bi-person-x\"></i>\r\n           </button>\r\n         </div>\r\n       </td>\r\n      </tr>\r\n    </tr>`\r\n    );\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/render.js?");

/***/ }),

/***/ "./src/modules/userService.js":
/*!************************************!*\
  !*** ./src/modules/userService.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserService: () => (/* binding */ UserService)\n/* harmony export */ });\n\r\n\r\nclass UserService {\r\n  getUser() {\r\n    return fetch(\"http://localhost:4545/users\")\r\n      .then((response) => response.json())\r\n      .catch((error) => console.log(error));\r\n  }\r\n\r\n  addUser(user) {\r\n    return fetch(\"http://localhost:4545/users\", {\r\n      method: \"POST\",\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n      body: JSON.stringify(user),\r\n    }).then((res) => res.json());\r\n  }\r\n\r\n  removeUser(id) {\r\n    return fetch(`http://localhost:4545/users/${id}`, {\r\n      method: \"DELETE\",\r\n    }).then((res) => res.json());\r\n  }\r\n\r\n  changeUser(id, data) {\r\n    return fetch(`http://localhost:4545/users/${id}`, {\r\n      method: \"PATCH\",\r\n      body: JSON.stringify(data),\r\n      headers: {\r\n        \"Content-Type\": \"application/json\",\r\n      },\r\n    }).then((res) => res.json());\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://json-sever__lesson/./src/modules/userService.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;