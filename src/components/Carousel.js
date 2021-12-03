import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Carousel() {
  const [images, setImages] = useState(null);

  const getImages = async () => {
    const result = await axios.get("http://localhost:3000/images");
    setImages(result.data);
    // console.log(result.data[0].url);
  };

  useEffect(() => {
    getImages();
    // console.log(images);
  }, []);
  return (
    images && (
      <div
        id='carouselExampleControls'
        class='carousel slide'
        data-bs-ride='carousel'
      >
        <div class='carousel-inner'>
          <div class='carousel-item active'>
            <img
              src={images[0].url}
              class='d-block w-100'
              alt='... '
              style={{ height: "600px" }}
            />
          </div>
          <div class='carousel-item'>
            <img
              src={images[1].url}
              class='d-block w-100 '
              alt='...'
              style={{ height: "600px" }}
            />
          </div>
          <div class='carousel-item'>
            <img
              src={images[2].url}
              class='d-block w-100 '
              alt='...'
              style={{ height: "600px" }}
            />
          </div>
        </div>
        <button
          class='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleControls'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
    )
  );
}
