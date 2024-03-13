import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
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
        <img src="https://parkcinema.az/uploads/default/files/dsc01479.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="https://parkcinema.az/uploads/default/files/dsc01521.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="https://parkcinema.az/uploads/default/files/dsc01495.jpg" alt="Slide 3" />
      </div>
    </Slider>
  );
}

export default Carousel;
