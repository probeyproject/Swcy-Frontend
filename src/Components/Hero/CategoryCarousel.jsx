import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";


const categories = [
  { id: 1, name: "Handbags", href: "https://img.freepik.com/free-photo/beautiful-elegance-luxury-fashion-green-handbag_74190-4885.jpg?semt=ais_hybrid" },
  { id: 2, name: "Clothings", href:"https://img.freepik.com/free-vector/simple-flat-i-heart-you-valentine-s-day-t-shirt_742173-14411.jpg?semt=ais_hybrid" },
  { id: 3, name: "Sweaters", href: "https://img.freepik.com/free-photo/fashionable-man-winter-knitted-clothes_158595-4105.jpg?ga=GA1.1.1602575729.1734936805&semt=ais_hybrid" },
  { id: 4, name: "Huddies", href: "https://s.alicdn.com/@sc04/kf/H2a92592e3b03449981feef39122df721S.jpg_720x720q50.jpg" },
  { id: 5, name: "Jackets", href: "https://m.media-amazon.com/images/I/61eMJalktNL._AC_UL480_FMwebp_QL65_.jpg" },
  { id: 7, name: "Shoes", href: "https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?semt=ais_hybrid" },
  { id: 8, name: "Shirt", href: "https://assets.digitalcontent.marksandspencer.app/image/upload/w_600,h_780,q_auto,f_auto,e_sharpen/SD_03_T11_2081_E0_X_EC_0" },
];

function CategoryCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 2400, // For large screens (desktops)
        settings: {
          slidesToShow: 7, // 6 items per slide
        },
      },
      {
        breakpoint: 992, // For medium screens (tablets)
        settings: {
          slidesToShow: 5, // 4 items per slide
        },
      },
      {
        breakpoint: 768, // For small screens (portrait tablets and below)
        settings: {
          slidesToShow: 4, // 3 items per slide
        },
      },
      {
        breakpoint: 576, // For mobile devices
        settings: {
          slidesToShow: 3, // 2 items per slide
        },
      },
      {
        breakpoint: 400, // For very small mobile screens
        settings: {
          slidesToShow: 2, // 1 item per slide
        },
      },
    ],
  };

  return (
    <div className="bg-white mt-4 py-3">
  
      <Slider {...settings}>
        {categories.map((category,index) => (
          
          <div
            className="col-3 d-flex flex-column align-items-center" // 5 items per row (col-2 for each)
            key={index}
            style={{ maxWidth: "20%" }} // Ensures items fit the container
          >
            <a href="#" className="text-dark mt-4">
              <div
                className="category-icon bg-light rounded-circle shadow-sm d-flex justify-content-center align-items-center mb-2"
                style={{
                  width: "80px",
                  height: "80px",
                  fontSize: "30px",
                  color: "#000",
                }}
              >
               <img className="w-100 rounded-circle h-100" src={category.href} alt={category.name} />
              </div>
            </a>
            <span>{category.name}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoryCarousel;
