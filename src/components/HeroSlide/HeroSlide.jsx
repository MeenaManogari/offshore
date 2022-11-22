import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slideone from "../../assets/images/home/banner_announce.jpg";
import slidetwo from "../../assets/images/home/banner_free_account.jpg";
import "./HeroSlide.css";
import "../../App.css";
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <div
            className="slider"
            style={{
              backgroundImage: `url(${slideone})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h2>ANNOUNCEMENT OF FEE</h2>
            <h2>ADJUSTMENT IN OCTOBER </h2>
            <h2>2022</h2>
            <button>Learn More</button>
          </div>
        </div>
        <div>
          <div
            className="slider"
            style={{
              background: `url(${slidetwo})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <h2 id="opt">Get a free DNBC account with One IBC</h2>
            <p id="opt">Plus EUR 100 cashback </p>

            <button>Learn More</button>
          </div>
        </div>
      </Slider>
    </>
  );
};
export default Hero;
