import { Page } from '@core/Page'
import { $ } from '@/core/dom'

export class DashboardPage extends Page {
	getRoot() {
		return $.create('div', 'dashboard').html(`
      <div class="dashboard__header">
        <h1 class="dashboard__title">Excel Dashboard</h1>
      </div>
      <div class="dashboard__toolbar">
        <button class="dashboard__add">New Table<br>+</button>
      </div>
      <div class="dashboard__container">
        <div class="dashboard__description">
          <span>Name</span>
          <span>Date open</span>
        </div>
        <ul class="dashboard__list">
          <li class="dashboard__item">
            <a href="#" class="dashboard__name">Table name</a>
            <strong class="dashboard__date">20.06.2020</strong>
          </li>
        </ul>
      </div>
    `)
	}
}
