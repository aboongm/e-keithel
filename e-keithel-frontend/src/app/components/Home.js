import React from 'react';
import '../../assets/styles/Home.css';
import banner2 from '../../assets/images/banner_2.jpg';
import Category from './Category';
import { Link } from 'react-router-dom';
import { useGetCategoriesQuery } from '../api/categorySlice';

const Home = () => {
  const { data, isLoading, isSuccess } = useGetCategoriesQuery();

  let content;
  if (isLoading) content = <p>Loading...</p>;

  if (isSuccess) {
    content = (
      <div className="home">
        <div className="">
          <Link to="/products">
            <img className="home__image" src={banner2} alt="" />
          </Link>
          <ul className="home__row">
            {data.map((category) => (
              <>
                <div className="category shadow-lg">
                  <Category
                    key={category.id}
                    codeNumber={category.code_number}
                    title={category.title}
                    image={category.image}
                  />
                </div>
              </>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  return content;
};

export default Home;
