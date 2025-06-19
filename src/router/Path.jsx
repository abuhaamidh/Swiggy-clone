import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Navbar from '../components/Navbar'
import Login from '../Pages/Login' 
import Productdisplay from '../Pages/Productdisplay'
import Foodmenu from '../Pages/Foodmenu'
import CommonHeader from '../components/CommonHeader'
import OffersScroll from '../components/OffersScroll'
import Menu from '../Pages/Menu'




function Path() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/login" element={<Login/>}/>
        <Route path= "/navbar" element={<Navbar/>}/>
        <Route path= "/productdisplay" element={<Productdisplay/>}/>
        <Route path= "/foodmenu" element={<Foodmenu/>}/> 
        <Route path="/commonheader" element={<CommonHeader/>}/>
        <Route path ="/menu/:id" element={<Menu/>} />
        <Route path="/offersscroll" element={<OffersScroll/>}/>
       
    </Routes>
    </BrowserRouter>
  )
}

export default Path