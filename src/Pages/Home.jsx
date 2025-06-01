import React, { useState } from "react";
import "../styles/Styles.css";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "bootstrap";
import Navbar from "./Navbar";
import { TbSearch } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import Downshift from "downshift";

function Home() {
  const [input, setInput] = useState("");
  const usenavigate = useNavigate();

  function productDisplay() {
    usenavigate("/productdisplay");
  }
  function searchRestaurant() {
    usenavigate("/productdisplay", { state: { input } });
  }

    const Locations = [
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

  return (
    <div class="box">
      <Navbar />
      <hr id = "borderLine"></hr>
      <h1 class="question">
        {" "}
        Order food & groceries. Discover best restaurants. Swiggy it!
      </h1>

      {/* <div class="dropdown-center">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"

          data-bs-toggle="dropdown"
          aria-expanded="false"
          style={{
            width: "300px",
            height: "65px",
            backgroundColor: "white",
            borderRadius: "15px",
            border: "none",
            marginTop: "40px",
            marginLeft: "10%",
          }}
        >
          <p id="eydl" style={{ color: "grey", marginTop: "11px" }}>
            <ImLocation style={{ color: "grey" }} /> Enter your delivery
            location
          </p>
        </button>
        <ul class="dropdown-menu" style={{ opacity: "60%" }}>
          <li>
            <a class="dropdown-item" href="#">
              Marathahalli
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Koramangala
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Indira Nagar
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Brookfield
            </a>
          </li>
        </ul> */}

        {/*SearchBar with the dropdown using Downshift */}

        <div
          class="searchBar"
          style={{ marginTop:"30px",marginLeft: "-18%" }}
        >
          
          <input
            placeholder="Search for restaurants, item or.."
            type="text"
            class="search"
            onChange={(e) => setInput(e.target.value)}
            style={{ paddingLeft: "50px" }}
          ></input>
          <button id="search-btn" onClick={() => searchRestaurant()}>
            <TbSearch />
          </button>
        </div>
      
 
      <div class="mid-img">
        <img
          class="mid-image"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/faa6d07d-e43c-4aa1-90d8-eda6c14e467d_Food2BU.png"
        ></img>
        <img
          class="mid-image1"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/30/c1a4c945-fdf5-4418-af0b-4fb179b1e108_Genie2BU.png"
        ></img>
      </div>

      <img
        class="huge-img"
        src="https://entrackr.com/storage/2018/12/swiggy-1200x600.jpg"
      ></img>
      <img
        class="bottom-img"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
      ></img>
    </div>
  );
}

export default Home;
