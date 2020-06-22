export function toHTML() {
	return `
    <li class="dashboard__item">
      <a href="#" class="dashboard__name">Имя</a>
      <strong class="dashboard__date">20.06.2020</strong>
    </li>
  `
}

export function getAllKeys() {
	const keys = []
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i)
		if (!key.includes('excel')) {
			continue
		}
		keys.push(key)
	}
	return keys
}

export function createListTables() {
	const keys = getAllKeys()

	console.log(keys)
	if (!keys.length) {
		return `<ul class="dashboard__list"><li><p>Вы не создали ни одной таблицы...</p></li></ul>`
	}
	return `
    <div class="dashboard__description">
      <span>Имя</span>
      <span>Дата открытия</span>
    </div>
    <ul class="dashboard__list">
      ${keys.map(toHTML).join('')}
    </ul>
  `
}
