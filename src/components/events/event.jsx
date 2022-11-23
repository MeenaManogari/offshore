import React from "react";
import "./event.css";
import China from "../../assets/images/home/china-event.png";
import Shanghai from "../../assets/images/home/shanghai-event.png";

const Events = () => {
  const event = [
    {
      image: China,
      linktext: "China Offshore Shanghai Summit 2018",
      text: "Shanghai, 13 November 2018 - One IBC attended this year’s China Offshore Shanghai Summit, held from November 13 - 15 in...",
      learn: "/en/insight/events/china-offshore-shanghai-summit-2018",
    },
    {
      image: Shanghai,
      linktext:
        "One IBC Join Big Event in China Offshore Summit 2018 and Our Gift to You. Get it today",
      learn:
        "/en/insight/events/one-ibc-join-big-event-in-china-offshore-summit-2018-and-our-gift-to-you-get-it-today",
    },
  ];
  const renderevents = event.map((eve) => {
    return (
      <div className="event_cardfull">
        <div className="event-card">
          <a href={eve.learn}>
            {" "}
            <img src={eve.image} alt="" />
          </a>
          <div className="event-link">
            <a href={eve.learn}>{eve.linktext}</a>
            <p>{eve.text}</p>
            <a href={eve.learn} id="eve-learn">
              Learn more
            </a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      {" "}
      <div id="event-head">
        <h1>Events</h1>
      </div>
      <div className="event">{renderevents}</div>
      <div className="taxing">
        {" "}
        <button className="promotion_butn">View all</button>
      </div>
    </React.Fragment>
  );
};
export default Events;
