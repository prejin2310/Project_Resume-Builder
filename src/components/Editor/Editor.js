import React, { useState } from 'react'
import styles from './Editor.module.css'

const Editor = (props) => {
    const sections=props.sections;
    const [activeSectionKey,setActivateSectionKey]=useState(Object.keys(sections)[0]);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map(
        (key=><div className={`${styles.sections} ${activeSectionKey===key?styles.active : ""}`} key={key} onClick={()=>setActivateSectionKey(key)}>
            {sections[key]}
        </div>))}
      </div>

    <div className={styles.body}>
        
    </div>


    </div>
  )
}

export default Editor
