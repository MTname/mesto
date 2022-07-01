import { Card } from './Card.js';
import { initialCards, validationConfig } from './constants.js';
import FormValidator from './FormValidator.js';

/////////////////////////////////////////////////////////////////////////////////
//контейнер для карточек и их шаблон
const elementsContainer = document.querySelector('.elements');
/*********************************************************************/
//попап создания новой карточки и кнопка его открытия
const popupNewItemBtn = document.querySelector('.profile__add-button');
const popupNewItem = document.querySelector('.popup_type_card-item');
const popupNewItemCloseBtn = popupNewItem.querySelector('.popup__close-button');
const popupNewItemForm = popupNewItem.querySelector('.popup__form');
const popupNewItemTitleInput = popupNewItemForm.querySelector('.popup__form-input_value_name');
const popupNewItemSrcInput = popupNewItemForm.querySelector('.popup__form-input_value_text');
/*********************************************************************/
//попап полного открытия фото и кнопка его закрытия
const popupFullPhoto = document.querySelector('.popup_type_photo');
const popupFullPhotoCloseBtn = popupFullPhoto.querySelector('.popup__close-button');
/*********************************************************************/
//массив всех попапов
const popupAnyArray = Array.from(document.querySelectorAll('.popup'));
/*********************************************************************/
//попап редактирования профиля и кнопка его открытия
const popupProfile = document.querySelector('.popup_type_info');
const popupProfileForm = document.querySelector('.popup__form');/**/
const popupProfileNameInput = popupProfileForm.querySelector('.popup__form-input_value_name');
const popupProfileAboutTextInput = popupProfileForm.querySelector('.popup__form-input_value_text');
const popupProfileCloseBtn = popupProfile.querySelector('.popup__close-button');
const popupProfileEditBtn = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileAboutText = document.querySelector('.profile__text');

/////////////////////////////////////////////////////////////////////////////////
//закрытие любого попапа клавишей ESC
function handleEscClose(event) {
  if (event.key === 'Escape') {
    closePopup(popupAnyArray.find(function (popup) {
      return popup.classList.contains('popup_active');
    }));//const popupActive = document.querySelector('.popup_active');
  }
}
/*********************************************************************/
//закрытие любого попапа при клике на оверлей
function handleOverlayClose(event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
}
/*********************************************************************/
//открытие и закрытие любого попапа
export function openPopup(popupAny) {
  document.addEventListener('keydown', handleEscClose);
  popupAny.addEventListener('click', handleOverlayClose);
  popupAny.classList.add('popup_active');
}
function closePopup(popupAny) {
  popupAny.classList.remove('popup_active');
  document.removeEventListener('keydown', handleEscClose);
  popupAny.removeEventListener('click', handleOverlayClose);
}
/*********************************************************************/
//открытие попапа с фото
function openPopupFullPhoto({ name, link }) {
  popupFullPhoto.querySelector('.popup__image').src = link;
  popupFullPhoto.querySelector('.popup__image').alt = name;
  popupFullPhoto.querySelector('.popup__subtitle').textContent = name;
  openPopup(popupFullPhoto);
}
/*********************************************************************/
//размещение карточки (из массива данных / и новой) в контейнер для карточек
function renderElement(card) {
  elementsContainer.prepend(card);
}
/*********************************************************************/
//создание экземпляра класса Card
function createElement ({ name, link }) {
  /*const card = new Card(name, link, '.template-item');
  const cardElement = card.generateElement();
  return cardElement;*/
  return new Card({ name, link }, '.template-item', openPopupFullPhoto).generateElement();
}
/*********************************************************************/
//создание карточек по шаблону из массива данных
initialCards.reverse().forEach(function(item) {
  renderElement(createElement(item));
});
/*********************************************************************/
//отправка формы добавления карточки пользователя
function handleNewItemSubmit(evt) {
  evt.preventDefault();
  renderElement(createElement({ name: popupNewItemTitleInput.value, link: popupNewItemSrcInput.value }));
  closePopup(popupNewItem);
}
/*********************************************************************/
//отправка формы редактирования профиля
function handleProfileSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileNameInput.value;
  profileAboutText.textContent = popupProfileAboutTextInput.value;
  closePopup(popupProfile);
}
/*********************************************************************/
//валидация форм
const formValidators = {};
Array.from(document.forms).forEach((formElement) => {
  formValidators[formElement.name] = new FormValidator(validationConfig, formElement);
  formValidators[formElement.name].enableValidation();
});

/////////////////////////////////////////////////////////////////////////////////
//слушатель открытия попапа редактирования профиля
popupProfileEditBtn.addEventListener('click', function() {
  popupProfileNameInput.value = profileName.textContent;
  popupProfileAboutTextInput.value = profileAboutText.textContent;
  formValidators[popupProfileForm.name].cleanUpForm();
  openPopup(popupProfile);
});
// слушатель закрытия попапа редактирования профиля
popupProfileCloseBtn.addEventListener('click', function() {
  closePopup(popupProfile);
});
//слушатель редактирования профиля
popupProfileForm.addEventListener('submit', handleProfileSubmit);
/*********************************************************************/
//слушатель закрытия попапа расширенного фото
popupFullPhotoCloseBtn.addEventListener('click', function() {
  closePopup(popupFullPhoto);
});
/*********************************************************************/
//слушатель ОТКРЫТИЯ попапа добавления карточки пользователя
popupNewItemBtn.addEventListener('click', function() {
  popupNewItemForm.reset();
  formValidators[popupNewItemForm.name].cleanUpForm();
  openPopup(popupNewItem);
});
//слушатель ЗАКРЫТИЯ попапа добавления карточки пользователя
popupNewItemCloseBtn.addEventListener ('click', function() {
  closePopup(popupNewItem);
});
//слушатель добавления карточки пользователя
popupNewItemForm.addEventListener('submit', handleNewItemSubmit);
