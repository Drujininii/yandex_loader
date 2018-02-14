import SwitchBox from '../../../../../blocks/switchBox/switchBox';
import InnerBlock from '../../../../../blocks/innerBlock/innerBlock';

const loaderModule__controls__fields = {
	switchAnimation: new SwitchBox([
		'loaderModule__controls__switchBox',
		'loaderModule__controls__switchAnimation']),
	switchHide: new SwitchBox([
		'loaderModule__controls__switchBox',
		'loaderModule__controls__switchHide']),
	downloadPercent: InnerBlock.create('input', {'type': 'text'}, [
		'loaderModule__controls__downloadPercent'])
};

export default loaderModule__controls__fields;