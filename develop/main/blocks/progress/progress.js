'use strict';

import InnerBlock from '../innerBlock/innerBlock';
import eventBus from '../../modules/eventBus/eventBus';


/**
 * Базовый класс лоадера
 * @module Block
 */
export default class Loader extends InnerBlock {
	/**
	 * @constructor
	 * @param {string[]} classes
	 */
	constructor(classes) {
		classes = classes || [];
		classes.push('loader');
		const loader = InnerBlock.create('div', {}, classes);


		loader.el.innerHTML = `
		<svg id='progress' width="128" height="128" xmlns="http://www.w3.org/2000/svg">
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
		this.onChangeProgressPercent();
	}


	/**
	 * Handler of hide event
	 */
	onHide() {
		eventBus.on('hideLoader', () => {
			this.setMod('hidden');
		})
	}


	/**
	 * Handler of show event
	 */
	onShow() {
		eventBus.on('showLoader', () => {
			this.setMod('normal');
		})
	}


	/**
	 * Handler of change progress percent event
	 */
	onChangeProgressPercent() {
		eventBus.on('changeProgressPercent', (percent) => {
			this.setValue(percent);
		})
	}


	/**
	 * Set current progress state
	 * @param {number} percent
	 */
	setValue(percent) {
		const progressData = this.calculateProgressState(percent);
		this.setProgressState(progressData);
	}

	/**
	 * Calculate
	 * @param {number} percent
	 * @returns {{left: number, done: number}}
	 */
	calculateProgressState(percent) {
		const newLeft = this.ringLength * percent / 100;
		const newDone = this.ringLength - newLeft;

		const progressData = {
			left: newLeft,
			done: newDone,
		};

		return progressData;
	}


	/**
	 * Set progress state by progress data
	 * @param progressData
	 */
	setProgressState(progressData) {
		const newRingPercent = `${progressData.left} ${progressData.done}`;
		document.getElementById('loader__active-circle').setAttribute('stroke-dasharray', newRingPercent);
	}


	/**
	 * Handler of animation on event
	 */
	onAnimation() {
		eventBus.on('animateLoader', () => {
			this.setMod('animated', 'yes');
		})
	}


	/**
	 * Handler of animation stop event
	 */
	onStopAnimation() {
		eventBus.on('stopAnimateLoader', () => {
			this.setMod('animated', '');
		})
	}


	/**
	 * Set mod to loader
	 * @param {string} mod - animated or normal or hidden
	 * @param {string} state - only for animated
	 */
	setMod(mod, state) {
		switch(mod) {
			case 'animated':
				if (state === 'yes')
					document.getElementById('progress').classList.add('loader_rotating');
				else
					document.getElementById('progress').classList.remove('loader_rotating');
				break;
			case 'normal':
				this.show();
				break;
			case 'hidden':
				this.hide();
				break;
			default:
				break;
		}
	}
}