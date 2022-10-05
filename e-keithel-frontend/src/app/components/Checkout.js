import React from 'react';
import '../../assets/styles/Checkout.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const user = useSelector((state) => state.persistedReducer.loginReducer);
  const basket = useSelector(
    (state) => state.persistedReducer.basketReducer.basket
  );
  console.log('basket: ', basket);

  const content = (
    <div className="checkout">
      <div className="checkout__left">
        <Link to="/">
          <img
            className="checkout__ad"
            src="https://m.media-amazon.com/images/I/21-Eq7XezyL.jpg"
            alt=""
          />
        </Link>
        <div>
          <h2>
            Hello{' '}
            {user.loggedIn ? user.currentUser.status.data.email : 'Guest!'}
          </h2>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
  return content;
};

export default Checkout;
