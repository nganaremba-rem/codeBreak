import React from "react";
import ImageCard from "../Components/ImageCard";
import { Link } from "react-router-dom";

export default function FeaturedProducts() {
  const featuredProducts = () => {
    let featureProdsID = [];
    for (let i = 1; i <= 20; i++) {
      featureProdsID.push(i);
    }
    return featureProdsID.map((prod) => {
      return (
        <Link className="linkCompo" to={`/shop/${prod}`}>
          {" "}
          <ImageCard key={prod} prod={prod} />{" "}
        </Link>
      );
    });
  };
  // next btn function
  function next() {
    const imageCardClientWidth =
      document.querySelector(".imageCard").clientWidth;
    let imageScrollerOffsetWidth =
      document.querySelector(".imageScroller").offsetWidth;
    document.querySelector(".imageScroller").scrollLeft +=
      imageScrollerOffsetWidth - imageCardClientWidth;
  }
  // previous btn function
  function prev() {
    const imageCardClientWidth =
      document.querySelector(".imageCard").clientWidth;
    let imageScrollerOffsetWidth =
      document.querySelector(".imageScroller").offsetWidth;
    document.querySelector(".imageScroller").scrollLeft -=
      imageScrollerOffsetWidth - imageCardClientWidth;
  }

  // MAIN RETURN
  return (
    <section className="second">
      <h1 className="featuredProducts">Featured Products</h1>
      <div className="carouselImages">
        <button className="carouselBtn" id="prevBtn" onClick={prev}>
          <i class="fa-solid fa-angle-left" style={{ fontSize: "2rem" }}></i>
        </button>
        <div className="imageScroller">{featuredProducts()}</div>
        <button className="carouselBtn" id="nextBtn" onClick={next}>
          <i class="fa-solid fa-angle-right" style={{ fontSize: "2rem" }}></i>
        </button>
      </div>
    </section>
  );
}
