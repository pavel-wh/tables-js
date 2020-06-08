import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { shouldResize } from '@/components/table/table.helpers'
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
		if (shouldResize(event)) {
			toResize(event, this.$root)
		}
	}

	onMousemove() {
		console.log('Table: onMousemove')
	}

	onMouseup() {
		console.log('Table: onMouseup')
	}
}
