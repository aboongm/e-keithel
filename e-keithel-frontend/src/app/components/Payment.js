import React from 'react';
import '../../assets/styles/Payment.css';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import { useAddOrdersMutation } from '../api/orderApiSlice';

import { useSelector, useDispatch } from 'react-redux';
import { getBasketTotal } from '../api/helpers';
import { emptyingBasket } from '../api/basketSlice';

const Payment = () => {
  const user = useSelector((state) => state.auth);
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [addOrders] = useAddOrdersMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    addOrders({
      buyer_id: user.user.id,
      amount: getBasketTotal(basket),
      purchase: basket,
    });

    dispatch(emptyingBasket());
    navigate('/orders');
    console.log('order added');
  };

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
