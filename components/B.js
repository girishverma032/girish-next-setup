import React from 'react';
import Counter from "./HOCCounter";

function B(props) {
    const {increment, count} = props;
    return (
        <div>
            <button
                style={{
                    width: '600px',
                    height: '100px',
                    backgroundColor: 'green',
                    color: 'white',
                }}
                onMouseOver={increment}>Hover on B {count}</button>
        </div>
    );
}

export default Counter(B);
