import React from "react";
import "./Articles.css";
import begins from "../../assets/images/home/Articleimgs/beginners.jpg";
import busyplans from "../../assets/images/home/Articleimgs/business-plan.jpg";
import lunar from "../../assets/images/home/Articleimgs/happy-lunar.jpg";
const Articles = () => {
  return (
    <>
      <div className="article_head">
        <h1>Article</h1>
        <div className="article_main">
          <div className="beginners">
            <div className="article_img">
              <img src={begins} alt="" />
            </div>
            <div className="article_texts">
              <h2>
                <a href="#">Small business bookkeeping for beginners</a>
              </h2>
              <p>
                Small businesses may opt for a simple bookkeeping system that
                records each financial transaction in the same way that a
                checkbook does. Double-entry accounting is typically used by
                businesses with more complex financial transactions. Bookkeeping
                lets you know about the health of your company. So, what is
                bookkeeping? And how to do bookkeeping for a small business?
              </p>
              <a href="#" id="artlink">
                Read more
              </a>
            </div>
          </div>
          <div className="small_cards">
            <div className="effective_plan">
              <div className="plan_img">
                <img src={busyplans} alt="" />
              </div>
              <div className="plan_text">
                <h2>
                  <a href="#">How to write an effective business plan</a>
                </h2>
                <p>How to write an effective business plan</p>
                <a href="#" id="effectlink">
                  Read more
                </a>
              </div>
            </div>
            <div className="happy_lunar">
              <div className="lunar_img">
                <img src={lunar} alt="" />
              </div>
              <div className="lunar_text">
                <h2>
                  <a href="#">Happy lunar new year 2022</a>
                </h2>
                <p>Happy lunar new year 2022</p>
                <a href="#" id="lunarlink">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="art_btn">
          <button>View all</button>
        </div>
      </div>
    </>
  );
};
export default Articles;
