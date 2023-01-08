import React from 'react';
import styles from '../../pages/details/details.module.css';

const Summary = ({ summary }) => {
  return (
    <div>
      <h3 className={styles.title}>Summary: </h3>
      <p className={styles.text}>{summary}</p>
    </div>
  );
};

export default Summary;
