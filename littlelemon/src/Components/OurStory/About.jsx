import React from "react";
import "./About.css";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

import AboutImg1 from "../../Images/about-luigi.jpg";
import AboutImg2 from "../../Images/about-mario.jpg";

const About = () => {
  return (
    <section className='aboutSection'>
      <h3>Our Story</h3>
      <main>
        <article className='AboutText'>
          <h2>Little Lemon</h2>
          <h5>Chicago</h5>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima
            magni illo exercitationem voluptas, veniam harum at fugiat, ea
            impedit unde molestiae itaque odit rerum! Officiis sit unde non
            fugit ea, quisquam aliquam id quas quaerat laboriosam illum quis
            suscipit voluptatum nihil maxime iusto reprehenderit, recusandae
            veritatis vitae expedita. Perspiciatis, maiores possimus impedit
            laborum quisquam temporibus quam quos illo unde, esse ut amet porro.
            Culpa dolore, itaque sed possimus accusantium repudiandae illo sit
            officiis illum dolores ex voluptatibus doloribus officia soluta.
            Nisi ut nostrum quaerat ad officia dolore necessitatibus iste
            reprehenderit eos commodi? Quia, sequi obcaecati cumque quibusdam
            nulla explicabo consequuntur voluptate eos officia tenetur provident
            beatae assumenda temporibus tempora quas rerum dolores doloremque
            magni cupiditate iure ipsam.
          </p>
        </article>
        <article className='AboutItem'>
          <div className='aboutImgDiv'>
            <span>
              Mario
              <BsArrowRight />
            </span>
            <img src={AboutImg1} alt='About Img' className='aboutImg' />
          </div>
          <div className='aboutImgDiv2'>
            <img src={AboutImg2} alt='About Img' className='aboutImg2' />
            <span>
              <BsArrowLeft />
              Luigi
            </span>
          </div>
        </article>
      </main>
    </section>
  );
};

export default About;
