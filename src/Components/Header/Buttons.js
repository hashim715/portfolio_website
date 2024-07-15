import React from "react";
import CV from "../../assets/hashim_cv.pdf";

const Buttons = () => {
  return (
    <div className="cta">
      <a href="#" download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  );
};

export default Buttons;
