import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
  const LinkStyle = {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ".4rem",
    color: "white",
  };
  return (
    <nav>
      <div className="brandWrapper">
        <div className="brandLogo">
          <img
            src="https://picsum.photos/50"
            alt="logo"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <Link to={"/"} style={LinkStyle}>
          <div className="brandName">
            <span style={{ color: "red" }}>code</span>Break
          </div>
        </Link>
        <div className="searchWrapper">
          <div className="searchIcon">
            <FontAwesomeIcon
              icon="search"
              style={{ transform: "translateY(1.3px)" }}
            />
          </div>
          <input type="search" className="search" placeholder="Search" />
        </div>
      </div>
      <div className="navList">
        <Link to={"/"} style={LinkStyle} className="navItem">
          <i class="fa-solid fa-house-user" style={{ color: "white" }}></i>
          <div>Home</div>
        </Link>
        <Link to={"/shop"} style={LinkStyle} className="navItem">
          <i class="fa-solid fa-store" style={{ color: "white" }}></i>
          <div>Shop</div>
        </Link>
        <Link to="/about" style={LinkStyle} className="navItem">
          <i class="fa-solid fa-address-card" style={{ color: "white" }}></i>
          <div>About</div>
        </Link>
        <Link to={"/help"} style={LinkStyle} className="navItem">
          <i class="fa-solid fa-circle-question" style={{ color: "white" }}></i>
          <div>Help</div>
        </Link>

        <Link to={"/login"} style={LinkStyle}>
          <div className="cart">
            <div className="cartIcon">
              <i className="fa-solid fa-right-to-bracket"></i>
              {/* <FontAwesomeIcon icon="cart-shopping" /> */}
              <div className="cartText">Login</div>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}
