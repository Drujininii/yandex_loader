'use strict';

import InnerBlock from '../../blocks/innerBlock/innerBlock';
import loaderModuleFields from './__fields/loaderModule__fields';


/**
 * Assembled progress with controls buttons
 * @module LoaderModule
 */
export default new class LoaderModule extends InnerBlock {
	/**
	 * @constructor
	 */
	constructor() {
		const loaderModule = InnerBlock.create('div', {}, ['loaderModule']);
		for (let field in loaderModuleFields)
			loaderModule.append(loaderModuleFields[field]);
		super(loaderModule.el);
	}
}