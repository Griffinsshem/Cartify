import React from 'react';
import './Header.css';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';

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
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="header__logo">
          <LocalGroceryStoreIcon className="header__logoImage" fontSize="large" />
          <h2 className="header__logoTitle">Cartify</h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" placeholder="Search for products..." />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"} style={{ textDecoration: "none" }}>
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

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemLineTwo nav__basketCount">{basket.length}</span>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Header;