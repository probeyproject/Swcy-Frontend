import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

const testimonials = [
    {
      id: 1,
      name: "Bruce Hardy",
      role: "Software Developer",
      image: "https://i.imgur.com/PKHvlRS.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 4,
    },
    {
      id: 2,
      name: "Mark Smith",
      role: "Web Developer",
      image: "https://i.imgur.com/w2CKRB9.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 5,
    },
    {
      id: 3,
      name: "Veera Duncan",
      role: "Software Architect",
      image: "https://i.imgur.com/ACeArwY.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      rating: 4,
    },
  ];

function Testimonial() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1824,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
  return (
    <div className="slider-container mt-4">
      <Slider {...settings}>

         {testimonials.map((testimonial) => (
          <div className="col-md-4" key={testimonial.id}>
            <div className="card p-3 border-0 text-center px-4">
              {/* User Image */}
              <div className="user-image d-flex justify-content-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-circle"
                  width="80"
                />
              </div>

              {/* User Content */}
              <div className="user-content mt-3">
                <h5 className="mb-0">{testimonial.name}</h5>
                <span className="text-muted">{testimonial.role}</span>
                <p className="mt-2">{testimonial.description}</p>
              </div>

              {/* Ratings */}
              <div className="ratings mt-2">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <FaStar key={index} className="text-warning" />
                ))}
                {Array.from({ length: 5 - testimonial.rating }).map(
                  (_, index) => (
                    <FaStar key={index} className="text-muted" />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
     
      </Slider>
    </div>
  );
}

export default Testimonial;
