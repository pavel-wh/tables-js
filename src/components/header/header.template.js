export function createHeader(tableTitle) {
	return `
    <input
      type="text"
      id="table-name"
      class="excel__input"
      value="${tableTitle}"
    >
    <div class="excel__container">
      <button class="excel__button">
        <i class="material-icons">delete</i>
      </button>
      <button class="excel__button">
        <i class="material-icons">exit_to_app</i>
      </button>
    </div>
  `
}
