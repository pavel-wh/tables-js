import { DOMListener } from '@core/DOMListener'
export class ExcelComponent extends DOMListener {
	constructor($root, options = {}) {
		super($root, options.listeners)
		this.name = options.name || ''
		this.store = options.store
		this.observer = options.observer
		this.subscribe = options.subscribe || []
		this.unsubscribers = []

		this.prepare()
	}

	// Configure component before init
	prepare() {}

	// Returns a template component
	toHTML() {
		return ''
	}

	// Notify listeners about event
	$notify(event, ...args) {
		this.observer.notify(event, ...args)
	}

	// Subscribe for event
	$on(event, fn) {
		const unsubscriber = this.observer.subscribe(event, fn)
		this.unsubscribers.push(unsubscriber)
	}

	$dispatch(action) {
		this.store.notify(action)
	}

	// In go changes only field who we subscribed
	storeChanged(changes) {}

	isWatching(key) {
		return this.subscribe.includes(key)
	}

	// Init component and add DOM listeners
	init() {
		this.initDOMListeners()
	}

	// Remove component and DOM listeners
	destroy() {
		this.removeDOMListeners()
		this.unsubscribers.forEach((unsubscriber) => unsubscriber())
	}
}
