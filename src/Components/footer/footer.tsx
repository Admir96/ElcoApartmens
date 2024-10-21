
function footer() {

          return (
            <div className="container-fluid text-white-50 footer mt-2" style={{backgroundColor:'#23272b'}}>
            <div className="container py-6">
                <div className="row g-5">
                    <div className="col pb-3">
                        <h3 className="carousel-h4 mb-4">Location</h3>
                        <p id='btnLink'  className="mb-2"><i className="bi-geo me-3"></i>Kralja Zvonimira, Hvar, Croatia</p>
                        <p id='btnLink'  className="mb-2"><i className="bi-phone me-3"></i>+012 345 67890</p>
                        <p id='btnLink'  className="mb-2"><i className="bi-envelope me-3"></i>info@example.com</p>
                        <p id='btnLink'  className="mb-2"><i className="bi-clock me-3"></i>8:00 am - 9:00 pm</p>
                    </div>
                    <div className="col-6">
                    <h3 className="carousel-h4 mb-4">Location</h3>
                        <p id='btnLink'  className="mb-2"><i className="bi-geo me-3"></i>Ivice Stipisica II, Hvar, Croatia</p>
                        <p id='btnLink'  className="mb-2"><i className="bi-phone me-3"></i>+012 345 67890</p>
                        <p id='btnLink'  className="mb-2"><i className="bi-envelope me-3"></i>info@example.com</p> 
                        <p id='btnLink'  className="mb-2"><i className="bi-clock me-3"></i>8:00 am - 9:00 pm</p>
                    </div>
        
                    <div className="col-3" >
                    <h3 className="carousel-h4">Quick Links</h3>
                        <a id='btnLink' className="btn btn-link text-white-50" href="">Home</a>
                        <a id='btnLink' className="btn btn-link text-white-50" href="">Apartmens</a>
                        <a id='btnLink' className="btn btn-link text-white-50" href="">Contact</a>

                        <div className="d-flex pt-2">
                            <a id='btnLink'  className="btn btn-outline-light btn-social" href=""><i className="bi-twitter"></i></a>
                            <a id='btnLink'  className="btn btn-outline-light btn-social" href=""><i className="bi-facebook"></i></a>
                            <a id='btnLink'  className="btn btn-outline-light btn-social" href=""><i className="bi-youtube"></i></a>
                            <a id='btnLink'  className="btn btn-outline-light btn-social" href=""><i className="bi-linkedin"></i></a>
                        </div>
                        </div>
                        </div>
            <div className="w-100">
                <div className="copyright">
                    <div className="row">
                        <div id='copy'className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a style={{textDecoration:'none'}} href="#">ElcoApartment</a>, All Right Reserved.
                        </div>
                  
                    </div>
                </div>
            </div>
        </div>
        </div>
          );
        }
export default footer;