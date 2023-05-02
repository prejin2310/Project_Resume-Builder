import React from "react";
import header from "./assets/svg.svg";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <>
      <div className="landingpage"></div>
      <div
        className="container main"
        style={{
          marginTop: window.innerWidth < 500 ? "3.3rem" : "7rem",
          marginBottom: "6rem",
        }}
      >
        <div className="row center my-3">
          <h1
            style={{
              fontSize: "4.4rem",
              hyphens: "auto",
              lineHeight: "5.5rem",
            }}
            className={`text-break center adb fw-bolder ${
              window.innerWidth < 500 && "d-none"
            }`}
          >
            Make an outstanding
            <div className="">
              <span className="color " style={{ fontSize: "4.4rem" }}>
                resume
              </span>{" "}
              for free in minutes.
            </div>
          </h1>
          {window.innerWidth < 500 && (
            <>
              <div className="header_main text-break adb ">
                <span className="center"> Make an outstanding</span>
                <div className="center">
                  <span className="">
                    {" "}
                    <span>resume&nbsp;</span>for free in minutes.
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="center fs-5 para_main my-2 pop">
          <span>
            Showcase yourself and your achievements with an impressive resume
            made with the
          </span>{" "}
          <span>
            free online resume maker from{" "}
            <span className="color">My Resume</span>
          </span>
        </div>
        <div className="hori">
    
          <Link
            to="/createresume"
            style={{ borderRadius: "4px" }}
            className="button shadow-btn bgcolorful text-white text-decoration-none px-5 pointer fs-5 py-3"
          >
            Create your resume
          </Link>
          <Link
            to="/landing"
            style={{ borderRadius: "4px" }}
            className="button shadow-btn bgcolorful text-white text-decoration-none px-5 pointer fs-5 py-3"
          >
            Get Job Recommendation
          </Link>
         
        </div>
      </div>
    </>
  );
};

export default LandingPage;