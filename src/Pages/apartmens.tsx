import React from "react";
import Gallery from "../Components/cardGallery/cardGallery";

const Apartments: React.FC = () => {

    const imagesForGallery1:string[] = [
        'https://via.placeholder.com/800x400?text=Image+1',
        'https://via.placeholder.com/800x400?text=Image+2',
        'https://via.placeholder.com/800x400?text=Image+3'
    ];

    const imagesForGallery2:string[] = [
        'https://via.placeholder.com/800x400?text=Image+4',
        'https://via.placeholder.com/800x400?text=Image+5',
        'https://via.placeholder.com/800x400?text=Image+6'
    ];

  return (

    <div className='container mt-5'>
      <div className=" justify-content-center mb-4" >
        <div className="col">
          <div className="card-body shadow-0 border rounded-3">
              <div className="card flex-row" style={{height:'154px'}}>
            
                <div className=" col card-img-left example-card-img-responsive"style={{height:'154px'}}>
                 
          
                      <Gallery  images = {imagesForGallery1} id = "imageGallery1"/>       
                 
                            
                </div>
                
                <div className="col-5 m-4"style={{height:'154px'}}>
                  <h5 className="card-title">Apartman 2</h5>
      
                  <p className="card-text mb-4 mb-md-0">
                    There are many variations of passages of Lorem Ipsum
                    availablehe majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even.
                  </p>
                </div>
                
                <div 
                  className="col p-4 m-4 border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">

                  </div>
                  <div className="d-flex flex-column" style={{height:'154px'}}>
                  <a href="#"  className="btn btn-primary text-center" style={{backgroundColor:'#FF385C', border:'none'}}>
                      Details
                    </a>
                  </div> 
               
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-3">
        <div className="col">
          <div className="card-body shadow-0 border rounded-3">
          <div className="card flex-row" style={{height:'154px'}}>
            
            <div className="col card-img-left example-card-img-responsive">
             
                <Gallery images={imagesForGallery2} id = "imageGallery2"/>       

                </div>
                <div className="col-5 m-4" style={{height:'154px'}}>
                  <h5 className="card-title">Apartman 1</h5>               
                  <p className="card-text mb-4 mb-md-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable.
                  </p>
                </div>
                <div
     
                  className="col p-4 m-4 border-sm-start-none border-start"
                >
                  <div className="d-flex flex-row align-items-center mb-1">
  
                  </div>
                  <div className="d-flex flex-column " style={{height:'154px'}}>
                    <a href="#"  className="btn btn-primary text-center" style={{backgroundColor:'#FF385C', border:'none'}}>
                      Details
                    </a>
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