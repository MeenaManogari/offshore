import React from "react";
import "./categories.css";
import Benefits from "../../assets/images/feature/bg-benefit.jpg";
const Category = () => {
  return (
    <>
      <div
        className="category_links"
        style={{
          backgroundImage: `url(${Benefits})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="global">
          <p>
            We provide expertise and support conduct business in global
            smoothly, maximize opportunities and achieve long-term
            sustainability.
          </p>
        </div>
        <div className="bglinks">
          <a href="#">All</a>
          <a href="#">Asia Pacific</a>
          <a href="#">Europe</a>
          <a href="#">Caribbean</a>
          <a href="#">Middle East</a>
          <a href="#">Africa</a>
          <a href="#">America</a>
        </div>
      </div>
    </>
  );
};
export default Category;
