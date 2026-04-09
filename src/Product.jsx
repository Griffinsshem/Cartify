import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

// Lucide Icons
import { DollarSign, ShoppingCart } from "lucide-react";

function Product({ id, title, price, rating, image }) {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        title: title,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">

      <img
        src={image}
        className="product__image"
        alt={title}
      />

      <div className="product__info">
        <p className="product__title">{title}</p>

        <div className="product__price">
          <DollarSign size={16} />
          <strong>{price}</strong>
        </div>
      </div>

      <button onClick={addToBasket} className="product__button">
        <ShoppingCart size={16} />
        Add to Cart
      </button>

    </div>
  );
}

export default Product;