import React from 'react';
import './videostyle.css'
import Video from "./../../assets/video/categoryvideotwo.mp4";
import Ourstory from '../StorySection/OurStory';

function Videocategory() {
  return (
    <>
    <Ourstory/>
    <div className="video-container">
      <div className="ratio ratio-16x9">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="video-player"
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    </>
  );
}

export default Videocategory;
