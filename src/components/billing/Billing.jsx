import React from "react";
import "./billing.css";
import { apple, bill, google } from "../../assets/";
const Billing = () => {
  return (
    <div className="app__billing">
      <div className="app__billing-bill">
        <img src={bill} alt="bill" />
      </div>
      <div className="app__billing__info">
        <h1>Easily control your billing & invoicing.</h1>
        <p>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce
          ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className="app__billing__info-downloads">
          <img src={apple} alt="apple" />
          <img src={google} alt="apple" />
        </div>
      </div>
    </div>
  );
};

export default Billing;
