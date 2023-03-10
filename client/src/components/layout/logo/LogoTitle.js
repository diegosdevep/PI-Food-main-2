import React from 'react';
import styles from './logoTitle.module.css';

const LogoTitle = ({ title }) => {
  return (
    <div>
      <svg className={styles.svg}>
        <symbol id='logo'>
          <text fill='transparent' textAnchor='middle' x='50%' y='60%'>
            {title}
          </text>
        </symbol>
        <use xlinkHref='#logo'></use>
      </svg>
    </div>
  );
};

export default LogoTitle;
