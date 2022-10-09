import React from 'react';
import '../../assets/styles/Details.css';

const Details = ({ popular }) => {
  console.log('popular', popular);
  return (
    <div className="details">
      <div className="details__image">
        <img src={popular.image} alt="" />
      </div>
    </div>
  );
};

export default Details;
