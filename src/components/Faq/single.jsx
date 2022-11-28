import React, { useState, useEffect, useRef } from "react";
import "./faq.css";
import Down from "../../assets/icons/feature_icons/chevron-down.svg";
import add from "../../assets/icons/feature_icons/plus.svg";
import sub from "../../assets/icons/feature_icons/plus.svg";
import Faqbg from "../.././assets/images/feature/faqs-global.png";

const Single = () => {
  const questions = [
    {
      id: 1,
      title: "How to set up an offshore company?",
      info: "2 mins video Offshore Company has total exemption/low tax. In most jurisdictions/countries, no filing of accounts or submitting of annual returns is required after the offshore company has been incorporated. You can set up an offshore company in many jurisdictions, in many regions around the world, with no restriction based on your nationality, Many banks all over the world allow you to open a bank account for your offshore company and then do business internationally. The laws of almost all jurisdictions/countries we offer protect the confidentiality of the shareholders, directors and offshore company.How to set up an offshore company  Step 1 Initially, our relationship managers will ask you to provide detailed information for all shareholders and directors, including their names. You can select the level of services you need. This stage normally takes one to three working days, or a working day in urgent cases. Furthermore, give the proposed company names so that we can check the eligibility of the names in each jurisdiction’s/country’s company registry/company house. Step 2 You settle the payment of our service fee and the official Government fee required for your selected jurisdiction/country. We accept payment by credit/debit card Visa Visa payment-discover payment-american , Paypal Paypal or by wire transfer to our HSBC bank account. HSBC bank account(Payment Guidelines). ",
    },
    {
      id: 2,
      title:
        " What is the difference between a holding company and an investment company?",
      info: "Fresh entrepreneurs oftentimes cannot tell the difference between a holding company and an investment company. While they do have a lot of similarities, holding companies and investment companies each have their distinct purposes.A holding company is a parent business entity that holds the controlling stock or membership interests in its subsidiary companies. The cost to set up a holding company varies depending on the legal entity it is registered with, usually a corporation or an LLC. Large businesses usually set up a holding company because of multiple benefits it brings, including: Protecting assets, reducing risk and tax, no day-to-day management, etc.An investment company, on the other hand, does not own or directly control any subsidiary companies, but rather is engaged in the business of investing in securities. Setting up an investment company is different from setting up a holding company, as they can mostly be formed as a mutual fund, a closed-ended fund, or a unit investment trusts (UIT). Furthermore, each type of investment company has its own versions, such as stock funds, bond funds, money market funds, index funds, interval funds, and exchange-traded funds (ETFs).",
    },
    {
      id: 3,
      title:
        "Why should I use Offshore Company Corp to open an offshore company?",
      info: "Offshore Company Corp has more than 10 years’ experience in offshore consultancy. During this time we have been able to develop a network of offshore service providers that remains unparalleled. We provide tailor-made advice to our clients, fully integrating the latest laws. We are one of the most competitive offshore service providers.We have achieved many awards and certificates. See all Our Awards and Licenses   For further information, please read Our Guarantees section.Just Order - We Do All For You",
    },
    {
      id: 4,
      title: "What is an offshore company?",
      info: "  First and foremost, it is essential to define the term Offshore. Offshore relates to managing, registering, conducting, or operating in a foreign country, often with financial, legal and tax benefits. An offshore company has a variety of uses and benefits for clients wishing to engage in international financial trade and investment activities. Depending on the specific offshore jurisdiction, an offshore company may have the following features and advantages: Ease of Incorporation, Minimal Fees, No Foreign Exchange Controls, High Confidentiality, Tax Benefits.",
    },
    {
      id: 5,
      title: "Which jurisdiction should I choose for my company?",
      info: "Offshore Jurisdictions not only have some aspects of tax benefits, they are also good places to attract investors because of factors such as stable politics, good reputation and sophisticated corporate law.Each offshore jurisdiction has its separate benefits that can meet customers’ strategic demands. OCC’s customer service team are trained to support clients to find out the applicable tax havens for their business.We carefully list the service countries on our website, from the lower-fee countries to higher ones (See more: Company Registration Fees). Although there is some difference in fees, all of the jurisdictions guarantee their confidentiality and integrity to investors. For good offshore jurisdictions with high-ranking currencies, clients will be introduced to Hong Kong and Singapore (See more: Hong Kong offshore company formation and Singapore offshore company formation), which are well placed to attract businessmen due to their significant economical and tax benefits.",
    },
    {
      id: 6,
      title: " Who should use an offshore company?",
      info: "An offshore company may be of interest to a great number of people, and it may be used for various activities.Creating an offshore company allows you to begin an activity without having to deal with setting up a complicated infrastructure. An offshore company allows you to quickly create a stable structure with a simple administration and enjoy all the benefits of the offshore jurisdiction.",
    },
    {
      id: 7,
      title:
        "Do I have to pay taxes on profit or interest earned by my offshore company?",
      info: "Most of the jurisdictions we work with do not impose taxes on profits made or interest earned by offshore company. Some, like Hong Kong or Delaware, only tax profits made within the jurisdiction, whereas Cyprus charges a 10% flat tax",
    },
    {
      id: 8,
      title:
        " When do I have to pay my company's yearly fees (Time of renewal)?",
      info: "You will be asked to settle the yearly fees prior to each anniversary of your company, not at the end of each calendar year. To avoid any last minute rush, we will send you a renewal invitation before the anniversary. See more: Company Renewal Fee",
    },
  ];

  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();
  const refHeight = useRef();
  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);
  const toggleState = () => {
    setToggle(!toggle);
  };

  const renderfaq = questions.map((faqs) => {
    return (
      <div className="acccordion">
        <button className="accordion-visible" onClick={toggleState}>
          <h5>{faqs.id}</h5>
          <h4>{faqs.title}</h4>
          <img className={toggle && "active"} src={Down} alt="" />
        </button>
        <div
          className={toggle ? "accordion-toogle animated " : "accordion-toggle"}
          style={{ height: toggle ? `${heightEl}` : "0px" }}
          ref={refHeight}
        >
          <div className="accordion-para">
            <p aria-hidden={toggle ? "true" : "false"}>
              <h2>{faqs.info}</h2>
            </p>
          </div>
        </div>
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
      <div className="faqrender">{renderfaq}</div>
    </React.Fragment>
  );
};
export default Single;
