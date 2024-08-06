import Contact from './contact'
import Apartments from './apartmens'
import './pages.css'
import About from './about';
import Slider from '../Components/slider/slider';

const home =() =>{

    return(
    
         <body id="page-top">
      <Slider></Slider>
  <About></About>
    <Apartments></Apartments>
    <Contact></Contact>
    </body>
    );
      
};

export default home