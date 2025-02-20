import React from "react";
import contactimg from "../assets/Images/contact.png";
function Contactus() {
  return (
    <div className="container me-3 mt-3 mb-3 ">
      <div className="row">
        <div className="col-md-6">
          <div>
            <img src={contactimg} alt="contact img" />
          </div>
        </div>
        <div className="col-md-6">
          <h1
            className="d-flex justify-content-center mt-3 fs-1"
            style={{ fontWeight: "600" }}
          >
            Contact Us
          </h1>

          <form className="form-control" action="">
            <div className="row">
              <div className="col-md-6 py-3">
                <label htmlFor="name">Name:</label>
                <input id="name" className="form-control" placeholder="Name" type="text" />
              </div>
              <div className="col-md-6 py-3">
                <label htmlFor="phone">Phone No:</label>
                <input id="phone" className="form-control" placeholder="Phone" type="tel" />
              </div>
              <div className="col-md-6 py-3">
                <label htmlFor="email">Email Id:</label>
                <input id="email" className="form-control" placeholder="Email id" type="text" />
              </div>

              <div className="col-md-6 py-3">
                <label htmlFor="reason">Reason:</label>
                <input id="reason" className="form-control" placeholder="Write a Reason..." type="text" />
              </div>
              <div className="col-12 py-3">
                <label for="message">Message:</label>
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Wirte short message..."
                  cols="85"
                ></textarea>
              </div>
            </div>
            <div className="d-flex justify-content-end py-3">
            <button className="btn btn-dark w-100" type="submit" >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
