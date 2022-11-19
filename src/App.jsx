import React from "react";
import Formation from "./components/CompanyFormation/formation";
import Account from "./components/AccoutOpeningConsult/account";
import Tax from "./components/tax/tax";
import ServiceOffice from "./components/ServiceOffice/Serviceofice";
const App = () => {
  return (
    <>
      <Formation />
      <Account />
      <ServiceOffice />
      {/* <Tax /> */}
    </>
  );
};
export default App;
