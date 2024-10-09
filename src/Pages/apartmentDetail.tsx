import React from "react";
import Calender from "../Components/calendar/calender";

const ApartmentDetail: React.FC = () => {
    return (
        <div className="container mt-5">
            <div className="mt-4">
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <img src="https://via.placeholder.com/600x300?text=Large+Image" className="img-fluid rounded shadow" alt="Large" />
                    </div>
                    <div className="col-md-3 d-flex flex-column">
                        <img src="https://via.placeholder.com/300x150?text=Small+Image+1" className="img-fluid mb-2 rounded shadow" alt="Small 1" />
                        <img src="https://via.placeholder.com/300x150?text=Small+Image+2" className="img-fluid rounded shadow" alt="Small 2" />
                    </div>
                    <div className="col-md-3 d-flex flex-column">
                        <img src="https://via.placeholder.com/300x150?text=Small+Image+1" className="img-fluid mb-2 rounded shadow" alt="Small 3" />
                        <img src="https://via.placeholder.com/300x150?text=Small+Image+2" className="img-fluid rounded shadow" alt="Small 4" />
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-md-8">
                    <h4>Description</h4>
                    <p style={{color:'#333'}}>This beautiful apartment is located in the heart of the city. It features modern amenities, a spacious living area, and is perfect for travelers looking for a comfortable stay.</p>

                    <h4>Amenities</h4>
                    <ul>
                        <li  style={{color:'#333'}}>WiFi</li>
                        <li style={{color:'#333'}}>Air Conditioning</li>
                        <li style={{color:'#333'}}>Kitchen</li>
                        <li style={{color:'#333'}}>Free Parking</li>
                        <li style={{color:'#333'}}>Pool</li>
                    </ul>
                </div>

                <div className="col-md-4">
                    <div className="card mb-3 shadow-sm">
                        <div className="card-body text-center">
                            <h5 className="card-title">$120 per night</h5>
                            <Calender />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentDetail;
