import React, { useState } from "react";
import { useBasicInfo } from "../Context/StatesProvider";

const Experience = () => {
  const { experience, addExperience, changeExperience, deleteExperience } =
    useBasicInfo();

  return (
    <>
      {/* -----------Professional Experience-------- */}
      <div className="professional_experience">
        <div className="professional_experience_header px-3">
          <h2 className="colorh">Professional Experience</h2>
          <p>Add your most recent job and continue in descending order.</p>
          {experience.map((exp, index) => (
            <div key={index} className="row my-4 ">
              <div className="d-flex mb-3 align-items-center justify-content-between">
                <span className="text-dark fs-5 ">Experience {index + 1}</span>
                <button
                  onClick={() => deleteExperience(index)}
                  title="Delete Experience"
                  style={{ borderRadius: "4px" }}
                  className="button bgcolorful text-white px-3 shadow-btn pointer py-2"
                >
                  <i className="fa-solid text-white pointer fa-trash"></i>
                </button>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => {
                      changeExperience(e, index);
                    }}
                    type="text"
                    className="form-control"
                    id="position"
                    name="position"
                    placeholder="Position"
                    // value={exp.position}
                  />
                  <label htmlFor="position"> Position</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => {
                      changeExperience(e, index);
                    }}
                    type="text"
                    className="form-control"
                    id="startyear"
                    name="startyear"
                    placeholder="Start Year"
                    // value={exp.startyear}
                  />
                  <label htmlFor="startyear">Start Year</label>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => {
                      changeExperience(e, index);
                    }}
                    type="text"
                    className="form-control"
                    id="company"
                    name="company"
                    placeholder="Company Name"
                    // value={exp.company}
                  />
                  <label htmlFor="company">Company Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    onChange={(e) => {
                      changeExperience(e, index);
                    }}
                    type="no"
                    className="form-control"
                    id="endyear"
                    name="endyear"
                    placeholder="End Year"
                    // value={exp.endyear}
                  />
                  <label htmlFor="endyear">End Year</label>
                </div>
              </div>
              <div className="row ps-4">
                <textarea
                  style={{ width: "100%" }}
                  rows={5}
                  onChange={(e) => {
                    changeExperience(e, index);
                  }}
                  className="form-control"
                  placeholder="Desribe your work experience"
                  id="describe"
                  name="describe"
                  // value={exp.describe}
                ></textarea>
              </div>
            </div>
          ))}
          <button
          title="Add More Experience?"
            onClick={addExperience}
            style={{ borderRadius: "4px" }}
            className="button bgcolorful text-white px-3 shadow-btn pointer py-2"
          >
            <i className="fa-solid fa-plus"></i>
          </button>

          <br />
        </div>
      </div>
    </>
  );
};

export default Experience;
