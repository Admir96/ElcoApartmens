import Apartments from '../../Pages/apartmens';
import Contact from '../../Pages/contact';
import Home from '../../Pages/home';
import Footer from '../footer/footer';
import ApartmentDetail from '../../Pages/apartmentDetail';
import '../../Pages/pages.css'

const  nav = () =>  {

    return(
        <>
    <nav className="navbar navbar-expand-lg navbar-light fixed-top py-4" id="mainNav">
        <div className="container px-4 px-lg-5">
            <a className="navbar-brand p-0" style={{position:'absolute', left:'16.7%', color:'#2222'}} href="#page-top">Start Bootstrap</a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto my-2 my-lg-0 align-righ" style={{position:'absolute', right:'16.9%'}}>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading3">Apartments</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading4">Contact</a>
          </li>
            </ul>
            </div>
            </div>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className="scrollspy-example" tabIndex={0}>
    
     <section id="scrollspyHeading1"><Home/></section>

        <section id="scrollspyHeading3"><Apartments/></section>

        <section id="scrollspyHeading4"><Contact/></section>  
        
        <section id="scrollspyHeading4"><ApartmentDetail/></section>  
       
        <div style={{paddingTop:'45px',backgroundColor:'#eee'}}>
      <Footer/>
     </div>
      </div>   
      </>
    );
      
};

export default nav