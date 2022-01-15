import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const EditUserDetails = () => {
  return (
    <>
      <div className="PersonalDetails">
        <div className="btn fs-4 fw-bold">
          <Link className="nav-link text-light" to="/editDetails">
            Edit Personal Details
          </Link>
        </div>
        <div className="btn fs-4 fw-bold">
          <Link className="nav-link text-light" to="/editEducation">
            Edit Education
          </Link>
        </div>
        <div className="btn fs-4 fw-bold">
          <Link className="nav-link text-light" to="/editExperience">
            Edit Experience
          </Link>
        </div>
        <div className="btn fs-4 fw-bold">
          <Link className="nav-link text-light" to="/editSkills">
            Edit Skills
          </Link>
        </div>
      </div>
    </>
  );
};

export default EditUserDetails;
