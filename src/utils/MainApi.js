import {BASE_URL} from "./config";

class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  register(email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, name })
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res.json());
      })
  }

  authorize(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res.json());
      })
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject('Ошибка токена');
      })
  }

  signOut() {
    return fetch(`${this._baseUrl}/signout`, {
      method: 'POST',
      credentials: 'include',
    })
      .then((res) => {
        if (res.status === 200) {
          return;
        }
        return Promise.reject('Ошибка сервера');
      })
  }

  setNewCard(keyword, title, text, date, source, link, image) {
    return fetch(`${this._baseUrl}/articles`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        keyword: keyword,
        title: title,
        text: text,
        date: date,
        source: source,
        link: link,
        image: image,
      })
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        return Promise.reject(res.json());
      })
  }

}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
});

export default mainApi;
