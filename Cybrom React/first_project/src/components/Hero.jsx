import '../App.css';

function Hero(){
  return(
    <>
    <div className="main-container">
      <div className="left-container">
        <p className="hey-text">HEY THERE!</p>
        <h1>I AM JO BREED</h1>
        <p>CREATIVE ART DIRECTOR AND DESIGNER</p>
        <br />
        <button className='btn'>SEE MY WORK</button>
      </div>
      <div className="right-container">
        <img src="model.jpg" alt="" />
      </div>
    </div>
    <hr />
    </>
  )
}

export default Hero