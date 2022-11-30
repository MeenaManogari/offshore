import React from "react";
const Requirements = () => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();
  const refHeight = useRef();
  useEffect(() => {
    setHeightEl(`${refHeight.current}px`);
  }, []);
  const toggleState = () => {
    setToggle(!toggle);
  };

  const sidebar = (
    <div className="sidebar">
      <div className="sidebar_menu">
        <div className="sidebar_content">
          <div className="drop">
            <button className="btn_visible" onClick={toggleState}>
              web development
              <img className={toggle && "active"} src={Down} alt="" />
            </button>
            <div
              className={
                toggle ? "accordion-toogle animated " : "accordion-toggle"
              }
              style={{ height: toggle ? `${heightEl}` : "0px" }}
              ref={refHeight}
            >
              <div
                className="drop_links"
                aria-hidden={toggle ? "true" : "false"}
              >
                <Link to="/features">Featured</Link>
                <Link to="/jurisdiction">Jurisdictions</Link>
                <Link to="/howtosetup">How To Setup</Link>
                <a href="#">Fees</a>
                <a href="#">Nominee</a>
                <a href="#">Change Agent</a>
                <a href="#">Company Renewal</a>
                <a href="#">FAQs</a>
                <a href="#">Download&Form</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <React.Fragment>
      <div>{sidebar}</div>
    </React.Fragment>
  );
};
export default Requirements;
