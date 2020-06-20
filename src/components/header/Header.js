import { ExcelComponent } from '@core/ExcelComponent'
import { createHeader } from './header.template'
import { $ } from '@/core/dom'
import { changeTitle } from '@/store/actions'

export class Header extends ExcelComponent {
	static className = `excel__header`

	constructor($root, options) {
		super($root, {
			name: 'Header',
			listeners: ['input'],
			...options,
		})
	}

	toHTML() {
		return createHeader(this.store.getState().tableTitle)
	}

	onInput(event) {
		const $target = $(event.target)
		this.$dispatch(changeTitle($target.text()))
	}
}
