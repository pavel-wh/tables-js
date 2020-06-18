function toButton(button) {
	const meta = `
    data-type='button'
    data-value='${JSON.stringify(button.value)}'
  `
	return `
    <button
      class="excel__button ${button.active ? 'excel__button_active' : ''}"
      ${meta}
    >
      <i class="material-icons" ${meta}>${button.icon}</i>
    </button>
  `
}
export function createToolbar() {
	const buttons = [
		{
			icon: 'format_align_left',
			active: true,
			value: {
				textAlign: 'left',
			},
		},
		{
			icon: 'format_align_center',
			active: false,
			value: {
				textAlign: 'center',
			},
		},
		{
			icon: 'format_align_right',
			active: false,
			value: {
				textAlign: 'right',
			},
		},
		{
			icon: 'format_bold',
			active: false,
			value: {
				fontWeight: 'bold',
			},
		},
		{
			icon: 'format_italic',
			active: false,
			value: {
				fontStyle: 'italic',
			},
		},
		{
			icon: 'format_underline',
			active: false,
			value: {
				textDecoration: 'underline',
			},
		},
	]
	return buttons.map(toButton).join('')
}
