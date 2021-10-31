import React from 'react';
import './Card.css';

export const Card = (props) => {
  const { name, img, id } = props;
  return (
    <>
      <div className='card'>
        <img className='card-image' src={img} alt={name} />
        <h3>{name}</h3>
        <p>id:{id}</p>
      </div>
    </>
  );
};