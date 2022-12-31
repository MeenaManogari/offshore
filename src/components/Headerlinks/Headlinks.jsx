import React, { useState } from "react";
import "./Headlinks.css";

import Accountdrop from "../Dropdown/AccountDropdown";
import Servicedrop from "../Dropdown/ServiecsDropdown";
import Ibcdrop from "../Dropdown/OneIBCdropdown";
import Moredrop from "../Dropdown/MoreDropdown";
import Companydrop from "../Dropdown/CompanyDropdown";
import dewall from "../../assets/images/home/dewall_logo.png";
import search from "../../assets/icons/Headericons/header-search.svg";
import Companyformation from "../DropdownContents/CompanyFormation";
import Accountopening from "../DropdownContents/AccountOpeningConsultancy";
import Allservices from "../DropdownContents/AllServices";
import Oneibc from "../DropdownContents/OneIBCclub";
import Morepages from "../DropdownContents/More";
import ham from "../../assets/icons/Headericons/header-ham.png";
import cancel from "../../assets/icons/Headericons/header-cancel.png";

const Headlinks = () => {
  const [sidebarIsOn, setSidebarState] = useState(false);
  const hamburger = (
    <>
      {!sidebarIsOn ? (
        <img
          src={ham}
          className="hamburger"
          onClick={(e) => {
            e.preventDefault();
            setSidebarState(true);
          }}
        />
      ) : (
        <img
          src={cancel}
          className="hamburger"
          onClick={(e) => {
            e.preventDefault();
            setSidebarState(false);
          }}
        />
      )}
    </>
  );

  const sidebar = (
    <div className="sidebar">
      <div className="sidebar_content">
        <div className="drop">
          <Companydrop />
        </div>

        <div className="drop">
          <Accountdrop />
        </div>

        <div className="drop">
          <Servicedrop />
        </div>

        <div className="drop">
          <Ibcdrop />
        </div>

        <div className="drop">
          <button className="btn_visible">
            One IBC<sup>TM</sup>Digital App
          </button>
        </div>

        <div className="drop">
          <Moredrop />
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="head-links">
        <div className="logo">
          <a href="#">
            <img src={dewall} alt="logo" height="60px" width="200px" />
          </a>
        </div>
        <div className="page-links">
          <div className="company_drops">
            <button className="btn_visible">Company Formation</button>
            <div className="company_content">
              <Companyformation />
            </div>
          </div>
          <div className="AOC_drops">
            <button className="btn_visible">Account Opening Consultancy</button>
            <div className="AOC_content">
              <Accountopening />
            </div>
          </div>
          <div className="service_drops">
            <button className="btn_visible">All Services</button>
            <div className="service_content">
              <Allservices />
            </div>
          </div>
          <div className="IBC_drops">
            <button className="btn_visible">
              One IBC Club<sup>TM</sup>
            </button>
            <div className="ibc_content">
              <Oneibc />
            </div>
          </div>
          <div className="app_drops">
            <button>
              One IBC<sup>TM</sup>Digital App
            </button>
          </div>
          <div className="more_drops">
            <button className="btn_visible">More</button>
            <div className="more_content">
              <Morepages />
            </div>
          </div>
        </div>
        <div className="ham-search">
          <div>
            {hamburger}
            {sidebarIsOn && sidebar}
          </div>
          <div className="search">
            <button>
              <img src={search} alt="search" />
            </button>
            <button id="setup">Set Up Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Headlinks;
