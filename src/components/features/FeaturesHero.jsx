import React from "react";
import "./FeaturesHero.css";
import location from "../../assets/images/feature/banner.png";
const Hero = () => {
  return (
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
  );
};
export default Hero;
