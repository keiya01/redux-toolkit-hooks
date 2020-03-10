import React from 'react';
import { useCountState } from '../contexts/CountContext';

export const CountText = () => {
  const state = useCountState();
  return <p>{state}</p>;
};
