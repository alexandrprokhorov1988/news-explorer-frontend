import {API_KEY, BASE_URL_API} from "./config";

class NewsApi {
  constructor({ baseUrl, apiKey }) {
    this._baseUrl = baseUrl;
    this._apiKey = apiKey;
  }

  getSearchCardsResults(value) {
    const date = new Date();
    const dateFrom = date.toISOString();
    const dateTo = new Date(date.setDate(date.getDate() - 7)).toISOString();
    return fetch(`${this._baseUrl}?q=${value}&pageSize=100&from=${dateFrom}&to=${dateTo}&apiKey=${this._apiKey}`, {})
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
  }
}

const newsApi = new NewsApi({
  baseUrl: BASE_URL_API,
  apiKey: API_KEY,
});

export default newsApi;

