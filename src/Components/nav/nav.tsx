import Apartments from '../../Pages/apartmens';
import Contact from '../../Pages/contact';
import Footer from '../footer/footer';
import '../../Pages/pages.css'
import Slider from '../slider/slider';





const  nav = () =>  {

  const scrollToSection = (sectionId:string) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

    return(
        <>
        <div className="container-fluid py-0 m-0"style={{height:'110px'}}>
         <div className="container-fluid pt-2 d-none d-lg-block">
        <div className="container">
            <div className="row">
                <div className="col-lg-6  text-lg-left mb-2 mb-lg-0">
                    <div className="d-inline-flex "  style={{position:'relative', left:'1%'}}>
                    <div className="navbar-brand">
        <img
          src="src\assets\img\logo.png"
          height="80"
          alt="ElcoApartment Logo"
          loading="lazy"
          color='#4682B4'
        /> </div>
                    </div>
                </div>
                <div className="col-lg-6 text-lg-right"style={{position:'absolute', left:'75%',paddingLeft:'5px',top:'3.5%'}}>
                    <div className="d-inline-flex align-items-center">
               
                            <a id='btnLink'  className="btn btn-outline-light btn-social" href=""><i className="bi-twitter"></i></a>
                            <a id='btnLink'  className="btn btn-outline-light btn-social" href=""><i className="bi-facebook"></i></a>
                            <a id='btnLink'  className="btn btn-outline-light btn-social" href=""><i className="bi-youtube"></i></a>
                            <a id='btnLink'  className="btn btn-outline-light btn-social" href=""><i className="bi-linkedin"></i></a>
                  
                    </div>
                </div>
            </div>
        </div>
    </div>

     
       <div className="container-fluid position-relative nav-bar p-0">
        <div className="container-lg p-0 px-lg-3"style={{zIndex: "9",position:'relative', bottom:'-3px'}}>
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg py-3 py-lg-0 pl-3 pl-lg-5"  style={{borderBottomLeftRadius:'20px',borderBottomRightRadius:'20px',borderTop:'none'}}>
     
                <div className="collapse navbar-collapse justify-content-center px-3" id="navbarCollapse">
                    <div className="navbar-nav ml-auto py-4">
                        <a  className="nav-item nav-link active px-2" onClick={() => scrollToSection("Home")}>Home</a>
                        <div className="nav-item dropdown">
                            <a  className="nav-link dropdown-toggle px-4" data-toggle="dropdown">Apartments</a>
                            <div className="dropdown-menu border-0 rounded-0 m-0">
                                <a  className="dropdown-item">Apartment 1</a>
                                <a  className="dropdown-item">Apartment 2</a>
                            </div>
                        </div>
                        <a  className="nav-item nav-link"  onClick={() => scrollToSection("Contact")}>Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    </div>
    </div>
      <div className="scrollspy-example" tabIndex={0}>
                <section className='pb-4 mb-4' id="Home">
                    <Slider />
                </section>
                <section className='p-4 mb-4' style={{ marginTop: '50px' }} id="Apartments">
                    <Apartments />
                </section>
                <section className='p-4 mb-4' style={{ marginTop: '150px' }} id="Contact">
                    <Contact />
                </section>
                <section className='mt-4' id='Footer' style={{ paddingTop: '45px', backgroundColor: '#e2e6ea' }}>
                    <Footer />
                </section>       
      </div>   
      </>
    );
      
};

export default nav