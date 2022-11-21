import React from "react";
import "./partnership.css";
import Part from "../../assets/images/home/bg-partnership.png";

const Partnership = () => {
  return (
    <div
      className="clubbg"
      style={{
        background: `url(${Part})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundImage: "Transparent",
        backgroundPosition: "center",
      }}
    >
      {" "}
      <div className="club-cover">
        <div>
          <div className="club-head">
            <h1>Partnership & Intermediaries</h1>

            <div className="club interrior">
              <ul>
                <li>Become our referer in 3 simple steps and earn up to 14%</li>
                <li>
                  commission on every client you introduce to us. More Refer,
                  More Earning!
                </li>
              </ul>
            </div>
          </div>
          <div className="club-subhead">
            <h3>Partnership Program</h3>
            <p>
              We cover the market with an ever-growing network of business and
              professional partners that we actively support in terms of
              professional support, sales, and marketing.
            </p>
          </div>
        </div>
        <div>
          <button className="club-butn">See All Benefits</button>
        </div>
      </div>
    </div>
  );
};
export default Partnership;
