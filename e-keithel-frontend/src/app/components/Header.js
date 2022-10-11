import React from 'react';
import '../../assets/styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import monaaz from '../../assets/images/monaaz_black.png';
import aboong from '../../assets/images/1.png';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/reducers/login/authActions';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector(
    (state) => state.persistedReducer.loginReducer
    // (state) => state.rootReducer.loginReducer
    // (state) => state.rootReducer.auth.currentUser.status.data
  );
  console.log('user: ', user.loggedIn);

  const handleAuthentication = () => {
    console.log('handle signout');
    if (user.currentUser) {
      dispatch(logoutUser());
      navigate('/login');
    }
  };

  const content = (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={monaaz} alt="amazon" />
      </Link>
      <form className="header__search">
        <select className="header__select">
          <option>All</option>
          <option>Arts & Crafts</option>
          <option>Beauty & Personal Care</option>
          <option>Books</option>
          <option>Children's Fashion</option>
          <option>Computers</option>
          <option>Digital Music</option>
          <option>Electronics</option>
          <option>Home & Kitchen</option>
          <option>Men's Fashion</option>
          <option>Movie & TV</option>
          <option>Pet Supplies</option>
          <option>Sports & Outdoors</option>
          <option>Software</option>
          <option>Tools & Home Improvements</option>
          <option>Toys & Games</option>
          <option>Video Games</option>
          <option>Women's Fashion</option>
        </select>
        <input className="header__searchInput" type="text" />
        <button className="header__searchIcon">
          <SearchIcon />
        </button>
      </form>
      <div className="header__nav">
        <Link to={!user.loggedIn && '/login'}>
          {/* eslint-disable-next-line */}
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello{' '}
              {user.loggedIn ? user.currentUser.status.data.email : 'Guest!'}
            </span>
            <span className="header__optionLineTwo">
              {user.loggedIn ? 'Sign Out' : 'Sign In!'}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
        <div className="header__option">
          <Avatar alt="Remy Sharp" src={aboong} />
        </div>
      </div>
    </div>
  );
  return content;
};

export default Header;
