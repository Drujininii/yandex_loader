'use strict';

import controls__fields from './__fields/loaderModule__fileds__controls__fields';
import InnerBlock from '../../../../blocks/innerBlock/innerBlock';
import eventBus from '../../../eventBus/eventBus';

export default class loaderModule__controls extends InnerBlock {
	constructor() {
		const controls = InnerBlock.create('div', {}, ['loaderModule__controls']);
		for (let field of controls__fields) {
			controls.append(field);
		}
		super(controls.el);

		this.tapSwitchAnimation();
		this.tapSwitchHide();
		this.setDownloadPercent();
	}

	tapSwitchAnimation() {
		controls__fields.switchAnimation.on('click', () => {
			eventBus.emit('switchLoaderAnimation');
		})
	}

	tapSwitchHide() {
		controls__fields.switchHide.on('click', () => {
			eventBus.emit('switchLoaderHide');
		})
	}

	setDownloadPercent() {
		controls__fields.on('onchange', () => {
			alert('new value');
		})
	}
}