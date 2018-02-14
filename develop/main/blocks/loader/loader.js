'use strict';

import InnerBlock from '../innerBlock/innerBlock';
import eventBus from '../../modules/eventBus/eventBus';

export default class Loader extends InnerBlock {
	constructor(...classes) {
		classes = classes || [];
		classes.push('loader');
		console.log('classes: ', classes);
		const loader = InnerBlock.create('div', {}, classes);
		super(loader.el);

		this.onHide();
		this.onShow();
	}

	onHide() {
		eventBus.on('hideLoader', () => {
			this.hide();
		})
	}

	onShow() {
		eventBus.on('showLoader', () => {
			this.show();
		})
	}
}