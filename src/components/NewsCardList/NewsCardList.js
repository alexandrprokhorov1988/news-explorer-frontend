import React from 'react';
import './NewsCardList.css';
import img from '../../images/image_08.png';

function NewsCardList() {

  return (
    <section className="search-results">
      <h1 className="search-results__title">Результаты поиска</h1>
      <div className="search-results__container">
        <article className="news-card">
          <button className="news-card__button-add"/>
          <span className="news-card__button-add-popup">Войдите, чтобы сохранять статьи</span>
          <img className="news-card__img" src={img} alt="Картинка"/>
          <div className="news-card__description-container">
            <p className="news-card__date">2 августа, 2019</p>
            <h2 className="news-card__title">Национальное достояние – парки</h2>
            <p className="news-card__text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
              складываться
              система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
            </p>
            <p className="news-card__source">Лента.ру</p>
          </div>
        </article>
        <article className="news-card">
          <button className="news-card__button-add"/>
          <span className="news-card__button-add-popup">Войдите, чтобы сохранять статьи</span>
          <img className="news-card__img" src={img} alt="Картинка"/>
          <div className="news-card__description-container">
            <p className="news-card__date">2 августа, 2019</p>
            <h2 className="news-card__title">Национальное достояние – парки</h2>
            <p className="news-card__text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
              складываться
              система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
            </p>
            <p className="news-card__source">Лента.ру</p>
          </div>
        </article>
        <article className="news-card">
          <button className="news-card__button-add"/>
          <span className="news-card__button-add-popup">Войдите, чтобы сохранять статьи</span>
          <img className="news-card__img" src={img} alt="Картинка"/>
          <div className="news-card__description-container">
            <p className="news-card__date">2 августа, 2019</p>
            <h2 className="news-card__title">Национальное достояние – парки</h2>
            <p className="news-card__text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
              складываться
              система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
            </p>
            <p className="news-card__source">Лента.ру</p>
          </div>
        </article>
        <article className="news-card">
          <button className="news-card__button-add"/>
          <span className="news-card__button-add-popup">Войдите, чтобы сохранять статьи</span>
          <img className="news-card__img" src={img} alt="Картинка"/>
          <div className="news-card__description-container">
            <p className="news-card__date">2 августа, 2019</p>
            <h2 className="news-card__title">Национальное достояние – парки</h2>
            <p className="news-card__text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
              складываться
              система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
            </p>
            <p className="news-card__source">Лента.ру</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default NewsCardList;
