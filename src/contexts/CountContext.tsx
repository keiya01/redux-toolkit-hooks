import React, { createContext, Dispatch, useReducer, useContext, Context } from 'react';
import reducer, { CountAction, initialCountState } from '../features/count/countSlice';

export const CountStateContext = createContext<number | undefined>(undefined);
export const CountDispatchContext = createContext<Dispatch<CountAction> | undefined>(undefined);

export const CountContext: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialCountState);

  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        {children}
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
};

const validContext = (name: string, value: any) => {
  if(value === undefined) {
    throw new Error(`${name} is not initialized`);
  }
  return value;
}

export const useCountState = () => {
  return validContext(
    'CountStateContext', 
    useContext(CountStateContext),
  );
};

export const useCountDispatch = () => {
  return validContext(
    'CountDispatchContext', 
    useContext(CountDispatchContext),
  );
};
