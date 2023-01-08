import React from 'react';
import styles from '../../pages/details/details.module.css';

const Score = ({ healthScore }) => {
  return (
    <div className={styles.box}>
      <h4>Health Score (0 - 100):</h4>
      <p className={styles.score}>{healthScore}</p>
    </div>
  );
};

export default Score;
