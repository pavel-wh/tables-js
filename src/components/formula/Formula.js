import { ExcelComponent } from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
	static className = `excel__formula`

	constructor($root) {
		super($root, {
			name: 'Formula',
			// listeners: ['input', 'click'],
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

	onInput() {
		console.log('Formula: onInput', event.target.value, this.$root)
	}

	onClick() {
		console.log('Formula: onClick', event)
	}
}
