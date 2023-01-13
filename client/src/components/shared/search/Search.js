import React, { useState } from 'react';
import styles from './search.module.css';
import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../../../redux/actions';

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  // const selector = useSelector((state) => state.recipes);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search !== '') {
      dispatch(getRecipesByName(search));
      setSearch('');
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type='text'
        placeholder='search'
        value={search}
        onChange={handleChange}
      />
      <button className={styles.btn} onClick={(e) => handleSubmit(e)}>
        Search
      </button>
    </div>
  );
};

export default Search;
