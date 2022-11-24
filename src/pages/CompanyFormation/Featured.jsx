import React from "react";
import CompanyServices from "../../components/features/CompanyServices";
import Jurisdictions from "../../components/features/featur";
import Hero from "../../components/features/FeaturesHero";
import Contactform from "../../components/Forms/Contactform";

const Featuresection = () => {
  return (
    <>
      <Hero />
      <Jurisdictions />
      <Contactform />
      <CompanyServices />
    </>
  );
};
export default Featuresection;
