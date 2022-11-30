import React from "react";
import CompanyServices from "../../components/features/CompanyServices";
import Jurisdictions from "../../components/features/featur";
import Category from "../../components/features/categories";
import Hero from "../../components/features/FeaturesHero";
import Single from "../.././components/Faq/single";
import Judicialupdate from "../../components/Judicialupdate/judicialupdate";
import Partnership from "../../components/partnership/Partnership";
import Club from "../../components/oneibc/oneibc";

const Featuresection = () => {
  return (
    <>
      <Hero />
      <CompanyServices />
      <Category />
      <Jurisdictions />
      <Single />
      <Club />
      <Partnership />
      <Judicialupdate />
    </>
  );
};
export default Featuresection;
