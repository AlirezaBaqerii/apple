import React from 'react';
import { Link } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

const SingleProduct = ({ type, id, name, img, price }) => {
  React.useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div data-aos='fade-up' className='cart-item'>
      <div className='img-container'>
        <img src={img} alt={name} />
      </div>
      <div className='product-footer'>
        <div className='product-info'>
          <h2>{name}</h2>
          <h5>From ${price}</h5>
        </div>
        <div className='btn-div'>
          <Link to={`${type}/${id}`}>
            <button className='buy-btn'>Buy</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
