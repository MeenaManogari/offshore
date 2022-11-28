import React from "react";
import "./aboutcontent.css";
import aboutvideo from "../../assets/videos/aboutus.mp4";
import competitive from "../../assets/icons/aboutus/competitive.svg";
import confidential from "../../assets/icons/aboutus/confidential.svg";
import executive from "../../assets/icons/aboutus/executive.svg";
import experts from "../../assets/icons/aboutus/experts.svg";
import integrity from "../../assets/icons/aboutus/integrity.svg";
const Aboutcorp = () => {
  return (
    <>
      <div className="aboutinfo">
        <h1>About Offshore Company Corp</h1>
        <h2>Leading corporate services provider</h2>
        <p>
          Offshore Company Corp was established with specialised offshore
          corporation services and additional business services, such as banking
          support, virtual office and local phone. We are proud to offer our
          customers the best, convenient services, solutions and products, with
          over 32 branches, representative offices and associated companies in
          25 countries around the world.
        </p>
        <video src={aboutvideo} controls autoPlay loop />
      </div>
      <div className="aboutushead">
        <h1>Offshore Company Corp - bringing core values to businesses</h1>
        <div className="aboutvalues">
          <div className="values">
            <div className="iconhead">
              <img src={confidential} alt="" />
              <h3>Confidentiality</h3>
            </div>
            <ul>
              <li>
                Confidentiality is one of the most important aspects of our
                work. We guarantee the privacy of our customers through three
                key components.
              </li>
              <li>
                Our website is completely secure. The data our customers enter
                on our websites is encrypted using SSL 128-bit certificate
                encryption.
              </li>
              <li>
                Our IT infrastructure at our offices is fully secure in order to
                prevent any unauthorised access
              </li>
              <li>
                Our customer database cannot be printed or exported. So, all the
                confidential data or personal data of our customers is strictly
                confined to our offices.
              </li>
            </ul>
          </div>
          <div className="values">
            <div className="iconhead">
              <img src={competitive} alt="" />
              <h3>Competitive price policy</h3>
            </div>
            <ul>
              <li>
                Our pricing commitment relies on two major principles - be among
                the most competitive and never increase fees.
              </li>
              <li>
                With holding offices or partnerships in most of the
                jurisdictions where we incorporate companies, we are able to
                offer prices that are transparent, intermediary-free and among
                the most competitive.
              </li>
            </ul>
          </div>
          <div className="values">
            <div className="iconhead">
              <img src={experts} alt="" />
              <h3>Offshore business experts</h3>
            </div>
            <p>
              Our clients are well taken care of. A dedicated account manager,
              specialised in the field of company law and administration, will
              be your point of contact during the year and will assist you with
              your company administration, bank account and any other services
              that we offer. We are committed to always replying to our clients'
              concerns within one business day.
            </p>
          </div>
          <div className="values">
            <div className="iconhead">
              <img src={executive} alt="" />
              <h3>Strong executive team</h3>
            </div>
            <p>
              Our executive team comprises 30 professionals with expert
              experience in offshore business including:
            </p>
            <ul>
              <li>Incorporation</li>
              <li>Banking</li>
              <li>Virtual office</li>
              <li>Local phone</li>
            </ul>
          </div>
          <div className="values">
            <div className="iconhead">
              <img src={integrity} alt="" />
              <h3>Integrity and due diligence</h3>
            </div>
            <p>
              For the best interests of our customers, we aim to provide the
              best business standards in a practical and legal way. Being
              mindful of the laws and regulations on the prevention of
              international money laundering, we implement strict risk-control
              procedures and balances
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Aboutcorp;
