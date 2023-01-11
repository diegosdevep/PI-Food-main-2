import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logoTitle.module.css';

const Logo = ({ title }) => {
  return (
    <div>
      <Link to='/home'>
        <svg className={styles.svgLogo}>
          <symbol id='logo'>
            <text fill='transparent' textAnchor='middle' x='50%' y='60%'>
              {title}
            </text>
          </symbol>
          <use xlinkHref='#logo'></use>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
