import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
const Accountopening = () => {
  return (
    <>
      <div className="pages">
        <div className="heading">
          <h2>Account Opening Consultancy</h2>
        </div>
        <div className="heading-links">
          <a href="#">Featured</a>
          <Link to="/account">How to Open Account</Link>
          <a href="#">Fees</a>
          <a href="#">Account Opening Requirements</a>
          <a href="#">FAQs</a>
          <a href="#">Download & Form</a>
        </div>
      </div>
    </>
  );
};
export default Accountopening;
