import React from 'react';
import '../../assets/styles/Category.css';
import PropTypes from 'prop-types';

const Category = ({ title, image }) => {
  const content = (
    <li className="category shadow-lg">
      <h1 className="uppercase">{title}</h1>
      <img src={image} alt="" />
      <button type="button">Shop Now</button>
    </li>
  );
  return content;
};

Category.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Category;
