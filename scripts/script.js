const initialCards = [
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

/////////////////////////////////////////////////////////////////////////////////
//контейнер для карточек и их шаблон
const elementsContainer = document.querySelector('.elements');
const templateContent = document.querySelector('.template-item').content;
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
//обработчик лайка
function handleElementLikeBtn(evt) {
  evt.target.classList.toggle('element__like_active');
}
/*********************************************************************/
//обработчик кнопки удаления карточки
function handleElementDeleteBtn(evt) {
  evt.target.closest('.element').remove();
}
/*********************************************************************/
//создание карточки по шаблону
function createElement({name, link}) {
  const element = templateContent.querySelector('.element').cloneNode(true);
  const elementPhoto = element.querySelector('.element__image');
  const elementTitle = element.querySelector('.element__title');
  const elementDeleteBtn = element.querySelector('.element__delete');
  const elementLikeBtn = element.querySelector('.element__like');
  elementTitle.textContent = name;
  elementPhoto.src = link;
  elementPhoto.alt = name;
  elementDeleteBtn.addEventListener('click', handleElementDeleteBtn);
  elementLikeBtn.addEventListener('click', handleElementLikeBtn);
  elementPhoto.addEventListener('click', () => expandPhotoHandler({name, link}));
  return element;
}
/*********************************************************************/
//создание карточек по шаблону из массива данных
initialCards.reverse().forEach(function(item) {
  renderElement(item);
});
/*********************************************************************/
//размещение карточки (из массива данных / и новой) в контейнер для карточек
function renderElement(elementItem) {
  elementsContainer.prepend(createElement(elementItem));
}
/*********************************************************************/
//отправка формы добавления карточки пользователя
function submitPopupNewItemFormHandler(evt) {
  evt.preventDefault();
  renderElement({name: popupNewItemTitleInput.value, link: popupNewItemSrcInput.value});
  popupClose(popupNewItem);
  popupNewItemForm.reset(); /*или evt.target.reset();*/
}
/*********************************************************************/
//открытие попапа ПОЛНОГО ОТКРЫТИЯ фото
function expandPhotoHandler({name, link}) {
  popupOpen(popupFullPhoto);
  popupFullPhotoItem.src = link;
  popupFullPhotoItem.alt = name;
  popupFullPhotoSubtitle.textContent = name;
}
/*********************************************************************/
//отправка формы редактирования профиля
function submitPopupProfileFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileNameInput.value;
  profileAboutText.textContent = popupProfileAboutTextInput.value;
  popupClose(popupProfile);
}
/*********************************************************************/
//открытие и закрытие любого попапа
function popupOpen(popupAny) {
  popupAny.classList.add('popup_active');
  document.addEventListener('keydown', popupAnyCloseEsc);
}
function popupClose(popupAny) {
  popupAny.classList.remove('popup_active');
  if (popupAny.classList.contains('popup_type_card-item')) {
    popupNewItemForm.reset();
  }
  popupRemoveErrors(popupAny);
}
//закрытиt любого попапа клавишей ESC
function popupAnyCloseEsc (event) {
  popupAnyArray.forEach(function (popupAnyEsc) {
    if (event.key === 'Escape') {
      popupClose(popupAnyEsc);
    }
  });
}
//закрытиt любого попапа при клике на оверлей
popupAnyArray.forEach(function (popupAny) {
  popupAny.addEventListener('click', function (event) {
    popupClose(event.target); /*event.target.reset();/*!*/
  });
});
//сброс данных и блокировка кнопки любого попапа при закрытии без сабмита
function popupRemoveErrors(popup) {
  const inputArray = Array.from(popup.querySelectorAll('.popup__form-input'));
  inputArray.forEach(function (input) {
    input.classList.remove('popup__form-input_type_error');
    const errorElement = popup.querySelector(`.${input.id}-error`);
    errorElement.classList.remove('popup__form-input-error_type_active');
  });
  const submitButton = popup.querySelector('.popup__save-button');
  submitButton.setAttribute('disabled', true);
  submitButton.classList.add('popup__save-button_disabled');
}

/////////////////////////////////////////////////////////////////////////////////
//слушатель ОТКРЫТИЯ попапа добавления карточки пользователя
popupNewItemBtn.addEventListener('click', function() {
  popupOpen(popupNewItem);
});
//слушатель ЗАКРЫТИЯ попапа добавления карточки пользователя
popupNewItemCloseBtn.addEventListener ('click', function() {
  popupClose(popupNewItem);
});
//слушатель добавления карточки пользователя
popupNewItemForm.addEventListener('submit', submitPopupNewItemFormHandler);
/*********************************************************************/
//слушатель ЗАКРЫТИЯ попапа ПОЛНОГО ОТКРЫТИЯ фото
popupFullPhotoCloseBtn.addEventListener('click', function() {
  popupClose(popupFullPhoto);
});
/*********************************************************************/
//слушатель открытия попапа редактирования профиля
popupProfileEditBtn.addEventListener('click', function() {
  popupOpen(popupProfile);
  popupProfileNameInput.value = profileName.textContent;
  popupProfileAboutTextInput.value = profileAboutText.textContent;
});
// слушатель закрытия попапа редактирования профиля
popupProfileCloseBtn.addEventListener('click', function() {
  popupClose(popupProfile);
});
//слушатель редактирования профиля
popupProfileForm.addEventListener('submit', submitPopupProfileFormHandler);
