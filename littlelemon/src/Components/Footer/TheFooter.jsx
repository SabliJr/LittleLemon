import React from "react";
import "./TheFooter.css";

import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

import FooterLogo from "../../Images/logo-vertical-white.png";

const TheFooter = () => {
  return (
    <footer>
      <section className='footerSection'>
        <div>
          <img src={FooterLogo} alt='Footer logo' className='footerLogo' />
        </div>
        <div className='sitepMap'>
          <h3>Site Map</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>OrderOnline</li>
            <li>Login</li>
          </ul>
        </div>
        <div className='footerContact'>
          <h3>Contact Us</h3>
          <div>
            <p>
              <span>Give us a call</span>
              <br />
              123-456-7890
            </p>
            <p>
              <span>Write us a letter</span>
              <br />
              info@little-lemon.com
            </p>
          </div>
        </div>
        <div className='footerSocialIcons'>
          <h3>Our Social Media:</h3>
          <p>
            Share with us what is your favorite meal & let us make it even more
            delicious.
          </p>
          <div>
            <BsInstagram />
            <BsFacebook />
            <BsTwitter />
            <FaTiktok />
          </div>
        </div>
      </section>
      <hr />
      <p className='copyRight'>&copy;{new Date().getFullYear()} Little Lemon</p>
    </footer>
  );
};

export default TheFooter;
