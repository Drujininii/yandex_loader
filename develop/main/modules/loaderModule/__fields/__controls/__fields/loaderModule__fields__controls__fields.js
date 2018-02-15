import SwitchBox from '../../../../../blocks/switchBox/switchBox';
import DownloadPercent from './__downloadPercent/loaderModule__fields__controls__fields__downloadPercent';


const loaderModule__controls__fields = {
	downloadPercent: new DownloadPercent('Value'),
	switchAnimation: new SwitchBox([
		'loaderModule__controls__switchBox',
		'loaderModule__controls__switchAnimation'], 'Animate', 'switchAnimation'),
	switchHide: new SwitchBox([
		'loaderModule__controls__switchBox',
		'loaderModule__controls__switchHide'], 'Hide', 'switchHide'),

};

export default loaderModule__controls__fields;