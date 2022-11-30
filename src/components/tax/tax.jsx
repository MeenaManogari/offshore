import React from "react";
import "./tax.css";
import singapore from "../../assets/images/home/singaporeac.png";
import hongkong from "../../assets/images/home/hongkongac.png";
import uk from "../../assets/images/home/ukac.png";
import kongflag from "../../assets/icons/flag-hongkong.svg";
import sporeflag from "../../assets/icons/singa.png";
import ukflag from "../../assets/icons/uk.png";

const Tax = () => {
  const taxaccount = [
    {
      image: hongkong,
      images: kongflag,
      name: "Hongkong",
      link: "/accounting-auditing/jurisdiction/hong-kong",
      text: "Our specialists assist you to fulfill the compliance requirement and keep proper books of accounts, identifying tax-efficient strategie",
    },
    {
      image: singapore,
      images: sporeflag,
      name: "Singapore",
      link: "/accounting-auditing/jurisdiction/singapore",
      text: "Help you prepare, maintain your accounting documents and audit by a Certified Public Accountant firm",
    },

    {
      image: uk,
      images: ukflag,
      name: "United Kingdom",
      link: "/accounting-auditing/jurisdiction/united-kingdom",
      text: "Prepare account and help to reduce the administrative, request UTR number and tax assessment for your company allowing you to concentrate on running your business",
    },
  ];

  const renderaccount = taxaccount.map((opening) => {
    return (
      <div className="account_cardfull">
        <div className="account_card">
          <div className="account_topimages">
            <img src={opening.image} alt="" />{" "}
          </div>
          <div className="country">
            <img src={opening.images} />
            <a href={opening.link}>{opening.name} </a>
          </div>
          <div className="taxes">
            <p>{opening.text}</p>
            <a href={opening.link}>Read more</a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="taxaudicting">
        <div id="head">
          <h1>Tax - Accounting & Auditing</h1>
        </div>

        <div className="accounting">{renderaccount}</div>
        <div className="note">
          <p>Note:</p>
          <p>
            Accounting & audit just apply for jurisdictions where the government
            requires as Hong Kong, Singapore, UK, Switzerland, Cyprus, etc
          </p>
          <p>
            However, jurisdictions as BVI, Cayman, Mauritius, Samoa, Belize are
            not required
          </p>
        </div>
        <div className="taxing">
          {" "}
          <button className="account_butn">See more details</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Tax;
