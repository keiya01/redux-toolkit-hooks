import React from 'react';
import { CountContext } from '../contexts/CountContext';
import { CountText } from './CountText';
import { CountButton } from './CountButton';

export const App = () => {
  return (
    <CountContext>
      <CountText />
      <CountButton />
    </CountContext>
  );
};
