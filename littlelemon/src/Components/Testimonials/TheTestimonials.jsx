import React from "react";
import "./TheTestimonials.css";

import reviews from "../../Data/reviews";

const TheTestimonials = () => {
  return (
    <section className='testimonials'>
      <h2>What people say about us!</h2>
      <div className='reviewsQuotes'>
        {reviews.map((x) => (
          <figure id='figureO'>
            <blockquote>
              <img src={x.image} alt='Reviewer Img' className='reviewerIMg' />
              <p>{x.description}</p>
            </blockquote>
            <figcaption>—{x.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default TheTestimonials;
