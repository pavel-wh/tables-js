import { Page } from '@core/Page'
import { $ } from '@core/dom'
import { createListTables } from '@/shared/dashboard.functions'

export class DashboardPage extends Page {
	getRoot() {
		const now = Date.now().toString()
		return $.create('div', 'dashboard').html(`
      <div class="dashboard__header">
        <h1 class="dashboard__title">Таблицы</h1>
      </div>
      <div class="dashboard__toolbar">
        <a class="dashboard__add" href="#excel/${now}">Новая таблица<br>+</a>
      </div>
      <div class="dashboard__container">
        ${createListTables()}
      </div>
    `)
	}
}
