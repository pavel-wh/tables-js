import './assets/scss/all'

import { Router } from './routes/Router'
import { DashboardPage } from './pages/DashboardPage'
import { ExcelPage } from './pages/ExcelPage'

new Router('#app', {
	dashboard: DashboardPage,
	excel: ExcelPage,
})
