import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import "../CSS/Cart.css";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../Components/CartItem";

export default function Cart() {
  const Navigate = useNavigate();

  // If not login
  if (localStorage.getItem("User") == null) {
    Navigate("/login");
  }
  //get email
  const email = localStorage.getItem("User");
  const [myUser, setMyUser] = useState([]);
  const [myData, setMyData] = useState({});
  //get carts and userdata
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetch("http://localhost:3001/getUserData/carts", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        });
        const arrData = await data.json();
        setMyUser(arrData);
        // user data
        const userData = await fetch("http://localhost:3001/getUserData/", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
          }),
        });
        const user = await userData.json();
        setMyData(user);
        console.log(user);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div
        className="carts  shadow rounded-3 p-4 position-relative bg-white mt-4"
        style={{ maxHeight: "30rem", overflow: "auto" }}>
        <div className="head d-flex bg-white align-items-center justify-content-between">
          <h2>Total Products: {Object.keys(myUser).length}</h2>
          <Link to={"/shop/1/buyNow"}>
            <button className="btn btn-primary">Proceed to checkout</button>
          </Link>
        </div>
        <table className="table table-hover position-relative">
          <thead className=" top-0">
            <tr className="text-white bg-secondary">
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>TOTAL</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(myUser).length == 0 ? (
              <td colSpan={5}>
                <h1 className="text-center p-5 text-danger">
                  Your cart is empty!
                </h1>
              </td>
            ) : (
              myUser.map((data, index) => {
                return (
                  <CartItem
                    id={data.id}
                    price={data.price}
                    index={index}
                    imageLink={data.imageLink}
                    key={data.id}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
