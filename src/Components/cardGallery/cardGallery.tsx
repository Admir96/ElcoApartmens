import React, { useState } from 'react';
import Slider from 'react-slick';


interface ImageGalleryProps {
    images: string[];
    id: string;
}

const Gallery: React.FC<ImageGalleryProps> = ({ images, id }) => {
    
    const [currentIndex, setCurrentIndex] = useState(0); // Tracking the current image index



    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    return (
        <div id={id} className="gallery" style={{ position: 'relative', width: '400px', height: '360px' }}>
        <img className='img-fluid img-thumbnail'
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            style={{
                width: '100%',
                height: '100%',
                borderRadius: '7px',
                objectFit: 'cover',
            }}
        />
        <button
            className="prev-button"
            onClick={prevImage}
            style={{
                position: 'absolute',
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.7)',
                border: 'none',
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '5px',
            }}
        >
            ←
        </button>
        <button
            className="next-button"
            onClick={nextImage}
            style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.7)',
                border: 'none',
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '5px',
            }}
        >
            →
        </button>
    </div>
    )}
         
            
export default Gallery;
