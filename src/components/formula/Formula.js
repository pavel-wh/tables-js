import { ExcelComponent } from '@core/ExcelComponent'
import { $ } from '@core/dom'
export class Formula extends ExcelComponent {
	static className = `excel__formula`

	constructor($root, options) {
		super($root, {
			name: 'Formula',
			listeners: ['input', 'click', 'keydown'],
			...options,
		})
	}

	toHTML() {
		return `
			<div class="excel__info excel__info--formula">fx</div>
			<div
				id="formula"
				contenteditable
				class="excel__input excel__input_formula"
			>
		`
	}

	init() {
		super.init()

		this.$formula = this.$root.find('#formula')
		this.$on('table:select', ($cell) => {
			this.$formula.text($cell.text())
		})
		this.$on('table:input', ($cell) => {
			this.$formula.text($cell.text())
		})
	}

	onInput(event) {
		this.$notify('formula:input', $(event.target).text())
	}

	onKeydown(event) {
		const keys = ['Enter', 'Tab']

		const { key } = event
		if (keys.includes(key)) {
			event.preventDefault()
			this.$notify('formula:done')
		}
	}

	onClick() {
		console.log('Formula: onClick', event)
	}
}
