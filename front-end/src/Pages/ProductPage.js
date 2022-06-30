import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AddToCartFront from "../Components/AddToCartFront";
import { Link, useParams } from "react-router-dom";

export default function ProductPage() {
  const [quantityValue, setQuantityValue] = useState(1);

  const [myProduct, setMyProduct] = useState({});
  const id = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);

    async function fetchProduct() {
      try {
        const data = await fetch("http://localhost:3001/getProducts/" + id.id);
        const obj = await data.json();
        console.log(obj);
        return setMyProduct(obj);
      } catch (e) {
        console.log(e);
      }
    }
    fetchProduct();
  }, []);

  const handleQuantity = (e) => {
    setQuantityValue(e.target.value);
  };
  return (
    <>
      <Navbar />
      <div className="main-wrapper mt-3 d-flex p-3 mb-4 justify-content-center gap-5">
        <div
          className="productNormalImage"
          style={{ width: "45rem", overflow: "hidden" }}>
          <img
            src={myProduct.imageLink}
            style={{
              width: "100%",
              objectFit: "cover",
              transform: "scale(.8)",
            }}
            alt=""
          />
        </div>
        <div
          className=" product-details shadow p-lg-5 mb-5 bg-white"
          style={{
            width: "max-content",
            borderRadius: "2rem",
          }}>
          <h3 className="product-name m-lg-0">{myProduct.name}</h3>
          <h4 className="product-price text-danger">Rs. {myProduct.price}</h4>
          <div className="quantity d-flex align-items-center gap-3">
            <label htmlFor="quantity">Quantity</label>
            <select
              className="form-control"
              style={{ width: "5rem" }}
              name="quantity"
              id="quantity"
              defaultValue={"1"}
              onChange={handleQuantity}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div className="d-flex flex-column gap-2 m-3">
            <button
              onClick={AddToCartFront(id, quantityValue)}
              className="addToCart form-control btn btn-dark text-white p-3 fw-bold rounded-pill"
              style={{ verticalAlign: "middle" }}>
              Add to Cart
            </button>
            <Link to={`./${quantityValue}/buyNow/`}>
              <button className="buy-now btn form-control btn-danger text-white fw-bold p-3 rounded-pill">
                Buy Now
              </button>
            </Link>
          </div>
          <div className="product-info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat,
            nihil?
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
