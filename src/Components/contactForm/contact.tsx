// src/components/ContactForm.tsx

import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setResponseMessage('Your message has been sent!');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setResponseMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
<div className="container p-4">
<div className="row justify-content-center">
<div className="col-md-12">
<div className="wrapper">
<div className="row no-gutters mb-5">
<div className="col-md-7">
<div className="contact-wrap w-100 p-md-5 p-4">
<h3 className="mb-4">Contact Us</h3>
<div id="form-message-warning" className="mb-4"></div>
<div id="form-message-success" className="mb-4">
Your message was sent, thank you!
</div>
<form method="POST" id="contactForm" name="contactForm" className="contactForm">
<div className="row">
<div className="col-md-6">
<div className="form-group">
<label className="label" htmlFor="name">Full Name</label>
<input type="text" className="form-control" name="name" id="name" placeholder="Name"></input>
</div>
</div>
<div className="col-md-6">
<div className="form-group">
<label className="label" htmlFor="email">Email Address</label>
<input type="email" className="form-control" name="email" id="email" placeholder="Email"></input>
</div>
</div>
<div className="col-md-12">
<div className="form-group">
<label className="label" htmlFor="subject">Subject</label>
<input type="text" className="form-control" name="subject" id="subject" placeholder="Subject"></input>
</div>
</div>
<div className="col-md-12">
<div className="form-group">
<label className="label" htmlFor="#">Message</label>
<textarea name="message" className="form-control" id="message" placeholder="Message"></textarea>
</div>
</div>
<div className="col-md-12">
<div className="form-group">
<input type="submit" value="Send Message" className="btn btn-primary"></input>
<div className="submitting"></div>
</div>
</div>
</div>
</form>
</div>
</div>
<div className="col-md-5 d-flex align-items-stretch">
<div id="map" className="position: relative; overflow: hidden;"><div className="height: 100%; width: 100%; position: absolute; top: 0px; left: 0px; background-color: rgb(229, 227, 223);"><div className="gm-err-container"><div className="gm-err-content"><div className="gm-err-icon"><img src="https://maps.gstatic.com/mapfiles/api-3/images/icon_error.png" alt="" draggable="false" className="user-select: none;"></img></div><div className="gm-err-title">Oops! Something went wrong.</div><div className="gm-err-message">This page didn't load Google Maps correctly. See the JavaScript console for technical details.</div></div></div></div></div>
</div>
</div>
<div className="row">
<div className="col-md-3">
<div className="dbox w-100 text-center">
<div className="icon d-flex align-items-center justify-content-center">
<span className="fa fa-map-marker"></span>
</div>
<div className="text">
<p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY 10016</p>
</div>
</div>
</div>
<div className="col-md-3">
<div className="dbox w-100 text-center">
<div className="icon d-flex align-items-center justify-content-center">
<span className="fa fa-phone"></span>
</div>
<div className="text">
<p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
</div>
</div>
</div>
<div className="col-md-3">
<div className="dbox w-100 text-center">
<div className="icon d-flex align-items-center justify-content-center">
<span className="fa fa-paper-plane"></span>
</div>
<div className="text">
<p><span>Email:</span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
</div>
</div>
</div>
<div className="col-md-3">
<div className="dbox w-100 text-center">
<div className="icon d-flex align-items-center justify-content-center">
<span className="fa fa-globe"></span>
</div>
<div className="text">
<p><span>Website</span> <a href="#">yoursite.com</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

  );
};

export default ContactForm;

