class DOM {
	constructor(selector) {
		this.$el =
			typeof selector === 'string' ? document.querySelector(selector) : selector
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
