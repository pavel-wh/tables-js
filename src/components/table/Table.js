import { ExcelComponent } from '@core/ExcelComponent'

export class Table extends ExcelComponent {
	static className = `excel__table`
	static tagContainer = `table`
	toHTML() {
		return `
			<thead>
				<tr class="excel__row">
					<th class="excel__cell excel__info excel__info_cell"></th>
					<th class="excel__cell excel__info excel__info_cell">A</th>
					<th class="excel__cell excel__info excel__info_cell">B</th>
					<th class="excel__cell excel__info excel__info_cell">C</th>
				</tr>
			</thead>
			<tbody>
				<tr class="excel__row">
					<th class="excel__cell excel__info excel__info_cell">1</th>
					<td class="excel__cell excel__cell_selected" contenteditable></td>
					<td class="excel__cell" contenteditable></td>
					<td class="excel__cell" contenteditable></td>
				</tr>
				<tr class="excel__row">
					<th class="excel__cell excel__info excel__info_cell">2</th>
					<td class="excel__cell" contenteditable></td>
					<td class="excel__cell" contenteditable></td>
					<td class="excel__cell" contenteditable></td>
				</tr>
				<tr class="excel__row">
					<th class="excel__cell excel__info excel__info_cell">3</th>
					<td class="excel__cell" contenteditable></td>
					<td class="excel__cell" contenteditable></td>
					<td class="excel__cell" contenteditable></td>
				</tr>
			</tbody>
		`
	}
}
