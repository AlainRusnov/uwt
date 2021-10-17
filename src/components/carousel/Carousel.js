import React from "react";
import Slider from "react-slick";

function Carousel({title,data}) {

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div className="btn--prev--arrow">
      <img src="assets/images/arrow.svg" alt="prevArrow" {...props} />
    </div>
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div className="btn--next--arrow">
      <img src="assets/images/arrow.svg" alt="nextArrow" {...props} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
      <div className="card--container">
        <Slider {...settings} className="card--container--inner">
        {data.map((item, index) => {
          return (
            <div
            className="card"
            key={index}>
              <img src={item.src} alt={title} className="card--img"/>
              <div className="game--title">{item.title}</div>
              <div className="game-platforms">
                <img src="assets/images/windows.svg" alt="windows icon" className="platform-icon" />
                <img src="assets/images/xbox.svg" alt="xbox icon" className="platform-icon"/>
                <img src="assets/images/ps4.svg" alt="ps4 icon" className="platform-icon"/>
              </div>

            </div>
          );
        })}
        </Slider>
        </div>
        );
      }

      export default Carousel;