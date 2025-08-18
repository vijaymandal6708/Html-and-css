import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Products'
import ShowCart from './ShowCart'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
       {/*  */}
       <Routes>
         <Route index element={<Products></Products>}></Route>
         <Route path="/showcart" element={<ShowCart></ShowCart>}></Route>
       </Routes>
    </>
  )
}

export default App
