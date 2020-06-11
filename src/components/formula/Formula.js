import { ExcelComponent } from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
	static className = `excel__formula`

	constructor($root, options) {
		super($root, {
			name: 'Formula',
			listeners: ['input', 'click'],
			...options,
		})
	}

	toHTML() {
		return `
			<div class="excel__info excel__info--formula">fx</div>
			<input
				type="text"
				class="excel__input excel__input_formula"
			>
		`
	}

	onInput(event) {
		const text = event.target.value.trim()
		this.$notify('formula:input', text)
	}

	onClick() {
		console.log('Formula: onClick', event)
	}
}
