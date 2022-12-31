import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
const Allservices = () => {
  return (
    <>
      <div className="pages">
        <div className="heading">
          <h2>All Services</h2>
        </div>
        <div className="heading-links">
          <a href="#">Tax - Accounting & Auditing</a>
          <a href="#">Merchant Account Online</a>
          <a href="#">Shelf Company</a>
          <a href="#">Serviced Office</a>
          <a href="#">Trademark Registration Service</a>
          <a href="#">Trust & Foundation Service</a>
          <a href="#">Business Licensing</a>
          <a href="#">Company Strike Off</a>
        </div>
      </div>
    </>
  );
};
export default Allservices;
