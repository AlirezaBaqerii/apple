import React from 'react';
import { useGlobalContext } from '../context';

const Bag = () => {
  const { bagList, total, showBag, bagLocation } = useGlobalContext();

  const tringle = React.useRef(null);

  React.useEffect(() => {
    const pointer = tringle.current;
    pointer.style.left = `${bagLocation - 7}px`;
  }, [bagLocation]);

  return (
    <section className={showBag ? 'bag active-bag' : 'bag'}>
      <div className='tringle' ref={tringle}>
        <div className='arrow-up'></div>
      </div>
      <div className='bag-container'>
        {bagList.length === 0 ? (
          <h3>Your bag is empty.</h3>
        ) : (
          bagList.map((item, index) => {
            const { name, price } = item;
            return (
              <div key={index} className='item-in-bag'>
                <div className='item-in-bag-name'>{name}</div>
                <div className='item-in-bag-price'>${price}</div>
              </div>
            );
          })
        )}

        {bagList.length !== 0 && (
          <h4 className='total-price'>total: ${total}</h4>
        )}
      </div>
    </section>
  );
};

export default Bag;
