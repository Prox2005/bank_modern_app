import React from "react";
import "./footer.css";
import { facebook, instagram, linkedin, logo, twitter } from "../../assets";
const Footer = () => {
  return (
    <div className="app__footer">
      <div className="app__footer__hoobank">
        <div className="app__footer__hoobank-info">
          <img src={logo} alt="logo" />
          <p>A new way to make the payments easy, reliable and secure.</p>
        </div>

        <div className="app__footer__hoobank__other">
          <div className="app__footer__hoobank__other-links">
            <h2>Useful Links</h2>
            <h3>Content</h3>
            <h3>How it Works</h3>
            <h3>Create</h3>
            <h3>Explore</h3>
            <h3>Terms and Services</h3>
          </div>

          <div className="app__footer__hoobank__other-community">
            <h2>Community</h2>
            <h3>Help Center</h3>
            <h3>Partners</h3>
            <h3>Suggestions</h3>
            <h3>Blog</h3>
            <h3>Newsletters</h3>
          </div>

          <div className="app__footer__hoobank__other-Partner">
            <h2>Partner</h2>
            <h3>Our Partner</h3>
            <h3>Become a Partner</h3>
          </div>
        </div>
      </div>

      <span></span>
      <div className="app__footer__end">
        <div className="app__footer__end-copyright">
          <p>Copyright © 2021 HooBank. All Rights Reserved.</p>
        </div>
        <div className="app__footer__end-media">
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
