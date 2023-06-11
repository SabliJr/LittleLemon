import React, { useRef, useState } from "react";
import "./TheTestimonials.css";

import reviews from "../../Data/reviews";

import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";

const TheTestimonials = () => {
  const [showArrow, setShowArrow] = useState(0);
  const Length = reviews.length;

  let prevSlide = () => {
    setShowArrow(showArrow === 0 ? Length - 1 : 0);
    console.log(Length);
  };

  let nextSlide = () => {
    setShowArrow(showArrow === Length - 1 ? 0 : showArrow + 1);
    console.log(Length);
  };

  return (
    <section className='testimonials'>
      <h2>What people say about us!</h2>
      <div className='whole_Div'>
        <RiArrowLeftSLine className='scroll_Left' onClick={prevSlide} />
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
        <RiArrowRightSLine className='scroll_Right' onClick={nextSlide} />
      </div>
    </section>
  );
};

export default TheTestimonials;
