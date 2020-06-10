export class TableSelection {
	static className = 'excel__cell_selected'

	constructor() {
		this.group = []
		this.current = null
	}
	// $el instanceof DOM === true
	select($el) {
		this.clear()
		this.group.push($el)
		this.current = $el
		$el.addClass(TableSelection.className)
	}

	clear() {
		this.group.forEach(($el) => $el.removeClass(TableSelection.className))
		this.group = []
	}

	selectGroup($cells = []) {
		this.clear()
		$cells.forEach(($el) => {
			this.group.push($el)
			$el.addClass(TableSelection.className)
		})
	}
}
