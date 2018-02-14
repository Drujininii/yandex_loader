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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

/**
 * Базовый класс блока
 * @module Block
 */

class Block {
	/**
  * @param {HTMLElement} el - корневой элемент блока
  * @constructor
  */
	constructor(el) {
		this.el = el;
		this.hidden = false;
	}

	/**
  * Фабричный метод, который ползволяет удобро создавать блоки с заданными характеристиками
  * @param {string} [tagName='div'] - tagName блока
  * @param {*} [attrs={}] - объект с атрибутами блока
  * @param {string[]} [classes=[]] - список имён классов
  * @param {string|null} [text=null] - опциональный текст блока
  * @return {Block}
  */
	static create(tagName = 'div', attrs = {}, classes = [], text = null) {
		const el = document.createElement(tagName);
		classes.forEach(function (className) {
			el.classList.add(className);
		});
		for (const name in attrs) {
			el.setAttribute(name, attrs[name]);
		}
		if (text) {
			el.textContent = text;
		}
		return new Block(el);
	}

	/**
  * Установить новый текст для блока
  * @param {string} text
  */
	setText(text) {
		this.el.textContent = text;
	}

	/**
  * Очищает содержимое блока
  */
	clear() {
		this.el.innerHTML = '';
	}

	/**
  * Скрывает блок
  */
	hide() {
		this.hidden = true;
		this.el.classList.add('main_hidden');
		this.el.setAttribute('hidden', 'true');
	}

	/**
  * Отображает блок
  */
	show() {
		this.hidden = false;
		this.el.removeAttribute('hidden');
		this.el.classList.remove('main_hidden');
	}

	/**
  * Добавляет к текущему блоку дочерний
  * @param {Block} block
  * @return {Block} this - возвращает ссылку на самого себя
  */
	append(block) {
		this.el.appendChild(block.el);
		return this;
	}

	/**
  * Удаляет у текущего блока дочерний
  * @param {Block} block
  * @return {Block} this - возвращает ссылку на самого себя
  */
	remove(block) {
		this.el.removeChild(block.el);
		return this;
	}

	/**
  * Позволяет подписаться на событие
  * @param {string} event
  * @param {EventListener} callback
  * @return {function(this:Block)} - функция отписки от события
  */
	on(event, callback) {
		this.el.addEventListener(event, callback);
		return () => {
			this.el.removeEventListener(event, callback);
		};
	}
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Block;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


/* harmony default export */ __webpack_exports__["default"] = (new class eventBus {
	constructor() {
		this.listeners = {};
	}

	on(eventName, listener) {
		this.listeners[eventName] = this.listeners[eventName] || [];
		this.listeners[eventName].push(listener);
		return listener;
	}

	off(eventName, listener) {
		this.listeners[eventName] = this.listeners[eventName] || [];
		const listenerIdx = this.listeners[eventName].indexOf(listener);
		this.listeners[eventName].split(listenerIdx, 1);
	}

	emit(eventName, data) {
		this.listeners[eventName].forEach(listener => {
			listener(data);
		});
	}
}());

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Указывает веб паку пути поиска файлов для сборки
 * @param r
 */

function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(__webpack_require__(9));
requireAll(__webpack_require__(11));
requireAll(__webpack_require__(15));

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__ = __webpack_require__(0);




class Loader extends __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__["default"] {
	constructor(classes) {
		classes = classes || [];
		classes.append('loader');
		const loader = __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__["default"].create('div', {}, classes);
		super(loader.el);
	}
}
/* harmony export (immutable) */ __webpack_exports__["default"] = Loader;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__ = __webpack_require__(0);




class SwitchButton extends __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__["default"] {
	constructor(classes) {
		classes = classes || [];
		classes.append('switchBoxContainer');
		const switchBoxContainer = __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__["default"].create('div', {}, classes);
		super(switchBoxContainer.el);
		this.createSwitchBox();
	}

	createSwitchBox() {
		const switchBoxInput = __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__["default"].create('input', {
			'id': 'checkbox',
			'type': 'checkbox'
		}, ['switchBox__input']);

		const switchBoxLabel = __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__["default"].create('label', {
			'for': 'checkbox'
		}, ['switchBox__label']);

		this.append(switchBoxInput).append(switchBoxLabel);
	}
}
/* harmony export (immutable) */ __webpack_exports__["default"] = SwitchButton;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_innerBlock_innerBlock__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fields_loaderModule_fields__ = __webpack_require__(6);





/* harmony default export */ __webpack_exports__["default"] = (new class LoaderModule extends __WEBPACK_IMPORTED_MODULE_0__blocks_innerBlock_innerBlock__["default"] {
	constructor() {
		const LoaderModule = __WEBPACK_IMPORTED_MODULE_0__blocks_innerBlock_innerBlock__["default"].create('div', {}, 'LoaderModule');
		for (let field of __WEBPACK_IMPORTED_MODULE_1__fields_loaderModule_fields__["default"]) LoaderModule.append(field);
		super(LoaderModule.el);
	}
}());

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_loader_loader__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controls_loaderModule_fields_controls__ = __webpack_require__(7);



const loaderModule__fields = {
	loader: new __WEBPACK_IMPORTED_MODULE_0__blocks_loader_loader__["default"]('loaderModule__loader'),
	controls: __WEBPACK_IMPORTED_MODULE_1__controls_loaderModule_fields_controls__["default"]
};

/* harmony default export */ __webpack_exports__["default"] = (loaderModule__fields);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fields_loaderModule_fileds_controls_fields__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_innerBlock_innerBlock__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventBus_eventBus__ = __webpack_require__(1);






class loaderModule__controls extends __WEBPACK_IMPORTED_MODULE_1__blocks_innerBlock_innerBlock__["default"] {
	constructor() {
		const controls = __WEBPACK_IMPORTED_MODULE_1__blocks_innerBlock_innerBlock__["default"].create('div', {}, ['loaderModule__controls']);
		for (let field of __WEBPACK_IMPORTED_MODULE_0__fields_loaderModule_fileds_controls_fields__["default"]) {
			controls.append(field);
		}
		super(controls.el);

		this.tapSwitchAnimation();
		this.tapSwitchHide();
		this.setDownloadPercent();
	}

	tapSwitchAnimation() {
		__WEBPACK_IMPORTED_MODULE_0__fields_loaderModule_fileds_controls_fields__["default"].switchAnimation.on('click', () => {
			__WEBPACK_IMPORTED_MODULE_2__eventBus_eventBus__["default"].emit('switchLoaderAnimation');
		});
	}

	tapSwitchHide() {
		__WEBPACK_IMPORTED_MODULE_0__fields_loaderModule_fileds_controls_fields__["default"].switchHide.on('click', () => {
			__WEBPACK_IMPORTED_MODULE_2__eventBus_eventBus__["default"].emit('switchLoaderHide');
		});
	}

	setDownloadPercent() {
		__WEBPACK_IMPORTED_MODULE_0__fields_loaderModule_fileds_controls_fields__["default"].on('onchange', () => {
			alert('new value');
		});
	}
}
/* harmony export (immutable) */ __webpack_exports__["default"] = loaderModule__controls;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_switchBox_switchBox__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_innerBlock_innerBlock__ = __webpack_require__(0);



const loaderModule__controls__fields = {
	switchAnimation: new __WEBPACK_IMPORTED_MODULE_0__blocks_switchBox_switchBox__["default"](['loaderModule__controls__switchBox', 'loaderModule__controls__switchAnimation']),
	switchHide: new __WEBPACK_IMPORTED_MODULE_0__blocks_switchBox_switchBox__["default"](['loaderModule__controls__switchBox', 'loaderModule__controls__switchHide']),
	downloadPercent: __WEBPACK_IMPORTED_MODULE_1__blocks_innerBlock_innerBlock__["default"].create('input', { 'type': 'text' }, ['loaderModule__controls__downloadPercent'])
};

/* harmony default export */ __webpack_exports__["default"] = (loaderModule__controls__fields);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blocks/innerBlock/innerBlock.js": 0,
	"./blocks/loader/loader.js": 3,
	"./blocks/switchBox/switchBox.js": 4,
	"./include.js": 2,
	"./main.js": 10,
	"./modules/eventBus/eventBus.js": 1,
	"./modules/loaderModule/__fields/__controls/__fields/loaderModule__fileds__controls__fields.js": 8,
	"./modules/loaderModule/__fields/__controls/loaderModule__fields__controls.js": 7,
	"./modules/loaderModule/__fields/loaderModule__fields.js": 6,
	"./modules/loaderModule/loaderModule.js": 5
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9;

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_loaderModule_loaderModule__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_eventBus_eventBus__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blocks_innerBlock_innerBlock__ = __webpack_require__(0);


/**
 * Основной модуль работатющий со всеми объектами
 *@module main
 */





new class main {
	constructor() {
		const app = __WEBPACK_IMPORTED_MODULE_2__blocks_innerBlock_innerBlock__["default"].create('main', {}, 'app');
		document.body.appendChild(app.el);
		app.append(__WEBPACK_IMPORTED_MODULE_0__modules_loaderModule_loaderModule__["default"]);
	}
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blocks/_hidden/blocks_hidden.scss": 12,
	"./blocks/loader/loader.scss": 13,
	"./blocks/switchBox/switchBox.scss": 14
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 11;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.pitch (/home/ed_grolsh/JavaScriptProjects/yandex/node_modules/extract-text-webpack-plugin/dist/loader.js:57:11)");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.pitch (/home/ed_grolsh/JavaScriptProjects/yandex/node_modules/extract-text-webpack-plugin/dist/loader.js:57:11)");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.pitch (/home/ed_grolsh/JavaScriptProjects/yandex/node_modules/extract-text-webpack-plugin/dist/loader.js:57:11)");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./blocks/switchBox/someCss.css": 16
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 15;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: \"extract-text-webpack-plugin\" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example\n    at Object.pitch (/home/ed_grolsh/JavaScriptProjects/yandex/node_modules/extract-text-webpack-plugin/dist/loader.js:57:11)");

/***/ })
/******/ ]);