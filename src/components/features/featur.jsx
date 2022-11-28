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
import Dela from "../.././assets/images/feature/25_saychelles.jpg";
import Mauritius from "../.././assets/images/feature/26_mauritius.jpg";
import Delawar from "../.././assets/images/feature/27_delaware.jpg";
import Shore from "../.././assets/images/feature/offshore-bg-how-it-work.jpg";
import Fee from "../.././assets/images/feature/offshore-fee.png";
import service from "../../assets/images/home/better-service.jpg";
import seasonal from "../../assets/images/home/seasonal-packages.jpg";

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
      texts: "Perfect place for managing yachts and ships",
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
      link: "/",
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
    {
      image: Saintkit,
      linktext: "Nevis offshore company formation",
      text: "Tax-free, no exchange control",
      texts: "A wide network of international banks",
      link: "/",
    },
    {
      image: Saintvinecent,
      linktext: "St Vincent offshore company formation",
      text: "Exemption from income tax on profits",
      texts: "Leading position for foreign investment",
      link: "/",
    },
  ];
  const east = [
    {
      image: UAE,
      linktext: "Offshore company formation in Dubai, RAK, UAE",
      text: "One of the world's largest logistics hubs",
      texts: "Leading host for global foreign investment",
      link: "/",
    },
  ];
  const africa = [
    {
      image: Dela,
      linktext: "Seychelles offshore company formation",
      text: "Variety incentive tax policies",
      texts: "Secured asset protection",
      link: "/",
    },
    {
      image: Mauritius,
      linktext: "Mauritius offshore company formation",
      text: "One of the fastest-growing economy",
      texts: "Free and open business environment",
      link: "/",
    },
  ];
  const america = [
    {
      image: Delawar,
      linktext: "USA Offshore Company Formation",
      text: "Asset protection from a foreign corporation.",
      texts: "Better banking infrastructure.",
      link: "/",
    },
    {
      image: Delawar,
      linktext: "Delaware offshore company formation",
      text: "The most flexible business laws",
      texts: "No corporate income tax outside Delaware",
      link: "/",
    },
  ];
  const work = [
    {
      image: Shore,
      text: "How it works?",
      textpara:
        "All-everything needs to start your business is here. It's simple, fast and effective. Our dedicated experts support you all the process so you feel free and comfortable to start.",
      texts: "Set up at Offshore Company Corp in just 4 easy steps.",
    },
  ];
  const promotion = [
    {
      image: service,
      title: "Better services - better price 15% off on company formation fee",
      link: "promotion/open-bvi-company-with-ease-10-off-company-formation-fees",
      text: "October of 2022 has become a successful month for Offshore Company Corporation (OCC) as we have partnered with SAP - world's leading business",
    },
    {
      image: seasonal,
      title:
        "October sale is now ON - Get your seasonal packages for Seychelles company formation",
      link: "/en/promotion/october-sale-is-now-on-get-your-seasonal-packages-for-seychelles-company-formation",
      text: "In order to thank you for the long ride we've had over the past time, One IBC would like to bring you an exclusive OCTOBER SALE - Seasonal packages for...",
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
          <a href={update.link}>
            <h2>{update.linktext}</h2>
          </a>
          <p>{update.text}</p>
        </div>
        <div className="formationapp">
          {" "}
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
        </div>
        <div className="formationapp">
          {" "}
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
        </div>
        <div className="formationapp">
          {" "}
          <p>{update.texts} </p>
        </div>
      </div>
    );
  });
  const rendermiddleast = east.map((update) => {
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
        </div>
        <div className="formationapp">
          {" "}
          <p>{update.texts} </p>
        </div>
      </div>
    );
  });
  const renderafri = africa.map((update) => {
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
        </div>
        <div className="formationapp">
          {" "}
          <p>{update.texts} </p>
        </div>
      </div>
    );
  });
  const renderameri = america.map((update) => {
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
        </div>
        <div className="formationapp">
          <p>{update.texts} </p>
        </div>
      </div>
    );
  });
  const renderhowork = work.map((offshorework) => {
    return (
      <div
        className="how_work"
        style={{
          background: `url(${offshorework.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
        <div className="howork_interior">
          <h1>{offshorework.text}</h1>
          <div className="howork_para">
            <p>{offshorework.textpara}</p>
          </div>
          <p>{offshorework.texts}</p>
          <button className="howork_butn">View more</button>
        </div>
      </div>
    );
  });
  const renderpromotion = promotion.map((announce) => {
    return (
      <div className="accoun_cardfull">
        <div className="promotion-card">
          <a href={announce.link}>
            {" "}
            <img src={announce.image} alt="" />
          </a>
          <div className="promotion-link">
            <a href={announce.link}>{announce.title}</a>
            <h2>{announce.text}</h2>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="alljuris_head">
        <h1>All Jurisdictions</h1>{" "}
        <p>
          Whether you are doing business in Europe, Asia, Africa, the Middle
          East, the Americas or elsewhere, Offshore Company Corp will set up the
          best trading or holding structure for your business in line with local
          laws and regulations.
        </p>
      </div>
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
      <div className="formation-head">
        <h1>Middle East</h1>
        <div className="benefit_section">{rendermiddleast}</div>
      </div>
      <div className="formation-head">
        <h1>Africa</h1>
        <div className="benefit_section">{renderafri}</div>
      </div>
      <div className="formation-head">
        <h1>America</h1>
        <div className="benefit_section">{renderameri}</div>
      </div>
      <div className="renderwork">{renderhowork} </div>
      <div className="fees">
        <div className="offshore_fee">
          <h2>Company Formation Services Fees</h2>
        </div>
        <div className="offshorefee_interior">
          <div className="offshore_structure">
            <h1>From</h1>
            <h2>US$ 599</h2>
            <img src={Fee} alt="" />
          </div>
          <div className="offshore_structure">
            <ul>
              <li>100% successful rate</li>
              <li>Fast, easy & highest confidential via secured systems</li>
              <li>Dedicated support (24/7)</li>
              <li>Just Order, We Do All For You</li>{" "}
              <li>Offer set up over 25 jurisdictions</li>
            </ul>
          </div>
          <div className="offshore_structure">
            {" "}
            <a href="/order-services?action=step1">
              <button>Incorporate Company Now</button>
            </a>
          </div>
        </div>
        <div id="promotion-head">
          <h1>Promotion</h1>
        </div>

        <div className="promotion">{renderpromotion}</div>
      </div>
    </React.Fragment>
  );
}

export default Jurisdictions;
