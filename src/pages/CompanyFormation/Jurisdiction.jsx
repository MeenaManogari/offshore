import React from "react";
import Single from "../../components/Faq/single";
import Jurisdictions from "../../components/features/featur";
import Hero from "../../components/features/FeaturesHero";
import Judicialupdate from "../../components/Judicialupdate/judicialupdate";
import Jurisinfo from "../../components/jurisdiction/jurisinfo";
import Club from "../../components/oneibc/oneibc";
import Partnership from "../../components/partnership/Partnership";
const Companyjuris = () => {
  return (
    <>
      <Hero />
      <Jurisinfo />
      <Jurisdictions />
      <Single />
      <Club />
      <Partnership />
      <Judicialupdate />
    </>
  );
};
export default Companyjuris;
