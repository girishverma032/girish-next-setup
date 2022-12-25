import React, {useState} from 'react';

const Counter=(WrappedComponent)=> {
    function Counter(props) {
        const [count, setCount] = useState(0);
        function increment(){
            setCount(count+1)
        }
        return (
            <>
                <WrappedComponent increment={increment} count={count} {...props}/>
            </>
        )
    }

    return Counter;
}

export default Counter;
