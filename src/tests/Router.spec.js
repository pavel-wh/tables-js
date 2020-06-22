import { Router } from '@/routes/Router'
import { Page } from '@core/Page'

class DashboardPage extends Page {
	getRoot() {
		const root = document.createElement('div')
		root.innerHTML = 'dashboard'
		return root
	}
}

class ExcelPage extends Page {
	getRoot() {
		const root = document.createElement('div')
		root.innerHTML = 'excel'
		return root
	}
}

describe('Test class Router', () => {
	let router
	let $root

	beforeEach(() => {
		$root = document.createElement('div')
		router = new Router($root, {
			dashboard: DashboardPage,
			excel: ExcelPage,
		})
	})

	test('should be defined', () => {
		expect(router).toBeDefined()
	})

	test('should render Dashboard page', () => {
		router.changePageHandler()
		expect($root.innerHTML).toBe('<div>dashboard</div>')
	})

	test('should render Excel page', () => {
		window.location.hash = 'excel'
		router.changePageHandler()
		expect($root.innerHTML).toBe('<div>excel</div>')
	})
})
