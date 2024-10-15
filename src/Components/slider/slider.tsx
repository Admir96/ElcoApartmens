import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    };

    return (
        <div className="hero-slider">
            <Slider {...settings}>
                <div className="carousel-item">
                    <img src="src/assets/img/carousel-1.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                        <h1 className='carousel-h1'>Enjoy a Perfect Getaway</h1>
                 
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="src/assets/img/carousel-2.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                        <h1 className='carousel-h1'>Escape to Luxury Living</h1>
                    
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="src/assets/img/carousel-3.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                        <h1 className='carousel-h1'>Indulge in Pure Relaxation</h1>
                        
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="src/assets/img/carousel-4.png" className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                        <h1 className='carousel-h1'>Your Haven Awaits You</h1>
                       
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default HeroSlider;
