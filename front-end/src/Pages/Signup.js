import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/login.css";
import bgImage from "../images/form2.svg";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "../Components/Modal";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [modalShow, setModalShow] = React.useState(false);
  const [spinner, setSpinner] = useState(false);
  const pass = useRef();
  const cpass = useRef();

  useEffect(() => {
    if (localStorage.getItem("User")) {
      navigate("/");
    }
  }, []);

  const showPass = (e) => {
    const eye = e.target;
    const passwordInput = e.target.previousSibling;
    if (passwordInput.getAttribute("type") === "password") {
      passwordInput.setAttribute("type", "text");
      eye.setAttribute("class", "fa-solid fa-eye");
    } else {
      passwordInput.setAttribute("type", "password");
      eye.setAttribute("class", "fa-solid fa-eye-slash");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!passValidate()) {
      return;
    }
    const form = e.target;
    const formData = new FormData(form);
    // FETCH API
    submitData(formData);
  };

  const submitData = async (formData) => {
    setSpinner(true);
    const response = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });
    const res = await response.json();

    setSpinner(false);
    if (response.status === 201) {
      setModalShow(true);
    } else if (res.msg != "") {
      setMsg(res.msg);
    }
  };

  //  Password Validation
  const passValidate = () => {
    console.log("triggered");
    if (pass.current.value === "" || cpass.current.value === "") {
      setMsg("");
      return false;
    }
    if (pass.current.value !== cpass.current.value) {
      setMsg("Password not match");
      return false;
    } else {
      setMsg("");
      return true;
    }
  };

  // Email Validation
  const emailValidate = (e) => {
    fetch("http://localhost:3001/validateEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: e.target.value,
      }),
    }).then((res) => {
      console.log(res);
      if (!res.ok) {
        return setMsg("Email Already Exist");
      }
      setMsg("");
      return;
    });
  };

  return (
    <>
      <Navbar />

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
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
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input
                  required
                  onBlur={emailValidate}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                />
              </div>
              <div className="input-group add">
                <label htmlFor="address">Address</label>
                <input
                  required
                  type="text"
                  name="address"
                  id="address"
                  autoComplete="off"
                />
              </div>
              <div className="input-group ">
                <label htmlFor="address">City</label>
                <input
                  required
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="pin">PIN</label>
                <input
                  required
                  type="text"
                  name="pin"
                  id="pin"
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="address">State</label>
                <input
                  required
                  type="text"
                  name="state"
                  id="state"
                  autoComplete="off"
                />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  required
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
                    required
                    ref={pass}
                    type="password"
                    name="password"
                    id="password"
                    onBlur={passValidate}
                    autoComplete="off"
                  />
                  <i onClick={showPass} className="fa-solid fa-eye-slash"></i>
                </div>
              </div>
              <div className="input-group pass">
                <label htmlFor="cpassword">Confirm Password</label>
                <div className="pass">
                  <input
                    required
                    ref={cpass}
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    autoComplete="off"
                    onBlur={passValidate}
                  />
                  <i onClick={showPass} className="fa-solid fa-eye-slash"></i>
                </div>
              </div>
              <input type="submit" value="Sign up" />
              {spinner && (
                <span
                  className="spinner-border text-primary"
                  role={"status"}></span>
              )}
            </form>
          </div>

          <div className="signin">
            Already have an account? <Link to={"/login"}> Login</Link>
          </div>
        </div>
        <div className="content img signup sticky-top" style={{ top: "1rem" }}>
          <img src={bgImage} alt="ok" />
        </div>
      </div>
    </>
  );
}
