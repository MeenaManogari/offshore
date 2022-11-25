import React from "react";
import "./FeaturesHero.css";
import location from "../../assets/images/feature/banner.png";
const Hero = () => {
  return (
    <>
      <div
        className="herobg"
        style={{
          backgroundImage: `url(${location})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h2>Offshore Company Corp</h2>
        <p>Your Trusted Offshore Corporate Service Provider</p>

        <button>Learn More</button>
      </div>
      <div className="striplinks">
        <a href="#">Featured</a>
        <a href="#">Jurisdictions</a>
        <a href="#">How To Set Up</a>
        <a href="#">Fees</a>
        <a href="#">Nominee</a>
        <a href="#">Change Agent</a>
        <a href="#">Company Renewal</a>
        <a href="#">FAQs</a>
        <a href="#">Download & Form</a>
      </div>
    </>
  );
};
export default Hero;
