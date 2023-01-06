import React from 'react';
import NavBar from './navbar/NavBar';
import Sidebar from './sidebar/Sidebar';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.flex}>
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
