import '../index.css'
function Apartments() {
  return (
    <section className="b-grid text-gray" style={{backgroundColor:'#e6f3e4',opacity:'90%'}}>
    <h2 className="text-center pt-3">Apartments</h2>
  
 <div className="row row-cols-1 row-cols-md-2 m-2 g-4 ">
  <div className="col">
    <div className="card border-0">
      <img src ="src/assets/img/ap1.jpg" height="250px"className="rounded-2" style={{border:'2px solid #87b2ae'}} alt="Aprartman1"></img>
      <div className="card-body text-gray" style={{backgroundColor:'#e6f3e4'}}>
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card border-0">
      <img src="src/assets/img/ap1.jpg" height="250px" className="rounded-2" style={{border:'2px solid #87b2ae'}} alt="Apartman2"></img>
      <div className="card-body text-gray" style={{backgroundColor:'#e6f3e4'}}>
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