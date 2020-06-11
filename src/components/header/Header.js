import { ExcelComponent } from '@core/ExcelComponent'

export class Header extends ExcelComponent {
	static className = `excel__header`

	constructor($root, options) {
		super($root, {
			name: 'Header',
			...options,
		})
	}

	toHTML() {
		return `
		<input
			type="text"
			id="table-name"
			class="excel__input"
			value="Table name"
		>
		<div class="excel__container">
			<button class="excel__button">
				<i class="material-icons">delete</i>
			</button>
			<button class="excel__button">
				<i class="material-icons">exit_to_app</i>
			</button>
		</div>
		`
	}
}
