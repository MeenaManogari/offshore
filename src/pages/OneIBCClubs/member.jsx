import React from "react";
import Judicialupdate from "../../components/Judicialupdate/judicialupdate";
import Club from "../../components/oneibc/oneibc";
import Ibchero from "../../components/oneibcClub/herooneibc";
import OneibcClub from "../../components/oneibcClub/oneibcClub";
import Partnership from "../../components/partnership/Partnership";
import Promote from "../../components/promote/promo";
const Ibcbenefits = () => {
  return (
    <>
      <Ibchero />
      <OneibcClub />
      <Promote />
      <Club />
      <Partnership />
      <Judicialupdate />
    </>
  );
};
export default Ibcbenefits;
