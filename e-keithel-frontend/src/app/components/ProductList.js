import React from 'react';
import Product from './Product';
import '../../assets/styles/ProductList.css';
import { useGetProductsQuery } from '../api/productListSlice';
import { useEffect } from 'react';

const ProductList = () => {
  const { data: productList, isLoading, isSuccess } = useGetProductsQuery();

  let content;

  if (isLoading) content = <h4>Loading...</h4>;

  useEffect(() => {
    if (isSuccess) {
      console.log(productList);
    }
  }, [productList]);

  if (isSuccess) {
    content = (
      <div className="productList">
        <div className="productList__container">
          <div className="productList__title">
            <h1>Products</h1>
          </div>

          <ul className="productList__row">
            {productList.map((product, index) => {
              return (
                <Product
                  key={index}
                  id={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  return content;
};

export default ProductList;
