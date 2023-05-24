import PropTypes from 'prop-types';
import style from './Searchbar.module.css';
import { useState } from 'react';
export const Searchbar = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');

  const handleChange = e => {
    const { value } = e.target;
    setSearchText(value);
  };

  const handleSubmit = el => {
    el.preventDefault();
    onSubmit(searchText);
    setSearchText('');
  };

  return (
    <header className={style.searchbar}>
      <form onSubmit={handleSubmit} className={style.searchForm}>
        <button type="submit" className={style.searchFormbutton}>
          <span className={style.searchFormButtonlabel}></span>
        </button>
        <input
          name="searchText"
          value={searchText}
          onChange={handleChange}
          className={style.SearchForminput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
