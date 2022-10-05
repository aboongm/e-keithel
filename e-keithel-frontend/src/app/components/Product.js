import React, { useEffect } from 'react';
import '../../assets/styles/Product.css';
import PropTypes from 'prop-types';
// import addToBasketRequest from '../../redux/reducers/basket/basketReducers';
import { useDispatch } from 'react-redux';

const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();

  const addToBasket = () => {
    // Add item to basket
    console.log('clicked');
    const data = { id, title, image, price, rating };
    // dispatch(addToBasketRequest(data));

    dispatch({
      type: 'ADD_TO_BASKET',
      item: data,
    });
  };

  // useEffect(() => {
  //   addToBasket();
  // });

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
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};

export default Product;
