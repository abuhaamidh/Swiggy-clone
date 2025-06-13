import { useLocation } from "react-router-dom"
import CommonHeader from "../components/CommonHeader"
import Data from "../json/product.json"
import { useEffect, useState, useRef} from "react"
import { MdStars } from "react-icons/md";
import OffersScroll from "../components/OffersScroll";
import { DiAtom } from "react-icons/di";
import { CiSearch } from "react-icons/ci";





function Menudisplay(){

    const [data, setData] = useState([])

    useEffect(() => {
        setData(Data);
        
    },[])
    const location = useLocation();
     const Path = location.pathname;
    console.log(Path);
    
    return (
        <div>
            <CommonHeader/>
            <div style={{backgroundColor:"whitesmoke", height:'200rem'}}>
            {data && data.filter((e) =>{
                if(e.id === 2){
                    return true
                }
            }).map((e) => (
            <div>
           <h1 style={{fontFamily:"'poppins', sans-serif",fontSize:'26px', fontWeight:"bold", margin:'5rem 0 0 22rem'}}>{e.name}</h1>
           
            <div className="shopdetails">
            <p style={{paddingLeft:'28px', paddingTop:'16px', fontWeight:'bold'}}> <MdStars style={{height:"25px", width:'25px', color:'green',paddingRight:'3px', paddingBottom:'3px'}}/>{e.rating} <span style={{color:'grey', paddingLeft:'5px', fontSize:'14px'}}> • {e.price}</span> </p>
            <p style={{paddingLeft:'35px', marginTop:'-10px',fontWeight:'bold', fontSize:'14px', color:'#ff5200'}}>{e.cuisine}</p>
           
            <p style={{paddingLeft:'35px', marginTop:'-10px',fontWeight:'bold', fontSize:'14px'}}>Outlet <span style={{color:'grey',fontSize:'13px', paddingLeft:'12px', fontWeight:'lighter'}}>{e.location}</span></p>
            <p style={{paddingLeft:'35px', marginTop:'-10px',fontWeight:'bold', fontSize:'14px'}}>25-30 mins</p>
            </div>
            </div>
            ))}
            <OffersScroll/>
            <p style={{marginLeft:'44rem', marginTop:'50px'}}><DiAtom /> M E N U <DiAtom /></p>
            <input className="searchdishes" placeholder="Search for dishes"></input>
            <CiSearch style={{marginLeft:'-38px', color:'black'}}/>
            <p className="menublack">MENU</p>
            <p style={{border:'1px solid white', margin:'2rem 21rem', backgroundColor:'lightgrey',opacity:'30%', height:'20px'}}></p>
            
            {data && data.filter((e) => {
                if(e.id === 3){
                    return true;
                }
            }).map((e) => (
                <div className="displayMenu"> <h1 style={{fontSize:'19px',fontFamily:"'Outfit', sans-serif"}}>{e.name} </h1>
                <hr style={{width:'8.4rem'}}></hr>
                {e.menu.map((item) => (
                    <div>
                    <p style={{fontWeight:'bold',fontFamily:"'Outfit', sans-serif"}}>{item.name}</p>
                    <p style={{fontFamily:"'Outfit', sans-serif"}}>₹{item.price}</p>
                    <p style={{fontFamily:"'poppins', sans-serif", width:"30rem", fontSize:'14px'}}>{item.description}</p>
                    <p>{item.rating}</p>
                    <button id="ADD-btn">ADD</button>
                    <hr style={{width:'53rem'}}></hr>
                    </div>
                ))}
                </div>
            ))}
            
            
            </div>
            </div>
    )
}

export default Menudisplay