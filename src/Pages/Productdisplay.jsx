import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import menu from '../Pages/Menu'
import Data from "../json/product.json"
import { TbCircleDashedPercentage } from "react-icons/tb";
import { MdStars } from "react-icons/md";



function Productdisplay() {
  const [product,setProduct] = useState([]);
  const usenavigate = useNavigate();
  const uselocation = useLocation();
  const [data,setData] = useState();

  const locationInput = uselocation.state?.input;

  useEffect(()=>{
    setProduct(Data) 
    //console.log("Loaded Data:", Data);
  },[]);

  //console.log("product in render:", product);
 
  const navigate = useNavigate();
  const handleClick = (data) => {
      navigate(`/menu/${data.id}`)
  }
//  
   const filtered = product.filter((e) => {
    //console.log("Comparing:", e.location, locationInput);
    if (!locationInput) return true;
    return e.location === locationInput;
  });
  

  return (
    <div>
     <Navbar/>
     <h1 className='best-restaurant' style={{fontFamily:"'Outfit', sans-serif", marginLeft:'175px'}}> Discover best restaurants on Dineout</h1>
     <div className = "cards">
      {filtered.length === 0 && <p class="noitem-txt">Oops! No restaurants found in this location </p>}
      {/* {product && product ?.filter((e)=> {
        if(!locationInput) return true;
        return e.location === locationInput;
}) */}

{filtered.map((e)=> (
        
        <Card className="card-1" onClick={() => handleClick(e)} style={{ border: 'none', marginLeft: "1.5%", width:'22rem' }}>
        <Card.Img  className='card1-img' variant="top" style={{ height: '12rem', width:'22rem' , borderTopRightRadius:'20px', borderTopLeftRadius:'20px'}} src={e.image} />
        <Card.Body style={{ backgroundColor: 'rgb(244, 255, 251)' }}>
          <Card.Title className="title-name" style={{ display: "flex", justifyContent: "space-between", alignItems: "center",marginTop:"-50px",color:"white", fontFamily:"'Outfit', sans-serif", fontWeight:'boldest'}}>
            <span>{e.name}</span>
            <div style={{fontSize:'12px'}} id='titlename-icon'> {e.rating} <MdStars /></div>
          </Card.Title>
          <Card.Text className="content">
            <p className="cuisine-type">{e.cuisine} <span style={{ marginLeft: '60px', position: 'absolute' }} id='inner-cuisine'>₹1000 for two</span></p>
            <p style={{ marginTop: '-15px' }} className="cuisine-type">{e.location}<span style={{ marginLeft: '90px', position: "absolute" }} id='inner-cuisine'>4.3 KM</span></p>
            <p className="content-txt"><span id="contenttxt-icon"><TbCircleDashedPercentage /></span> Flat {e.offer} off on walk-in <span id="offer-1">+3 more</span></p>
            <p className="content-txt-1">Upto {e.bankoffer} with bank offers</p>
          </Card.Text>
        </Card.Body>
      </Card>
      
))}
     

    
    </div> 
    
    <img class = "bottom-img" src ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"></img>
    </div>
  )
}

export default Productdisplay