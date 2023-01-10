import React, { createContext, useReducer, useState } from 'react';
import Acm from '../components/Acm';
import Home from '../containers/home/index';
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
};
export const CountContext = createContext();

const Index = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [result, updateResult] = useState(0);
  const [firstNumber, updateFirstNumber] = useState(0);
  const [secondNumber, updateSecondNumber] = useState(0);

  const addition = () => {
    updateResult(+firstNumber + +secondNumber);
  };
  const subtraction = () => {
    updateResult(+firstNumber - +secondNumber);
  };
  const multiplication = () => {
    updateResult(+firstNumber * +secondNumber);
  };
  const division = () => {
    updateResult(+firstNumber / +secondNumber);
  };

  return (
    <>
      <CountContext.Provider
        value={{
          countState: count,
          countDispatch: dispatch,
          addition,
          division,
          firstNumber,
          multiplication,
          result,
          secondNumber,
          subtraction,
          updateFirstNumber,
          updateSecondNumber
        }}>
        <Acm />
        <Home />
      </CountContext.Provider>
    </>
  );
};
export default Index;
