import { ExcelComponent } from '@core/ExcelComponent'
import { createHeader } from './header.template'
import { $ } from '@/core/dom'
import { changeTitle } from '@/store/actions'
import { debounce } from '../../core/utils'

export class Header extends ExcelComponent {
	static className = `excel__header`

	constructor($root, options) {
		super($root, {
			name: 'Header',
			listeners: ['input'],
			...options,
		})
	}

	prepare() {
		this.onInput = debounce(this.onInput, 300)
	}

	toHTML() {
		return createHeader(this.store.getState().tableTitle)
	}

	onInput(event) {
		const $target = $(event.target)
		this.$dispatch(changeTitle($target.text()))
	}
}
