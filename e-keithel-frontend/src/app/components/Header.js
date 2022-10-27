import React, { useState, useEffect } from 'react';
import '../../assets/styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import monaaz from '../../assets/images/monaaz_black.png';
import aboong from '../../assets/images/1.png';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../api/authSlice';
import { useGetProductsQuery } from '../api/productListSlice';
import { getSearchResult } from '../api/searchSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth);
  const basket = useSelector((state) => state.basket.basket);
  // console.log('basket: ', basket);

  // useEffect(() => {
  //   dispatch({ type: 'SEARCH_ITEM', item: search });
  // });

  const handleAuthentication = () => {
    if (user.user) {
      dispatch(logOut());
      navigate('/login');
    }
  };

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const { data: productList, isLoading: isLoadingProduct } =
    useGetProductsQuery();

  // const productList = useSelector(
  //   (state) => state.persistedReducer.productListReducer.productList.data
  // );
  useEffect(() => {
    const searchResults = productList.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    // console.log('search results: ', searchResults);
    setSearchResults(searchResults);
    dispatch(getSearchResult(searchResults));
    navigate('/search');
  }, [search]);

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
        <input
          className="header__searchInput"
          id="search"
          type="text"
          role="searchbox"
          placeholder="Search products"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="header__searchIcon">
          <SearchIcon />
        </button>
      </form>
      <div className="header__nav">
        <Link to={!user.isLoggedIn && '/login'}>
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {user.isLoggedIn ? user.user.email : 'Guest!'}
            </span>
            <span className="header__optionLineTwo">
              {user.isLoggedIn ? 'Sign Out' : 'Sign In!'}
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
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
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
