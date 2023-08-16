import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, clear } from '../store/counterSlice';
import './Counter.css';

const Counter = () => {
  const count = useSelector(state => state.counter.counter);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())} className="hover-button">
        <div className="left"></div>
        Hover me!
        <div className="right"></div>
      </button>
      <button onClick={() => dispatch(clear())} className="hover-button clear">
        <div className="left"></div>
        Clear
        <div className="right"></div>
      </button>
    </div>
  );
};

export default Counter;

