export function shouldResize(event) {
	return event.target.dataset.resize
}

export function shouldSelect(event) {
	return event.target.dataset.id
}

export function range(start, end) {
	if (end < start) {
		;[start, end] = [end, start]
	}
	return new Array(end - start + 1).fill('').map((_, index) => start + index)
}

export function matrix($target, $current) {
	const target = $target.id(true)
	const current = $current.id(true)

	const cols = range(current.col, target.col)
	const rows = range(current.row, target.row)

	return cols.reduce((acc, col) => {
		rows.forEach((row) => acc.push(`${row}:${col}`))
		return acc
	}, [])
}
