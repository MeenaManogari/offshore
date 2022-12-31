import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
const Companyformation = () => {
  return (
    <>
      <div className="pages">
        <div className="heading">
          <h2>Company Formation</h2>
        </div>
        <div className="heading-links">
          <Link to="/features">Featured</Link>
          <Link to="/jurisdiction">Jurisdictions</Link>
          <Link to="/howtosetup">How To Set Up</Link>
          <a href="#">Fees</a>
          <a href="#">Nominee</a>
          <Link to="/changeagent">Change Agent</Link>
          <a href="#">Company Renewal</a>
          <a href="#">FAQs</a>
          <a href="#">Download & Form</a>
        </div>
      </div>
    </>
  );
};
export default Companyformation;
