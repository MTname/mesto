(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r,o,i){var a=this,c=e.name,l=e.link,s=e._id,u=e.likes,f=e.owner._id,h=i.openImageHandler,p=i.deleteCardHandler,d=i.cardLikeHandler;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_handleLikeClick",(function(){return a._handleCardLike(a._id,a._isLiked(),a.setLikes)})),t(this,"_handleDeleteClick",(function(){return a._handleCardDelete(a._id,a.deleteCard)})),t(this,"_handleImageClick",(function(){return a._handleOpenImage({name:a._name,link:a._link})})),this._name=c,this._link=l,this._id=s,this._likes=u,this._isOwner=r===f,this._userId=r,this._templateContent=o,this._handleOpenImage=h,this._handleCardDelete=p,this._handleCardLike=d,this.generateElement=this.generateElement.bind(this),this.setLikes=this.setLikes.bind(this),this.deleteCard=this.deleteCard.bind(this)}var r,o;return r=n,(o=[{key:"_getTemplate",value:function(){var e=document.querySelector(this._templateContent).content.querySelector(".element").cloneNode(!0);this._element=e}},{key:"_findCardComponents",value:function(){this._likeBtn=this._element.querySelector(".element__like"),this._likesCounter=this._element.querySelector(".element__likeCounter"),this._delBtn=this._element.querySelector(".element__delete"),this._cardImage=this._element.querySelector(".element__image"),this._cardTitle=this._element.querySelector(".element__title")}},{key:"_fillClassData",value:function(){this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardTitle.textContent=this._name}},{key:"_isLiked",value:function(){return this._likes.map((function(e){return e._id})).includes(this._userId)}},{key:"_renderLikes",value:function(){this._isLiked()?this._likeBtn.classList.add("element__like_active"):this._likeBtn.classList.remove("element__like_active"),this._likesCounter.textContent=this._likes.length}},{key:"setLikes",value:function(e){this._likes=e,this._renderLikes()}},{key:"deleteCard",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){this._likeBtn.addEventListener("click",this._handleLikeClick),this._isOwner?this._delBtn.addEventListener("click",this._handleDeleteClick):this._delBtn.remove(),this._cardImage.addEventListener("click",this._handleImageClick)}},{key:"generateElement",value:function(){return this._getTemplate(),this._findCardComponents(),this._fillClassData(),this._renderLikes(),this._setEventListeners(),this._element}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._containerSelector=n,this._container=document.querySelector(this._containerSelector)}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(this._renderer(e))}},{key:"rendererItems",value:function(e){var t=this;e.reverse().forEach((function(e){return t.addItem(e)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n){var r,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o=function(){i._inputList.forEach((function(e){return i._hideInputError(e)})),i._toggleButtonState(i._inputList,i._saveButton)},(r="cleanUpForm")in this?Object.defineProperty(this,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):this[r]=o,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector)),this._saveButton=this._form.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.classList.add(this._errorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e,t){this._hasInvalidInput(e)?(t.classList.add(this._inactiveButtonClass),t.disabled=!0):(t.classList.remove(this._inactiveButtonClass),t.disabled=!1)}},{key:"enableValidation",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList,e._saveButton)}))})),this._toggleButtonState(this._inputList,this._saveButton)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_handleEscClose",(function(e){"Escape"===e.key&&r.close()})),l(this,"_handleOverlayClose",(function(e){e.target===e.currentTarget&&r.close()})),l(this,"_handleCloseBtnClick",(function(){return r.close()})),this._popupSelector=t,this._activeModifier=n.activeModifier,this._closeBtnSelector=n.closeBtnSelector,this._popup=document.querySelector(this._popupSelector),this._closeBtn=this._popup.querySelector(this._closeBtnSelector)}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add(this._activeModifier)}},{key:"close",value:function(){this._popup.classList.remove(this._activeModifier),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){this._popup.addEventListener("mousedown",this._handleOverlayClose),this._closeBtn.addEventListener("click",this._handleCloseBtnClick)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=p(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function p(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function _(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e,t,n){var r,o=n.imageSelector,c=n.subtitleSelector;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,e,t))._imageSelector=o,r._subtitleSelector=c,r._imageElement=r._popup.querySelector(r._imageSelector),r._subtitleElement=r._popup.querySelector(r._subtitleSelector),r.open=r.open.bind(y(r)),r}return t=a,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._imageElement.src=n,this._imageElement.alt=t,this._subtitleElement.textContent=t,h(m(a.prototype),"open",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=j(e)););return e}function E(e,t){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},E(e,t)}function C(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function L(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var B=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=j(r);if(o){var n=j(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function a(e,t,n,r,o,c,l){var s,u=l.btnText,f=l.changeBtnText,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;return g(this,a),L(O(s=i.call(this,e,t)),"_getInputValues",(function(){var e={};return s._inputList.forEach((function(t){return e[t.id.slice(6)]=t.value})),e})),L(O(s),"changeButtonText",(function(e){s._submitBtn.textContent=e?s._changeBtnText:s._btnText})),L(O(s),"_handleFormSubmit",(function(e){e.preventDefault(),s._submitCallBack(s._getInputValues(),s.changeButtonText,s.close)})),s._formName=n,s._inputSelector=r,s._cleanUpFormErrors=o,s._submitCallBack=c,s._getterCallBack=h,s._formElement=document.forms[s._formName],s._inputList=Array.from(s._formElement.querySelectorAll(s._inputSelector)),s._btnText=u,s._changeBtnText=f,s._submitBtn=s._formElement.querySelector(".popup__save-button"),s.close=s.close.bind(O(s)),s}return t=a,(n=[{key:"close",value:function(){S(j(a.prototype),"close",this).call(this),this._formElement.reset()}},{key:"_setInputValues",value:function(e){this._inputList.forEach((function(t){return t.value=e[t.id.slice(6)]}))}},{key:"open",value:function(){this._getterCallBack&&this._setInputValues(this._getterCallBack()),this._cleanUpFormErrors(),S(j(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){S(j(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._handleFormSubmit)}}])&&k(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(){return T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=x(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},T.apply(this,arguments)}function x(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=A(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function q(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return U(e)}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function A(e){return A=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},A(e)}function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=A(r);if(o){var n=A(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function a(e,t,n,r,o){var c,l=o.btnText,s=o.changeBtnText;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),D(U(c=i.call(this,e,t)),"changeButtonText",(function(e){c._submitBtn.textContent=e?c._changeBtnText:c._btnText})),D(U(c),"_handleFormSubmit",(function(e){e.preventDefault(),c._handleSubmit(c._cardId,c._removeCardCallBack,c.changeButtonText,c.close)})),c._formName=n,c._formElement=document.forms[c._formName],c._handleSubmit=r,c._btnText=l,c._changeBtnText=s,c._submitBtn=c._formElement.querySelector(".popup__save-button"),c._handleSubmit=c._handleSubmit.bind(U(c)),c.close=c.close.bind(U(c)),c}return t=a,(n=[{key:"open",value:function(e,t){this._cardId=e,this._removeCardCallBack=t,T(A(a.prototype),"open",this).call(this)}},{key:"setEventListeners",value:function(){T(A(a.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",this._handleFormSubmit)}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t,this._headers={authorization:"0b7fb7af-1d7f-4272-ab93-c41201325a22","Content-Type":"application/json"}}var t,n;return t=e,(n=[{key:"_handleResJson",value:function(e){return e.ok?e.json():Promise.reject("Возникла ошибка: ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then(this._handleResJson)}},{key:"getUser",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then(this._handleResJson)}},{key:"editUserInfo",value:function(e,t){var n={name:e,about:t};return fetch("".concat(this._url,"/users/me"),{headers:this._headers,method:"PATCH",body:JSON.stringify(n)}).then(this._handleResJson)}},{key:"addCard",value:function(e,t){var n={name:e,link:t};return fetch("".concat(this._url,"/cards"),{headers:this._headers,method:"POST",body:JSON.stringify(n)}).then(this._handleResJson)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e),{headers:this._headers,method:"DELETE"}).then(this._handleResJson)}},{key:"countLikes",value:function(){return fetch("".concat(this._url,"/cards/").concat(cardId,"/likes"),{headers:this._headers}).then(this._handleResJson)}},{key:"switchLike",value:function(e,t){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{headers:this._headers,method:t?"DELETE":"PUT"}).then(this._handleResJson)}},{key:"editAvatar",value:function(e){var t={avatar:e};return fetch("".concat(this._url,"/users/me/avatar"),{headers:this._headers,method:"PATCH",body:JSON.stringify(t)}).then((function(e){return e.ok?e.json():Promise.reject("Возникла ошибка: ".concat(e.message))}))}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=function(){function e(t){var n=this,r=t.userNameSelector,o=t.jobSelector,i=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),V(this,"getUserInfo",(function(){return{title:n._userNameElement.textContent,job:n._jobElement.textContent}})),V(this,"getUserAvatar",(function(){return{avatar:n._avatar}})),this._userNameSelector=r,this._jobSelector=o,this._avatarSelector=i,this._userNameElement=document.querySelector(this._userNameSelector),this._jobElement=document.querySelector(this._jobSelector),this._avatarElement=document.querySelector(this._avatarSelector),this.getUserInfo=this.getUserInfo.bind(this),this.setUserInfo=this.setUserInfo.bind(this)}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._name=t,this._userNameElement.textContent=t||"",this._about=n,this._jobElement.textContent=n||"",this._avatar=r,this._avatarElement.style.backgroundImage="url('".concat(this._avatar,"')"),this._id=o}},{key:"id",get:function(){return this._id}}])&&H(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),z={inputSelector:".popup__form-input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_disabled",inputErrorClass:"popup__form-input_type_error",errorClass:"popup__form-input-error_type_active"},$={activeModifier:"popup_active",closeBtnSelector:".popup__close-button"},G={btnText:"Сохранить",changeBtnText:"Сохранение..."},K=".popup__form-input",Q="form-newAvatar";function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var X=new F("https://mesto.nomoreparties.co/v1/cohort-45"),Y=document.querySelector(".profile__add-button"),Z=document.querySelector(".profile__edit-button"),ee=document.querySelector(".profile__avatar"),te=new b(".popup_type_photo",$,{imageSelector:".popup__image",subtitleSelector:".popup__subtitle"});te.setEventListeners();var ne=new N(".popup_type_deleteCard",$,"form-deleteCard",(function(e,t,n,r){n(!0),X.deleteCard(e).then((function(){t(),r()})).catch((function(e){console.log(e)})).finally((function(){n(!1)}))}),{btnText:"Да",changeBtnText:"Удаление..."});function re(e,t){te.open(e,t)}function oe(e,t){ne.open(e,t)}function ie(e,t,n){X.switchLike(e,t).then((function(e){var t=e.likes;n(t)})).catch((function(e){console.log(e)}))}ne.setEventListeners();var ae=new o({renderer:function(e){return new n(e,se.id,".template-item",{openImageHandler:re,deleteCardHandler:oe,cardLikeHandler:ie}).generateElement()}},".elements"),ce={};Array.from(document.forms).forEach((function(e){ce[e.name]=new a(z,e),ce[e.name].enableValidation()}));var le=new B(".popup_type_card-item",$,"form-newCard",K,ce["form-newCard"].cleanUpForm,(function(e,t,n){t(!0),X.addCard(e.name,e.link).then((function(e){ae.addItem(e),n()})).catch((function(e){console.log(e)})).finally((function(){t(!1)}))}),{btnText:"Создать",changeBtnText:"Сохранение..."});le.setEventListeners(),Y.addEventListener("click",(function(){return le.open()}));var se=new M({userNameSelector:".profile__name",jobSelector:".profile__text",avatarSelector:".profile__avatar"}),ue=new B(".popup_type_info",$,"form-profile",K,ce["form-profile"].cleanUpForm,(function(e,t,n){t(!0),X.editUserInfo(e.title,e.job).then((function(e){se.setUserInfo(e),n()})).catch((function(e){console.log(e)})).finally((function(){t(!1)}))}),G,se.getUserInfo);ue.setEventListeners(),Z.addEventListener("click",(function(){return ue.open()}));var fe=new B(".popup_type_avatar",$,Q,K,ce[Q].cleanUpForm,(function(e,t,n){t(!0),X.editAvatar(e.avatar).then((function(e){se.setUserInfo(e),n()})).catch((function(e){console.dir(e)})).finally((function(){t(!1)}))}),G,se.getUserAvatar);fe.setEventListeners(),ee.addEventListener("click",(function(){return fe.open()})),Promise.all([X.getUser(),X.getCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?W(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];se.setUserInfo(o),ae.rendererItems(i)})).catch((function(e){console.log(e)}))})();
//# sourceMappingURL=main.js.map