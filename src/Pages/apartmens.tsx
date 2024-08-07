function Apartments() {
  return (
    <section className="page-section bg-dark text-white">
    <h2 className="text-center">Apartments</h2>
    <hr></hr>
 <div className="row row-cols-1 row-cols-md-2 m-2 g-4 ">
  <div className="col">
    <div className="card border-0">
      <img src ="src/assets/img/ap1.jpg" height="200px"className="card-img-top border border-1" alt="Aprartman1"></img>
      <div className="card-body bg-dark text-white">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card border-0">
      <img src="src/assets/img/ap1.jpg" height="200px" className="card-img-top border border-1" alt="Apartman2"></img>
      <div className="card-body bg-dark text-white">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
     <hr></hr>
</section>

 
  );
}

export default Apartments;