import React from "react";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Offers() {
  const [offers, setOffers] = useState(null);

  const getOffers = async () => {
    const result = await axios.get("http://localhost:3000/Offers");
    // console.log(result.data);
    setOffers(result.data);
  };

  useEffect(() => {
    getOffers();
  }, []);

  return (
    <div className='mt-3' style={{ backgroundColor: "#EAEAEA" }}>
      {/* <h2 className='text-center pt-4'>Today's Offers</h2> */}
      <div className='d-flex justify-content-center flex-wrap'>
        {offers && offers.map((offer) => <ProductCard offer={offer} />)}
      </div>
    </div>
  );
}
