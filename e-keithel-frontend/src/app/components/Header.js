import React, { useState, useEffect } from 'react';
import '../../assets/styles/Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar } from '@mui/material';
import monaaz from '../../assets/images/monaaz_darkblue.png';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../api/authSlice';
import { useGetProductsQuery } from '../api/productListSlice';
import { getSearchResult } from '../api/searchSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [show, setshow] = useState(false);

  const user = useSelector((state) => state.auth);
  const basket = useSelector((state) => state.basket.basket);

  const handleAuthentication = () => {
    if (user.user) {
      dispatch(logOut());
      navigate('/login');
    } else if (!user.user) {
      navigate('/login');
    }
  };

  const {
    data: productList,
    isLoading: isLoadingProduct,
    isSuccess: isSuccessProduct,
  } = useGetProductsQuery();

  let content;

  if (isLoadingProduct) content = <h5>Loading...</h5>;

  // useEffect(() => {
  //   if (isSuccessProduct) {
  //     const searchResults = productList.filter((product) =>
  //       product.title.toLowerCase().includes(search.toLowerCase())
  //     );

  //     if (search !== '') {
  //       dispatch(getSearchResult(searchResults));
  //       navigate('/search');
  //     }
  //   }
  // }, [search]);

  const handleSelect = (e) => {
    e.preventDefault();
    navigate(`/products/${e.target.value}`);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (isSuccessProduct) {
      const searchResults = productList.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );

      if (search !== '') {
        dispatch(getSearchResult(searchResults));
        navigate('/search');
        setSearch('');
      }
    }
  };

  if (isSuccessProduct) {
    content = (
      <nav className="2xl:container 2xl:mx-auto w-full bg-white">
        <div className={`${show ? 'hide' : 'block'} header `}>
          <Link to="/">
            <img className="header__logo" src={monaaz} alt="mazoon" />
          </Link>
          <form className="header__search">
            <select onChange={handleSelect} className="header__select classic">
              {/* <option onClick={handleSelect}>All</option> */}
              <option value={0}>All</option>

              <option value={1}>Electronics</option>
              <option value={2}>Computers</option>
              <option value={3}>Personal Care</option>
              <option value={4}>Fashions</option>
              <option value={5}>Software</option>
              <option value={6}>Toys & Games</option>
              <option value={7}>Home & Kitchen</option>
              <option value={8}>Beauty and Care</option>
              <option value={9}>Miscellaneous</option>
            </select>
            <form className="input" onSubmit={handleSearch}>
              <input
                className="header__searchInput"
                id="search"
                type="text"
                role="searchbox"
                placeholder="Search products"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="header__searchIcon" onClick={handleSearch}>
                <SearchIcon />
              </button>
            </form>
          </form>
          <div className="header__nav">
            <Link to={!user.isLoggedIn && '/login'}>
              <div
                className="header__option hide__item"
                onClick={handleAuthentication}
              >
                <span className="header__optionLineOne">
                  Hello {user.isLoggedIn ? user.user.fullname : 'Guest!'}
                </span>
                <span className="header__optionLineTwo">
                  {user.isLoggedIn ? 'Sign Out' : 'Sign In!'}
                </span>
              </div>
            </Link>
            <Link to={user.user ? '/orders' : '/login'}>
              <div className="header__option hide__item">
                <span className="header__optionLineOne">Returns</span>
                <span className="header__optionLineTwo">& Orders</span>
              </div>
            </Link>
            <Link to="/checkout">
              <div className="header__optionBasket">
                <ShoppingBasketIcon />
                <div className="header__optionLineTwo header__basketCount">
                  {basket.length}
                </div>
              </div>
            </Link>
            <div className="header__option hide__item">
              <Avatar
                alt="Remy Sharp"
                src={user.user ? user.user.avatar : ''}
              />
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
            <Avatar alt="Remy Sharp" src={user.user ? user.user.avatar : ''} />
            <p className="menu__modal__heading">
              Hello, {user.isLoggedIn ? `${user.user.fullname}!` : 'Guest!'}
            </p>
          </div>
          <p className="menu__modal__item">Your Profile</p>
          <p className="menu__modal__item">Your Orders</p>
          <p className="menu__modal__item">Buy Again</p>

          <div className="flex flex-col gap-4 mt-10 pt-10 w-80 mx-auto ">
            {user.isLoggedIn ? (
              <button
                onClick={handleAuthentication}
                className="rounded-md flex space-x-2 w-full h-12 font-normal text-base leading-3 text-cyan-900 bg-cyan-900 bg-opacity-0 hover:opacity-100 duration-100 border border-cyan-900 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center"
              >
                Sign Out
              </button>
            ) : (
              <Link to="/login">
                <button className="rounded-md flex space-x-2 w-full h-12 font-normal text-base leading-3 text-white bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700 focus:bg-cyan-800 hover:bg-cyan-900 duration-150 justify-center items-center">
                  Login/Signup
                </button>
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
  return content;
};

export default Header;
