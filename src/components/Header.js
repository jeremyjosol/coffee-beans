import React from "react";
import logo from ".././img/blue-bottle.jpg";

function Header({ scrollToControlSection }) {
  
  return (
    <div className='header'>
      <div className='columns'>
        <div className='column'>
          <h1 className='hero'>INDULGE IN THE ART OF FRESHNESS</h1> 
          <br />
          <br />
          <div className='columnTwo'>
            <h1>ORGANICALLY GROWN 
              <span className='coffee-beans'> COFFEE BEANS </span> 
              ROASTED IN-HOUSE FOR A TASTY BREW.
            </h1>
            <div id="orderSection" className='order'>
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
