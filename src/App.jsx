import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Featuresection from "./pages/CompanyFormation/Featured";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Appload from "./components/DownloadAbout/Loadabout";
import Companysetup from "./pages/CompanyFormation/companysetup";
import Companyjuris from "./pages/CompanyFormation/Jurisdiction";
import Aboutpage from "./pages/More/Aboutus";
import Ibcbenefits from "./pages/OneIBCClubs/member";
import Accountopensection from "./pages/Openbankaccount/account";

const App = () => {
  return (
    <>
      <Header />
      <Requirehero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Featuresection />} />
        <Route path="/howtosetup" element={<Companysetup />} />
        <Route path="/jurisdiction" element={<Companyjuris />} />
        <Route path="/aboutus" element={<Aboutpage />} />
        <Route path="/member" element={<Ibcbenefits />} />
        <Route path="/account" element={<Accountopensection />} />
      </Routes>
      <Appload />
      <Footer />
    </>
  );
};
export default App;
