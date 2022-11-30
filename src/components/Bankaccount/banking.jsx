import React from "react";
import "./banking.css";
import bankone from "../../assets/icons/Openaccount/1-how-open.svg";
import banktwo from "../../assets/icons/Openaccount/2-open-bank-account.svg";
import bankthree from "../../assets/icons/Openaccount/3-open-bank-account.svg";
import bankfour from "../../assets/icons/Openaccount/4-open-bank-account.svg";

const Accountsteps = () => {
  return (
    <div className="accountopening_steps">
      <div className="accountopening_head">
        <h1>How To Open Account in 4 Steps</h1>
      </div>
      <div className="bankaccount_stepsfull">
        <div className="bankaccount_steps">
          <div className="account_steps">
            <div>
              <img src={bankone} alt="" />
              <h2>Select Bank you preferred and send us basic information</h2>
              <p>
                Please select a bank option you prefer. Personal Identity
                Information of the Company Beneficiary Owner need to be provided
              </p>
            </div>
            <h3 className="steps">Step 1</h3>
          </div>
        </div>
        <div className="bankaccount_steps">
          <div className="account_steps">
            <div>
              <img src={banktwo} alt="" />
              <h2>Apply for your account</h2>
              <p>
                Detailed Business Questionnaire (a sample provided), full
                package of your Entity documents are submitted for an initial
                review by our Banking staff
              </p>
            </div>
            <h3 className="steps">Step 2</h3>
          </div>
        </div>
        <div className="bankaccount_steps">
          <div className="account_steps">
            <div>
              <img src={bankthree} alt="" />
              <h2>Finalize the account process</h2>
              <p>
                Hand signed all the necessary documents to finalize the
                progress.
              </p>
              <p>
                In case, present banks in your selection, a physical meeting is
                required, other wide bank staff will video/conference call to
                completion process.
              </p>
            </div>
            <h3 className="steps">Step 3</h3>
          </div>
        </div>
        <div className="bankaccount_steps">
          <div className="account_steps">
            <div>
              <img src={bankfour} alt="" />
              <h2>
                Your international business account is ready for you to trade
                internationally
              </h2>
              <p>
                Our wide range dedicated services (Merchant Account, Trading
                Account, etc) are always available to customize your needs.
              </p>
              <p>
                Any additional requirements, alteration, update your newest
                information related to your bank account, we are here to assist
                you.
              </p>
            </div>
            <h3 className="steps">Step 4</h3>
          </div>
        </div>
      </div>
      <div className="openaccount_butn">
        <button>Open Accout Now</button>
      </div>
    </div>
  );
};
export default Accountsteps;
