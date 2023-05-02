import { useState, useEffect } from "react";
import { dataref } from "./firebase";
import './jobCard.css';

const JobSuggestion = () => {
  const [jobCategory, setJobCategory] = useState("");
  const [jobs, setJobs] = useState([]);

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

  useEffect(() => {
    if (jobCategory) {
      // Fetch data from Firebase that matches the selected job category
      const unsubscribe = dataref.ref(jobCategory).on("value", (snapshot) => {
        const jobList = [];
        snapshot.forEach((childSnapshot) => {
          const jobData = childSnapshot.val();
          jobList.push(jobData);
        });
        setJobs(jobList);
      });
      return () => unsubscribe();
    }
  }, [jobCategory]);

  return (
    <div>
      <label>
        <h3>Explore the Latest Openings in Your Field</h3>
        <select value={jobCategory} onChange={(event) => setJobCategory(event.target.value)}>
          <option value="">Select your skill</option>
          {csSkills.map((skill) => (
            <option key={skill} value={skill}>
              {skill}
            </option>
          ))}
        </select>
      </label>
      <div className="job-cards">
        {jobs.map((job) => (
          <div key={job.jobTitle} className="job-card">
            <h3>{job.jobTitle}</h3>
            <p>{job.jobDescription}</p>
            <p>{job.jobLocation}</p>
            <p>{job.jobType}</p>
            <p>{job.salaryRange}</p>
            <p>{job.applicationDeadline}</p>
            <p>{job.requiredExperience}</p>
            <p>{job.educationLevel}</p>
            <p>{job.requiredSkills}</p>
            <p>{job.companyName}</p>
            {job.companyWebsite && (
        <button onClick={() => window.location.href = job.companyWebsite}>
          Apply
        </button>
      )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSuggestion;
