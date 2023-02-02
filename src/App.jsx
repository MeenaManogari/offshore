import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Featuresection from "./pages/CompanyFormation/Featured";
import { Route, Routes } from "react-router-dom";
import Appload from "./components/DownloadAbout/Loadabout";
import Companysetup from "./pages/CompanyFormation/companysetup";
import Companyjuris from "./pages/CompanyFormation/Jurisdiction";
import Aboutpage from "./pages/More/Aboutus";
import Ibcbenefits from "./pages/OneIBCClubs/member";
import Accountopensection from "./pages/Openbankaccount/account";
import Agentchange from "./pages/CompanyFormation/changeagent";
import Headers from "./components/Headers/Header";
import Headlinks from "./components/Headerlinks/Headlinks";
import Footerlinks from "./components/FooterLinks/Footerlinks";
import Footers from "./components/Footers/Footer";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Headers />
      <Headlinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Featuresection />} />
        <Route path="/howtosetup" element={<Companysetup />} />
        <Route path="/jurisdiction" element={<Companyjuris />} />
        <Route path="/aboutus" element={<Aboutpage />} />
        <Route path="/member" element={<Ibcbenefits />} />
        <Route path="/account" element={<Accountopensection />} />
        <Route path="/changeagent" element={<Agentchange />} />
      </Routes>
      <Appload />
      <Footers />
      <Footerlinks />
    </>
  );
};
export default App;
