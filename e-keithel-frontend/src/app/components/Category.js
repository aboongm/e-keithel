import React from 'react';
import '../../assets/styles/Category.css';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Category = ({ codeNumber, title, image }) => {
  const navigate = useNavigate();

  const handleNavigateProducts = () => {
    navigate(`/products/${codeNumber}`);
  };

  const content = (
    <li className="category shadow-lg" onClick={handleNavigateProducts}>
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
