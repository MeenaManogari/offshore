import React from "react";
import "./jurisupdate.css";
import seychellesexports from "../../assets/images/Home/jurisdiction/seychelles-exports.jpg";
import investbelize from "../../assets/images/Home/jurisdiction/invest-opportunities.jpg";
import businessbelize from "../../assets/images/Home/jurisdiction/business-belize.jpg";
import establishswitz from "../../assets/images/Home/jurisdiction/establish-switzerland.jpg";
import protectassets from "../../assets/images/Home/jurisdiction/protect-assets.jpg";

const Jurisupdate = () => {
  return (
    <>
      <div className="juris_main">
        <h1>Jurisdiction Update</h1>
        <div className="juris_cards">
          <div className="seychelles">
            <img src={seychellesexports} alt="" />
            <div className="export_text">
              <h2>
                <a href="#">Seychelles exports and imports at a glance</a>
              </h2>
              <p>
                Seychelles is a potential jurisdiction which has the
                well-performing economic status with the GDP keep consistently
                growing over the past few years.
              </p>
              <button>Seychelles</button>
              <a href="#" id="reads">
                Read more
              </a>
            </div>
          </div>
          <div className="invest_belize">
            <img src={investbelize} alt="" />
            <div className="juris_text">
              <h2>
                <a href="#">
                  Investment opportunities in Belize that businesses may have
                  missed
                </a>
              </h2>
              <button>Belize</button>
              <a href="#" id="read">
                Read more
              </a>
            </div>
          </div>
          <div className="business_belize">
            <img src={businessbelize} alt="" />
            <div className="juris_text">
              <h2>
                <a href="#"> Opportunities for starting a business in Belize</a>
              </h2>
              <p>
                Are you planning on starting an offshore business? If you are
                seeking jurisdictions that give you abundant incentives when
                starting a business
              </p>
              <button>Belize</button>
              <a href="#" id="read">
                Read more
              </a>
            </div>
          </div>
          <div className="establish_switz">
            <img src={establishswitz} alt="" />
            <div className="juris_text">
              <h2>
                <a href="#">
                  Establishing an offshore trading company in Switzerland
                </a>
              </h2>
              <p>
                With a particularly stable economy and special privileges for
                foreign businesses, Switzerland has continuously been seen as a
                "landing spot" for import and export companies. For this reason,
                the country has always been a pioneer and attractive place for
                investors in terms of international trade.
              </p>
              <button>Switzerland</button>
              <a href="#" id="read">
                Read more
              </a>
            </div>
          </div>
          <div className="protect_assets">
            <img src={protectassets} alt="" />
            <div className="juris_text">
              <h2>
                <a href="#">How an offshore trust can protect your assets</a>
              </h2>
              <p>
                Most people are not aware of protecting their assets until bad
                situations occur, such as getting a divorce, bankruptcy, civil
                lawsuit, and so on. That is why it is never too late to start
                seeking to establish an offshore trust to protect your assets.
              </p>
              <a href="#" id="read">
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="juris_view">
          <button>View all</button>
        </div>
      </div>
    </>
  );
};
export default Jurisupdate;
