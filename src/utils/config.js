require('dotenv').config();

const { NODE_ENV } = process.env;

const BASE_URL = NODE_ENV === 'production' ?
  'https://api.apexpress.students.nomoreparties.co' :
  'http://localhost:4000';

const BASE_URL_API = NODE_ENV === 'production' ?
  'https://nomoreparties.co/news/v2/everything' :
  'https://newsapi.org/v2/everything';

const API_KEY = '0aba79eaaa544209a131c1cedbfddf72';

const CARDS_IN_A_ROW = 3;

export {
  BASE_URL,
  BASE_URL_API,
  API_KEY,
  CARDS_IN_A_ROW
};
