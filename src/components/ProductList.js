import React from 'react';
import { useGlobalContext } from '../context';
import SingleProduct from './SingleProduct';

const ProductList = () => {
  const { products } = useGlobalContext();

  if (products.length === 0) {
    return (
      <div className='cards'>
        <h1 className='empty-list'>Currently there is nothing available</h1>
      </div>
    );
  }

  return (
    <div className='cards'>
      <div className='cards-container'>
        {products.map((product) => {
          return <SingleProduct key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
