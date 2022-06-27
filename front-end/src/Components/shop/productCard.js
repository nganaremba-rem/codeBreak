import React from "react";
import { Link } from "react-router-dom";
import AddToCartFront from "../AddToCartFront";

export default async function productCard() {
  const products = await fetch("http://localhost:3001/getProducts");
  const productsJson = await products.json();
  return productsJson.map((item) => {
    return (
      <Link
        to={`/shop/${item.id}`}
        style={{ textDecoration: "none", color: "black" }}>
        <div
          className="product-card"
          style={{ width: "21rem", height: "20rem" }}>
          <div className="product-img">
            <img src={item.imageLink} alt="Image" loading="lazy" />
            <div className="add-to-cart" onClick={AddToCartFront(item.id)}>
              <i className="fa-solid fa-heart"></i>
            </div>
          </div>
          <div className="product-body">
            <h6 className="product-title">{item.name}</h6>
            <p className="product-price text-danger fw-bold">
              Rs. {item.price}
            </p>
          </div>
        </div>
      </Link>
    );
  });
}
