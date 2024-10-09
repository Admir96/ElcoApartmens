import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Slider: React.FC = () => {
  return (
    <div className="hero-slider shadow-sm">
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://i.imgur.com/K7A78We.jpg" className="d-block w-100" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h1>Welcome to Our Venue</h1>
              <h3>Experience comfort and elegance like never before.</h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/K7A78We.jpg" className="d-block w-100" alt="Second slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Discover the Best</h1>
              <p>Join us for unforgettable moments.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://i.imgur.com/K7A78We.jpg" className="d-block w-100" alt="Third slide" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Indulge Yourself</h1>
              <p>Savor the flavors of our exquisite menu.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
