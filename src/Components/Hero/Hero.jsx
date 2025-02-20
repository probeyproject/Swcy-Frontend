import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "../../../src/assets/Images/banner1.png";
import banner2 from "../../../src/assets/Images/banner1.png";
import banner3 from "../../../src/assets/Images/banner1.png";


function Hero() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    gap: 1,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={banner1} alt="Slide 1" style={{ width: "100%", height: "80%" }} />
        <div className="carousel-caption text-light d-none d-md-block">
         {/* <h4 className="text-dark">C Deal</h4>
         <button className="btn btn-outline-dark">Buy Now</button> */}
        </div>
      </div>
      <div>
        <img src={banner2} alt="Slide 2" style={{ width: "100%", height: "80%" }} />
        <div className="carousel-caption text-light d-none d-md-block">
        {/* <h4 className="text-dark">Super Deal</h4>
        <button className="btn btn-outline-dark">Buy Now</button> */}
        </div>
      </div>
      <div>
        <img src={banner3} alt="Slide 3" style={{ width: "100%", height: "80%" }} />
        <div className="carousel-caption text-light d-none d-md-block">
        {/* <h4 className="text-dark">Great Deal</h4>
        <button className="btn btn-outline-dark">Buy Now</button> */}
        </div>
      </div>
    </Slider>
  );
}

export default Hero;

