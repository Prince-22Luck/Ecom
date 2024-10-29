
import Navbarcss from "./Navbar2.module.css";
import logo from "../assets/logo.webp";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {  useNavigate } from "react-router-dom";
import { useRef } from "react";

const Navbar2 = () => {
const navigate = useNavigate();
  const goto=()=>{
    navigate("/profile");
  }
  const gotohome = ()=>{
    navigate("/")
  }
  const gotocart=()=>{
    navigate("/cart")
  }

  const footerRef = useRef(null); // Reference to the footer element

  const ToBottom = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={Navbarcss.nav}>
      <div className={Navbarcss.logoinfo}>
        <div className={Navbarcss.logoimg}>
          <img src={logo} alt="PC Hub" />
        </div>
        <div className={Navbarcss.logoname}>PC Hub</div>
      </div>

      <div className={Navbarcss.search}>
        <input type="search" placeholder="Search products..." />
      </div>

      <div className={Navbarcss.list}>
        <li className={Navbarcss.list_element}><button style={{all:"unset"}} onClick={gotohome}>Home</button></li>
        <li className={Navbarcss.list_element1}>
        <div className="dropdown">
        <button className="btn  dropdown-toggle" type="button" id={Navbarcss.dropdownMenuButton} data-bs-toggle="dropdown" aria-expanded="false">
          Category
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" id={Navbarcss.round}>
        <li><a className="dropdown-item" href="#">All Products</a></li>
          <li><a className="dropdown-item" href="#">Core Components</a></li>
          <li><a className="dropdown-item" href="#">Expansion Components</a></li>
          <li><a className="dropdown-item" href="#">Input / Output Devices</a></li>
          <li><a className="dropdown-item" href="#">Computer Accessories</a></li>
        </ul>
      </div>
        </li>
        <li className={Navbarcss.list_element}><button style={{all:"unset"}} onClick={gotocart}>Cart</button></li>
        <li className={Navbarcss.list_element}><button style={{all:"unset"}} onClick={ToBottom}>About Us</button></li>
      </div>

        <button className={Navbarcss.button} onClick={goto}>Profile</button>
    </div>
  );
};

export default Navbar2;
