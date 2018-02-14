'use strict';

import InnerBlock from '../../../../../../blocks/innerBlock/innerBlock';

export default class DownloadPercent extends InnerBlock {
	constructor(text) {
		const downloadPercentContainer = InnerBlock.create('div', {},
			['loaderModule__fields__controls__fields__downloadPercent']);
		super(downloadPercentContainer.el);
		this.lastValue = 0;
		this.createDownloadPercent(text);
	}

	createDownloadPercent(text) {
		const downloadPercentInput = InnerBlock.create('input',
			{'type': 'text', 'maxlength': '3'},
			['loaderModule__controls__downloadPercent__input']);

		downloadPercentInput.el.onchange = () => {
			let value = downloadPercentInput.el.value;
			if (isNaN(value)) {
				alert('Введите число');
				downloadPercentInput.el.value = this.lastValue;
			}
			else if (value > 100) {
				value = 100;
				downloadPercentInput.el.value = 100;
			}
			else
				this.lastValue = value;
		};

		const downloadPercentText = InnerBlock.create('div', {},
			['loaderModule__controls__downloadPercent__text'], text);

		this.append(downloadPercentInput)
			.append(downloadPercentText);
	}
}