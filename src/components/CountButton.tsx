import React from 'react';
import { useCountDispatch } from '../contexts/CountContext';
import { increment } from '../features/count/countSlice';

export const CountButton = () => {
  const dispatch = useCountDispatch();
  
  const handleOnClick = () => {
    dispatch(increment(2));
  };

  return (
    <button onClick={handleOnClick}>
      increment
    </button>
  );
};
