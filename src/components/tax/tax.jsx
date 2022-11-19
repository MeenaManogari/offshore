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
      image: singapore,
      images: sporeflag,
      text: "Help you prepare, maintain your accounting documents and audit by a Certified Public Accountant firm",
    },
    {
      image: hongkong,
      images: kongflag,
      text: "Our specialists assist you to fulfill the compliance requirement and keep proper books of accounts, identifying tax-efficient strategie",
    },
    {
      image: uk,
      images: ukflag,
      text: "Prepare account and help to reduce the administrative, request UTR number and tax assessment for your company allowing you to concentrate on running your business",
    },
  ];

  const renderaccount = taxaccount.map((opening) => {
    return (
      <div
        className="account_card"
        style={{
          background: `url(${opening.image})`,
          backgroundSize: "cover",
          backgroundImage: "Transparent",
        }}
      >
        <div className="country">
          {" "}
          <h3>{opening.images}</h3>{" "}
        </div>
        <div className="taxes">
          <h2>{opening.text}</h2>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div id="head">
        <h1>Tax - Accounting & Auditing</h1>
      </div>

      <div className="accounting">{renderaccount}</div>
      {/* <div className="note">
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
        <button className="butn">See more details</button>
      </div> */}
    </React.Fragment>
  );
};

export default Tax;
