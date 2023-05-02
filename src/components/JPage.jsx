import React, { useState, useEffect } from "react";
import { dataref } from "./firebase";
import "./JPage.css";
import Popup from "./Popup";
import JobSuggestion from "./JobSuggestion";

const JPage = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null); // State to keep track of the selected job

  useEffect(() => {
    const fetchData = async () => {
      const response = await dataref.ref().once("value");
      const data = response.val();
      const jobsArray = [];

      for (let key in data) {
        for (let jobKey in data[key]) {
          jobsArray.push(data[key][jobKey]);
        }
      }

      setJobs(jobsArray);
    };

    fetchData();
  }, []);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  return (
    <div className="jpage">
        <JobSuggestion/>
      <header>
        <h1>Latest Job Vaccancy</h1>
      </header>
      <div className="job-cards">
        {jobs.map((job) => {
          const sentences = job.jobDescription.split(/(?<=\.|\?|\!)\s/); // Split job description into an array of sentences
          const firstSentence = sentences.slice(0, 2).join(" "); // Get the first two sentence

          return (
            
            <div key={job.jobTitle} className="job-card">
              <h3 style={{color: "#2F58CD"}}>{job.jobTitle}</h3> 
              <div className="horizontal-container">
                <label>At </label>
                <bold><p>{job.companyName}</p></bold> <label>in </label>
                <p>{job.jobLocation}</p>
            </div>
              <i><p style={{color: "#567189"}}>{firstSentence}</p></i> {/* Only show the first sentence */}
              
              <div className='icon'> 
              <bold>
             <div className='icon-label'> <p>{job.jobType}</p></div> 
             </bold>
             </div>
             <div className='icon'> 
              <bold>Salary: </bold>
             <div className='icon-salary'> <p>{job.salaryRange}</p> </div>
             <bold>Last Date: </bold>
             <div className='icon-dead'><p>{job.applicationDeadline}</p> </div>
             </div>

              <a href={job.companyWebsite} target="_blank" rel="noopener noreferrer">
                <button>Apply</button>
              </a>
              <button className="close-button" onClick={() => handleJobSelect(job)}>View More</button> {/* Show popup with full job description */}
            </div>
          );
        })}
      </div>
      {selectedJob && (
        <Popup
          title={selectedJob.jobTitle}
          message={selectedJob.jobDescription}
          loc={selectedJob.jobLocation}
          type={selectedJob.jobType}
          salary={selectedJob.salaryRange}
          deadline={selectedJob.applicationDeadline}
          exp={selectedJob.requiredExperience}
          education={selectedJob.educationLevel}
          skills={selectedJob.requiredSkills}
          cmpname={selectedJob.companyName}
          onClose={() => setSelectedJob(null)}
        />
      )}
    </div>
  );
};

export default JPage;
