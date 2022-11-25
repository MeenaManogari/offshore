import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Featuresection from "./pages/CompanyFormation/Featured";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Footer from "./components/Footer/Footer";
import Appload from "./components/DownloadAbout/Loadabout";
import Companysetup from "./pages/CompanyFormation/companysetup";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Featuresection />} />
        <Route path="/howtosetup" element={<Companysetup />} />
      </Routes>
      <Appload />
      <Footer />
    </>
  );
};
export default App;
