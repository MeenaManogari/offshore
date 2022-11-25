import React from "react";
import "./Incorporate.css";
import incorporate from "../../assets/images/Howtosetup/howitwork.jpg";
import prepares from "../../assets/images/Howtosetup/preparation.png";
import details from "../../assets/images/Howtosetup/company_details.png";
import pays from "../../assets/images/Howtosetup/payment.png";
import send from "../../assets/images/Howtosetup/send.png";
const Corporate = () => {
  return (
    <>
      <div
        className="setupbg"
        style={{
          backgroundImage: `url(${incorporate})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="setuphead">
          <h1>How to Incorporate Your Company</h1>
        </div>
      </div>
      <div className="setupcards">
        <div className="card_contents">
          <div className="cardsteps">
            <img src={prepares} alt="preparation" />
            <div className="steps">
              <h3>Step 1</h3>
            </div>
          </div>
          <div className="cardinfo">
            <h2>Preparation</h2>
            <p>
              Request free company name search We check the eligibility of the
              name, and make suggestion if neccessry.
            </p>
          </div>
        </div>
        <div className="card_contents">
          <div className="cardsteps">
            <img src={details} alt="companydetails" />
            <div className="steps">
              <h3>Step 2</h3>
            </div>
          </div>
          <div className="cardinfo">
            <h2>Your Company Details</h2>
            <ul>
              <li>
                Register or login and fill in the company names and director/
                shareholder(s)
              </li>
              <li>
                Fill in shipping, company address or special request (if any).
              </li>
            </ul>
          </div>
        </div>
        <div className="card_contents">
          <div className="cardsteps">
            <img src={pays} alt="payment" />
            <div className="steps">
              <h3>Step 3</h3>
            </div>
          </div>
          <div className="cardinfo">
            <h2>Payment for Your Favorite Company</h2>
            <p>
              Choose your payment method (We accept payment by Credit/Debit
              Card, PayPal or Wire Transfer).
            </p>
          </div>
        </div>
        <div className="card_contents">
          <div className="cardsteps">
            <img src={send} alt="kit" />
            <div className="steps">
              <h3>Step 4</h3>
            </div>
          </div>
          <div className="cardinfo">
            <h2>Send the Company Kit to Your Address</h2>
            <ul>
              <li>
                You will receive soft copies of necessary documents including:
                Certificate of Incorporation, Business Registration, Memorandum
                and Articles of Association, etc. Then, your new company in a
                jurisdiction is ready to do business!
              </li>
              <li>
                You can bring the documents in company kit to open corporate
                bank account or we can help you with our long experience of
                Banking support service.
              </li>
            </ul>
          </div>
        </div>

        <div className="setupbtn">
          <button>Setup Offshore Company Now</button>
        </div>
      </div>
    </>
  );
};
export default Corporate;
