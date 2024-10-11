import React from "react";
import Calendar from "../Components/calendar/calender";
import ImageGallery from '../Components/cardGallery/slickGallery'

const ApartmentDetail: React.FC = () => {
    return (
        <div id="apartmentDetail" className="container mt-5">
            <ImageGallery/>
        
            <div className="row mt-4">
                <div className="col-md-8">
                    <div className="container mt-5" style={{position:'absolute', left:'15.5%'}}>
                    <h4 className="font-weight-bold">Apartment Description</h4>
                    <p  id="desc" className="text-muted w-100">
                    Discover the perfect harmony of elegance and comfort in this exquisite apartment situated in the heart of the city. Featuring modern amenities, a spacious layout, and chic decor, it’s ideal for both short getaways and extended stays."
                    </p>
                    </div>
                    <div className="col-md-8 mt-4"  style={{position:'absolute', top:'62.2%'}}>
                    <h4 className="font-weight-bold">Amenities</h4>
                    <ul className="list-unstyled row"style={{lineHeight:'27px'}}>
                        <li  id="desc"><i className="bi-check h5 me-3"></i>WiFi</li>
                        <li  id="desc"><i className="bi-check h5 me-3"></i>Air Conditioning</li>
                        <li  id="desc"><i className="bi-check h5 me-3"></i>Kitchen</li>
                        <li  id="desc"><i className="bi-check h5 me-3"></i>Free Parking</li>
                        <li  id="desc"><i className="bi-check h5 me-3"></i>Pool</li>
                        <li  id="desc"><i className="bi-check h5 me-3"></i>4 Bads</li>
                        <li  id="desc"><i className="bi-check h5 me-3"></i>Lovely view</li>
                    </ul>
                </div>
                </div>

                <div className="col-md-4" style={{width:'25%',position:'absolute', top:'65%', left:'59.6%'}}>
                    <div className="card mb-3 shadow-sm">
                        <div className="card-body text-center ">
                            <h5 className="card-title font-weight-bold">$120 per night</h5>
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentDetail;
