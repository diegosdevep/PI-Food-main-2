import React from 'react';
import styles from './pagina404.module.css';
import LogoTitle from '../../components/layout/logo/LogoTitle';
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className={styles.container}>
      <LogoTitle title='Not Found' />
      <div className={styles.containerBtnStart}>
        <Link to='/home'>
          <button className={styles.buttonStart}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Page404;
