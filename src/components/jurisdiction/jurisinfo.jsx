import React from "react";
import "./jurisinfo.css";
import jurisbanner from "../../assets/images/jurisdiction/banner-jurisdiction.png";
const Jurisinfo = () => {
  return (
    <>
      <div
        className="category_links"
        style={{
          backgroundImage: `url(${jurisbanner})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="global">
          <h1>Jurisdictions</h1>
          <p>
            We can incorporate companies in all most jurisdictions, where bring
            more incentives for all investors, businesses, entrepreneurs
            worldwide. Explore and get started today.
          </p>
        </div>
        <div className="bglinks">
          <a href="#">All</a>
          <a href="#">Asia Pacific</a>
          <a href="#">Europe</a>
          <a href="#">Caribbean</a>
          <a href="#">Middle East</a>
          <a href="#">Africa</a>
          <a href="#">America</a>
        </div>
      </div>
    </>
  );
};
export default Jurisinfo;
