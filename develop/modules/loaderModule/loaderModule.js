'use strict';

import InnerBlock from '../../blocks/innerBlock/innerBlock';
import loaderModuleFields from './__fields/loaderModule__fields';

export default new class LoaderModule extends InnerBlock {
	constructor() {
		const LoaderModule = InnerBlock.create('div', {}, 'LoaderModule');
		for (let field of loaderModuleFields)
			LoaderModule.append(field);
		super(LoaderModule.el);
	}
}