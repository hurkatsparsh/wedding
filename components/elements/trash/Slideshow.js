import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import classes from "./Slideshow.module.css";

const Slideshow = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className={classes.slider}>
      <FaArrowAltCircleLeft className={classes.leftArrow} onClick={prevSlide} />
      <FaArrowAltCircleRight
        className={classes.rightArrow}
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? classes.slide.active : classes.slide}
            key={index}
          >
            {index === current && (
              <div className={classes.fade}>
                <img src={slide.source} alt={index} className={classes.image} />
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Slideshow;
