import React from "react";
import "./Footerlinks.css";
import footphone from "../../assets/icons/Footerlinkicons/footer-phoneicon.png";
import flagaus from "../../assets/icons/Footerlinkicons/footerflag-aus.svg";
import flagbvi from "../../assets/icons/Footerlinkicons/footerflag-bvi.svg";
import flaghk from "../../assets/icons/Footerlinkicons/footerflag-hongkong.svg";
import flaglithu from "../../assets/icons/Footerlinkicons/footerflag-lithuania.svg";
import flagsingpore from "../../assets/icons/Footerlinkicons/footerflag-singapore.svg";
import flaguk from "../../assets/icons/Footerlinkicons/footerflag-uk.svg";
import flagusa from "../../assets/icons/Footerlinkicons/footerflag-usa.svg";
import footviber from "../../assets/icons/Footerlinkicons/footerviber.svg";
import footwhatsapp from "../../assets/icons/Footerlinkicons/footerwhatsapp.svg";
import visa from "../../assets/icons/Footerlinkicons/footericon-visa.svg";
import amex from "../../assets/icons/Footerlinkicons/footericon-amex.svg";
import mastercard from "../../assets/icons/Footerlinkicons/footericon-master.svg";
import paypalcard from "../../assets/icons/Footerlinkicons/footericon-paypal.svg";
import norton from "../../assets/icons/Footerlinkicons/footer-nortonsecure.svg";
import trustware from "../../assets/icons/Footerlinkicons/trustware-logo.png";
import copyrighticon from "../../assets/icons/Footerlinkicons/footer-copyright.png";
const Footerlinks = () => {
  return (
    <>
      <div className="parentfooter">
        <div className="Footerchildone">
          <img src={footphone} alt="" height="20px" width="20px" />
          <h3>Call Us:</h3>
        </div>
        <div className="Footerchildtwo">
          <div className="country-contacts" id="flagone">
            <div className="country-flag">
              <a href="#">
                <img src={flaghk} alt="" />
                Hong Kong:
              </a>
              <a href="#">+852 5804 3919</a>
            </div>
          </div>
          <div className="country-contacts" id="flagtwo">
            <div className="country-flag">
              <a href="#">
                <img src={flagaus} alt="" />
                Australia:
              </a>
              <a href="#">+61 390 185 385</a>
            </div>
          </div>
          <div className="country-contacts" id="flagthree">
            <div className="country-flag">
              <a href="#">
                <img src={flaguk} alt="" />
                United Kingdom:
              </a>
              <a href="#">+44 207 193 1138</a>
            </div>
          </div>
          <div className="country-contacts" id="flagfour">
            <div className="country-flag">
              <a href="#">
                <img src={flagsingpore} alt="" />
                Singapore:
              </a>
              <a href="#">+65 6591 9991</a>
            </div>
          </div>
          <div className="country-contacts" id="flagfive">
            <div className="country-flag">
              <a href="#">
                <img src={flagusa} alt="" />
                United States:
              </a>
              <a href="#">+1 949 864 6011</a>
            </div>
          </div>
          <div className="country-contacts" id="flagsix">
            <div className="country-flag">
              <a href="#">
                <img src={flagbvi} alt="" />
                British Virgin Islands:
              </a>
              <a href="#">+1 949 864 6011</a>
            </div>
          </div>
          <div className="country-contacts" id="flagseven">
            <div className="country-flag">
              <a href="#">
                <img src={flaglithu} alt="" />
                Lithuania:
              </a>
              <a href="#">+370 5266 4444</a>
            </div>
          </div>

          <div className="country-contacts" id="flageight">
            <a href="#">
              <img src={footwhatsapp} alt="" />
              +65 932 66888
            </a>
          </div>

          <div className="country-contacts" id="flagnine">
            <a href="#">
              <img src={footviber} alt="" />
              +65 932 66888
            </a>
          </div>
        </div>
        <div className="viewslink">
          <a href="#">View more Worldwide phone support</a>
        </div>
        <div className="cardlink">
          <div className="cardlinkbg">
            <a href="#">
              <img src={visa} alt="" />
            </a>
          </div>
          <div className="cardlinkbg">
            <a href="#">
              <img src={mastercard} alt="" />
            </a>
          </div>
          <div className="cardlinkbg">
            <a href="#">
              <img src={amex} alt="" />
            </a>
          </div>
          <div className="cardlinkbg">
            <a href="#">
              <img src={paypalcard} alt="" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={norton} alt="" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={trustware} alt="" />
            </a>
          </div>
        </div>
        <div className="copyrights">
          <img src={copyrighticon} alt="" height="25px" width="25px" />
          <p>
            Offshore Company Corp - Brand name of One IBC Limited Copyright
            ©1997 - 2023 One IBC Pte. Ltd. (UEN No: 201602796Z), incorporated in
            the Republic of Singapore with limited liability and a member firm
            of One IBC network of independent and separate legal entity
            affiliated with One IBC Group ("One IBC AG"), a Swiss entity. All
            rights reserved. Please see One IBC structure for further details
          </p>
        </div>
      </div>
    </>
  );
};
export default Footerlinks;
