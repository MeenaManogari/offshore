import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
const Morepages = () => {
  return (
    <>
      <div className="pages">
        <div className="heading">
          <h2>News Update - About Us</h2>
        </div>
        <div className="heading-links">
          <a href="#">Promotion</a>
          <Link to="/aboutus">About Us</Link>
          <a href="#">Partnership & Intermediaries</a>
          <a href="#">Contact Us</a>
          <a href="#">Insights</a>
          <a href="#">FAQs</a>
          <a href="#">Career</a>
        </div>
      </div>
    </>
  );
};
export default Morepages;
