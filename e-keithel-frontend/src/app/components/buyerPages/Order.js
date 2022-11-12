import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetOrdersQuery } from '../../api/orderSlice';
import { useGetProductsQuery } from '../../api/productListSlice';
import CheckoutProduct from '../CheckoutProduct';

const Order = () => {
  const user = useSelector((state) => state.auth);
  const {
    data: orderList,
    isLoading: isLoadingOrder,
    error,
  } = useGetOrdersQuery();

  const { data: productList, isLoading: isLoadingProduct } =
    useGetProductsQuery();

  if (isLoadingProduct || isLoadingOrder) {
    <h5>Loading...</h5>;
  }
  const filterOrderList = productList.filter(({ id }) =>
    orderList.map(({ product_id }) => product_id).includes(id)
  );

  const content = (
    <section className="payment">
      <div className="payment__container">
        <div className="payment__container__inner">
          <div className="payment__section payment__order__1">
            <div className="payment__address">
              <p className="text-center">{user?.user.fullname}</p>
              <p className="text-center">{user?.user.address}</p>
            </div>
          </div>
          <div className="payment__section payment__order__3">
            <div className="payment__title">
              <h3>Ordered items and delivery details</h3>
            </div>
            <div className="payment__items">
              {filterOrderList.map((item) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  orderPage={true}
                />
              ))}
            </div>
          </div>
          <div className="payment__section payment__order__2">
            <div className="payment__details"></div>
          </div>
        </div>
      </div>
    </section>
  );
  return content;
};

export default Order;
