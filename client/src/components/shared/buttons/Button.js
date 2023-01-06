import React from 'react';
import styles from './button.module.css';
import { Link } from 'react-router-dom';

const Button = ({ title }) => {
  return (
    <Link to='/create'>
      <button className={styles.btn}>{title}</button>;
    </Link>
  );
};

export default Button;
