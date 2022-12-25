import React from 'react';
import Counter from "./HOCCounter";

function A(props) {
    const {increment, count} = props;
    return (
        <div>
            <button
                style={{
                    width: '600px',
                    height: '100px',
                    backgroundColor: 'red',
                    color: 'white',
                }}
                onClick={increment}>Click A {count}</button>
        </div>
    );
}

export default Counter(A);
