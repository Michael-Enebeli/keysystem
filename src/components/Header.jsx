import React from "react";
import Navbar from "./Navbar";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="hero">
        <span className="welcome">Welcome to KeySystem</span>
        <h1 className="main-heading">
          IT Consulting for forward-thinking Businesses
        </h1>
        <p className="sub-heading">
          Driving Digital Transformation, One Solution at a time
        </p>
        
        <div className="hero-buttons">
          <button className="btn get-started">Get Started</button>
          <button className="btn learn-more">Learn More</button>
        </div>
        </div>  
        <div className="hero-images">
          <img
            src="/images/vector.png"  
            alt="Vector Image"
            className="vector-image"
          />
          
          <img
            src="/images/man.png" 
            alt="Man Image"
            className="man-image"
          />
        </div>
    </header>
  );
};

export default Header;
