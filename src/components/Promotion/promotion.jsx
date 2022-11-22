import React from "react";
import "./promotion.css";
import announce from "../../assets/images/home/announce-promo.jpg";
import seasonal from "../../assets/images/home/seasonal-packages.jpg";
import openbvi from "../../assets/images/home/openbvicompany.jpg";
import service from "../../assets/images/home/better-service.jpg";

const Announce = () => {
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
    {
      image: announce,
      link: "/en/promotion/better-services-better-price-15-off-on-company-formation-fee",
      text: "October of 2022 has become a successful month for Offshore Company Corporation (OCC) as we have partnered with SAP - world's leading business...",
      title: " Announcement of Fee Adjustment in October 2022",
    },

    {
      image: openbvi,
      link: "promotion/open-bvi-company-with-ease-10-off-company-formation-fees",
      text: "BVI is one of the most stable and prosperous jurisdictions in the Caribbean for conducting businesses. Over 400,000 active holding companie",
      title: "Open BVI Company With Ease-10% Off Company Formation Fees",
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

      <div className="taxing">
        {" "}
        <button className="promotion_butn">View all</button>
      </div>
    </React.Fragment>
  );
};
export default Announce;
