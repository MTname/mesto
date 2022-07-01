export class Card {
  constructor({ name, link }, templateContent, openPopupFullPhoto) {
    this._name = name;
    this._link = link;
    this._templateContent = templateContent;
    this._openPopupFullPhoto = openPopupFullPhoto;
  }
  
  _getTemplate() {
    const cardTemplate = document
    .querySelector(this._templateContent)
    .content
    .querySelector('.element')
    .cloneNode(true);
    this._element = cardTemplate;
  }
  
  _handleElementLikeBtn = () => {
    this._likeBtn.classList.toggle('element__like_active');
  };
  
  _handleElementDeleteBtn = () => {
    this._element.remove();
  };
  
  _handleImageClick = () => {
    this._openPopupFullPhoto({ name: this._name, link: this._link });
  };
  
  _setEventListeners() {
    this._delBtn.addEventListener('click', this._handleElementDeleteBtn);
    this._likeBtn.addEventListener('click', this._handleElementLikeBtn);
    this._cardImage.addEventListener('click', this._handleImageClick);
  }

  _findCardComponents() {
    this._likeBtn = this._element.querySelector('.element__like');
    this._delBtn = this._element.querySelector('.element__delete');
    this._cardImage = this._element.querySelector('.element__image');
    this._cardTitle = this._element.querySelector('.element__title');
  }

  _fillClassData() {
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;
  }
  
  generateElement() {
    this._getTemplate();
    this._findCardComponents();
    this._fillClassData();
    this._setEventListeners();
    
    return this._element;
  }
}
