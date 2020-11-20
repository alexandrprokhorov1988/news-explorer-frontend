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
        }
      )
  }

}

const mainApi = new MainApi({
  baseUrl: BASE_URL,
});

export default mainApi;
