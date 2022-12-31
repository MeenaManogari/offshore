import React, { useEffect, useState, useRef } from "react";
//import { Link } from "react-router-dom";
import down from "../../assets/icons/feature_icons/chevron-down.svg";

const Servicedrop = () => {
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
        All Services
        <img className={toggle && "active"} src={down} alt="" />
      </button>
      {toggle && (
        <div className="drop_links" aria-hidden={toggle ? "true" : "false"}>
          <a href="#">Tax-Accounting&Auditing</a>
          <a href="#">MerchantAccountOnline</a>
          <a href="#">ShelfCompany</a>
          <a href="#">Serviced Office</a>
          <a href="#">TrademarkRegistrationService</a>
          <a href="#">Trust&Foundation Service</a>
          <a href="#">Business Licensing</a>
          <a href="#">Company Strike Off</a>
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
export default Servicedrop;
