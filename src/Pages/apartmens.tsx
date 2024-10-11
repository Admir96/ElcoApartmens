import React from "react";
import Gallery from "../Components/cardGallery/cardGallery";


const Apartments: React.FC = () => {
    const imagesForGallery1: string[] = [
        "src\assets\img\pexels-jonathanborba-5570224.png",
        "src\assets\img\pexels-s3t-koncepts-1636465088-28853343.png",
        "src\assets\img\pexels-heyho-7535037.png",
        "src\assets\img\pexels-ekrulila-19050708.png"
    ];

    const imagesForGallery2: string[] = [
        "src\assets\img\pexels-heyho-5998120.png",
        "src\assets\img\pexels-heyho-6492398.png",
        "src\assets\img\pexels-heyho-6283972.png",
       "src\assets\img\link-hoang-UoqAR2pOxMo-unsplash.png"
    ];

    const handleOpen = () => {
        window.open('/ApartmentDetail', '_blank');
      };

    return (
        <div className="container">
        <div className="row mt-5">
        
        <div className="col p-0">
           <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6  ">
                        <div className="about-img position-relative overflow-hidden p-4 pe-0">
                        <Gallery images={imagesForGallery1} id="imageGallery1" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="mb-4">Discover Your Ideal Apartment Today</h2>
                        <p id="desc" className="mb-4">Explore a serene retreat designed for relaxation. Enjoy spacious living with modern touches and amenities that make your stay unforgettable.</p>
                        <p id="desc"><i className="bi-check h5 me-4"></i>Tempor erat elitr rebum at clita</p>
                        <p id="desc"><i className="bi-check h5 me-4"></i>Aliqu diam amet diam et eos</p>
                        <p id="desc"><i className="bi-check  h5 me-4"></i>Clita duo justo magna dolore erat amet</p>
                        <p id="desc"><i className="bi-check  h5 me-4"></i>Clita duo justo magna dolore erat amet</p>
                        <a  id='btn' className="btn btn-primary py-2 px-5 mt-4" onClick={handleOpen}>Details</a>
                    </div>
                </div>
            </div>
    

    
            <div className="col p-0">
           <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img position-relative overflow-hidden p-4 pe-0">
                        <Gallery images={imagesForGallery2} id="imageGallery2" />
                        </div>
                    </div>
                    <div className="col-lg-6  ">
                        <h2  className="mb-4">Your Dream Vocation Awaits You Here</h2>
                        <p  id="desc"className="mb-4">Unwind in a stylish haven that combines comfort and convenience. Experience a vibrant lifestyle with easy access to local attractions and essentials.</p>
                        <p  id="desc"><i className="bi-check h5 me-4"></i>Tempor erat elitr rebum at clita</p>
                        <p  id="desc"><i className="bi-check h5 me-4"></i>Aliqu diam amet diam et eos</p>
                        <p  id="desc"><i className="bi-check  h5 me-4"></i>Clita duo justo magna dolore erat amet</p>
                        <p id="desc"><i className="bi-check  h5 me-4"></i>Clita duo justo magna dolore erat amet</p>
                        <a  id='btn' className="btn btn-primary  py-2 px-5 mt-4" onClick={handleOpen}>Details</a>
                    </div>
                </div>
            </div>
        </div>
           
            </div>
            </div>
            </div>
    );
}

export default Apartments;
