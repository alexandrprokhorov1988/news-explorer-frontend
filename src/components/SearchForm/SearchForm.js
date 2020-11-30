import React from 'react';
import './SearchForm.css';

function SearchForm() {
  const [value, setValue] = React.useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <form action="#" className="search-form" method="get" noValidate>
      <label className="search-form__label">
        <input className="search-form__input"
               type="text"
               name="search-form"
               placeholder="Введите тему новости"
               required
               id="search-form-input"
               value={value}
               onChange={handleChange}
        />
      </label>
      <input className="search-form__submit-button"
             type="submit"
             name="submit"
             value="Искать"/>
    </form>
  );
}

export default SearchForm;
