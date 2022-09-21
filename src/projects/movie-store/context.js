import { createContext, useState, useContext } from 'react';
import useFetch from './useFetch';

const AppContext = createContext();
function AppProvider({ children }) {
    const [query, setQuery] = useState('infinity war');
    const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

    return <AppContext.Provider value={{ isLoading, error, movies, query, setQuery }}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
