import { ExcelComponent } from '@core/ExcelComponent'

export class Table extends ExcelComponent {
	static className = `excel__table`
	static tagContainer = `div`
	toHTML() {
		return `
			<div class="excel__row">
				<div class="excel__info"></div>
				<div class="excel__data">
					<div class="excel__column">A</div>
					<div class="excel__column">B</div>
					<div class="excel__column">C</div>
				</div>
			</div>
			<div class="excel__row">
				<div class="excel__info">1</div>
				<div class="excel__data">
					<div class="excel__cell" contenteditable>sad</div>
					<div class="excel__cell" contenteditable>asd</div>
					<div class="excel__cell" contenteditable>sad</div>
				</div>
			</div>
			<div class="excel__row">
				<div class="excel__info">2</div>
				<div class="excel__data">
					<div class="excel__cell" contenteditable>sad</div>
					<div class="excel__cell excel__cell_selected" contenteditable>asd</div>
					<div class="excel__cell" contenteditable>sad</div>
				</div>
			</div>
			<div class="excel__row">
				<div class="excel__info">3</div>
				<div class="excel__data">
					<div class="excel__cell" contenteditable>sad</div>
					<div class="excel__cell" contenteditable>asd</div>
					<div class="excel__cell" contenteditable>sad</div>
				</div>
			</div>
		`
	}
}
