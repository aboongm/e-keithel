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

  //   const content = (
  //     <div className="header">
  //       <Link to="/">
  //         <img className="header__logo" src={monaaz} alt="amazon" />
  //       </Link>
  //       <form className="header__search">
  //         <select className="header__select">
  //           <option>All</option>
  //           <option>Arts & Crafts</option>
  //           <option>Beauty & Personal Care</option>
  //           <option>Books</option>
  //           <option>Children's Fashion</option>
  //           <option>Computers</option>
  //           <option>Digital Music</option>
  //           <option>Electronics</option>
  //           <option>Home & Kitchen</option>
  //           <option>Men's Fashion</option>
  //           <option>Movie & TV</option>
  //           <option>Pet Supplies</option>
  //           <option>Sports & Outdoors</option>
  //           <option>Software</option>
  //           <option>Tools & Home Improvements</option>
  //           <option>Toys & Games</option>
  //           <option>Video Games</option>
  //           <option>Women's Fashion</option>
  //         </select>
  //         <input
  //           className="header__searchInput"
  //           id="search"
  //           type="text"
  //           role="searchbox"
  //           placeholder="Search products"
  //           value={search}
  //           onChange={(e) => setSearch(e.target.value)}
  //         />
  //         <button className="header__searchIcon">
  //           <SearchIcon />
  //         </button>
  //       </form>
  //       <div className="header__nav">
  //         <Link to={!user.isLoggedIn && '/login'}>
  //           <div className="header__option" onClick={handleAuthentication}>
  //             <span className="header__optionLineOne">
  //               Hello {user.isLoggedIn ? user.user.email : 'Guest!'}
  //             </span>
  //             <span className="header__optionLineTwo">
  //               {user.isLoggedIn ? 'Sign Out' : 'Sign In!'}
  //             </span>
  //           </div>
  //         </Link>
  //         <div className="header__option">
  //           <span className="header__optionLineOne">Returns</span>
  //           <span className="header__optionLineTwo">& Orders</span>
  //         </div>
  //         <Link to="/checkout">
  //           <div className="header__optionBasket">
  //             <ShoppingBasketIcon />
  //             <span className="header__optionLineTwo header__basketCount">
  //               {basket.length}
  //             </span>
  //           </div>
  //         </Link>
  //         <div className="header__option">
  //           <Avatar alt="Remy Sharp" src={aboong} />
  //         </div>
  //       </div>
  //     </div>
  //   );
  //   return content;
  // };

  // export default Header;

  // import React, { useState, useEffect } from 'react';
  // import '../../assets/styles/Header.css';
  // import SearchIcon from '@mui/icons-material/Search';
  // import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
  // import { Link, useNavigate } from 'react-router-dom';
  // import { Avatar } from '@mui/material';
  // import monaaz from '../../assets/images/monaaz_black.png';
  // import aboong from '../../assets/images/1.png';
  // import { useSelector, useDispatch } from 'react-redux';
  // import { logOut } from '../api/authSlice';

  // const Header = () => {
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();

  //   const user = useSelector((state) => state.auth);
  //   const basket = useSelector((state) => state.basket.basket);
  //   console.log('basket: ', basket);

  // useEffect(() => {
  //   dispatch({ type: 'SEARCH_ITEM', item: search });
  // });

  // const handleAuthentication = () => {
  //   if (user.user) {
  //     dispatch(logOut());
  //     navigate('/login');
  //   }
  // };

  // const [search, setSearch] = useState('');
  // const [searchResults, setSearchResults] = useState([]);
  // const productList = useSelector(
  //   (state) => state.persistedReducer.productListReducer.productList.data
  // );
  // useEffect(() => {
  //   const searchResults = productList.filter((product) =>
  //     product.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   console.log('search results: ', searchResults);
  //   setSearchResults(searchResults);
  //   dispatch({ type: 'SEARCH_ITEM', item: searchResults });
  //   navigate('/search');
  // }, [search]);

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
              <span className="header__optionLineTwo header__basketCount">
                {basket.length}
              </span>
            </div>
          </Link>
          <div className="header__option hide__item">
            <Avatar alt="Remy Sharp" src={aboong} />
          </div>
        </div>
      </div>

      {/* For large and Medium-sized Screen */}
      {/* <div className="flex justify-between "> */}

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
      {/* </div> */}
      {/* Mobile and small-screen devices (toggle Menu) */}
      <div
        id="MobileNavigation"
        className={`${show ? 'block' : 'hidden'} mt-4 mx-auto`}
      >
        <div className="flex flex-row items-center justify-center space-x-6">
          <svg
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z"
              stroke="#1F2937"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
              stroke="#1F2937"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z"
              stroke="#1F2937"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 9H2V21H6V9Z"
              stroke="#1F2937"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
              stroke="#1F2937"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
              stroke="#1F2937"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.0002 11.3701C16.1236 12.2023 15.9815 13.0523 15.594 13.7991C15.2065 14.5459 14.5933 15.1515 13.8418 15.5297C13.0903 15.908 12.2386 16.0397 11.408 15.906C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1903 8.22793 13.4229 8.09426 12.5923C7.9606 11.7616 8.09226 10.91 8.47052 10.1584C8.84878 9.40691 9.45438 8.7938 10.2012 8.4063C10.948 8.0188 11.7979 7.87665 12.6302 8.00006C13.4791 8.12594 14.265 8.52152 14.8719 9.12836C15.4787 9.73521 15.8743 10.5211 16.0002 11.3701Z"
              stroke="#1F2937"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 6.5H17.51"
              stroke="#1F2937"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex flex-col gap-4 mt-4 w-80 mx-auto ">
          <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-indigo-700 bg-indigo-600 bg-opacity-0 hover:opacity-100 duration-100 border border-indigo-700 focus:outline-none focus:bg-gray-200 hover:bg-gray-200 duration-150 justify-center items-center">
            Sign Up
          </button>
          <button className="rounded-md flex space-x-2 w-full h-10 font-normal text-sm leading-3 text-white bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-600 hover:bg-indigo-600 duration-150 justify-center items-center">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
  return content;
};

export default Header;
