import React from 'react';
import './PopupWithForm.css';

function PopupWithForm({ isOpen, popupState, onClose, onSubmit, title, children, onPopupState }) {

  function handleClick(){
    onPopupState(popupState);
  }

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" onClick={onClose}/>
        <h2 className="popup__title">{title}</h2>
        <form action="#" method="post" className="form" noValidate onSubmit={onSubmit}>
          {children}
        </form>
        <p className="popup__text">или</p>
        <button type="button"
                className="popup__change-button"
        onClick={handleClick}>
          {popupState ? 'Войти' : 'Зарегистрироваться'}
        </button>
      </div>
    </div>
  );
}

export default PopupWithForm;
