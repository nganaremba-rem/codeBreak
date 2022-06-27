import React from "react";

export default function cartItem(props) {
  const handleTotal = (index) => {
    let quanti = document.querySelectorAll("[data-quan]")[index];
    quanti = parseInt(quanti.value);
    let price = document.querySelectorAll("[data-price")[index];
    price = parseInt(price.textContent);
    const total = document.querySelectorAll("[data-total]")[index];
    total.textContent = price * quanti;
  };

  const deleteItem = async (itemId) => {
    return fetch("http://localhost:3001/deleteCartItem", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: itemId,
        email: localStorage.getItem("User"),
      }),
    }).then((res) => (window.location = "/cart"));
  };
  return (
    <tr id={props.id}>
      <td
        style={{
          maxWidth: "10rem",
          overflow: "hidden",
        }}>
        <div
          className="img"
          style={{
            width: "7rem",
            height: "7rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}>
          <img
            src={props.imageLink}
            alt=""
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
        <marquee
          className="product-name"
          style={{
            maxWidth: "10rem",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}>
          {props.name}
        </marquee>
      </td>
      <td>
        Rs. <span data-price>{props.price}</span>
      </td>
      <td>
        <input
          data-quan
          className="form-control"
          type="number"
          name="quantity"
          id="quantity"
          style={{ maxWidth: "6rem" }}
          defaultValue={1}
          onChange={() => handleTotal(props.index)}
          min={1}
          max={10}
        />
      </td>
      <td>
        Rs.
        <span data-total name="total" id="total">
          {props.price}
        </span>
      </td>
      <td>
        <button onClick={() => deleteItem(props.id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
