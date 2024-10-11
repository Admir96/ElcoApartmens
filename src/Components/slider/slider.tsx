import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Slider: React.FC = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="src\assets\img\carousel-1.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <h1>Welcome to Your Dream Escape</h1>
         <h3>Experience unmatched comfort and style in our exquisite apartments.</h3>
        </div>
      </div>
      <div className="carousel-item">
        <img src="src\assets\img\carousal-2.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <h1>Luxury Awaits You</h1>
        <h3>Indulge in modern amenities and a vibrant city lifestyle.</h3>
        </div>
      </div>
      <div className="carousel-item">
        <img src="src\assets\img\carousal-3.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <h1>Your Perfect Home Away from Home</h1>
        <h3>Relax in spacious living areas designed for your comfort.</h3>
        </div>
      </div>
      <div className="carousel-item">
        <img src="src\assets\img\carousal-4.png" className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block">
        <h1>Unforgettable Experiences Start Here</h1>
        <h3>Discover the ideal retreat for both short stays and extended visits.</h3>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  );
};

export default Slider;
