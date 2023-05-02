import React, { useEffect } from "react";
import { useBasicInfo } from "../Context/StatesProvider";
import logo from "../assets/logo.webp";

const Preview = () => {
  const { basicInfo, profile, experience, education, skills, image, color } =
    useBasicInfo();

  return (
    <div
      className="preview_holder bg-white p-3"
      style={{
        height: "700px",
        overflowY: "scroll",
        border: "2px solid #e5e5e5",
      }}
    >
      {/* ------Header--------- */}
      <div className="preview_header row my-3 ">
        <div className="col-2 center">
          <div
            className="center preview_image ms-1 img-fluid "
            style={{
              borderRadius: "70%",
              overflow: "hidden",
              height: "4rem",
              width: "4rem",
            }}
          >
            <img
              src={
                image.length === 0
                  ? "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  : image
              }
              className="img-fluid"
              alt="img"
            />
          </div>
        </div>
        <div
          className="col-6 lib header_left d-flex flex-wrap flex-column"
          style={{ color: color }}
        >
          <div className="resume_name text-wrap text-capitalize">
            {basicInfo.name}
          </div>
          <div
            className="resume_profession text-start pop ms-1 text-wrap text-capitalize"
            style={{ color: color }}
          >
            {basicInfo.profession}
          </div>
        </div>

        <div className="col-4 center">
          <div className="address_area fs-8 d-flex  text-muted flex-column flex-wrap">
            <div className="address text-wrap">{basicInfo.address}</div>
            <div className="city_pincode text-wrap">
              {basicInfo.city + " , " + basicInfo.state + " , " + basicInfo.zip}
            </div>
            <div className="email text-wrap">{basicInfo.email}</div>
            <div className="phone text-wrap">{basicInfo.phone}</div>
          </div>
        </div>
      </div>
      {/* -----------Profile -------------- */}
      <div className="profile">
        <p
          className="text-wrap profile_text px-1 text-capitalize "
          style={{ fontSize: ".8rem" }}
        >
          {profile}
        </p>
      </div>
      {/* --------Professional Expreience ------ */}
      <div className="professional_experience">
        <div className="professional_experience_header">
          <h2
            className="lib fw-bold"
            style={{
              fontSize: "1rem",
              borderBottom: `2px solid ${color}`,
              color: color,
            }}
          >
            Professional Experience
          </h2>
          {experience.map((exp, id) => {
            return (
              <div key={id}>
                <div className="row my-2">
                  <div className="col-5 text-capitalize ms-2 text-muted" style={{fontWeight:"500"}}>
                    {exp.position}
                  </div>
                  <div className="col-6 ">
                    <div className="text-wrap d-flex flex-wrap text-muted text-capitalize">
                      {exp.company} | {exp.startyear} - {exp.endyear}
                    </div>
                  </div>
                </div>
                <div
                  className="row d-flex flex-wrap text-wrap px-3 mb-3 text-capitalize"
                  style={{ fontSize: ".8rem" }}
                >
                  {exp.describe}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* -----------Education --------------- */}
      <div className="education">
        <div className="education_header text-capitalize">
          <h2
            className="lib fw-bold"
            style={{
              fontSize: "1rem",
              borderBottom: `2px solid ${color}`,

              color: color,
            }}
          >
            Education
          </h2>
          {/* School */}
          <div className="row mt-2">
            <div className="col-2 center text-muted" style={{fontWeight:"500"}}>School</div>
            <div className="col-10">
              <span className="text-wrap d-flex flex-wrap text-muted ">
                {education.schoolname} at {education.schoollocation} |{" "}
                {education.schoolstartyear} - {education.schoolendyear}
              </span>
            </div>
          </div>
          {/* College */}
          <div className="row my-2">
            <div className="col-2 center text-muted" style={{fontWeight:"500"}}>Degree</div>
            <div className="col-10">
              <span className="text-wrap d-flex flex-wrap text-muted ">
                {education.degreename} in {education.degreefield} |{" "}
                {education.degreestartyear} - {education.degreeendyear}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* ------- SKills -------- */}
      <div className="skills mt-3">
        <div className="skills_header">
          <h2
            className="lib fw-bold"
            style={{
              fontSize: "1rem",
              borderBottom: `2px solid ${color}`,

              color: color,
            }}
          >
            Key Skills
          </h2>
          <div className="skills_list">
            <ul>
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="text-muted text-capitalize"
                  style={{ fontSize: "1rem" }}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
