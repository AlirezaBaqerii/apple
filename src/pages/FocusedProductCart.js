import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { useParams } from 'react-router-dom';

const FocusedProductCart = () => {
  const [theProduct, setTheProduct] = useState({});

  const { products, addToBag } = useGlobalContext();
  const { id } = useParams();

  const findTheProduct = () => {
    products.map((product) => {
      if (product.id == id) {
        setTheProduct(product);
      }
    });
  };

  useEffect(() => {
    findTheProduct();
  });

  const { name, img, price } = theProduct;

  return (
    <>
      <article className='theProduct'>
        <div className='theProduct-container'>
          <div className='theProduct-img-container'>
            <img src={img} alt={name} />
          </div>
          <div className='theProduct-info-container'>
            <h1> {name}</h1>
            <h5>From ${price}</h5>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
              ipsa reprehenderit sapiente numquam ab? Harum quisquam adipisci
              eaque laudantium ea a totam voluptatibus rem nemo sint dolorem,
              voluptatem dignissimos velit impedit delectus. Autem, voluptatibus
              possimus iusto, recusandae, harum quia ab inventore repellat neque
              magni est architecto omnis similique quos nihil.
            </p>
            <div className='btn-container'>
              <button onClick={() => addToBag(theProduct)}>Add to bag</button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default FocusedProductCart;
