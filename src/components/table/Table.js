import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { shouldResize, shouldSelect, matrix, nextSelector } from '@/components/table/table.helpers'
import { toResize } from '@/components/table/table.resizer'
import { TableSelection } from '@/components/table/TableSelection'
import { $ } from '@core/dom'
import * as actions from '@/store/actions'
import { defaultStyles } from '@core/constants'
import { parse } from '@core/parse'

export class Table extends ExcelComponent {
	static className = `excel__table`
	static tagContainer = `div`

	constructor($root, options) {
		super($root, {
			name: 'Table',
			listeners: ['mousedown', 'keydown', 'input'],
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

		this.$on('formula:input', (value) => {
			this.selection.current.attr('data-value', value).text(parse(value))
			this.updateTextInStore(value)
		})

		this.$on('formula:done', () => {
			this.selection.current.focus()
		})

		this.$on('toolbar:setStyle', (value) => {
			this.selection.setStyle(value)
			this.$dispatch(
				actions.setStyle({
					value,
					ids: this.selection.selectedIDs,
				})
			)
		})
	}

	selectCell($cell) {
		this.selection.select($cell)
		this.$notify('table:select', $cell)
		const styles = $cell.getStyles(Object.keys(defaultStyles))
		this.$dispatch(actions.changeStyles(styles))
	}

	async resizeTable(event) {
		try {
			const data = await toResize(event, this.$root)
			this.$dispatch(actions.tableResize(data))
		} catch (error) {
			console.error(error.message)
		}
	}

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

	updateTextInStore(value) {
		this.$dispatch(
			actions.changeText({
				id: this.selection.current.id(),
				value,
			})
		)
	}
}
