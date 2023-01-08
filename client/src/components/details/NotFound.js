import React from 'react';
import styles from '../../pages/details/details.module.css';

const NotFound = ({ title }) => {
  return <h5 className={styles.notFound}>{title}</h5>;
};

export default NotFound;
