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
const elementsContainer = document.querySelector('.elements');/**/
const templateContent = document.querySelector('.template-item').content;/**/
/*********************************************************************/
//попап создания новой карточки и кнопка его открытия
const popupNewItemBtn = document.querySelector('.profile__add-button');/**/
const popupNewItem = document.querySelector('.popup_type_card-item');/**/
const popupNewItemCloseBtn = popupNewItem.querySelector('.popup__close-button');/**/
const popupNewItemForm = popupNewItem.querySelector('.popup__form');/**/
const popupNewItemTitleInput = popupNewItemForm.querySelector('.popup__form-input_value_name');/**/
const popupNewItemSrcInput = popupNewItemForm.querySelector('.popup__form-input_value_text');/**/
/*********************************************************************/
//попап полного открытия фото и кнопка его закрытия
const popupFullPhoto = document.querySelector('.popup_type_photo');/**/
const popupFullPhotoCloseBtn = popupFullPhoto.querySelector('.popup__close-button');/**/
const popupFullPhotoItem = popupFullPhoto.querySelector('.popup__image');/**/
const popupFullPhotoSubtitle = popupFullPhoto.querySelector('.popup__subtitle');/**/
/*********************************************************************/
//ЛЮБОЙ попап (для общей функции)
const popupAny = document.querySelector('.popup');/**/
/*********************************************************************/
//попап редактирования профиля и кнопка его открытия
const popupProfile = document.querySelector('.popup_type_info');/**/
const popupProfileForm = document.querySelector('.popup__box');/**/
const popupProfileNameInput = popupProfileForm.querySelector('.popup__form-input_value_name');/**/
const popupProfileAboutTextInput = popupProfileForm.querySelector('.popup__form-input_value_text');/**/
const popupProfileCloseBtn = popupProfile.querySelector('.popup__close-button');/**/
const popupProfileEditBtn = document.querySelector('.profile__edit-button');/**/
const profileName = document.querySelector('.profile__name');/*!*/
const profileAboutText = document.querySelector('.profile__text');/*!*/

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
function createElement({name, link}) {/*или: (item)*/
  const element = templateContent.querySelector('.element').cloneNode(true);
  const elementPhoto = element.querySelector('.element__image');
  const elementTitle = element.querySelector('.element__title');
  const elementDeleteBtn = element.querySelector('.element__delete');
  const elementLikeBtn = element.querySelector('.element__like');
  elementTitle.textContent = name;/*elementTitle.textContent = item.name;*/
  elementPhoto.src = link;/*elementPhoto.src = item.link;*/
  elementPhoto.alt = name;/*elementPhoto.alt = item.name;*/
  elementDeleteBtn.addEventListener('click', handleElementDeleteBtn);
  elementLikeBtn.addEventListener('click', handleElementLikeBtn);
  elementPhoto.addEventListener('click', () => expandPhotoHandler({name, link}));
  /*или: elementPhoto.addEventListener('click', expandPhotoHandler);*/
  return element;
}
/*********************************************************************/
//создание карточек по шаблону из массива данных
initialCards.forEach(function(item) {
  const elementItem = createElement(item);
  renderElement(elementItem);
  /*или: renderElement(createElement(item));*/
});
/*********************************************************************/
//размещение карточки пользователя в начало контейнера для карточек
function addUserElement(newUserElement) {
  elementsContainer.prepend(newUserElement);
}
/*********************************************************************/
//размещение карточки из массива данных в контейнер для карточек
function renderElement(arrayElement) {
  elementsContainer.append(arrayElement);
}
/*********************************************************************/
//отправка формы добавления карточки пользователя
function submitPopupNewItemFormHandler(evt) {
    evt.preventDefault();
    const newElementItem = createElement({name: popupNewItemTitleInput.value, link: popupNewItemSrcInput.value});
    addUserElement(newElementItem);
    //или: addUserElement(createElement({name: popupNewItemTitleInput.value, link: popupNewItemSrcInput.value}));
    popupClose(popupNewItem);
    popupNewItemForm.reset();
}
/*********************************************************************/
//открытие попапа ПОЛНОГО ОТКРЫТИЯ фото и внесения данных
function expandPhotoHandler({name, link}) {
  popupOpen(popupFullPhoto);
  popupFullPhotoItem.src = link;
  popupFullPhotoItem.alt = name;
  popupFullPhotoSubtitle.textContent = name;
}
/*или:
function expandPhotoHandler(evt) {
  popupOpen(popupFullPhoto);
  popupFullPhotoItem.src = evt.target.src;
  popupFullPhotoItem.alt = evt.target.alt;
  popupFullPhotoSubtitle.textContent = evt.target.alt;
}*/
/*********************************************************************/
//отправка формы редактирования профиля
function submitPopupProfileFormHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popupProfileNameInput.value;
  profileAboutText.textContent = popupProfileAboutTextInput.value;
  popupClose(popupProfile);
}
/*********************************************************************/
//ОБЩИЕ функции открытия и закрытия ЛЮБОГО попапа
function popupOpen(popupAny) {
  popupAny.classList.add('popup_active');
}
function popupClose(popupAny) {
  popupAny.classList.remove('popup_active');
}

/////////////////////////////////////////////////////////////////////////////////
//слушатель вызова функции ОТКРЫТИЯ попапа добавления карточки пользователя
popupNewItemBtn.addEventListener('click', function() {
  popupOpen(popupNewItem);
});
//слушатель вызова функции ЗАКРЫТИЯ попапа добавления карточки пользователя
popupNewItemCloseBtn.addEventListener ('click', function() {
  popupClose(popupNewItem);
});
//слушатель вызова функции добавления карточки пользователя
popupNewItemForm.addEventListener('submit', submitPopupNewItemFormHandler);
/*********************************************************************/
//слушатель вызова функции ЗАКРЫТИЯ попапа ПОЛНОГО ОТКРЫТИЯ фото
popupFullPhotoCloseBtn.addEventListener('click', function() {
  popupClose(popupFullPhoto);
});
/*********************************************************************/
//слушатель вызова функции открытия попапа редактирования профиля
popupProfileEditBtn.addEventListener('click', function() {
  popupOpen(popupProfile);
  popupProfileNameInput.value = profileName.textContent;
  popupProfileAboutTextInput.value = profileAboutText.textContent;
});
// слушатель вызова функции закрытия попапа редактирования профиля
popupProfileCloseBtn.addEventListener('click', function() {
  popupClose(popupProfile);
});
//слушатель вызова функции редактирования профиля
popupProfileForm.addEventListener('submit', submitPopupProfileFormHandler);
