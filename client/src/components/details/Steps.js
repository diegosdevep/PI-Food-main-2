import React from 'react';
import styles from '../../pages/details/details.module.css';

const Steps = ({ key, step, number }) => {
  return (
    <p className={styles.text} key={key}>
      {number}- {step}
    </p>
  );
};

export default Steps;
