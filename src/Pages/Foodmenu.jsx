import React from "react";
import CommonHeader from "./CommonHeader";
import { MdStars } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { TfiPin } from "react-icons/tfi";
import { BsFillRecordFill } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

function Foodmenu() {
  return (
    <div>
      <div class="container-1" style={{ height: "91px" }}>
        <CommonHeader />
      </div>
      <div
        class="body-content"
        style={{ backgroundColor: "whitesmoke", height: "100rem" }}
      >
        <div id="routing-menu">
          <p id="three-menus">Home / </p>
          <p id="three-menus" style={{ marginLeft: "5px" }}>
            {" "}
            Banglore /{" "}
          </p>
          <p id="three-menus" style={{ marginLeft: "5px" }}>
            {" "}
            Hotel name
          </p>
        </div>
        <h1 id="hotelname-title">Hotel Name</h1>
        <div class="shop-info">
          <p id="ratings">
            <MdStars style={{ color: "green", paddingBottom: "3px" }} />
            4.4 (2.0K+ ratings) • ₹600 for two
          </p>
          <p id="cuisine">
            <span style={{ borderBottom: "1px solid #ff5200" }}>Biryani, </span>{" "}
            <span
              style={{ borderBottom: "1px solid #ff5200", marginLeft: "3px" }}
            >
              Mughlai
            </span>{" "}
          </p>
          <TfiPin
            style={{ color: "black", marginLeft: "8px", marginTop: "3px" }}
          />
          <p id="outlet">
            Outlet{" "}
            <span
              style={{
                color: "grey",
                fontWeight: "lighter",
                fontSize: "13px",
                marginLeft: "15px",
              }}
              id="place"
            >
              Marathahalli <IoMdArrowDropdown style={{ color: "#ff5200" }} />
            </span>
          </p>
          <p
            style={{
              fontFamily: "Georgia, 'Times New Roman', Times, serif",
              fontWeight: "bold",
              fontSize: "13px",
              marginLeft: "30px",
              marginTop: "-10px",
            }}
          >
            30-35 mins{" "}
          </p>
        </div>
        <h1 id="deals">Deals for you</h1>
        <div class="deals">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            style={{
              border: "1px solid rgb(195, 194, 194)",
              height: "110px",
              maxWidth: "400px",
              borderRadius: "30px",
              marginLeft: "35%",
            }}
          >
            <div
              class="carousel-indicators"
              style={{
                backgroundColor: "rgb(222, 219, 219)",
                borderRadius: "20px",
              }}
            >
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                style={{ color: "red" }}
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    marginLeft: "30px",
                    marginTop: "20px",
                  }}
                  src="https://i.pinimg.com/originals/4a/d0/47/4ad047072b82e47a8c6d636fcbc7bd7e.png"
                ></img>
                <p id="discountoffer">Extra ₹35 Off</p>
                <p id="do-content">APPLICABLE OVER & ABOVE COUPONS</p>
              </div>
              <div class="carousel-item">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    marginLeft: "30px",
                    marginTop: "20px",
                    borderRadius: "50%",
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7pwMZWUkmI10EsCBFuk_Xl6RJ30vfOhJlQ&s"
                ></img>
                <p id="discountoffer">10% Off Upto ₹100</p>
                <p id="do-content">USE AXISFEST</p>
              </div>
              <div class="carousel-item">
                <img
                  style={{
                    height: "50px",
                    width: "50px",
                    marginLeft: "30px",
                    marginTop: "20px",
                    borderRadius: "60%",
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_6SdSKSBtD66RKA-7BtmjIjXNyRR0qF8cMHd7nxScXZTNUAOkpoN52h1S5udd2K8Rj8&usqp=CAU"
                ></img>
                <p id="discountoffer">Flat ₹50 Off</p>
                <p id="do-content">NO CODE REQUIRED</p>
              </div>
            </div>
          </div>
          <p
            style={{ marginLeft: "45%", marginTop: "20px", fontWeight: "bold" }}
          >
            <BsFillRecordFill style={{ color: "#ff5200", marginTop: "-5px" }} />
            <BsFillRecordFill
              style={{ color: "#ff5200", marginTop: "-5px" }}
            />{" "}
            M E N U{" "}
            <BsFillRecordFill style={{ color: "#ff5200", marginTop: "-5px" }} />
            <BsFillRecordFill style={{ color: "#ff5200", marginTop: "-5px" }} />
          </p>
          <input class="sod" placeholder="Search for dishes"></input>
          <IoSearchOutline style={{ marginLeft: "-35px", marginTop: "-5px" }} />
          <p id="sod-menu">MENU</p>
        </div>
      </div>
    </div>
  );
}

export default Foodmenu;
