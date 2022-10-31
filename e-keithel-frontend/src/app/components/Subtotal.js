import React from 'react';
import '../../assets/styles/Subtotal.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getBasketTotal } from '../api/helpers';
import { toast } from 'react-toastify';

const Subtotal = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const basket = useSelector((state) => state.basket.basket);

  const handlePayment = () => {
    if (user.user) {
      navigate('/payment');
    } else {
      toast.error('Please login first!');
      navigate('/login');
    }
  };

  const content = (
    <div className="subtotal shadow-lg">
      <p>
        Subtotal ({basket.length} items)
        <strong>£{getBasketTotal(basket)}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button onClick={handlePayment} type="button">
        Proceed to Checkout
      </button>
    </div>
  );
  return content;
};

export default Subtotal;
