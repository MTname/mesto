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
function openPopup(popupAny) {
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
//открытие попапа ПОЛНОГО ОТКРЫТИЯ фото
function handleImageClick({name, link}) {
  popupFullPhotoItem.src = link;
  popupFullPhotoItem.alt = name;
  popupFullPhotoSubtitle.textContent = name;
  openPopup(popupFullPhoto);
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
  elementPhoto.addEventListener('click', () => handleImageClick({name, link}));  
  return element;
}
/*********************************************************************/
//размещение карточки (из массива данных / и новой) в контейнер для карточек
function renderElement(elementItem) {
  elementsContainer.prepend(createElement(elementItem));
}
/*********************************************************************/
//создание карточек по шаблону из массива данных
initialCards.reverse().forEach(function(item) {
  renderElement(item);
});
/*********************************************************************/
//отправка формы добавления карточки пользователя
function handleNewItemSubmit(evt) {
  evt.preventDefault();
  renderElement({name: popupNewItemTitleInput.value, link: popupNewItemSrcInput.value});
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

/////////////////////////////////////////////////////////////////////////////////
//слушатель ОТКРЫТИЯ попапа добавления карточки пользователя
popupNewItemBtn.addEventListener('click', function() {
  popupNewItemForm.reset();
  cleanUpForm(popupNewItemForm, config);
  openPopup(popupNewItem);
});
//слушатель ЗАКРЫТИЯ попапа добавления карточки пользователя
popupNewItemCloseBtn.addEventListener ('click', function() {
  closePopup(popupNewItem);
});
//слушатель добавления карточки пользователя
popupNewItemForm.addEventListener('submit', handleNewItemSubmit);
/*********************************************************************/
//слушатель ЗАКРЫТИЯ попапа ПОЛНОГО ОТКРЫТИЯ фото
popupFullPhotoCloseBtn.addEventListener('click', function() {
  closePopup(popupFullPhoto);
});
/*********************************************************************/
//слушатель открытия попапа редактирования профиля
popupProfileEditBtn.addEventListener('click', function() {
  popupProfileNameInput.value = profileName.textContent;
  popupProfileAboutTextInput.value = profileAboutText.textContent;
  cleanUpForm(popupProfileForm, config);
  openPopup(popupProfile);
});
// слушатель закрытия попапа редактирования профиля
popupProfileCloseBtn.addEventListener('click', function() {
  closePopup(popupProfile);
});
//слушатель редактирования профиля
popupProfileForm.addEventListener('submit', handleProfileSubmit);
