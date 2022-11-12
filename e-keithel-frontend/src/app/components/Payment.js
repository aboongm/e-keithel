import React, { useState, useEffect } from 'react';
import '../../assets/styles/Payment.css';
import { Link, useNavigate } from 'react-router-dom';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CheckoutProduct from './CheckoutProduct';
import { useAddOrdersMutation } from '../api/orderSlice';

import { useSelector } from 'react-redux';
import { getBasketTotal } from '../api/helpers';
import { add } from 'lodash';

const Payment = () => {
  const user = useSelector((state) => state.auth);
  const basket = useSelector((state) => state.basket.basket);
  console.log('basket:', basket);

  const [addOrders, { isSuccess, error }] = useAddOrdersMutation();

  console.log('userId: ', user?.user.id);

  const handleChange = (e) => {
    // setDisabled(e.empty);
    // setError(e.error ? e.error.message : '');
  };
  console.log(basket);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    addOrders({
      amount: 399.98,
      buyer_id: 4,
      purchase: [
        {
          title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
          price: 199.99,
          rating: 3,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg',
          category_id: 2,
          seller_id: 3,
          product_id: 3,
        },
        {
          title: "Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",
          price: 199.99,
          rating: 3,
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg',
          category_id: 2,
          seller_id: 3,
          product_id: 3,
        },
      ],
    });
    console.log('order added');

    // if (basket.length >= 1) {
    //   basket.map((order) =>
    //     addOrders({
    //       product_id: order.id,
    //       price: order.price,
    //       quantity: 1,
    //       buyer_id: user.user.id,
    //       seller_id: order.sellerId,
    //     })
    //   );
    // }
    navigate('/orders');
  };

  useEffect(() => {}, []);

  const content = (
    <section className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment__container__inner">
          <div className="payment__section payment__order__1">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p className="text-center">{user?.user.fullname}</p>
              <p className="text-center">{user?.user.address}</p>
            </div>
          </div>
          <div className="payment__section payment__order__3">
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
          <div className="payment__section payment__order__2">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <form onSubmit={handleSubmit}>
                {/* <CardElement /> */}

                <div className="payment__priceContainer">
                  <h3>Order Total: ${getBasketTotal(basket)}</h3>
                  <button type="submit">
                    <span>Buy Now</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return content;
};

export default Payment;
