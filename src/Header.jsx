import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

// Lucide Icons
import { ShoppingCart, Search, Store } from "lucide-react";

function Header() {
  const [{ basket, user }] = useStateValue();

  const getIntials = (email) => {
    if (!email) return "Guest";
    const name = email.split("@")[0];
    const initials = name
      .split(/[^A-Za-z]/)
      .filter(Boolean)
      .map((word) => word[0].toUpperCase())
      .join("");
    return initials.slice(0, 2);
  };

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">

      {/* LOGO */}
      <Link to="/" className="header__logo">
        <Store size={28} />
        <h2>Cartify</h2>
      </Link>

      {/* SEARCH */}
      <div className="header__search">
        <Search className="header__searchIcon" size={18} />
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search products..."
        />
      </div>

      {/* NAV */}
      <div className="header__nav">

        <Link to={!user && "/login"} className="header__link">
          <div onClick={handleAuth} className="nav__item">
            <span className="nav__itemLineOne">
              Hello {user ? getIntials(user.email) : "Guest"}
            </span>
            <span className="nav__itemLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Cart</span>
        </div>

        <Link to="/checkout" className="header__link">
          <div className="nav__itemBasket">
            <ShoppingCart size={22} />
            <span className="nav__basketCount">{basket.length}</span>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;