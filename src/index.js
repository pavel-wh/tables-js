import { Excel } from '@/components/excel/Excel'
import { Header } from '@/components/header/Header'
import { Toolbar } from '@/components/toolbar/Toolbar'
import { Formula } from '@/components/formula/Formula'
import { Table } from '@/components/table/Table'
import './assets/scss/all'
import { Store } from './core/Store'
import { rootReducer } from './store/rootReducer'
import { storage } from './core/utils'
import { initialState } from './store/initialState'

const store = new Store(rootReducer, initialState)

store.subscribe((state) => {
	storage('excel-state', state)
})

const excel = new Excel('#app', {
	components: [Header, Toolbar, Formula, Table],
	store,
})
excel.render()
