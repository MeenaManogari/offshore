import React from "react";
import "./serviced.css";
import serviceone from "../../assets/icons/serviced/service-icon-one.svg";
import servicetwo from "../../assets/icons/serviced/service-icon-two.svg";
const Servicedoffice = () => {
  return (
    <>
      <div className="serviced_head">
        <h1>Serviced Office</h1>
        <div className="service_main">
          <p>
            Our serviced office packages enable you to easily and quickly lease
            an office in any of our locations throughout the world and support
            your business to expand into other markets.
          </p>
          <div className="serviced_cards">
            <div className="servicecard">
              <div>
                <img src={serviceone} alt="" />
              </div>
              <div>
                <p>
                  Prestige in dynamic cities around the world, full facilities
                  and technology
                </p>
              </div>
            </div>
            <div className="servicecard">
              <div>
                <img src={servicetwo} alt="" />
              </div>
              <div>
                <p>
                  Our dedicated team is proactive, effective and willing to
                  provide support whenever needed
                </p>
              </div>
            </div>
          </div>
          <div className="service_details">
            <button>See more details</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Servicedoffice;
