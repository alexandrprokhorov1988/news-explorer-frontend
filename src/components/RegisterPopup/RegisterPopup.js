import React from 'react';
import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';
import {useFormValidation} from '../../hooks/useFormValidation';

function RegisterPopup({ isOpen, onClose, onRegister, isLoading, isRegisterPopupOpen, onButtonLoginClick }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();
  const [requestMsg, setRequestMsg] = React.useState(null);

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password || !values.name) {
      return;
    }
    //setRequestMsg
    //onRegister(values);
  }

  return (
    <PopupWithForm
      title="Регистрация"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onButtonClick={onButtonLoginClick}
      isRegisterPopupOpen={isRegisterPopupOpen}>
      <label htmlFor="register-email" className="form__input-label">Email</label>
      <input className="form__input"
             type="email"
             name="email"
             required
             placeholder="Введите свой email"
             id="register-email"
             value={values.email || ''}
             onChange={handleChange}
      />
      <span className={`form__error ${isValid ? 'form__error_hide' : ''}`}>{errors.email || ''}</span>
      <label htmlFor="register-password" className="form__input-label">Пароль</label>
      <input className="form__input"
             type="password"
             name="password"
             required
             minLength="2"
             maxLength="200"
             placeholder="Введите пароль"
             id="register-password"
             value={values.password || ''}
             onChange={handleChange}
      />
      <span className={`form__error ${isValid ? 'form__error_hide' : ''}`}>{errors.password || ''}</span>
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
             value={values.name || ''}
             onChange={handleChange}
      />
      <span className={`form__error ${isValid ? 'form__error_hide' : ''}`}>{errors.name || ''}</span>
      <span
        className={`form__error form__error_type_server-msg ${isValid ? 'form__error_hide' : ''}`}>{requestMsg || ''}</span>
      <input className={`form__submit-button ${!isValid ? 'form__submit-button_inactive' : '' }`}
             type="submit"
             name="submit"
             disabled={!isValid || isLoading}
             value={`${isLoading ? 'Регистрация...' : 'Зарегистрироваться'}`}
      />
    </PopupWithForm>
  );
}

export default RegisterPopup;
