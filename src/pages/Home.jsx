import React from "react";
import Header from "../components/Header/header";
import Hero from "../components/HeroSlide/HeroSlide";
import Appload from "../components/DownloadAbout/Loadabout";
import Footer from "../components/Footer/Footer";
import Account from "../components/AccoutOpeningConsult/account";
import Formation from "../components/CompanyFormation/formation";
import Tax from "../components/tax/tax";
import ServiceOffice from "../components/ServiceOffice/Serviceofice";
import Announce from "../components/Promotion/promotion";
import Club from "../components/oneibc/oneibc";
import Partnership from "../components/partnership/Partnership";
import Judicial from "../components/Judicial/judicial";
import Events from "../components/events/event";
import Article from "../components/Article/article";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Formation />
      <Account />
      <ServiceOffice />
      <Tax />
      <Announce />
      <Club />
      <Partnership />
      <Judicial />
      <Article />
      <Events />
      <Appload />
      <Footer />
    </>
  );
};
export default Home;
