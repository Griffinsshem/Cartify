import React from "react";
import "./Product.css";

function Product() {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p>Unisex Retro Low-Top Sneakers – Street Style Casual Wear Black</p>
          <p className="product__price">
            <small>$</small>
            <strong>29.99</strong>
          </p>
          <div className="product__rating">
            ⭐⭐⭐⭐⭐
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1543508282-6319a3e2621f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500"
          alt="Product"
        />

        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;