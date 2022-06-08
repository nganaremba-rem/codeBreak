import React from "react";
import Footer from "../Components/Footer";
import AboutComponent from "../Components/AboutComponent";
import ImageGridComponent from "../Components/ImageGridComponent";
import Newsletter from "../Components/Newsletter";
import FeaturedProducts from "../Components/FeaturedProducts";
import Tagline from "../Components/Tagline";
import Navbar from "../Components/Navbar";
import "../CSS/home.css";

export default function Home() {
  return (
    <div className="mainContainer">
      <main>
        <div className="backgroundImage">
          <div className="backdrop">
            <Navbar />
            <Tagline />
          </div>
        </div>
        <FeaturedProducts />
        <Newsletter />
        <ImageGridComponent />
        <AboutComponent />
        <Footer />
      </main>
    </div>
  );
}
