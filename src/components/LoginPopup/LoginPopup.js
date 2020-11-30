import React from 'react';
import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';
import {useFormValidation} from '../../hooks/useFormValidation';

function LoginPopup(
  {
    isOpen,
    onClose,
    onLogin,
    isLoading,
    onButtonRegisterClick,
    loginErrorMessage
  }) {
  const { values, handleChange, errors, isValid, resetForm } = useFormValidation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    onLogin(values);
    resetForm();
  }

  return (
    <PopupWithForm
      title="Вход"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onButtonClick={onButtonRegisterClick}
      linkTo={'login'}
    >
      <label htmlFor="login-email" className="form__input-label">Email</label>
      <input className="form__input"
             type="email"
             name="email"
             required
             placeholder="Введите свой email"
             value={values.email || ''}
             onChange={handleChange}
      />
      <span className={`form__error ${isValid ? 'form__error_hide' : ''}`}>{errors.email || ''}</span>
      <label htmlFor="login-password" className="form__input-label">Пароль</label>
      <input className="form__input"
             type="password"
             name="password"
             required
             autoComplete="on"
             placeholder="Введите пароль"
             value={values.password || ''}
             onChange={handleChange}
      />
      <span className={`form__error ${isValid ? 'form__error_hide' : ''}`}>{errors.password || ''}</span>
      <span
        className={`form__error form__error_type_server-msg ${!loginErrorMessage ? 'form__error_hide' : ''}`}>{loginErrorMessage || ''}</span>
      <input className={`form__submit-button ${!isValid ? 'form__submit-button_inactive' : '' }`}
             type="submit"
             name="submit"
             disabled={!isValid || isLoading}
             value={`${isLoading ? 'Вход...' : 'Войти'}`}
      />
    </PopupWithForm>
  );
}

export default LoginPopup;
