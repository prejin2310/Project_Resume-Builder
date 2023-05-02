import React from "react";
import { useBasicInfo } from "../Context/StatesProvider";

const Skills = () => {
  const { skills, handleAddSkill, handleChangeSkill, deleteSkill } =
    useBasicInfo();

  return (
    <div className="skills_holder ">
      <h2 className="colorh pop">Key Skills</h2>
      <p className="text-muted">
        Add relevant professional key skills and proficiencies.
      </p>
      {skills.map((skill, index) => (
        <div key={index} className="form-group">
          <div className="row justify-content-between">
            <div className="col-8">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  id={`skill-${index}`}
                  className="form-control px-3 "
                  value={skill}
                  onChange={(e) => handleChangeSkill(e, index)}
                />
                <label htmlFor={`skill-${index}`} className="pop mx-2">
                  Skill {index + 1}
                </label>
              </div>
            </div>
            <div className="col-2">
              {" "}
              <div className="delete position-relative my-3">
                <button
                  onClick={() => deleteSkill(index)}
                  title="Delete Experience"
                  style={{ borderRadius: "4px" }}
                  className="button bgcolorful text-white px-3 shadow-btn pointer py-2"
                >
                  <i className="fa-solid text-white pointer fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <br />
      <button
        title="Add More Skills?"
        onClick={handleAddSkill}
        style={{ borderRadius: "4px" }}
        className="button bgcolorful text-white px-3 shadow-btn pointer py-2 mx-2"
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default Skills;
