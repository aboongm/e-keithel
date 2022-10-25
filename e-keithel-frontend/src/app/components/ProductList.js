import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProductList } from '../../redux/reducers/product/productReducers';
import Product from './Product';
import '../../assets/styles/ProductList.css';
import { useGetProductsQuery } from '../api/apiSlice';

const ProductList = () => {
  // const dispatch = useDispatch();
  // const productList = useSelector(
    // (state) => state.persistedReducer.productListReducer.productList.data
  // );

  const {data: productList, isLoading: isLoadingProduct } = useGetProductsQuery();
  
  console.log(productList);

  if(isLoadingProduct) {
    return <h4>Loading...</h4>
  }

  // useEffect(() => {
  //   dispatch(fetchProductList());
  // }, [dispatch]);

  return (
    <div className="productList">
      <div className="productList__container">
        <div className="productList__title">
          <h1>Products</h1>
        </div>

        <div className="productList__row">
          {productList.map((product) => {
            return (
              <Product
                key={product.id}
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                rating={product.rating}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
