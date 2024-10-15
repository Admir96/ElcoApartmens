import Apartments from '../../Pages/apartmens';
import Contact from '../../Pages/contact';
import Footer from '../footer/footer';
import '../../Pages/pages.css'
import Slider from '../slider/slider';




const  nav = () =>  {

    return(
        <>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-0 mt-3" id="mainNav">
        <div className="container px-4 px-lg-5">

        <div className="navbar-brand" style={{position:'absolute', left:'4%', paddingTop:'70px'}}>
        <img
          src="src\assets\img\logo.png"
          height="90"
          alt="ElcoApartment Logo"
          loading="lazy"
          color='#4682B4'
        /> 
        </div>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0 align-righ" style={{position:'absolute', right:'5.5%', paddingTop:'70px'}}>
          <li className="nav-item">
            <a className="nav-link" href="#Home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Apartments">Apartments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Contact">Contact</a>
          </li>
            </ul>
            </div>
            </div>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex={0}>
    
     <section  className=' pb-4 mb-4'id="Home"><Slider/></section>

        <section className='p-4 mb-4' style={{marginTop:'50px'}}id="Apartments"><Apartments/></section>

        
        <section className='p-4 mb-4' style={{marginTop:'150px'}} id="Contact"><Contact/></section>      
       
        <section className='mt-4'id='Footer' style={{paddingTop:'45px',backgroundColor:'#e2e6ea'}}>
      <Footer/>
     </section>
      </div>   
      </>
    );
      
};

export default nav