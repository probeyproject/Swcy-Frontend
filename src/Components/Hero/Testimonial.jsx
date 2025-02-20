import React, { useState } from "react";
import Slider from "react-slick";

import { FaStar } from "react-icons/fa";
import "./Testimonial.css";
const testimonials = [
  {
    rating: 5,
    message:
      "This company exceeded my expectations! Their service was impeccable, and the team was incredibly professional.",
    name: "John Doe",
    place: "New York, USA",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    rating: 4,
    message:
      "Great experience! The staff was friendly, and the quality of work was excellent. Highly recommended.",
    name: "Jane Smith",
    place: "London, UK",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    rating: 5,
    message:
      "Amazing service! Quick, efficient, and very customer-focused. I’ll definitely return.",
    name: "Ali Khan",
    place: "Dubai, UAE",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
  {
    rating: 4.5,
    message:
      "I was really impressed with their attention to detail and commitment to excellence. Fantastic job!",
    name: "Emily Zhang",
    place: "Beijing, China",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
  },
];

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex), // Track the active slide
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
    ],
  };
  return (
    <div>
      <div className="conatiner py-5 bg_background">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
              <h2 className="mb-3 display-5 fw-semibold">Testimonials</h2>
              <p className="text-secondary mb-2 mb-md-3">
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Pellentesque et neque id ligula mattis
                commodo.
              </p>
              <hr className="w-50 mx-auto text-secondary" />
            </div>
          </div>
        </div>
        <div>
          {/* svg */}

          <div></div>
          <div className="slider-container ">
            <Slider {...settings}>
              {testimonials.map((item, index) => (
                <div key={index} className="my-3">
                  <div
                    className={`card testimonial-card ${
                      index === currentSlide ? "center-slide" : ""
                    }`}
                    style={{
                      maxWidth: "340px",
                      margin: "auto",
                      background: "#fff",
                    }}
                  >
                    <div className="card-body">
                      <div className="d-flex align-items-center mb-2">
                        <div className="ratings mt-2">
                          {Array.from({ length: item.rating }).map((_, i) => (
                            <FaStar key={i} className="text-warning" />
                          ))}
                          {Array.from({ length: 5 - item.rating }).map(
                            (_, i) => (
                              <FaStar key={i} className="text-muted" />
                            )
                          )}
                        </div>
                      </div>
                      <p className="fst-italic text-muted">"{item.message}"</p>
                      <div className="d-flex align-items-center mt-4">
                        <img
                          src={item.image}
                          alt="Profile"
                          className="rounded-circle me-3"
                          style={{
                            width: "64px",
                            height: "64px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <h6 className="mb-0 text-capitalize fw-bold text-danger">
                            {item.name}
                          </h6>
                          <small className="text-muted">{item.place}</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
