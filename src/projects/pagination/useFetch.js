import { useState, useEffect } from 'react';
import axios from 'axios';

import paginate from './utils';
const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await axios(url);
        const data = await res.data;
        setData(paginate(data));
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { loading, data };
};
