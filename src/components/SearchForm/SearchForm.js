import React from 'react';
import './SearchForm.css';
import {SEARCH_ERR} from '../../utils/constants';

function SearchForm({ onSearch, isLoading }) {
  const [value, setValue] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleFocus() {
    setErrorMessage('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!value) {
      setErrorMessage(SEARCH_ERR);
      return;
    }
    onSearch(value);
  }

  return (
    <form
      action="#"
      className="search-form"
      method="get"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="search-form__label">
        <input className={`search-form__input ${errorMessage ? 'search-form__input_type_error' : ''}`}
               type="text"
               name="search-form"
               placeholder="Введите тему новости"
               required
               id="search-form-input"
               value={value || errorMessage}
               onFocus={handleFocus}
               onChange={handleChange}
        />
      </label>
      <input className="search-form__submit-button"
             type="submit"
             name="submit"
             value="Искать"
             disabled={isLoading}
      />
    </form>
  );
}

export default SearchForm;
