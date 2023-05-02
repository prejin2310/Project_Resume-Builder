import React from "react";
import "./Popup.css";

function Popup(props) {
  return (

<div className="row">
				<div className="col-sm-6 offset-sm-3">
					<div className="job-card">
						<div className="job-card__content">
							<div className="job-card__content-top">
								<div className="job-card_img">
									<img src="https://i.ibb.co/d6f711Z/company-logo-transparent-png-19.png" alt="Company Logo"/>
								</div>
								<div className="job-card_info">
									<a href="#!" className="float-right">
										<i className="fa fa-heart-o"></i>
									</a>
									<a href="#!" className="job-card_company">
										<h4 className="mb-1 d-inline-block">{job.companyName}</h4>
									</a>
									<p className="text-muted mb-0">{job.jobLocation}</p>
								</div>
							</div>
							<div className="job-card_content-mid">
								<h4>{job.jobTitle}</h4>
								<p className="mb-0">{job.salaryRange}</p>
								<div className="job-card_job-type">
									<span className="job-label">{job.jobType}</span>
									<span className="job-label">{props.deadline}</span>
									
								</div>
							</div>
						</div>
						
							<button className="btn btn-primary">Apply</button>
						</div>
					</div>
				</div>
			



    // <div className="popup-container">
    //   <div className="popup-content">
    //     <h2>{props.title}</h2>
    //     <p>{props.cmpname}</p>
    //     <p>{props.message}</p>
    //     <label>Location</label>  <p>{props.loc}</p>
    //     <label>Type</label>  <p>{props.type}</p>
    //     <label>Salary Range</label>  <p>{props.salary}</p>
    //     <label>Application Deadline</label>  <p>{props.deadline}</p>
    //     <label>Required Experience</label>  <p>{props.exp}</p>
    //     <label>Education Level</label>  <p>{props.education}</p>
    //     <label>Required Skills</label>  <p>{props.skills}</p>
    //     <button  className="close-button" onClick={props.onClose} style={{backgroundColor: 'red'}}>Close <i className="fas fa-times"></i></button>
    //   </div>
    // </div>
  );
}

export default Popup;
