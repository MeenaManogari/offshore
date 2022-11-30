import React from "react";
import Requirehero from "../../components/AccoutOpeningConsult/requirehero";
import Accountsteps from "../../components/Bankaccount/banking";
import Judicialupdate from "../../components/Judicialupdate/judicialupdate";
import Club from "../../components/oneibc/oneibc";
import Partnership from "../../components/partnership/Partnership";
import Promote from "../../components/promote/promo";

const Accountopensection = () => {
  return (
    <>
      <Requirehero />
      <Accountsteps />
      <Promote />
      <Club />
      <Partnership />
      <Judicialupdate />
    </>
  );
};
export default Accountopensection;
