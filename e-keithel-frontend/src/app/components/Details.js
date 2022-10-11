import React from 'react';
import '../../assets/styles/Details.css';

const Details = ({ popular }) => {
  console.log('popular', popular);
  return (
    <li className="details">
      <div className="details__image">
        <img src={popular.image} alt="" />
      </div>
    </li>
  );
};

export default Details;
