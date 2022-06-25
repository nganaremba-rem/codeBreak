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
    mixBlendMode: "difference",
  };
  const btn = {
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: ".4rem",
  };
  return (
    <nav>
      <div className="brandWrapper">
        <Link
          to={"/"}
          style={
            (btn,
            { display: "flex", alignItems: "center", textDecoration: "none" })
          }>
          <div className="brandLogo">
            <img src="https://picsum.photos/250" alt="logo" />
          </div>
          <div className="brandName">
            <span style={{ color: "red" }}>code</span>
            <span style={{ color: "blueviolet" }}>Break</span>
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
          <i class="fa-solid fa-house-user"></i>
          <div>Home</div>
        </Link>
        <Link to={"/shop"} style={LinkStyle} className="navItem">
          <i class="fa-solid fa-store"></i>
          <div>Shop</div>
        </Link>
        <Link to="/about" style={LinkStyle} className="navItem">
          <i class="fa-solid fa-address-card"></i>
          <div>About</div>
        </Link>
        <Link to="/cart" style={LinkStyle} className="navItem">
          <i class="fa-solid fa-cart-shopping"></i>
          <div>Cart</div>
        </Link>

        <Link to={"/login"} style={btn}>
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
