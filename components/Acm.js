import React, { useContext } from 'react';
import { CountContext } from '../pages/index';

function Acm() {
  const countContext = useContext(CountContext);
  return (
    <>
      <div>
        Home page cart:{countContext.countState}
        <button onClick={() => countContext.countDispatch('increment')}>Add Item</button>
        <button onClick={() => countContext.countDispatch('decrement')}>Remove Item</button>
        <button onClick={() => countContext.countDispatch('reset')}>Clear</button>
      </div>
      Acm
    </>
  );
}

export default Acm;
