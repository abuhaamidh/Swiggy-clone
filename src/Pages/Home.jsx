import React, { useState } from "react";
import "../styles/Styles.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { TbSearch } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { useCombobox } from "downshift";
import MidComponent from "../components/MidComponent";
import Scrolls from "../components/Scrolls";

const locations = [
  "Marathahalli",
  "Koramangala",
  "Indira Nagar",
  "Brookfield",
  "Whitefield",
  "HSR Layout",
  "Jayanagar",
  "Church Street",
  "BTM layout",
];

const cities = [
  "Tenkasi",
  "Tirunelveli",
  "Thoothukudi",
  "Madurai",
  "Chennai",
  "Hyderabad",
  "Bangalore",
  "Goa",
  "Tiruchirappalli",
  "Mumbai",
  "Kolkata",
  "Ahmedabad",
  "Pune",
  "Jaipur",
  "Surat",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Bhopal",
  "Patna",
  "Vadodara",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan-Dombivli",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad",
  "Ranchi",
  "Howrah",
  "Coimbatore",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Jodhpur",
  ,
  "Raipur",
  "Kota",
  "Guwahati",
  "Chandigarh",
  "Solapur",
  "Hubli Dharwad",
  "Bareilly",
  "Moradabad",
  "Mysore",
  "Tiruppur",
  "Thiruvananthapuram",
  "Noida",
  "Gurgaon",
  "Thane",
  "Bhavnagar",
  "Ujjain",
  "Jamshedpur",
  "Kolhapur",
  "Cuttack",
  "Rourkela",
  "Ajmer",
  "Shillong",
  "Siliguri",
  "Aligarh",
  "Bilaspur",
  "Jalandhar",
  "Rajasthan",
  "Shimla",
  "Panaji",
  "Warangal",
  "Nanded",
  "Erode",
  "Nellore",
  "Belgaum",
  "Anantapur",
  "Durgapur",
  "Guntur",
  "Tirupati",
  "Saharanpur",
  "Rewa",
  "Kasargod",
  "Thrissur",
  "Alappuzha",
  "Kannur",
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
    onSelectedItemChange,
  } = useCombobox({
    items: inputItem,
    onInputValueChange: ({ inputValue = "" }) => {
      setInputItem(
        locations.filter((item) =>
          item.toLowerCase().includes(inputValue.toLowerCase())
        )
      );
    },
    isOpen: input.trim().length > 0,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem) {
        usenavigate("/productdisplay", { state: { input: selectedItem } });
        console.log("textFromUser: ", input);
      }
    },
  });

  return (
    <div class="box">
      <Navbar />
      <hr id="borderLine"></hr>
      <h1 class="question" style={{ marginTop: "2rem" }}>
        Order food & groceries. Discover best restaurants. Swiggy it!
      </h1>

      {/*SearchBar with the dropdown using Downshift */}

      <div class="searchBar" style={{ marginTop: "30px", marginLeft: "-22%" }}>
        <div
          style={{
            maxWidth: "300px",
            margin: "50px auto",
            fontFamily: "Arial",
          }}
        >
          <input
            {...getInputProps({
              onChange: (e) => setInput(e.target.value),
            })}
            placeholder="Search for locations..."
            type="text"
            class="search"
          ></input>
          <TbSearch id="searchbtn" />

          <ul
            {...getMenuProps()}
            style={{
              listStyle: "none",
              marginLeft: "17px",
              padding: 0,
              border: isOpen ? "1px solid #ccc" : "none",
              borderTop: "none",
              maxHeight: "150px",
              overflowY: "auto",
              width: "37.7rem",
              borderRadius: "15px",
              opacity: "95%",
            }}
          >
            {isOpen &&
              inputItem.map((item, index) => (
                <li
                  key={item}
                  {...getItemProps({ item, index })}
                  style={{
                    padding: "8px",
                    backgroundColor:
                      highlightedIndex === index ? "#f7e2d9" : "white",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "14px",
                    height: "40px",
                    color: "grey",
                    paddingLeft: "30px",
                    fontFamily: "'poppins', sans-serif",
                  }}
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
      </div>

      <MidComponent />
      <Scrolls />
      <div></div>
      <img
        class="bottom-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
      ></img>
      <h5 className="city-title">Cities with food delivery</h5>
      <div className="cities-list">
        {cities.map((city, index) => (
          <p id="cities-list" key={index}>
            {city}
          </p>
        ))}
      </div>
      <p
        style={{
          borderTop: "1px solid black",
          width: "80%",
          marginLeft: "8rem",
        }}
      ></p>
      <div
        style={{
          backgroundColor: "whitesmoke",
          marginTop: "-16.7px",
          height: "400px",
        }}
      >
        <h5
          style={{
            fontWeight: "bolder",
            fontSize: "27px",
            paddingTop: "40px",
            paddingLeft: "15rem",
          }}
        >
          For better experience,download the Swiggy app now
        </h5>
        <img
          style={{
            height: "65px",
            width: "165px",
            marginTop: "-65px",
            marginLeft: "60rem",
          }}
          src="https://deonde.co/blog/wp-content/uploads/2023/09/Available-on-Google-Play-store-button.png"
        ></img>

        <img
          style={{
            height: "67px",
            width: "180px",
            paddingLeft: "20px",
            marginTop: "-65px",
            marginLeft: "10px",
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
        ></img>
      </div>
      <div
        className="footer-grid"
        style={{
          backgroundColor: "whitesmoke",
        }}
      >
        <img
          className="footer-swiggy-logo"
          style={{
            marginTop: "-31rem",
            marginLeft: "14rem",
          }}
          src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Swiggy_Logo_2024.webp"
        ></img>
        <p
          style={{
            opacity: "85%",
            fontFamily: "'poppins', sans-serif",
            marginTop: "-13.5rem",
            fontSize: "15px",
            marginLeft: "15rem",
          }}
        >
          © 2025 Swiggy Limited
        </p>
        <ul>
          Company
          <li>About us</li>
          <li>Swiggy corporate</li>
          <li>Careers</li>
          <li>Team</li>
          <li>Swiggy One</li>
          <li>Swiggy Instamart</li>
          <li>Swiggy Dineout</li>
          <li>Swiggy Genie</li>
          <li>Minis</li>
          <li>Pyng</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
