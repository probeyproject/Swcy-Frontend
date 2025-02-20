import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Newsletter = () => {
  return (
    <div className="newsletter bg-light py-5 mt-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section: Text */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2 className="fw-bold mb-3">Subscribe to Our Newsletter</h2>
            <p className="text-muted">
              Be the first to know about exclusive deals, new arrivals, and the latest trends!
            </p>
          </div>

          {/* Right Section: Form */}
          <div className="col-md-6">
            <form className="d-flex flex-column flex-md-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control rounded-pill mb-2 mb-md-0 me-md-2"
                aria-label="Email"
              />
              <button type="submit" className="btn btn-dark rounded-pill px-4">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;