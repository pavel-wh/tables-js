import { $ } from '@core/dom'
import { Observer } from '@core/Observer'
import { StoreSubscriber } from '../../core/StoreSubscriber'
import { updateDate } from '../../store/actions'
export class Excel {
	constructor(options) {
		this.components = options.components || []
		this.store = options.store
		this.observer = new Observer()
		this.subscriber = new StoreSubscriber(this.store)
	}

	getRoot() {
		const $root = $.create('div', 'excel')

		const componentOptions = {
			observer: this.observer,
			store: this.store,
		}

		this.components = this.components.map((Component) => {
			const $el = $.create(Component.tagContainer || 'div', Component.className || '')
			const component = new Component($el, componentOptions)
			$el.html(component.toHTML())
			$root.append($el)
			return component
		})

		return $root
	}

	init() {
		this.store.notify(updateDate())
		this.subscriber.subscribeComponents(this.components)
		this.components.forEach((component) => component.init())
	}

	destroy() {
		this.subscriber.unsubscribeFromStore()
		this.components.forEach((component) => component.destroy())
	}
}
