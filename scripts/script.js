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

const elements = document.querySelector('.elements');
const templateContent = document.querySelector('.template-item').content;

const LikeBtnHandler = (evt) => {
  evt.target.classList.toggle('element__like_active');
};

const DeleteBtnHandler = (evt) => {
  evt.target.closest('.element').remove();
};


/////////////////////////////////////////////////////////////////////////////////
const addElement = () => {
  const element = templateContent.querySelector('.element').cloneNode(true);
  const elementPhoto = element.querySelector('.element__image');
  const elementTitle = element.querySelector('.element__title');
  const DeleteElementBtn = element.querySelector('.element__delete');
  const likeElementBtn = element.querySelector('.element__like');
  elementTitle.textContent = addItemPopupTitleInput.value;
  elementPhoto.alt = addItemPopupTitleInput.value;
  elementPhoto.src = addItemPopupSrcInput.value;
  DeleteElementBtn.addEventListener('click', DeleteBtnHandler);
  likeElementBtn.addEventListener('click', LikeBtnHandler);
  elementPhoto.addEventListener('click', expandPhotoHandler);
  elements.prepend(element);
};


/////////////////////////////////////////////////////////////////////////////////
const addItemBtn = document.querySelector('.profile__add-button');
const addItemPopup = document.querySelector('.popup_type_card-item');
const addItemPopupCloseBtn = addItemPopup.querySelector('.popup__close-button');
const addItemPopupForm = addItemPopup.querySelector('.popup__form');
const addItemPopupTitleInput = addItemPopupForm.querySelector('.popup__form-input_value_name');
const addItemPopupSrcInput = addItemPopupForm.querySelector('.popup__form-input_value_text');

addItemBtn.addEventListener('click', function() {
  addItemPopup.classList.add('popup_active');
});

function closeAddItemPopup() {
  addItemPopup.classList.remove('popup_active');
}

addItemPopupCloseBtn.addEventListener ('click', closeAddItemPopup);


function submitAddItemPopupFormHandler (evt) {
    evt.preventDefault();
    addElement();
    closeAddItemPopup();
    addItemPopupForm.reset();
}

addItemPopupForm.addEventListener('submit', submitAddItemPopupFormHandler);


/////////////////////////////////////////////////////////////////////////////////
const fullPhoto = document.querySelector('.popup_type_photo');
const closePhotoBtn = fullPhoto.querySelector('.popup__close-button');
const fullPhotoItem = fullPhoto.querySelector('.popup__image');
const fullPhotoSubtitle = fullPhoto.querySelector('.popup__subtitle');

const expandPhotoHandler = (evt) => {
  fullPhoto.classList.add('popup_active');
  fullPhotoItem.src = evt.target.src;
  fullPhotoSubtitle.textContent = evt.target.alt;
};

function closePhotoHandler() {
  fullPhoto.classList.remove('popup_active');
}

closePhotoBtn.addEventListener('click', closePhotoHandler);


/////////////////////////////////////////////////////////////////////////////////
const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__box');
const inputName = popupForm.querySelector('.popup__form-input_value_name');
const inputAboutText = popupForm.querySelector('.popup__form-input_value_text');
const popupCloseBtn = document.querySelector('.popup__close-button');
const popupOpenBtn = document.querySelector('.profile__edit-button');
const profileName = document.querySelector('.profile__name');
const profileAboutText = document.querySelector('.profile__text');

function popupOpen() {
  popup.classList.add('popup_active');
  inputName.value = profileName.textContent;
  inputAboutText.value = profileAboutText.textContent;
}

popupOpenBtn.addEventListener('click', popupOpen);

function popupClose() {
  popup.classList.remove('popup_active');
}

popupCloseBtn.addEventListener('click', popupClose);

function popupFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAboutText.textContent = inputAboutText.value;
  popupClose();
}

popupForm.addEventListener('submit', popupFormSubmit);


/////////////////////////////////////////////////////////////////////////////////
initialCards.forEach((item) => {
  const element = templateContent.querySelector('.element').cloneNode(true);
  const elementPhoto = element.querySelector('.element__image');
  const elementTitle = element.querySelector('.element__title');
  const DeleteElementBtn = element.querySelector('.element__delete');
  const likeElementBtn = element.querySelector('.element__like');
  elementTitle.textContent = item.name;
  elementPhoto.src = item.link;
  elementPhoto.alt = item.name;
  DeleteElementBtn.addEventListener('click', DeleteBtnHandler);
  likeElementBtn.addEventListener('click', LikeBtnHandler);
  elementPhoto.addEventListener('click', expandPhotoHandler);
  elements.prepend(element);
});
