'use strict';

import controls__fields from './__fields/loaderModule__fields__controls__fields';
import InnerBlock from '../../../../blocks/innerBlock/innerBlock';
import eventBus from '../../../eventBus/eventBus';

export default class loaderModule__controls extends InnerBlock {
	constructor() {
		const controls = InnerBlock.create('div', {}, ['loaderModule__controls', 'loaderModule__fields']);
		for (let field in controls__fields) {
			controls.append(controls__fields[field]);
		}
		super(controls.el);

		this.tapSwitchAnimation();
		this.tapSwitchHide();
	}

	tapSwitchAnimation() {
		controls__fields.switchAnimation.on('click', () => {
			eventBus.emit('switchLoaderAnimation');
		})
	}

	tapSwitchHide() {
		controls__fields.switchHide.on('click', () => {
			const isHide = document.getElementById('switchHide').checked;
			if (isHide)
				eventBus.emit('hideLoader');
			else
				eventBus.emit('showLoader');
		})
	}

	// setDownloadPercent() {
	// 	controls__fields.downloadPercent.on('onchange', () => {
	// 		alert('new value');
	// 	})
	// }
}