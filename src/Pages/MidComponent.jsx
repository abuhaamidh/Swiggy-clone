import React, { useEffect, useRef } from "react";
import Data from "../json/cuisine.json";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

function MidComponent(){
 const [data, setData] = useState([]);
 const scrollRef = useRef();

 const scroll = (scrollOffset) =>{
      if(scrollRef.current){
        scrollRef.current.scrollLeft += scrollOffset;
      }
 };

useEffect(() => {
  setData(Data);
    console.log("Are the data loaded:" , data);
    
},[])
    return(
         <div className="container" style={{maxWidth:"70%"}}>
         <h1 style={{ fontFamily:"'Outfit', sans-serif", fontWeight:"bold", fontSize:"28px", marginTop:'40px'}}>Choose your best cuisine</h1>
         <button className="scroll-btn" onClick={() => scroll(-800)}>&lt;</button>
         <button className="scroll-btn1" onClick={() => scroll(800)}>&gt;</button>
         <div style={{ display: "flex", alignItems: "center" }}>
         
        <div className="cuisineScroll" ref={scrollRef}>
         {data && 
         data.filter((e) => {
          if(e.name && e.image){
            return true
          }
         }).map((e) =>(

      <Card style={{width:"10em",border:"none"}} className="cardsScroll">
      <Card.Img style={{borderRadius:"70%", width:"150px", height:"150px"}} variant="top" src={e.image} />
      <Card.Body>
        <Card.Title style={{textAlign:"center", paddingTop:"20px", fontFamily:"'Poppins', sans-serif", color:"grey"}}>{e.name}</Card.Title>
      </Card.Body>
      </Card>
    
    ))}
       </div>  
</div>

     </div>
  
        )
}

export default MidComponent