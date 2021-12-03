import React from "react";

export default function Card({ offer }) {
  const { img, name, discount } = offer;
  console.log(img, name);
  return (
    <div class='card' style={{ width: "18rem", margin: "25px" }}>
      <a href='https://healthandglow.com/?utm_source=vcommission&utm_medium=promo&utm_campaign=vcommission_1028_1584_v0304000091091b49663b69194c529dd19edc5d7006a9'>
        <img src={img} class='card-img-top' alt='...' />
      </a>
      <div class='card-body'>
        <h5 class='card-title text-center'>{name}</h5>
        <p class='card-text bg-danger text-white  text-center'>
          Discount: {discount}
        </p>
      </div>
    </div>
  );
}
