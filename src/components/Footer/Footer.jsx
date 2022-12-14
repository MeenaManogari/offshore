import React from "react";
import facebook from "../../assets/icons/fb.svg";
import youtube from "../../assets/icons/yt.svg";
import linked from "../../assets/icons/link.svg";
import insta from "../../assets/icons/insta.svg";
import twitter from "../../assets/icons/twitter.svg";
import language from "../../assets/icons/icon-lang.svg";
import Hongkong from "../../assets/icons/hongkongflag.svg";
import UK from "../../assets/icons/flag-uk.svg";
import USA from "../../assets/icons/flag-usa.svg";
import singapore from "../../assets/icons/flag-singapore.svg";
import lithuania from "../../assets/icons/flag-lithuania.svg";
import island from "../../assets/icons/flag-bvi.svg";
import Australia from "../../assets/icons/flag-aus.svg";
import wapp from "../../assets/icons/whatsappicon.svg";
import viber from "../../assets/icons/icon-viber.svg";
import amex from "../../assets/icons/footer-amex.svg";
import master from "../../assets/icons/footer-master.svg";
import visa from "../../assets/icons/footer-visa.svg";
import paypal from "../../assets/icons/footer-paypal.svg";
import norton from "../../assets/icons/footer-norton.svg";
import trust from "../../assets/icons/footer-trust.png";
import india from "../../assets/icons/indiaflag.png";
import calling from "../../assets/icons/phoneicon.svg";
import "./Footer.css";
import "../../App.css";
const Footer = () => {
  return (
    <>
      <div className="foot">
        <div className="dropdown">
          <button className="footbtn">
            {" "}
            <img src={india} alt="" /> India
          </button>
          <div>
            <img src={language} />
            <select>
              <option value="1">English</option>
              <option value="2">বাংলা</option>
              <option value="3">हिन्दी</option>
              <option value="4">Telugu</option>
              <option value="5">Marathi</option>
              <option value="6">Gujarati</option>
              <option value="7">Kannada</option>
              <option value="8">Odiya(Oriya)</option>
              <option value="9">Malayalam</option>
            </select>
          </div>
        </div>
        <div className="links">
          <div className="linkone">
            <a href="#">About Us</a>
            <a href="#">Universal Terms of Service</a>
            <a href="#">Legal Agreements</a>
            <a href="#">Privacy Policy</a>
          </div>
          <div className="linktwo">
            <a href="#">Payment Guidelines</a>
            <a href="#">FAFT Sanctioned Countries</a>
            <a href="#">One IBC Safeguard</a>
            <a href="#">Legal Disclaimer</a>
          </div>
          <div className="linkthree">
            <a href="#">Download Documents</a>
            <a href="#">Shelf Companies</a>
            <a href="#">Countries/Jurisdictions</a>
            <a href="#">Glossary</a>
          </div>
          <div className="linkfour">
            <a href="#">Make Payment</a>
            <a href="#">One IBC Structure</a>
            <a href="#">FAQs</a>
            <a href="#">Career</a>
          </div>
          <div className="linkfive">
            <div className="media">
              <h3>Social Media</h3>
            </div>
            <div className="mediaicon">
              <img src={facebook} alt="fb" />
              <img src={youtube} alt="yt" />
              <img src={linked} alt="link" />
              <img src={insta} alt="instagram" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <h4>Call Us:</h4>
        <div className="countries">
          <div className="listone">
            <div className="segment">
              <a href="#">
                <div className="flaglinks">
                  <img src={Hongkong} alt="flag" />
                  <p>Hongkong:</p>
                </div>
                <p>+852 5804 3919</p>
              </a>
              <a href="#">
                <div className="flaglinks">
                  <img src={Australia} alt="flag" />
                  <p>Australia:</p>
                </div>
                <p>+61 390 185 385</p>
              </a>
              <a href="#">
                <div className="flaglinks">
                  <img src={UK} alt="flag" />
                  <p>UnitedKingdom:</p>
                </div>
                <p>+44 207 193 1138</p>
              </a>
            </div>
            <div className="segment">
              <a href="#">
                <div className="flaglinks">
                  <img src={singapore} alt="flag" />
                  <p>Singapore:</p>
                </div>
                <p>+65 6591 9991</p>
              </a>
              <a href="#">
                <div className="flaglinks">
                  <img src={USA} alt="flag" />
                  <p>UnitedStates:</p>
                </div>
                <p>+1 949 864 6011</p>
              </a>
              <a href="#">
                <div className="flaglinks">
                  <img src={island} alt="flag" />
                  <p>British Virgin Islands</p>
                </div>
                <p>+1 949 864 6011</p>
              </a>
            </div>
            <div className="segment">
              <a href="#">
                <div className="flaglinks">
                  <img src={lithuania} alt="flag" />
                  <p>Lithuania:</p>
                </div>
                <p>+370 5266 4444</p>
              </a>
              <div className="flaglinks">
                <a href="#">
                  <img src={wapp} alt="app" />
                  <p>+65 932 66888</p>
                </a>
              </div>
              <div className="flaglinks">
                <a href="#">
                  <img src={viber} alt="app" />
                  <p>+65 932 66888</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hline"></div>
        <div className="viewmore">
          <a href="#"> View more Worldwide phone support</a>
        </div>
        <div className="hline"></div>
        <div className="footend">
          <div className="footcards">
            <div className="bg">
              <img src={visa} alt="visa" />
            </div>
            <div className="bg">
              <img src={master} alt="mastercard" />
            </div>
            <div className="bg">
              <img src={amex} alt="america" />
            </div>
            <div className="bg">
              <img src={paypal} alt="paypal" />
            </div>
            <div>
              <img src={norton} alt="norton" />
            </div>
            <div>
              <img src={trust} alt="trust" />
            </div>
          </div>
          <div className="pageend">
            <p>
              Offshore Company Corp - Brand name of One IBC Limited Copyright
              ©1997 - 2022 One IBC Pte. Ltd. (UEN No: 201602796Z), incorporated
              in the Republic of Singapore with limited liability and a member
              firm of One IBC network of
            </p>
            <p>
              independent and separate legal entity affiliated with One IBC
              Group ("One IBC AG"), a Swiss entity. All rights reserved. Please
              see One IBC structure for further details.
            </p>
          </div>
        </div>
      </div>
      <div className="chat">
        <button>Chat with us now!</button>
      </div>
    </>
  );
};
export default Footer;
