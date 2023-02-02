import React from "react";
import "./promotion.css";
import fees from "../../assets/images/home/promotion/announcement-fee.jpg";
import betterservice from "../../assets/images/home/promotion/better-services.jpg";
import octobersale from "../../assets/images/home/promotion/october-sale.jpg";
import openbvi from "../../assets/images/home/promotion/openbvicompany.jpg";
const Promotion = () => {
  const promocards = [
    {
      image: betterservice,
      link: "Better services - better price 15% off on company formation fee",
      text: "October of 2022 has become a successful month for Offshore Company Corporation (OCC) as we have partnered with SAP - world's leading business",
    },
    {
      image: fees,
      link: "Better services - better price 15% off on company formation fee",
      text: "October of 2022 has become a successful month for Offshore Company Corporation (OCC) as we have partnered with SAP - world's leading business",
    },
    {
      image: octobersale,
      link: "Better services - better price 15% off on company formation fee",
      text: "October of 2022 has become a successful month for Offshore Company Corporation (OCC) as we have partnered with SAP - world's leading business",
    },
    {
      image: openbvi,
      link: "Better services - better price 15% off on company formation fee",
      text: "October of 2022 has become a successful month for Offshore Company Corporation (OCC) as we have partnered with SAP - world's leading business",
      buttons: "British Virgin Islands",
    },
  ];
  const renderpromocards = promocards.map((promotcards) => {
    return (
      <>
        <div className="promotion_main">
          <div className="promotion_cards">
            <div className="promoimg">
              <img src={promotcards.image} alt="" />
            </div>
            <div className="promotext">
              <h2>
                <a href="#">{promotcards.link}</a>
              </h2>
              <p>{promotcards.text}</p>
            </div>
          </div>
        </div>
      </>
    );
  });
  return (
    <React.Fragment>
      <div className="promotion_head">
        <h1>Promotion</h1>
        <div className="promo_render">{renderpromocards}</div>
        <div className="promo_btn">
          <button>View all</button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Promotion;
