 import React from "react"
import { useRef } from "react";
 import { ToastContainer, toast } from 'react-toastify';

function App() {

  function toasthandle(){
    // toast.info("Successful...")
    toast.success("Successful...")
  }


  let myRef = useRef()

  function inputfocus(){
    myRef.current.focus()
  }

  function change(){

    myRef.current.innerHTML="Hello"
    myRef.current.style.backgroundColor="red"

  }

  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />

      <button onClick={toasthandle}>Click me</button> <br /> <br />

      <input type="text" ref={myRef} /> <br /> <br />

      <button onClick={inputfocus}>Tap here</button> <br /> <br />

      <h1 ref={myRef}>Welcome</h1>

      <button onClick={change}>Change</button>
    </>
  )
}

export default App
