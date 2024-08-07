import Contact from './contact'
import Apartments from './apartmens'
import About from './about';
import Slider from '../Components/slider/slider';

function home() {

    return( 
    <body>   
      <Slider></Slider>
      <About></About>
    <Apartments></Apartments>
    <Contact></Contact>
    </body>
    );
      
};

export default home