import React from "react";
import "./Businesssetup.css";
import prepares from "../../assets/images/Howtosetup/preparation.png";
import details from "../../assets/images/Howtosetup/company_details.png";
import pays from "../../assets/images/Howtosetup/payment.png";
import send from "../../assets/images/Howtosetup/send.png";
const Setupplan = () => {
  const international = [
    {
      countrylink: "How to set up business in Labuan | Setting up a company",
      mainheading: "How to set up business in Labuan | Setting up a company",

      stepcards: [
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
      ],
    },
    { countrylink: "How to set up a company in Vietnam - One IBC Vietnam" },
    {
      countrylink:
        "How to register a company in Marshall Islands - One IBC Group",
    },
    {
      countrylink: "How to register a company in Singapore - One IBC Singapore",
    },
    { countrylink: "How to set up a company in Cyprus - One IBC Group" },
    {
      countrylink:
        "How to set up a company in Gibraltar | Setting up a business in Gibraltar",
    },
    { countrylink: "How to set up a company in Luxembourg: SARL and Soparfi" },
    {
      countrylink:
        "How to set up a company in Netherlands: Limited liability company (BV)",
    },
    {
      countrylink:
        "How to set up a company in UK (United Kingdom) - One IBC Group",
    },
    { countrylink: "How to register a company in Belize - One IBC Group" },
    {
      countrylink:
        "How to set up a company in the Cayman Islands - One IBC Group",
    },
    { countrylink: "How to set up a company in Panama - One IBC Group" },
    {
      countrylink:
        "How to set up an LLC company in St Vincent and the Grenadines",
    },
    {
      countrylink:
        "How to set up an offshore company in Mauritius - One IBC Group",
    },
    {
      countrylink:
        "How to set up a company in Hong Kong (HK) - One IBC Hong Kong",
    },
    { countrylink: "How to register a company in Anguilla - One IBC Group" },
    {
      countrylink:
        "How to start a business in Samoa: International Company (IC)",
    },
    { countrylink: "Guide to doing bussiness in Vanuatu - One IBC Group" },
    {
      countrylink:
        "How to set up a US company as a non-resident: Set up business in USA",
    },
    {
      countrylink:
        "How to open a company in Liechtenstein: AG and Anstalt Company",
    },
    {
      countrylink:
        "How to set up a company in Malta: Private Limited Liability Company",
    },
    { countrylink: "How to set up a company in Switzerland: GmbH or AG" },
    { countrylink: "How to set up a company in The Bahamas - One IBC Group" },
    { countrylink: "How to set up an offshore company in BVI - One IBC Group" },
    {
      countrylink:
        "How to set up a company in Delaware, USA: LLC or Corporation",
    },
    {
      countrylink:
        "Nevis company registration and How to start a business in Nevis",
    },
    { countrylink: "How to set up comapny in UAE - RAK - Dubai - Ajman" },
    { countrylink: "How to register a company in Seychelles - One IBC Group" },
  ];
  const rendercountries = international.map((national) => {
    return (
      <>
        <ul>
          <li>
            <a href="#" className="country-setup">
              {national.countrylink}
            </a>
          </li>
        </ul>
      </>
    );
  });
  return (
    <React.Fragment>
      <div className="businessplan">{rendercountries}</div>
    </React.Fragment>
  );
};
export default Setupplan;
// return (
//   <>
//     <div className="business_plan">
//       <div className="country_setupone">
//         <ul>
//           <li>
//             <a href="#">
//               How to set up business in Labuan | Setting up a company
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               How to set up a company in Vietnam - One IBC Vietnam
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               How to register a company in Marshall Islands - One IBC Group
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               How to register a company in Singapore - One IBC Singapore
//             </a>
//           </li>
//           <li>
//             <a href="#">How to set up a company in Cyprus - One IBC Group</a>
//           </li>
//           <li>
//             <a href="#">
//               How to set up a company in Gibraltar | Setting up a business in
//               Gibraltar
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               How to set up a company in Malta: Private Limited Liability
//               Company
//             </a>
//           </li>
//           <li>
//             <a href="#">How to set up a company in Switzerland: GmbH or AG</a>
//           </li>
//           <li>
//             <a href="#">
//               How to set up a company in The Bahamas - One IBC Group
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               How to set up an offshore company in BVI - One IBC Group
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               How to set up a company in Delaware, USA: LLC or Corporation
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               Nevis company registration and How to start a business in Nevis
//             </a>
//           </li>
//           <li>
//             <a href="#">How to set up comapny in UAE - RAK - Dubai - Ajman</a>
//           </li>
//           <li>
//             <a href="#">
//               How to register a company in Seychelles - One IBC Group
//             </a>
//           </li>
//         </ul>
//       </div>
//       <div className="country_setuptwo">
//         <ul>
//           <li>
//             <a href="#">
//               How to set up a company in Hong Kong (HK) - One IBC Hong Kong
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               How to register a company in Anguilla - One IBC Group
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               How to start a business in Samoa: International Company (IC)
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               Guide to doing bussiness in Vanuatu - One IBC Group
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               How to set up a US company as a non-resident: Set up business in
//               USA
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               How to open a company in Liechtenstein: AG and Anstalt Company
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               How to set up a company in Malta: Private Limited Liability
//               Company
//             </a>
//           </li>
//           <li>
//             <a href="#">How to set up a company in Switzerland: GmbH or AG</a>
//           </li>
//           <li>
//             <a href="#">
//               How to set up a company in The Bahamas - One IBC Group
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               How to set up an offshore company in BVI - One IBC Group
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               How to set up a company in Delaware, USA: LLC or Corporation
//             </a>
//           </li>
//           <li>
//             <a href="#">
//               Nevis company registration and How to start a business in Nevis
//             </a>
//           </li>
//           <li>
//             <a href="#">How to set up comapny in UAE - RAK - Dubai - Ajman</a>
//           </li>
//           <li>
//             <a href="#">
//               How to register a company in Seychelles - One IBC Group
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//
