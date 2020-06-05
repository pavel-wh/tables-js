import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
export class Table extends ExcelComponent {
	static className = `excel__table`
	static tagContainer = `div`

	constructor($root) {
		super($root, {
			listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
		})
	}

	toHTML() {
		return createTable()
	}

	onClick() {
		console.log('Table: onClick', event.target)
	}

	onMousedown() {
		console.log('Table: onMousedown', event.target)
	}

	onMousemove() {
		console.log('Table: onMousemove')
	}

	onMouseup() {
		console.log('Table: onMouseup', event.target)
	}
}
