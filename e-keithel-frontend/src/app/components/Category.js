import React from 'react';
import '../../assets/styles/Category.css';
import PropTypes from 'prop-types';

const Category = ({ title, image }) => {
  const content = (
    <div className="category">
      <h1>{title}</h1>
      <img src={image} alt="" />
      <button type="button">Shop Now</button>
    </div>
  );
  return content;
};

Category.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Category;
