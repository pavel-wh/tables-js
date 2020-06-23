import { $ } from '@core/dom'

export function Loader() {
	return $.create('div', 'loader').html(
		`
      <div class="loader__ripple">
        <div class="loader__item"></div>
        <div class="loader__item"></div>
      </div>
    `
	)
}
