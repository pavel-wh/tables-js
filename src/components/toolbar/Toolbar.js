import { ExcelComponent } from '@core/ExcelComponent'

export class Toolbar extends ExcelComponent {
	static className = `excel__toolbar`

	constructor($root, options) {
		super($root, {
			name: 'Toolbar',
			listeners: ['click', 'mouseover', 'mouseout'],
			...options,
		})
	}

	toHTML() {
		return `
			<button class="excel__button">
				<i class="material-icons">format_align_left</i>
			</button>
			<button class="excel__button">
				<i class="material-icons">format_align_center</i>
			</button>
			<button class="excel__button">
				<i class="material-icons">format_align_right</i>
			</button>
			<button class="excel__button">
				<i class="material-icons">format_bold</i>
			</button>
			<button class="excel__button">
				<i class="material-icons">format_italic</i>
			</button>
			<button class="excel__button">
				<i class="material-icons">format_underline</i>
			</button>
		`
	}

	onMouseover() {
		console.log('Toolbar: onMouseover', event)
	}

	onMouseout() {
		console.log('Toolbar: onMouseout', event)
	}

	onClick() {
		console.log('Toolbar: onClick', event)
	}
}
