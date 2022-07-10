export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

export const validationConfig = {
  inputSelector: 'popup__form-input',
  submitButtonSelector: 'popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__form-input_type_error',
  errorClass: 'popup__form-input-error_type_active',
};

export const popupConfiguration = {
  activeModifier: 'popup_active',
  closeBtnSelector: 'popup__close-button',
};

export const profileConfiguration = {
  userNameSelector: 'profile__name',
  jobSelector: 'profile__text',
};

export const imagePopupConfig = {
  imageSelector: 'popup__image',
  subtitleSelector: 'popup__subtitle',
};

export const inputSelector = 'popup__form-input';
export const cardsContainerSelector = 'elements';
export const popupNewCardSelector = 'popup_type_card-item';
export const popupProfileSelector = 'popup_type_info';
export const imagePopupSelector = 'popup_type_photo';
export const newCardFormName = 'form-newCard';
export const profileFormName = 'form-profile';
