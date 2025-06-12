import { useLocation } from "react-router-dom"
import CommonHeader from "../components/CommonHeader"
import Path from "../router/Path"


function Menudisplay(){

     const location = useLocation();
     const Path = location.pathname;
    console.log(Path);
    
    return (
        <div>
            <CommonHeader/>
            <div style={{backgroundColor:"whitesmoke"}}>
            <p>rsttu</p>
                
            </div>
            </div>
    )
}

export default Menudisplay