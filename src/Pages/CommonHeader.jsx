import React from 'react'
import { FaSuitcase } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { BsMinecart } from "react-icons/bs";

function CommonHeader() {
  return (


<div class ='box-1'>
      <div class='header-1'>
      <img class = "logo-1" src= "https://miro.medium.com/v2/resize:fit:1000/1*TCc6vQVH-3EUiJea76pMbQ.png"></img>
      <button class='btnn-1'><FaSuitcase style={{marginRight:'10px', marginTop:'-3px'}}/>Swiggy Corporate</button>
      <button class='btnn-2'><FiSearch style={{marginRight:'5px', marginTop:'-3px'}}/>Search</button>
      <button class='btnn-3'><RiDiscountPercentLine style={{marginRight:'5px', marginTop:'-3px'}}/>Offers</button>
      <button class='btnn-4'><IoHelpBuoyOutline style={{marginRight:'10px', marginTop:'-3px'}}/>Help</button>
      <button class='btnn-5'><BsPerson  style={{marginRight:'5px', marginTop:'-3px'}}/>Sign In</button>
      <button class='btnn-6'><BsMinecart style={{marginRight:'5px', marginTop:'-3px'}}/>Cart</button>
      </div>
      <div class='body-content'>
     
      </div>
    </div>
    
  )
}

export default CommonHeader