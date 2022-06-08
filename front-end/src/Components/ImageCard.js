import React from "react";

export default function ImageCard({ prod }) {
  return (
    <div className="imageCard">
      <div className="imageWrapper">
        <img src={`https://loremflickr.com/300/300?random=${prod}`} alt="" />
      </div>
      <div className="productDetails">
        <div className="productName">Product Name</div>
        <div className="price">Rs 4000</div>
      </div>
    </div>
  );
}
