import React from 'react';
import Search from '../../shared/search/Search';
import Logo from '../logo/Logo';
import styles from './navbar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <Logo />
      <Search />
    </nav>
  );
};

export default NavBar;
