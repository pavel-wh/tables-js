class DOM {
	constructor(selector) {
		this.$el = typeof selector === 'string' ? document.querySelector(selector) : selector
	}

	html(markup) {
		if (typeof markup === 'string') {
			this.$el.innerHTML = markup
			return this
		}
		return this.$el.outerHTML.trim()
	}

	clear() {
		this.html('')
		return this
	}

	on(eventType, callback) {
		this.$el.addEventListener(eventType, callback)
	}

	off(eventType, callback) {
		this.$el.removeEventListener(eventType, callback)
	}

	append(node) {
		if (node instanceof DOM) {
			node = node.$el
		}

		if (Element.prototype.append) {
			this.$el.append(node)
		} else {
			this.$el.appendChild(node)
		}

		return this
	}

	get dataset() {
		return this.$el.dataset
	}

	get params() {
		return this.$el
	}

	closest(selector) {
		return $(this.$el.closest(selector))
	}

	getCoords() {
		return this.$el.getBoundingClientRect()
	}

	find(selector) {
		return $(this.$el.querySelector(selector))
	}

	findAll(selector) {
		return this.$el.querySelectorAll(selector)
	}

	css(styles = {}) {
		Object.keys(styles).forEach((key) => (this.$el.style[key] = styles[key]))
	}

	deleteAttribute(attribute) {
		return this.$el.removeAttribute(attribute)
	}

	addClass(className) {
		this.$el.classList.add(className)
		return this
	}

	removeClass(className) {
		this.$el.classList.remove(className)
		return this
	}

	id(parse) {
		if (parse) {
			const parsed = this.id().split(':')
			return {
				row: +parsed[0],
				col: +parsed[1],
			}
		}
		return this.dataset.id
	}

	focus() {
		this.$el.focus()
		return this
	}

	text(text) {
		if (typeof text !== 'undefined') {
			this.$el.textContent = text
			return this
		}
		if (this.$el.tagName.toLowerCase() === 'input') {
			return this.$el.value.trim()
		}
		return this.$el.textContent.trim()
	}

	getStyles(styles = []) {
		return styles.reduce((response, style) => {
			response[style] = this.$el.style[style]
			return response
		}, {})
	}

	attr(name, value) {
		if (value) {
			this.$el.setAttribute(name, value)
			return this
		}
		return this.$el.getAttribute(name)
	}
}

export function $(selector) {
	return new DOM(selector)
}

$.create = (tagName, classes = '', attribute = '') => {
	const el = document.createElement(tagName)
	if (classes) {
		const classesList = classes.split(' ')
		el.classList.add(...classesList)
	}
	if (attribute) {
		el.setAttribute(attribute, true)
	}
	return $(el)
}
