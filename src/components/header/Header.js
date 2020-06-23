import { ExcelComponent } from '@core/ExcelComponent'
import { createHeader } from './header.template'
import { $ } from '@core/dom'
import { changeTitle } from '@/store/actions'
import { debounce } from '@core/utils'
import { ActiveRoute } from '@/routes/ActiveRouter'

export class Header extends ExcelComponent {
	static className = `excel__header`

	constructor($root, options) {
		super($root, {
			name: 'Header',
			listeners: ['input', 'click'],
			...options,
		})
	}

	prepare() {
		this.onInput = debounce(this.onInput, 300)
	}

	toHTML() {
		return createHeader(this.store.getState().tableTitle)
	}

	onClick(event) {
		const $target = $(event.target)

		if ($target.dataset.button === 'remove') {
			const decision = confirm('Вы действительно хотите удалить эту таблицу?')
			if (decision) {
				localStorage.removeItem(`excel:${ActiveRoute.param}`)
				ActiveRoute.navigate('/')
			}
		} else if ($target.dataset.button === 'exit') {
			ActiveRoute.navigate('/')
		}
	}

	onInput(event) {
		const $target = $(event.target)
		this.$dispatch(changeTitle($target.text()))
	}
}
