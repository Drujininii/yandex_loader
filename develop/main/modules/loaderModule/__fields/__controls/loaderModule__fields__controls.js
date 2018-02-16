'use strict';

import controls__fields from './__fields/loaderModule__fields__controls__fields';
import InnerBlock from '../../../../blocks/innerBlock/innerBlock';
import eventBus from '../../../eventBus/eventBus';


/**
 * Assembled controls of the progress
 * @module loaderModule__controls
 */
export default class loaderModule__controls extends InnerBlock {
	/**
	 * @constructor
	 */
	constructor() {
		const controls = InnerBlock.create('div', {}, ['loaderModule__controls', 'loaderModule__fields']);
		for (let field in controls__fields) {
			controls.append(controls__fields[field]);
		}
		super(controls.el);

		this.tapSwitchAnimation();
		this.tapSwitchHide();
	}


	/**
	 * Handler to animation switch button
	 */
	tapSwitchAnimation() {
		controls__fields.switchAnimation.on('click', () => {
			const isAnimated = document.getElementById('switchAnimation').checked;
			if (isAnimated)
				eventBus.emit('animateLoader');
			else
				eventBus.emit('stopAnimateLoader');
		})
	}


	/**
	 * Handler to hide switch button
	 */
	tapSwitchHide() {
		controls__fields.switchHide.on('click', () => {
			const isHide = document.getElementById('switchHide').checked;
			if (isHide)
				eventBus.emit('hideLoader');
			else
				eventBus.emit('showLoader');
		})
	}
}