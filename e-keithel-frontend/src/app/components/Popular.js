import React, { useState } from 'react';
import '../../assets/styles/Popular.css';
import Details from './Details';
import _ from 'lodash';
import Paginate from './Paginate';

const Popular = () => {
  const popularProducts = [
    {
      id: 1,
      title: 'Electronics',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg',
    },
    {
      id: 2,
      title: 'Computer & Accessories',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg',
    },
    {
      id: 3,
      title: 'Electronics',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg',
    },
    {
      id: 4,
      title: 'Health & Personal Care',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg',
    },
    {
      id: 5,
      title: 'Electronics',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg',
    },
    {
      id: 6,
      title: 'Fashions',
      image:
        'https://m.media-amazon.com/images/I/51HyTjFJy5L._AC_UF226,226_FMjpg_.jpg',
    },
    {
      id: 7,
      title: 'Electronics',
      image:
        'https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg',
    },
    {
      id: 8,
      title: 'Software',
      image: 'https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg',
    },
    {
      id: 9,
      title: 'Software',
      image: 'https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg',
    },
    {
      id: 10,
      title: 'Software',
      image: 'https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg',
    },
    {
      id: 11,
      title: 'Software',
      image: 'https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg',
    },
    {
      id: 12,
      title: 'Software',
      image: 'https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg',
    },
    {
      id: 13,
      title: 'Software',
      image: 'https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg',
    },
    {
      id: 14,
      title: 'Software',
      image: 'https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg',
    },
    {
      id: 15,
      title: 'Software',
      image: 'https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg',
    },
    {
      id: 16,
      title: 'Software',
      image: 'https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg',
    },
    {
      id: 17,
      title: 'Software',
      image: 'https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg',
    },
  ];

  const [pageNumber, setPageNumber] = useState(0);

  // const pagesCount = Math.ceil(popularProducts.length / 4);
  // if (pagesCount === 1) return null;

  // const pages = _.range(1, pagesCount + 1);
  // console.log('pages', pages);

  const productsPerPage = 6;
  console.log('screen width: ', window.screen.width);
  const pageVisited = pageNumber * productsPerPage;
  const displayProducts = popularProducts.slice(
    pageVisited,
    pageVisited + productsPerPage
  );

  const pageCount = Math.ceil(popularProducts.length / productsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const content = (
    <div className="popular">
      <h2>Popular Products</h2>
      <ul className="popular__row">
        {displayProducts.map((item) => (
          <li key={item.id} className="details">
            <div className="details__image">
              <img src={item.image} alt="" />
            </div>
          </li>
        ))}
        <Paginate pageCount={pageCount} changePage={changePage} />
      </ul>
    </div>
  );
  return content;
};

export default Popular;
