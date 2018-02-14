'use strict';

/**
 * Основной модуль работатющий со всеми объектами
 *@module main
 */

import loaderModule from './modules/loaderModule/loaderModule';
import eventBus from './modules/eventBus/eventBus';
import InnerBlock from './blocks/innerBlock/innerBlock';


new class main {
	constructor() {
		const app = InnerBlock.create('main', {}, 'app');
		document.body.appendChild(app.el);
		app.append(loaderModule);
	}
};