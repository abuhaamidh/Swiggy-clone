import { Card } from "react-bootstrap"
import { useState, useRef, useEffect } from "react"
import Data from "../json/product.json"



function offerScroll(){
const scrollRef = useRef();
const [data, setData] = useState([]);
        
         const scroll = (scrollOffset) =>{
              if(scrollRef.current){
                scrollRef.current.scrollLeft += scrollOffset;
              }
         };

    useEffect(() => {
        setData(Data)
    },[])
3
    return (
        <div>
        <div className="container" style={{maxWidth:"53%", marginTop:'50px'}}>
         <h1 style={{ fontFamily:"'Outfit', sans-serif", fontWeight:"bold", fontSize:"26px", marginBottom:'-35px', marginTop:'30px'}}>Deals for you</h1>
         <button style={{borderRadius:'50%', height:'36px', width:'36px', marginLeft:'43.5rem', border:'none'}} className="scroll-btn11"  onClick={() => scroll(-400)}>&lt;</button>
         <button style={{borderRadius:'50%', height:'36px', width:'36px', marginLeft:'10px', border:'none'}}className="scroll-btn2" onClick={() => scroll( 400)}>&gt;</button>
         <div style={{ display: "flex", alignItems: "center"}}>
         
        <div className="cuisineScroll" ref={scrollRef}>
        <div style=   {{display:"flex"}}>
           <div style={{width:'20rem',height:'70px', border:'1px solid grey', borderRadius:'15px'}}>
           <img style={{height:'45px', width:'45px', borderRadius:'50%', margin:'10px 0 0 10px'}} src="https://cdn.brandfetch.io/axisbank.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed"></img>
           <p style=  {{paddingLeft:'70px', marginTop:'-45px', fontWeight:'bold'}}>Flat 30% Off</p>
           <p style=  {{paddingLeft:'70px', marginTop:'-18px', fontWeight:'bold', color:"grey", fontSize:'14px'}}>USE AXISS30</p>
           </div>

           <div style={{marginLeft:'20px',width:'20rem',height:'70px', border:'1px solid grey', borderRadius:'15px'}}>
           <img style={{height:'45px', width:'45px', borderRadius:'50%', margin:'10px 0 0 10px'}} src="https://i.pinimg.com/736x/1e/b4/93/1eb49385575175ab7f541d7000273a1b.jpg"></img>
           <p style=  {{paddingLeft:'70px', marginTop:'-45px', fontWeight:'bold'}}>Flat 20% Off</p>
           <p style=  {{paddingLeft:'70px', marginTop:'-18px', fontWeight:'bold', color:"grey", fontSize:'14px'}}>USE HDFCC20</p>
           </div>

           <div style={{marginLeft:'20px',width:'20rem',height:'70px', border:'1px solid grey', borderRadius:'15px'}}>
           <img style={{height:'45px', width:'45px', borderRadius:'50%', margin:'10px 0 0 10px'}} src="https://static-00.iconduck.com/assets.00/discount-icon-1024x1024-wh8nnqon.png"></img>
           <p style=  {{paddingLeft:'70px', marginTop:'-45px', fontWeight:'bold'}}>Flat ₹165 Off</p>
           <p style=  {{paddingLeft:'70px', marginTop:'-18px', fontWeight:'bold', color:"grey", fontSize:'14px'}}>USE CELEBRATION</p>
           </div>

           <div style={{marginLeft:'20px',width:'20rem',height:'70px', border:'1px solid grey', borderRadius:'15px'}}>
           <img style={{height:'45px', width:'45px', borderRadius:'50%', margin:'10px 0 0 10px'}} src="https://cdn2.iconfinder.com/data/icons/credit-cards-6/156/american_express-512.png"></img>
           <p style=  {{paddingLeft:'70px', marginTop:'-45px', fontWeight:'bold'}}>Flat ₹200 Off</p>
           <p style=  {{paddingLeft:'70px', marginTop:'-18px', fontWeight:'bold', color:"grey", fontSize:'14px'}}>USE XTRAMOMENT</p>
           </div>

           <div style={{marginLeft:'20px',width:'20rem',height:'70px', border:'1px solid grey', borderRadius:'15px'}}>
           <img style={{height:'45px', width:'45px', margin:'10px 0 0 10px'}} src="https://pbs.twimg.com/profile_images/1820419856321417217/m8vph7DX_400x400.png"></img>
           <p style=  {{paddingLeft:'70px', marginTop:'-45px', fontWeight:'bold'}}>Flat ₹180 Off</p>
           <p style=  {{paddingLeft:'70px', marginTop:'-18px', fontWeight:'bold', color:"grey", fontSize:'14px'}}>USE RBLSAVER</p>
           </div>
        </div>
       </div>  
</div>
     </div>
        </div>
    )
}
export default offerScroll


//  {data && 
//          data.filter((e) => {
//           if(e.name && e.image){
//             return true;

//           }
//          }).map((e) =>(

//       <Card style={{width:"10em",border:"none"}} className="cardsScroll">
//       <Card.Img style={{borderRadius:"70%", width:"150px", height:"150px"}} variant="top" src={e.image} />
//       <Card.Body>
//         <Card.Title style={{textAlign:"center", paddingTop:"20px", fontFamily:"'Poppins', sans-serif", color:"grey"}}>{e.name}</Card.Title>
//       </Card.Body>
//       </Card>
    
//     ))}