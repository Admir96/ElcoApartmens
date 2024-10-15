import React, { useState } from "react";
import Calendar from "../Components/calendar/calender";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirFreshener } from "@fortawesome/free-solid-svg-icons/faAirFreshener";
import { faWifi } from "@fortawesome/free-solid-svg-icons/faWifi";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons/faKitchenSet";
import { faParking } from "@fortawesome/free-solid-svg-icons/faParking";
import { faSwimmingPool } from "@fortawesome/free-solid-svg-icons/faSwimmingPool";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
const ApartmentDetail: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        "src/assets/img/pexels-fotoaibe-1571468.png",
        "src/assets/img/pexels-pixabay-271624.png",
        "src/assets/img/pexels-heyho-6492398.png",
        "src/assets/img/pexels-heyho-5998120.png",
        "src/assets/img/pexels-s3t-koncepts-1636465088-28853343.png",
        "src/assets/img/pexels-s3t-koncepts-1636465088-28853343.png",
        "src/assets/img/pexels-s3t-koncepts-1636465088-28853343.png",
        "src/assets/img/pexels-s3t-koncepts-1636465088-28853343.png",
        "src/assets/img/pexels-s3t-koncepts-1636465088-28853343.png",
        "src/assets/img/pexels-s3t-koncepts-1636465088-28853343.png",
      
    ];
    const openGallery = (index: number) => {
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const closeGallery = () => {
        setIsOpen(false);
    };

    const nextImage = (e:React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = (e:React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };


    return (
        <div id="apartmentDetail" className="container mt-5 vh-100 w-100">
         <div className="container mt-4">
                <div className="row mb-4">
                    <div className="col-md-5 mb-5 p-0" style={{ marginRight: '20px' }}>
                        <img
                            src={images[0]}
                            className="img-fluid img-thumbnail rounded shadow"
                            style={{ objectFit: 'cover', height: '405px' }}
                            alt="Large"
                            onClick={() => openGallery(0)}
                        />
                    </div>
                    <div className="col-md-2 d-flex flex-column">
                        {images.slice(1, 4).map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                className="img-fluid img-thumbnail mb-2 rounded shadow"
                                style={{ objectFit: 'cover', height: '130px' }}
                                alt={`Small ${index + 1}`}
                                onClick={() => openGallery(index + 1)}
                            />
                        ))}
                    </div>
                    <div className="col-md-2 d-flex flex-column">
                        {images.slice(3, 6).map((image, index) => (
                            <img
                                key={index + 3}
                                src={image}
                                className="img-fluid img-thumbnail mb-2 rounded shadow"
                                style={{ objectFit: 'cover', height: '130px' }}
                                alt={`Small ${index + 3}`}
                                onClick={() => openGallery(index + 3)}
                            />
                            
                        ))}
                    </div>
                    <div className="col-md-2 d-flex flex-column">
                        {images.slice(5, 8).map((image, index) => (
                            <img
                                key={index + 3}
                                src={image}
                                className="img-fluid img-thumbnail mb-2 rounded shadow"
                                style={{ objectFit: 'cover', height: '130px' }}
                                alt={`Small ${index + 3}`}
                                onClick={() => openGallery(index + 3)}
                            />
                            
                        ))}
                    </div>          
                </div>
            </div>

            {/* Modal for Image Gallery */}
            {isOpen && (
                <div className="gallery-modal" onClick={closeGallery} style={modalStyles}>
                    <div style={{ position: 'relative', textAlign: 'center' }}>
                        <img
                            src={images[currentImageIndex]}
                            alt={`Slide ${currentImageIndex + 1}`}
                            style={{
                                width: '80%',
                                height: 'auto',
                                borderRadius: '7px',
                                objectFit: 'cover',
                                display: 'block',
                                margin: '0 auto',
                            }}
                        />
                        <button onClick={prevImage} style={buttonStyles.left}>←</button>
                        <button onClick={nextImage} style={buttonStyles.right}>→</button>
                    </div>
                </div>
            )}

            {/* Other content like pricing, description, etc. */}
            <div className="col-md-3 rounded" style={{ float: 'right', backgroundColor: '#F0F8FF', position: 'absolute', left: '54%' }}>
                <div className="card mb-3">
                    <div className="card-body text-center">
                        <h5 className="card-title font-weight-bold mb-4">$120 per night</h5>
                        <p style={{ fontSize: '16px', color: '#263a4e', textAlign: 'center' }}>
                            Please reach out to us via phone or select an available time period. Click on "Request Booking," and we will get back to you shortly.
                        </p>
                        <Calendar />
                    </div>
                </div>
            </div>

   

            <div className="col-md-3 rounded"style={{float:'right', backgroundColor:'#F0F8FF', position:'absolute', left:'54%'}}>
                    <div className="card mb-3">
                        <div className="card-body text-center">
                            <h5 className="card-title font-weight-bold mb-4">$120 per night</h5>
                            <p style={{fontSize:'16px', color: '#263a4e', textAlign:'center'}}>Please reach out to us via phone or select an available time period. Click on "Request Booking," and we will get back to you shortly.</p>
                            <Calendar />
                        </div>
                    </div>
                </div>
            <div className="mt-0" style={{width:'75%', marginLeft:'0px'}}>
                <div className="col-md-8">
                    <h4 className="font-weight-bold mb-4">Apartment Description</h4>
                    <p id="desc" className="text-muted w-100">
                        Discover the perfect harmony of elegance and comfort in this exquisite apartment situated in the heart of the city. Featuring modern amenities, a spacious layout, and chic decor, it’s ideal for both short getaways and extended stays.
                        This apartment boasts breathtaking views and is conveniently located near popular attractions, making it a perfect choice for travelers looking to explore the city.
                        This apartment boasts breathtaking views and is conveniently located near popular attractions, making it a perfect choice for travelers looking to explore the city.
                        
              

                    </p>
          
                        
                    <p id="desc" className="text-muted w-100 mb-5">
                        This apartment boasts breathtaking views and is conveniently located near popular attractions, making it a perfect choice for travelers looking to explore the city.
                        This apartment boasts breathtaking views and is conveniently located near popular attractions,</p>
                                

                    <hr className="my-4" />

                    <div className="container w-100 h-auto mt-5">
                    <div className="col">
                    <h4 className="font-weight-bold mb-4">Amenities</h4>
                    <ul className="list-unstyled row" style={{ lineHeight: '25px' }}>
                        <li id="desc" className="mb-2"><FontAwesomeIcon icon={faWifi}  className="me-3" />WiFi</li>
                        <li id="desc" className="mb-2"><FontAwesomeIcon icon={faAirFreshener} className="me-3" />Air Conditioning</li>
                        <li id="desc" className="mb-2"><FontAwesomeIcon icon={faKitchenSet} className="me-3" />Kitchen</li>
                        <li id="desc" className="mb-2"><FontAwesomeIcon icon={faParking} className="me-3" />Free Parking</li>
                        <li id="desc" className="mb-2"><FontAwesomeIcon icon={faSwimmingPool} className="me-3" />Pool</li>
                        <li id="desc" className="mb-2"><FontAwesomeIcon icon={faBed} className="me-3" /> 4 Beds</li>
                        <li id="desc" className="mb-2"><FontAwesomeIcon icon={faEye} className="me-3" />Lovely view</li>
                    </ul>
                    </div>
                    <div className="col" style={{position:'absolute', top:'104%', left:'46%'}}>
                    <h4 className="font-weight-bold mb-4">Google Reviews</h4>
                    <div className="text-muted">
                        <p>"Amazing stay! The apartment was beautiful and well-equipped." - ⭐⭐⭐⭐⭐</p>
                        <p>"Perfect location, close to everything we wanted to see." - ⭐⭐⭐⭐⭐</p>
                        <p>"Very clean and comfortable. Highly recommend!" - ⭐⭐⭐⭐⭐</p>
                    </div>
                    </div>
              </div>
                </div>
            </div>

            <hr className="my-4" />

            {/* Meet Your Host Section */}
            <div className="row mt-5">
                <div className="col-md-3">
                    <div className="card"style={{height:'300px', width:'300px'}}>
                        <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmVtYWxlJTIwbW9kZWx8ZW58MHx8MHx8fDA%3D.png" className="img-fluid img-thumbnail" style={{height:'300px', width:'300px', objectFit:'cover'}} alt="Host" />
                        <div className="card-body">
                            <h5 className="card-title">John Doe</h5>
                            <p className="card-text" id="desc">Your friendly host, ready to help you with anything you need during your stay!</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <h4 className="font-weight-bold">Contact Information</h4>
                    <p>Email: john.doe@example.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                </div>
            </div>
        </div>
       
    );
};
const modalStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
};

const buttonStyles: { [key: string]: React.CSSProperties } = {
    left: {
        position: 'absolute',
        left: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(255, 255, 255, 0.7)',
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
        borderRadius: '5px',
    },
    right: {
        position: 'absolute',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(255, 255, 255, 0.7)',
        border: 'none',
        cursor: 'pointer',
        padding: '10px',
        borderRadius: '5px',
    },
};


export default ApartmentDetail;
