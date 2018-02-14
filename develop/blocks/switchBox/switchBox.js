'use strict';

import InnerBlock from '../innerBlock/innerBlock';

export default class SwitchButton extends InnerBlock {
	constructor(classes) {
		classes = classes || [];
		classes.append('switchBoxContainer');
		const switchBoxContainer = InnerBlock.create('div', {}, classes);
		super(switchBoxContainer.el);
		this.createSwitchBox();
	}

	createSwitchBox() {
		const switchBoxInput = InnerBlock.create('input', {
				'id': 'checkbox',
				'type': 'checkbox'
			}, ['switchBox__input']);

		const switchBoxLabel= InnerBlock.create('label', {
			'for': 'checkbox',
		}, ['switchBox__label']);

		this.append(switchBoxInput)
			.append(switchBoxLabel);
	}
}