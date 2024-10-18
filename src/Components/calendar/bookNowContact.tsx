import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const bookNowContact = () => {
  
  interface FormValues {
    name:string,
    email:string,
    phone:string
}
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');
const [startDate, setStartDate] =useState('');
const [endDate, setendDate] =useState('');



const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<FormValues>();

const OnSubmit: SubmitHandler<FormValues> = (data) => {

  toast.success('Form submitted successfully!');
  console.log(data);

};
    return(
      <>      <form onSubmit={handleSubmit(OnSubmit)}
      
      className="needs-validation"    
    style={{width:'750px',height:'700px'}}
    >
        <div className="container" style={{marginLeft:'10%',marginTop:'60px'}}>    
            <h2 style={{textAlign:'center'}}>Please fill out the form and we will reach out in short time</h2> 
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Your Name</label>
        <input {...register('name', {required:'name is required !'})}
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
           autoComplete="off"
        />
          {errors.name && <p className="error-message">{errors.name.message}</p>}
   
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Your Phone</label>
        <input {...register('phone', {required:'phone number is required !', pattern:{value:/^\d{10}/, message:'Invalid phone number !'}})}
          type="tel"
          className="form-control"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          maxLength={10}
        />
          {errors.phone && <p className="error-message">{errors.phone.message}</p>}
 
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Your Email</label>
        <input {...register('email',{ required:'email is required !', pattern:{value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message:'invalid email !'}})}
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {errors.email && <p className="error-message">{errors.email.message}</p>}
      <button type="submit" className="btn btn-primary">Send Request</button>
      </div>
         </form>
                            
        <ToastContainer/></>

    )
}

export default bookNowContact