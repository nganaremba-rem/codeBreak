import React, { useEffect, useState } from "react";

export default function RandomImage() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    async function getImage() {
      const prodsPromise = await fetch("http://localhost:3001/getProducts");
      const prodsJson = await prodsPromise.json();
      const randomNumbers = [];
      for (let i = 0; i < 3; i++)
        randomNumbers.push(
          Math.floor(Math.random() * Object.keys(prodsJson).length),
        );
      const prodArrObj = randomNumbers.map((rand) => prodsJson[rand]);
      const myImg = prodArrObj.map((obj) => {
        return (
          <div
            className="image-wrapper"
            style={{
              width: 150,
              height: 150,
              overflow: "hidden",
              borderRadius: "3rem",
            }}>
            <img
              src={obj.imageLink}
              alt={obj.name}
              key={obj.id}
              style={{
                width: "100%",
                height: "100%",
                aspectRatio: "16/9",
                objectFit: "cover",
              }}
            />
          </div>
        );
      });
      setImages(myImg);
    }
    getImage();
  }, []);

  return <div className="randomImages">{images.map((image) => image)}</div>;
}
