import React, { useState } from 'react'
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

    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
          id: sections.basicInfo,
          sectionTitle: sections.basicInfo,
          detail: {},
        },
        [sections.workExp]: {
          id: sections.workExp,
          sectionTitle: sections.workExp,
          details: [],
        },
        [sections.project]: {
          id: sections.project,
          sectionTitle: sections.project,
          details: [],
        },
        [sections.education]: {
          id: sections.education,
          sectionTitle: sections.education,
          details: [],
        },
        [sections.achievement]: {
          id: sections.achievement,
          sectionTitle: sections.achievement,
          points: [],
        },
        [sections.summary]: {
          id: sections.summary,
          sectionTitle: sections.summary,
          detail: "",
        },
        [sections.other]: {
          id: sections.other,
          sectionTitle: sections.other,
          detail: "",
        },
      });

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
            <Editor sections={sections} information={resumeInformation}/>
        </div>
    </div>
  )
}

export default Body