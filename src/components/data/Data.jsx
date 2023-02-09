import React from "react";
import "./data.css";

const Data = () => {
  return (
    <div className="app__data">
      <div className="app__data__info">
        <h2 className="app__data__info-number">3800+</h2>
        <p className="app__data__info-text">USER ACTIVE</p>
      </div>
      <span></span>
      <div className="app__data__info">
        <h2 className="app__data__info-number">230+</h2>
        <p className="app__data__info-text">TRUSTED BY COMPANY</p>
      </div>
      <span></span>
      <div className="app__data__info">
        <h2 className="app__data__info-number">$230M+</h2>
        <p className="app__data__info-text">TRANSACTION</p>
      </div>
    </div>
  );
};

export default Data;
