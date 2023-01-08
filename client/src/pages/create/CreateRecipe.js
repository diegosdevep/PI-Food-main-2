import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './create.module.css';
import Layout from '../../components/layout/Layout';
import Form from '../../components/shared/form/Form';

const CreateRecipe = () => {
  return (
    <Layout>
      <div className={styles.backgroundGeneral}>
        <Form />
      </div>
    </Layout>
  );
};

export default CreateRecipe;
