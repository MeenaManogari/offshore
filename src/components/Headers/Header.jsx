import React from "react";
import "./Header.css";
import call from "../../assets/icons/Headericons/header-phone.svg";
import notify from "../../assets/icons/Headericons/header-notification.svg";
import user from "../../assets/icons/Headericons/header-user.svg";
import indiaflag from "../../assets/icons/Headericons/header-india.png";
import usd from "../../assets/icons/Headericons/header-usd.png";
const Headers = () => {
  return (
    <>
      <div className="head-first">
        <div className="head-contact">
          <img src={call} alt="phone" />
          <strong>
            Customer Services:
            <a href="#"> +852 5804 3919 </a>or<a href="#"> +65 6591 9991 </a>
          </strong>
        </div>
        <div className="head-select">
          <button>
            <img src={indiaflag} alt="India" />
            India
          </button>
          <button>English</button>
          <button>
            <img src={usd} alt="currency" />
            USD
          </button>
          <button>
            <img src={notify} alt="" />
          </button>
          <button>
            <img src={user} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};
export default Headers;
