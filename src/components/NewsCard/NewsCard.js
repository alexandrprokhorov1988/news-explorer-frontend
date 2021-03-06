import React from 'react';
import './NewsCard.css';
import {useLocation} from 'react-router-dom';
import defaultImg from '../../images/onload-err-default-img.png';

function NewsCard(
  {
    urlToImage,
    alt = 'Картинка',
    _id = null,
    dataId = null,
    keyword,
    title,
    text,
    date,
    source,
    link,
    image,
    description,
    isFaved = false,
    loggedIn,
    onCardAdd = null,
    onCardDelete,
    onSignIn,
    isLoadingAdd,
  }) {

  const location = useLocation();
  const [img, setImg] = React.useState(image);

  function err() {
    setImg(defaultImg);
  }

  function handleClickAdd() {
    if (!loggedIn) {
      onSignIn();
    } else if (isFaved) {
      onCardDelete(_id, dataId, 'news');
    } else {
      onCardAdd({ dataId, keyword, title, text, date, source, link, image });
    }
  }

  function handleClickDelete() {
    onCardDelete(_id, dataId, 'saved');
  }

  return (
    <article className="news-card">
      {location.pathname === '/saved-news' ?
        <button type="button"
                disabled={isLoadingAdd}
                className='news-card__button news-card__button_type_delete'
                onClick={handleClickDelete}/> :
        <button onClick={handleClickAdd}
                disabled={isLoadingAdd}
                type="button"
                className={`news-card__button news-card__button_type_add ${isFaved ? 'news-card__button_active' : ''}`}
        />
      }
      {location.pathname === '/saved-news' ?
        <>
          {loggedIn && <span className="news-card__button-popup">Убрать из сохранённых</span>}
        </> :
        <>
          {!loggedIn && <span className="news-card__button-popup">Войдите, чтобы сохранять статьи</span>}
        </>
      }
      <a href={link}
         className="news-card__link"
         target="_blank"
         rel="noreferrer"
         title={description}
      >
        {location.pathname === '/saved-news' &&
        <span className="news-card__category news-card__category_active">{keyword}</span>}
        <img className="news-card__img" src={img || ''} onError={err} alt={alt}/>
        <div className="news-card__description-container">
          <div>
            <p className="news-card__date">{date}</p>
            <h2 className="news-card__title">{title}</h2>
            <p className="news-card__text">{text}</p>
          </div>
          <p className="news-card__source">{source}</p>
        </div>
      </a>
    </article>
  );
}

export default NewsCard;
