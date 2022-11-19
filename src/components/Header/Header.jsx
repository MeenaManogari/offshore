import React from "react";
import logo from "../../assets/icons/weblogo.svg";
import call from "../../assets/icons/phoneicon.svg";
import user from "../../assets/icons/usericon.svg";
import notify from "../../assets/icons/notifyicon.svg";
import search from "../../assets/icons/searchicon.svg";
import "./Header.css";

const Header = () => {
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
        <div className="links">
          <div className="dropdown">
            <button className="dropbtn">
              india <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
              <a href="#">Link 4</a>
              <a href="#">Link 5</a>
              <a href="#">Link 6</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">
              English
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
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
          <div className="dropdown">
            <button className="dropbtn">
              USD<i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
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
          <img src={logo} width="250px" height="120px" />
        </button>
        <div className="dropdown">
          <button className="dropbtn">
            Company Formation<i class="fa fa-caret-down"></i>
          </button>
          <div>
            <h3>Company Formation</h3>
          </div>
          <div class="dropdown-content">
            <a href="#">Featured</a>
            <a href="#">Jurisdictions</a>
            <a href="#">How To Setup</a>
            <a href="#">Fees</a>
            <a href="#">Nominee</a>
            <a href="#">Change Agent</a>
            <a href="#">Company Renewal</a>
            <a href="#">FAQs</a>
            <a href="#">Download&Form</a>
            <a href="#">Link 6</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Account Opening Consultancy</button>
          <div class="dropdown-content">
            <a href="#">Featured</a>
            <a href="#">How to OpenAccount</a>
            <a href="#">Fees</a>
            <a href="#">Account Opening Requirements</a>
            <a href="#">FAQs</a>
            <a href="#">DownloadForm</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">All Services</button>
          <div class="dropdown-content">
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
        <div className="dropdown">
          <button className="dropbtn">
            One IBC Club<sup>TM</sup>
          </button>
          <div class="dropdown-content">
            <a href="#">Member Benefits</a>
            <a href="#">Tiers and Benefits</a>
            <a href="#">How it works</a>
          </div>
        </div>
        <button>
          One IBC Club<sup>TM</sup>Digital App
        </button>
        <div className="dropdown">
          <button className="dropbtn">More</button>
          <div class="dropdown-content">
            <a href="#">Promotion</a>
            <a href="#">AboutUs</a>
            <a href="#">Partnership</a>
            <a href="#">ContactUs</a>
            <a href="#">Insights</a>
            <a href="#">FAQs</a>
            <a href="#">Career</a>
          </div>
        </div>
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
