import React, { useState } from "react";
import "./changeAge.css";
import Down from "../../assets/icons/feature_icons/chevron-down.svg";
import Faqbg from "../.././assets/images/feature/faqs-global.png";

const ChangeAgent = () => {
  const agent = [
    {
      id: 1,
      title:
        " Can I switch my Offshore Company from one Registered Agent to another ?",
      info: "Yes. Change of Agent is a fairly standard procedure for IBC`s. It can be done by requesting the current Registered Agent to resign and pass the administration of Your offshore company to another licensed Registered Agent. Such request should be provided in writing. All reputable Registered Agents would honour such request without question.",
    },
    {
      id: 2,
      title:
        "What documents will I get to ensure my full control over the company and to enable me to resign any officers or agents if I want to?",
      info: "Apart from the trust declarations from the nominee shareholder, you can get a similar undertaking from the nominee director.As an alternative, the nominee director can issue an undated resignation letter, which can be executed by you at any time, thus removing the director from office with immediate or past effect.",
    },
    {
      id: 3,
      title:
        "What are the required documents for the change of registered agent?",
      info: "The new registered agent has to prepare the following forms.Shareholder’s resolution mentioning the change of registered agent. Change of registered office signed by the director/shareholder.Notice given to the old agent about their resignation and submitted to the local authority.",
    },
    {
      id: 4,
      title:
        "Does the registered agent participate in the decision making of the offshore company?",
      info: "Does the registered agent participate in the decision making of the offshore company?",
    },
    {
      id: 5,
      title:
        "Why should I pay for the Registered Office and Registered Agent if I don't even use them?",
      info: "You do use them. Apart from lending his office address to be used as the legal address of your company, the registered agent is also legally responsible for the safe custody and updating of a range of documents – namely, the memorandum and articles of association of the company, the register of members or a copy thereof, the register of directors or a copy thereof, and copies of all notices and other documents filed by the company in the previous ten years.",
    },
  ];

  const renderfaqs = agent.map((faqs) => {
    const [toggle, setToggle] = useState(false);
    const toggleState = () => {
      setToggle(!toggle);
    };
    return (
      <div className="acccordion">
        <div className="accordion-visible" onClick={toggleState}>
          <h5>{faqs.id}</h5>
          <h4>{faqs.title}</h4>
          <img className={toggle && "active"} src={Down} alt="" />
        </div>
        {toggle && (
          <div>
            <div className="accordion-para">
              <div>
                <h2>{faqs.info}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  });

  return (
    <React.Fragment>
      <div
        className="faqhead"
        style={{
          background: `url(${Faqbg})`,
          backgroundSize: "cover",
          backgroundImage: "Transparent",
        }}
      >
        <div className="faq-interior">
          {" "}
          <h1>Faqs</h1>
          <button className="faq-butn">View more</button>
        </div>
      </div>
      <div className="faqrender">{renderfaqs}</div>
    </React.Fragment>
  );
};

export default ChangeAgent;
