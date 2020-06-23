import { Excel } from '@/components/excel/Excel'
import { Header } from '@/components/header/Header'
import { Toolbar } from '@/components/toolbar/Toolbar'
import { Formula } from '@/components/formula/Formula'
import { Table } from '@/components/table/Table'
import { Store } from '@core/Store'
import { rootReducer } from '@/store/rootReducer'
import { normalizeInitialState } from '@/store/initialState'
import { Page } from '@core/Page'
import { StateProcessor } from '@core/StateProcessor'
import { LocalStorageClient } from '@/shared/LocalStorageClient'

export class ExcelPage extends Page {
	constructor(params) {
		super(params)

		this.storeSub = null
		this.processor = new StateProcessor(new LocalStorageClient(this.params), 500)
	}

	async getRoot() {
		const state = await this.processor.get()
		const store = new Store(rootReducer, normalizeInitialState(state))

		this.storeSub = store.subscribe(this.processor.listen)

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
		this.storeSub()
	}
}
