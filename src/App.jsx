import React from "react";
import Header from "./components/Header/header";
import Hero from "./components/HeroSlide/HeroSlide";
import "./App.css";
import Account from "./components/AccoutOpeningConsult/account";
import Formation from "./components/CompanyFormation/formation";

import Tax from "./components/tax/tax";
import ServiceOffice from "./components/ServiceOffice/Serviceofice";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Formation />
      <Account />
      <ServiceOffice />
      <Tax />
    </>
  );
};
export default App;
