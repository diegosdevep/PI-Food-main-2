import React, { useEffect } from 'react';
import styles from './sidebar.module.css';
import { getDiets } from '../../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../shared/buttons/Button';
import { filtros } from '../../../helpers/filtros';

const Sidebar = () => {
  const dispatch = useDispatch();
  const allDiets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div style={{ marginLeft: 20 }}>
        <div className={styles.firstFilterContainer}>
          <h3 className={styles.titleFilter}>Filtros</h3>
          <div className={styles.border}></div>
          <form>
            {filtros.map((filtro) => (
              <div className={styles.containerCheckbox} key={filtro.id}>
                <input type='radio' value={filtro.name} />
                <label style={{ color: 'rgba(255,255,255, 0.90)' }}>
                  {filtro.name}
                </label>
              </div>
            ))}
          </form>
        </div>

        <div>
          <h3 className={styles.titleFilter}>Filtro por Dieta</h3>
          {allDiets ? (
            <form style={{ marginBottom: 15, textTransform: 'capitalize' }}>
              {allDiets.map((diet) => (
                <div key={diet.id} className={styles.containerCheckbox}>
                  <input type='radio' key={diet.id} value={diet.name} />
                  <label style={{ color: 'rgba(255,255,255, 0.90)' }}>
                    {diet.name}
                  </label>
                </div>
              ))}
            </form>
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
