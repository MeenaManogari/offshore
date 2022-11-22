import React from "react";
import "./App.css";

import Account from "./components/AccoutOpeningConsult/account";
import Formation from "./components/CompanyFormation/formation";
import Tax from "./components/tax/tax";
import ServiceOffice from "./components/ServiceOffice/Serviceofice";

import Announce from "./components/Promotion/promotion";
import Club from "./components/oneibc/oneibc";
import Partnership from "./components/partnership/Partnership";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <Home />
      <Formation />
      <Account />
      <ServiceOffice />
      <Tax />
      <Announce />
      <Club />
      <Partnership />
    </>
  );
};
export default App;
