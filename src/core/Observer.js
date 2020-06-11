export class Observer {
	constructor() {
		this.listeners = {}
	}

	// dispatch, fire, trigger, emit
	// Notify listeners if available
	// table.notify('table:select', {a: 1})
	notify(event, ...args) {
		if (!Array.isArray(this.listeners[event])) {
			return false
		}
		this.listeners[event].forEach((listener) => {
			listener(...args)
		})
		return true
	}

	// on, listen
	// Subscribe to notify
	// Add new listener
	// formula.subscribe('table:select', () => {})
	subscribe(event, fn) {
		this.listeners[event] = this.listeners[event] || []
		this.listeners[event].push(fn)

		return () => {
			this.listeners[event] = this.listeners[event].filter((listener) => listener !== fn)
		}
	}
}
