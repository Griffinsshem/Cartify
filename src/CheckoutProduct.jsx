import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

// Lucide Icons
import { Star, Trash2 } from "lucide-react";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">

      <img src={image} alt={title} className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <strong>${price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i) => (
            <Star key={i} size={16} className="star" />
          ))}
        </div>

        <button onClick={removeFromBasket} className="checkoutProduct__button">
          <Trash2 size={16} />
          Remove
        </button>
      </div>

    </div>
  );
}

export default CheckoutProduct;