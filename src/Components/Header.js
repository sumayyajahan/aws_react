import React from "react";

function Header(props) {
  return (
    <div className="banner">
      <ul className="rslides" id="slider">
        <li>
          <div className="banner-info">
            <h3>Its My Life</h3>
            <span className="line1"></span>
            <p>Lorem Ipsum is dummy text.</p>
            <span className="line2"></span>
            <div className="social-icons">
              <a href="#">
                <span className="facebook"></span>
              </a>
              <a href="#">
                <span className="twitter"></span>
              </a>
              <a href="#">
                <span className="linkedin"></span>
              </a>
              <a href="#">
                <span className="googleplus"></span>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="banner-info">
            <h3>My Passion</h3>
            <span className="line1"></span>
            <p>Lorem Ipsum is dummy text.</p>
            <span className="line2"></span>
            <div className="social-icons">
              <a href="#">
                <span className="facebook"></span>
              </a>
              <a href="#">
                <span className="twitter"></span>
              </a>
              <a href="#">
                <span className="linkedin"></span>
              </a>
              <a href="#">
                <span className="googleplus"></span>
              </a>
            </div>
          </div>
        </li>
        <li>
          <div className="banner-info">
            <h3>My Life Style</h3>
            <span className="line1"></span>
            <p>Lorem Ipsum is dummy text.</p>
            <span className="line2"></span>
            <div className="social-icons">
              <a href="#">
                <span className="facebook"></span>
              </a>
              <a href="#">
                <span className="twitter"></span>
              </a>
              <a href="#">
                <span className="linkedin"></span>
              </a>
              <a href="#">
                <span className="googleplus"></span>
              </a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Header;
