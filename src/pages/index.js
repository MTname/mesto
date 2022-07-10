import '../pages/index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
    initialCards,
    validationConfig,
    imagePopupConfig,
    popupConfiguration,
    profileConfiguration,
    inputSelector, // 'popup__form-input'
    cardsContainerSelector, // 'elements'
    popupNewCardSelector, // 'popup_type_card-item'
    newCardFormName, // 'form-newCard'
    profileFormName, // 'form-profile'
    popupProfileSelector, // 'popup_type_info'
    imagePopupSelector, // 'popup_type_photo'
} from '../utils/constants.js';

//кнопки открытия попапов
const popupNewItemBtn = document.querySelector('.profile__add-button');
const popupProfileEditBtn = document.querySelector('.profile__edit-button');

/////////////////////////////////////////////////////////////////////////////////
const imagePopup = new PopupWithImage(imagePopupSelector, popupConfiguration, imagePopupConfig);
imagePopup.setEventListeners();
/*********************************************************************/
//создание готовой карточки
function createElement({ name, link }) {
    return new Card({ name, link }, '.template-item', imagePopup.open).generateElement();
}
/*********************************************************************/
//отрисовка элементов на странице
const cardsContainer = new Section({ items: initialCards.reverse(), renderer: createElement }, cardsContainerSelector);
cardsContainer.rendererItems();
/*********************************************************************/
//валидация форм
const formValidators = {};
Array.from(document.forms).forEach((formElement) => {
    formValidators[formElement.name] = new FormValidator(validationConfig, formElement);
    formValidators[formElement.name].enableValidation();
});
/*********************************************************************/
//отправка формы добавления карточки
const handleCardSubmit = (item) => cardsContainer.addItem(item);
//добавление карточки
const popupNewCard = new PopupWithForm(
    popupNewCardSelector,
    popupConfiguration,
    newCardFormName,
    inputSelector,
    formValidators[newCardFormName].cleanUpForm,
    handleCardSubmit
);
popupNewCard.setEventListeners();
//открытие попапа добавления карточки
const handlePopupNewCardOpen = () => popupNewCard.open();
popupNewItemBtn.addEventListener('click', handlePopupNewCardOpen);
/*********************************************************************/
//отображение информации о пользователе
const user = new UserInfo(profileConfiguration);
/*********************************************************************/
//отправка формы редактирования профиля
const handleProfileSubmit = (data) => user.setUserInfo(data);
//редактирование профиля
const popupProfile = new PopupWithForm(
    popupProfileSelector,
    popupConfiguration,
    profileFormName,
    inputSelector,
    formValidators[profileFormName].cleanUpForm,
    handleProfileSubmit,
    user.getUserInfo,
);
popupProfile.setEventListeners();
//открытие попапа профиля
const handlePopupProfileOpen = () => popupProfile.open();
popupProfileEditBtn.addEventListener("click", handlePopupProfileOpen);
