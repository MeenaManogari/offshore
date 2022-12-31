import React from "react";
import logo from "../../assets/images/home/dewall_logo.png";
import call from "../../assets/icons/phoneicon.svg";
import user from "../../assets/icons/usericon.svg";
import notify from "../../assets/icons/notifyicon.svg";
import search from "../../assets/icons/searchicon.svg";
import ham from "../../assets/icons/icon-bar-ham.png";
import cancel from "../../assets/icons/icon-bar-cancel.png";
import "./Header.css";
import "../../App.css";

import Accountdrop from "../Dropdown/AccountDropdown";
import Servicedrop from "../Dropdown/ServiecsDropdown";
import Ibcdrop from "../Dropdown/OneIBCdropdown";
import Moredrop from "../Dropdown/MoreDropdown";
import Companydrop from "../Dropdown/CompanyDropdown";
import indiaflag from "../../assets/icons/indiaflag.png";
import usflag from "../../assets/icons/usicon.png";
const Header = () => {
  const [sidebarIsOn, setSidebarState] = React.useState(false);

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
    // </div>
  );

  return (
    <>
      <div className="navbar">
        <div className="contacts">
          <img src={call} width="25px" height="25px" />
          <p>
            Customer Services:<span> +852 5804 3919</span> or
            <span> +65 6591 9991</span>
          </p>
        </div>
        <div className="headlinks">
          <div className="headdropdown">
            <button className="headdropbtn">
              <img src={indiaflag} alt="" />
              india <i class="fa fa-caret-down"></i>
            </button>
            <div class="headdropdown-content">
              <a href="#">Afghanistan</a>
              <a href="#">Algeria</a>
              <a href="#">Australia</a>
              <a href="#">Belgium</a>
              <a href="#">UK</a>
              <a href="#">USA</a>
            </div>
          </div>
          <div className="headdropdown">
            <button className="headdropbtn">
              English
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="headdropdown-content">
              <a href="#">English</a>
              <a href="#">বাংলা</a>
              <a href="#">हिन्दी</a>
              <a href="#">Telugu</a>
              <a href="#">Marathi</a>
              <a href="#">Gujarati</a>
              <a href="#">Kannada</a>
              <a href="#">Odiya(Oriya)</a>
              <a href="#">Malayalam</a>
            </div>
          </div>
          <div className="headdropdown">
            <button className="headdropbtn">
              <img src={usflag} alt="" />
              USD<i class="fa fa-caret-down"></i>
            </button>
            <div class="headdropdown-content">
              <input type="search" />
              <a href="#">AED</a>
              <a href="#">EUR</a>
              <a href="#">GBP</a>
              <a href="#">HKD</a>
              <a href="#">SGD</a>
              <a href="#">USD</a>
              <a href="#">VND</a>
            </div>
          </div>
          <button>
            <img src={notify} />
          </button>
          <button>
            <img src={user} />
          </button>
        </div>
      </div>
      <div className="border"></div>
      <div className="navlink">
        <button>
          <img src={logo} width="200px" height="80px" />
        </button>
        <div className="linkdropdown">
          <button className="linkdropbtn">
            Company Formation<i class="fa fa-caret-down"></i>
          </button>

          <div class="linkdropdown-content">
            <Link to="/features">Featured</Link>
            <Link to="/jurisdiction">Jurisdictions</Link>
            <Link to="/howtosetup">How To Setup</Link>
            <a href="#">Fees</a>
            <a href="#">Nominee</a>
            <Link to="/changeagent">Change Agent</Link>
            <a href="#">Company Renewal</a>
            <a href="#">FAQs</a>
            <a href="#">Download&Form</a>
          </div>
        </div>
        <div className="linkdropdown">
          <button className="linkdropbtn">Account Opening Consultancy</button>
          <div class="linkdropdown-content">
            <a href="#">Featured</a>
            <Link to="/account">How to OpenAccount</Link>
            <a href="#">Fees</a>
            <a href="#">Account Opening Requirements</a>
            <a href="#">FAQs</a>
            <a href="#">DownloadForm</a>
          </div>
        </div>
        <div className="linkdropdown">
          <button className="linkdropbtn">All Services</button>
          <div class="linkdropdown-content">
            <a href="#">Tax-Accounting&Auditing</a>
            <a href="#">MerchantAccountOnline</a>
            <a href="#">ShelfCompany</a>
            <a href="#">Serviced Office</a>
            <a href="#">TrademarkRegistrationService</a>
            <a href="#">Trust&Foundation Service</a>
            <a href="#">Business Licensing</a>
            <a href="#">Company Strike Off</a>
          </div>
        </div>
        <div className="linkdropdown">
          <button className="linkdropbtn">
            One IBC Club<sup>TM</sup>
          </button>
          <div class="linkdropdown-content">
            <Link to="/member">Member Benefits</Link>
            <Link to="/member">Tiers and Benefits</Link>
            <Link to="/member">How it works</Link>
          </div>
        </div>
        <button id="ibcclub">
          One IBC Club<sup>TM</sup>Digital App
        </button>
        <div className="linkdropdown">
          <button className="linkdropbtn">More</button>
          <div class="linkdropdown-content">
            <a href="#">Promotion</a>
            <Link to="/aboutus">AboutUs</Link>
            <a href="#">Partnership</a>
            <a href="#">ContactUs</a>
            <a href="#">Insights</a>
            <a href="#">FAQs</a>
            <a href="#">Career</a>
          </div>
        </div>
        {hamburger}
        {sidebarIsOn && sidebar}
        <div className="search">
          <a>
            <img src={search} />
          </a>
          <a href="#" id="btn">
            Set Up Now
          </a>
        </div>
      </div>
    </>
  );
};
export default Header;
