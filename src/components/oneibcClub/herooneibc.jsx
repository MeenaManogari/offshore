import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ibccoin from "../../assets/images/oneibcClub/banner-oneibccoin.png";
import ibccard from "../../assets/images/oneibcClub/banner-oneibccard.png";
import office from "../../assets/images/oneibcClub/office-singapore.png";
const Ibchero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const oneibchero = [
    {
      ibcbg: ibccoin,
      ibcheading: "“Get One IBC Credit Points” is now on One IBC Club",
      ibcdescript:
        "Exchange directly to US$. Accumulate points and enjoy more benefits",

      ibcbutton: "Learn More",
    },
    {
      ibcbg: ibccard,
      ibcheading: "Get your One IBC Club membership card today",
      ibcdescript: "Join our Club now to receive massive discounts and rewards",
      ibcbutton: "Learn More",
    },
    {
      ibcbg: office,
      ibcheading: ["Prime Location with New Our Office", "in Singapore"],
      ibcdescript: "Hot Offer to get 3 months FREE of Singapore Virtual Office",
      ibcbutton: "Learn More",
    },
  ];
  const renderibchero = (
    <>
      <Slider {...settings}>
        {oneibchero.map((heroibc) => {
          return (
            <div>
              <div
                className="herosetup"
                style={{
                  backgroundImage: `url(${heroibc.ibcbg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                <h1>{heroibc.ibcheading}</h1>
                <p>{heroibc.ibcdescript}</p>
                <button>{heroibc.ibcbutton}</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
  return (
    <React.Fragment>
      <div>{renderibchero}</div>
    </React.Fragment>
  );
};
export default Ibchero;
