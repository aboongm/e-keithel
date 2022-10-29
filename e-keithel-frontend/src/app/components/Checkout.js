import React from 'react';
import '../../assets/styles/Checkout.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

const Checkout = () => {
  const user = useSelector((state) => state.auth);
  const basket = useSelector((state) => state.basket.basket);

  const content = (
    <div className="checkout">
      <div>
        <h2 className="checkout__hello">
          Hello {user.isLoggedIn ? user.user.email : 'Guest!'}
        </h2>
        <h2 className="checkout__title">Your Shopping Basket</h2>
      </div>
      <div className="checkout__details">
        <ul className="checkout__left">
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
        </ul>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
  return content;
};

export default Checkout;
