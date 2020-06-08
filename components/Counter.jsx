// Create components/Counter.jsx
import React, { Component } from 'react'

const Counter = ({ value, onIncrement, onDecrement, onClear, onIncrement_Five }) => (
  <div>
    <h1> Value: {value} </h1>
    <button onClick={onIncrement}> + </button>
    <button onClick={onDecrement}> - </button>
    <button onClick={onIncrement_Five}> +5 </button>
    <button onClick={onClear}> clear </button>
  </div>
);

export default Counter;
