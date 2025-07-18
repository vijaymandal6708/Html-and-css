import './App.css'

function App() {

  return (
    <>

      <div className="container h-[819px] w-screen bg-[url('background.jpg')] bg-no-repeat border-1 border-black bg-contain">

        <div className="left-container h-[519px] w-[680px] m-[100px]">
          <p className='pt-8 font-bold text-2xl'>alexa peterson</p>
          <br />
          <br />
          <h1 className="text-7xl text-white">COMING APRIL 2023</h1>
          <br />
          <p className='text-white text-sm'>My travel blog is almost ready.Be one of the first to experience it by entering your email below.I will notify you as soon as it's live. Lets do this</p>
          <br />
          <input type="text" placeholder='Enter Your First and Last Name' className='bg-white w-[679px] h-[40px] rounded-lg pl-[15px]' />
          <br />
          <br />
          <input type="text" placeholder='Enter Your Email Address' className='bg-white w-[428px] h-[40px] rounded-lg pl-[15px] inline' />
          <input type="text" placeholder='SIGN ME UP!' className='pl-[50px] bg-orange-400 w-[230px] h-[40px] rounded-lg pl-[15px] ml-[20px] text-white font-bold' />
        </div>

      </div>


    </>
  )
}

export default App
