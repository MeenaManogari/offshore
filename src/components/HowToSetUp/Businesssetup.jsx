import React from "react";
import "./Businesssetup.css";
const Setupplan = () => {
  const international = [
    { countrylink: "How to set up business in Labuan | Setting up a company" },
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
};
export default Setupplan;
