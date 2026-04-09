import React from "react";
import "./Subtotal.css";
import { NumericFormat } from 'react-number-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

// Lucide Icons
import { Gift, CreditCard } from "lucide-react";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">

      <NumericFormat
        renderText={(value) => (
          <>
            <p className="subtotal__text">
              Subtotal ({basket.length} items)
            </p>

            <h2 className="subtotal__price">${value}</h2>

            <label className="subtotal__gift">
              <input type="checkbox" />
              <Gift size={16} />
              This order contains a gift
            </label>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="subtotal__button">
        <CreditCard size={18} />
        Proceed to Checkout
      </button>

    </div>
  );
}

export default Subtotal;