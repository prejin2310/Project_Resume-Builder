import React from "react";
import logo from "./assets/hs.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="py-3 nav">
      <div className="container ">
        <div style={{borderBottom:"3px solid #472183"}} className="row py-2 justify-content-between ">
          <div
            className={`col-${
              window.innerWidth < 500 ? "12" : "4"
            } center d-flex `}
          >
            <div
              className="image"
              style={{
                width: "3rem",
                height: "3rem",
              }}
            >
              {/* <img
                className="img-fluid"
                style={{ borderRadius: "50%" }}
                src={logo}
                alt=""
              /> */}
            </div>
            <span className="adb color pointer fw-bolder fs-3 mx-4">
              <Link to="/">My Resume</Link>
            </span>
          </div>
          <div
            className={`col-6 position-relative center ${
              window.innerWidth < 500 ? "d-none" : ""
            }`}
          >
            <div
              style={{
                right: "3rem",
                position: "absolute",
                alignItems: "center",
              }}
              className="row"
            >
              <div className="col-6">
                <span className="pointer pop">Find_Job</span>
              </div>
              <div className="col-6">
                <span className="pointer pop">Resume</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default Navbar;
