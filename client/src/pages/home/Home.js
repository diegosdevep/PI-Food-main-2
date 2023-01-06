import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../redux/actions/index';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import Layout from '../../components/layout/Layout';
import Card from '../../components/card/Card';

const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(getRecipes());
    setLoading(false);
  }, [dispatch]);

  return (
    <Layout>
      <div className={styles.backgroundGeneral}>
        <div className={styles.flex}>
          {loading ? (
            <p>loading</p>
          ) : (
            <div className={styles.container}>
              {allRecipes.slice(0, 9)?.map((receta) => (
                <Card
                  key={receta.id}
                  id={receta.id}
                  name={receta.name}
                  imagen={receta.image}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
