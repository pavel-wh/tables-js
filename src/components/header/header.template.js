export function createHeader(tableTitle) {
	return `
    <input
      type="text"
      id="table-name"
      class="excel__input"
      value="${tableTitle}"
      min="1"
    >
    <div class="excel__container">
      <button class="excel__button excel__button_danger" data-button="remove">
        <i class="material-icons" data-button="remove">delete</i>
      </button>
      <button class="excel__button" data-button="exit">
        <i class="material-icons" data-button="exit">exit_to_app</i>
      </button>
    </div>
  `
}
