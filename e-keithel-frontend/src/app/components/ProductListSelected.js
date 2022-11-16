import React from 'react';
import Product from './Product';
import '../../assets/styles/ProductList.css';
import { useGetProductsQuery } from '../api/productListSlice';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const { category_id: Id } = useParams();
  const {
    data: productList,
    isLoading: isLoading,
    isSuccess,
  } = useGetProductsQuery();

  let content;

  if (isLoading) content = <h4>Loading...</h4>;

  if (isSuccess) {
    const filteredProducts = productList.filter((product) => {
      if (parseInt(Id) === 0) {
        return product;
      } else {
        return product.category_id === parseInt(Id);
      }
    });

    content = (
      <div className="productList">
        <div className="productList__container">
          <div className="productList__title">
            <h1>Products</h1>
          </div>

          <ul className="productList__row">
            {filteredProducts.map((product, index) => {
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
