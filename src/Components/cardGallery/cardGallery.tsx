import React from "react";

  interface GalleryProps{
    images:string[];
    id:string;
  }
  
  const Gallery: React.FC <GalleryProps> = ({ images, id }) =>  {
            return (
                <div id= {id} className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner"style={{height:'250px'}}>
                    {images.map((image, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                            <img src={image} className="d-block w-100" style={{height:'fit'}} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button"  data-bs-target={`#${id}`} data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button"  data-bs-target={`#${id}`} data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    );
}

export default Gallery;