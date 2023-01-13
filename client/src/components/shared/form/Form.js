import React, { useEffect, useState } from 'react';
import styles from './form.module.css';
import Input from './input/Input';
import TextArea from './textarea/TextArea';
import { useDispatch, useSelector } from 'react-redux';
import { createRecipe, getDiets } from '../../../redux/actions/index';
import { Link, useNavigate } from 'react-router-dom';
import { validate } from '../../../helpers/validate';
import { initialState } from '../../../helpers/initialState';
import Loading from '../loading/Loading';
import Modal from '../modal/Modal';

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);
  const [loading, setLoading] = useState(false);
  const [create, setCreate] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [modal, setModal] = useState(false);

  function handleChange(e) {
    e.preventDefault();
    setCreate({
      ...create,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...create,
        [e.target.name]: e.target.value,
      })
    );
  }

  const handleChecked = function (e) {
    if (e.target.checked) {
      setCreate({
        ...create,
        diets: [...create.diets, e.target.value],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      create.name === '' ||
      create.summary === '' ||
      create.score === '' ||
      create.healthScore === '' ||
      create.image === '' ||
      create.steps === ''
    ) {
      setModal(true);
    } else {
      setLoading(true);
      setTimeout(() => {
        dispatch(createRecipe(create));
        setCreate({
          name: '',
          summary: '',
          score: '',
          healthScore: '',
          image: '',
          steps: '',
          diets: [],
        });
        setLoading(false);
        navigate('/home');
      }, 1000);
    }
  };

  const onClose = () => {
    setModal(false);
  };

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.backgroundGeneral}>
          <div className={styles.loading}>
            <Loading />
          </div>
        </div>
      ) : (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
          {modal ? <Modal onClose={onClose} /> : ''}

          <div className={styles.form}>
            <div>
              <label className={styles.label}>Title</label>
              <Input
                name='name'
                type='text'
                placeholder='Ej: Spaghetti'
                value={create.name}
                onChange={(e) => handleChange(e)}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}

              <label className={styles.label}>URL: Image</label>
              <Input
                name='image'
                type='text'
                placeholder='Ej: https://cdn.pixabay.com/photo/2017/04/05/01/14/food-2203697_960_720.jpg'
                value={create.image}
                onChange={(e) => handleChange(e)}
              />
              {!errors.image ? null : (
                <p className={styles.error}>{errors.image}</p>
              )}
              <label className={styles.label}>Number Score</label>
              <div className={styles.row}>
                <Input
                  name='score'
                  type='number'
                  placeholder='Score'
                  value={create.score}
                  onChange={(e) => handleChange(e)}
                />
                <Input
                  name='healthScore'
                  type='number'
                  placeholder='Health Score'
                  value={create.healthScore}
                  onChange={(e) => handleChange(e)}
                />
                {!errors.score ? null : (
                  <p className={styles.error}>{errors.score}</p>
                )}
                {!errors.healthScore ? null : (
                  <p className={styles.error}>{errors.healthScore}</p>
                )}
              </div>
              <div>
                <label className={styles.label}>Description</label>
                <TextArea
                  name='summary'
                  value={create.summary}
                  onChange={(e) => handleChange(e)}
                />
                {!errors.summary ? null : (
                  <p className={styles.error}>{errors.summary}</p>
                )}
              </div>
            </div>

            <div className={styles.column}>
              <div>
                <label className={styles.label}>Diets Types</label>
                <div className={styles.dietsContainer}>
                  {diets.slice(0, 12).map((d) => {
                    return (
                      <div key={d.name} className={styles.list}>
                        <input
                          id={d.id}
                          type='checkbox'
                          name={d.name}
                          value={d.name}
                          onChange={(e) => handleChecked(e)}
                        />
                        <label htmlFor={d.id} className={styles.label}>
                          {d.name}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                <label className={styles.label}>Steps</label>
                <TextArea
                  name='steps'
                  value={create.steps}
                  onChange={(e) => handleChange(e)}
                />
                {!errors.steps ? null : (
                  <p className={styles.error}>{errors.steps}</p>
                )}
              </div>
            </div>
          </div>
          <div className={styles.btnContainer}>
            <Link to='/home'>
              <button className={styles.btn}>Back to home</button>
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                setErrors({});
                setCreate(initialState);
              }}
              className={styles.btn}
            >
              Reset
            </button>
            <button type='submit' className={styles.btn}>
              Create Recipe
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
