'use strict';

import InnerBlock from '../../../../../../blocks/innerBlock/innerBlock';
import eventBus from '../../../../../eventBus/eventBus';


/**
 * Progress text input module. You can manually set percent in this area to change progress state
 * @module ProgressPercent
 */
export default class ProgressPercent extends InnerBlock {
	/**
	 * @constructor
	 * @param {string} text
	 */
	constructor(text) {
		const progressPercentContainer = InnerBlock.create('div', {},
			['loaderModule__controls__progressPercent__container']);
		super(progressPercentContainer.el);
		this.lastValue = 0;
		this.createProgressPercent(text);
	}


	/**
	 * Create input field, description and set handler to changing value
	 * @param {string} text
	 */
	createProgressPercent(text) {
		this.progressPercentInput = InnerBlock.create('input',
			{'type': 'text', 'maxlength': '3', 'placeholder': '0'},
			['loaderModule__controls__progressPercent__input']);

		this.onChange();

		this.downloadPercentText = InnerBlock.create('div', {},
			['loaderModule__controls__progressPercent__text'], text);

		this.append(this.progressPercentInput)
			.append(this.downloadPercentText);
	}


	/**
	 * Change percent handler
	 */
	onChange() {
		this.progressPercentInput.el.onchange = () => {
			let value = this.progressPercentInput.el.value;
			if (isNaN(value)) {
				alert('Введите число');//ну да, согласен. представьте, что здесь модальное окно
			}
			else if (value > 100) {
				this.lastValue = 100;
				eventBus.emit('changeProgressPercent', this.lastValue);
			}
			else {
				this.lastValue = value;
				eventBus.emit('changeProgressPercent', this.lastValue);
			}
			this.progressPercentInput.el.value = '';
			this.progressPercentInput.el.placeholder = this.lastValue;
		};
	}
}