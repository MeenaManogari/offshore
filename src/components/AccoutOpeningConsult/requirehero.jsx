import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import freeaccount from "../../assets/images/home/banner_free_account.jpg";
import joining from "../../assets/images/account/banner-join.jpg";
import mauritius from "../../assets/images/account/banner-mauritius.jpg";
import promoting from "../../assets/images/account/banner-promote.jpg";
const Requirehero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const accounthero = [
    {
      accountbg: freeaccount,
      accountheading: "Get a free DNBC account with One IBC",
      accountdescript: "Plus EUR 100 cashback",
      accountbutton: "Learn More",
    },
    {
      accountbg: joining,
      accountheading: "3 Months Free",
      accountdescript: [
        "Account maintenance fee",
        "DSBC Financial Europe",
        "personal account",
      ],
      accountbutton: "Learn More",
    },
    {
      accountbg: mauritius,
      accountheading: "INCENTIVE OPPORTUNITY",
      accountdescript: "For Businessperson in Mauritius.",
      accountbutton: "Learn More",
    },
    {
      accountbg: promoting,
      accountheading: "July Golden Deal",
      accountdescript: "at Saint Vincent & the Grenadines",
      accountbutton: "Learn More",
    },
  ];
  const renderaccounthero = (
    <>
      <Slider {...settings}>
        {accounthero.map((heroaccount) => {
          return (
            <div>
              <div
                className="herosetup"
                style={{
                  backgroundImage: `url(${heroaccount.accountbg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <h1>{heroaccount.accountheading}</h1>
                <p>{heroaccount.accountdescript}</p>
                <button>{heroaccount.accountbutton}</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
  return (
    <React.Fragment>
      <div>{renderaccounthero}</div>
    </React.Fragment>
  );
};
export default Requirehero;
