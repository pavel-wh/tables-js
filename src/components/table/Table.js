import { $ } from '@core/dom'
import { ExcelComponent } from '@core/ExcelComponent'

export class Table extends ExcelComponent {
	static className = `excel__table`
	static tagContainer = `table`
	toHTML() {
		return toGenerateTable(260, 260)
	}
}

function toGenerateTable(lengthRows, lengthColumns) {
	const $thead = $.create('thead')
	const $tbody = $.create('tbody')

	// Generate Head Table
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().slice('')
	const $headRow = $.create('tr', 'excel__row')
	for (let index = 0; index <= lengthColumns; index++) {
		const $th = $.create('th', 'excel__cell excel__info excel__info_cell')
		if (index === 0) {
			$headRow.append($th)
		} else {
			const sequence = Math.ceil(index / alphabet.length)
			if (sequence === 1) {
				$headRow.append($th.append(alphabet[index - 1]))
			} else {
				if (index % alphabet.length === 0) {
					$headRow.append(
						$th.append(alphabet[sequence - 2] + alphabet[alphabet.length - 1])
					)
				} else {
					$headRow.append(
						$th.append(
							alphabet[sequence - 2] + alphabet[(index % alphabet.length) - 1]
						)
					)
				}
			}
		}
	}
	$thead.append($headRow)

	// Generate Body Table with Rows
	// excel__cell_selected - class for cell
	for (let i = 0; i <= lengthRows; i++) {
		const $row = $.create('tr', 'excel__row')

		for (let j = 0; j <= lengthColumns; j++) {
			const $th = $.create('th', 'excel__cell excel__info excel__info_cell')
			const $td = $.create('td', 'excel__cell', 'contenteditable')
			if (j === 0) {
				$row.append($th.append(i + 1))
			} else {
				$row.append($td)
			}
		}

		$tbody.append($row)
	}

	return $thead.html() + $tbody.html()
}
