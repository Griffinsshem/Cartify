import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">

        {/* HERO SECTION */}
        <div className="home__hero">
          <img
            className="home__image"
            src="https://images.unsplash.com/photo-1606824722920-4c652a70f348?auto=format&fit=crop&w=1600&q=80"
            alt="Home Banner"
          />

          {/* <div className="home__overlay"></div> */}

          <div className="home__heroContent">
            <h1 className="home__heroText">Cartify</h1>
            <p className="home__heroSub">
              Premium products. Seamless shopping. Elevated lifestyle.
            </p>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SX679_.jpg"
          />
          <Product
            id="4903850"
            title="Samsung Galaxy Watch 4 (Bluetooth, 44mm)"
            price={199.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd Gen)"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61Gob-M3snL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="3254354345"
            title="Apple iPad Pro 12.9-inch"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="90829332"
            title="Bennet Laptop Messenger Bag"
            price={11.9}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
          />
          <Product
            id="90829333"
            title="All The Light We Cannot See"
            price={25.99}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
          />
          <Product
            id="90829334"
            title="Samsung Galaxy Watch 4"
            price={199.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>

      </div>
    </div>
  );
}

export default Home;