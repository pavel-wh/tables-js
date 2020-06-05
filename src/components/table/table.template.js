const CHARS = {
	A: 65,
	Z: 90,
}

// Pure functions
function createRow(content, index = '') {
	return `
    <div class="excel__row">
      <div class="excel__info">${index}</div>
      <div class="excel__data">${content}</div>
    </div>
  `
}

function createColumnt(col) {
	return `<div class="excel__column">${col}</div>`
}

function createCell() {
	return `<div class="excel__cell" contenteditable></div>`
}

function toChar(index) {
	return String.fromCharCode(CHARS.A + index)
}

export function createTable(rowsCount = 26) {
	const colsCount = CHARS.Z - CHARS.A + 1
	const rows = []

	const cols = new Array(colsCount)
		.fill('')
		.map((el, index) => createColumnt(toChar(index)))
		.join('')
	rows.push(createRow(cols))

	for (let i = 0; i < rowsCount; i++) {
		const cells = new Array(colsCount).fill('').map(createCell).join('')
		rows.push(createRow(cells, i + 1))
	}

	return rows.join('')
}
