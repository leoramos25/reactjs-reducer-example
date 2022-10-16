import { useReducer } from 'react';

type ReducerState = {
    count: number;
}

type ReducerAction = {
    type: string;
}

const initialState = {
    count: 0
}

function reducer(state: ReducerState, action: ReducerAction) {
    switch (action.type) {
        case 'ADD':
            return { ...state, count: state.count + 1 };
        case 'DEL':
            return state.count > 0 ? { ...state, count: state.count - 1 } : state;
        case 'RESET':
            return initialState;
    }
    return state;
}

export function useCounter() {
    return useReducer(reducer, initialState);
}