import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { shouldResize, shouldSelect, matrix, nextSelector } from '@/components/table/table.helpers'
import { toResize } from '@/components/table/table.resizer'
import { TableSelection } from '@/components/table/TableSelection'
import { $ } from '@/core/dom'
import * as actions from '@/store/actions'

export class Table extends ExcelComponent {
	static className = `excel__table`
	static tagContainer = `div`

	constructor($root, options) {
		super($root, {
			name: 'Table',
			listeners: ['click', 'mousedown', 'mouseup', 'mouseup', 'keydown', 'input'],
			...options,
		})
	}

	prepare() {
		super.prepare()
		this.selection = new TableSelection()
	}

	toHTML() {
		return createTable(20, this.store.getState())
	}

	init() {
		super.init()

		this.selectCell(this.$root.find('[data-id="0:0"'))

		this.$on('formula:input', (text) => {
			this.selection.current.text(text)
			this.updateTextInStore(text)
		})

		this.$on('formula:done', () => {
			this.selection.current.focus()
		})

		this.$subscribe((state) => {
			console.log('TableState', state)
		})
	}

	selectCell($cell) {
		this.selection.select($cell)
		this.$notify('table:select', $cell)
	}

	async resizeTable(event) {
		try {
			const data = await toResize(event, this.$root)
			this.$dispatch(actions.tableResize(data))
		} catch (error) {
			console.error(error.message)
		}
	}

	onClick() {}

	onMousedown() {
		if (shouldResize(event)) {
			this.resizeTable(event)
		} else if (shouldSelect(event)) {
			const $cell = $(event.target)
			if (event.shiftKey) {
				const $cells = matrix($cell, this.selection.current).map((id) =>
					this.$root.find(`[data-id="${id}"]`)
				)
				this.selection.selectGroup($cells)
			} else {
				this.selectCell($cell)
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
			this.selectCell($next)
		}
	}

	onInput(event) {
		// this.$notify('table:input', $(event.target))
		this.updateTextInStore($(event.target).text())
	}

	onMousemove() {
		console.log('Table: onMousemove')
	}

	onMouseup() {
		console.log('Table: onMouseup')
	}

	updateTextInStore(value) {
		this.$dispatch(
			actions.changeText({
				id: this.selection.current.id(),
				value,
			})
		)
	}
}
