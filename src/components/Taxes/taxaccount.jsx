import React from "react";
import "./taxaccount.css";
import hkflag from "../../assets/images/home/Tax/tax-hk.png";
import sgflag from "../../assets/images/home/Tax/tax-sg.png";
import ukflag from "../../assets/images/home/Tax/tax-ukflag.png";
import hkimg from "../../assets/images/home/Tax/tax-hongkong.png";
import sgimg from "../../assets/images/home/Tax/tax-singapore.png";
import ukimg from "../../assets/images/home/Tax/tax-uk.png";
const Taxaccount = () => {
  return (
    <>
      <div className="tax_main">
        <h1>Tax - Accounting & Auditing</h1>
        <div className="tax_cardlist">
          <div className="tax_cards">
            <img src={hkimg} alt="" id="cityimg" />

            <div className="tax_text">
              <div className="tax_flags">
                <img src={hkflag} alt="" />
                <h2>Hong Kong</h2>
              </div>
              <p>
                Help you prepare, maintain your accounting documents and audit
                by a Certified Public Accountant firm
              </p>
              <a href="#">Read more</a>
            </div>
          </div>
          <div className="tax_cards">
            <img src={sgimg} alt="" id="cityimg" />

            <div className="tax_text">
              <div className="tax_flags">
                <img src={sgflag} alt="" />
                <h2>Singapore</h2>
              </div>
              <p>
                Our specialists assist you to fulfill the compliance requirement
                and keep proper books of accounts, identifying tax-efficient
                strategies
              </p>
              <a href="#">Read more</a>
            </div>
          </div>
          <div className="tax_cards">
            <img src={ukimg} alt="" id="cityimg" />

            <div className="tax_text">
              <div className="tax_flags">
                <img src={ukflag} alt="" />
                <h2>United Kingdom</h2>
              </div>
              <p>
                Prepare account and help to reduce the administrative, request
                UTR number and tax assessment for your company allowing you to
                concentrate on running your business
              </p>
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
        <div className="tax_btn">
          <button>See more details</button>
        </div>
      </div>
    </>
  );
};
export default Taxaccount;
