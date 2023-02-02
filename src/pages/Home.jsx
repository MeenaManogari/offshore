import React from "react";
import Hero from "../components/HeroSlide/HeroSlide";
import Account from "../components/AccoutOpeningConsult/account";
import Formation from "../components/CompanyFormation/formation";
//import Tax from "../components/tax/tax";
//import ServiceOffice from "../components/ServiceOffice/Serviceofice";
//import Announce from "../components/Promotion/promotion";
import Club from "../components/oneibc/oneibc";
import Partnership from "../components/partnership/Partnership";
//import Judicial from "../components/Judicial/judicial";
import Events from "../components/events/event";
//import Article from "../components/Article/article";
import Servicedoffice from "../components/Serviced/serviced";
import Promotion from "../components/Promotions/promotion";
import Jurisupdate from "../components/JurisdictionUpdate/jurisupdate";
import Taxaccount from "../components/Taxes/taxaccount";
import Articles from "../components/Articles/Articles";
const Home = () => {
  return (
    <>
      <Hero />
      <Formation />
      <Account />
      <Servicedoffice />
      <Taxaccount />
      <Promotion />
      <Club />
      <Partnership />
      <Jurisupdate />
      <Articles />
      <Events />
    </>
  );
};
export default Home;
