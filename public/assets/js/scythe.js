/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_services_sprites__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_models_board__ = __webpack_require__(2);



class Scythe {

  constructor() {
    this.game = new Phaser.Game(1024, 768, Phaser.AUTO, '', {
      preload: this.preload,
      create: this.create,
      update: this.update
    });
    this.board = new __WEBPACK_IMPORTED_MODULE_1_models_board__["a" /* default */]();
  }

  preload() {
    scythe.sprites = new __WEBPACK_IMPORTED_MODULE_0_services_sprites__["a" /* default */](scythe.game);
  }

  create() {
    scythe.board.render();
  }

  update() {

  }

}

var scythe = new Scythe();

/* harmony default export */ __webpack_exports__["default"] = (scythe);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Sprites {

  constructor(game) {
    this.urls = {
      hexagon: 'data:image/png;base64,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'
    }
    for (var key in Object.keys(this.urls)) {
      game.load.image(key, this.urls[key]); 
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Sprites;


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_config_board__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_enums_territories__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_enums_factions__ = __webpack_require__(5);




class Board {
  
  constructor() {
    this.territoryCoordinates = [
      [ { x: 1, y: 0, type: __WEBPACK_IMPORTED_MODULE_1_enums_territories__["a" /* BASE */] }, {x: 4, y: 0, type: __WEBPACK_IMPORTED_MODULE_1_enums_territories__["a" /* BASE */] } ],
      [ {x:1,y:1}, {x:2,y:1}, {x:3,y:1}, {x:4,y:1}, {x:5,y:1}, {x:6,y:1} ],
      [ {x:0,y:2}, {x:1,y:2}, {x:2,y:2}, {x:3,y:2}, {x:4,y:2}, {x:5,y:2}, {x:6,y:2} ],
      [ {x:0,y:3}, {x:1,y:3}, {x:2,y:3}, {x:3,y:3}, {x:4,y:3}, {x:5,y:3}, {x:6,y:3}, {x:7,y:3} ],
      [ {x:0,y:4}, {x:1,y:4}, {x:4,y:4}, {x:3,y:4}, {x:4,y:4}, {x:5,y:4}, {x:6,y:4} ],
      [ {x:0,y:5}, {x:1,y:5}, {x:2,y:5}, {x:3,y:5}, {x:4,y:5}, {x:5,y:5}, {x:6,y:5} ],
      [ {x:0,y:6}, {x:1,y:6}, {x:4,y:6}, {x:3,y:6}, {x:4,y:6}, {x:5,y:6}, {x:6,y:6} ],
      [ {x:0,y:7}, {x:1,y:7}, {x:2,y:7}, {x:3,y:7}, {x:4,y:7}, {x:5,y:7}, {x:6,y:7}, {x:7,y:7} ],
      [ {x:2,y:8}, {x:3,y:8} ],
    ];
  }

  render() {
      console.log('test');
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Board;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
  width: 1024,
  height: 768,
  columns: 9,
  rows: 8,
  hex: {
    width: 100,
    height: 100
  }
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const FACTORY  = 0;
/* unused harmony export FACTORY */

const BASE     = 1;
/* harmony export (immutable) */ __webpack_exports__["a"] = BASE;

const FARM     = 2;
/* unused harmony export FARM */

const FOREST   = 3;
/* unused harmony export FOREST */

const TUNDRA   = 4;
/* unused harmony export TUNDRA */

const MOUNTAIN = 5;
/* unused harmony export MOUNTAIN */

const VILLAGE  = 6;
/* unused harmony export VILLAGE */

const LAKE     = 7;
/* unused harmony export LAKE */



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const NORDIC  = 0;
/* unused harmony export NORDIC */

const RUSVIET = 1;
/* unused harmony export RUSVIET */

const TOGAWA  = 2;
/* unused harmony export TOGAWA */

const CRIMEA  = 3;
/* unused harmony export CRIMEA */

const SAXONY  = 4;
/* unused harmony export SAXONY */

const POLANIA = 5;
/* unused harmony export POLANIA */

const ALBION  = 6;
/* unused harmony export ALBION */



/***/ })
/******/ ]);