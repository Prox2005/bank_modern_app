import React from "react";
import "./brands.css";
import { airbnb, binance, coinbase, dropbox } from "../../assets";
const Brands = () => {
  return (
    <div className="app__brands">
      <div>
        <img src={airbnb} alt="airbnb" />
      </div>
      <div>
        <img src={binance} alt="binance" />
      </div>
      <div>
        <img src={coinbase} alt="coinbase" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
    </div>
  );
};

export default Brands;
