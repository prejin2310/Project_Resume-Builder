import { useState } from "react";
import React from 'react';
import { dataref } from "./firebase";
import './form.css';


const JobData = () => {

  // const [name,setName] = useState('')
  // const [age,setAge] = useState('')

  const csSkills = [
    'Programming Languages',
    'Web Development',
    'Mobile Development',
    'Data Structures and Algorithms',
    'Databases',
    'Computer Networks',
    'Operating Systems',
    'Computer Architecture',
    'Artificial Intelligence',
    'Machine Learning',
    'Computer Vision',
    'Natural Language Processing',
    'Big Data Analytics',
    'Cloud Computing',
    'Software Engineering',
    'Cybersecurity',
    'Game Development',
    'Computer Graphics',
    'UI/UX Design',
    'Agile Development',
    'DevOps',
    'Git',
    'Linux',
    'Windows',
    'MacOS',
    'Python',
    'Java',
    'JavaScript',
    'C++',
    'C#',
    'Swift',
    'Objective-C',
    'Ruby',
    'PHP',
    'SQL',
    'NoSQL',
    'MongoDB',
    'Firebase',
    'AWS',
    'Google Cloud',
    'Azure',
    'React',
    'Vue',
    'Angular',
    'Node.js',
    'Express',
    'Django',
    'Flask',
    'Spring',
    'Laravel',
    'ASP.NET',
    'RESTful API',
    'GraphQL',
  ];

  
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [jobCategory, setJobCategory] = useState('');
  const [applicationDeadline, setApplicationDeadline] = useState('');
  const [requiredExperience, setRequiredExperience] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [requiredSkills, setRequiredSkills] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');


  const handleAdd = () => {
    dataref.ref(jobCategory).push({
      jobTitle: jobTitle,
      jobDescription: jobDescription,
      jobLocation: jobLocation,
      jobType: jobType,
      salaryRange: salaryRange,
      jobCategory: jobCategory,
      applicationDeadline: applicationDeadline,
      requiredExperience: requiredExperience,
      educationLevel: educationLevel,
      requiredSkills: requiredSkills,
      companyName: companyName,
      companyWebsite: companyWebsite
    })
    .then(() => {
      alert("Data added successfully!");
    })
    .catch((error) => {
      alert(error.message);
    });
  }
  
  return (
    <div>
      {/* <input value={jobTitle} onChange={(e) => {setName(e.target.value)}} placeholder="Name"></input> <br /> */}

      <h1>Add Job Data to Firebase</h1>

      <div className="formcontainer">
    
      <label>
        Job Title:
        <input type="text" value={jobTitle} onChange={event => setJobTitle(event.target.value)} />
      </label>

      <label>
        Job Description:
        <textarea value={jobDescription} onChange={event => setJobDescription(event.target.value)} />
      </label>

      <label>
        Job Location:
        <input type="text" value={jobLocation} onChange={event => setJobLocation(event.target.value)} />
      </label>

      <label>
        Job Type:
        <select value={jobType} onChange={event => setJobType(event.target.value)}>
          <option value="">Select a job type</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
          <option value="freelance">Freelance</option>
        </select>
      </label>

      <label>
        Salary Range:
        <input type="text" value={salaryRange} onChange={event => setSalaryRange(event.target.value)} />
      </label>
      
      <label>
        Job Category:
        <select value={jobCategory} onChange={event => setJobCategory(event.target.value)}>
          <option value="">Select a skill</option>
          {csSkills.map(skill => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </label>

      <label>
        Application Deadline:
        <input type="date" value={applicationDeadline} onChange={event => setApplicationDeadline(event.target.value)} />
      </label>

      <label>
        Education Level:
        <input type="text" value={educationLevel} onChange={event => setEducationLevel(event.target.value)} />
      </label>

      <label>
        Required Experience:
        <input type="text" value={requiredExperience} onChange={event => setRequiredExperience(event.target.value)} />
      </label>

      <label>
        Required Skills:
        <textarea value={requiredSkills} onChange={event => setRequiredSkills(event.target.value)} />
      </label>

      <label>
        Company Name:
        <input type="text" value={companyName} onChange={event => setCompanyName(event.target.value)} />
      </label>

      <label>
        Company Website:
        <input type="text" value={companyWebsite} onChange={event => setCompanyWebsite(event.target.value)} />
      </label>


      <button onClick={handleAdd}>Add Data</button>
      </div>
    </div>

  )
}

export default JobData
