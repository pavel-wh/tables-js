import { Excel } from '@/components/excel/Excel'
import { Header } from '@/components/header/Header'
import { Toolbar } from '@/components/toolbar/Toolbar'
import { Formula } from '@/components/formula/Formula'
import { Table } from '@/components/table/Table'
import './assets/scss/all'
import { Store } from './core/Store'
import { rootReducer } from './store/rootReducer'
import { storage, debounce } from './core/utils'
import { initialState } from './store/initialState'

const store = new Store(rootReducer, initialState)

const stateListener = debounce((state) => {
	storage('excel-state', state)
}, 300)

store.subscribe(stateListener)

const excel = new Excel('#app', {
	components: [Header, Toolbar, Formula, Table],
	store,
})

excel.render()
