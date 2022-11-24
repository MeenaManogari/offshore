import React from "react";
import "./CompanyServices.css";
import taxation from "../../assets/icons/feature_icons/1-offshore-company.svg";
import property from "../../assets/icons/feature_icons/2-offshore-company-featured.svg";
import restrictions from "../../assets/icons/feature_icons/3-offshore-company.svg";
import access from "../../assets/icons/feature_icons/4-offshore-company.svg";
import assets from "../../assets/icons/feature_icons/5-offshore-company.svg";
import stability from "../../assets/icons/feature_icons/6-offshore-company.svg";
import Contactform from "../Forms/Contactform";
const CompanyServices = () => {
  return (
    <>
      <div className="service_content">
        <div className="services">
          <div className="arrange">
            <img src={taxation} alt="" />
            <h2>Reduced taxation</h2>
          </div>
          <div className="arrange">
            <img src={property} alt="" />
            <h2>Secure your intelligent property</h2>
          </div>
          <div className="arrange">
            <img src={restrictions} alt="" />
            <h2>Fewer restrictions</h2>
          </div>
          <div className="arrange">
            <img src={access} alt="" />
            <h2>Access to tax treaties</h2>
          </div>
          <div className="arrange">
            <img src={assets} alt="" />
            <h2>Enhance assets</h2>
          </div>
          <div className="arrange">
            <img src={stability} alt="" />
            <h2>Political stability</h2>
          </div>
        </div>
        <div>
          <Contactform />
        </div>
      </div>
    </>
  );
};
export default CompanyServices;
