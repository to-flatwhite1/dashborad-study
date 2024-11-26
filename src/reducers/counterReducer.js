export const ACTION_TYPE = {
    INCREMENT: 'INCREMENT',
    DECREMENT: 'DECREMENT',
    RESET: 'RESET',
};

export const setCount = (state, action) => {
    //const action = {type:'INCREMENT'}
    switch (action.type) {
        case ACTION_TYPE.INCREMENT:
            return { counter: state.counter + 1, name: '증가' }; // 상태 업데이트
        case ACTION_TYPE.DECREMENT:
            return { counter: state.counter - 1, name: '감소' };
        case ACTION_TYPE.RESET:
            return { counter: 0 };
        default:
            return state; // 기본 상태 반환
    }
};
