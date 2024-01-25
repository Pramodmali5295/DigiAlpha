import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";

const Slidercom = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="slide-content">
          <div className="text-content">
            <h1>Lessons and insights</h1>
            <h2>From 8 years</h2>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="button">
              <a className="link" href="#register">
                Register
              </a>
            </button>
          </div>
          <img
            className="slide-image"
            src="https://www.shutterstock.com/image-photo/successful-caucasian-young-man-student-600nw-2141124049.jpg"
            alt="Slide Image 1"
          />
        </div>
      </div>
      <div>
        <div className="slide-content">
          <div className="text-content">
            <h1>Lessons and insights</h1>
            <h2>From 8 years</h2>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button className="button">
              <a className="link" href="#register">
                Register
              </a>
            </button>
          </div>
          <img
            className="slide-image"
            src="https://www.shutterstock.com/image-photo/successful-caucasian-young-man-student-600nw-2141124049.jpg"
            alt="Slide Image 2"
          />
        </div>
      </div>
      <div>
        <div className="slide-content">
          <div className="text-content">
            <h1>Lessons and insights</h1>
            <h2>From 8 years</h2>
            <p>
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <button>
              <a className="link" href="#register">
                Register
              </a>
            </button>
          </div>
          <img
            className="slide-image"
            src="https://www.shutterstock.com/image-photo/successful-caucasian-young-man-student-600nw-2141124049.jpg"
            alt="Slide Image"
          />
        </div>
      </div>
    </Slider>
  );
};

export default Slidercom;
