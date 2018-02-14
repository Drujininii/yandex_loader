'use strict';

import InnerBlock from '../innerBlock/innerBlock';

export default class SwitchButton extends InnerBlock {
	constructor(classes, name, id) {
		classes = classes || [];
		classes.push('switchBoxContainer');
		const switchBoxContainer = InnerBlock.create('div', {}, classes);
		super(switchBoxContainer.el);
		this.createSwitchBox(name, id);
	}

	createSwitchBox(name, id) {
		const switchBoxInput = InnerBlock.create('input', {
				'id': `${id}`,
				'type': 'checkbox'
			}, ['switchBox__input', 'blocks_no_display']);

		const switchBoxLabel = InnerBlock.create('label', {
			'for': `${id}`,
		}, ['switchBox__label']);

		const switchBoxButton = InnerBlock.create('div', {}, ['switchBox__button']);

		switchBoxButton
			.append(switchBoxInput)
			.append(switchBoxLabel);

		const switchBoxName = InnerBlock.create('div', {}, ['switchBox__name'], `${name}`);

		this.append(switchBoxButton)
			.append(switchBoxName);
	}
}