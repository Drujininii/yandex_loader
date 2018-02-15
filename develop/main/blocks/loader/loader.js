'use strict';

import InnerBlock from '../innerBlock/innerBlock';
import eventBus from '../../modules/eventBus/eventBus';

export default class Loader extends InnerBlock {
	constructor(classes) {
		classes = classes || [];
		classes.push('loader');
		console.log('classes: ', classes);
		const loader = InnerBlock.create('div', {}, classes);


		loader.el.innerHTML = `
		<svg id='loader' width="128" height="128" xmlns="http://www.w3.org/2000/svg">
		<circle id="loader__background-circle" 
        	cx="64" cy="64" r="60"
           fill="transparent" stroke="#ededea" stroke-width="8">
        </circle>
        <circle id="loader__active-circle" 
        	cx="64" cy="64" r="60"
           fill="transparent" stroke="#fdd94c" stroke-width="8"
           stroke-dasharray="0 1" stroke-dashoffset="94">
        </circle>
    	</svg>`;

		super(loader.el);

		this.radius = 60;
		this.ringLength = 2 * Math.PI * this.radius;

		this.onHide();
		this.onShow();
		this.onAnimation();
		this.onStopAnimation();
		this.onChangeDownloadPercent();
	}

	onHide() {
		eventBus.on('hideLoader', () => {
			this.hide();
		})
	}

	onShow() {
		eventBus.on('showLoader', () => {
			this.show();
		})
	}

	onChangeDownloadPercent() {
		eventBus.on('changeDownloadPercent', (percent) => {
			const downLoadData = this.calculateEndPointCoordinate(percent);
			this.setEndPointCoordinates(downLoadData);
		})
	}

	calculateEndPointCoordinate(percent) {
		const newLeft = this.ringLength * percent / 100;
		const newDone = this.ringLength - newLeft;

		const downLoadData = {
			left: newLeft,
			done: newDone,
		};

		return downLoadData;
	}

	setEndPointCoordinates(downLoadData) {
		const newRingPercent = `${downLoadData.left} ${downLoadData.done}`;
		document.getElementById('loader__active-circle').setAttribute('stroke-dasharray', newRingPercent);
	}

	onAnimation() {
		eventBus.on('animateLoader', () => {
			document.getElementById('loader').classList.add('loader_rotating');
		})
	}

	onStopAnimation() {
		eventBus.on('stopAnimateLoader', () => {
			document.getElementById('loader').classList.remove('loader_rotating');
		})
	}
}