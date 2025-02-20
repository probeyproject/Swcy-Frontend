import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./Service.css";
import service1 from "../../src/assets/Images/Service-1.jpg";
import service2 from "../../src/assets/Images/Service-2.jpg";
import service3 from "../../src/assets/Images/Service-3.jpg";
import service4 from "../../src/assets/Images/Service-4.jpg";
import CountUp from "react-countup";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaUsers, FaCheck, FaThumbsUp, FaStar, FaBars } from "react-icons/fa";

function Service() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <>
        {/* <!-- Facts Start --> */}
        <div  ref={ref} className="facts my-2 py-2">
          <div className="container py-5">
            <div className="row g-5">
              <div
                className="col-sm-6 d- col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.1s"
              >
                <FaUsers className="fs-1 text-white mb-1" />

                {/* <h4 className="text-white" data-toggle="counter-up">
                  {isVisible && <CountUp start={0} end={10000} duration={3} />}+
                </h4> */}
                <span className="text-white">Happy Customers</span>
                <hr className="bg-white w-25 mx-auto mb-0" />
              </div>
              <div
                className="col-sm-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.3s"
              >
                <FaCheck className="fs-1 text-white mb-1" />
                {/* <h4 className="text-white" data-toggle="counter-up">
                  {isVisible && <CountUp start={0} end={1000} duration={3} />}+
                </h4> */}
                <span className="text-white">Original Products</span>
                <hr className="bg-white w-25 mx-auto mb-0" />
              </div>
              <div
                className="col-sm-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.5s"
              >
                <FaThumbsUp className="fs-1 text-white mb-1" />
                {/* <h4 className="text-white" data-toggle="counter-up">
                  {isVisible && <CountUp start={0} end={100} duration={3} />}+
                </h4> */}
                <span className="text-white">Top Brands</span>
                <hr className="bg-white w-25 mx-auto mb-0" />
              </div>
              <div
                className="col-sm-6 col-lg-3 text-center wow fadeIn"
                data-wow-delay="0.7s"
              >
                <FaStar className="fs-1 text-white mb-1" />
                {/* <h4 className="text-white" data-toggle="counter-up">
                  {isVisible && <CountUp start={0} end={1000} duration={3} />}+
                </h4> */}
                <span className="text-white">Top Rating Products</span>
                <hr className="bg-white w-25 mx-auto mb-0" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Facts End --> */}
    
      {/* <!-- Features Start --> */}
      {/* <div className="container-xxl feature py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="d-inline-block border rounded d_color fw-semi-bold py-1 px-3">
                Why Choosing Us!
              </p>
              <h1 className="display-5 mb-4" style={{ fontWeight: "600" }}>
                Few Reasons Why People Choosing Us!
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <Link
                className="btn text-white py-3 px-5"
                style={{ background: "black" }}
                to="/shop"
              >
                Shop Now
              </Link>
            </div>
            <div className="col-lg-6">
              <div className="row g-4 align-items-center">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                      <div className="feature-box border rounded p-4">
                        <FaCheck className="d_color fs-2" />
                        <h4 className="mb-3">Male Products</h4>
                        <p className="mb-3">
                          Clita erat ipsum et lorem et sit, sed stet lorem sit
                          clita duo justo erat amet
                        </p>
                        <Link className="fw-semi-bold d_color" to="/shop/Male">
                          Shop Now <IoIosArrowDroprightCircle />
                        </Link>
                      </div>
                    </div>
                    <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                      <div className="feature-box border rounded p-4">
                        <FaCheck className="d_color fs-2" />
                        <h4 className="mb-3">Female Products</h4>
                        <p className="mb-3">
                          Clita erat ipsum et lorem et sit, sed stet lorem sit
                          clita duo justo erat amet
                        </p>
                        <Link
                          className="fw-semi-bold d_color decoration-none"
                          to="/shop/Female"
                        >
                          Shop Now <IoIosArrowDroprightCircle />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                  <div className="feature-box border rounded p-4">
                    <FaCheck className="d_color fs-2" />
                    <h4 className="mb-3">Kids Products</h4>
                    <p className="mb-3">
                      Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                      duo justo erat amet
                    </p>
                    <Link className="fw-semi-bold d_color" to="/shop/Kids">
                      Shop Now <IoIosArrowDroprightCircle />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Features End --> */}

      {/* <!-- Service Start --> */}
      {/* <div className="container-xxl service py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="d-inline-block border rounded d_color fw-semi-bold py-1 px-3">
              About Us
            </p>
            <h1 className="display-5 mb-5" style={{ fontWeight: "600" }}>
              Awesome E-Commerce Plateform for Cloths
            </h1>
          </div>
          <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
            <div className="col-lg-4">
              <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                <button
                  className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-1"
                  type="button"
                >
                  <h5 className="m-0 d_color">
                    <FaBars /> 100% Original Products
                  </h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-2"
                  type="button"
                >
                  <h5 className="m-0 d_color">
                    <FaBars /> Top Brands
                  </h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-3"
                  type="button"
                >
                  <h5 className="m-0 d_color">
                    <FaBars /> Great Deals on Cloths
                  </h5>
                </button>
                <button
                  className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0"
                  data-bs-toggle="pill"
                  data-bs-target="#tab-pane-4"
                  type="button"
                >
                  <h5 className="m-0 d_color">
                    <FaBars /> 7 Days Refund Policy
                  </h5>
                </button>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tab-content w-100">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute rounded w-100 h-100"
                          src={service1}
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-4">
                        25 Years Of Experience In Financial Support
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p>
                      <p>
                        <FaCheck className="d_color" /> Secured Loans
                      </p>
                      <p>
                        <FaCheck className="d_color" /> Credit Facilities
                      </p>
                      <p>
                        <FaCheck className="d_color" /> Cash Advanced
                      </p>
                      <Link
                        to="/shop"
                        className="btn text-white py-3 px-5 mt-3"
                        style={{ background: "black" }}
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute rounded w-100 h-100"
                          src={service2}
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-4">
                        25 Years Of Experience In Financial Support
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p>
                      <p>
                        <FaCheck className="d_color" /> Secured Loans
                      </p>
                      <p>
                        <FaCheck className="d_color" /> Credit Facilities
                      </p>
                      <p>
                        <FaCheck className="d_color" /> Cash Advanced
                      </p>
                      <Link
                        to="/shop"
                        className="btn text-white py-3 px-5 mt-3"
                        style={{ background: "black" }}
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute rounded w-100 h-100"
                          src={service3}
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-4">
                        25 Years Of Experience In Financial Support
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p>
                      <p>
                        <FaCheck className="d_color" /> Secured Loans
                      </p>
                      <p>
                        <FaCheck className="d_color" /> Credit Facilities
                      </p>
                      <p>
                        <FaCheck className="d_color" /> Cash Advanced
                      </p>
                      <Link
                        to="/shop"
                        className="btn text-white py-3 px-5 mt-3"
                        style={{ background: "black" }}
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-4">
                  <div className="row g-4">
                    <div className="col-md-6" style={{ minHeight: "350px" }}>
                      <div className="position-relative h-100">
                        <img
                          className="position-absolute rounded w-100 h-100"
                          src={service4}
                          style={{ objectFit: "cover" }}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-4">
                        25 Years Of Experience In Financial Support
                      </h3>
                      <p className="mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum
                        sit. Aliqu diam amet diam et eos. Clita erat ipsum et
                        lorem et sit, sed stet lorem sit clita duo justo erat
                        amet.
                      </p>
                      <p>
                        <FaCheck className="d_color" /> Secured Loans
                      </p>
                      <p>
                        <FaCheck className="d_color" /> Credit Facilities
                      </p>
                      <p>
                        <FaCheck className="d_color" /> Cash Advanced
                      </p>
                      <Link
                        to="/shop"
                        className="btn text-white py-3 px-5 mt-3"
                        style={{ background: "black" }}
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Service End --> */}
    </>
  );
}

export default Service;
