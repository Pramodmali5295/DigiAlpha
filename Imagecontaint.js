import React from "react";
import "./Imagecontaint.css";

function Imagecontaint() {
  return (
    <div className="section-image-container">
      <div className="image-overlay">
        <img
          src="https://images.unsplash.com/photo-1611080402167-ed75bae6df32?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D"
          alt="nature image"
          className="section-img"
        />
        <div className="image-text-box">
          <h1 className="image-heading">What are your Safeguarding responsibilities and how can you manage
            them?</h1>
         
            <button className="button">
              <a className="link" href="#getademo">
               Get a Demo
              </a>
            </button>
        </div>
      </div>
    </div>
  );
}

export default Imagecontaint;
