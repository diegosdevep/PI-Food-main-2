import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes } from '../../redux/actions/index';
import styles from './home.module.css';
import Layout from '../../components/layout/Layout';
import Card from '../../components/card/Card';
import Paginated from '../../components/paginated/Paginated';

const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [cardPerPages] = useState(9);

  // PAGINADO
  const lastCard = page * cardPerPages;
  const firstCard = lastCard - cardPerPages;
  const cardsCurrent = allRecipes.slice(firstCard, lastCard);

  const pages = (pageNumber) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    setLoading(true);
    dispatch(getRecipes());
    setLoading(false);
  }, [dispatch]);

  return (
    <Layout setPage={setPage}>
      <div className={styles.backgroundGeneral}>
        <div className={styles.flex}>
          <Paginated
            cardPerPages={cardPerPages}
            allRecipes={allRecipes.length}
            pages={pages}
            page={page}
            setPage={setPage}
          />
          {loading ? (
            <p>loading</p>
          ) : (
            <div className={styles.container}>
              {cardsCurrent?.map((receta) => (
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
