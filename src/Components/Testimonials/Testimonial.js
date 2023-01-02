import React from 'react';
import './Testimonial.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="reviewauthor" />
          </div>
          <h5>Client Name</h5>
          <small>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, praesentium!accusantium tempora laboriosam, quidem voluptatibus.
          </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonial
