import React, { useEffect, useState } from 'react';
import styles from './sidebar.module.css';
import {
  filterAZ,
  filterByDiet,
  filterHealthScore,
  getDiets,
  getRecipes,
} from '../../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/buttons/Button';

const Sidebar = ({ setPage }) => {
  const dispatch = useDispatch();
  const allDiets = useSelector((state) => state.diets);
  const [order, setOrder] = useState('');

  let handleClick = (e) => {
    e.preventDefault();
    dispatch(getRecipes());
    setPage(1);
    setOrder('');
    window.location.reload(); // Si quiero recargar la página y limpiar todos los select, esta es una opción.
  };

  function handleFilterDiets(e) {
    dispatch(filterByDiet(e.target.value));
    setPage(1);
  }

  function handleFilterAZ(e) {
    e.preventDefault();
    dispatch(filterAZ(e.target.value));
    setPage(2);
    setTimeout(() => {
      setPage(1);
    }, 1);
    setOrder(e.target.value);
  }

  function handleScore(e) {
    e.preventDefault();
    dispatch(filterHealthScore(e.target.value));
    setPage(2);
    setTimeout(() => {
      setPage(1);
    }, 1);
    setOrder(e.target.value);
  }

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <div className={styles.firstFilterContainer}>
          <div>
            <h3 className={styles.titleFilter}>Filters</h3>
            <select
              defaultValue={order}
              className={styles.select}
              onChange={(e) => handleFilterAZ(e)}
            >
              <option value=''>Alphabetically</option>
              <option value='az'>A - Z</option>
              <option value='za'>Z - A</option>
            </select>
          </div>

          <div>
            <h3 className={styles.titleFilter}>Health Score</h3>
            <select
              defaultValue={order}
              className={styles.select}
              onChange={(e) => handleScore(e)}
            >
              <option value=''>HealthScore</option>
              <option value='min'>Min to Max</option>
              <option value='max'>Max to Min</option>
            </select>
          </div>

          <div>
            <h3 className={styles.titleFilter}>Filters by Diets</h3>
            {allDiets ? (
              <select
                onChange={(e) => handleFilterDiets(e)}
                className={styles.select}
              >
                <option value='all'>All</option>
                {allDiets.map((diet) => (
                  <option key={diet.id} value={diet.name}>
                    {diet.name}
                  </option>
                ))}
              </select>
            ) : (
              <p>loading</p>
            )}
          </div>
          <button onClick={handleClick} className={styles.refresh}>
            Reset Filters
          </button>
        </div>
      </div>
      <div>
        <Button title='Create Recipe' />
      </div>
    </div>
  );
};

export default Sidebar;
