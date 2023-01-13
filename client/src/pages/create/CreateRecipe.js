import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './create.module.css';
import Form from '../../components/shared/form/Form';
import Logo from '../../components/layout/logo/Logo';

const CreateRecipe = () => {
  return (
    <>
      <div className={styles.logo}>
        <div style={{ textAlign: 'center', width: '100%' }}>
          <Logo title='CREATE RECIPE' />
        </div>
      </div>
      <div className={styles.backgroundGeneral}>
        <Form />
      </div>
    </>
  );
};

export default CreateRecipe;
