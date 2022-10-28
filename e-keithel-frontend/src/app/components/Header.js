import React, { useState, useEffect } from 'react';
import '../../assets/styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import monaaz from '../../assets/images/monaaz_darkblue.png';
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

  const handleAuthentication = () => {
    if (user.user) {
      dispatch(logOut());
      navigate('/login');
    }
  };

  const [search, setSearch] = useState('');

  const { data: productList, isLoading: isLoadingProduct } =
    useGetProductsQuery();

  useEffect(() => {
    const searchResults = productList.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );

    if (search !== '') {
      dispatch(getSearchResult(searchResults));
      navigate('/search');
    }
  }, [search]);

  const [show, setshow] = useState(false);
  const content = (
    <nav className="2xl:container 2xl:mx-auto w-full bg-white">
      <div className={`${show ? 'hide' : 'block'} header`}>
        <Link to="/">
          <img className="header__logo" src={monaaz} alt="mazoon" />
        </Link>
        <form className="header__search">
          <select className="header__select classic">
            <option>All</option>
            <option>Arts & Crafts</option>
            <option>Personal Care</option>
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
            <option>Home Improvements</option>
            <option>Toys & Games</option>
            <option>Video Games</option>
            <option>Women's Fashion</option>
          </select>
          <div className="input">
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
          </div>
        </form>
        <div className="header__nav">
          <Link to={!user.isLoggedIn && '/login'}>
            <div
              className="header__option hide__item"
              onClick={handleAuthentication}
            >
              <span className="header__optionLineOne">
                Hello {user.isLoggedIn ? user.user.email : 'Guest!'}
              </span>
              <span className="header__optionLineTwo">
                {user.isLoggedIn ? 'Sign Out' : 'Sign In!'}
              </span>
            </div>
          </Link>
          <div className="header__option hide__item">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <div className="header__optionLineTwo header__basketCount">
                {basket.length}
              </div>
            </div>
          </Link>
          <div className="header__option hide__item">
            <Avatar alt="Remy Sharp" src={aboong} />
          </div>
        </div>
      </div>

      {/* For large and Medium-sized Screen */}
      {/* Burger Icon */}
      <div
        id="bgIcon"
        onClick={() => setshow(!show)}
        className={`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hide__menu menu justify-center items-center  cursor-pointer`}
      >
        <svg
          className={`${show ? 'hidden' : ''} `}
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className=" transform duration-150"
            d="M4 6H20"
            stroke="#1F2937"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12H20"
            stroke="#1F2937"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className=" transform duration-150"
            d="M4 18H20"
            stroke="#1F2937"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className={`${show ? 'block' : 'hidden'}`}
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 6L6 18"
            stroke="#1F2937"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 6L18 18"
            stroke="#1F2937"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* Mobile and small-screen devices (toggle Menu) */}
      <div
        id="MobileNavigation"
        className={`${show ? 'block' : 'hidden'} menu__modal mt-4 mx-auto`}
      >
        <div className="">
          <Avatar alt="Remy Sharp" src={aboong} />
          <p className="menu__modal__heading">
            Hello, {user.isLoggedIn ? `${user.user.email}!` : 'Guest!'}
          </p>
        </div>
        <p className="menu__modal__item">Your Profile</p>
        <p className="menu__modal__item">Your Orders</p>
        <p className="menu__modal__item">Buy Again</p>

        <div className="flex flex-col gap-4 mt-10 pt-10 w-80 mx-auto ">
          {user.isLoggedIn ? (
            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 duration-100 border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
              Sign Out
            </button>
          ) : (
            <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
              Login/Signup
            </button>
          )}
        </div>
      </div>
    </nav>
  );
  return content;
};

export default Header;
