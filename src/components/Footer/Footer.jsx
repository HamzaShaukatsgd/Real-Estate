import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./hamzalogoo1.png" alt="" width={120} />
          {/* <h1>Hamza</h1> */}
          <span className="secondaryText">
            Our vision is to make all people the best place to live for them.
          </span>
        </div>
        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">10-A Potohar Plaza Fazle-haq Road Blue Arae Islamabad.</span>

          <div className="flexCenter f-menu">
            <span>Properties</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
