import React from "react";
import "./Shopbycategory.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const product = [
  {
    id: 1,
    name: "Fitnes collections",
    category: "Active Wear",
    price: 99,

    image:
      "https://images.bewakoof.com/uploads/grid/app/HC-1x1-CFT-common-1734710738.jpg", // Replace with your image URL
  },
  {
    id: 2,
    name: "Sample Product",
    category: "Westren Wear",
    price: 99,
    image:
      "https://images.bewakoof.com/uploads/grid/app/Buy-2-Joggers-Common-1x1-HC-Banner-1734716045.jpg", // Replace with your image URL
  },
  {
    id: 3,
    name: "Sample Product",
    category: "Ethnic",
    price: 99,
    image:
      "https://images.bewakoof.com/uploads/grid/app/HC-1x1-OS-com--1734710737.jpg", // Replace with your image URL
  },
];

function Shopbycategory() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container p-4">
      <h1 className="text-center fw-bold "> Men's Clothings </h1>
      <Slider {...settings}>
        {product.map((item, index) => {
          return (
            <div className="category_card position-relative" key={index}>
              <img
                src={item.image}
                alt={item.name}
                className="category_image"
              />
              <div className=" position-absolute text-white "></div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Shopbycategory;
