import React from 'react';
import styles from '../../pages/details/details.module.css';

const Steps = ({ step, number }) => {
  return (
    <p className={styles.text}>
      {number}- {step}
    </p>
  );
};

export default Steps;
