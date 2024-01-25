
import React from 'react';
import './Containt.css';

function Containt() {
  return (
   <>
    <div className="container">
      <div className="image-container">
        <img src="https://www.shutterstock.com/image-photo/successful-caucasian-young-man-student-600nw-2141124049.jpg" alt="Left Image" className="content-image" />
      </div>
      <div className="text-container">
        <h2>The unseen of spending three years at Pixelgrade </h2>
        <div className="content-box">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <button><a className="link" href="#Learnmore">Learn More</a></button>
      </div>
   </div>
   <div>
     <div className="container">
     
     <div className="text-container">
       <h2>How to design your site footer like we died</h2>
       <div className="content-box">
         <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         </p>
       </div>
       <button><a className="link" href="#learnmore">Learn More</a></button>
     </div>
     <div className="image-container">
       <img src="https://www.shutterstock.com/image-photo/successful-caucasian-young-man-student-600nw-2141124049.jpg" alt="Left Image" className="content-image" />
     </div>
     </div>
     </div>
     </>
  );
}

export default Containt;
