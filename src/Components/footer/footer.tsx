
function footer() {

          return (
            <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
            <div className="container py-6">
                <div className="row g-5">
                    <div className="col">
                        <h4>Get In Touch</h4>
                        <p id='btnLink'  className="mb-2"><i className="bi-geo me-3"></i>123 Street, New York, USA</p>
                        <p id='btnLink'  className="mb-2"><i className="bi-phone me-3"></i>+012 345 67890</p>
                        <p id='btnLink'  className="mb-2"><i className="bi-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <a id='btnLink'  className="btn btn-outline-light btn-social" href=""><i className="bi-twitter"></i></a>
                            <a id='btnLink'  className="btn btn-outline-light btn-social" href=""><i className="bi-facebook"></i></a>
                            <a id='btnLink'  className="btn btn-outline-light btn-social" href=""><i className="bi-youtube"></i></a>
                            <a id='btnLink'  className="btn btn-outline-light btn-social" href=""><i className="bi-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="col-6">
                        <h4 >Quick Links</h4>
                        <a id='btnLink' className="btn btn-link text-white-50" href="">Home</a>
                        <a id='btnLink' className="btn btn-link text-white-50" href="">Apartmens</a>
                        <a id='btnLink' className="btn btn-link text-white-50" href="">Contact</a>
                    </div>
        
                    <div className="col" >
                        {<iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.690282594508!2d4.828766176691111!3d52.6836304721045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47cf5596c0aa01b7%3A0x160ae68fb74c6f99!2sElco%20auto!5e0!3m2!1sen!2sba!4v1723142301801!5m2!1sen!2sba" width="300" height="190" style={{borderRadius:'3px'}} className="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>}
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