
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="logo" src="https://digialpha.com/static/media/logo2.d8a6d1ce1345a68d1951fb03e7a70b8d.svg" alt="Digiapla Logo" />
      <div>
        <a className="link" href="#home">Home</a>
        <a className="link" href="#service">Service</a>
        <a className="link" href="#feature">Feature</a>
        <a className="link" href="#product">Product</a>
        <a className="link" href="#testimonial">Testimonial</a>
        <a className="link" href="#faq">FAQ</a>
      </div>
      <div className="auth-buttons">
        <button className="login-button"><a className="link" href="#Login">Login</a></button>
        <button className="signup-button"><a className="link" href="#Signup">Sign up</a></button>
      </div>
    </nav>
  );
};

export default Navbar;
