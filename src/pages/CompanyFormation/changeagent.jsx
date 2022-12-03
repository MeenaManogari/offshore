import React from "react";
import Agents from "../../components/Changeagent/change";
import ChangeAgent from "../../components/Changeagent/changeAgentFaq";
import Formfile from "../../components/Changeagent/formfile";
import Hero from "../../components/features/FeaturesHero";
import Club from "../../components/oneibc/oneibc";
import Partnership from "../../components/partnership/Partnership";
import Promote from "../../components/promote/promo";
const Agentchange = () => {
  return (
    <>
      <Hero />
      <Formfile />
      <Agents />
      <ChangeAgent />
      <Promote />
      <Club />
      <Partnership />
    </>
  );
};
export default Agentchange;
