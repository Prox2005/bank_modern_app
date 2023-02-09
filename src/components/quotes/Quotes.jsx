import React from "react";
import "./quotes.css";
import { people01, people02, people03, quotes } from "../../assets";
const Quotes = () => {
  return (
    <div className="app__quotes">
      <div className="app__quotes__header">
        <h1>What people are saying about us</h1>
        <p>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
      <div className="app__quotes-container">
        <div className="app__quotes-container-card selected">
          <img src={quotes} alt="quote mark" />
          <p>
            Money is only a tool. It will take you wherever you wish, but it will not replace you as
            the driver.
          </p>
          <div className="app__quotes-container-card__profile">
            <img src={people01} alt="first person" />
            <div>
              <h2>Herman Jensen</h2>
              <span>Founde & Leader</span>
            </div>
          </div>
        </div>

        <div className="app__quotes-container-card ">
          <img src={quotes} alt="quote mark" />
          <p>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
          <div className="app__quotes-container-card__profile">
            <img src={people02} alt="second person" />
            <div>
              <h2>Steve Mark</h2>
              <span>Founde & Leader</span>
            </div>
          </div>
        </div>

        <div className="app__quotes-container-card ">
          <img src={quotes} alt="quote mark" />
          <p>
            It is usually people in the money business, finance, and international trade that are
            really rich.
          </p>
          <div className="app__quotes-container-card__profile ">
            <img src={people03} alt="third person" />
            <div>
              <h2>Kenn Gallagher</h2>
              <span>Founde & Leader</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
