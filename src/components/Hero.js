import React from 'react';
import { useGlobalContext } from '../context';

const Hero = () => {
  const { closeBag } = useGlobalContext();

  return (
    <section className='hero-section' onClick={() => closeBag()}>
      <div className='hero-text-top'>
        <h1> WELCOME TO APPLE</h1>
      </div>
      <div className='hero-text-middle'>
        <h1>HOME OF THE MOST</h1>
      </div>
      <div className='hero-text-down'>
        <h1>EXPENSIVE DEVICES </h1>
      </div>
    </section>
  );
};

export default Hero;
