import React from 'react';
import './NewsCardList.css';
import img4 from '../../images/image_04.png'
import img7 from '../../images/image_07.png';
import img8 from '../../images/image_08.png';
import NotFoundResults from '../../components/NotFoundResults/NotFoundResults';
import Preloader from '../../components/Preloader/Preloader';
import NewsCard from '../../components/NewsCard/NewsCard';

function NewsCardList({loggedIn}) {

  return (
    <section className="news-card-list">
      <h1 className="news-card-list__title">Результаты поиска</h1>
      <div className="news-card-list__container">
        <NewsCard
          link={img8}
          alt={'картинка'}
          category={'Природа'}
          date={'2 августа, 2019'}
          title={'Национальное достояние – парки'}
          source={'Лента.ру'}
          text={'В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала\n' +
          '                складываться\n' +
          '                система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.\n' +
          ''}
          isFaved={false}
          loggedIn={loggedIn}
        />
        <NewsCard
          link={img4}
          alt={'картинка'}
          category={'Природа'}
          date={'2 августа, 2019'}
          title={'Лесные огоньки: история одной фотографии'}
          source={'Медуза'}
          text={'Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного' +
           + 'из местных чудес природы.Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного\' +\n' +
          '           + \'из местных чудес природы.Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного\' +\n' +
          '           + \'из местных чудес природы.Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного\' +\n' +
          '           + \'из местных чудес природы.Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного\' +\n' +
          '           + \'из местных чудес природы.Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного\' +\n' +
          '           + \'из местных чудес природы.Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного\' +\n' +
          '           + \'из местных чудес природы.Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного\' +\n' +
          '           + \'из местных чудес природы.Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного\' +\n' +
          '           + \'из местных чудес природы.Фотограф отвлеклась от освещения суровой политической реальности Мексики, чтобы запечатлеть ускользающую красоту одного\' +\n' +
          '           + \'из местных чудес природы.'}
          isFaved={true}
          loggedIn={loggedIn}
        />
        <NewsCard
          link={img7}
          alt={'картинка'}
          category={'Природа'}
          date={'2 августа, 2019'}
          title={'«Первозданная тайга»: новый фотопроект Игоря Шпиленка'}
          source={'Риа'}
          text={'Знаменитый фотограф снимает первозданные леса России, чтобы рассказать о необходимости их сохранения. В этот раз он отправился в Двинско-Пинежскую тайгу, где...'}
          isFaved={false}
          loggedIn={false}
        />
      </div>
      <button type="button" className="news-card-list__button-more">Показать еще</button>
      <Preloader/>
      <NotFoundResults/>
    </section>
  );
}

export default NewsCardList;
