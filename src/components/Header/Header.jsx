import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { HashLink as Link } from "react-router-hash-link";


const Header = () => {
  const [menuOpenend, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpenend) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpenend && "-100%" };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./hamzalogoo2.png" alt="logo" width={100}  />
       

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpenend)}>
           <Link to="#Residencies"> <a href="">Residencies</a></Link>
           <Link to="#Value"> <a href="">Our Value</a></Link>
           <Link to="#Contactus"> <a href="">Contact US</a></Link>
           <Link to="#GetStarted"> <a href="">Get Started</a></Link>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
