import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://tse4.mm.bing.net/th?id=OIP.RdNN9GEvTFDohpXmSeeplwHaGd&pid=Api&P=0&h=220"
        />
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card-container">
      <div className="res-image">
        <img src="https://tse3.explicit.bing.net/th?id=OIP.pg1I4TPfxsWIuC8G4pOdsAHaF_&pid=Api&P=0&h=220" />
      </div>
      <div className="res-info">
        <p>Name: Apna Dhaba</p>
        <p>Rating: ⭐⭐⭐⭐</p>
        <p>Cusines: Burger, Salad, Fries, Pasta, Badam-ragda</p>
      </div>
    </div>
  );
};

const Seacrh = () => {
  return <div className="search">Search</div>;
};
const Body = () => {
  return (
    <div>
      <Seacrh />
      <div className="res-card-wrapper">
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
