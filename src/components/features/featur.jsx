import React from "react";
import "./feature.css";
import Hongkong from "../.././assets/images/feature/1_hongkong.jpg";
import Singapore from "../.././assets/images/feature/2_singapore.jpg";
import Labuan from "../.././assets/images/feature/3_labuan.jpg";
import Maarshall from "../.././assets/images/feature/4_marshall.jpg";
import Samoa from "../.././assets/images/feature/5_samoa.jpg";
import Vanuatu from "../.././assets/images/feature/6_vanuatu.jpg";
import Vietnam from "../.././assets/images/feature/7_vietnam.jpg";
import Uk from "../.././assets/images/feature/8_uk.jpg";
import Halan from "../.././assets/images/feature/9_halan.jpg";
import Malta from "../.././assets/images/feature/10_malta.jpg";
import Liechtentein from "../.././assets/images/feature/11_liechtenstein.jpg";
import Luxembour from "../.././assets/images/feature/12_luxembour.jpg";
import Thuysy from "../.././assets/images/feature/13_thuysy.jpg";
import Sip from "../.././assets/images/feature/14_Sip.jpg";
import Gibralta from "../.././assets/images/feature/15_gibralta.jpg";
import Bvi from "../.././assets/images/feature/16_bvi.jpg";
import Belize from "../.././assets/images/feature/17_belize.jpg";
import Cayman from "../.././assets/images/feature/18_cayman.jpg";
import Anguilla from "../.././assets/images/feature/19_anguilla.jpg";
import Bahamas from "../.././assets/images/feature/20_bahamas.jpg";
import Panama from "../.././assets/images/feature/21_panama.jpg";
import Saintkit from "../.././assets/images/feature/22_saintkit.jpg";
import Saintvinecent from "../.././assets/images/feature/23_saintvincent.jpg";
import UAE from "../.././assets/images/feature/24_UAE.jpg";
import Delaware from "../.././assets/images/feature/25_saychelles.jpg";
import Mauritius from "../.././assets/images/feature/26_mauritius.jpg";
import Delawar from "../.././assets/images/feature/27_delaware.jpg";

function Jurisdictions() {
  const asiapasific = [
    {
      image: Hongkong,
      linktext: "Offshore Company in Hong Kong",
      text: "International Finance Center",
      texts: "Simple tax system",
      link: "/en/company-formation/jurisdiction/hong-kong",
    },
    {
      image: Singapore,
      linktext: "Singapore offshore company formation",
      text: "Economic center in Asia",
      texts: "Friendly and transparent business environment",
      link: "/en/company-formation/jurisdiction/singapore",
    },
    {
      image: Labuan,
      linktext: "Company Formation in Labuan, Malaysia",
      text: "Financial center in Southeast Asia",
      texts: "Free income tax for the Holding company",
      link: "/en/company-formation/jurisdiction/labuan",
    },
    {
      image: Maarshall,
      linktext: "Marshall Islands company incorporation",
      text: "Leading maritime business activities",
      texts: "No minimum capital required",
      link: "/en/company-formation/jurisdiction/marshall-islands",
    },
    {
      image: Samoa,
      linktext: "Samoa offshore company formation",
      text: "Stable political and economical system",
      texts: "Corporate income tax exemption",
      link: "/en/company-formation/jurisdiction/samoa",
    },
    {
      image: Vanuatu,
      linktext: "Register Vanuatu company",
      text: "Infrastructure highly develop",
      texts: "Tax exemption and non-financial reporting required",
      link: "/en/company-formation/jurisdiction/vanuatu",
    },
    {
      image: Vietnam,
      linktext: "Vietnam Company Formation",
      text: "Member of many commercial institutions",
      texts: "The most dynamic emerging economy",
      link: "/en/company-formation/jurisdiction/vietnam",
    },
  ];
  const europe = [
    {
      image: Uk,
      linktext: "UK Company Setup",
      text: "Gateway to access Europe markets",
      texts: "Global financial service center",
      link: "/",
    },
    {
      image: Malta,
      linktext: "Malta offshore company formation",
      text: "A modern legal system",
      texts: "Transportation and logistics hub",
      link: "/",
    },
    {
      image: Halan,
      linktext: "Company formation in Netherlands",
      text: "Concentration of large financial institutions",
      texts: "Comprehensive protection policy",
      link: "/",
    },
    {
      image: Liechtentein,
      linktext: "Liechtenstein offshore company formation",
      text: "Open economy policies",
      texts: "Gateway to EU/EEA and Switzerland markets",
      link: "/",
    },

    {
      image: Luxembour,
      linktext: "Luxembourg offshore company formation",
      text: "Highest labor productivity in the world",
      texts: "2st in the world about global logistics capabilities",
      link: "/",
    },
    {
      image: Thuysy,
      linktext: "Swiss offshore company formation",
      text: "Liberal tax system",
      texts: "Head office of multinational firms",
      link: "/",
    },
    {
      image: Sip,
      linktext: "Cyprus offshore company formation",
      text: "Low corporate tax rates",
      texts: "Business infrastructure developed",
      link: "/",
    },
    {
      image: Gibralta,
      linktext: "Set up a company in Gibraltar",
      text: "Tax exemption for foreign companies",
      texts: "Excellent communication system and infrastructure",
      link: "/",
    },
  ];
  const caribbean = [
    {
      image: Bvi,
      linktext: "BVI offshore company formation",
      text: "The economy prospered in the Caribbean",
      text: "Perfect place for managing yachts and ships",
      link: "/",
    },
    {
      image: Belize,
      linktext: "Belize offshore company formation",
      text: "Tax-exempted on profits and capital gains",
      texts: "Highly confidential information",
      link: "/",
    },
    {
      image: Cayman,
      linktext: "Cayman Islands offshore company formation",
      text: "International financial center",
      texts: "High-level information security",
      link: "/",
    },
    {
      image: Anguilla,
      linktext: "Anguilla company registration",
      text: "Stable political system",
      texts: "Flexible corporate management structure",
      linktext: "/",
    },
    {
      image: Bahamas,
      linktext: "Bahamas company formation",
      text: "Leading banking sectors",
      texts: "No corporation tax for offshore corporate",
      link: "/",
    },
    {
      image: Panama,
      linktext: "Panama offshore company formation",
      text: "One of the international business center",
      texts: "The fastest-growing economy in Central America",
      link: "/",
    },
  ];
  const renderjuris = asiapasific.map((update) => {
    return (
      <div
        className="benefit_card"
        style={{
          background: `url(${update.image})`,
          backgroundSize: "cover",
          backgroundImage: "Transparent",
        }}
      >
        <div className="appp">
          <h2>{update.linktext}</h2>
          <p>{update.text}</p>
          <p>{update.texts} </p>
        </div>
      </div>
    );
  });
  const rendereuro = europe.map((update) => {
    return (
      <div
        className="benefit_card"
        style={{
          background: `url(${update.image})`,
          backgroundSize: "cover",
          backgroundImage: "Transparent",
        }}
      >
        <div className="appp">
          <h2>{update.linktext}</h2>
          <p>{update.text}</p>
          <p>{update.texts} </p>
        </div>
      </div>
    );
  });
  const rendercarib = caribbean.map((update) => {
    return (
      <div
        className="benefit_card"
        style={{
          background: `url(${update.image})`,
          backgroundSize: "cover",
          backgroundImage: "Transparent",
        }}
      >
        <div className="appp">
          <h2>{update.linktext}</h2>
          <p>{update.text}</p>
          <p>{update.texts} </p>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="formation-head">
        <h1>Asia pasific</h1>
        <div className="benefit_section">{renderjuris}</div>
      </div>
      <div className="formation-head">
        <h1>Europe</h1>
        <div className="benefit_section">{rendereuro}</div>
      </div>
      <div className="formation-head">
        <h1>Caribbean</h1>
        <div className="benefit_section">{rendercarib}</div>
      </div>
    </React.Fragment>
  );
}

export default Jurisdictions;
