import React, { useState, useCallback } from "react";

import "./TheTestimonials.css";

import reviews from "../../Data/reviews";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const TheTestimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  let nextSlide = () => {
    setCurrentSlide((currentSlide + 100) * reviews.length);
  };

  return (
    <section className='testimonials'>
      <h2>What people say about us!</h2>
      <div className='whole_Div'>
        {/* <RiArrowLeftSLine className='scroll_Left' onClick={nextSlide} /> */}
        <div className='reviewsQuotes'>
          {reviews.map((x, i) => (
            <figure key={i}>
              <blockquote>
                <img src={x.image} alt='Reviewer Img' className='reviewerIMg' />
                <p className='desc'>{x.description}</p>
              </blockquote>
              <figcaption className='desc_name'> — {x.name}</figcaption>
            </figure>
          ))}
        </div>
        {/* <RiArrowRightSLine className='scroll_Right' /> */}
      </div>
    </section>
  );
};

export default TheTestimonials;
