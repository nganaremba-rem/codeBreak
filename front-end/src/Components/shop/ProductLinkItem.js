import React from "react";
import { Link } from "react-router-dom";

export default function productItem({ item }) {
  const addToCart = async (e) => {
    e.preventDefault();
    const myMail = localStorage.getItem("User");
    console.log(item.id, myMail);
    const data = await fetch("http://localhost:3001/addToCart", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: item.id,
        email: myMail,
        quantity: 1,
      }),
    });
    if (data.ok) {
      alert("Added");
    }
  };

  return (
    <Link
      to={`/shop/${item.id}`}
      style={{ textDecoration: "none", color: "black" }}>
      <div className="product-card" style={{ width: "21rem", height: "20rem" }}>
        <div className="product-img">
          <img src={item.imageLink} alt="Image" loading="lazy" />
          <div className="add-to-cart" onClick={addToCart}>
            <i className="fa-solid fa-heart"></i>
          </div>
        </div>
        <div className="product-body">
          <h6 className="product-title">{item.name}</h6>
          <p className="product-price text-danger fw-bold">Rs. {item.price}</p>
        </div>
      </div>
    </Link>
  );
}
