import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function Signin() {
  return (
    <>
      <section>
        <div
          className="px-4 py-2 text-center text-lg-start"
          style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
        >
          <div className="container">
            <div className="row gx-lg-5 align-items-center">
              {/* Left Content */}
              <div className="col-lg-6 mb-4 mb-lg-0">
                <h4 className="display-5 fw-bold">
                  The best offer <br />
                  <span className="text-primary">for your business</span>
                </h4>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                  tempora at cupiditate quis eum maiores libero veritatis?
                </p>
              </div>

              {/* Right Form */}
              <div className="col-lg-6">
              <h3 className="text-center fw-bold mb-3">Sign In</h3>
                <div className="card shadow-sm border-0">
                  <div className="card-body p-2">
                    <form>
                      {/* Email */}
                      <div className="mb-3">
                        <input
                          type="email"
                          placeholder="Email"
                          className="form-control"
                        />
                      </div>

                      {/* Password */}
                      <div className="mb-3">
                        <input
                          type="password"
                          placeholder="Password"
                          className="form-control"
                        />
                      </div>

                      {/* Checkbox */}
                      <div className="form-check d-flex justify-content-center mb-4">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          id="subscribe"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="subscribe">
                          Subscribe to our newsletter
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">
                          Sign In
                        </button>
                      </div>

                      {/* Social Sign-in
                      <div className="text-center mt-3">
                        <p>or sign in with:</p>
                        <button
                          type="button"
                          className="btn btn-outline-secondary me-2 fs-5"
                        >
                          <FcGoogle />
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-primary fs-5"
                        >
                          <FaFacebook />
                        </button>
                      </div> */}
                    </form>
                  </div>
                </div>
              </div>
              {/* End Right Form */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
