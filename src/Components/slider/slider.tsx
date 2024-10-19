import React from 'react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSlider: React.FC = () => {

    return (
        <div className="container-fluid p-0">
        <div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="src\assets\img\carousel-1.png" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px", marginBottom:'180px'}}>
                            <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                            <h1 className="display-3 text-white mb-md-4">Let's Discover The World Together</h1>
                        
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="src\assets\img\carousel-3.png" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px", marginBottom:'180px'}}>
                            <h4 className="text-white text-uppercase mb-md-3">Tours & Travel</h4>
                            <h1 className="display-3 text-white mb-md-4">Discover Amazing Places With Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" data-slide="prev">
                <div className="btn btn-dark" style={{width: "45px", height: "45px"}}>
                    <span className="carousel-control-prev-icon mb-n2"></span>
                </div>
            </a>
            <a className="carousel-control-next" data-slide="next">
                <div className="btn btn-dark" style={{width: "45px", height:"45px"}}>
                    <span className="carousel-control-next-icon mb-n2"></span>
                </div>
            </a>
        </div>
    </div>
    );
};

export default HeroSlider;
