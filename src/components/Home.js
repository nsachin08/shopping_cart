import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61HinPmsWSL._SX1500_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="The lean Startu"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51ax8peHlPL._SL1000_.jpg"
            rating={2}
          />

          <Product
            id="2"
            title="Laptop"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41jdvXSoeyS._SL1000_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="3"
            title="Samsung 1.5 Ton 3 Star Inverter Split AC (Copper, Convertible 5 in 1, HD Filter, 2021 Model, Floral pattern, AR18AYLYATBNNA)"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61N44JgNZjL._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="4"
            title="Samsung 1.5 Ton 3 Star Inverter Split AC (Copper, Convertible 5 in 1, HD Filter, 2021 Model, Floral pattern, AR18AYLYATBNNA)"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61N44JgNZjL._SL1500_.jpg"
            rating={3}
          />
          <Product
            id="5"
            title="Samsung 1.5 Ton 3 Star Inverter Split AC (Copper, Convertible 5 in 1, HD Filter, 2021 Model, Floral pattern, AR18AYLYATBNNA)"
            price={38.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61N44JgNZjL._SL1500_.jpg"
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="6"
            title="Samsung 1.5 Ton 3 Star Inverter Split AC (Copper, Convertible 5 in 1, HD Filter, 2021 Model, Floral pattern, AR18AYLYATBNNA)"
            price={79.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61N44JgNZjL._SL1500_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
