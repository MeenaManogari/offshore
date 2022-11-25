import React from "react";
import Category from "../../components/features/categories";
import CompanyServices from "../../components/features/CompanyServices";
import Jurisdictions from "../../components/features/featur";
import Hero from "../../components/features/FeaturesHero";

const Featuresection = () => {
  return (
    <>
      <Hero />
      <CompanyServices />
      <Category />
      <Jurisdictions />
    </>
  );
};
export default Featuresection;
