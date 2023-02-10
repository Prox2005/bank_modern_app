import React from "react";
import "./service.css";

const Service = () => {
  return (
    <div className="app__service">
      <div className="app__service__content">
        <div className="app__service__content-info">
          <h1>Let’s try our service now!</h1>
          <p>
            Everything you need to accept card payments and grow your business anywhere on the
            planet.
          </p>
        </div>
        <div className="app__service__content-start">
          <button type="button">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
