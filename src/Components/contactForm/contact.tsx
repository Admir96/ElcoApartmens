import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import 'leaflet/dist/leaflet.css';
import { LatLngExpression } from 'leaflet';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormValues {
    name:string,
    email:string,
    message:string
}
const MapWithForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormValues>();

    const position: LatLngExpression = [51.505, -0.09]; 


    const OnSubmit: SubmitHandler<FormValues> = (data) => {
        toast.success('Form submitted successfully!');
        console.log(data);
      };
    return (
        <div className="container-fluid mt-5">
            <div className="row">
   
                <div className="col-md-6">
                    <MapContainer center={position} zoom={13} scrollWheelZoom={false} >
                        <TileLayer 
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        />
                        <Marker position={position}>
                            <Popup>
    <h6>Contact Us</h6>
    <p>Email: info@example.com</p>
    <p>Phone: (123) 456-7890</p>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

         
                <div className="col-md-6 border-top"
                  >
                    <div className="p-4"style={{marginRight:'20px'}}>
                    <h2 style={{textAlign:'center'}} >Contact Us</h2>
                    <p className="mb-5"style={{textAlign:'center', paddingBottom:'5px',paddingRight:'3px'}}>We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Our team is here to assist you and ensure you have the best experience possible.</p>                
                        <form onSubmit={handleSubmit(OnSubmit)}>
                            <div className="mb-5">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input {...register('name', {required:'name is required !'})} type="text" className="form-control" id="name" placeholder="Enter your name"/>
                                {errors.name && <p className="error-message">{errors.name.message}</p>}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input {...register('email',{ required:'email is required !', pattern:{value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message:'invalid email !'}})} type="email" className="form-control" id="email" placeholder="Enter your email"/>
                                {errors.email && <p className="error-message">{errors.email.message}</p>}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="message" className="form-label " >Message</label>
                                <textarea {...register('message',{required:'message is required !'})} className="form-control " id="message" rows={10} placeholder="Your message" required></textarea>
                                {errors.message && <p className="error-message">{errors.message.message}</p>}
                            </div>
                            <button id='btn' type="submit" className="btn btn-primary py-3, px-5 w-100">Submit</button>
                        </form>
                        
        <ToastContainer/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapWithForm;
