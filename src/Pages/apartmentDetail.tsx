import React from "react";
import Calender from "../Components/calendar/calender";
const apartmentDetail:React.FC =() => {


    return (
            <div className="container mt-5">
                <h1 className="text-center mb-4">Beautiful Apartment in City Center</h1>
        
            
                <div className="container ">
                <div className="container mt-4">
        <h1 className="text-center mb-4">Image Gallery</h1>
        <div className="row ">
            <div className="col-md-6">
                <img src="https://via.placeholder.com/600x300?text=Large+Image" className="img-fluid gallery-img-large rounded-start" alt="Large Image"/>
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-between">
                <div>
                    <img src="https://via.placeholder.com/300x150?text=Small+Image+1" className="img-fluid gallery-img-small" alt="Small Image 1"/>
                </div>
                <div className="mt-2">
                    <img src="https://via.placeholder.com/300x150?text=Small+Image+2" className="img-fluid gallery-img-small" alt="Small Image 2"/>
                </div>
            </div>
            <div className="col-md-3 d-flex flex-column justify-content-between">
                <div>
                    <img src="https://via.placeholder.com/300x150?text=Small+Image+1" className="img-fluid gallery-img-small rounded-top" alt="Small Image 1"/>
                </div>
                <div className="mt-2">
                    <img src="https://via.placeholder.com/300x150?text=Small+Image+2" className="img-fluid gallery-img-small  rounded-bottom" alt="Small Image 2"/>
                </div>
            </div>
        </div>
    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#propertyGallery" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#propertyGallery" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
        
                <div className="row mt-4">
                    <div className="col-md-8">
                        <h4>Description</h4>
                        <p>This beautiful apartment is located in the heart of the city. It features modern amenities, a spacious living area, and is perfect for travelers looking for a comfortable stay.</p>
        
                        <h4>Amenities</h4>
                        <ul>
                            <li>WiFi</li>
                            <li>Air Conditioning</li>
                            <li>Kitchen</li>
                            <li>Free Parking</li>
                            <li>Pool</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Booking Details</h4>
                        <div className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">$120 per night</h5>
                                <Calender/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
};
export default apartmentDetail;