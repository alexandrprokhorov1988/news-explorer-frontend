import React from 'react';
import PopupWithForm from '../../components/PopupWithForm/PopupWithForm';
import {useFormValidation} from '../../hooks/useFormValidation';

function LoginPopup({ isOpen, onClose, onRegister, isLoading, isRegisterPopupOpen, onButtonRegisterClick }) {
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
      title="Вход"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      onButtonClick={onButtonRegisterClick}
      isRegisterPopupOpen={isRegisterPopupOpen}>
      <label htmlFor="email" className="form__input-label">Email</label>
      <input className="form__input"
             type="email"
             name="email"
             required
             placeholder="Введите свой email"
             id="email"
             value={values.email || ''}
             onChange={handleChange}
      />
      <span className={`form__error ${isValid ? 'form__error_hide' : ''}`}>{errors.email || ''}</span>
      <label htmlFor="password" className="form__input-label">Пароль</label>
      <input className="form__input"
             type="password"
             name="password"
             required
             placeholder="Введите пароль"
             id="password"
             value={values.password || ''}
             onChange={handleChange}
      />
      <span className={`form__error ${isValid ? 'form__error_hide' : ''}`}>{errors.password || ''}</span>
      <span
        className={`form__error form__error_type_server-msg ${isValid ? 'form__error_hide' : ''}`}>{requestMsg || ''}</span>
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
