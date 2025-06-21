import { useLocation } from "react-router-dom"
import CommonHeader from "../components/CommonHeader"
import Data from "../json/product.json"
import { useEffect, useState, useRef} from "react"
import { MdStars } from "react-icons/md";
import OffersScroll from "../components/OffersScroll";
import { DiAtom } from "react-icons/di";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/features/cart.feature";



function Menudisplay(){
    
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => 
        state.cart.items
    );
    console.log(cartItems)

    const [data, setData] = useState([]);
    const { id } = useParams();
    console.log('the restaurant id is:', id)
    // const item = data.find((item) => String(item.id) === String(id));

  
   function addItemCart(val) {
      dispatch(addItem(val))
   }

    useEffect(() => {

             axios("http://localhost:5000/api/product")
            .then((res) => {
            const found = res.data.find((item) => String(item.id) === String(id));
            setData(found)
            console.log('Filtered items:', found)
            
            })
            .catch((ërr) =>{
             console.log("error fetching data:", err)
            })
        
        
    },[id])
   
    
    return (
        <div>
            <CommonHeader/>
            <div style={{backgroundColor:"whitesmoke", height:'160rem'}}>
                <p style= {{
                    fontFamily:"'poppins', sans-serif",
                    paddingLeft:'350px',
                    paddingTop:'50px',
                    fontWeight:'bold',
                    fontSize:'13px',
                    color:'grey'
                    
                    }}> Home / Restaurents / Menu </p>
            {data && (
    
            <div>
           <h1 style={{fontFamily:"'poppins', sans-serif",fontSize:'26px', fontWeight:"bold", margin:'2rem 0 0 22rem'}}>{data.name}</h1>
           
            <div className="shopdetails">
            <p style={{paddingLeft:'28px', paddingTop:'16px', fontWeight:'bold'}}> <MdStars style={{height:"25px", width:'25px', color:'green',paddingRight:'3px', paddingBottom:'3px'}}/>{data.rating} <span style={{color:'grey', paddingLeft:'5px', fontSize:'14px'}}> • {data.price}</span> </p>
            <p style={{paddingLeft:'35px', marginTop:'-10px',fontWeight:'bold', fontSize:'14px', color:'#ff5200'}}>{data.cuisine}</p>
           
            <p style={{paddingLeft:'35px', marginTop:'-10px',fontWeight:'bold', fontSize:'14px'}}>Outlet <span style={{color:'grey',fontSize:'13px', paddingLeft:'12px', fontWeight:'lighter'}}>{data.location}</span></p>
            <p style={{paddingLeft:'35px', marginTop:'-10px',fontWeight:'bold', fontSize:'14px'}}>25-30 mins</p>
            </div>
            </div>
            )}
            <OffersScroll/>
            <p style={{marginLeft:'44rem', marginTop:'50px'}}><DiAtom /> M E N U <DiAtom /></p>
            <input className="searchdishes" placeholder="Search for dishes"></input>
            <CiSearch style={{marginLeft:'-38px', color:'black'}}/>
            <p className="menublack">MENU</p>
            <p style={{border:'1px solid white', margin:'2rem 21rem', backgroundColor:'lightgrey',opacity:'30%', height:'20px'}}></p>
            
            {data &&  (
                <div className="mennuu">
                <div className="displayMenu"> 
                <h1 style={{fontSize:'19px',fontFamily:"'Outfit', sans-serif"}}>{data.name} </h1>
                <hr style={{width:'8.4rem'}}></hr>
                {
                
                data && data.menu?.map((item) => (
                    <div className='menu-section'style={{maxHeight:'15rem'}}>
                    <p style={{fontWeight:'bold',fontFamily:"'Outfit', sans-serif"}}>{item.name}</p>
                    <p style={{fontFamily:"'Outfit', sans-serif"}}>₹{item.price}</p>
                    <button onClick={() => addItemCart(item)}>ADD</button>
                    <span id="customisable">Customisable</span>
                    <p style={{fontFamily:"'poppins', sans-serif", width:"25rem", fontSize:'13px',marginTop:'-5rem'}}>{item.description}</p>
                    <p style={{fontFamily:"'poppins', sans-serif", width:'80px',   fontSize:'13px' }}>{item.serving}</p>
                    
                    <hr/>
                    </div>
                ))} 
                </div> 
                </div>   
            )}
            
            
            </div>
            </div>
    )
}

export default Menudisplay