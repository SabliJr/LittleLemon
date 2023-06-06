import React from "react";
import "./Specials.css";

import Special1 from "../../Images/meal1.png";
import Special2 from "../../Images/Meal2.png";
import Special3 from "../../Images/Meal.png";

const TheSpecials = () => {
  return (
    <section className='specials'>
      <div>
        <h2>This week's specials.</h2>
        <p>
          We survey our customers every to select their favorite meals to give
          them discounts and serve them the test they love.
        </p>
      </div>
      <article>
        <div className='specialDiv'>
          <img src={Special2} alt='' className='specialImg' />
          <div>
            <h3>#1 Italian Pasta</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
              nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Porro, nulla.
            </p>
          </div>
        </div>
        <div className='specialDiv'>
          <img src={Special1} alt='' className='specialImg' />
          <div>
            <h3>#1 Italian Pasta</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae repudiandae, delectus laborum error perspiciatis ullam
              vel fugiat facilis quidem nulla.
            </p>
          </div>
        </div>
        <div className='specialDiv'>
          <img src={Special3} alt='' className='specialImg' />
          <div>
            <h3>#1 Italian Pasta</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              asperiores temporibus. Necessitatibus.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default TheSpecials;
