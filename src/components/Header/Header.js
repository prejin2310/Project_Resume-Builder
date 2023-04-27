import React from 'react';
import styles from './Header.module.css';
import job from '../../assets/resume.svg'

const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.left}>
            <p className={styles.heading}>A <span>Resume</span> that stands out!</p>
            <p className={styles.heading}>Make your own resume <br/><span> Its free..</span> </p>
        </div>
        <div className={styles.right}>
            <img src={job} alt='Resume Job'/>
        </div>
    </div>
  )
}

export default Header