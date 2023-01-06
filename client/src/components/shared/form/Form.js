import React from 'react';
import styles from './form.module.css';

const Form = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type='text' placeholder='titulo' />
        <input type='text' placeholder='titulo' />
        <input type='text' placeholder='titulo' />
        <input type='text' placeholder='titulo' />
        <input type='text' placeholder='titulo' />
        <input type='text' placeholder='titulo' />
        <input type='text' placeholder='titulo' />
        <input type='text' placeholder='titulo' />
        <input type='text' placeholder='titulo' />
      </form>
    </div>
  );
};

export default Form;
