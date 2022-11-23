import React from "react";
import "./partnership.css";
import Part from "../../assets/images/home/bg-partnership.png";

const Partnership = () => {
  return (
    <div className="partnership_complete">
      <div
        className="partnershipbbg"
        style={{
          background: `url(${Part})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: "Transparent",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <div className="partnership_cover">
          <div>
            <div className="partnership-head">
              <h1>Partnership & Intermediaries</h1>

              <div className="partnership-interrior">
                <h2>Referal Program</h2>
                <ul>
                  <li>
                    Become our referer in 3 simple steps and earn up to 14%
                    commission on every client you introduce to us.{" "}
                  </li>
                  <li>More Refer, More Earning!</li>
                </ul>
              </div>
            </div>
            <div className="partnership-subhead">
              <h3>Partnership Program</h3>
              <p>
                We cover the market with an ever-growing network of business and
                professional partners that we actively support in terms of
                professional support, sales, and marketing.
              </p>
              <button className="partnership_butns">See all benefits </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Partnership;
