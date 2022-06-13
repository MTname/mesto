import { Card } from './Card.js';
import { initialCards, validationConfig } from './constants.js';
import FormValidator from './FormValidator.js';

/////////////////////////////////////////////////////////////////////////////////
//контейнер для карточек и их шаблон
const elementsContainer = document.querySelector('.elements');
const templateContent = document.querySelector('.template-item').content;/**/
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
export const popupFullPhoto = document.querySelector('.popup_type_photo');
const popupFullPhotoCloseBtn = popupFullPhoto.querySelector('.popup__close-button');
const popupFullPhotoItem = popupFullPhoto.querySelector('.popup__image');
const popupFullPhotoSubtitle = popupFullPhoto.querySelector('.popup__subtitle');
/*********************************************************************/
//любой попап (для общей функции) и их общий массив
/*const popupAny = document.querySelector('.popup');*/
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
    }));
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
//размещение карточки (из массива данных / и новой) в контейнер для карточек
function renderElement(card) {
  elementsContainer.prepend(card);
}
/*********************************************************************/
//создание карточек по шаблону из массива данных
initialCards.reverse().forEach(function(item) {
  const card = new Card(item.name, item.link, '.template-item');
  const cardElement = card.createElement();
  renderElement(cardElement);
});
/*********************************************************************/
//отправка формы добавления карточки пользователя
function handleNewItemSubmit(evt) {
  const card = new Card(popupNewItemTitleInput.value, popupNewItemSrcInput.value, '.template-item');
  const cardElement = card.createElement();
  evt.preventDefault();
  renderElement(cardElement);
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
const FormValidators = {};
Array.from(document.forms).forEach((formElement) => {
  FormValidators[formElement.name] = new FormValidator(validationConfig, formElement);
  FormValidators[formElement.name].enableValidation();
});

/////////////////////////////////////////////////////////////////////////////////
//слушатель ОТКРЫТИЯ попапа добавления карточки пользователя
popupNewItemBtn.addEventListener('click', function() {
  popupNewItemForm.reset();
  FormValidators[popupNewItemForm.name].cleanUpForm();
  openPopup(popupNewItem);
});
//слушатель ЗАКРЫТИЯ попапа добавления карточки пользователя
popupNewItemCloseBtn.addEventListener ('click', function() {
  closePopup(popupNewItem);
});
//слушатель добавления карточки пользователя
popupNewItemForm.addEventListener('submit', handleNewItemSubmit);
/*********************************************************************/
//слушатель закрытия попапа расширенного фото
popupFullPhotoCloseBtn.addEventListener('click', function() {
  closePopup(popupFullPhoto);
});
/*********************************************************************/
//слушатель открытия попапа редактирования профиля
popupProfileEditBtn.addEventListener('click', function() {
  popupProfileNameInput.value = profileName.textContent;
  popupProfileAboutTextInput.value = profileAboutText.textContent;
  FormValidators[popupProfileForm.name].cleanUpForm();
  openPopup(popupProfile);
});
// слушатель закрытия попапа редактирования профиля
popupProfileCloseBtn.addEventListener('click', function() {
  closePopup(popupProfile);
});
//слушатель редактирования профиля
popupProfileForm.addEventListener('submit', handleProfileSubmit);
