export default class Api {
    constructor(url, token) {
        this._url = url;
        this._token = token;
        this._headers = {
            authorization: '0b7fb7af-1d7f-4272-ab93-c41201325a22',
            'Content-Type': 'application/json' 
        }
    }
    
    getCards() {
        return fetch(`${this._url}/cards`, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Возникла ошибка: ${res.status}`); // если ошибка, отклоняем промис
        });
    }

    getUser() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Возникла ошибка: ${res.status}`);
        });
    }
    
    editUserInfo(title, job) {
        const body = {
            name: title,
            about: job,
        };
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(body),
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Возникла ошибка: ${res.status}`);
        });
    }

    addCard(newPlace, linkPlace) {
        const body = {
            name: newPlace,
            link: linkPlace,
        };
        return fetch(`${this._url}/cards`, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(body),
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Возникла ошибка: ${res.status}`);
        });
    }

    deleteCard(cardId) {
         return fetch(`${this._url}/cards/${cardId}`, {
            headers: this._headers,
            method: 'DELETE',
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Возникла ошибка: ${res.status}`);
         });
    }

    countLikes() {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            headers: this._headers,
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Возникла ошибка: ${res.status}`);
        });
    }

    switchLike(cardId, isLiked) {
        return fetch(`${this._url}/cards/${cardId}/likes`, {
            headers: this._headers,
            method: isLiked ? 'DELETE' : 'PUT',
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Возникла ошибка: ${res.status}`);
        });
    }
    
    editAvatar(userAvatar) {
        const body = {
            avatar: userAvatar
        };
        return fetch(`${this._url}/users/me/avatar`, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(body),
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Возникла ошибка: ${res.message}`);
        });
    }
}
