import React from "react";
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>
              hashimmuhammad844<br></br>@gmail.com
            </h5>
            <a href="mailto:hashimmuhammad844@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Muhammad Hashim</h5>
            <a
              href="https://www.linkedin.com/in/muhammad-hashim-52aa03201"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
