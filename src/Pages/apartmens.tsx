import React from "react";
import Gallery from "../Components/cardGallery/cardGallery";

const Apartments: React.FC = () => {
    const imagesForGallery1: string[] = [
        'https://via.placeholder.com/800x400?text=Image+1',
        'https://via.placeholder.com/800x400?text=Image+2',
        'https://via.placeholder.com/800x400?text=Image+3'
    ];

    const imagesForGallery2: string[] = [
        'https://via.placeholder.com/800x400?text=Image+4',
        'https://via.placeholder.com/800x400?text=Image+5',
        'https://via.placeholder.com/800x400?text=Image+6'
    ];

    return (
        <div className='container mt-5'>
            <div className="row justify-content-center">
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm border rounded-3">
                        <div className="card-body">
                            <Gallery images={imagesForGallery1} id="imageGallery1" />
                            <h5 className="card-title mt-3">Apartment 2</h5>
                            <p className="card-text mb-4">
                                There are many variations of passages of Lorem Ipsum available. The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
                            </p>
                            <a href="#" className="btn btn-primary" style={{ backgroundColor: '#FF385C', border: 'none' }}>
                                Details
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm border rounded-3">
                        <div className="card-body">
                            <Gallery images={imagesForGallery2} id="imageGallery2" />
                            <h5 className="card-title mt-3">Apartment 1</h5>
                            <p className="card-text mb-4">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                            </p>
                            <a href="#" className="btn btn-primary" style={{ backgroundColor: '#FF385C', border: 'none' }}>
                                Details
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apartments;
