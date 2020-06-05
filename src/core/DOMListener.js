import { capitalize } from '@core/utils'
export class DOMListener {
	constructor($root, listeners = []) {
		if (!$root) {
			throw new Error(`No $root provided for DOMListener`)
		}
		this.$root = $root
		this.listeners = listeners
	}

	initDOMListeners() {
		this.listeners.forEach((listener) => {
			const method = getMethodName(listener)
			if (!this[method]) {
				throw new Error(
					`Method ${method} is not implemented in ${name} component`
				)
			}
			// redefining a method to a method with its context so that you can delete it later on wrap for removeEventListener
			this[method] = this[method].bind(this)
			// wrap for addEventListener
			this.$root.on(listener, this[method])
		})
	}

	removeDOMListeners() {
		this.listeners.forEach((listener) => {
			const method = getMethodName(listener)
			// wrap for removeEventListener
			this.$root.off(listener, this[method])
		})
	}
}

// input to onInput
function getMethodName(eventName) {
	return 'on' + capitalize(eventName)
}
