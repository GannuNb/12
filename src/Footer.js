import React, { Component } from "react";
import { Link } from "react-router-dom";
import lion from "./images/Lion.png";
import face from "./images/face.png";
import ins from "./images/ins.png";
import yo from "./images/yo.png";
import twi from "./images/twi.png";
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-left">
          <img className="logo" alt="Lion Logo" src={lion} />
          <div className="footer-contactus-icons">
            <img className="icon" alt="Facebook" src={face} />
            <img className="icon" alt="YouTube" src={yo} />
            <img className="icon" alt="Instagram" src={ins} />
            <img className="icon" alt="Twitter" src={twi} />
          </div>
        </div>

        <div className="footer-links">
          <Link to="/"><div>Home</div></Link>
          <Link to="/AboutUsPage"><div>About Us</div></Link>
          <Link to="/products"><div>Products</div></Link>
          <Link to="/Trade"><div>Trade Fairs</div></Link>
          <Link to="/Login"> <div>Enquire Us</div></Link>
          <Link to="/contact"> <div>Contact Us</div></Link>
    
          
          
        </div>

        <div className="footer-contact">
          <div><b>Contact Us</b></div>
          <div><b>Admin Off:</b> #406, 4th Floor, Patel Towers,<br/>Above EasyBuy Beside Nagole RTO Office,<br/>Nagole Hyderabad, Telangana-500035</div>
          <div><b>Unit Add:</b> Plot No-9, The Indira Gandhi Co-Operative<br/>Housing Society, Gagan Pahad, Hyderabad,<br/>Rangareddy, Telangana, 500052</div>
          <div><b>Off:</b> +914049471616</div>
          <div><b>Email:</b> Info@vikahecotech.com</div>
        </div>

        <div className="footer-text">
          <div>Copyright 2023 Vikah-Ecotech | All rights reserved</div>
        </div>
      </div>
    );
  }
}

export default Footer;
