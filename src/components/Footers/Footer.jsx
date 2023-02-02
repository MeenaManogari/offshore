import React from "react";
import "./Footer.css";
import arrowdown from "../../assets/icons/Footericons/footer-arrowdown.svg";
import facebook from "../../assets/icons/Footericons/icon-facebook.svg";
import instagram from "../../assets/icons/Footericons/icon-instagram.svg";
import language from "../../assets/icons/Footericons/icon-lang.svg";
import linkedin from "../../assets/icons/Footericons/icon-linkedin.svg";
import twitter from "../../assets/icons/Footericons/icon-twitter.svg";
import youtube from "../../assets/icons/Footericons/icon-youtube.svg";
import india from "../../assets/icons/Footericons/india-flag.png";
const Footers = () => {
  return (
    <>
      <div className="footer_section">
        <div className="footer_drop">
          <div className="countrylinks">
            <a href="#">
              <img src={india} alt="" /> india
            </a>
          </div>
          <div className="lang_select">
            <img src={language} alt="" />
            <select>
              <option>English</option>
              <option>বাংলা</option>
              <option>हिन्दी</option>
              <option>Telugu</option>
              <option>Marathi</option>
              <option>Gujarati</option>
              <option>Kannada</option>
              <option>Odia (Oriya)</option>
              <option>Malayalam</option>
            </select>
          </div>
        </div>

        <div className="footer_pagelinks">
          <div className="pagelinksone">
            <a href="#"> About Us</a>
            <a href="#"> Universal Terms Of Service</a>
            <a href="#"> Legal Agreements</a>
            <a href="#"> Privacy Policy</a>
            <a href="#">Payment Guidelines</a>
            <a href="#">FATF Sanctioned Countries</a>
            <a href="#">One IBC Safeguard</a>
            <a href="#">Legal Disclaimer</a>
          </div>
          <div className="pagelinkstwo">
            <a href="#"> Download Documents</a>
            <a href="#">Shelf Companies</a>
            <a href="#">Countries / Jurisdictions</a>
            <a href="#">Glossary</a>
            <a href="#">Make Payment</a>
            <a href="#">One IBC Structure</a>
            <a href="#">FAQs</a>
            <a href="#">Career</a>
          </div>
          <div className="social_media">
            <h3>Social Network</h3>
            <div className="media_icons">
              <a href="#">
                <img src={facebook} alt="fb" />
              </a>
              <a href="#">
                <img src={youtube} alt="" />
              </a>
              <a href="#">
                <img src={linkedin} alt="" />
              </a>
              <a href="#">
                <img src={instagram} alt="" />
              </a>
              <a href="#">
                <img src={twitter} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footers;
