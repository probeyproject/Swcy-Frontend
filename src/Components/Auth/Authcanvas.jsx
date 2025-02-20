import React, { useState, useEffect } from "react";
import Signup from "../Auth/Signup"; // Import Signup form
import Signin from "../Auth/Signin"; // Import Signin form
import "./Authcanvas.css"; // Import external stylesheet for cleaner styling

function Authcanvas({ closeModal }) {
  const [isSignUp, setIsSignUp] = useState(false);

  // Toggle between Signin and Signup forms
  const toggleForm = () => setIsSignUp((prev) => !prev);

  // Close the modal if clicked outside the modal-content
  const handleOutsideClick = (e) => {
    const modalOverlay = document.querySelector(".auth-modal-overlay");
    const modalContent = document.querySelector(".auth-modal-content");

    if (modalOverlay && !modalContent.contains(e.target)) {
      closeModal(); // Close modal if clicked outside the modal content
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleOutsideClick);

    // Clean up event listener when component unmounts
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div className="auth-modal-overlay" aria-modal="true" role="dialog">
      {/* Modal Content */}
      <div className="auth-modal-content">
        {/* Left Side Image */}
        <div className="auth-modal-image">
          <img
            src="https://img.freepik.com/free-photo/man-athletic-wear-posing-stairs-outdoors_23-2148773867.jpg?t=st=1737352717~exp=1737356317~hmac=d0ceb73d9fac35946b8d7cf730c9542f7e75ab379359dfd3677b7522ef60db3e&w=740" // Replace with the actual path to your image
            alt="Welcome"
            className="auth-image"
          />
        </div>

        {/* Right Side Form */}
        <div className="auth-modal-form">
          {/* Modal Header */}
          <div className="auth-modal-header">
            <button
              type="button"
              className="close-button text-black button_button"
              onClick={closeModal}
              aria-label="Close Modal"
            >
              &times;
            </button>
          </div>

          {/* Modal Body */}
          <div className="auth-modal-body">
            {isSignUp ? <Signup /> : <Signin />}
          </div>

          {/* Modal Footer */}
          <div className="auth-modal-footer">
            {isSignUp ? (
              <p>
                Already have an account?{" "}
                <button className="toggle-button" onClick={toggleForm}>
                  Sign In
                </button>
              </p>
            ) : (
              <p>
                Don’t have an account?{" "}
                <button className="toggle-button" onClick={toggleForm}>
                  Sign Up
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authcanvas;