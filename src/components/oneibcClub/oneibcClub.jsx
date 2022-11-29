import React from "react";
import "./oneibcClub.css";
import Silver from "../.././assets/images/oneibcClub/membercard-silver.png";
import Gold from "../.././assets/images/oneibcClub/membercard-gold.png";
import Platinum from "../.././assets/images/oneibcClub/membercard-platinum.png";
import oneclub from "../../assets/icons/oneibcClub/1-one-ibc-club.svg";
import twoclub from "../../assets/icons/oneibcClub/2-one-ibc-club.svg";

const OneibcClub = () => {
  const club = [
    {
      image: Silver,
      tire: "Silver",
      table: "Accumulated amount spent at offshorecompanycorp.com",
      content:
        "Credit Points earned for every eligible U.S. dollar spent on purchasing services on offshorecompanycorp.com",
      amount: "US$ 5,000 -  US$ 7,999*",
      number: 3,
      redeem:
        "Redeem credit points for invoice value: 200 credit points = 1 USD **",
    },
    {
      image: Gold,
      tire: "Gold",
      table: "Accumulated amount spent at offshorecompanycorp.com",
      content:
        "Credit Points earned for every eligible U.S. dollar spent on purchasing services on offshorecompanycorp.com",
      amount: "US$ 8,000 -  US$ 13,000*",
      number: 5,
      redeem:
        "Redeem credit points for invoice value: 200 credit points = 1 USD **",
    },
    {
      image: Platinum,
      tire: "Platinum",
      table: "Accumulated amount spent at offshorecompanycorp.com",
      content:
        "Credit Points earned for every eligible U.S. dollar spent on purchasing services on offshorecompanycorp.com",
      amount: "US$ 13,000 - US$ 20,000*",
      number: 12,
      redeem:
        "Redeem credit points for invoice value: 200 credit points = 1 USD **",
    },
  ];

  const renderoneibcclub = club.map((ibc) => {
    return (
      <div className="oneibcclub-overall">
        <div>
          <div className="oneibc_club">
            <img src={ibc.image} alt="" />
          </div>
          <div className="oneibc_clubinterior">
            <div className="club_text">
              <h3>{ibc.tire}</h3>
            </div>
            <table className="table table-most">
              <tbody>
                <tr>
                  <td>{ibc.table}</td>
                  <td>{ibc.amount}</td>
                </tr>
                <tr>
                  <td>{ibc.content}</td>
                  <td>{ibc.number}</td>
                </tr>
                <tr>{ibc.redeem}</tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="tires-content">
        <div className="ibcclub_head">
          <h1>Members Benifit</h1>{" "}
          <p>
            ONE IBC offers a world of benefits. Here, you’ll find all the ways
            you can make the most of your membership.
          </p>
        </div>
        <div className="ibcclub_subhead">
          <h1>Tires and benifits</h1>
          <p>
            There are four rank levels of ONE IBC membership. Advance through
            three elite ranks when you meet qualifying criteria. Enjoy elevated
            rewards and experiences throughout your journey.
          </p>
          <p>Explore the benefits for all levels.</p>
        </div>
        <div className="club_render">{renderoneibcclub}</div>
        <div className="ibcclub_para">
          <p>
            * The new terms of Accumulated amount spent at Offshorecompany.com
            will be effective on April 6, 2021 (GMT+7)
          </p>
          <p>
            ** For the Credit Points that you have accumulated in the past, you
            will be used as the old terms (100 credit points = 1 USD) until the
            end of May 02, 2021 (GMT+7).
          </p>
          <p>
            New credit point redemption for invoice value: 200 credit points = 1
            USD will be applied starting May 03, 2021 (GMT+7).
          </p>
        </div>
      </div>
      <div className="howitwork">
        <div className="howitwor_head">
          <h1>How it works</h1>
          <p>Earn and redeem credit points for our services.</p>
        </div>
        <div className="howitwork_full">
          <div className="earningpoints">
            <div className="earningpoint_image">
              <div>
                <img src={oneclub} alt="" />
                <h2>Earning points</h2>
              </div>
              <h3 className="steps">Step 1</h3>
            </div>
            <div className="earningpoint_lists">
              <ul>
                <li>
                  Earn Credit Points on qualifying purchasing of services.
                </li>
                <li>
                  You'll earn credit Points for every eligible U.S. dollar
                  spent.
                </li>
              </ul>
            </div>
          </div>
          <div className="earningpoints">
            <div className="earningpoint_image">
              <div>
                <img src={twoclub} alt="" />
                <h2>Using points</h2>
              </div>
              <h3 className="steps ">Step 2</h3>
            </div>
            <p>
              Spend credit points for a direct discount on your invoice. 100
              credit points = 1 USD.
            </p>
          </div>
        </div>
        <div className="work_term">
          <p>
            Participation is subject to the One IBC program{" "}
            <span>
              <a href="./info/terms-conditions-of-participation">terms</a>
            </span>
            , which contain additional important limitations that affect the
            earning and use of Credit Points, awards, benefits and member rank
            status.
          </p>
        </div>
      </div>
      <div className="sign-butn">
        <button>Sign UP Now</button>
      </div>
    </React.Fragment>
  );
};
export default OneibcClub;
