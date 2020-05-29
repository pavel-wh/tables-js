import { ExcelComponent } from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
	static className = `excel__formula`

	constructor($root) {
		super($root, {
			name: 'Formula',
			listeners: ['input'],
		})
	}

	toHTML() {
		return `
			<div class="excel__info">fx</div>
			<input 
				type="text" 
				class="excel__input excel__input_formula"
			>
		`
	}

	onInput() {
		console.log('Formula: onInput', event)
	}
}
