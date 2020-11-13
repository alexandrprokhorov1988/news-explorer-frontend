import React from 'react';
import './PopupWithForm.css';

function PopupWithForm({ isOpen, onClose, onSubmit, title, children, onButtonClick, isRegisterPopupOpen }) {

  function handleClick() {
    onButtonClick();
  }

  function stopBubble(evt) {
    evt.stopPropagation();
  }

  function close() {
    onClose();
  }

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}
         onClick={close}>
      <div className="popup__container" onClick={stopBubble}>
        <button type="button" className="popup__close-button" onClick={onClose}/>
        <h2 className="popup__title">{title}</h2>
        <form action="#" method="post" className="form" noValidate onSubmit={onSubmit}>
          {children}
        </form>
        <p className="popup__text">или</p>
        <button type="button"
                className="popup__change-button"
                onClick={handleClick}>
          {!isRegisterPopupOpen ? 'Зарегистрироваться' : 'Войти'}
        </button>
      </div>
    </div>
  );
}

export default PopupWithForm;
