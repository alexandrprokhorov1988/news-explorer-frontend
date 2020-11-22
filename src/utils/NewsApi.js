import {API_KEY, BASE_URL_API} from "./config";

class NewsApi {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  getSearchCardsResults(value) {
    return fetch(`${this._baseUrl}?q=${value}&pageSize=10&apiKey=${this._apiKey}`, {})
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        return data.articles;
      });
  }

}

const newsApi = new NewsApi({
  baseUrl: BASE_URL_API,
  apiKey: API_KEY,
});

export default newsApi;

