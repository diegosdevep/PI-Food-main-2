import React from 'react';
import NavBar from './navbar/NavBar';
import Sidebar from './sidebar/Sidebar';
import styles from './layout.module.css';

const Layout = ({ children, setPage }) => {
  return (
    <>
      <NavBar />
      <div className={styles.flex}>
        <Sidebar setPage={setPage} />
        {children}
      </div>
    </>
  );
};

export default Layout;
