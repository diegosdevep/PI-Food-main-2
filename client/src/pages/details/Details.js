import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './details.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeById } from '../../redux/actions/index';
import Score from '../../components/details/Score';
import Summary from '../../components/details/Summary';
import NotFound from '../../components/details/NotFound';
import Steps from '../../components/details/Steps';
import Logo from '../../components/layout/logo/Logo';
import Loading from '../../components/shared/loading/Loading';

const Details = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  let recipe = useSelector((state) => state.recipeById);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getRecipeById(id));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [dispatch, id]);

  return (
    <div>
      <div className={styles.logo}>
        <div style={{ textAlign: 'center', width: '100%' }}>
          <Logo title='FOOD DETAILS' />
        </div>
      </div>
      {loading ? (
        <div className={styles.backgroundGeneral}>
          <div className={styles.container}>
            <Loading />
          </div>
        </div>
      ) : (
        <div className={styles.backgroundGeneral}>
          <div className={styles.container}>
            <div className={styles.flex}>
              <img className={styles.img} src={recipe.image} alt='recipe' />
              <div>
                <div className={styles.box}>
                  <h4 className={styles.title}>{recipe.name}</h4>
                </div>

                <div className={styles.box}>
                  <h4>Diets: </h4>
                  <div className={styles.dietsContainer}>
                    {recipe.diets?.map((diet) => {
                      if (diet.hasOwnProperty('name')) {
                        return (
                          <div className={styles.diets} key={diet.name}>
                            <p>
                              {diet.name[0].toUpperCase() + diet.name.slice(1)}{' '}
                            </p>
                          </div>
                        );
                      } else {
                        return (
                          <div className={styles.diets} key={diet}>
                            <p>{diet[0].toUpperCase() + diet.slice(1)} </p>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                <Score healthScore={recipe.healthScore} />
              </div>
            </div>

            <div className={styles.information}>
              <div>
                {/* RESUME */}
                {recipe.summary ? (
                  <Summary summary={recipe.summary?.replace(/<[^>]*>/g, '')} />
                ) : (
                  <NotFound>'This recipe does not have summary.'</NotFound>
                )}
              </div>

              {/* STEP BY STEP */}
              <div>
                {recipe.steps ? (
                  <div>
                    <h3 className={styles.title}>Steps: </h3>
                    {Array.isArray(recipe.steps) ? (
                      recipe.steps.map((step) => {
                        return (
                          <Steps
                            key={step.step}
                            number={step.number}
                            step={step.step}
                          />
                        );
                      })
                    ) : (
                      <p className={styles.text}>{recipe.steps}</p>
                    )}{' '}
                  </div>
                ) : (
                  <NotFound>This recipe does not have step by step</NotFound>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
