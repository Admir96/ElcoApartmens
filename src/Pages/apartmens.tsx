import React from "react";
import Gallery from "../Components/cardGallery/cardGallery";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirFreshener } from "@fortawesome/free-solid-svg-icons/faAirFreshener";
import { faWifi } from "@fortawesome/free-solid-svg-icons/faWifi";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons/faKitchenSet";
import { faParking } from "@fortawesome/free-solid-svg-icons/faParking";
import { faSwimmingPool } from "@fortawesome/free-solid-svg-icons/faSwimmingPool";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";


const Apartments: React.FC = () => {
    const imagesForGallery1: string[] = [
        "src/assets/img/pexels-jonathanborba-5570224.png",
        "src/assets/img/pexels-s3t-koncepts-1636465088-28853343.png",
        "src/assets/img/pexels-heyho-7535037.png",
        "src/assets/img/pexels-ekrulila-19050708.png"
    ];

    const imagesForGallery2: string[] = [
        "src/assets/img/pexels-heyho-5998120.png",
        "src/assets/img/pexels-heyho-6492398.png",
        "src/assets/img/pexels-heyho-6283972.png",
       "src/assets/img/link-hoang-UoqAR2pOxMo-unsplash.png"
    ];

    const handleOpen = () => {
        window.open('/ApartmentDetail', '_blank');
      };

    return (
   
        <div className="row mt-5" style={{width:'100%'}}>
            <h1 id='AH' style={{marginBottom:'90px'}}>Your Next Adventure Starts Here</h1>
        
        <div className="col p-0">
           <div className="container" style={{float:'left', width:'49%'}}>
                <div className="row align-items-top">
                    <div className="col-lg-6  ">
                        <div className="about-img position-relative p-4 pe-0">
                        <Gallery images={imagesForGallery1} id="imageGallery1" />
                        </div>
                    </div>
                    <div id="descC" className="col-lg-6">
                        <h2 className="mb-4">Discover Your Apartment</h2>
                        <p id="desc" className="mb-4">Explore a serene retreat designed for relaxation. Enjoy spacious living with modern touches and amenities that make your stay unforgettable.</p>
                        <p id="desc"><FontAwesomeIcon icon={faWifi} size="xs" className="me-2" />WiFi</p>
                        <p id="desc"><FontAwesomeIcon icon={faAirFreshener} size="xs" className="me-2" />Air Conditioning</p>
                        <p id="desc"><FontAwesomeIcon icon={faKitchenSet} size="xs" className="me-2" />Kitchen</p>
                        <p id="desc"><FontAwesomeIcon icon={faParking} size="xs" className="me-2" />Free Parking</p>                     
                        <p id="desc"><FontAwesomeIcon icon={faSwimmingPool}  size="xs" className="me-2" />Pool</p>
                        <p id="desc"><FontAwesomeIcon icon={faBed} size="xs" className="me-2" />4 Beds</p>
                        <p id="desc"><FontAwesomeIcon icon={faEye} size="xs" className="me-2" />Lovely view</p>
                      
                        <a  id='btn' className="btn btn-primary py-2 px-5 mt-4"  style={{position:'absolute', top:'166%', left:'38.7%'}} onClick={handleOpen}>Details</a>
                    </div>
                </div>
            </div>
      
    
            <div className="col p-0" >
           <div className="container" style={{float:'right', width:'49%',marginRight:'20px'}}>
                <div className="row align-items-top">
                    <div className="col-lg-6">
                        <div className="about-img position-relative p-4 pe-0">
                        <Gallery images={imagesForGallery2}   id="imageGallery2" />
                        </div>
                    </div>
                    <div id="descC" className="col-lg-6">
                        <h2 className="mb-4">Discover Your Apartment</h2>
                        <p id="desc" className="mb-4">Explore a serene retreat designed for relaxation. Enjoy spacious living with modern touches and amenities that make your stay unforgettable.</p>
                        <p id="desc"><FontAwesomeIcon icon={faWifi} size="xs" className="me-2" />WiFi</p>
                        <p id="desc"><FontAwesomeIcon icon={faAirFreshener} size="xs" className="me-2" />Air Conditioning</p>
                        <p id="desc"><FontAwesomeIcon icon={faKitchenSet} size="xs" className="me-2" />Kitchen</p>
                        <p id="desc"><FontAwesomeIcon icon={faParking} size="xs" className="me-2" />Free Parking</p>                     
                        <p id="desc"><FontAwesomeIcon icon={faSwimmingPool}  size="xs" className="me-2" />Pool</p>
                        <p id="desc"><FontAwesomeIcon icon={faBed} size="xs" className="me-2" />4 Beds</p>
                        <p id="desc"><FontAwesomeIcon icon={faEye} size="xs" className="me-2" />Lovely view</p>
                      
                        <a  id='btn' className="btn btn-primary py-2 px-5 mt-4"  style={{position:'absolute', top:'166%', right:'5.5%'}} onClick={handleOpen}>Details</a>
                    </div>
                </div>
            </div>
        </div>
           
            </div>
            </div>

    );
}

export default Apartments;
