import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="column">
        <img
          src="https://digialpha.com/static/media/logo2.d8a6d1ce1345a68d1951fb03e7a70b8d.svg"
          alt="Digiapla Logo"
          className="logo"
        />
        <p>Copyright &copy; 2020 Nexcent ltd.</p>
        <p>All Rights Reserved</p>
        <div className="social-icons">
          <a
            href="https://www.instagram.com/accounts/login/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="data:image/png;base64,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"
              alt="Instagram"
            />
          </a>
          <a
            href="https://dribbble.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="data:image/png;base64,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"
              alt="Dribbble"
            />
          </a>
          <a
            href="https://twitter.com/i/flow/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="data:image/png;base64,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"
              alt="Twitter"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjc-EOkAMFfxYnsBiKGeTiF6Qi9ZDfn85rOA&usqp=CAU"
              alt="Youtube"
            />
          </a>
        </div>
      </div>
      <div className="column">
        <h3>Company</h3>
        <ul>
          <li>
            <a href="#aboutus">About Us</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Support</h3>
        <ul>
          <li>
            <a href="#helpcenter">Help Center</a>
          </li>
          <li>
            <a href="#termsofservice">Terms of Service</a>
          </li>
          <li>
            <a href="#legal">Legal</a>
          </li>
          <li>
            <a href="#privacypolicy">Privacy Policy</a>
          </li>
          <li>
            <a href="#status">Status</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Contact Us</h3>
        <form className="email-form">
          <label htmlFor="email">Subscribe to our newsletter:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
