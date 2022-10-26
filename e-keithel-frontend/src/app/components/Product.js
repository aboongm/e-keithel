import React from 'react';
import '../../assets/styles/Product.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addingToBasket } from '../api/basketSlice';
import { toast } from 'react-toastify';

const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useDispatch();

  const addToBasket = () => {
    const data = { id, title, image, price, rating };
    dispatch(addingToBasket(data));
    if (data) {
      toast.success('Item added to basket');
    }
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
            .fill(1)
            .map((item, index) => (
              <p key={index}>&#11088; </p>
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
