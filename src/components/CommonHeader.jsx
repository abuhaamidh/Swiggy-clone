import React from 'react'
import { FaSuitcase } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { BsPerson } from "react-icons/bs";
import { BsMinecart } from "react-icons/bs";

function CommonHeader() {
  return ( 

 
<div className='boxx' style={{paddingTop: "1px" }}>
      <div className='header-1'>
      <img className = "logo-1" src= "https://miro.medium.com/v2/resize:fit:1000/1*TCc6vQVH-3EUiJea76pMbQ.png"></img>
      <p id ="order">Orders</p>
      <button className='btnn-1'><FaSuitcase style={{marginRight:'5px', marginTop:'-3px'}}/>Swiggy Corporate</button>
      <button className='btnn-2'><FiSearch style={{marginRight:'5px', marginTop:'-3px'}}/>Search</button>
      <button className='btnn-3'><RiDiscountPercentLine style={{marginRight:'5px', marginTop:'-3px'}}/>Offers</button>
      <button className='btnn-4'><IoHelpBuoyOutline style={{marginRight:'10px', marginTop:'-3px'}}/>Help</button>
      <button className='btnn-5'><BsPerson  style={{marginRight:'5px', marginTop:'-3px'}}/>Sign In</button>
      <button className='btnn-6'><BsMinecart style={{marginRight:'5px', marginTop:'-3px'}}/>Cart</button>
      </div>
     <hr style={{marginTop:"80px", marginLeft:'6%', color:'lightgray'}}/>
    <div style={{textAlign:'center',fontSize:'40px',backgroundColor:"whitesmoke", marginTop:'-20px'}}>
      
    </div>
     
</div>
    
  )
}

export default CommonHeader