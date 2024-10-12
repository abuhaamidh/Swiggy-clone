import React from 'react'
import { FaSuitcase } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { RiDiscountPercentLine } from "react-icons/ri";

function Foodmenu() {
  return (
    <div class ='box-1'>
      <div class='header-1'>
      <img class = "logo-1" src= "https://miro.medium.com/v2/resize:fit:1000/1*TCc6vQVH-3EUiJea76pMbQ.png"></img>
      <button class='btnn-1'><FaSuitcase style={{marginRight:'10px', marginTop:'-3px'}}/>Swiggy Corporate</button>
      <button class='btnn-2'><FiSearch style={{marginRight:'10px', marginTop:'-3px'}}/>Search</button>
      <button class='btnn-3'><RiDiscountPercentLine style={{marginRight:'10px', marginTop:'-3px'}}/>Offers</button>

      </div>
      

    </div>
  )
}

export default Foodmenu