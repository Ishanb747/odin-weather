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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("\r\nconsole.log(\"hello world\");\r\nfunction fetchWeather() {\r\n    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?unitGroup=metric&key=Z8M4YEMGN8FKPH28Q46CXZSDB&contentType=json', { mode: 'cors' })\r\n      .then(function(response) {\r\n        return response.json();\r\n      })\r\n      .then(function(data) {\r\n        console.log(data);\r\n      })\r\n      .catch(function(error) {\r\n        console.error('Error fetching weather data:', error);\r\n      });\r\n}\r\nfetchWeather();\n\n//# sourceURL=webpack://odin-weather/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;