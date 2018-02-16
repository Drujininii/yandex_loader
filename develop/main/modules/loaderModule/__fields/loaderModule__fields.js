import Loader from '../../../blocks/progress/progress';
import LoaderModule_controls from './__controls/loaderModule__fields__controls';


/**
 * Loader module fields
 * @type {{progress: Loader, controls: loaderModule__controls}}
 */
const loaderModule__fields = {
	loader: new Loader(['loaderModule__loader', 'loaderModule__fields']),
	controls: new LoaderModule_controls(),
};

export default loaderModule__fields;