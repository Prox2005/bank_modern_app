import React from "react";
import { send, shield, star } from "../../assets";
import "./business.css";

const Business = () => {
  return (
    <div className="app__business">
      <div className="app__business__start">
        <h1>You do the business, we’ll handle the money.</h1>
        <p>
          With the right credit card, you can improve your financial life by building credit,
          earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <button type="button">Get Started</button>
      </div>

      <div className="app__business__benefits">
        <div className="app__business__benefits-info">
          <img src={star} alt="star" />
          <div>
            <h2>Rewards</h2>
            <p>
              The best credit cards offer some tantalizing combinations of promotions and prizes
            </p>
          </div>
        </div>

        <div className="app__business__benefits-info selected">
          <img src={shield} alt="shield" />
          <div>
            <h2>100% Secured</h2>
            <p>We take proactive steps make sure your information and transactions are secure.</p>
          </div>
        </div>

        <div className="app__business__benefits-info">
          <img src={send} alt="send" />
          <div>
            <h2>Rewards</h2>
            <p>A balance transfer credit card can save you a lot of money in interest charges. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
