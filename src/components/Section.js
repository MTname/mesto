export default class Section { // Отрисовка элементов на странице
    constructor({ items, renderer }, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector; // 'elements';
        this._container = document.querySelector(`.${this._containerSelector}`);
    }
    
    //принимает DOM-элемент и добавляет его в контейнер
    addItem(item) {
        this._container.prepend(this._renderer(item));
    }
    
    //отрисовка всех элементов
    rendererItems() {
        this._items.forEach((item) => this.addItem(item));
    }
}
