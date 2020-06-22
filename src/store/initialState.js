import { defaultStyles, defaultTitle } from '@core/constants'
import { clone } from '@core/utils'

const defaultState = {
	tableTitle: defaultTitle,
	rowState: {},
	colState: {},
	dataState: {},
	stylesState: {},
	currentText: '',
	currentStyles: defaultStyles,
	openedDate: new Date().toJSON(),
}

const normalize = (state) => ({
	...state,
	currentStyles: defaultStyles,
	currentText: '',
})

export function normalizeInitialState(state) {
	return state ? normalize(state) : clone(defaultState)
}
