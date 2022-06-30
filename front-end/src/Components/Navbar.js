import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
// import { NavHashLink } from "react-router-hash-link";

export default function Navbar() {
  const Navigate = useNavigate();

  const [myDetail, setMyDetail] = useState("");
  const mail = {
    user: localStorage.getItem("User"),
  };

  async function getUser() {
    if (mail.user) {
      const data = await fetch("http://localhost:3001/user", {
        method: "post",
        body: JSON.stringify(mail),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userData = await data.json();
      setMyDetail(userData);
    }
  }
  getUser();

  const [dropdown, setDropdown] = useState(false);
  const DropDown = (e) => {
    if (dropdown && !e.target.closest("[data-drops]")) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  document.addEventListener("click", (e) => {
    if (!e.target.closest("[data-dropdown]")) {
      setDropdown(false);
    }
  });
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

  const [user, setUser] = useState("");

  const logoutHandle = () => {
    localStorage.removeItem("User");
    setUser("");
    Navigate("/login");
  };

  return (
    <nav style={{ zIndex: "100" }}>
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
          <i className="fa-solid fa-house-user"></i>
          <div>Home</div>
        </Link>
        <Link to={"/shop"} style={LinkStyle} className="navItem">
          <i className="fa-solid fa-store"></i>
          <div>Shop</div>
        </Link>
        <Link to="/about" style={LinkStyle} className="navItem">
          <i className="fa-solid fa-address-card"></i>
          <div>About</div>
        </Link>
        <Link to="/cart" style={LinkStyle} className="navItem">
          <i className="fa-solid fa-cart-shopping"></i>
          <div>Cart</div>
        </Link>

        {localStorage.getItem("User") || user !== "" ? (
          <div
            data-dropdown
            className=" navItem btn user d-flex flex-column align-items-center position-relative"
            onClick={DropDown}>
            <div className="profileWrapper" style={LinkStyle}>
              <i className="fa-solid fa-user mb-2"></i>
              <div
                className="username"
                style={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  width: "5rem",
                  whiteSpace: "nowrap",
                }}>
                Profile
              </div>
            </div>
            {dropdown && (
              <div
                data-drops
                className=" position-absolute d-flex flex-column align-items-md-start gap-2"
                style={{
                  right: "0",
                  top: "110%",
                  background: "#dbdbdb",
                  padding: "1rem 2rem",
                  zIndex: "101",
                  borderRadius: ".5rem",
                }}>
                <div
                  className="name"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "10rem",
                  }}>
                  {myDetail.name}
                </div>
                <div
                  className="email text-muted"
                  style={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: "10rem",
                  }}>
                  {myDetail.email}
                </div>
                <button className="btn btn-danger" onClick={logoutHandle}>
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to={"/login"} style={btn}>
            <div className="cart">
              <div className="cartIcon">
                <i className="fa-solid fa-right-to-bracket"></i>
                {/* <FontAwesomeIcon icon="cart-shopping" /> */}
                <div className="cartText">Login</div>
              </div>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}
