import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import ApartmentDetail from './Pages/apartmentDetail';
import Home from './Pages/home';
import Apartments from './Pages/apartmens';
import Contact from './Pages/contact';
import BookNowContact from './Components/calendar/bookNowContact';


export default function App() { return (

<BrowserRouter>   
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Apartments" element={<Apartments/>}/>
    <Route path="/ApartmentDetail/:id" element={<ApartmentDetail/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="/BookNowContact" element = {<BookNowContact/>}/>
  </Routes> 
</BrowserRouter>

) }


