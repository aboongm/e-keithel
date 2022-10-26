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
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p key={_}>&#11088;</p>
            ))}
        </div>
        <button type="button" onClick={removeFromBasket}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
  return content;
};

export default CheckoutProduct;
