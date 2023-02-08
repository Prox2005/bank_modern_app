import React from "react";
import "./header.css";
import { discount } from "../../assets/";
import { robot } from "../../assets/";

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header-content">
        <div className="app__header-content_discount">
          <img src={discount} alt="discount" />
          <p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
        </div>
        <h1>
          The Next <span>Generation</span> Payment Method.
        </h1>
        <p>
          Our team of experts uses a methodology to identify the credit cards most likely to fit
          your needs. We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className="app__header-image">
        <img src={robot} alt="robot" />
      </div>
    </div>
  );
};

export default Header;
