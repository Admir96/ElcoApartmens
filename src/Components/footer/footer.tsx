import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function footer() {

          return (
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
              <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                  <span>Get connected with us on social networks:</span>
                </div>
        
                <div>
                  <a href='https://www.facebook.com/' className='me-4 text-reset'>
                    <MDBIcon fab icon="facebook-f" />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="twitter" />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="google" />
                  </a>
                  <a href='' className='me-4 text-reset'>
                    <MDBIcon fab icon="instagram" />
        
                  </a>
                </div>
              </section>
        
              <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                  <MDBRow className='mt-3'>
                    <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                         <h6 className='text-uppercase fw-bold mb-4'>
                       Google maps
                      </h6>
                      <div className="ratio ratio-4x3">   
          {<iframe style={{border:'groove #eee', borderRadius:' 5px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.690282594508!2d4.828766176691111!3d52.6836304721045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47cf5596c0aa01b7%3A0x160ae68fb74c6f99!2sElco%20auto!5e0!3m2!1sen!2sba!4v1723142301801!5m2!1sen!2sba" width="600" height="450" className="border:0;" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>}
          </div>
                    </MDBCol>
                    
        
                    <MDBCol md="2" lg="3" xl="3" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'> Company Name </h6>
                    <p>Ovo je firma pocela 1992 pocetkom rata i radi sve do danas slavimo cest pobjedu nas napredak i dobro raspolozenje radnika, ubise se od posla.
                    </p>
                   </MDBCol>

                   <MDBCol md="2" lg="3" xl="3" className='mx-auto mb-4'>
                      <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                      <p>
                        <MDBIcon icon="home" className="me-2" />
                        New York, NY 10012, US
                      </p>
                      <p>
                        <MDBIcon icon="envelope" className="me-3" />
                        info@example.com
                      </p>
                      <p>
                        <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                      </p>
                      <p>
                        <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                      </p>
                    </MDBCol>

                  </MDBRow>
                </MDBContainer>
              </section>
        
              <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                  MDBootstrap.com
                </a>
              </div>
            </MDBFooter>
          );
        }
export default footer;