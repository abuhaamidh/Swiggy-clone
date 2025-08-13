import "../styles/Styles.css";
import { useNavigate } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

function Navbar() {
  const usenavigate = useNavigate();

  function routeTo() {
    usenavigate("/");
  }

  function toLogin() {
    usenavigate("./Login");
  }
  return (
    <div class="header">
      <div class="top">
        <div top="top flex items-center justify-between px-8 py-4 bg-white text-gray-900"></div>
        <img
          class="logo"
          onClick={() => toLogin()}
          src="https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
        ></img>
        <div class="buttons">
          <button id="btn1">Swiggy Corporate</button>
          <button id="btn2">Partner with us</button>
          <button id="btn3" onClick={() => toLogin()}>
            {" "}
            Get the App <MdArrowOutward />
          </button>
          <button id="btn4">Sign up </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
