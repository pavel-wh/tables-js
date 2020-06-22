import { Excel } from '@/components/excel/Excel'
import { Header } from '@/components/header/Header'
import { Toolbar } from '@/components/toolbar/Toolbar'
import { Formula } from '@/components/formula/Formula'
import { Table } from '@/components/table/Table'
import { Store } from '@core/Store'
import { rootReducer } from '../store/rootReducer'
import { storage, debounce } from '../core/utils'
import { initialState } from '../store/initialState'
import { Page } from '@core/Page'

export class ExcelPage extends Page {
	getRoot() {
		console.log(this.params)
		const store = new Store(rootReducer, initialState)

		const stateListener = debounce((state) => {
			storage('excel-state', state)
		}, 300)

		store.subscribe(stateListener)

		this.excel = new Excel({
			components: [Header, Toolbar, Formula, Table],
			store,
		})

		return this.excel.getRoot()
	}

	afterRender() {
		this.excel.init()
	}

	destroy() {
		this.excel.destroy()
	}
}
