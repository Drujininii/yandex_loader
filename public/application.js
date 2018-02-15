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
		this.el.classList.add('blocks_hidden');
	}

	/**
  * Отображает блок
  */
	show() {
		this.hidden = false;
		this.el.classList.remove('blocks_hidden');
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

requireAll(__webpack_require__(10));
requireAll(__webpack_require__(12));
requireAll(__webpack_require__(22));

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_eventBus_eventBus__ = __webpack_require__(1);





class Loader extends __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__["default"] {
	constructor(classes) {
		classes = classes || [];
		classes.push('loader');
		console.log('classes: ', classes);
		const loader = __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__["default"].create('div', {}, classes);

		loader.el.innerHTML = `
		<svg id='loader' width="128" height="128" xmlns="http://www.w3.org/2000/svg">
		<circle id="loader__background-circle" 
        	cx="64" cy="64" r="60"
           fill="transparent" stroke="#ededea" stroke-width="8">
        </circle>
        <circle id="loader__active-circle" 
        	cx="64" cy="64" r="60"
           fill="transparent" stroke="#fdd94c" stroke-width="8"
           stroke-dasharray="0 1" stroke-dashoffset="94">
        </circle>
    	</svg>`;

		super(loader.el);

		this.radius = 60;
		this.ringLength = 2 * Math.PI * this.radius;

		this.onHide();
		this.onShow();
		this.onAnimation();
		this.onStopAnimation();
		this.onChangeDownloadPercent();
	}

	onHide() {
		__WEBPACK_IMPORTED_MODULE_1__modules_eventBus_eventBus__["default"].on('hideLoader', () => {
			this.hide();
		});
	}

	onShow() {
		__WEBPACK_IMPORTED_MODULE_1__modules_eventBus_eventBus__["default"].on('showLoader', () => {
			this.show();
		});
	}

	onChangeDownloadPercent() {
		__WEBPACK_IMPORTED_MODULE_1__modules_eventBus_eventBus__["default"].on('changeDownloadPercent', percent => {
			const downLoadData = this.calculateEndPointCoordinate(percent);
			this.setEndPointCoordinates(downLoadData);
		});
	}

	calculateEndPointCoordinate(percent) {
		const newLeft = this.ringLength * percent / 100;
		const newDone = this.ringLength - newLeft;

		const downLoadData = {
			left: newLeft,
			done: newDone
		};

		return downLoadData;
	}

	setEndPointCoordinates(downLoadData) {
		const newRingPercent = `${downLoadData.left} ${downLoadData.done}`;
		document.getElementById('loader__active-circle').setAttribute('stroke-dasharray', newRingPercent);
	}

	onAnimation() {
		__WEBPACK_IMPORTED_MODULE_1__modules_eventBus_eventBus__["default"].on('animateLoader', () => {
			document.getElementById('loader').classList.add('loader_rotating');
		});
	}

	onStopAnimation() {
		__WEBPACK_IMPORTED_MODULE_1__modules_eventBus_eventBus__["default"].on('stopAnimateLoader', () => {
			document.getElementById('loader').classList.remove('loader_rotating');
		});
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
	constructor(classes, name, id) {
		classes = classes || [];
		classes.push('switchBoxContainer');
		const switchBoxContainer = __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__["default"].create('div', {}, classes);
		super(switchBoxContainer.el);
		this.createSwitchBox(name, id);
	}

	createSwitchBox(name, id) {
		const switchBoxInput = __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__["default"].create('input', {
			'id': `${id}`,
			'type': 'checkbox'
		}, ['switchBox__input', 'blocks_no_display']);

		const switchBoxLabel = __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__["default"].create('label', {
			'for': `${id}`
		}, ['switchBox__label']);

		const switchBoxButton = __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__["default"].create('div', {}, ['switchBox__button']);

		switchBoxButton.append(switchBoxInput).append(switchBoxLabel);

		const switchBoxName = __WEBPACK_IMPORTED_MODULE_0__innerBlock_innerBlock__["default"].create('div', {}, ['switchBox__name'], `${name}`);

		this.append(switchBoxButton).append(switchBoxName);
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
		const loaderModule = __WEBPACK_IMPORTED_MODULE_0__blocks_innerBlock_innerBlock__["default"].create('div', {}, ['loaderModule']);
		for (let field in __WEBPACK_IMPORTED_MODULE_1__fields_loaderModule_fields__["default"]) loaderModule.append(__WEBPACK_IMPORTED_MODULE_1__fields_loaderModule_fields__["default"][field]);
		super(loaderModule.el);
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
	loader: new __WEBPACK_IMPORTED_MODULE_0__blocks_loader_loader__["default"](['loaderModule__loader', 'loaderModule__fields']),
	controls: new __WEBPACK_IMPORTED_MODULE_1__controls_loaderModule_fields_controls__["default"]()
};

/* harmony default export */ __webpack_exports__["default"] = (loaderModule__fields);

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fields_loaderModule_fields_controls_fields__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__blocks_innerBlock_innerBlock__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eventBus_eventBus__ = __webpack_require__(1);






class loaderModule__controls extends __WEBPACK_IMPORTED_MODULE_1__blocks_innerBlock_innerBlock__["default"] {
	constructor() {
		const controls = __WEBPACK_IMPORTED_MODULE_1__blocks_innerBlock_innerBlock__["default"].create('div', {}, ['loaderModule__controls', 'loaderModule__fields']);
		for (let field in __WEBPACK_IMPORTED_MODULE_0__fields_loaderModule_fields_controls_fields__["default"]) {
			controls.append(__WEBPACK_IMPORTED_MODULE_0__fields_loaderModule_fields_controls_fields__["default"][field]);
		}
		super(controls.el);

		this.tapSwitchAnimation();
		this.tapSwitchHide();
	}

	tapSwitchAnimation() {
		__WEBPACK_IMPORTED_MODULE_0__fields_loaderModule_fields_controls_fields__["default"].switchAnimation.on('click', () => {
			const isAnimated = document.getElementById('switchAnimation').checked;
			if (isAnimated) __WEBPACK_IMPORTED_MODULE_2__eventBus_eventBus__["default"].emit('animateLoader');else __WEBPACK_IMPORTED_MODULE_2__eventBus_eventBus__["default"].emit('stopAnimateLoader');
		});
	}

	tapSwitchHide() {
		__WEBPACK_IMPORTED_MODULE_0__fields_loaderModule_fields_controls_fields__["default"].switchHide.on('click', () => {
			const isHide = document.getElementById('switchHide').checked;
			if (isHide) __WEBPACK_IMPORTED_MODULE_2__eventBus_eventBus__["default"].emit('hideLoader');else __WEBPACK_IMPORTED_MODULE_2__eventBus_eventBus__["default"].emit('showLoader');
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__downloadPercent_loaderModule_fields_controls_fields_downloadPercent__ = __webpack_require__(9);



const loaderModule__controls__fields = {
	downloadPercent: new __WEBPACK_IMPORTED_MODULE_1__downloadPercent_loaderModule_fields_controls_fields_downloadPercent__["default"]('Value'),
	switchAnimation: new __WEBPACK_IMPORTED_MODULE_0__blocks_switchBox_switchBox__["default"](['loaderModule__controls__switchBox', 'loaderModule__controls__switchAnimation'], 'Animate', 'switchAnimation'),
	switchHide: new __WEBPACK_IMPORTED_MODULE_0__blocks_switchBox_switchBox__["default"](['loaderModule__controls__switchBox', 'loaderModule__controls__switchHide'], 'Hide', 'switchHide')

};

/* harmony default export */ __webpack_exports__["default"] = (loaderModule__controls__fields);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__blocks_innerBlock_innerBlock__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventBus_eventBus__ = __webpack_require__(1);





class DownloadPercent extends __WEBPACK_IMPORTED_MODULE_0__blocks_innerBlock_innerBlock__["default"] {
	constructor(text) {
		const downloadPercentContainer = __WEBPACK_IMPORTED_MODULE_0__blocks_innerBlock_innerBlock__["default"].create('div', {}, ['loaderModule__controls__downloadPercent__container']);
		super(downloadPercentContainer.el);
		this.lastValue = 0;
		this.createDownloadPercent(text);
	}

	createDownloadPercent(text) {
		const downloadPercentInput = __WEBPACK_IMPORTED_MODULE_0__blocks_innerBlock_innerBlock__["default"].create('input', { 'type': 'text', 'maxlength': '3', 'value': '0' }, ['loaderModule__controls__downloadPercent__input']);

		downloadPercentInput.el.onchange = () => {
			let value = downloadPercentInput.el.value;
			if (isNaN(value)) {
				alert('Введите число');
				downloadPercentInput.el.value = this.lastValue;
			} else if (value > 100) {
				downloadPercentInput.el.value = 100;
			} else {
				this.lastValue = value;
				__WEBPACK_IMPORTED_MODULE_1__eventBus_eventBus__["default"].emit('changeDownloadPercent', value);
			}
		};

		const downloadPercentText = __WEBPACK_IMPORTED_MODULE_0__blocks_innerBlock_innerBlock__["default"].create('div', {}, ['loaderModule__controls__downloadPercent__text'], text);

		this.append(downloadPercentInput).append(downloadPercentText);
	}
}
/* harmony export (immutable) */ __webpack_exports__["default"] = DownloadPercent;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./include.js": 2,
	"./main/blocks/innerBlock/innerBlock.js": 0,
	"./main/blocks/loader/loader.js": 3,
	"./main/blocks/switchBox/switchBox.js": 4,
	"./main/main.js": 11,
	"./main/modules/eventBus/eventBus.js": 1,
	"./main/modules/loaderModule/__fields/__controls/__fields/__downloadPercent/loaderModule__fields__controls__fields__downloadPercent.js": 9,
	"./main/modules/loaderModule/__fields/__controls/__fields/loaderModule__fields__controls__fields.js": 8,
	"./main/modules/loaderModule/__fields/__controls/loaderModule__fields__controls.js": 7,
	"./main/modules/loaderModule/__fields/loaderModule__fields.js": 6,
	"./main/modules/loaderModule/loaderModule.js": 5
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
webpackContext.id = 10;

/***/ }),
/* 11 */
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
		const app = __WEBPACK_IMPORTED_MODULE_2__blocks_innerBlock_innerBlock__["default"].create('main', {}, ['app']);
		document.body.appendChild(app.el);
		app.append(__WEBPACK_IMPORTED_MODULE_0__modules_loaderModule_loaderModule__["default"]);
	}
}();

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/blocks/_hidden/blocks_hidden.scss": 13,
	"./main/blocks/_no-display/blocks_no-display.scss": 14,
	"./main/blocks/loader/_rotating/loader_rotating.scss": 39,
	"./main/blocks/loader/loader.scss": 15,
	"./main/blocks/switchBox/switchBox.scss": 16,
	"./main/main.scss": 17,
	"./main/modules/loaderModule/__fields/__controls/__fields/__downloadPercent/loaderModule__fields__controls__fields__downloadPercent.scss": 18,
	"./main/modules/loaderModule/__fields/__controls/loaderModule__fields__controls.scss": 19,
	"./main/modules/loaderModule/__fields/__loader/loaderModule__fields__loader.scss": 41,
	"./main/modules/loaderModule/__fields/loaderModule__fields.scss": 20,
	"./main/modules/loaderModule/loaderModule.scss": 21
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
webpackContext.id = 12;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./main/modules/loaderModule/__fields/__controls/__fields/loaderModule__fields__controls__fields.css": 23
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
webpackContext.id = 22;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=application.js.map