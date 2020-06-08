import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { toResize } from '@/components/table/table.resizer'

export class Table extends ExcelComponent {
	static className = `excel__table`
	static tagContainer = `div`

	constructor($root) {
		super($root, {
			listeners: ['click', 'mousedown', 'mouseup', 'mouseup'],
		})
	}

	toHTML() {
		return createTable()
	}

	onClick() {
		console.log('Table: onClick')
	}

	onMousedown() {
		toResize(event, this.$root)
	}

	onMousemove() {
		console.log('Table: onMousemove')
	}

	onMouseup() {
		if (event.target.dataset.resize) {
			console.log(`Stop resizing ${event.target.dataset.resize}`)
		}
	}
}
