import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from '../Pages/Navbar'
import Login from '../Pages/Login'
import Productdisplay from '../Pages/Productdisplay'
import Foodmenu from '../Pages/Foodmenu'



function Path() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route  path= "/login" element={<Login/>}/>
        <Route  path= "/navbar" element={<Navbar/>}/>
        <Route path= "/productdisplay" element={<Productdisplay/>}/>
        {/* <Route path= "/foodmenu" element={<Foodmenu/>}/> */}
        
        
    </Routes>
    </BrowserRouter>
  )
}

export default Path