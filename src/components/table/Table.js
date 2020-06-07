import { ExcelComponent } from '@core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { $ } from '@/core/dom'

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
		if (event.target.dataset.resize) {
			const $resizer = $(event.target)
			const $parent = $resizer.closest('[data-type="resizable"')
			const coords = $parent.getCoords()

			if (event.target.dataset.resize === "col") {
				const cells = this.$root.findAll(`[data-col="${$parent.dataset.col}"]`)
				document.onmousemove = (e) => {
					const delta = e.pageX - coords.right
					const value = coords.width + delta + 'px'
					$parent.css({
						width: value
					})
	
					cells.forEach((el) => el.style.width = value)
				}
			}	else {
				document.onmousemove = (e) => {
					const delta = e.pageY - coords.bottom
					const value = coords.height + delta + 'px'
					$parent.css({
						height: value
					})
				}
			}

			document.onmouseup = () => {
				document.onmousemove = null
			}
		}
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

/* With document select
	Range: 2.58 s – 8.41 s
	5835 ms
	171 msScripting
	3007 msRendering
	333 msPainting
	284 msSystem
	2040 msIdle


	Range: 0 – 8.52 s
	8519 ms
	282 msScripting
	3617 msRendering
	651 msPainting
	546 msSystem
	3422 msIdle
	8519 msTotal

*/