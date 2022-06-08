import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/login.css";
import bgImage from "../images/bg.jpg";
import { Link } from "react-router-dom";
// import ShowModal from "../Components/ShowModal";

export default function Login() {
  const [msg, setMsg] = useState("");

  const showPass = (e) => {
    const eye = e.target;
    const passType = document.querySelector("#password");
    if (passType.getAttribute("type") === "password") {
      passType.setAttribute("type", "text");
      eye.setAttribute("class", "fa-solid fa-eye");
    } else {
      passType.setAttribute("type", "password");
      eye.setAttribute("class", "fa-solid fa-eye-slash");
    }
  };

  // LOGIN ONSUBMIT
  const loginData = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    loginMe(formData);
  };
  // Fetch
  const loginMe = async (formData) => {
    const response = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const user = await response.json();
    if (user === null || user.msg == "User not found") {
      setMsg(
        "User Not Found. Please make sure your username and password are correct",
      );
    } else {
      setMsg("User Found.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="content">
          <div className="outlet">
            <h1 className="heading">Login</h1>
            <div className="signup-with">
              <div className="line"></div>
              Login with codeBreak
            </div>

            <form className="form-group" onSubmit={loginData}>
              {msg !== "" ? <div className="msg-area">{msg}</div> : ""}
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                />
              </div>
              <div className="input-group pass">
                <label htmlFor="password">Password</label>
                <div className="pass">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                  />
                  <i onClick={showPass} class="fa-solid fa-eye-slash"></i>
                </div>
              </div>
              <input type="submit" value="Login" />
            </form>
          </div>

          <div className="signin">
            New User? <Link to={"/signup"}> Sign Up</Link>
          </div>
        </div>
        <div className="content img">
          <img src={bgImage} alt="ok" />
        </div>
      </div>
    </>
  );
}
