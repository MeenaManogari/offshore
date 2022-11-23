import React from "react";
import "./article.css";
import newyear from "../../assets/images/home/newyear-article.jpg";
import international from "../../assets/images/home/international-art.jpg";
import partner from "../../assets/images/home/partnerships_art.jpg";

function Article() {
  const happy = [
    {
      image: newyear,
      linktext: "Happy lunar new yaer 2022",
      text: "Closing time: From Saturday (January 29, 2022) To the end of Sunday (February 6, 2022). Reopening: Monday (February 7, 2022).",
      link: "/en/insight/articles/happy-lunar-new-year-2022",
    },
  ];
  const renderhap = happy.map((appy) => {
    return (
      <div>
        <div>
          <a herf={appy.link}>
            <img src={appy.image} />
          </a>
          <p>{appy.linktext}</p>
          <h4>{appy.text}</h4>
        </div>
      </div>
    );
  });
  const article = [
    {
      images: international,
      textlink:
        "Top 5 best countries for international business company formation",
      link: "/en/insight/articles/top-5-best-countries-for-international-business-company-formation",
      text: "Top 5 best countries for international business company formation",
      namelink: "/en/insight/articles/united-kingdom",
      namelinkh: "/en/insight/articles/hong-kong",
      namelinks: "/en/insight/articles/singapore",
      namelinksw: "/en/insight/articles/switzerland",
      namelinkam: "/en/insight/articles/united-states-of-america",
      name: "United Kingdom",
      nameh: "Hong kong",
      names: "Singapore",
      namesw: "Switzerland",
      nameam: "United States of America",
    },
    {
      images: partner,
      textlink:
        "One IBC and PayCEC Payment Gateway delightfully announce partnership",
      link: "/en/insight/articles/one-ibc-and-paycec-payment-gateway-delightfully-announce-partnership",
      text: "One IBC and PayCEC Payment Gateway delightfully announce partnership",
    },
  ];

  const renderarticles = article.map((art) => {
    return (
      <div className="article_card">
        <div className="ab">
          <a href={art.link}>
            <img src={art.images} />
          </a>
        </div>
        <div className="bc">
          <a href={art.link}>{art.textlink} </a>
          <p>{art.text} </p>
          <a herf={art.namelink}>
            <button>{art.name}</button>
          </a>
          <a herf={art.namelinkh}>
            <button>{art.nameh}</button>
          </a>
          <a herf={art.namelinks}>
            <button>{art.names}</button>
          </a>
          <a herf={art.namelinksw}>
            <button>{art.namesw}</button>
          </a>
          <a herf={art.namelinkam}>
            <button>{art.nameam}</button>
          </a>
        </div>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="article_head">
        <h2>Articles</h2>
      </div>
      <div className="appyrender">{renderhap} </div>
      <div className="articlerender">{renderarticles} </div>
    </React.Fragment>
  );
}
export default Article;
