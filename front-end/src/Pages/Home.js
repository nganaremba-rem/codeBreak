import React from "react";
import Footer from "../Components/Footer";
import AboutComponent from "../Components/AboutComponent";
import ImageGridComponent from "../Components/Home/ImageGridComponent";
import Newsletter from "../Components/Home/Newsletter";
import FeaturedProducts from "../Components/Home/FeaturedProducts";
import Tagline from "../Components/Home/Tagline";
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
