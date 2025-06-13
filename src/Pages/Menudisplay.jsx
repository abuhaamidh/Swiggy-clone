import { useLocation } from "react-router-dom"
import CommonHeader from "../components/CommonHeader"
import Data from "../json/product.json"
import { useEffect, useState, useRef} from "react"
import { MdStars } from "react-icons/md";
import OffersScroll from "../components/OffersScroll";





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
            <div style={{backgroundColor:"whitesmoke", height:'100rem'}}>
            {data && data.filter((e) =>{
                if(e.id === 2){
                    return true
                }
            }).map((e) => (
            <div>
           <h1 style={{fontFamily:"'poppins', sans-serif",fontSize:'26px', fontWeight:"bold", margin:'5rem 0 0 24rem'}}>{e.name}</h1>
           
            <div className="shopdetails">
            <p style={{paddingLeft:'28px', paddingTop:'15px', fontWeight:'bold'}}> <MdStars style={{height:"25px", width:'25px', color:'green',paddingRight:'3px'}}/>{e.rating} <span style={{color:'grey', paddingLeft:'5px', fontSize:'14px'}}> • {e.price}</span> </p>
            <p style={{paddingLeft:'35px', marginTop:'-10px',fontWeight:'bold', fontSize:'14px', color:'#ff5200'}}>{e.cuisine}</p>
           
            <p style={{paddingLeft:'35px', marginTop:'-10px',fontWeight:'bold', fontSize:'14px'}}>Outlet <span style={{color:'grey',fontSize:'13px', paddingLeft:'12px', fontWeight:'lighter'}}>{e.location}</span></p>
            <p style={{paddingLeft:'35px', marginTop:'-10px',fontWeight:'bold', fontSize:'14px'}}>25-30 mins</p>
            </div>
            </div>
            ))}
            <div>
            <OffersScroll/>
            </div>
            </div>
            </div>
    )
}

export default Menudisplay