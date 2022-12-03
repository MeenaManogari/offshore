import React, { useState } from "react";
import "./changeAge.css";
import Down from "../../assets/icons/feature_icons/chevron-down.svg";
import Contactform from "../Forms/Contactform";
const Formfile = () => {
  const file = [
    {
      title: "Why change agent?",
      text: "When you first incorporate an offshore company, you start with tax planning and legal matters. This does not mean you will not have any issues in the future. Issues may not just be related to finances, they may relate to supporting, maintaining and advising your company from year to year and dealing with some matters during the life of your business. You have to choose the proper provider or registered agent to serve your offshore structure during its lifetime.  In case your company already had the Registered Agent but you do not like the way they support the company, they cannot provide the request services. You are not happy with your choice and you want to change, you want to choose another one, if so, we can help you change the Registered Agent (or Secretary).",
    },
  ];
  const renderfile = file.map((form) => {
    const [toggle, setToggle] = useState(false);
    const toggleState = () => {
      setToggle(!toggle);
    };
    return (
      <div>
        <div className="accordion-visible" onClick={toggleState}>
          <h4>{form.title}</h4>
          <img className={toggle && "active"} src={Down} alt="" />
        </div>
        <div className="bar"></div>
        {toggle && (
          <div>
            <div>
              <div>
                <p>{form.text}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="formfile_head">
        <h1>Change Agent</h1>
      </div>
      <div className="abcde">
        <div>{renderfile}</div>
        <div>
          <Contactform />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Formfile;
