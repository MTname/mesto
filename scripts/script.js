const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__box');
const inputName = popupForm.querySelector('.popup__form-input_name');
const inputAboutText = popupForm.querySelector('.popup__form-input_text');
const popupCloseBtn = document.querySelector('.popup__close-button');
const popupOpenBtn = document.querySelector('.profile__info_edit-button');
const profileName = document.querySelector('.profile__info_name');
const profileAboutText = document.querySelector('.profile__info_text');

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
