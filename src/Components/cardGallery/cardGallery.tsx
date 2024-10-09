import React from "react";

  interface GalleryProps{
    images:string[];
    id:string;
  }
  
  const Gallery: React.FC <GalleryProps> = ({ images, id }) =>  {
            return (
                <div id= {id} className="carousel slide" data-bs-ride="carousel">
                <div id="carousel-inner" className="carousel-inner"style={{height:'280px',}}>
                    {images.map((image, index) => (
                        <div id='carousel-item' className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img src={image} className="img-fluid w-100 h-100" alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button id="carousel-control-prev"  className="carousel-control-prev" type="button"  data-bs-target={`#${id}`} data-bs-slide="prev">
                    <span id="carousel-control-prev-icon" className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button id="carousel-control-next" className="carousel-control-next" type="button"  data-bs-target={`#${id}`} data-bs-slide="next">
                    <span  id="carousel-control-next-icon" className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    );
}

export default Gallery;