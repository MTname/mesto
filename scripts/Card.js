import { openPopup, popupFullPhoto } from './index.js';

export class Card {
  constructor(name, link, templateContent) {
    this._name = name;
    this._link = link;
    this._templateContent = templateContent;
  }
  
  _getTemplate() {
    return document
    .querySelector(this._templateContent)
    .content
    .querySelector('.element')
    .cloneNode(true);
  }
  
  _handleElementLikeBtn() {
    this._element.querySelector('.element__like').classList.toggle('element__like_active');
  }
  
  _handleElementDeleteBtn() {
    this._element.remove(); // this._element.querySelector('.element__delete').closest('.element').remove();
  }
  
  _handleImageClick() {
    popupFullPhoto.querySelector('.popup__image').src = this._link;
    popupFullPhoto.querySelector('.popup__image').alt = this._name;
    popupFullPhoto.querySelector('.popup__subtitle').textContent = this._name;
    openPopup(popupFullPhoto);
  }
  
  _setEventListeners() {
    this._element.querySelector('.element__delete').addEventListener('click', () => this._handleElementDeleteBtn());
    this._element.querySelector('.element__like').addEventListener('click', () => this._handleElementLikeBtn());
    this._element.querySelector('.element__image').addEventListener('click', () => this._handleImageClick());
    
    /*this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleElementDeleteBtn();
    });
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._handleElementLikeBtn();
    });
    this._element.querySelector('.element__image').addEventListener('click', () => {
      this._handleImageClick();
    });*/
  }
  
  createElement() {
    this._element = this._getTemplate();
    this._setEventListeners();
    
    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__image').src = this._link;
    this._element.querySelector('.element__image').alt = this._name;
    
    return this._element;
  }
}
