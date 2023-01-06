import React from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../components/layout/logo/LogoTitle';
import styles from './start.module.css';

const Start = () => {
  return (
    <div className={styles.backgroundStart}>
      <LogoTitle />
      <div className={styles.containerBtnStart}>
        <Link to='/home'>
          <button className={styles.buttonStart}>Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Start;
