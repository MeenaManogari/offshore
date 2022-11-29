import React from "react";
import CompanyServices from "../../components/features/CompanyServices";
import Jurisdictions from "../../components/features/featur";
import Category from "../../components/features/categories";
import Hero from "../../components/features/FeaturesHero";
import Single from "../.././components/Faq/single";
import OneibcClub from "../../components/oneibcClub/oneibcClub";
import Judicialupdate from "../../components/Judicialupdate/judicialupdate";

const Featuresection = () => {
  return (
    <>
      <Hero />
      <CompanyServices />
      <Category />
      <Jurisdictions />
      <Single />
      <OneibcClub />
      <Judicialupdate />
    </>
  );
};
export default Featuresection;
