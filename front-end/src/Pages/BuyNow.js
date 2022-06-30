import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import { Link, useParams } from "react-router-dom";
import AddressModal from "../Components/AddresssModal";

export default function BuyNow() {
  const params = useParams();
  const [myProducts, setMyProducts] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [myDetail, setMyDetail] = useState({});
  // const [renderDetail, setRenderDetail] = useState(<></>);
  const [subtotal, setSubtotal] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const total = [];

  const getProducts = async () => {
    // When it gets many id i.e the cart
    if (params.id === "cart") {
      const products = await fetch("http://localhost:3001/getUserData/carts", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: localStorage.getItem("User"),
        }),
      });
      const productsJson = await products.json();
      return setAllProduct(productsJson);
    }

    // When It gets only one id
    const products = await fetch("http://localhost:3001/buyNow/" + params.id);
    const productsJson = await products.json();
    return setAllProduct(productsJson);
  };

  const getUserData = async () => {
    const userData = await fetch("http://localhost:3001/getUserData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("User"),
      }),
    });
    const userDataJson = await userData.json();
    setMyDetail(userDataJson);
  };

  useEffect(() => {
    getProducts();
    getUserData();
    const debit = document.querySelector("#debit");
    const upi = document.querySelector("#upi");
    const cod = document.querySelector("#cod");
    const payNow = document.querySelector("#payNow");

    payNow.addEventListener("click", (e) => {
      if (debit.checked || upi.checked || cod.checked) {
        return;
      }
      alert("Please select at least one payment method");
      e.preventDefault();
    });
  }, []);

  useEffect(() => {
    setMyProducts(
      allProduct.map((product) => {
        const totalPrice =
          product.price * (product?.quantity || params?.quantity);
        total.push(totalPrice);
        return (
          <tr key={product.id}>
            <td className="w-50">{product.name}</td>
            <td>Rs. {product.price}</td>
            <td>{product.quantity || params.quantity}</td>
            <td>{product.id}</td>
            <td>
              Rs. {product.price * (product?.quantity || params?.quantity)}
            </td>
          </tr>
        );
      }),
    );
    setSubtotal(() => total.reduce((prev, current) => prev + current, 0));
  }, [allProduct]);

  const modalProp = (data) => {
    setModalShow(data);
  };
  const detailProp = (data) => {
    setMyDetail(data);
  };

  const handleSelect = (e) => {
    const parent = e.target.closest(".address-component");
    const allAddress = document.querySelectorAll(".address-component");
    allAddress.forEach((add) => {
      add.classList.remove("bg-success");
      add.removeAttribute("id");
    });
    parent.classList.add("bg-success");
    parent.setAttribute("id", "active");
  };

  const handleDelete = async (index) => {
    const response = await fetch("http://localhost:3001/deleteAddress", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: localStorage.getItem("User"),
        index,
      }),
    });
    if (response.ok) {
      return getUserData();
    }
  };

  return (
    <>
      <Navbar></Navbar>
      <AddressModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        handleResponse={modalProp}
        handleDetail={detailProp}
      />
      <div className="main-wrapper mt-3 mb-4 d-flex justify-content-center ">
        <div className="orders shadow rounded-3 p-4 w-100">
          <h4
            className="bg-info p-4 text-white"
            style={{ borderRadius: "3rem" }}>
            Summary
          </h4>
          <table className="table mt-4 ">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Order ID</th>
                <th>Amount</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myProducts}

              <tr>
                <td colSpan={100}>
                  <h4>
                    <span className="text-muted">Subtotal:</span>
                    <span className="text-danger"> Rs. {subtotal}</span>
                  </h4>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="delivery-address mt-5">
            <h4
              className="bg-warning p-4 text-dark"
              style={{ borderRadius: "3rem" }}>
              Delivery Address
            </h4>
            <div
              className="delivery-body-wrapper"
              style={{ marginLeft: "3rem" }}>
              <div
                className="addresses d-flex gap-2"
                style={{ width: "100%", overflow: "auto" }}>
                {Object.keys(myDetail).length == 0
                  ? ""
                  : myDetail.Address.map((add, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            " address-component position-relative bg-secondary text-white p-4 rounded-3"
                          }
                          style={{ cursor: "pointer" }}
                          onClick={handleSelect}>
                          {index != 0 && (
                            <button
                              onClick={() => handleDelete(index)}
                              className="btn-close btn-close-white position-absolute"
                              style={{
                                top: ".2rem",
                                right: ".1rem",
                                fontSize: ".6rem",
                              }}></button>
                          )}

                          <div className="name fw-bold">
                            {add.name || myDetail.Name}
                          </div>
                          <div className="phone-no">
                            {add.phone || myDetail.PhoneNo}
                          </div>
                          <div className="address">
                            <div className="street">{add.address}</div>
                            <div className="pin-code">{add.pin}</div>
                            <div className="state">{add.state}</div>
                          </div>
                        </div>
                      );
                    })}
              </div>
              <button
                className="btn btn-secondary mt-5"
                onClick={() => setModalShow(true)}>
                Add New Delivery Address
              </button>
            </div>
          </div>
          <h4
            className="mt-5 bg-success p-4 text-white"
            style={{ borderRadius: "3rem" }}>
            Payment
          </h4>
          <div
            className="payments d-flex flex-column gap-3"
            style={{ marginLeft: "3rem" }}>
            <div className="payment-method  d-flex gap-3 align-items-center">
              <input type="radio" name="payment" id="debit" value={"debit"} />
              <label htmlFor="debit">Add Debit/Credit/ATM Card</label>
            </div>
            <div className="payment-method  d-flex gap-3 align-items-center">
              <input type="radio" name="payment" id="upi" value={"upi"} />
              <label htmlFor="upi">UPI</label>
              <input
                className="form-control w-25"
                type="text"
                name="upi"
                id="upi"
                placeholder="Enter UPI ID"
              />
            </div>
            <div className="payment-method d-flex gap-3 align-items-center">
              <input type="radio" name="payment" id="cod" value={"cod"} />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
          </div>
          <Link to={"./confirmationPage"}>
            <button
              className="btn btn-danger w-25 p-3 mt-4"
              style={{ marginLeft: "3rem" }}
              id="payNow">
              Pay Now
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
