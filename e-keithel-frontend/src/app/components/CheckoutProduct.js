import React from 'react';
import '../../assets/styles/CheckoutProduct.css';
import { useDispatch } from 'react-redux';
import { removingFromBasket } from '../api/basketSlice';
import { toast } from 'react-toastify';

const CheckoutProduct = ({ id, title, price, image, rating }) => {
  const dispatch = useDispatch();
  const removeFromBasket = () => {
    dispatch(removingFromBasket(id));
    toast.success('Item removed from basket');
  };

  const content = (
    <li className="checkoutProduct shadow-lg">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__price">
          <p>
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <span className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((item, i) => (
                <span key={i}>&#11088;</span>
              ))}
          </span>
        </div>
      </div>
      <button type="button" onClick={removeFromBasket}>
        Remove from Basket
      </button>
    </li>
  );
  return content;
};

export default CheckoutProduct;
