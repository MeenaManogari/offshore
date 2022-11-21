import React from "react";
import gplay from "../../assets/images/home/googleplay.png";
import appstore from "../../assets/images/home/appstore.png";
import qrcode from "../../assets/images/home/qr-code.png";
import "./Loadabout.css";
const Appload = () => {
  return (
    <>
      <div className="loadapp">
        <div className="appbtn">
          <div>
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
          <img src="" alt="" />
        </div>
      </div>
      <div className="mediaabout">
        <h2>What the media say about us</h2>
        <div className="mediacards">
          <div id="whitecard">
            <img src="" alt="" />
          </div>
          <div id="whitecard">
            <img src="" alt="" />
          </div>
          <div id="whitecard">
            <img src="" alt="" />
          </div>
        </div>
        <button id="views">View All</button>
      </div>
    </>
  );
};
export default Appload;
