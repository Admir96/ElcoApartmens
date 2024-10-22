import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormValues {
  name: string;
  email: string;
}

interface BookNowContactProps {
  onSubmit: (data: FormValues & { startDate: string; endDate: string }) => void;
  startDate: string;
  endDate: string;
}

const BookNowContact: React.FC<BookNowContactProps> = ({ onSubmit, startDate, endDate }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const OnSubmit: SubmitHandler<FormValues> = (data) => {
    const formData = { ...data, startDate, endDate };
    onSubmit(formData);
    toast.success('Form submitted successfully!');
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(OnSubmit)} className="needs-validation">
        <div className="container" style={{ marginTop: '50px', padding:'10px' }}>
          <h3 style={{ textAlign: 'center' }}>Please leave your contact info</h3>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input
              {...register('name', { required: 'Name is required!' })}
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
            />
            {errors.name && <p className="error-message">{errors.name.message}</p>}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input
              {...register('email', {
                required: 'Email is required!',
                pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'Invalid email!' }
              })}
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
          </div>
          <button type="submit" className="btn btn-primary">Send Request</button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default BookNowContact;
