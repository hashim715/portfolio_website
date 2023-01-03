/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import { TbBrandGithub } from "react-icons/tb";
import { RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Muhammad Hashim
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/hashim715" target="_blank" rel="noreferrer">
          <TbBrandGithub className="footer__socials-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-hashim-52aa03201"
          target="_blank"
          rel="noreferrer"
        >
          <RiLinkedinFill className="footer__socials-icon" />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Muhammad Hashim. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
