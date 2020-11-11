import React from 'react';
import './PopupWithForm.css';

function PopupWithForm({ isOpen, popupState, onClose, onSubmit, title }) {

  return (
    <div className='popup popup_opened'>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={onClose}/>
        <h2 className="popup__title">Регистрация</h2>
        <form action="#" method="post" className="form" noValidate onSubmit={onSubmit}>
          <label htmlFor="email" className="form__input-label">Email</label>
          <input className="form__input"
                 type="email"
                 name="email"
                 required
                 placeholder="Введите свой email"
                 id="email"
          />
          <label htmlFor="password" className="form__input-label">Пароль</label>
          <input className="form__input"
                 type="password"
                 name="password"
                 required
                 minLength="2"
                 maxLength="200"
                 placeholder="Введите пароль"
                 id="password"
          />
          <label htmlFor="name" className="form__input-label">Имя</label>
          <input className="form__input"
                 type="text"
                 name="name"
                 required
                 minLength="2"
                 maxLength="200"
                 pattern="^[а-яёА-ЯЁa-zA-Z0-9-\s]+$"
                 placeholder="Введите своё имя"
                 id="name"
          />
          <span className="form__error form__error_visible">
            Такой пользователь уже есть
          </span>
          <input className="form__submit-button"
                 type="submit"
                 name="submit"
                 disabled="false"
                 value="Зарегистрироваться"
          />
        </form>
        <p className="popup__text">или</p>
        <button type="button" className="popup__change-button">
          {!popupState ? 'Войти' : 'Зарегистрироваться'}
        </button>
      </div>
    </div>
  );
}

export default PopupWithForm;
