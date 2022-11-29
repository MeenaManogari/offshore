import React from "react";
import "./judicialupdate.css";
import Citizen from "../../assets/images/judicialupdate/citizenship.jpg";
import Economy from "../../assets/images/judicialupdate/economy.jpg";
import Belize from "../../assets/images/judicialupdate/belize-economic.jpg";

const Judicialupdate = () => {
  const update = [
    {
      image: Citizen,
      linktext: "Why Is Caribbean Investment Citizenship Program So Popular?",
      link: "./insight/jurisdiction-update/why-is-caribbean-investment-citizenship-program-so-popular",
    },
    {
      image: Economy,
      linktext: "Seychelles Economy Outlook",
      link: ".//insight/jurisdiction-update/seychelles-economy-outlook",
    },
    {
      image: Belize,
      linktext: "What type of economy does Belize have?",
      link: "./insight/jurisdiction-update/what-type-of-economy-does-belize-have",
    },
  ];
  const renderjudicial = update.map((judi) => {
    return (
      <div className="judiupdate_segment">
        <div className="judiupdate_card">
          <div className="judiupdate_interrior">
            <a href={judi.link}>
              {" "}
              <img src={judi.image} alt="" />
            </a>
            <div>
              {" "}
              <a href={judi.link}>
                <p>{judi.linktext}</p>
              </a>
              <a href={judi.link} id="read">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="judicial_render">{renderjudicial}</div>
    </React.Fragment>
  );
};
export default Judicialupdate;
