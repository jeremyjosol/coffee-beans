import React from "react";

function Header() {
  const scrollToOrderSection = () => {
    const orderSection = document.getElementById('orderSection');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='header'>
      <div className='columns'>
        <div className='column'>
          <h1 className='hero'>INDULGE IN THE ART OF FRESHNESS</h1> 
          <br />
          <br />
          <div className='columnTwo'>
            <h1>EXCLUSIVE <span className='coffee-beans'>COFFEE BEANS</span> ROASTED IN-HOUSE FOR YOUR SPECIAL BREW.</h1>
            <div id="orderSection" className='order'>
              <br />
              <br />
              <button onClick={scrollToOrderSection}>EXPLORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
