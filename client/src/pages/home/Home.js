import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, loadingGeneral } from '../../redux/actions/index';
import styles from './home.module.css';
import Layout from '../../components/layout/Layout';
import Card from '../../components/card/Card';
import Paginated from '../../components/paginated/Paginated';
import Loading from '../../components/shared/loading/Loading';

const Home = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector((state) => state.recipes);
  const loading = useSelector((state) => state.loading);
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
    setTimeout(() => {
      dispatch(getRecipes());
      dispatch(loadingGeneral(false));
    }, 1000);
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
            <Loading />
          ) : (
            <div className={styles.container}>
              {cardsCurrent?.map((recipe) => (
                <Card
                  key={recipe.id}
                  id={recipe.id}
                  name={recipe.name}
                  imagen={recipe.image}
                  healthScore={recipe.healthScore}
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
