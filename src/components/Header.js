import React from "react";
import logo from ".././img/blue-bottle.jpg";
import Navbar from "./Navbar";

function Header({ scrollToControlSection }) {
  
  return (
    <div className='header'>
      <div className='columns'>
        <div className='column'>
          <h1 className='hero'>INDULGE IN THE ART OF FRESHNESS</h1> 
          <br />
          <br />
          <div className='columnTwo'>
            <h1><strong className='hero-sub'>ORGANICALLY GROWN</strong>
              <span className='coffee-beans'> COFFEE BEANS </span> 
              ROASTED IN-HOUSE FOR A <strong className='hero-sub'>PURE</strong> AND <strong className='hero-sub'>FULL-FLAVORED</strong> CUP OF COFFEE.
            </h1>
            <div className='order'>
              <br />
              <br />
              <button onClick={scrollToControlSection}>EXPLORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
