import React from 'react';
import '../../assets/styles/Popular.css';
import Details from './Details';

const Popular = () => {
  const content = (
    <div className="popular">
      <h2>Popular Products</h2>
      <div className="popular__row">
        <Details />
        <Details />
        <Details />
        <Details />
        <Details />
        <Details />
        <Details />
        <Details />
      </div>
    </div>
  );
  return content;
};

export default Popular;
