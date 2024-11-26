import { setCount } from '@/reducers/counterReducer';

import React, { useContext, useReducer } from 'react';

const { createContext } = require('react');

//만들고
export const CounterContext = React.createContext(defaultValue);

export const CounterProvider = () => {
    const [count, dispatch] = useReducer(setCount, {
        counter: 0,
        name: 'dd',
    });

    return (
        <>
            <CounterContext.Provider value={{ count, dispatch }}>{children}</CounterContext.Provider>;
        </>
    );
};

//공급하고

//사용한다
export const useCounter = () => {
    const CounterUseContext = useContext(CounterContext);
    return CounterUseContext;
};
