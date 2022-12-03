import React, { useState } from "react";
import "./changeAge.css";
import Nomin from "../.././assets/icons/changeagent/icon-nominee.svg";
import icontwo from "../.././assets/icons/changeagent/icon-works-2.svg";
import iconthree from "../.././assets/icons/changeagent/icon-works-3.svg";
import Down from "../../assets/icons/feature_icons/chevron-down.svg";

const Agents = () => {
  const [toggle, setToggle] = useState(false);
  const toggleState = () => {
    setToggle(!toggle);
  };
  return (
    <div className="accordio">
      <div className="accordion-visible" onClick={toggleState}>
        <h4>How to change agent?</h4>
        <img className={toggle && "active"} src={Down} alt="" />
      </div>
      <div className="bar"></div>
      <div className="bar"></div>
      {toggle && (
        <div>
          <div className="agentimage">
            <div className="agent_steps">
              <img src={Nomin} alt="" />
              <h3 className="steps">Step 1</h3>
              <div>
                <p>
                  Provide us with your current company documents and a
                  resolution (as our checklist required) to change your local
                  agent/secretary company.
                </p>
              </div>
            </div>
            <div className="agent_steps">
              <img src={icontwo} alt="" />
              <h3 className="steps">Step 2</h3>
              <div>
                <p>Pay for the services you ordered.</p>
              </div>
            </div>
            <div className="agent_steps">
              <img src={iconthree} alt="" />
              <h3 className="steps">Step 3</h3>
              <div>
                <p>
                  Details of the new local agent or secretary company will be
                  updated on the government system within 1 to 3 working days,
                  depending on the jurisdiction.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="accordio_butn">
        <button>Contact Us For More Details</button>
      </div>
    </div>
  );
};
export default Agents;
