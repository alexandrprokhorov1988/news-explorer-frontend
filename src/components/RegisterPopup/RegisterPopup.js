import React from 'react';
import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';
import {useFormValidation} from '../../hooks/useFormValidation';

function RegisterPopup(
  { isOpen,
    onClose,
    onRegister,
    isLoading,
    onButtonLoginClick,
    registerErrorMessage
  }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password || !values.name) {
      return;
    }
    onRegister(values);
    resetForm();
  }

  return (
    <PopupWithForm
      title="Регистрация"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onButtonClick={onButtonLoginClick}
      linkTo={'register'}
    >
      <label htmlFor="register-email" className="form__input-label">Email</label>
      <input className="form__input"
             type="email"
             name="email"
             required
             placeholder="Введите свой email"
             value={values.email || ''}
             onChange={handleChange}
      />
      <span className={`form__error ${isValid ? 'form__error_hide' : ''}`}>{errors.email || ''}</span>
      <label htmlFor="register-password" className="form__input-label">Пароль</label>
      <input className="form__input"
             type="password"
             name="password"
             required
             autoComplete="on"
             minLength="2"
             maxLength="200"
             placeholder="Введите пароль"
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
        className={`form__error form__error_type_server-msg ${!registerErrorMessage ? 'form__error_hide' : ''}`}>{registerErrorMessage || ''}</span>
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
