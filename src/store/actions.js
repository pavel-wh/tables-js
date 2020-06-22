import {
	CHANGE_TITLE,
	TABLE_RESIZE,
	CHANGE_TEXT,
	CHANGE_STYLES,
	APPLY_STYLE,
	UPDATE_DATE,
} from './types'

// Action creator
export function tableResize(data) {
	return {
		type: TABLE_RESIZE,
		data,
	}
}

export function changeText(data) {
	return {
		type: CHANGE_TEXT,
		data,
	}
}

export function changeStyles(data) {
	return {
		type: CHANGE_STYLES,
		data,
	}
}

export function setStyle(data) {
	return {
		type: APPLY_STYLE,
		data,
	}
}

export function changeTitle(title) {
	return {
		type: CHANGE_TITLE,
		title,
	}
}

export function updateDate() {
	return {
		type: UPDATE_DATE,
	}
}
