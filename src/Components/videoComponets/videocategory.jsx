import React from 'react';
import Video from "./../../assets/video/categoryvideo.mp4";

function Videocategory() {
  return (
    <div className='text-'>
      <div className="ratio ratio-16x9">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          style={{ width: '100%', height: '800px' }}
        >
          <source src="https://videos.pexels.com/video-files/8371247/8371247-sd_960_506_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Videocategory;
