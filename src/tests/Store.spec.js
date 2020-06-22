import { Store } from '../core/Store'

const initialState = {
	count: 0,
}

const reducer = (state = initialState, action) => {
	if (action.type === 'ADD') {
		return { ...state, count: state.count + 1 }
	}
	return state
}

describe('Test class Store', () => {
	let store
	let handler

	beforeEach(() => {
		store = new Store(reducer, initialState)
		handler = jest.fn()
	})

	test('should return store object', () => {
		expect(store).toBeDefined()
		expect(store.notify).toBeDefined()
		expect(store.subscribe).toBeDefined()
		expect(store.getState).not.toBeUndefined()
	})

	test('should return object as a state', () => {
		expect(store.getState()).toBeInstanceOf(Object)
	})

	test('should return default state', () => {
		expect(store.getState()).toEqual(initialState)
	})

	test('should change state if action exists', () => {
		store.notify({ type: 'ADD' })
		expect(store.getState().count).toBe(1)
	})

	test('should NOT change state if action do not exists', () => {
		store.notify({ type: 'NOT_EXISTING_ACTION' })
		expect(store.getState().count).toBe(0)
	})

	test('should call subscriber function', () => {
		store.subscribe(handler)

		store.notify({ type: 'ADD' })

		expect(handler).toHaveBeenCalled()
		expect(handler).toHaveBeenCalledWith(store.getState())
	})

	test('shhould NOT call sub if unsubscribe', () => {
		const unsub = store.subscribe(handler)

		unsub()

		store.notify({ type: 'ADD' })

		expect(handler).not.toHaveBeenCalled()
	})

	test('should dispatch in async way', () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				store.notify({ type: 'ADD' })
			}, 500)
			setTimeout(() => {
				expect(store.getState().count).toBe(1)
				resolve()
			}, 1000)
		})
	})
})
