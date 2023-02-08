import React, { useState } from "react";
import "./navbar.css";
import { MdMore, MdOutlineClose } from "react-icons/md";
import { logo } from "../../assets";

const Menu = () => {
  return (
    <>
      <a href="#">Home</a>
      <a href="#">About Us</a>
      <a href="#">Features</a>
      <a href="#">Solution</a>
    </>
  );
};

const Navbar = () => {
  const [toggleMenu, settoggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="app__navbar-links">
        <Menu />
      </div>
      <div className="app__navbar-menu">
        {toggleMenu ? (
          <MdOutlineClose color="fff" size={27} onClick={() => settoggleMenu(false)} />
        ) : (
          <MdMore color="#fff" size={27} onClick={() => settoggleMenu(true)} />
        )}

        {toggleMenu && (
          <div className="app__navbar-menu_container-links">
            <Menu />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
