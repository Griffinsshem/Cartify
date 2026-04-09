import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';

// Lucide Icons
import { ShoppingBag } from "lucide-react";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">

      {/* LEFT */}
      <div className='checkout__left'>

        <img
          className="checkout__ad"
          src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1400&q=80"
          alt="banner"
        />

        <div className="checkout__sectionHeader">
          <ShoppingBag size={22} />
          <h2>Your Shopping Basket</h2>
        </div>

        <div className="checkout__items">
          {basket.map(item => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>

      </div>

      {/* RIGHT */}
      <div className="checkout__right">
        <Subtotal />
      </div>

    </div>
  );
}

export default Checkout;