import './App.css';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';

function App() {
  return (
    <div className="App">

      <div className="header__logo">
        <LocalGroceryStoreIcon className="header__logoImage" fontSize="large" />
        <h2 className="header__logoTitle">Cartify</h2>
      </div>

      <div className="header__search">
        <input type="text" className="header__searchInput" placeholder="Search for products..." />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">

        <div className="nav__item">
          <span className="nav__itemLineOne">Hello Guest</span>
          <span className="nav__itemLineTwo">Sign in</span>
        </div>

        <div className="nav__item">
          <span className="nav__itemLineOne">Your</span>
          <span className="nav__itemLineTwo">Cart</span>
        </div>

        <div className="nav__item">
          <ShoppingBasketIcon />
          <span className="nav__itemLineTwo">0</span>
        </div>


      </div>
    </div>
  );
}

export default App;
