'use client';
import { ACTION_TYPE, setCount } from '@/reducers/counterReducer';
import React, { useReducer } from 'react';

const ReducerPage = () => {
    // 상태 변경 함수 (Reducer 함수)

    // useReducer로 상태와 dispatch 함수 선언
    const [count, dispatch] = useReducer(setCount, { counter: 0, name: '현재상태' });
    //상태변경함수를 호출 하는  함수는 dispatch
    return (
        <div className="flex flex-col w-32 h-72 m-9 gap-3">
            <strong>
                {count.name}:{count.counter}
            </strong>
            <button
                onClick={() => dispatch({ type: ACTION_TYPE.INCREMENT })} // dispatch 호출
                className="w-50 h-10 bg-slate-300"
            >
                (증가)
            </button>
            <button
                onClick={() => dispatch({ type: ACTION_TYPE.DECREMENT })} // dispatch 호출
                className="w-50 h-10 bg-slate-300"
            >
                (감소)
            </button>
            <button
                onClick={() => {
                    dispatch({ type: ACTION_TYPE.RESET });
                }}
            >
                reset
            </button>
        </div>
    );
};

export default ReducerPage;
