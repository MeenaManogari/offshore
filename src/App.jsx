import React from "react";
import "./App.css";
import Header from "./components/Header/header";
import Hero from "./components/HeroSlide/HeroSlide";
import Account from "./components/AccoutOpeningConsult/account";
import Formation from "./components/CompanyFormation/formation";
import Tax from "./components/tax/tax";
import ServiceOffice from "./components/ServiceOffice/Serviceofice";
// import Announce from "./components/Promotion/promotion";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Formation />
      <Account />
      <ServiceOffice />
      <Tax />
      {/* <Announce /> */}
    </>
  );
};
export default App;
