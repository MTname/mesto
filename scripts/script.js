const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__box');
const inputName = popupForm.querySelector('.popup__form_input_name-author');
const inputAboutText = popupForm.querySelector('.popup__form_input_text-about');
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
