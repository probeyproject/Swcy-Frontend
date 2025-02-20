import React from "react";
import { Link } from 'react-router-dom'
import shop from "../../src/assets/Images/shop1.jpg";
import { ImQuotesRight } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { FaBars, FaCheck, FaPhoneAlt } from "react-icons/fa";
import "../Services/Service.css"
import service1 from "../../src/assets/Images/Service-1.jpg"
import service2 from "../../src/assets/Images/Service-2.jpg"
import service3 from "../../src/assets/Images/Service-3.jpg"
import service4 from "../../src/assets/Images/Service-4.jpg"

function About() {
  return (
    <>
      {/* <!-- Service Start --> */}
      <div className="container-xxl service py-5">
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
      </div>
      {/* <!-- Service End --> */}
      {/* <!-- About Start --> */}
      <div className="container-xxl mt-4 py-1">
        <div className="container">
          <div className="row g-4 align-items-end mb-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <img
                className="img-fluid rounded"
                src={shop}
                style={{ height: 500, width: "100%" }}
              />
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h1 className="mb-4">
                We Help Our Customers in Case of Refund, Return
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <div className="border rounded p-4">
                <nav>
                  <div
                    className="nav nav-tabs mb-3"
                    id="nav-tab"
                    role="tablist"
                  >
                    <button
                      className="nav-link d_color fw-semi-bold active"
                      id="nav-story-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-story"
                      type="button"
                      role="tab"
                      aria-controls="nav-story"
                      aria-selected="true"
                    >
                      Refund
                    </button>
                    <button
                      className="nav-link d_color fw-semi-bold"
                      id="nav-mission-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-mission"
                      type="button"
                      role="tab"
                      aria-controls="nav-mission"
                      aria-selected="false"
                    >
                      Return
                    </button>
                    <button
                      className="nav-link d_color fw-semi-bold"
                      id="nav-vision-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-vision"
                      type="button"
                      role="tab"
                      aria-controls="nav-vision"
                      aria-selected="false"
                    >
                      Shipping
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-story"
                    role="tabpanel"
                    aria-labelledby="nav-story-tab"
                  >
                    <p>
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                      tempor sit. Aliqu diam amet diam et eos labore.
                    </p>
                    <p className="mb-0">
                      Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam
                      et eos labore. Clita erat ipsum et lorem et sit
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-mission"
                    role="tabpanel"
                    aria-labelledby="nav-mission-tab"
                  >
                    <p>
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                      tempor sit. Aliqu diam amet diam et eos labore.
                    </p>
                    <p className="mb-0">
                      Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam
                      et eos labore. Clita erat ipsum et lorem et sit
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-vision"
                    role="tabpanel"
                    aria-labelledby="nav-vision-tab"
                  >
                    <p>
                      Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                      tempor sit. Aliqu diam amet diam et eos labore.
                    </p>
                    <p className="mb-0">
                      Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam
                      et eos labore. Clita erat ipsum et lorem et sit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="border rounded p-4 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="row g-4">
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                <div className="h-100">
                  <div className="d-flex">
                    <div
                      className="flex-shrink-0 btn-lg-square d-flex justify-content-center fs-4 rounded-circle"
                      style={{
                        background: "black",
                        height: "50px",
                        width: "50px",
                        alignItems: "center",
                      }}
                    >
                      <ImQuotesRight className="text-white" />
                    </div>
                    <div className="ps-3">
                      <h4>Fee Shiiping Available</h4>
                      <span>
                        Feee Shipping if total cart balance is above 1000
                      </span>
                    </div>
                    <div className="border-end d-none d-lg-block"></div>
                  </div>
                  <div className="border-bottom mt-4 d-block d-lg-none"></div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                <div className="h-100">
                  <div className="d-flex">
                    <div
                      className="flex-shrink-0 btn-lg-square d-flex justify-content-center fs-4 rounded-circle "
                      style={{
                        background: "black",
                        height: "50px",
                        width: "50px",
                        alignItems: "center",
                      }}
                    >
                      <IoIosPeople className="text-white" />
                    </div>
                    <div className="ps-3">
                      <h4>100% Original Products</h4>
                      <span>
                        Clita erat ipsum lorem sit sed stet duo justo lorem
                      </span>
                    </div>
                    <div className="border-end d-none d-lg-block"></div>
                  </div>
                  <div className="border-bottom mt-4 d-block d-lg-none"></div>
                </div>
              </div>
              <div className="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                <div className="h-100">
                  <div className="d-flex">
                    <div
                      className="flex-shrink-0 btn-lg-square d-flex justify-content-center fs-4 rounded-circle "
                      style={{
                        background: "black",
                        height: "50px",
                        width: "50px",
                        alignItems: "center",
                      }}
                    >
                      <FaPhoneAlt className="text-white" />
                    </div>
                    <div className="ps-3">
                      <h4>24/7 Customer Support</h4>
                      <span>
                        Clita erat ipsum lorem sit sed stet duo justo lorem.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}
    </>
  );
}

export default About;
