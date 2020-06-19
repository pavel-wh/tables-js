import { createToolbar } from './toolbar.template'
import { $ } from '@core/dom'
import { ExcelStateComponent } from '@core/ExcelStateComponent'
import { defaultStyles } from '@core/constants'

export class Toolbar extends ExcelStateComponent {
	static className = `excel__toolbar`

	constructor($root, options) {
		super($root, {
			name: 'Toolbar',
			listeners: ['click'],
			...options,
		})
	}

	prepare() {
		this.initState(defaultStyles)
	}

	get template() {
		return createToolbar(this.state)
	}

	toHTML() {
		return this.template
	}

	onClick(event) {
		const $target = $(event.target)
		$target.params.classList.toggle('excel__button_active')
		if ($target.dataset.type === 'button') {
			const value = JSON.parse($target.dataset.value)
			const key = Object.keys(value)[0]

			this.$notify('toolbar:setStyle', value)

			this.setState({ [key]: value[key] })
		}
	}
}
