//отображение информации о пользователе на странице
export default class UserInfo {
    constructor({ userNameSelector, jobSelector }) {
        this._userNameSelector = userNameSelector;
        this._jobSelector = jobSelector;
        this._userNameElement = document.querySelector(`.${this._userNameSelector}`);
        this._jobElement = document.querySelector(`.${this._jobSelector}`);
    }
    
    //возвращает объект с данными пользователя
    getUserInfo = () => {
        return {
            title: this._userNameElement.textContent,
            job: this._jobElement.textContent,
        };
    };
    //принимает новые данные пользователя и добавляет их на страницу
    setUserInfo(data) {
        this._userNameElement.textContent = data.title || "";
        this._jobElement.textContent = data.job || "";
    }
}
