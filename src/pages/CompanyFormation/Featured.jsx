import React from "react";
import Faq from "../../components/Faq/faq";
import CompanyServices from "../../components/features/CompanyServices";
import Jurisdictions from "../../components/features/featur";
import Hero from "../../components/features/FeaturesHero";
import Contactform from "../../components/Forms/Contactform";

const Featuresection = () => {
  return (
    <>
      <Hero />
      <Contactform />
      <Jurisdictions />
      <CompanyServices />
      <Faq />
    </>
  );
};
export default Featuresection;
