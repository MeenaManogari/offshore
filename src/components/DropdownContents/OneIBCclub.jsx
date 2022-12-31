import React from "react";
import { Link } from "react-router-dom";
import "./Dropdown.css";
const Oneibc = () => {
  return (
    <>
      <div className="pages">
        <div className="heading">
          <h2>
            One IBC Club<sup>TM</sup>
          </h2>
        </div>
        <div className="heading-links">
          <Link to="/member">Member Benefits</Link>
          <Link to="/member">Tiers and Benefits</Link>
          <Link to="/member">How it works</Link>
        </div>
      </div>
    </>
  );
};
export default Oneibc;
