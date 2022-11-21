import React from "react";
import "./formation.css";

import hongkong from "../../assets/images/home/hongkong.jpg";
import singapore from "../../assets/images/home/singapore.jpg";
import caribbean from "../../assets/images/home/caribean.jpg";
import UAE from "../../assets/images/home/UAE.jpg";
import Cayman from "../../assets/images/home/cayman.jpg";
import saychelles from "../../assets/images/home/saychelles.jpg";

const Formation = () => {
  const benefits = [
    {
      image: hongkong,
      title: "Hong Kong offshore company formation",
      text: " International Finance Center ",
      price: "Simple tax system",
    },
    {
      image: singapore,
      title: "Singapore offshore company formation",
      text: "Economic center in Asia",
      price: "Friendly and transparent business environment",
    },
    {
      image: caribbean,
      title: "BVI offshore company formation",
      text: " The economy prospered in the Caribbean ",
      price: "Perfect place for managing yachts and ships",
    },
    {
      image: UAE,
      title: " Offshore company formation in Dubai,RAK,UAE",
      text: " International Finance Center ",
      price: "Simple tax system",
    },
    {
      image: Cayman,
      title: "Cayman Islands offshore company formation",
      text: " International Finance Center ",
      price: "High-level information security",
    },
    {
      image: saychelles,
      title: "Seychelles  offshore company formation",
      text: " variety incentive tax policies ",
      price: "Secured asset protection",
    },
  ];

  const renderImages = benefits.map((company) => {
    return (
      <div
        className="benefit_card"
        style={{
          background: `url(${company.image})`,
          backgroundSize: "cover",
          backgroundImage: "Transparent",
        }}
      >
        <div className="appp">
          <h2>{company.title}</h2>
          <p>{company.text}</p>
          <p>{company.price} </p>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div>
        <h1>Company Formation</h1>
      </div>

      <div className="benefit_section">{renderImages}</div>
      <div className="companyformation">
        {" "}
        <button className="butn">View More Jurisdictions</button>
      </div>
    </React.Fragment>
  );
};

export default Formation;
