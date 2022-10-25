import React from 'react';
import Product from './Product';
import '../../assets/styles/ProductList.css';
import { useGetProductsQuery } from '../api/productListSlice';

const ProductList = () => {
  const {data: productList, isLoading: isLoadingProduct } = useGetProductsQuery();
  
  console.log(productList);

  if(isLoadingProduct) {
    return <h4>Loading...</h4>
  }

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
