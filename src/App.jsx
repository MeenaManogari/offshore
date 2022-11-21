import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Hero from "./components/HeroSlide/HeroSlide";
import Account from "./components/AccoutOpeningConsult/account";
import Formation from "./components/CompanyFormation/formation";
import Tax from "./components/tax/tax";
import ServiceOffice from "./components/ServiceOffice/Serviceofice";
import Footer from "./components/Footer/Footer";
import Appload from "./components/DownloadAbout/Loadabout";
import Announce from "./components/Promotion/promotion";
import Club from "./components/oneibc/oneibc";
import Partnership from "./components/partnership/Partnership";
const App = () => {
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
      <Appload />
      <Footer />
    </>
  );
};
export default App;
