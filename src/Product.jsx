import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import MonetizationOnSharpIcon from '@mui/icons-material/MonetizationOnSharp';


function Product({ id, title, price, rating, image }) {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
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
      <div className="product__info">
        <p><strong>{title}</strong></p>

        <p className="product__price">
          <small><MonetizationOnSharpIcon /></small>
          <strong>{price}</strong>
        </p>

        {/* <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div> */}
      </div>

      <img
        src={image} className="product__image"
      />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;