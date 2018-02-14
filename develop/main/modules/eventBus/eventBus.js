'use strict';

export default new class eventBus {
	constructor () {
		this.listeners = {};
	}


	on(eventName, listener) {
		this.listeners[eventName] = this.listeners[eventName] || [];
		this.listeners[eventName].push(listener);
		return listener;
	}

	off(eventName, listener) {
		this.listeners[eventName] = this.listeners[eventName] || [];
		const listenerIdx = this.listeners[eventName].indexOf(listener);
		this.listeners[eventName].split(listenerIdx, 1);
	}

	emit(eventName, data) {
		this.listeners[eventName].forEach((listener) => {
			listener(data);
		});
	}
}
