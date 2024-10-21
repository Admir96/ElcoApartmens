import React, { useEffect, useState } from "react";
import Gallery from "../Components/cardGallery/cardGallery";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAirFreshener } from "@fortawesome/free-solid-svg-icons/faAirFreshener";
import { faWifi } from "@fortawesome/free-solid-svg-icons/faWifi";
import { faKitchenSet } from "@fortawesome/free-solid-svg-icons/faKitchenSet";
import { faParking } from "@fortawesome/free-solid-svg-icons/faParking";
import { faSwimmingPool } from "@fortawesome/free-solid-svg-icons/faSwimmingPool";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { useNavigate } from "react-router-dom"
import axios from "axios";

export interface BookingRequest {
    Id: number;
    CustomerName: string;
    CustomerEmail: string;
    PhoneNumber: string;
    StartDate: string; 
    EndDate: string;  
    ApartmentId: number;
}

export interface Apartment {
    Id: number;
    Price: number;
    Header: string;
    Description: string;
    Description2: string;
    Amenities: string[];
    BookingRequests: BookingRequest[]; 
    ImageUrls: string[];
}

const Apartments: React.FC = () => {

    const navigate = useNavigate();
   
    const [apartments, setApartments] = useState(Object);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const loadApartments = async () => {
            try {
                const data = await axios.get("http://localhost:5283/api/apartments");
            
                setApartments(data.data);
                console.log(apartments);

            } catch (err) {
            
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        loadApartments();
    },[]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const handleOpen = (id:number) => {
        navigate(`/ApartmentDetail/${id}`); 
      };

    return (
   
        <div className="row mt-5 mb-4" style={{width:'100%'}}>
            <h1 id='AH' style={{marginBottom:'90px'}}>Your Next Adventure Starts Here</h1>
        
        <div className="col p-0">
           <div className="container" style={{float:'left', width:'49%'}}>
                <div className="row align-items-top">
                    <div className="col-lg-6  ">
                        <div className="about-img position-relative p-4 pe-0">
                        <Gallery images={apartments[0].imageUrls} id="imageGallery1" />
                        </div>
                    </div>
                    <div id="descC" className="col-lg-6">
                        <h2 className="mb-4">{apartments[0].header}</h2>
                        <p id="desc" className="mb-4">{apartments[0].description}</p>
                        <p id="desc"><FontAwesomeIcon icon={faWifi} size="xs" className="me-2" />{apartments[0].amenities[0]}</p>
                        <p id="desc"><FontAwesomeIcon icon={faAirFreshener} size="xs" className="me-2" />{apartments[0].amenities[1]}</p>
                    <p id="desc"><FontAwesomeIcon icon={faKitchenSet} size="xs" className="me-2" />{apartments[0].amenities[2]}</p>
                        <p id="desc"><FontAwesomeIcon icon={faParking} size="xs" className="me-2" />{apartments[0].amenities[3]}</p>                     
                        <p id="desc"><FontAwesomeIcon icon={faSwimmingPool}  size="xs" className="me-2" />{apartments[0].amenities[4]}</p>
                        <p id="desc"><FontAwesomeIcon icon={faBed} size="xs" className="me-2" />{apartments[0].amenities[5]}</p>
                        <p id="desc"><FontAwesomeIcon icon={faEye} size="xs" className="me-2" />{apartments[0].amenities[6]}</p>
                      
                        <a  id='btn' className="btn btn-primary py-2 px-5 mt-4"  style={{position:'absolute', top:'199%', left:'38.7%'}} onClick= {() => handleOpen(apartments[0].id)}>Details</a>
                    </div>
                </div>
            </div>
      
    
            <div className="col p-0" >
           <div className="container" style={{float:'right', width:'49%',marginRight:'20px'}}>
                <div className="row align-items-top">
                    <div className="col-lg-6">
                        <div className="about-img position-relative p-4 pe-0">
                        <Gallery images={apartments[1].imageUrls} id="imageGallery2" />
                        </div>
                    </div>
                    <div id="descC" className="col-lg-6">
                        <h2 className="mb-4">{apartments[1].header}</h2>
                        <p id="desc" className="mb-4">{apartments[1].description}</p>
                        <p id="desc"><FontAwesomeIcon icon={faWifi} size="xs" className="me-2" />{apartments[1].amenities[0]}</p>
                        <p id="desc"><FontAwesomeIcon icon={faAirFreshener} size="xs" className="me-2" />{apartments[1].amenities[1]}</p>
                    <p id="desc"><FontAwesomeIcon icon={faKitchenSet} size="xs" className="me-2" />{apartments[1].amenities[2]}</p>
                        <p id="desc"><FontAwesomeIcon icon={faParking} size="xs" className="me-2" />{apartments[1].amenities[3]}</p>                     
                        <p id="desc"><FontAwesomeIcon icon={faSwimmingPool}  size="xs" className="me-2" />{apartments[1].amenities[4]}</p>
                        <p id="desc"><FontAwesomeIcon icon={faBed} size="xs" className="me-2" />{apartments[1].amenities[5]}</p>
                        <p id="desc"><FontAwesomeIcon icon={faEye} size="xs" className="me-2" />{apartments[1].amenities[6]}</p>
                      
                        <a  id='btn' className="btn btn-primary py-2 px-5 mt-4"  style={{position:'absolute', top:'199%', right:'5.5%'}} onClick= {() => handleOpen(apartments[1].id)}>Details</a>
                    </div>
                </div>
            </div>
        </div>
           
            </div>
            </div>

    );
}

export default Apartments;