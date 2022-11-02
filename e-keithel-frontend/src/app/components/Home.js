import React from 'react';
import '../../assets/styles/Home.css';
import banner2 from '../../assets/images/banner_2.jpg';
import Category from './Category';
import Popular from './Popular';
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../api/categorySlice';

const Home = () => {
  const { data, isLoading, isSuccess, error } = useGetCategoriesQuery();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(data);

  const content = (
    <div className="home">
      <div className="">
        <Link to="/products">
          <img className="home__image" src={banner2} alt="" />
        </Link>
        <ul className="home__row">
          {data.map((category) => (
            <>
              <Link to="/products" className="category shadow-lg">
                <Category
                  key={category.id}
                  title={category.title}
                  image={category.image}
                />
              </Link>
            </>
          ))}
        </ul>
        {/*
        <ul className="home__row">
          <Link to="/products">
            <Category
              title="Electronics"
              image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_TV_2X._SY304_CB432517900_.jpg"
            />
          </Link>
          <Category
            title="Computer & Accessories"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
          />
          <Category
            title="Health & Personal Care"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop1x._SY304_CB627424361_.jpg"
          />
          <Category
            title="Fashions"
            image="https://m.media-amazon.com/images/I/618E1D4hM6L._MCnd_AC_UL320_.jpg"
          />
          <Category
            title="Software"
            image="https://m.media-amazon.com/images/I/71lBKSgG0rL._AC_UL320_.jpg"
          />
          <Category
            title="Top Deals"
            image="https://m.media-amazon.com/images/I/51HyTjFJy5L._AC_UF226,226_FMjpg_.jpg"
          />
          <Category
            title="Games"
            image="https://m.media-amazon.com/images/I/71fa5+U25cL._AC_UL320_.jpg"
          />
          <Category
            title="Home & Kitchen"
            image="https://m.media-amazon.com/images/I/61YyfJSvxHL._AC_UF226,226_FMjpg_.jpg"
          />
          <Category
            title="Beauty Care"
            image="https://m.media-amazon.com/images/I/41ZBJlrrbEL._AC_UF226,226_FMjpg_.jpg"
          />
        </ul> */}
        {/* <Popular /> */}
      </div>
    </div>
  );
  return content;
};

export default Home;
