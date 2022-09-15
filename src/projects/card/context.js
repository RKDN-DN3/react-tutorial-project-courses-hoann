import { createContext, useContext, useEffect, useReducer, useState } from 'react';

import reducer from './reducer';

const AppContext = createContext();

const initialState = {
    loading: false,
    total: 0,
    amount: 0,
    cart: [],
};

const url = 'https://course-api.com/react-useReducer-cart-project';

function AppProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        const res = await fetch(url);
        const data = await res.json();
        setTimeout(() => {
            dispatch({ type: 'DISPLAY_ITEMS', payload: data });
        }, 1000);
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        dispatch({ type: 'GET_TOTALS' });
    }, [state.cart]);

    return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};
export { AppProvider };
