import React from "react";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  return (
    <div>
      <div className="product">
        <div className="product__info">
          <p><strong>{title}</strong></p>
          <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>⭐</p>
              ))}
          </div>
        </div>

        <img
          src={image}
        />

        <button>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;