import React from 'react'
import styles from './Body.module.css';
import { Download } from 'react-feather';
import Editor from '../Editor/Editor';

const Body = () => {
    const colors=['#6DB56D','#F4613E','#5B7FC5','#5534A5','#8B1540','#000000']
    const sections ={ 
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievements: "Achievements",
        summary: "Summary",
        other: "Other",
    };
  return (
    <div className={styles.container}>
        <p className={styles.heading}>Resume Builder</p>
        <div className={styles.toolbar}>
            <div className={styles.colors}>
                {
                    colors.map(item=>
                        <span key={item} style={{backgroundColor:item}}className={styles.color}/>
                )}
            </div>
            <button>Download <Download/></button>
        </div>
        <div className={styles.main}>
            <Editor sections={sections}/>
        </div>
    </div>
  )
}

export default Body