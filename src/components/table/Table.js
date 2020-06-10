import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { shouldResize, shouldSelect, matrix, nextSelector } from '@/components/table/table.helpers'
import { toResize } from '@/components/table/table.resizer'
import { TableSelection } from '@/components/table/TableSelection'
import { $ } from '@/core/dom'

export class Table extends ExcelComponent {
	static className = `excel__table`
	static tagContainer = `div`

	constructor($root) {
		super($root, {
			listeners: ['click', 'mousedown', 'mouseup', 'mouseup', 'keydown'],
		})
	}

	prepare() {
		// super.prepare()
		this.selection = new TableSelection()
	}

	toHTML() {
		return createTable()
	}

	init() {
		super.init()

		const $cell = this.$root.find('[data-id="0:0"')
		this.selection.select($cell)
	}

	onClick() {}

	onMousedown() {
		if (shouldResize(event)) {
			toResize(event, this.$root)
		} else if (shouldSelect(event)) {
			const $cell = $(event.target)
			if (event.shiftKey) {
				const $cells = matrix($cell, this.selection.current).map((id) =>
					this.$root.find(`[data-id="${id}"]`)
				)
				this.selection.selectGroup($cells)
			} else {
				this.selection.select($cell)
			}
		}
	}

	onKeydown(event) {
		const keys = ['Enter', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown']

		const { key } = event
		if (keys.includes(key)) {
			event.preventDefault()
			const id = this.selection.current.id(true)
			const $next = this.$root.find(nextSelector(key, id))
			this.selection.select($next)
		}
	}

	onMousemove() {
		console.log('Table: onMousemove')
	}

	onMouseup() {
		console.log('Table: onMouseup')
	}
}
