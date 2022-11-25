import React, { useState } from "react";
import add from "../../assets/icons/feature_icons/plus.svg";
import sub from "../../assets/icons/feature_icons/plus.svg";

const Single = (title, info) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="bt" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? add : sub}
        </button>
      </header>
      {showInfo && <p>{info} </p>}
    </article>
  );
};
export default Single;
