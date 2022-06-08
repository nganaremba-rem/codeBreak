import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/login.css";
import bgImage from "../images/bg.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
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

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // FETCH API
    submitData(formData);
  };

  const submitData = async (formData) => {
    const response = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (response.status === 201) {
      setMsg("Sign Up Success. You can now go to Login Page");
      navigate("/login");
    } else {
      setMsg("Please fill up all the required fields");
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="content">
          <div className="outlet">
            <h1 className="heading">Sign Up</h1>
            <div className="signup-with">
              <div className="line"></div>
              Sign up with codeBreak
            </div>
            <form className="form-group" onSubmit={submitForm}>
              {msg !== "" ? <div className="msg-area">{msg}</div> : ""}
              <div className="input-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" autoComplete="off" />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                />
              </div>
              <div className="input-group add">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  minLength={10}
                  maxLength={12}
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
              <input type="submit" value="Sign up" />
            </form>
          </div>

          <div className="signin">
            Already have an account? <Link to={"/login"}> Login</Link>
          </div>
        </div>
        <div className="content img">
          <img src={bgImage} alt="ok" />
        </div>
      </div>
    </>
  );
}
