import React from "react";
import "./template.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import servicefee from "../../assets/images/Howtosetup/banner-servicefee.jpg";
import renewal from "../../assets/images/Howtosetup/banner-renewal.jpg";
import labuan from "../../assets/images/Howtosetup/banner-labuan.png";
import prepares from "../../assets/images/Howtosetup/preparation.png";
import details from "../../assets/images/Howtosetup/company_details.png";
import pays from "../../assets/images/Howtosetup/payment.png";
import send from "../../assets/images/Howtosetup/send.png";
const Template = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const inter = [
    {
      herobg: servicefee,
      heroheading: "Amazing promotion in August",
      herodescript: [
        "Use Company Renewal Service",
        "Free US$ 699 Service Fee for opening Corporate Account",
      ],
      herobutton: "Learn More",
    },
    {
      herobg: renewal,
      heroheading: "COMPANY RENEWAL",
      herodescript: "Special Offer of the Month",
      herobutton: "Learn More",
    },
    {
      herobg: labuan,
      heroheading: "Company Formation in Labuan, Malaysia",
      herodescript: [
        "One of the most renowned financial centers in Southeast Asia",
        "Complete exemption from income tax on profits for holding companies",
      ],
      herobutton: "Learn More",
    },
  ];

  const stepcards = [
    {
      image: prepares,
      steps: "Step 1",
      heading: "Preparation",
      description: [
        "Our advisory team will advise you a sufficient type of Labuan company which fits your business activity.",
        "The advisory team will check the company name for a new company. The Registrar must not register a company with a name:is similar to or identical to an existing company. A name that implies illegal activities. A name that implies royal or government patronage.",
        "is expressed in any language using the Latin alphabet, if the Registrar of Companies is in receipt of an English translation and the name is not considered undesirable. Chinese names are possible.",
        "Names Requiring Consent or a License Bank, building a society, savings, loans, insurance, assurance, reinsurance, fund management, investment fund, trust, trustees, Chamber of Commerce, university, municipal or their foreign language equivalents",
        "You will be informed about Labuan obligation, taxation policy, financial year, the renewal date for your company in Labuan.",
      ],
    },
    {
      image: details,
      steps: "Step 2",
      heading: "Your Labuan company details:",
      description: [
        "We need the information about your company Director, Shareholder, along with the share ratio.",

        "Choose the recommended services for your Labuan company:",
        "Bank account: You can achieve bank account in many banks in the world with a Labuan entity. You can choose most of the bank options on the list (except UAE, Switzerland, Hong Kong).",
        "Nominee services: Using the Nominee services so the information of Nominee will be shown on Company Registration's website.",
        "Serviced office: Choose your favorite jurisdiction for Service address. You can have many Services address all over the world.",
        "Intellectual Property & Trademark service: You can register Intellectual Property in all of the jurisdictions with the Labuan entity.",
        "Merchant account: this service will be fulfilled after the corporate bank account is activated.",
        "Bookkeeping: The service may or may not be used in the future upon your request.",
        "Processing time: You can choose 2 types of time periods depending on the urgency of your request. Within working hours following the Labuan, we can help you to make it done quickest within 5 working days after you provide all required documents and information.",
      ],
    },
    {
      image: pays,
      steps: "step 3",
      heading: "Payment for Your Favorite Labuan Company",
      description: [
        "We accept payment with various methods, namely:",

        "Credit/Debit card (Visa/ Master/ Amex).",
        "PayPal: you can make a payment using your PayPal account.",
        "Bank Transfer: You can make an international wire transfer to our bank accounts. A list of various banks is available for your most convenience It is possible to transfer through IBAN/SEPA if you are living in Europe. Otherwise, SWIFT will also work, taking from 3 to 5 days.",
      ],
    },
    {
      image: send,
      steps: "step 4",
      heading: "Send the company kit to your address",
      description: [
        "Your company's original documents will be sent to your provided address via mail (DHL/ TNT/ FedEx). Bank account opening, Serviced office, license or Trademark application can be subsequently fulfilled at this time.",
        "It may take 2 to 5 working days to deliver the company kit after your company is incorporated.",
        "Upon the issuance of the Certificate of Incorporation, your company is ready to do business worldwide!",
      ],
    },
  ];

  const rendercards = stepcards.map((cards) => {
    return (
      <div className="labuan_cards">
        <div className="card_head">
          <img src={cards.image} alt="" />
          <div className="stepcard">
            <h3>{cards.steps}</h3>
          </div>
        </div>
        <div>
          <h2>{cards.heading}</h2>
          <ul>
            <li>{cards.description}</li>
          </ul>
        </div>
      </div>
    );
  });

  const renderhero = (
    <>
      <Slider {...settings}>
        {inter.map((counts) => {
          return (
            <div>
              <div
                className="herosetup"
                style={{
                  backgroundImage: `url(${counts.herobg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <h1>{counts.heroheading}</h1>
                <p>{counts.herodescript}</p>
                <button>{counts.herobutton}</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
  return (
    <React.Fragment>
      <div>{renderhero}</div>
      <div className="card_list">{rendercards}</div>
    </React.Fragment>
  );
};
export default Template;
//   mainheading: "How to set up business in Labuan | Setting up a company",

//   stepcards: [
//     {
//       image: prepares,
//       steps: "Step 1",
//       heading: "Preparation",
//       description: [
//         "Our advisory team will advise you a sufficient type of Labuan company which fits your business activity.",
//         "The advisory team will check the company name for a new company. The Registrar must not register a company with a name:is similar to or identical to an existing company. A name that implies illegal activities. A name that implies royal or government patronage.",
//         "is expressed in any language using the Latin alphabet, if the Registrar of Companies is in receipt of an English translation and the name is not considered undesirable. Chinese names are possible.",
//         "Names Requiring Consent or a License Bank, building a society, savings, loans, insurance, assurance, reinsurance, fund management, investment fund, trust, trustees, Chamber of Commerce, university, municipal or their foreign language equivalents",
//         "You will be informed about Labuan obligation, taxation policy, financial year, the renewal date for your company in Labuan.",
//       ],
//     },
//     {
//       image: details,
//       steps: "Step 2",
//       heading: "Your Labuan company details:",
//       description: [
//         "We need the information about your company Director, Shareholder, along with the share ratio.",

//         "Choose the recommended services for your Labuan company:",
//         "Bank account: You can achieve bank account in many banks in the world with a Labuan entity. You can choose most of the bank options on the list (except UAE, Switzerland, Hong Kong).",
//         "Nominee services: Using the Nominee services so the information of Nominee will be shown on Company Registration's website.",
//         "Serviced office: Choose your favorite jurisdiction for Service address. You can have many Services address all over the world.",
//         "Intellectual Property & Trademark service: You can register Intellectual Property in all of the jurisdictions with the Labuan entity.",
//         "Merchant account: this service will be fulfilled after the corporate bank account is activated.",
//         "Bookkeeping: The service may or may not be used in the future upon your request.",
//         "Processing time: You can choose 2 types of time periods depending on the urgency of your request. Within working hours following the Labuan, we can help you to make it done quickest within 5 working days after you provide all required documents and information.",
//       ],
//     },
//     {
//       image: pays,
//       steps: "step 3",
//       heading: "Payment for Your Favorite Labuan Company",
//       description: [
//         "We accept payment with various methods, namely:",

//         "Credit/Debit card (Visa/ Master/ Amex).",
//         "PayPal: you can make a payment using your PayPal account.",
//         "Bank Transfer: You can make an international wire transfer to our bank accounts. A list of various banks is available for your most convenience It is possible to transfer through IBAN/SEPA if you are living in Europe. Otherwise, SWIFT will also work, taking from 3 to 5 days.",
//       ],
//     },
//     {
//       image: send,
//       steps: "step 4",
//       heading: "Send the company kit to your address",
//       description: [
//         "Your company's original documents will be sent to your provided address via mail (DHL/ TNT/ FedEx). Bank account opening, Serviced office, license or Trademark application can be subsequently fulfilled at this time.",
//         "It may take 2 to 5 working days to deliver the company kit after your company is incorporated.",
//         "Upon the issuance of the Certificate of Incorporation, your company is ready to do business worldwide!",
//       ],
//     },
//   ],
