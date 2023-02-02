import React from "react";
import "./headarea.css";
import search from "../../assets/icons/Headericons/header-search.svg";
import notify from "../../assets/icons/Headericons/header-notification.svg";
import user from "../../assets/icons/Headericons/header-user.svg";
import indiaflag from "../../assets/icons/Headericons/header-india.png";
import usd from "../../assets/icons/Headericons/header-usd.png";
const Headarea = () => {
  return (
    <div className="headertwo">
      <div className="head-area">
        <button>
          <img src={indiaflag} alt="India" />
          India
        </button>
        <button>English</button>
        <button>
          <img src={usd} alt="currency" />
          USD
        </button>
      </div>
      <div className="headarea-icons">
        <button>
          <img src={notify} alt="" />
        </button>
        <button>
          <img src={user} alt="" />
        </button>
        <button>
          <img src={search} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Headarea;
