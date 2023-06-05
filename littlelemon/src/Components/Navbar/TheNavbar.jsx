import React from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import TheLogo from "../../Images/logo.png";

const TheNavbar = () => {
  return (
    <nav className='theNav'>
      <div>
        <img src={TheLogo} alt='The Logo' className='Logo' />
      </div>

      <ul className='TheMenu'>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservation</li>
        <li>Order Online</li>
        <div className='Profile'>
          <CgProfile />
        </div>
      </ul>
    </nav>
  );
};

export default TheNavbar;
