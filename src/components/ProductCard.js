import React from 'react'

export default function ProductCard() {
    return (
  <div className="card bg-secondary" style={{width:"18rem",marginLeft:"25px"}}>
  <img src="https://m.media-amazon.com/images/I/71wxlqloHHL._SX522_.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-white">Cadbury Celebration</h5>
    <a href="#" className="btn btn-primary">Buy Now</a>
  </div>
</div>
    )
}
