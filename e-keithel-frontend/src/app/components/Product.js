import React from 'react';
import '../../assets/styles/Product.css';
import PropTypes from 'prop-types';

const Product = ({ id, title, image, price, rating }) => {
  const content = (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p key={_}>&#11088;</p>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button type="button">Add to Basket</button>
    </div>
  );
  return content;
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};

export default Product;
