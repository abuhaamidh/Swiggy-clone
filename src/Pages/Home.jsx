import React, { useState } from "react";
import "../styles/Styles.css";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "bootstrap";
import Navbar from "./Navbar";
import { TbSearch } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { useCombobox } from "downshift";
import MidComponent from "./MidComponent";

 const locations = [
    "Marathahalli",
    "Koramangala",
    "Indira Nagar",
    "Brookfield",
    "Whitefield",
    "HSR Layout",
    "Jayanagar",
    "Church Street",
    "BTM layout"
  ];

  const cities = [
  "Tenkasi", "Tirunelveli", "Thoothukudi", "Madurai", "Chennai","Hyderabad","Bangalore","Goa","Tiruchirappalli", "Mumbai",  "Kolkata",  "Ahmedabad",
  "Pune", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Bhopal",
  "Patna", "Vadodara", "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut",
  "Rajkot", "Kalyan-Dombivli", "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad",
  "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore",
  "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur", , "Raipur", "Kota",
  "Guwahati", "Chandigarh", "Solapur", "Hubli Dharwad", "Bareilly", "Moradabad",
  "Mysore",  "Tiruppur",  "Thiruvananthapuram", "Noida", "Gurgaon", "Thane", "Bhavnagar", "Ujjain", "Jamshedpur",
  "Kolhapur", "Cuttack", "Rourkela", "Ajmer", "Shillong", "Siliguri", "Aligarh", 
  "Bilaspur", "Jalandhar", "Rajasthan", "Shimla", "Panaji", "Warangal", "Nanded", 
  "Erode", "Nellore", "Belgaum", "Anantapur", "Durgapur", "Guntur", "Tirupati", 
  "Saharanpur", "Rewa", "Kasargod", "Thrissur", "Alappuzha", "Kannur"
];
function Home() {
  const [input, setInput] = useState("");
  const usenavigate = useNavigate();
  const [inputItem, setInputItem] = useState(locations);

  function productDisplay() {
    usenavigate("/productdisplay");
  }
  
  function searchRestaurant() {
    usenavigate("/productdisplay", { state: { input } });
  } 

   
  
  const {
    isOpen,
    getInputProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    onSelectedItemChange
  } = useCombobox({
    items : inputItem,
    onInputValueChange : ({inputValue = ""}) => {
      setInputItem(
        locations.filter((item) =>
           item.toLowerCase().includes(inputValue.toLowerCase()))
      )
      
    },
    isOpen: input.trim().length > 0,
    onSelectedItemChange : ({selectedItem}) =>{
      if(selectedItem){
        usenavigate("/productdisplay", { state: { input: selectedItem } });
        console.log("textFromUser: ", input)
      }
    }
  })


  
  return (
    <div class="box">
      <Navbar />
      <hr id="borderLine"></hr>
      <h1 class="question">
        {" "}
        Order food & groceries. Discover best restaurants. Swiggy it!
      </h1>

      {/*SearchBar with the dropdown using Downshift */}

        <div
          class="searchBar"
          style={{ marginTop:"30px",marginLeft: "-22%" }}>
          <div style={{ maxWidth: "300px", margin: "50px auto", fontFamily: "Arial" }}>
          <input

          {...getInputProps({
            onChange : (e) => setInput(e.target.value)
          })}
            placeholder="Search for locations..."
            type="text"
            class="search"
            
          ></input>
          <TbSearch id="searchbtn"/>
           
          <ul
          {...getMenuProps()}
          style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          border: isOpen ? "1px solid #ccc" : "none",
          borderTop: "none",
          maxHeight: "150px",
          overflowY: "auto",
        }}
          >
            {isOpen &&
             inputItem.map((item, index)=>(
              <li 
              key ={item}
              {...getItemProps({item, index})}
              style={{
                padding: "8px",
                backgroundColor: highlightedIndex === index ? "#f7e2d9" : "white",
                cursor: "pointer",
              }}
              >
                {item}
              </li>
             ))
}
          </ul>
          </div>
        </div>
        <MidComponent />
       
       <div></div>
      <img
        class="bottom-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
      ></img> 
      <h5 className="city-title">Cities with food delivery</h5>
      <div className="cities-list">
      {cities.map((city, index) => (
        <p id='cities-list' key={index}>
         {city}
        </p>
      ))}
      </div>
    </div>
  );
}


export default Home;





















// {/* <button id="search-btn">  /* onClick={() => searchRestaurant()} */
//     <TbSearch />
//    </button> */}

// {/* <div class="dropdown-center">
//         <button
//           class="btn btn-secondary dropdown-toggle"
//           type="button"

//           data-bs-toggle="dropdown"
//           aria-expanded="false"
//           style={{
//             width: "300px",
//             height: "65px",
//             backgroundColor: "white",
//             borderRadius: "15px",
//             border: "none",
//             marginTop: "40px",
//             marginLeft: "10%",
//           }}
//         >
//           <p id="eydl" style={{ color: "grey", marginTop: "11px" }}>
//             <ImLocation style={{ color: "grey" }} /> Enter your delivery
//             location
//           </p>
//         </button>
//         <ul class="dropdown-menu" style={{ opacity: "60%" }}>
//           <li>
//             <a class="dropdown-item" href="#">
//               Marathahalli
//             </a>
//           </li>
//           <li>
//             <a class="dropdown-item" href="#">
//               Koramangala
//             </a>
//           </li>
//           <li>
//             <a class="dropdown-item" href="#">
//               Indira Nagar
//             </a>
//           </li>
//           <li>
//             <a class="dropdown-item" href="#">
//               Brookfield
//             </a>
//           </li>
//         </ul> */}