import React from 'react';
import '../../assets/styles/Product.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();

  const addToBasket = () => {
    console.log('clicked >>>>>');
    // Add item to basket
    const data = { id, title, image, price, rating };    

    dispatch({
      type: 'ADD_TO_BASKET',
      item: data,
    });
  };

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
      <button onClick={addToBasket} type="button">
        Add to Basket
      </button>
    </div>
  );
  return content;
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  rating: PropTypes.number,
};

export default Product;
