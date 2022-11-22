import React from "react";
import "./judicial.css";
import seychelles from "../../assets/images/home/saychelles.jpg";
import investment from "../../assets/images/home/investment-juris.jpg";
import belize from "../../assets/images/home/opportunities-juris.jpg";
import switerland from "../../assets/images/home/switzerland-juris.jpg";
import protection from "../../assets/images/home/protect-juris.jpg";

const Judicial = () => {
  const jurisdiction = [
    // {
    //   image: seychelles,
    //   link: "/en/insight/jurisdiction-update/seychelles-exports-and-imports-at-a-glance",
    //   linktext: "Seychelles exports and imports at a glance",
    //   text: "Seychelles is a potential jurisdiction which has the well-performing economic status with the GDP keep consistently growing over the past few years.",
    //   butto: "seychelles",
    //   buttonlink: "/en/insight/jurisdiction-update/seychelles",
    // },
    // {
    //   img: investment,
    //   link: "/en/insight/jurisdiction-update/investment-opportunities-in-belize-that-businesses-may-have-missed",
    //   linktext:
    //     "Investment opportunities in Belize that businesses may have missed",
    //   butto: "Belize",
    //   buttonlink: "/en/insight/jurisdiction-update/belize",
    // },
    {
      images: belize,
      link: "/en/insight/jurisdiction-update/opportunities-for-starting-a-business-in-beli",
      linktext: "Opportunities for starting a business in Belize",
      text: "Are you planning on starting an offshore business? If you are seeking jurisdictions that give you abundant incentives when starting a business",
      butto: "Belize",
      buttonlink: "/en/insight/jurisdiction-update/belize",
    },
    {
      images: switerland,
      link: "/en/insight/jurisdiction-update/establishing-an-offshore-trading-company-in-switzerland",
      linktext: "Establishing an offshore trading company in Switzerland",
      text: "With a particularly stable economy and special privileges for foreign businesses, Switzerland has continuously been seen as a landing spot for import and export companies. For this reason, the country has always been a pioneer and attractive place for investors in terms of international trade.",
      butto: "Switzerland",
      buttonlink: "/en/insight/jurisdiction-update/switzerland",
    },
    {
      images: protection,
      link: "/en/insight/jurisdiction-update/how-an-offshore-trust-can-protect-your-assets",
      linktext: "How an offshore trust can protect your assets",
      text: "Most people are not aware of protecting their assets until bad situations occur, such as getting a divorce, bankruptcy, civil lawsuit, and so on. That is why it is never too late to start seeking to establish an offshore trust to protect your assets.",
    },
  ];
  const renderjudicial = jurisdiction.map((update) => {
    return (
      <div className="judicial_segment">
        <div className="judicial_card">
          <div className="judicial_interior">
            {/* <img src={update.image} />
            <img src={update.img} /> */}
            <img
              src={update.images}
              alt="images"
              // width="293.33px"
              // height="207.7px"
            />
            <div>
              <a href={update.link} className="link_text">
                {update.linktext}{" "}
              </a>
              <p>{update.text} </p>
              <a href={update.buttonlink}>
                <button>{update.butto}</button>
                <a href={update.link} id="read">
                  Read more
                </a>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="judicial_head">
        <h1>Jurisdiction Update</h1>
      </div>
      <div className="judicial_render">{renderjudicial} </div>
      <div className="judicial_butn">
        <button>View all</button>
      </div>
    </React.Fragment>
  );
};

export default Judicial;
