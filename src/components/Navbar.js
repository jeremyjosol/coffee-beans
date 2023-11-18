import React from "react";
import logo from '.././img/blue-bottle.jpg';

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" className='logo-image' />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">HOME <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">ABOUT</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">CONTACT</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

