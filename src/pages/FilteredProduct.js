import React from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { useGlobalContext } from '../context';

const FilteredProduct = () => {
  const { name } = useParams();

  const { setFilterKey, closeBag } = useGlobalContext();

  const filterP = () => {
    setFilterKey(name);
  };

  React.useEffect(() => {
    filterP();
  }, [name]);

  // filterProducts(name);

  return (
    <>
      <section className='hero-section' onClick={() => closeBag()}>
        <div className='hero-text-top'>
          <h1>{name}</h1>
        </div>
      </section>
      <ProductList />
    </>
  );
};

export default FilteredProduct;
