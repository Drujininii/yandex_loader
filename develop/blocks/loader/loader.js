'use strict';

import InnerBlock from '../innerBlock/innerBlock';

export default class Loader extends InnerBlock {
	constructor(classes) {
		classes = classes || [];
		classes.append('loader');
		const loader = InnerBlock.create('div', {}, classes);
		super(loader.el);
	}
}