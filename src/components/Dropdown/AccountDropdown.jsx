import React, { useEffect, useState, useRef } from "react";
import "./hamdropdown.css";
import { Link } from "react-router-dom";
import down from "../../assets/icons/feature_icons/chevron-down.svg";

const Accountdrop = () => {
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
        Account Opening Consultancy
        <img className={toggle && "active"} src={down} alt="" />
      </button>
      {toggle && (
        <div className="drop_links" aria-hidden={toggle ? "true" : "false"}>
          <a href="#">Featured</a>
          <Link to="/account">How to OpenAccount</Link>
          <a href="#">Fees</a>
          <a href="#">Account Opening Requirements</a>
          <a href="#">FAQs</a>
          <a href="#">DownloadForm</a>
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
export default Accountdrop;
