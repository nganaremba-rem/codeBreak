import React from "react";

export default function RandomImage() {
  let randomImages = [];
  // just for front end development
  for (let i = 0; i < 3; i++) {
    randomImages.push(i);
  }
  // to render the image function
  function generateRandomImage() {
    return randomImages.map((image) => {
      return (
        <img
          key={image}
          src="https://picsum.photos/150"
          alt="randomImage"
          style={{ borderRadius: "2rem" }}
        />
      );
    });
  }

  return <div className="randomImages">{generateRandomImage()}</div>;
}
