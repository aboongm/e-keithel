import React from 'react';
import '../../assets/styles/Subtotal.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => parseInt(item.price) + parseInt(amount), 0);

const Subtotal = () => {
  const navigate = useNavigate();
  const basket = useSelector((state) => state.basket.basket);

  const content = (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items)
        <strong>£{getBasketTotal(basket)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button onClick={() => navigate('/payment')} type="button">
        Proceed in Checkout
      </button>
    </div>
  );
  return content;
};

export default Subtotal;
