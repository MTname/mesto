const popup = document.querySelector('.popup');
const popupForm = document.querySelector('.popup__box');
const inputName = popupForm.querySelector('.popup__form-name');
const inputAboutText = popupForm.querySelector('.popup__form-text');
const popupCloseBtn = document.querySelector('.popup__close-button');
const popupOpenBtn = document.querySelector('.profile-info__edit-button');
const profileName = document.querySelector('.profile-info__name');
const profileAboutText = document.querySelector('.profile-info__text');

popupOpenBtn.addEventListener('click', function() {
    popup.classList.add('popup_active');
    inputName.value = profileName.textContent;
    inputAboutText.value = profileAboutText.textContent;
});

popupCloseBtn.addEventListener('click', function() {
    popup.classList.remove('popup_active');
});

popupForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAboutText.textContent = inputAboutText.value;
    popup.classList.remove('popup_active');
});