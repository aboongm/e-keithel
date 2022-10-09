import React from 'react';
import '../../assets/styles/Popular.css';
import Details from './Details';
import _ from 'lodash';

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
  ];

  const content = (
    <div className="popular">
      <h2>Popular Products</h2>
      <div className="popular__row">
        {popularProducts.map((item) => (
          <Details key={item.id} popular={item} />
        ))}
      </div>
    </div>
  );
  return content;
};

export default Popular;
