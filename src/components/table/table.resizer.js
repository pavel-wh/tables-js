import { $ } from '@core/dom'

export function toResize(event, $root) {
	return new Promise((resolve) => {
		const $resizer = $(event.target)
		const $parent = $resizer.closest('[data-type="resizable"')
		const coords = $parent.getCoords()
		const type = $resizer.dataset.resize
		const sideProp = type === 'col' ? 'height' : 'width'
		const sideParam = type === 'col' ? 'scrollHeight' : 'scrollWidth'
		let value

		$resizer.css({
			opacity: 1,
			[sideProp]: $root.params[`${[sideParam]}`] + 'px',
		})

		if (type === 'col') {
			document.onmousemove = (e) => {
				const delta = e.pageX - coords.right
				value = coords.width + delta
				$resizer.css({
					right: -delta + 'px',
				})
			}
		} else {
			document.onmousemove = (e) => {
				const delta = e.pageY - coords.bottom
				value = coords.height + delta
				$resizer.css({
					bottom: -delta + 'px',
				})
			}
		}

		document.onmouseup = () => {
			document.onmousemove = null
			document.onmouseup = null
			if ($parent.params.dataset.col) {
				if (value < 40) {
					$parent.css({
						width: '40px',
					})
					$root
						.findAll(`[data-col="${$parent.dataset.col}"]`)
						.forEach((el) => (el.style.width = '40px'))
				} else {
					$parent.css({
						width: value + 'px',
					})
					$root
						.findAll(`[data-col="${$parent.dataset.col}"]`)
						.forEach((el) => (el.style.width = value + 'px'))
				}
			} else {
				if (value < 24) {
					$parent.css({
						height: '24px',
					})
				} else {
					$parent.css({
						height: value + 'px',
					})
				}
			}

			resolve({
				type,
				value,
				id: $parent.dataset[type],
			})

			$resizer.deleteAttribute('style')
		}
	})
}
