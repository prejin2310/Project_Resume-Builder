import React, { useRef, forwardRef, useState } from "react";
import { useBasicInfo } from "./Context/StatesProvider";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import ReactToPrint from "react-to-print";


const Preview = forwardRef((props, ref) => {
  const {
    basicInfo,
    profile,
    experience,
    education,
    textcolor,
    skills,
    color,
    image,
  } = useBasicInfo();

  return (
    <div ref={ref}>
      <div
        className="final px-4 py-4"
        style={{
          height: "100%",
        }}
      >
        {/* ------Header--------- */}
        <div className="preview_header row my-3 ">
          <div className="col-2 center">
            <div
              className="center img-fluid final_image"
              style={{
                borderRadius: "70%",
                overflow: "hidden",
                height: "5.5rem",
                width: "5.5rem",
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
          <div className="col-6 lib header_left  d-flex flex-wrap flex-column">
            <div
              className="resume_name fs-1 text-wrap text-capitalize "
              style={{ color: color }}
            >
              {basicInfo.name}
            </div>
            <div className="resume_profession pop fs-5 ms-1 text-start text-wrap text-capitalize">
              {basicInfo.profession}
            </div>
          </div>

          <div className="col-4 center">
            <div
              className="final_address d-flex flex-column flex-wrap pop"
              style={{ color: color }}
            >
              <div className="address text-wrap fs-6">{basicInfo.address}</div>
              <div className="city_pincode text-wrap fs-6">
                {basicInfo.city +
                  " , " +
                  basicInfo.state +
                  " , " +
                  basicInfo.zip}
              </div>
              <div className="email text-wrap fs-6">{basicInfo.email}</div>
              <div className="phone text-wrap fs-6">{basicInfo.phone}</div>
            </div>
          </div>
        </div>
        {/* -----------Profile -------------- */}
        <div className="final_profile">
          <p
            className="text-wrap profile_text px-2 text-capitalize"
            style={{ fontSize: ".9rem", color: textcolor }}
          >
            {profile}
          </p>
        </div>
        {/* <hr /> */}
        {/* --------Professional Expreience ------ */}
        <div className="final_experience px-2">
          <div className="professional_experience_header text-capitalize">
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
                    <div className="col-5 ms-1" style={{ fontWeight: "500" }}>
                      {exp.position}
                    </div>
                    <div className="col-6">
                      <div className="text-wrap d-flex flex-wrap text-muted ">
                        {exp.company} | {exp.startyear} - {exp.endyear}
                      </div>
                    </div>
                  </div>
                  <div
                    className="row d-flex flex-wrap  text-wrap px-3  mb-3 text-capitalize"
                    style={{ fontSize: ".9rem", color: textcolor }}
                  >
                    {exp.describe}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* -----------Education --------------- */}
        <div className="education px-2 my-4">
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
              <div className="col-2 center " style={{ fontWeight: "500" }}>
                School
              </div>
              <div className="col-10">
                <span className="text-wrap d-flex flex-wrap text-muted ">
                  {education.schoolname} at {education.schoollocation} |{" "}
                  {education.schoolstartyear} - {education.schoolendyear}
                </span>
              </div>
            </div>
            {/* College */}
            <div className="row my-2">
              <div className="col-2 center " style={{ fontWeight: "500" }}>
                Degree
              </div>
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
        <div className="skills px-2 my-3">
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
                    className={`text-capitalize`}
                    style={{ fontSize: "1rem", color: textcolor }}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const Final = () => {
  const navigate = useNavigate();
  const componentRef = useRef();

  const {
    setCurrentPage,
    handleColorChange,
    handleTextColorChange,
    color,
    setImage,
  } = useBasicInfo();

  const handleBack = () => {
    setCurrentPage("skills");
    navigate("/createresume");
  };

  return (
    <>
      <div className="container final my-3">
        <h5 className="adb display-5 center color">Final Preview</h5>
        <div className="row d-flex justify-content-around final_row ">
          <div
            className="col-lg-7  col-sm-12 "
            style={{ border: "2px solid #e5e5e5" }}
          >
            <Preview ref={componentRef} />
          </div>
          {/* ---------Customize --------*/}
          <div className="col-lg-4 final_customize  position-relative">
            <h5 className="lib my-3">
              Choose your favourite <span className="fw-bold">" Profile "</span>{" "}
              image
            </h5>
            {/* --------------- image --------------- */}
            <label
              htmlFor="image"
              className="u-f-b bgcolorful text-white pop fw-bold mx-2 shadow-btn"
            >
              <i className="fas fa-circle-plus p-2"></i>
              Change Image
              <input
                onChange={(e) => {
                  setImage(URL.createObjectURL(e.target.files[0]));
                }}
                type="file"
                className="form-control u-f-b"
                id="image"
                name="image"
                placeholder="Image"
              />
            </label>
            <h5 className="lib my-3">
              Choose your favourite <span className="fw-bold">" Heading "</span>{" "}
              Color
            </h5>
            <input
              title="Choose Heading Color"
              type="color"
              style={{ height: "2.2rem", width: "4rem" }}
              className="pointer ms-2"
              onChange={handleColorChange}
            />
            <h5 className="lib my-3">
              Choose your Favourite <span className="fw-bold">" Text "</span>{" "}
              Color
            </h5>
            <input
              title="Choose Heading Color"
              type="color"
              style={{ height: "2.2rem", width: "4rem" }}
              className="pointer ms-2"
              onChange={handleTextColorChange}
            />
            {/* -------Buttons--------- */}
            <div
              className="row d-flex my-2 justify-content-around my-5 position-absolute"
              style={{right: "3rem" }}
            >
              <div className="col-5 center">
                <button
                  style={{ borderRadius: "4px" }}
                  className="button bgcolorful text-white px-3 shadow-btn pointer py-2"
                  onClick={handleBack}
                >
                  Back
                </button>
              </div>
              <div className="col-5 center">
                <ReactToPrint
                  trigger={() => (
                    <button className="button bgcolorful text-white px-3 shadow-btn pointer py-2">
                      Download
                    </button>
                  )}
                  content={() => componentRef.current}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Final;
