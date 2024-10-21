import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider: React.FC = () => {
    const sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    // Settings for the slick slider
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, 
        beforeChange: (current: number, next: number) => setCurrentSlide(next), // Update current slide
    };

    const slides = [
        {
            src: "src/assets/img/carousel-1.png",
            title: "Let's Discover The World Together",
        },
        {
            src: "src/assets/img/carousel-2.png",
            title: "Discover Amazing Places With Us",
        },
        {
            src: "src/assets/img/carousel-3.png",
            title: "Discover Amazing Places With Us",
        },
    ];

    return (
        <div className="container-fluid p-0" >
            <Slider ref={sliderRef} {...settings}>
                {slides.map((slide, index) => (
                    <div key={index} className="carousel-item">
                        <img className="w-100 vh-110" src={slide.src} alt={`Slide ${index}`} />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{ maxWidth: "900px", marginBottom: '140px' }}>
                                <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                                <h1 className="display-3 text-white mb-md-4">{slide.title}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>

            {/* Custom Indicators */}
            <ol className="carousel-indicators">
                {slides.map((_, index) => (
                    <li
                        key={index}
                        className={`active ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => sliderRef.current?.slickGoTo(index)} // Go to the slide when clicked
                    />
                ))}
            </ol>

            {/* Custom Next and Prev Buttons */}
            <button className="carousel-control-prev me-5" onClick={() => sliderRef.current?.slickPrev()}>
                <div  style={{ width: "55px", height: "55px" }}>
                    <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
            </button>
            <button className="carousel-control-next me-5" onClick={() => sliderRef.current?.slickNext()}>
                <div style={{ width: "55px", height: "55px" }}>
                    <span className="carousel-control-next-icon mb-n2"></span>
                </div>
            </button>
        </div>
    );
};

export default HeroSlider;
