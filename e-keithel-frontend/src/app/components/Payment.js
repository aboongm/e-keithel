import React, { useState, useEffect } from 'react';
import '../../assets/styles/Payment.css';
import { Link, useNavigate } from 'react-router-dom';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CheckoutProduct from './CheckoutProduct';
// import axios from './axios';
// import { db } from '../firebase';

import { useSelector } from 'react-redux';

const Payment = () => {
  const user = useSelector((state) => state.persistedReducer.loginReducer);
  const basket = useSelector(
    (state) => state.persistedReducer.basketReducer.basket
  );
  console.log('user from payment: ', user);
  //   const handleChange = (e) => {
  //     setDisabled(e.empty);
  //     setError(e.error ? e.error.message : '');
  //   };

  const content = (
    <section className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.currentUser.status.data.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          {/* <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <h3>Order Total: ${getBasketTotal(basket)}</h3>
                <button
                  type="submit"
                  disabled={processing || disabled || succeeded}
                >
                  <span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
                </button>
              </div>

              
              {error && <div>{error}</div>}
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
  return content;
};

export default Payment;
