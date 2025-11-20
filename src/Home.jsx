import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div>
      <div className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images.unsplash.com/photo-1606824722920-4c652a70f348?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHN1cGVybWFya2V0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
            alt="Home Banner"
          />

          <div className="home__row">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>

          <div className="home__row">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>

          <div className="home__row">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;