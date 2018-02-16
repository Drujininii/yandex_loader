'use strict';

/**
 * Singleton module eventBus. EventBus handle all internal events in this project
 * @module eventBus
 */
export default new class eventBus {
	/**
	 * @constructor
	 */
	constructor () {
		this.listeners = {};
	}


	/**
	 * Subscribe to an event
	 * @param {string} eventName
	 * @param {function} listener
	 * @returns {*}
	 */
	on(eventName, listener) {
		this.listeners[eventName] = this.listeners[eventName] || [];
		this.listeners[eventName].push(listener);
		return listener;
	}


	/**
	 * Unsubscribe from an event
	 * @param {string} eventName
	 * @param {function} listener
	 */
	off(eventName, listener) {
		this.listeners[eventName] = this.listeners[eventName] || [];
		const listenerIdx = this.listeners[eventName].indexOf(listener);
		this.listeners[eventName].split(listenerIdx, 1);
	}


	/**
	 * Emit event
	 * @param {string} eventName
	 * @param {Object} data
	 */
	emit(eventName, data) {
		this.listeners[eventName].forEach((listener) => {
			listener(data);
		});
	}
}
