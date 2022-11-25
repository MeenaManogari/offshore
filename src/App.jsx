import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Featuresection from "./pages/CompanyFormation/Featured";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import { useState } from "react";
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Featuresection />} />
      </Routes>
    </>
  );
};
export default App;
