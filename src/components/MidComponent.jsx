import React, { useEffect, useRef } from "react";
import { HiArrowRight } from "react-icons/hi";


function MidComponent(){

    return(
      <div> 
        <div className="three-images">
            <div id="first">
              <h1 style={{fontWeight:"bold", fontFamily:"'Outfit', sans-serif", fontSiz:'20px', margin:'25px', opacity:'80%' }}>Food delivery</h1>
              <p style={{ fontFamily:"'poppins', sans-serif", fontSize:'24px', color:'grey', marginTop:'-20px', marginLeft:'28px'}}>From restaurants</p>
              <p id="ti-txt" style={{fontFamily:"'Outfit', sans-serif", fontSize:'21px',color:'white', marginLeft:'28px'}}>Upto 60% Off</p>
              <img src= "https://i.pinimg.com/236x/66/60/c8/6660c80c162ca5567981be7a2c8331a3.jpg"
              style={{height:'125px', marginLeft:'183px', borderRadius:"20px"}}
              ></img>
              <p style={{borderRadius:'50%', width:'45px', height:'45px',textAlign:"center",paddingTop:'8px', margin:'-60px 20px', color:'white',backgroundColor:'#ff5200'}}><HiArrowRight /></p>
            </div>
            <div id="second">
              <h1 style={{fontWeight:"bolder", fontFamily:"'Outfit', sans-serif", fontSiz:'20px', margin:'25px', opacity:'80%'}}>Instamart</h1>
              <p style={{ fontFamily:"'poppins', sans-serif", fontSize:'24px', color:'grey', marginTop:'-20px', marginLeft:'28px'}}>Instant grocery</p>
              <p id="ti-txt" style={{fontFamily:"'Outfit', sans-serif", fontSize:'21px',color:'white', marginLeft:'28px'}}>Upto 60% Off</p>
              <img src="https://previews.123rf.com/images/monticello/monticello1401/monticello140100058/25073629-composition-with-variety-of-grocery-products-isolated-on-white.jpg"
              style={{height:'120px', marginLeft:'110px', marginTop:'10px', borderRadius:'20px'}}
              ></img>
              <p style={{borderRadius:'50%', width:'45px', height:'45px',textAlign:"center",paddingTop:'8px', margin:'-65px 20px', color:'white',backgroundColor:'#ff5200'}}><HiArrowRight /></p>
            </div>
            <div id="third">
              <h1 style={{fontWeight:"bold", fontFamily:"'Outfit', sans-serif", fontSiz:'20px', margin:'25px', opacity:'80%' }}>Dine out</h1>
              <p style={{ fontFamily:"'poppins', sans-serif", fontSize:'24px', color:'grey', marginTop:'-20px', marginLeft:'28px'}}>Eat out & save more</p>            
              <p id="ti-txt" style={{fontFamily:"'Outfit', sans-serif", fontSize:'21px',color:'white', marginLeft:'28px'}}>Upto 50% Off</p>
              <img src="https://png.pngtree.com/png-clipart/20241007/original/pngtree-fine-dining-place-setting-with-white-plate-and-silverware-png-image_16244079.png"
              style={{height:'120px',width:'130px',marginLeft:'200px', marginTop:'18px', borderRadius:'30px'}}
              ></img>
              <p style={{borderRadius:'50%', width:'45px', height:'45px',textAlign:"center",paddingTop:'8px', margin:'-73px 22px', color:'white',backgroundColor:'#ff5200'}}><HiArrowRight /></p>
            </div>
        </div>
        
 
  </div>
        )
}

export default MidComponent