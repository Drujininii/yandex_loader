'use strict';

import InnerBlock from '../../blocks/innerBlock/innerBlock';
import loaderModuleFields from './__fields/loaderModule__fields';

export default new class LoaderModule extends InnerBlock {
	constructor() {
		const loaderModule = InnerBlock.create('div', {}, ['loaderModule']);
		console.log('loader fields: ', loaderModuleFields);
		for (let field in loaderModuleFields)
			loaderModule.append(loaderModuleFields[field]);
		super(loaderModule.el);
	}
}