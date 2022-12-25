import React from 'react';
import Counter from './HOCCounter';

function B({ increment, count }) {
  return (
    <div>
      <button
        style={{
          width: '600px',
          height: '100px',
          backgroundColor: 'green',
          color: 'white'
        }}
        onMouseOver={increment}>
        Hover on B {count}
      </button>
    </div>
  );
}

export default Counter(B);
