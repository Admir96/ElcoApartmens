import Apartments from '../../Pages/apartmens';
import Contact from '../../Pages/contact';
import Footer from '../footer/footer';
import '../../Pages/pages.css'
import HeroSlider from '../slider/slider';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';



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
        <Navbar expand="lg" bg="light" variant="light" className="shadow-lg py-3" 
                style={{ borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', borderTop: 'none' }}>
            <Navbar.Toggle aria-controls="navbarCollapse" />
            <Navbar.Collapse id="navbarCollapse" className="justify-content-center px-3">
                <Nav className="ml-auto py-4">
                    <Nav.Link className="active px-2" onClick={() => scrollToSection("Home")}>Home</Nav.Link>
                    <NavDropdown title="Apartments" id="navbar-dropdown" className="px-4">
                        <NavDropdown.Item onClick={() => scrollToSection("Apartment1")}>Apartment 1</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => scrollToSection("Apartment2")}>Apartment 2</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={() => scrollToSection("Contact")}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
    </div>
    </div>
      <div className="scrollspy-example" tabIndex={0}>
                <section className='pb-4 mb-4' id="Home">
                    <HeroSlider />
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