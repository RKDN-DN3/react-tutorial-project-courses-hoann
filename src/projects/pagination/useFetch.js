import { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

const createGroups = (arr, numGroups) => {
    const perGroup = Math.ceil(arr.length / numGroups);
    return new Array(perGroup).fill('').map((_, i) => arr.slice(i * numGroups, (i + 1) * numGroups));
};

export const useFetch = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const res = await axios(url);
        const data = await res.data;
        setData(createGroups(data, 12));
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { loading, data };
};
