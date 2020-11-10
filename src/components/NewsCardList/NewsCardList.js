import React from 'react';
import './NewsCardList.css';
import img4 from '../../images/image_04.png'
import img7 from '../../images/image_07.png';
import img8 from '../../images/image_08.png';

import NotFoundResults from '../../components/NotFoundResults/NotFoundResults';
import Preloader from '../../components/Preloader/Preloader';

function NewsCardList() {

  return (
    <section className="search-results">
      <h1 className="search-results__title">Результаты поиска</h1>
      <div className="search-results__container">
        <article className="news-card">
          <button type="button" className="news-card__button-add news-card__button-add_active"/>
          <span className="news-card__button-add-popup">Войдите, чтобы сохранять статьи</span>
          <span className="news-card__category news-card__category_active">Природа</span>
          <img className="news-card__img" src={img8} alt="Картинка"/>
          <div className="news-card__description-container">
            <div>
              <p className="news-card__date">2 августа, 2019</p>
              <h2 className="news-card__title">Национальное достояние – парки</h2>
              <p className="news-card__text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
                складываться
                система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
              </p>
            </div>
            <p className="news-card__source">Лента.ру</p>
          </div>
        </article>
        <article className="news-card">
          <button type="button" className="news-card__button-add news-card__button-add_active"/>
          <span className="news-card__button-add-popup">Войдите, чтобы сохранять статьи</span>
          <span className="news-card__category news-card__category_active">Природа</span>
          <img className="news-card__img" src={img4} alt="Картинка"/>
          <div className="news-card__description-container">
            <div>
              <p className="news-card__date">2 августа, 2019</p>
              <h2 className="news-card__title">Лесные огоньки: история одной фотографии</h2>
              <p className="news-card__text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
                складываться
                система В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
                складываться
                система национальных парков – охраняемых территорий, где и сегоднВ 2016 году Америка отмечала важный
                юбилей: сто лет назад здесь начала
                складываться
                система национальных парков – охраняемых территорий, где и сегоднВ 2016 году Америка отмечала важный
                юбилей: сто лет назад здесь начала
                складываться
                система национальных парков – охраняемых территорий, где и сегоднВ 2016 году Америка отмечала важный
                юбилей: сто лет назад здесь начала
                складываться
                система национальных парков – охраняемых территорий, где и сегоднВ 2016 году Америка отмечала важный
                юбилей: сто лет назад здесь начала
                складываться
                система национальных парков – охраняемых территорий, где и сегоднВ 2016 году Америка отмечала важный
                юбилей: сто лет назад здесь начала
                складываться
                система национальных парков – охраняемых территорий, где и сегоднВ 2016 году Америка отмечала важный
                юбилей: сто лет назад здесь начала
                складываться
                система национальных парков – охраняемых территорий, где и сегоднВ 2016 году Америка отмечала важный
                юбилей: сто лет назад здесь начала
                складываться
                система национальных парков – охраняемых территорий, где и сегодннациональных парков – охраняемых
                территорий, где и сегодня каждый может приобщиться к природе.
              </p>
            </div>
            <p className="news-card__source">Лента.ру</p>
          </div>
        </article>
        <article className="news-card">
          <button type="button" className="news-card__button-add"/>
          <span className="news-card__button-add-popup">Войдите, чтобы сохранять статьи</span>
          <span className="news-card__category news-card__category_active">Природа</span>
          <img className="news-card__img" src={img7} alt="Картинка"/>
          <div className="news-card__description-container">
            <div>
              <p className="news-card__date">2 августа, 2019</p>
              <h2 className="news-card__title">«Первозданная тайга»: новый фотопроект Игоря Шпиленка«Первозданная
                тайга»:
                новый фотопроект Игоря Шпиленка«Первозданная тайга»: новый фотопроект Игоря Шпиленка«Первозданная
                тайга»:
                новый фотопроект Игоря Шпиленка</h2>
              <p className="news-card__text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
                складываться
                система нацио                система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
                система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
                система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
                система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
                нальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
              </p>
            </div>
            <p className="news-card__source">Лента.ру</p>
          </div>
        </article>
        <article className="news-card">
          <button type="button" className="news-card__button-add"/>
          <span className="news-card__button-add-popup">Войдите, чтобы сохранять статьи</span>
          <span className="news-card__category news-card__category_active">Природа</span>
          <img className="news-card__img" src={img8} alt="Картинка"/>
          <div className="news-card__description-container">
            <div>
              <p className="news-card__date">2 августа, 2019</p>
              <h2 className="news-card__title">Национальное достояние – парки</h2>
              <p className="news-card__text">В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала
                складываться
                система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.
              </p>
            </div>
            <p className="news-card__source">Лента.ру</p>
          </div>
        </article>
      </div>
      <button type="button" className="search-results__button-more">Показать еще</button>
      <Preloader/>
      <NotFoundResults/>
    </section>
  );
}

export default NewsCardList;
