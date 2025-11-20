import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <div>
            <h1 className="home__heroText">Cartify</h1>
            <p className="home__heroSub">
              Empowering customers with reliable, high-quality products designed to elevate their lifestyle.
            </p>

            <img
              className="home__image"
              src="https://images.unsplash.com/photo-1606824722920-4c652a70f348?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHN1cGVybWFya2V0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
              alt="Home Banner"
            />
          </div>

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
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SX679_.jpg"
            />
            <Product
              id="4903850"
              title="Samsung Galaxy Watch 4 (Bluetooth, 44mm) – Silver"
              price={199.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/61Gob-M3snL._AC_SX679_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            <Product
              id="90829332"
              title="Bennet Mystic 15.6 inch Laptop Shoulder Messenger Sling Office Bag, Water Repellent Fabric for Men and Women (Blue)"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/71mEsHyzSCL._SL1000_.jpg"
            />
            <Product
              id="90829332"
              title="All the light we cannot see: The Breathtaking World Wide Bestseller Paperback"
              price={199.99}
              rating={4}
              image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            />
            <Product
              id="90829332"
              title="Samsung Galaxy Watch 4 (Bluetooth, 44mm) – Silver"
              price={199.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="90829332"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/61Gob-M3snL._AC_SX679_.jpg"
            />
            <Product
              id="90829332"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            <Product
              id="90829332"
              title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
              price={29.99}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            />
            <Product
              id="90829332"
              title="All the light we cannot see: The Breathtaking World Wide Bestseller Paperback"
              price={199.99}
              rating={4}
              image="https://images-eu.ssl-images-amazon.com/images/I/514kNkerQ0L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;