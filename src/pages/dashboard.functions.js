export function toHTML(key) {
	const id = key.split(':')[1]
	const item = JSON.parse(localStorage.getItem(key))
	const date = new Date(item.openedDate).toLocaleString('ru-RU')
	return `
    <li class="dashboard__item">
      <a href="#excel/${id}" class="dashboard__name">${item.tableTitle}</a>
      <strong class="dashboard__date">${date}</strong>
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
