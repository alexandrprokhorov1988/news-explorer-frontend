import React from 'react';
import './ConfirmPopup.css';

function ConfirmPopup({ isOpen, onClose, onSubmit, title, children, onButtonClick }) {

  function handleClick() {
    onButtonClick();
  }

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__container_type_confirm">
        <button type="button" className="popup__close-button" onClick={onClose}/>
        <h2 className="popup__title">Пользователь успешно зарегистрирован!</h2>
        <button type="button"
                className="popup__change-button popup__change-button_type_confirm"
                onClick={handleClick}>
          Войти
        </button>
      </div>
    </div>
  );
}

export default ConfirmPopup;
