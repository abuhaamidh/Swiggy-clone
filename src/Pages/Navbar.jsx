import React from 'react'
import "../styles/Styles.css"
import { useNavigate } from 'react-router-dom'
import Home from './Home';


function Navbar() {

    const usenavigate = useNavigate();

    function routeTo(){
        usenavigate("/")
    }
    
    function toLogin(){
        usenavigate("./Login")
    }
    return (
    <div class="header">
        <div class = "top">
            <img class = "logo" onClick={()=>routeTo()} src= "https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"></img>
            <div class="buttons">
                <button id="btn1" onClick={()=>toLogin()}>Login </button>
                <button id="btn2">Sign up </button>
            </div>
        </div>
    
    </div>
  )
}

export default Navbar