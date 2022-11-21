import React from "react";
import "./oneibc.css";
import club from "../../assets/images/home/clubbg.jpg";
const Club = () => {
  return (
    <div
      className="clubbg"
      style={{
        background: `url(${club})`,
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
            <h1>One IBC Club</h1>

            <div className="club interrior">
              <p>
                There are four rank levels of ONE IBC membership. Advance
                through three elite ranks when you meet qualifying criteria.
                Enjoy elevated rewards and experiences throughout your journey.
                Explore the benefits for all levels. Earn and redeem credit
                points for our services.
              </p>
            </div>
          </div>
          <div className="club-subhead">
            <h3>Earning points</h3>
            <p>
              Earn Credit Points on qualifying purchasing of services. You'll
              earn credit Points for every eligible U.S. dollar spent.
            </p>
          </div>
          <div className="club-sechead">
            <h3>Using points</h3>
            <p>
              Spend credit points directly for your invoice. 100 credit points =
              1 USD.
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
export default Club;
