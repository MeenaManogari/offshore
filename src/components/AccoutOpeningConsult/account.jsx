import React from "react";
import "./account.css";
import bank from "../../assets/icons/bank_icon.svg";
import Bank from "../../assets/icons/Bankinng.svg";
import Remote from "../../assets/icons/computer.svg";
import Personal from "../../assets/icons/visit.svg";
import background from "../../assets/images/home/iconsbg.png";

const Account = () => {
  return (
    <div
      className="account"
      style={{
        background: `url(${background})`,
        backgroundSize: "cover",
        backgroundImage: "Transparent",
      }}
    >
      <div className="head">
        {" "}
        <p> Account Opening Consultancy</p>
      </div>
      <div className="segments">
        <div className="sections">
          <img src={bank} />
          <p>
            We offer for clients bank account opening{" "}
            <strong> over 25 jurisdictions</strong>, with{" "}
            <strong> over 32 of the world's leading top quality </strong>
            reputation bank
          </p>
        </div>
        <div className="sections">
          <img src={Bank} />
          <p>
            Quick offshore bank account openings.{" "}
            <strong> Maximum confidentiality</strong>
          </p>
        </div>
        <div className="sections">
          <img src={Remote} />
          <h1>Remote Application</h1>
          <p>
            Help you choosing the most suitable bank for your business remotely.
            Save your time, easily open bank account without leaving your desk
          </p>
        </div>
        <div className="sections">
          <img src={Personal} />
          <h1>Personal Visit</h1>
          <p>Some banks require the physical presence</p>
          <p>
            Our experts will prepare all necessary documents, arrange a meeting
            with the bank at your convenient time
          </p>
        </div>
      </div>
      <button className="butnn">Find More Out</button>
    </div>
  );
};
export default Account;
