import * as React from 'react';
import { useReducer } from 'react';
import './style.css';

export default function App() {
  const [count, dispatch] = useReducer((state, action) => {
    if (action === 'add') {
      return state + 1;
    }
    if (action === 'minus' && state === 0) {
      return 0;
    }
    if (action === 'minus') {
      return state - 1;
    }
    if (action === 'reset') {
      return 0;
    }
    return state;
  }, 0);
  return (
    <div>
      <button onClick={() => dispatch('add')}>+</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch('minus')}>-</button>
      <button onClick={() => dispatch('reset')}>RESET</button>
    </div>
  );
}
