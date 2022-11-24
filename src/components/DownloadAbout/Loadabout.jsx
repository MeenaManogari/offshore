import React from "react";
import gplay from "../../assets/images/home/googleplay.png";
import appstore from "../../assets/images/home/appstore.png";
import qrcode from "../../assets/images/home/qr-code.png";
import mobiles from "../../assets/images/home/bg-footer.png";
import yahoo from "../../assets/images/home/yahhoofinance.png";
import techtime from "../../assets/images/home/techtime.png";
import mw from "../../assets/images/home/marketwatch.png";
import partnerbg from "../../assets/images/home/bg-about-us.jpg";

import "./Loadabout.css";
const Appload = () => {
  return (
    <>
      <div className="loadapp">
        <div className="appbtn">
          <div id="down">
            <h1>Download One IBC Mobile App now</h1>
          </div>
          <div className="apps">
            <div className="playbtn">
              <img src={gplay} alt="googleplay" />
              <img src={appstore} alt="Appstore" />
            </div>
            <div>
              <img src={qrcode} alt="qrcode" />
            </div>
          </div>
        </div>
        <div className="mobiles">
          <img src={mobiles} alt="mobile" />
        </div>
      </div>
      <div className="mediaabout">
        <h2>What the media say about us</h2>
        <div className="mediacards">
          <div id="whitecard">
            <img src={yahoo} alt="yahoo" />
          </div>
          <div id="whitecard">
            <img src={techtime} alt="techtimes" />
          </div>
          <div id="whitecard">
            <img src={mw} alt="marketwatch" />
          </div>
        </div>
        <div className="viewbtn">
          <button id="views">View All</button>
        </div>
      </div>
      <div
        className="aboutus"
        style={{
          backgroundImage: `url(${partnerbg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="contents">
          <h1>About Us</h1>
          <p>
            We are always proud of being an experienced Financial and Corporate
            Services provider in the international market. We provide the best
            and most competitive value to you as valued customers to transform
            your goals into a solution with a clear action plan. Our Solution,
            Your Success.
          </p>
        </div>
        <div className="learn">
          <button>Learn More</button>
        </div>
      </div>
    </>
  );
};
export default Appload;
