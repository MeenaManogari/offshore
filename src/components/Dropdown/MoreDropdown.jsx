import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import down from "../../assets/icons/feature_icons/chevron-down.svg";

const Moredrop = () => {
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
        More
        <img className={toggle && "active"} src={down} alt="" />
      </button>
      {toggle && (
        <div className="drop_links" aria-hidden={toggle ? "true" : "false"}>
          <a href="#">Promotion</a>
          <Link to="/aboutus">AboutUs</Link>
          <a href="#">Partnership</a>
          <a href="#">ContactUs</a>
          <a href="#">Insights</a>
          <a href="#">FAQs</a>
          <a href="#">Career</a>
        </div>
      )}
    </div>
  );
  return (
    <>
      <div>{sidebar}</div>
    </>
  );
};
export default Moredrop;
