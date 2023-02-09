import React from "react";
import "./card.css";
import { card } from "../../assets";
const Card = () => {
  return (
    <div className="app__card">
      <div className="app__card-info">
        <h1>Find a better card deal in few easy steps.</h1>
        <p>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris
          tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button type="button">Get Started</button>
      </div>
      <div className="app__card-pay">
        <img src={card} alt="card" />
      </div>
    </div>
  );
};

export default Card;
