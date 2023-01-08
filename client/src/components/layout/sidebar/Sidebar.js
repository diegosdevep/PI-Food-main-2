import React, { useEffect, useState } from 'react';
import styles from './sidebar.module.css';
import { filterAZ, filterByDiet, getDiets } from '../../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/buttons/Button';

const Sidebar = ({ setPage }) => {
  const dispatch = useDispatch();
  const allDiets = useSelector((state) => state.diets);
  const [order, setOrder] = useState('');

  function handleFilterDiets(e) {
    dispatch(filterByDiet(e.target.value));
    setPage(1);
  }

  function handleFilterAZ(e) {
    e.preventDefault();
    dispatch(filterAZ(e.target.value));
    setOrder(e.target.value);
    setPage(2);
    setTimeout(() => {
      setPage(1);
    }, 10);
  }

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div style={{ marginLeft: 20 }}>
        <div className={styles.firstFilterContainer}>
          <h3 className={styles.titleFilter}>Filtros</h3>
          <div className={styles.border}></div>
          <select
            defaultValue={order}
            className={styles.select}
            onChange={(e) => handleFilterAZ(e)}
          >
            <option value=''>Order alphabetically</option>
            <option value='az'>A - Z</option>
            <option value='za'>Z - A</option>
          </select>
        </div>

        <div>
          <h3 className={styles.titleFilter}>Filtro por Dieta</h3>
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
      </div>
      <div>
        <Button title='Crear Receta' />
      </div>
    </div>
  );
};

export default Sidebar;
