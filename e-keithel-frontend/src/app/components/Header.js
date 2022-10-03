import React from 'react';
import '../../assets/styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import monaaz from '../../assets/images/monaaz_white.png';
import aboong from '../../assets/images/1.png';

const Header = () => {
  const content = (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={monaaz} alt="amazon" />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login">
          {/* eslint-disable-next-line */}
          <div className="header__option">
            <span className="header__optionLineOne">HelloGuest!</span>
            <span className="header__optionLineTwo">Sign In</span>
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
