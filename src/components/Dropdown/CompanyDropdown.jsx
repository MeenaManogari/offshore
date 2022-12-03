import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import down from "../../assets/icons/feature_icons/chevron-down.svg";

const Companydrop = () => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();
  const refHeight = useRef();
  useEffect(() => {
    setHeightEl(`${refHeight.current}px`);
  }, []);
  const toggleState = () => {
    setToggle(!toggle);
  };
  const sidebar = (
    <div className="drop">
      <button className="btn_visible" onClick={toggleState}>
        Company Formation
        <img className={toggle && "active"} src={down} alt="" />
      </button>
      <div
        className={toggle ? "accordion-toogle animated " : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <div className="drop_links" aria-hidden={toggle ? "true" : "false"}>
          <Link to="/features">Featured</Link>
          <Link to="/jurisdiction">Jurisdictions</Link>
          <Link to="/howtosetup">How To Setup</Link>
          <a href="#">Fees</a>
          <a href="#">Nominee</a>
          <a href="#">Change Agent</a>
          <a href="#">Company Renewal</a>
          <a href="#">FAQs</a>
          <a href="#">Download&Form</a>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div>{sidebar}</div>
    </>
  );
};
export default Companydrop;
