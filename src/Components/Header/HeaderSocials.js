import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/muhammad-hashim-52aa03201"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin className="header__socials-icon" />
      </a>
      <a href="https://github.com/hashim715" target="_blank" rel="noreferrer">
        <BsGithub className="header__socials-icon" />
      </a>
      <a
        href="mailto: hashimmuhammad844@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <MdEmail className="header__socials-icon" />
      </a>
    </div>
  );
};

export default HeaderSocials;
