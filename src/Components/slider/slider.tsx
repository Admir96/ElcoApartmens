import '../../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

 function Slider() {

      return (
        <div className="p-5" style={{ backgroundColor: '#eee'}} id="venue">
          <div className="container" style={{width:'70%'}}>
            <div className="row animate-in-down p-4 rounded" style={{ backgroundColor: '#fff' }}>
              <div className="p-5 col-md-6 align-center">
                <h1 className=''>Feel comfortable, and purchase items</h1>
           
                <p className="my-4">
                  It is a long established fact that a reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                  distribution of letters, as opposed to using 'Content here</p>
              </div>
              <div className="p-0 col-md-6" style={{ backgroundColor: '#fff' }}>
                <div id="carousel1" className="carousel slide">
                  <div className="carousel-inner">
                    <div className="carousel-item">
                      <img className="d-block img-fluid w-100 h-auto rounded" src="https://i.imgur.com/K7A78We.jpg" alt="first slide" />
                      <div className="carousel-caption">
                       
                        <h3>Simura Hotels</h3>
                        <p>Good architecture, services</p>
                      </div>
                    </div>
                    <div className="carousel-item active">
                      <img className="d-block img-fluid w-100 h-auto rounded" src="https://i.imgur.com/K7A78We.jpg" />
                      <div className="carousel-caption">
                        <h3>Hauzkhas Village Bar</h3>
                        <p>Enjoy our long drink</p>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid w-100 h-auto rounded" src="https://i.imgur.com/K7A78We.jpg" />
                      <div className="carousel-caption">
                        <h3>Cooking Hemorto</h3>
                        <p>Tastes it better</p>
                      </div>
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#carousel1" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                   
                  </a>
                  <a className="carousel-control-next" href="#carousel1" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
export default Slider