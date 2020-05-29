import { ExcelComponent } from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
	static className = `excel__formula`
	toHTML() {
		return `
			<div class="excel__info">fx</div>
			<input 
				type="text" 
				class="excel__input excel__input_formula"
			>
		`
	}
}
