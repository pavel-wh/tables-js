// Helper
const CHARS = {
	A: 65,
	Z: 90,
}

// Pure functions
function createRow(content, index = '') {
	const resizer = index ? '<div class="excel__row-resize" data-resize="row"></div>' : ''
	return `
    <div class="excel__row" data-type="resizable" ${index ? 'data-row="' + (index - 1) + '"' : ''}>
      <div class="excel__info">
        ${index}
        ${resizer}
      </div>
      <div class="excel__data">${content}</div>
    </div>
  `
}

function createColumn(col, index) {
	return `
    <div class="excel__column" data-type="resizable" data-col="${index}">
      ${col}
      <div class="excel__column-resize" data-resize="col"></div>
    </div>`
}

function createCell(row) {
	return function (_, col) {
		return `<div class="excel__cell" contenteditable data-id="${row}:${col}" data-col="${col}"></div>`
	}
}

function toChar(index) {
	return String.fromCharCode(CHARS.A + index)
}

export function createTable(rowsCount = 26) {
	const colsCount = CHARS.Z - CHARS.A + 1
	const rows = []

	const cols = new Array(colsCount)
		.fill('')
		.map((el, index) => createColumn(toChar(index), index))
		.join('')
	rows.push(createRow(cols))

	for (let row = 0; row < rowsCount; row++) {
		const cells = new Array(colsCount).fill('').map(createCell(row)).join('')
		rows.push(createRow(cells, row + 1))
	}

	return rows.join('')
}
