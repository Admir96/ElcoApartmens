import React, { useState, FormEvent } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'danger'>('success');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setAlertMessage('All fields are required.');
      setAlertType('danger');
      return;
    }

    // Simulate form submission
    console.log('Form submitted:', formData);

    setAlertMessage('Your message was sent, thank you!');
    setAlertType('success');

    // Clear form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <Container className="b-grid">
      <Row className="justify-content-center">
        <Col sm={5} md={6}>
          <div className="contact-wrap w-100 p-md-5 p-4">
            <h3 className="mb-4">Contact Us</h3>
            {alertMessage && <Alert variant={alertType}>{alertMessage}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Message"
                      rows={3}
                    />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Button variant="primary" type="submit" style={{backgroundColor:'#609DD0'}}>
                    Send Message
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
        <Col sm = {5}  md={6}  className="d-flex align-items-stretch">
          <div id="map" className="w-100 p-4 m-0">          
          {<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.690282594508!2d4.828766176691111!3d52.6836304721045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47cf5596c0aa01b7%3A0x160ae68fb74c6f99!2sElco%20auto!5e0!3m2!1sen!2sba!4v1723142301801!5m2!1sen!2sba" width="600" height="450" className="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>}
          </div>
        </Col>
      </Row>
      <Row style={{marginTop:'70px'}}>
        <Col md={3}>
          <div className="dbox w-50 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" style={{color:' #13b9d3',cursor:'pointer'}} className="bi bi-pin-angle" viewBox="0 0 16 16">
  <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146m.122 2.112v-.002zm0-.002v.002a.5.5 0 0 1-.122.51L6.293 6.878a.5.5 0 0 1-.511.12H5.78l-.014-.004a5 5 0 0 0-.288-.076 5 5 0 0 0-.765-.116c-.422-.028-.836.008-1.175.15l5.51 5.509c.141-.34.177-.753.149-1.175a5 5 0 0 0-.192-1.054l-.004-.013v-.001a.5.5 0 0 1 .12-.512l3.536-3.535a.5.5 0 0 1 .532-.115l.096.022c.087.017.208.034.344.034q.172.002.343-.04L9.927 2.028q-.042.172-.04.343a1.8 1.8 0 0 0 .062.46z"/>
</svg>
            </div>
            <div className="text">
              <h6 style={{color:'#262829', padding:'10px'}} > 198 West 21th Street, Suite 721 New York NY 10016</h6>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="dbox w-50 text-center">
            <div className="icon d-flex align-items-center justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"  style={{color:' #13b9d3',cursor:'pointer'}} fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg>

            </div>
            <div className="text">
              <a href="tel://1234567920" style={{textDecoration:'none',color:'#262829', padding:'10px'}}><h6>+ 1235 2355 98</h6></a>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="dbox w-800 text-center"style={{paddingLeft:'100px'}}>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"  style={{color:' #13b9d3',cursor:'pointer' }} fill="currentColor" className="bi bi-mailbox-flag" viewBox="0 0 16 16">
  <path d="M10.5 8.5V3.707l.854-.853A.5.5 0 0 0 11.5 2.5v-2A.5.5 0 0 0 11 0H9.5a.5.5 0 0 0-.5.5v8zM5 7c0 .334-.164.264-.415.157C4.42 7.087 4.218 7 4 7s-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0"/>
  <path d="M4 3h4v1H6.646A4 4 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3V3a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3"/>
</svg>
            <div className="text">
              <a href="mailto:info@yoursite.com" style={{textDecoration:'none', color:'#262829' ,padding:'10px'}}><h6>info@yoursite.com</h6></a>
            </div>
          </div>
        </Col>
        <Col md={3}>
          <div className="dbox text-center"style={{paddingLeft:'200px'}}>
            <div className="icon align-items-center w-100  justify-content-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"  style={{color:' #13b9d3',cursor:'pointer'}} fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z"/>
</svg>
            </div>
            <div className="text">
            <a href="#" style={{textDecoration:'none',color:'#262829', padding:'20px'}}><h6>ElcoApartments</h6></a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
