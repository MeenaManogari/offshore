import React from "react";
import "./Serviceoffice.css";
import caller from "../../assets/icons/caller.svg";
import world from "../../assets/icons/globeicon.svg";

const ServiceOffice = () => {
  return (
    <div className="Service_Office_Container">
      <div>
        <div className="office">
          <h4>Service Office</h4>
        </div>
        <div className="subhead">
          <p>
            Our serviced office packages enable you to easily and quickly lease
            an office in any of our locations throughout the world and support
            your business to expand into other markets
          </p>
        </div>
        <div className="parts">
          <div className="world">
            <img src={world} />
            <h3>
              Prestige in dynamic cities around the world, full facilities and
              technology
            </h3>
          </div>
          <div className="world">
            <img src={caller} height={70} width={70} />
            <h3>
              Our dedicated team is proactive, effective and willing to provide
              support whenever needed
            </h3>
          </div>
        </div>
      </div>
      <div className="taxing">
        {" "}
        <button className="account_butn">See more details</button>
      </div>
    </div>
  );
};
export default ServiceOffice;
