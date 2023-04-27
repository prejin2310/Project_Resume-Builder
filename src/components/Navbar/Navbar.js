import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={`${styles.navbar__title} ${styles.navbar__item}`}>My Resume</div>
      <div className={styles.navbar__item}>Build Resume</div>
      <div className={styles.navbar__item}>Get Job Details</div>     
    </header>
  );
};

export default Navbar;
