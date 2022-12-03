import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import down from "../../assets/icons/feature_icons/chevron-down.svg";

const Ibcdrop = () => {
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
        One IBC Club<sup>TM</sup>
        <img className={toggle && "active"} src={down} alt="" />
      </button>
      <div
        className={toggle ? "accordion-toogle animated " : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <div className="drop_links" aria-hidden={toggle ? "true" : "false"}>
          <Link to="/member">Member Benefits</Link>
          <Link to="/member">Tiers and Benefits</Link>
          <Link to="/member">How it works</Link>
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
export default Ibcdrop;
