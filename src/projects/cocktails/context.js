import { useState, createContext, useContext, useEffect } from 'react';

const AppContext = createContext();
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

function AppProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [cocktails, setCocktails] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const fetchData = async () => {
        setLoading(true);
        const response = await fetch(url + decodeURIComponent(searchValue));
        const data = await response.json();
        if (data.drinks) {
            setCocktails(data.drinks);
        } else {
            setCocktails([]);
        }
        setLoading(false);
    };

    const search = (value) => {
        setSearchValue(value);
    };

    useEffect(() => {
        fetchData();
    }, [searchValue]);

    return <AppContext.Provider value={{ loading, cocktails, search }}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider };
