import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import styles from './details.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeById } from '../../redux/actions/index';
import NavBar from '../../components/layout/navbar/NavBar';

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let recipe = useSelector((state) => state.recipeById);
  console.log(recipe);
  useEffect(() => {
    dispatch(getRecipeById(id));
  }, [dispatch, id]);

  return (
    <>
      <NavBar />
      <div className={styles.backgroundGeneral}>
        <div className={styles.container}>
          <div className={styles.flex}>
            <img className={styles.img} src={recipe.image} />

            <div>
              <div className={styles.box}>
                <h4 className={styles.title}>{recipe.name}</h4>
              </div>
              <div className={styles.box}>
                <h4>Diets: </h4>
                <div className={styles.dietsContainer}>
                  {recipe.diets?.map((d) => {
                    if (d.hasOwnProperty('name')) {
                      return (
                        <div className={styles.diets} key={d.name}>
                          <p>{d.name[0].toUpperCase() + d.name.slice(1)} </p>
                        </div>
                      );
                    } else {
                      return (
                        <div className={styles.diets} key={d}>
                          <p>{d[0].toUpperCase() + d.slice(1)} </p>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className={styles.box}>
                <h4>Health Score (0 - 100):</h4>
                <p className={styles.score}>{recipe.healthScore}</p>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.box}>
              <h4 className={styles.titleBig}>Summary</h4>
              <p>{recipe.summary}</p>
            </div>
            {recipe.steps ? (
              <div className={styles.box}>
                <h3 className={styles.titleBig}>Steps: </h3>
                <ul>
                  {Array.isArray(recipe.steps) ? (
                    recipe.steps.map((s) => {
                      return (
                        <p key={s.number}>
                          {s.number}: {s.step}
                        </p>
                      );
                    })
                  ) : (
                    <p>{recipe.steps}</p>
                  )}{' '}
                </ul>
              </div>
            ) : (
              <h5 className={styles.notFound}>
                This recipe does not have step by step
              </h5>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
