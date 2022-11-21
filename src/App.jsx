import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Hero from "./components/HeroSlide/HeroSlide";
import Account from "./components/AccoutOpeningConsult/account";
import Formation from "./components/CompanyFormation/formation";
import Tax from "./components/tax/tax";
import ServiceOffice from "./components/ServiceOffice/Serviceofice";
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
      <Tax />
      <ServiceOffice />
      <Announce />
      <Club />
      <Partnership />
    </>
  );
};
export default App;
