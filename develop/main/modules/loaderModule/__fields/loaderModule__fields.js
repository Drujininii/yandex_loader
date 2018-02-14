import Loader from '../../../blocks/loader/loader';
import LoaderModule_controls from './__controls/loaderModule__fields__controls';


const loaderModule__fields = {
	loader: new Loader(['loaderModule__loader', 'loaderModule__fields']),
	controls: new LoaderModule_controls(),
};

export default loaderModule__fields;