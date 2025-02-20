import React from "react";
import "./OurStory.css";
// import image from "./../../assets/Images/young-sports-man-training-gym.jpg";
import SWCY from "./../../assets/Images/SWCY.jpg";
function WhySwcy() {
  return (
    <div className="Story-parent">
      <div className="row mx-auto mt-3 py-5">
        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto my-auto ">
          <img className="ChooseUs" src={SWCY} alt="" />
        </div>
        <div className="Story-text col-lg-6 col-md-5 col-sm-12  ">
          <div>
            <span className="Read">Why </span>
            <span className="Story">Choose Us</span>
          </div>
          <p className="Highlight">
            {" "}
            LEVEL UP YOUR FITNESS CONTENT TO ENERGIZE YOUR BODY AND MIND
          </p>

          <p className="StoryParagraph">
            Discover the latest content from Team HRX that will help you make
            your fitness journey exciting and engaging. Tune into content pieces
            like podcasts, Workout Videos and HRX Blogs to level up your
            knowledge and keep you in the zone.
          </p>
          <button className="btn border text-light btn-lg me-2 rounded-0 ms-1 mt-3">
            Read Story
          </button>
          {/* <button>View Story</button> */}
        </div>
      </div>
    </div>
  );
}

export default WhySwcy;
