import React from "react";
import "./HeroSection.css";

// import HeroImg from "../../Images/kaf.png";
import HeroImg from "../../Images/restauranfood.jpg";

const HeroSection = () => {
  return (
    <section className='HeroSection'>
      <main className='Hero'>
        {/* <div className='shape'></div> */}
        <div className='HeroText'>
          <h1>Little Lemon Restaurant</h1>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button>Reserve Table</button>
          <button>Order Online</button>
        </div>
        <div>
          <img src={HeroImg} alt='Hero img' className='HeroImg' />
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
