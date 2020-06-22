import { Store } from '../core/Store'

describe('TEST', () => {
	test('test', () => {
		const store = new Store(() => {}, {})
		expect(store).toBeDefined()
	})
})
