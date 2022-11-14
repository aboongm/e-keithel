import React from 'react';
import Product from './Product';
import '../../assets/styles/ProductList.css';
import { useGetProductsQuery } from '../api/productListSlice';
import { useParams } from 'react-router-dom';

const ProductList = () => {
  const { data: productList, isLoading: isLoadingProduct } =
    useGetProductsQuery();

  const { category_id: Id } = useParams();
  const filteredProducts = productList.filter(
    (product) => product.category_id === parseInt(Id)
  );

  if (isLoadingProduct) {
    return <h4>Loading...</h4>;
  }

  console.log(productList);

  return (
    <div className="productList">
      <div className="productList__container">
        <div className="productList__title">
          <h1>Products</h1>
        </div>

        <ul className="productList__row">
          {/* {productList.map((product, index) => { */}
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
};

export default ProductList;
