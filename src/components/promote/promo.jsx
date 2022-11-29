import React from "react";
import service from "../../assets/images/home/better-service.jpg";
import seasonal from "../../assets/images/home/seasonal-packages.jpg";
const Promote = () => {
  const promotion = [
    {
      image: service,
      title: "Better services - better price 15% off on company formation fee",
      link: "promotion/open-bvi-company-with-ease-10-off-company-formation-fees",
      text: "October of 2022 has become a successful month for Offshore Company Corporation (OCC) as we have partnered with SAP - world's leading business",
    },
    {
      image: seasonal,
      title:
        "October sale is now ON - Get your seasonal packages for Seychelles company formation",
      link: "/en/promotion/october-sale-is-now-on-get-your-seasonal-packages-for-seychelles-company-formation",
      text: "In order to thank you for the long ride we've had over the past time, One IBC would like to bring you an exclusive OCTOBER SALE - Seasonal packages for...",
    },
  ];

  const renderpromotion = promotion.map((announce) => {
    return (
      <div className="accoun_cardfull">
        <div className="promotion-card">
          <a href={announce.link}>
            {" "}
            <img src={announce.image} alt="" />
          </a>
          <div className="promotion-link">
            <a href={announce.link}>{announce.title}</a>
            <h2>{announce.text}</h2>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div id="promotion-head">
        <h1>Promotion</h1>
      </div>

      <div className="promotion">{renderpromotion}</div>
    </React.Fragment>
  );
};
export default Promote;
