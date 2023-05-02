import React, { createContext, useState, useContext } from "react";

const BasicInfoContext = createContext();

const StatesProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("basicinfo");
  const [color, setColor] = useState("black");
  const [textcolor, settextcolor] = useState("black");
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };
  const handleTextColorChange = (e) => {
    settextcolor(e.target.value);
  };

  const [basicInfo, setBasicInfo] = useState({
    name: "Your Name",
    profession: "The role you are applying for?",
    address: "1234 Main St",
    city: "San Francisco",
    state: "CA",
    zip: "94111",
    phone: "123-456-7890",
    email: "mail@yourexample.com",
    img: "",
  });
  const [image, setImage] = useState([]);

  const [profile, setProfile] = useState(
    "Enter a brief description of your professional background. You can choose to highlight specific skills, knowledge or industry experience."
  );
  const [experience, setexperience] = useState([
    {
      position: "Resource Manager",
      company: "Microsoft",
      startyear: "2019",
      endyear: "2022",
      describe:
        "Implement effective company policies to ensure that all practices comply with labor and employment regulations .Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies. Monitor scheduled in and out times.",
    },
  ]);
  const addExperience = () => {
    const newExperience = {
      position: "",
      company: "",
      startyear: "",
      endyear: "",
      describe: "",
    };
    setexperience([...experience, newExperience]);
  };
  const deleteExperience = (index) => {
    const newExp = [...experience];
    newExp.splice(index, 1); // Use the splice method to remove the experience at the specified index
    setexperience(newExp);
  };

  const changeExperience = (e, index) => {
    const newExp = [...experience];
    newExp[index][e.target.name] = e.target.value;
    setexperience(newExp);
  };

  const [education, seteducation] = useState({
    schoolname: "St.Carmel School",
    schoollocation: "School Location",
    degreename: "Bachelor of Arts",
    degreefield: "Human Resources",
    schoolstartyear: "2012",
    schoolendyear: "2019",
    degreestartyear: "2015",
    degreeendyear: "2019",
  });
  const [skills, setSkills] = useState([""]);

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };
  const deleteSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const handleChangeSkill = (e, index) => {
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setSkills(newSkills);
  };

  const handlePrev = () => {
    if (currentPage === "skills") {
      seteducation({ ...education });
      setCurrentPage("education");
    } else if (currentPage === "education") {
      setexperience([...experience]);
      setCurrentPage("experience");
    } else if (currentPage === "experience") {
      setProfile(...profile);
      setCurrentPage("profile");
    } else if (currentPage === "profile") {
      setBasicInfo({ ...basicInfo });
      setCurrentPage("basicinfo");
    } else if (currentPage === "final") {
      navigate("/createresume");
      setCurrentPage("skills");
    }
  };
  return (
    <>
      <BasicInfoContext.Provider
        value={{
          image,
          setImage,
          currentPage,
          setCurrentPage,
          basicInfo,
          setBasicInfo,
          handlePrev,
          profile,
          setProfile,
          experience,
          setexperience,
          addExperience,
          deleteExperience,
          changeExperience,
          education,
          seteducation,
          skills,
          setSkills,
          handleAddSkill,
          deleteSkill,
          handleChangeSkill,
          color,
          setColor,
          handleTextColorChange,
          textcolor,
          handleColorChange,
        }}
      >
        {children}
      </BasicInfoContext.Provider>
    </>
  );
};
const useBasicInfo = () => {
  const context = useContext(BasicInfoContext);
  if (context === undefined) {
    throw new Error("useBasicInfo must be used within a BasicInfoProvider");
  }
  return context;
};
export { StatesProvider, useBasicInfo };
