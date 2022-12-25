// import React, {createContext, useReducer, useState} from "react";
// import HomeBanner from '../containers/home/index';
// import A from "../components/A";
// import B from "../components/B";
// import Acm from "../components/Acm";
// import Bcm from "../components/Bcm";
// const initialState = 0;
// const reducer = (state, action) => {
//     switch (action) {
//         case "increment":
//             return state + 1;
//         case "decrement":
//             return state - 1;
//         case "reset":
//             return initialState;
//         default:
//             return state;
//     }
// };
// export const CountContext = createContext();
// const Home = () => {
// const [count, dispatch] = useReducer(reducer, initialState);
// const [result, updateResult] = useState(0);
// const [firstNumber, updateFirstNumber] = useState(0);
// const [secondNumber, updateSecondNumber] = useState(0);
//
// const addition = () => {
//     updateResult(parseFloat(firstNumber) + parseFloat(secondNumber));
// };
// const subtraction = () => {
//     updateResult(parseFloat(firstNumber) - parseFloat(secondNumber));
// };
// const multiplication = () => {
//     updateResult(parseFloat(firstNumber) * parseFloat(secondNumber));
// };
// const division = () => {
//     updateResult(parseFloat(firstNumber) / parseFloat(secondNumber));
// };
//
// return (
//     <>
//         <CountContext.Provider value={{
//             countState: count,
//             countDispatch: dispatch,
//             addition,
//             division,
//             firstNumber,
//             multiplication,
//             result,
//             secondNumber,
//             subtraction,
//             updateFirstNumber,
//             updateSecondNumber,
//         }}>
//             <A/>
//             <B/>
//             <Acm/>
//             <Bcm/>
//         </CountContext.Provider>
//     </>
// )
//     return (
//         <>Hello</>
//     )
// }
// export default Home;

import React from 'react';

export default function index() {
  return (
    <div>
      <h1>This is File</h1>
    </div>
  );
}
