import React from "react";
import Slider from "react-slick";

const ImageGallery: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
 
        nextArrow: <button className="slick-arrow">Next</button>,
        prevArrow: <button className="slick-arrow">Prev</button>,
    };

    return (
        <div className="mt-4" >
            <Slider {...settings}>
                <div>
                    <img
                        src="src\assets\img\sonnie-hiles-DhFHtkECn7Q-unsplash.png"
                        className="img-fluid rounded m-1"style={{objectFit:'cover', height:'300px', width:'350px'}}
                        alt="Apartment 1"
                    />
                </div>
                <div>
                    <img
                        src="src\assets\img\pexels-zinep-28808297.png"
                        className="img-fluid rounded m-1"style={{objectFit:'cover', height:'300px', width:'350px'}}
                        alt="Apartment 2"
                    />
                </div>
                <div>
                    <img
                        src="src\assets\img\pexels-vince-2876787.png"
                        className="img-fluid rounded m-1"style={{objectFit:'cover', height:'300px', width:'350px'}}
                        alt="Apartment 3"
                    />
                </div>
                <div>
                    <img
                        src="src\assets\img\pexels-s3t-koncepts-1636465088-28853343.png"
                        className="img-fluid rounded m-1"style={{objectFit:'cover', height:'300px', width:'350px'}}
                        alt="Apartment 3"
                    />
                </div>
                <div>
                    <img
                        src="src\assets\img\bath.png"
                        className="img-fluid rounded m-1"style={{objectFit:'cover', height:'300px', width:'350px'}}
                        alt="Apartment 3"
                    />
                </div>
                <div>
                    <img
                        src="src\assets\img\charlesdeluvio-e1Q-ZCzDuUQ-unsplash.png"
                        className="img-fluid rounded m-1"style={{objectFit:'cover', height:'300px', width:'350px'}}
                        alt="Apartment 3"
                    />
                </div>
                <div>
                    <img
                        src="src\assets\img\pexels-pixabay-271624.png"
                        className="img-fluid rounded m-1"style={{objectFit:'cover', height:'300px', width:'350px'}}
                        alt="Apartment 3"
                    />
                </div>
                <div>
                    <img
                        src="src\assets\img\pexels-lina-3639542.png"
                        className="img-fluid rounded m-1"style={{objectFit:'cover', maxHeight:'300px', width:'350px'}}
                        alt="Apartment 3"
                    />
                </div>
       
            </Slider>
        </div>
    );
};

export default ImageGallery;
