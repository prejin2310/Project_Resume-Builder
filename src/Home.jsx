import React from "react";
import BasicInfo from "./components/BasicInfo";
import Preview from "./components/Preview";
import { useBasicInfo } from "./Context/StatesProvider";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import { Link, useNavigate } from "react-router-dom";
import Final from "./Final";

const Home = () => {
  const { currentPage, setCurrentPage, handlePrev } = useBasicInfo();
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentPage === "basicinfo") {
      setCurrentPage("profile");
    } else if (currentPage === "profile") {
      setCurrentPage("experience");
    } else if (currentPage === "experience") {
      setCurrentPage("education");
    } else if (currentPage === "education") {
      setCurrentPage("skills");
    } else if (currentPage === "skills") {
      navigate("/final");
      setCurrentPage("final");
    } else if (currentPage === "final") {
      setCurrentPage("skills");
    }
  };

  return (
    <>
      {/* <div className="landingpage"></div> */}
      <div
        className={`container my-2 mb-5 ${
          window.innerWidth < 500 && "position-relative"
        }`}
      >
        <div className="row d-flex home_row py-2 justify-content-between  ">
          <div
            className="col-lg-5 home_preview_holder col-sm-12"
          >
            {/* ----------Preview---------- */}

            <Preview />
          </div>
          <div
            className={`col-lg-7 px-4 bg-white col-sm-12  ${
              window.innerWidth > 500 && "position-relative"
            }`}
          >
            <div className="editor">
              {/* ------------Basic Info--------- */}
              {currentPage === "basicinfo" && (
                <BasicInfo handleNext={handleNext} />
              )}
              {/* ------------profile--------- */}
              {currentPage === "profile" && <Profile handleNext={handleNext} />}
              {/* --------Experience------ */}
              {currentPage === "experience" && (
                <Experience handleNext={handleNext} />
              )}
              {/* ----------Edcuation-------- */}
              {currentPage === "education" && (
                <>
                  <Education handleNext={handleNext} />
                </>
              )}
              {/* ------------Skills--------- */}
              {currentPage === "skills" && <Skills handleNext={handleNext} />}
            </div>
            <div
              className="row d-flex navigate position-absolute my-2 align-items-center"
              style={{ bottom: "3rem", right: "4rem" }}
            >
              {currentPage === "basicinfo" && (
                <div className="col-6">
                  <Link
                    to={"/"}
                    style={{ borderRadius: "4px" }}
                    className="button text-decoration-none bgcolorful text-white px-3 shadow-btn pointer py-2"
                  >
                    Home
                  </Link>
                </div>
              )}
              {currentPage !== "basicinfo" && (
                <div className="col-6">
                  <button
                    style={{ borderRadius: "4px" }}
                    className="button bgcolorful text-white px-3 shadow-btn pointer py-2"
                    onClick={handlePrev}
                  >
                    Back
                  </button>
                </div>
              )}
              <div className="col-6">
                <button
                  style={{ borderRadius: "4px" }}
                  className="button bgcolorful text-white px-3 shadow-btn pointer py-2"
                  onClick={handleNext}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
