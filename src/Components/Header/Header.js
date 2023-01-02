import React from "react";
import "./Header.css";
import Buttons from "./Buttons";
import HeaderSocials from "./HeaderSocials";
import { Player } from "@lottiefiles/react-lottie-player";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Muhammad Hashim</h1>
        <h5 className="text-light">Front-End Developer & Content Designer</h5>

        <Buttons />
        <HeaderSocials />
        <div className="me">
          <Player
            src="https://assets5.lottiefiles.com/packages/lf20_3vbOcw.json"
            className="player"
            loop
            autoplay
          />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
