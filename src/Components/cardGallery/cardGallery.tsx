import React from 'react';
import Slider from 'react-slick';

interface ImageGalleryProps {
    images: string[];
    id: string;
}

const Gallery: React.FC<ImageGalleryProps> = ({ images, id }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <button className="slick-arrow">Next</button>,
        prevArrow: <button className="slick-arrow">Prev</button>,
    };

    return (
        <div id={id} className="carousel slide Rounded shadow" style={{ height: '390px' }}>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className="carousel-item" key={index}  style={{ height: '100%' }}>
                        <img src={image} className="img-fluid w-100 h-100" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Gallery;
