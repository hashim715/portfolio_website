import React from "react";
import "./About.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { Player } from "@lottiefiles/react-lottie-player";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <Player
            src="https://assets10.lottiefiles.com/packages/lf20_u4jjb9bd.json"
            className="player"
            loop
            autoplay
          />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>5+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Clients Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ Completed</small>
            </article>
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
            neque ipsam. Quisquam, blanditiis voluptatibus debitis magnam quae
            obcaecati voluptas aperiam.
          </p>
          <a href="#contact" className="btn btn__primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
